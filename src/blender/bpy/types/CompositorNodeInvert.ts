import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeInvert
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeInvert.html
 */
export class CompositorNodeInvert {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False
     */
    public get invert_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_alpha`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get invert_rgb(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_rgb`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set invert_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_alpha`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set invert_rgb(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_rgb`, value)
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
