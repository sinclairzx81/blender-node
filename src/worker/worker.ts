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

import { parentPort, workerData } from 'worker_threads'
import { Protocol }               from './protocol'
import { BlenderProcess }         from './process'

// ----------------------------------------
// Host Process
// ----------------------------------------

const blender = new BlenderProcess()

// ----------------------------------------
// shared state
// ----------------------------------------

const barrier = workerData.barrier as Int32Array
const length  = workerData.length  as Uint32Array
const success = workerData.success as Uint8Array
const buffer  = workerData.buffer  as Uint8Array

// ----------------------------------------
// messaging
// ----------------------------------------

parentPort!.on('message', async (protocol: Protocol) => {
    switch (protocol.type) {
        case 'execute': {
            try {
                const result = await blender.execute(protocol.input)
                const output = Buffer.from(result)
                success.set([1], 0)
                length.set([output.length], 0)
                buffer.set(output)
            } catch (error) {
                const output = Buffer.from(error)
                success.set([0], 0)
                length.set([output.length], 0)
                buffer.set(output)
            }
            Atomics.store(barrier, 0, 1)
            Atomics.notify(barrier!, 0, 1)
            break
        }
        case 'dispose': {
            blender.dispose()
            process.exit(1)
        }
    }
})