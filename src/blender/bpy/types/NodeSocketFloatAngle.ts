import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocket } from './NodeSocket'
import { NodeSocketStandard } from './NodeSocketStandard'

/**
 * NodeSocketFloatAngle
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketFloatAngle.html
 */
export class NodeSocketFloatAngle {

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
     * @desc float in [-inf, inf], default 0.0
     */
    public get default_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_value`)
    }

    /**
     * Input value used for unconnected socket
     * @desc float in [-inf, inf], default 0.0
     */
    public set default_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
