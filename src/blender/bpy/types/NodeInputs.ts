import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NodeSocket } from './NodeSocket'

/**
 * NodeInputs
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeInputs.html
 */
export class NodeInputs {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a socket to this node
     * @desc NodeSocket
     */
    public new(options: { type?: string, name?: string, identifier?: string }): NodeSocket {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, NodeSocket)
    }

    /**
     * Remove a socket from this node
     * @desc void
     */
    public remove(options: { socket?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all sockets from this node
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    /**
     * Move a socket to another position
     * @desc void
     */
    public move(options: { from_index?: number, to_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
