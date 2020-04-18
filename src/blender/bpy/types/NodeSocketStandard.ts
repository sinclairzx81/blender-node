import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocket } from './NodeSocket'

/**
 * NodeSocketStandard
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketStandard.html
 */
export class NodeSocketStandard {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of node links from or to this socket. Warning: takes O(len(nodetree.links)) time.(readonly)
     * @desc void
     */
    public get links(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.links`)
    }

    /**
     * Draw socket
     * @desc void
     */
    public draw(options: { layout?: unknown, node?: unknown, text?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, options)
    }

    /**
     * Color of the socket icon
     * @desc float array of 4 items in [0, 1]
     */
    public draw_color(options: { node?: unknown }): [number, number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.draw_color`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
