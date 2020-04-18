import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NodeTree } from './NodeTree'

/**
 * BlendDataNodeTrees
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataNodeTrees.html
 */
export class BlendDataNodeTrees {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new node tree to the main database
     * @desc NodeTree
     */
    public new(options: { name?: string, type?: 'DUMMY' }): NodeTree {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, NodeTree)
    }

    /**
     * Remove a node tree from the current blendfile
     * @desc void
     */
    public remove(options: { tree?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
