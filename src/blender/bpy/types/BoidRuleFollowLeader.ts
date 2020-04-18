import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { BoidRule } from './BoidRule'
import { BlenderObject } from './BlenderObject'

/**
 * BoidRuleFollowLeader
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidRuleFollowLeader.html
 */
export class BoidRuleFollowLeader {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distance behind leader to follow
     * @desc float in [0, 100], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Follow this object instead of a boid
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * How many boids in a line
     * @desc int in [0, 100], default 0
     */
    public get queue_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.queue_count`)
    }

    /**
     * Follow leader in a line
     * @desc boolean, default False
     */
    public get use_line(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_line`)
    }

    /**
     * Distance behind leader to follow
     * @desc float in [0, 100], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Follow this object instead of a boid
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * How many boids in a line
     * @desc int in [0, 100], default 0
     */
    public set queue_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.queue_count`, value)
    }

    /**
     * Follow leader in a line
     * @desc boolean, default False
     */
    public set use_line(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_line`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
