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

import { Worker }           from 'worker_threads'
import { Execute, Dispose } from './protocol'
import { join, dirname }    from 'path'

const workerPath = join(dirname(__filename), './worker.js')

export class BlenderInterop {
    private readonly barrier = new Int32Array(new SharedArrayBuffer(4))
    private readonly length  = new Uint32Array(new SharedArrayBuffer(4))
    private readonly success = new Uint8Array(new SharedArrayBuffer(1))
    private readonly buffer  = new Uint8Array(new SharedArrayBuffer(2_000_000))
    private readonly worker  = new Worker(workerPath, {
        workerData: {
            barrier: this.barrier,
            length:  this.length,
            success: this.success,
            buffer:  this.buffer
        }
    })

    public execute(input: string): string {
        this.worker.postMessage({ type: 'execute', input } as Execute)
        Atomics.wait(this.barrier, 0, 0)
        Atomics.store(this.barrier, 0, 0)
        const output = Buffer.from(this.buffer.buffer, 0, this.length[0])
        if(this.success[0] === 1) {
            return output.toString()
        } else {
            throw new Error(output.toString())
        }
    }

    public dispose() {
        this.worker.postMessage({ type: 'dispose' } as Dispose)
    }
}
