import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocket } from './NodeSocket'
import { NodeSocketStandard } from './NodeSocketStandard'

/**
 * NodeSocketString
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketString.html
 */
export class NodeSocketString {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of node links from or to this socket. Warning: takes O(len(nodetree.links)) time.(readonly)
     * @desc void
     */
    public get links(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.links`)
    }

    /**
     * Input value used for unconnected socket
     * @desc string, default '', (never None)
     */
    public get default_value(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.default_value`)
    }

    /**
     * Input value used for unconnected socket
     * @desc string, default '', (never None)
     */
    public set default_value(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.default_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
