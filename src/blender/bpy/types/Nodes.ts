import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Node } from './Node'

/**
 * Nodes
 * 
 * https://docs.blender.org/api/current/bpy.types.Nodes.html
 */
export class Nodes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active node in this tree
     * @desc Node
     */
    public get active(): Node {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, Node)
    }

    /**
     * Active node in this tree
     * @desc Node
     */
    public set active(value: Node) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a node to this node tree
     * @desc Node
     */
    public new(options: { type?: string }): Node {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Node)
    }

    /**
     * Remove a node from this node tree
     * @desc void
     */
    public remove(options: { node?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all nodes from this node tree
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
