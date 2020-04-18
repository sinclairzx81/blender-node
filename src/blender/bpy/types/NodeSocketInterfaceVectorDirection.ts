import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocketInterface } from './NodeSocketInterface'
import { NodeSocketInterfaceStandard } from './NodeSocketInterfaceStandard'

/**
 * NodeSocketInterfaceVectorDirection
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterfaceVectorDirection.html
 */
export class NodeSocketInterfaceVectorDirection {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Input value used for unconnected socket
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get default_value(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.default_value`, 'number', 3)
    }

    /**
     * Maximum value
     * @desc float in [-inf, inf], default 0.0
     */
    public get max_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max_value`)
    }

    /**
     * Minimum value
     * @desc float in [-inf, inf], default 0.0
     */
    public get min_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min_value`)
    }

    /**
     * Input value used for unconnected socket
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set default_value(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.default_value`, value)
    }

    /**
     * Maximum value
     * @desc float in [-inf, inf], default 0.0
     */
    public set max_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max_value`, value)
    }

    /**
     * Minimum value
     * @desc float in [-inf, inf], default 0.0
     */
    public set min_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.min_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
