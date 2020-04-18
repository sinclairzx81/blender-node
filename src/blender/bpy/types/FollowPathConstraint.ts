import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * FollowPathConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.FollowPathConstraint.html
 */
export class FollowPathConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Axis that points forward along the path
     * @desc enum in ['FORWARD_X', 'FORWARD_Y', 'FORWARD_Z', 'TRACK_NEGATIVE_X', 'TRACK_NEGATIVE_Y', 'TRACK_NEGATIVE_Z'], default 'FORWARD_X'
     */
    public get forward_axis(): 'FORWARD_X' | 'FORWARD_Y' | 'FORWARD_Z' | 'TRACK_NEGATIVE_X' | 'TRACK_NEGATIVE_Y' | 'TRACK_NEGATIVE_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.forward_axis`)
    }

    /**
     * Offset from the position corresponding to the time frame
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Percentage value defining target position along length of curve
     * @desc float in [0, 1], default 0.0
     */
    public get offset_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_factor`)
    }

    /**
     * Target Curve object
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Axis that points upward
     * @desc enum in ['UP_X', 'UP_Y', 'UP_Z'], default 'UP_X'
     */
    public get up_axis(): 'UP_X' | 'UP_Y' | 'UP_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.up_axis`)
    }

    /**
     * Object will follow the heading and banking of the curve
     * @desc boolean, default False
     */
    public get use_curve_follow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curve_follow`)
    }

    /**
     * Object is scaled by the curve radius
     * @desc boolean, default False
     */
    public get use_curve_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curve_radius`)
    }

    /**
     * Object will stay locked to a single point somewhere along the length of the curve regardless of time
     * @desc boolean, default False
     */
    public get use_fixed_location(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fixed_location`)
    }

    /**
     * Axis that points forward along the path
     * @desc enum in ['FORWARD_X', 'FORWARD_Y', 'FORWARD_Z', 'TRACK_NEGATIVE_X', 'TRACK_NEGATIVE_Y', 'TRACK_NEGATIVE_Z'], default 'FORWARD_X'
     */
    public set forward_axis(value: 'FORWARD_X' | 'FORWARD_Y' | 'FORWARD_Z' | 'TRACK_NEGATIVE_X' | 'TRACK_NEGATIVE_Y' | 'TRACK_NEGATIVE_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.forward_axis`, value)
    }

    /**
     * Offset from the position corresponding to the time frame
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Percentage value defining target position along length of curve
     * @desc float in [0, 1], default 0.0
     */
    public set offset_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_factor`, value)
    }

    /**
     * Target Curve object
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Axis that points upward
     * @desc enum in ['UP_X', 'UP_Y', 'UP_Z'], default 'UP_X'
     */
    public set up_axis(value: 'UP_X' | 'UP_Y' | 'UP_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.up_axis`, value)
    }

    /**
     * Object will follow the heading and banking of the curve
     * @desc boolean, default False
     */
    public set use_curve_follow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curve_follow`, value)
    }

    /**
     * Object is scaled by the curve radius
     * @desc boolean, default False
     */
    public set use_curve_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curve_radius`, value)
    }

    /**
     * Object will stay locked to a single point somewhere along the length of the curve regardless of time
     * @desc boolean, default False
     */
    public set use_fixed_location(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fixed_location`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
