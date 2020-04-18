import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { NodeSocket } from './NodeSocket'

/**
 * CompositorNodeOutputFileLayerSlots
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeOutputFileLayerSlots.html
 */
export class CompositorNodeOutputFileLayerSlots {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a file slot to this node
     * @desc NodeSocket
     */
    public new(options: { name?: string }): NodeSocket {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, NodeSocket)
    }

    /**
     * Remove a file slot from this node
     * @desc void
     */
    public remove(options: { socket?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all file slots from this node
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    /**
     * Move a file slot to another position
     * @desc void
     */
    public move(options: { from_index?: number, to_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
