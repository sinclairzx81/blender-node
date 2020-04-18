import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocket } from './NodeSocket'
import { NodeSocketStandard } from './NodeSocketStandard'

/**
 * NodeSocketIntUnsigned
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketIntUnsigned.html
 */
export class NodeSocketIntUnsigned {

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
     * @desc int in [0, inf], default 0
     */
    public get default_value(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_value`)
    }

    /**
     * Input value used for unconnected socket
     * @desc int in [0, inf], default 0
     */
    public set default_value(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
