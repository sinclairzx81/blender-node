import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocketInterface } from './NodeSocketInterface'
import { NodeSocketInterfaceStandard } from './NodeSocketInterfaceStandard'

/**
 * NodeSocketInterfaceColor
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterfaceColor.html
 */
export class NodeSocketInterfaceColor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Input value used for unconnected socket
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get default_value(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.default_value`, 'number', 4)
    }

    /**
     * Input value used for unconnected socket
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set default_value(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.default_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
