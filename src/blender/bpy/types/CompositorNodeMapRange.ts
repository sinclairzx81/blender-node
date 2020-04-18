import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeMapRange
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeMapRange.html
 */
export class CompositorNodeMapRange {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Clamp result of the node to 0..1 range
     * @desc boolean, default False
     */
    public get use_clamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clamp`)
    }

    /**
     * Clamp result of the node to 0..1 range
     * @desc boolean, default False
     */
    public set use_clamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clamp`, value)
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
