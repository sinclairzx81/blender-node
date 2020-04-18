import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocket } from './NodeSocket'
import { NodeSocketStandard } from './NodeSocketStandard'

/**
 * NodeSocketVectorEuler
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketVectorEuler.html
 */
export class NodeSocketVectorEuler {

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
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get default_value(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.default_value`, 'number', 3)
    }

    /**
     * Input value used for unconnected socket
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set default_value(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.default_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
