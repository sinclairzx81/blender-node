import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CurveMapping } from './CurveMapping'

/**
 * GPencilInterpolateSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilInterpolateSettings.html
 */
export class GPencilInterpolateSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom curve to control ‘sequence’ interpolation between Grease Pencil frames
     * @desc CurveMapping, (readonly)
     */
    public get interpolation_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.interpolation_curve`, CurveMapping)
    }

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
     * Which ends of the segment between the preceding and following grease pencil frames easing interpolation is applied to
     * @desc enum in ['AUTO', 'EASE_IN', 'EASE_OUT', 'EASE_IN_OUT'], default 'AUTO'
     */
    public get easing(): 'AUTO' | 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_OUT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.easing`)
    }

    /**
     * Interpolate all layers, not only active
     * @desc boolean, default False
     */
    public get interpolate_all_layers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.interpolate_all_layers`)
    }

    /**
     * Interpolate only selected strokes in the original frame
     * @desc boolean, default False
     */
    public get interpolate_selected_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.interpolate_selected_only`)
    }

    /**
     * Time between bounces for elastic easing
     * @desc float in [-inf, inf], default 0.0
     */
    public get period(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.period`)
    }

    /**
     * Interpolation method to use the next time ‘Interpolate Sequence’ is run
     * @desc enum in ['LINEAR', 'CUSTOM', 'SINE', 'QUAD', 'CUBIC', 'QUART', 'QUINT', 'EXPO', 'CIRC', 'BACK', 'BOUNCE', 'ELASTIC'], default 'LINEAR'
     */
    public get type(): 'LINEAR' | 'CUSTOM' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC' {
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
     * Which ends of the segment between the preceding and following grease pencil frames easing interpolation is applied to
     * @desc enum in ['AUTO', 'EASE_IN', 'EASE_OUT', 'EASE_IN_OUT'], default 'AUTO'
     */
    public set easing(value: 'AUTO' | 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_OUT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.easing`, value)
    }

    /**
     * Interpolate all layers, not only active
     * @desc boolean, default False
     */
    public set interpolate_all_layers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.interpolate_all_layers`, value)
    }

    /**
     * Interpolate only selected strokes in the original frame
     * @desc boolean, default False
     */
    public set interpolate_selected_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.interpolate_selected_only`, value)
    }

    /**
     * Time between bounces for elastic easing
     * @desc float in [-inf, inf], default 0.0
     */
    public set period(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.period`, value)
    }

    /**
     * Interpolation method to use the next time ‘Interpolate Sequence’ is run
     * @desc enum in ['LINEAR', 'CUSTOM', 'SINE', 'QUAD', 'CUBIC', 'QUART', 'QUINT', 'EXPO', 'CIRC', 'BACK', 'BOUNCE', 'ELASTIC'], default 'LINEAR'
     */
    public set type(value: 'LINEAR' | 'CUSTOM' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
