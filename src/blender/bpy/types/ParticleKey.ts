import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ParticleKey
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleKey.html
 */
export class ParticleKey {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Key angular velocity
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get angular_velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.angular_velocity`, 'number', 3)
    }

    /**
     * Key location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * Key rotation quaternion
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get rotation(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation`, 'number', 4)
    }

    /**
     * Time of key over the simulation
     * @desc float in [0, inf], default 0.0
     */
    public get time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time`)
    }

    /**
     * Key velocity
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.velocity`, 'number', 3)
    }

    /**
     * Key angular velocity
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set angular_velocity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.angular_velocity`, value)
    }

    /**
     * Key location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Key rotation quaternion
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set rotation(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Time of key over the simulation
     * @desc float in [0, inf], default 0.0
     */
    public set time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time`, value)
    }

    /**
     * Key velocity
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set velocity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.velocity`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
