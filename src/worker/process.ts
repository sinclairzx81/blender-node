/*--------------------------------------------------------------------------

blender-node

The MIT License (MIT)

Copyright (c) 2020 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

import * as child_process from 'child_process'

type Resolve = (value: string) => void
type Reject  = (error: string) => void
type Awaiter = [Resolve, Reject]

export class BlenderProcess {
    private readonly newline = Buffer.from('\n')
    private readonly awaiters: Awaiter[] = [[() => {}, () => {}]]
    private readonly buffered: Buffer [] = []
    private readonly process: child_process.ChildProcessWithoutNullStreams
    
    constructor() {
        this.process = child_process.spawn('blender', [
            '--python-console',
            '--background'
        ], {
            cwd: process.cwd(),
            stdio: 'pipe'
        })
        this.process.stdout.on('data', buffer => this.onBuffer(buffer))
        this.process.stderr.on('data', buffer => this.onError(buffer))
    }
    
    /** Executes a single line of the repl */
    public execute(input: string): Promise<string> {
        const buffer = Buffer.from(input.replace(/\n/g, '\\n').replace(/\r/g, '\\r'))
        return new Promise((resolve, reject) => {
            this.awaiters.push([resolve, reject])
            const output = Buffer.concat([buffer, this.newline])
            this.process.stdin.write(output)
        })
    }

    /** Disposes of the underlying blender process. */
    public dispose() {
        try {
            this.process.kill()
        } catch (error) { }
    }

    /** Returns buffer indices that range outside of python repl. */
    private delimiter(buffer: Buffer): [number, number] {
        for (let i = 0; i < buffer.length; i++) {
            // >>>
            if (i <= buffer.length - 4 &&
                buffer[i + 0] === 0x3e &&
                buffer[i + 1] === 0x3e &&
                buffer[i + 2] === 0x3e &&
                buffer[i + 3] === 0x20) {
                // omit preceeding newline | return
                if (i > 2 &&
                    buffer[i - 2] === 0x0d && // \r
                    buffer[i - 1] === 0x0a) { // \n
                    return [i - 2, i + 4]
                } else if (i > 1 &&
                    buffer[i - 1] === 0x0a) {  // \n
                    return [i - 1, i + 4]
                } else {
                    return [i, i + 4]
                }
            }
            // ...
            if (i <= buffer.length - 4 &&
                buffer[i + 0] === 0x2e &&
                buffer[i + 1] === 0x2e &&
                buffer[i + 2] === 0x2e &&
                buffer[i + 3] === 0x20) {
                // omit preceeding newline | return
                if (i > 2 &&
                    buffer[i - 2] === 0x0d && // \r
                    buffer[i - 1] === 0x0a) { // \n
                    return [i - 2, i + 4]
                } else if (i > 1 &&
                    buffer[i - 1] === 0x0a) {  // \n
                    return [i - 1, i + 4]
                } else {
                    return [i, i + 4]
                }
            }
        }
        return [-1, -1]
    }
    
    /** Recursively parses the buffer. */
    private parse(buffer: Buffer) {
        const [start, end] = this.delimiter(buffer)
        if (start === -1) {
            this.buffered.push(buffer)
        } else {
            const prev = buffer.slice(0, start)
            const next = buffer.slice(end)
            this.buffered.push(prev)
            const [resolve, _] = this.awaiters.shift()!
            const output  = Buffer.concat(this.buffered)
            resolve(output.toString('utf-8'))
            while(this.buffered.length > 0) { 
                this.buffered.shift()
            }   
            this.parse(next)
        }
    }

    private onBuffer(buffer: Buffer) {
        this.parse(buffer)
    }

    private onError(buffer: Buffer) {
        const [_, reject] = this.awaiters[0]
        reject(buffer.toString())
    }
}
