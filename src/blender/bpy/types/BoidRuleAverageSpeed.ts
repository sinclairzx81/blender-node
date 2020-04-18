import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { BoidRule } from './BoidRule'

/**
 * BoidRuleAverageSpeed
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRuleAverageSpeed.html
 */
export class BoidRuleAverageSpeed {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * How much velocity’s z-component is kept constant
     * @desc float in [0, 1], default 0.0
     */
    public get level(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.level`)
    }

    /**
     * Percentage of maximum speed
     * @desc float in [0, 1], default 0.0
     */
    public get speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.speed`)
    }

    /**
     * How fast velocity’s direction is randomized
     * @desc float in [0, 1], default 0.0
     */
    public get wander(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wander`)
    }

    /**
     * How much velocity’s z-component is kept constant
     * @desc float in [0, 1], default 0.0
     */
    public set level(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.level`, value)
    }

    /**
     * Percentage of maximum speed
     * @desc float in [0, 1], default 0.0
     */
    public set speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.speed`, value)
    }

    /**
     * How fast velocity’s direction is randomized
     * @desc float in [0, 1], default 0.0
     */
    public set wander(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wander`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
