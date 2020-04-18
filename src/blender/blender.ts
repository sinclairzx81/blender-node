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

import { BlenderInterop }     from '../worker/interop'
import { Context, BlendData } from './bpy/types/index'
import { Ops }                from './bpy/ops/index'

export class Blender {
    private interop: BlenderInterop

    constructor() {
        this.interop = new BlenderInterop()
        this.interop.execute('import bpy')
    }

    /** https://docs.blender.org/api/current/bpy.ops.html */
    public get ops() {
        return new Ops(this.interop, `bpy.ops`)
    }

    /** https://docs.blender.org/api/current/bpy.context.html */
    public get context() {
        return new Context(this.interop, `bpy.context`)
    }

    /** https://docs.blender.org/api/current/bpy.types.BlendData.html */
    public get data() {
        return new BlendData(this.interop, `bpy.data`)
    }

    /** Executes a single line of the Blender REPL */
    public execute(command: string): string {
        return this.interop.execute(command)
    }

    /** Disposes of this blender instance. */
    public dispose() {
        this.interop.dispose()
    }
}
