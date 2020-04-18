import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeZcombine
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeZcombine.html
 */
export class CompositorNodeZcombine {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Take Alpha channel into account when doing the Z operation
     * @desc boolean, default False
     */
    public get use_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha`)
    }

    /**
     * Anti-alias the z-buffer to try to avoid artifacts, mostly useful for Blender renders
     * @desc boolean, default False
     */
    public get use_antialias_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_antialias_z`)
    }

    /**
     * Take Alpha channel into account when doing the Z operation
     * @desc boolean, default False
     */
    public set use_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha`, value)
    }

    /**
     * Anti-alias the z-buffer to try to avoid artifacts, mostly useful for Blender renders
     * @desc boolean, default False
     */
    public set use_antialias_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_antialias_z`, value)
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
