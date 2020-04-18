import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NodeTree } from './NodeTree'

/**
 * NodeTreePath
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeTreePath.html
 */
export class NodeTreePath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Base node tree from context
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
