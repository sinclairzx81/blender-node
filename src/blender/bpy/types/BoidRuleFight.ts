import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { BoidRule } from './BoidRule'

/**
 * BoidRuleFight
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRuleFight.html
 */
export class BoidRuleFight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Attack boids at max this distance
     * @desc float in [0, 100], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Flee to this distance
     * @desc float in [0, 100], default 0.0
     */
    public get flee_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.flee_distance`)
    }

    /**
     * Attack boids at max this distance
     * @desc float in [0, 100], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Flee to this distance
     * @desc float in [0, 100], default 0.0
     */
    public set flee_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.flee_distance`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
