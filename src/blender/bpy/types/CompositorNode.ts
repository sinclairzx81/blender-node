import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'

/**
 * CompositorNode
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNode.html
 */
export class CompositorNode {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Tag the node for compositor update
     * @desc void
     */
    public tag_need_exec(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag_need_exec`, {})
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
