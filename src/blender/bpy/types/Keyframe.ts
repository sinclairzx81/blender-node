import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Keyframe
 * 
 * https://docs.blender.org/api/current/bpy.types.Keyframe.html
 */
export class Keyframe {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount to boost elastic bounces for ‘elastic’ easing
     * @desc float in [0, inf], default 0.0
     */
    public get amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.amplitude`)
    }

    /**
     * Amount of overshoot for ‘back’ easing
     * @desc float in [-inf, inf], default 0.0
     */
    public get back(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.back`)
    }

    /**
     * Coordinates of the control point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get co(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 2)
    }

    /**
     * Which ends of the segment between this and the next keyframe easing interpolation is applied to
     * @desc enum in ['AUTO', 'EASE_IN', 'EASE_OUT', 'EASE_IN_OUT'], default 'AUTO'
     */
    public get easing(): 'AUTO' | 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_OUT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.easing`)
    }

    /**
     * Coordinates of the left handle (before the control point)
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get handle_left(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_left`, 'number', 2)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'ALIGNED', 'VECTOR', 'AUTO', 'AUTO_CLAMPED'], default 'FREE'
     */
    public get handle_left_type(): 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_left_type`)
    }

    /**
     * Coordinates of the right handle (after the control point)
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get handle_right(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_right`, 'number', 2)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'ALIGNED', 'VECTOR', 'AUTO', 'AUTO_CLAMPED'], default 'FREE'
     */
    public get handle_right_type(): 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.handle_right_type`)
    }

    /**
     * Interpolation method to use for segment of the F-Curve from this Keyframe until the next Keyframe
     * @desc enum in ['CONSTANT', 'LINEAR', 'BEZIER', 'SINE', 'QUAD', 'CUBIC', 'QUART', 'QUINT', 'EXPO', 'CIRC', 'BACK', 'BOUNCE', 'ELASTIC'], default 'CONSTANT'
     */
    public get interpolation(): 'CONSTANT' | 'LINEAR' | 'BEZIER' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Time between bounces for elastic easing
     * @desc float in [-inf, inf], default 0.0
     */
    public get period(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.period`)
    }

    /**
     * Control point selection status
     * @desc boolean, default False
     */
    public get select_control_point(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_control_point`)
    }

    /**
     * Left handle selection status
     * @desc boolean, default False
     */
    public get select_left_handle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_left_handle`)
    }

    /**
     * Right handle selection status
     * @desc boolean, default False
     */
    public get select_right_handle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_right_handle`)
    }

    /**
     * Type of keyframe (for visual purposes only)
     * @desc enum in ['KEYFRAME', 'BREAKDOWN', 'MOVING_HOLD', 'EXTREME', 'JITTER'], default 'KEYFRAME'
     */
    public get type(): 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Amount to boost elastic bounces for ‘elastic’ easing
     * @desc float in [0, inf], default 0.0
     */
    public set amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.amplitude`, value)
    }

    /**
     * Amount of overshoot for ‘back’ easing
     * @desc float in [-inf, inf], default 0.0
     */
    public set back(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.back`, value)
    }

    /**
     * Coordinates of the control point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set co(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Which ends of the segment between this and the next keyframe easing interpolation is applied to
     * @desc enum in ['AUTO', 'EASE_IN', 'EASE_OUT', 'EASE_IN_OUT'], default 'AUTO'
     */
    public set easing(value: 'AUTO' | 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_OUT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.easing`, value)
    }

    /**
     * Coordinates of the left handle (before the control point)
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set handle_left(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_left`, value)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'ALIGNED', 'VECTOR', 'AUTO', 'AUTO_CLAMPED'], default 'FREE'
     */
    public set handle_left_type(value: 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_left_type`, value)
    }

    /**
     * Coordinates of the right handle (after the control point)
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set handle_right(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_right`, value)
    }

    /**
     * Handle types
     * @desc enum in ['FREE', 'ALIGNED', 'VECTOR', 'AUTO', 'AUTO_CLAMPED'], default 'FREE'
     */
    public set handle_right_type(value: 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.handle_right_type`, value)
    }

    /**
     * Interpolation method to use for segment of the F-Curve from this Keyframe until the next Keyframe
     * @desc enum in ['CONSTANT', 'LINEAR', 'BEZIER', 'SINE', 'QUAD', 'CUBIC', 'QUART', 'QUINT', 'EXPO', 'CIRC', 'BACK', 'BOUNCE', 'ELASTIC'], default 'CONSTANT'
     */
    public set interpolation(value: 'CONSTANT' | 'LINEAR' | 'BEZIER' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Time between bounces for elastic easing
     * @desc float in [-inf, inf], default 0.0
     */
    public set period(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.period`, value)
    }

    /**
     * Control point selection status
     * @desc boolean, default False
     */
    public set select_control_point(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_control_point`, value)
    }

    /**
     * Left handle selection status
     * @desc boolean, default False
     */
    public set select_left_handle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_left_handle`, value)
    }

    /**
     * Right handle selection status
     * @desc boolean, default False
     */
    public set select_right_handle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_right_handle`, value)
    }

    /**
     * Type of keyframe (for visual purposes only)
     * @desc enum in ['KEYFRAME', 'BREAKDOWN', 'MOVING_HOLD', 'EXTREME', 'JITTER'], default 'KEYFRAME'
     */
    public set type(value: 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
