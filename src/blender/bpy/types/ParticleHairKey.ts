import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * ParticleHairKey
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleHairKey.html
 */
export class ParticleHairKey {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Location of the hair key in object space
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * Location of the hair key in its local coordinate system, relative to the emitting face
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co_local(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co_local`, 'number', 3)
    }

    /**
     * Relative time of key over hair length
     * @desc float in [0, inf], default 0.0
     */
    public get time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time`)
    }

    /**
     * Weight for cloth simulation
     * @desc float in [0, 1], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Location of the hair key in object space
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Location of the hair key in its local coordinate system, relative to the emitting face
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co_local(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co_local`, value)
    }

    /**
     * Relative time of key over hair length
     * @desc float in [0, inf], default 0.0
     */
    public set time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time`, value)
    }

    /**
     * Weight for cloth simulation
     * @desc float in [0, 1], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    /**
     * Obtain hairkey location with particle and modifier data
     * @desc float array of 3 items in [-inf, inf]
     */
    public co_object(options: { object?: BlenderObject, modifier?: unknown, particle?: unknown }): [number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.co_object`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
