import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { PropertyGroup } from './PropertyGroup'
import { NodeTree } from './NodeTree'

/**
 * CompositorNodeCustomGroup
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeCustomGroup.html
 */
export class CompositorNodeCustomGroup {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Interface socket data
     * @desc PropertyGroup, (readonly)
     */
    public get interface(): PropertyGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.interface`, PropertyGroup)
    }

    /**
     * 
     * @desc NodeTree
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * 
     * @desc NodeTree
     */
    public set node_tree(value: NodeTree) {
        PythonInterop.setClass(this.interop, `${this.accessor}.node_tree`, value)
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
