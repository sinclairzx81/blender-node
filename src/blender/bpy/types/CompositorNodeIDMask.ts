import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeIDMask
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeIDMask.html
 */
export class CompositorNodeIDMask {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Pass index number to convert to alpha
     * @desc int in [0, 32767], default 0
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * Apply an anti-aliasing filter to the mask
     * @desc boolean, default False
     */
    public get use_antialiasing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_antialiasing`)
    }

    /**
     * Pass index number to convert to alpha
     * @desc int in [0, 32767], default 0
     */
    public set index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.index`, value)
    }

    /**
     * Apply an anti-aliasing filter to the mask
     * @desc boolean, default False
     */
    public set use_antialiasing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_antialiasing`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
