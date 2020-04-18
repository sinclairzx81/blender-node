import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NodeLink } from './NodeLink'

/**
 * NodeLinks
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeLinks.html
 */
export class NodeLinks {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a node link to this node tree
     * @desc NodeLink
     */
    public new(options: { input?: unknown, output?: unknown, verify_limits?: boolean }): NodeLink {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, NodeLink)
    }

    /**
     * remove a node link from the node tree
     * @desc void
     */
    public remove(options: { link?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * remove all node links from the node tree
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
