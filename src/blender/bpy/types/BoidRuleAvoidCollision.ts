import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { BoidRule } from './BoidRule'

/**
 * BoidRuleAvoidCollision
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRuleAvoidCollision.html
 */
export class BoidRuleAvoidCollision {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Time to look ahead in seconds
     * @desc float in [0, 100], default 0.0
     */
    public get look_ahead(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.look_ahead`)
    }

    /**
     * Avoid collision with other boids
     * @desc boolean, default False
     */
    public get use_avoid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_avoid`)
    }

    /**
     * Avoid collision with deflector objects
     * @desc boolean, default False
     */
    public get use_avoid_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_avoid_collision`)
    }

    /**
     * Time to look ahead in seconds
     * @desc float in [0, 100], default 0.0
     */
    public set look_ahead(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.look_ahead`, value)
    }

    /**
     * Avoid collision with other boids
     * @desc boolean, default False
     */
    public set use_avoid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_avoid`, value)
    }

    /**
     * Avoid collision with deflector objects
     * @desc boolean, default False
     */
    public set use_avoid_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_avoid_collision`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
