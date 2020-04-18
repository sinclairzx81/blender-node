import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocketInterface } from './NodeSocketInterface'
import { NodeSocketInterfaceStandard } from './NodeSocketInterfaceStandard'

/**
 * NodeSocketInterfaceIntFactor
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterfaceIntFactor.html
 */
export class NodeSocketInterfaceIntFactor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Input value used for unconnected socket
     * @desc int in [0, inf], default 0
     */
    public get default_value(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_value`)
    }

    /**
     * Maximum value
     * @desc int in [-inf, inf], default 0
     */
    public get max_value(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_value`)
    }

    /**
     * Minimum value
     * @desc int in [-inf, inf], default 0
     */
    public get min_value(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_value`)
    }

    /**
     * Input value used for unconnected socket
     * @desc int in [0, inf], default 0
     */
    public set default_value(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_value`, value)
    }

    /**
     * Maximum value
     * @desc int in [-inf, inf], default 0
     */
    public set max_value(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_value`, value)
    }

    /**
     * Minimum value
     * @desc int in [-inf, inf], default 0
     */
    public set min_value(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
