import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPencilSculptBrush } from './GPencilSculptBrush'
import { GPencilSculptGuide } from './GPencilSculptGuide'
import { CurveMapping } from './CurveMapping'

/**
 * GPencilSculptSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilSculptSettings.html
 */
export class GPencilSculptSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc GPencilSculptBrush, (readonly)
     */
    public get brush(): GPencilSculptBrush {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush`, GPencilSculptBrush)
    }

    /**
     * 
     * @desc GPencilSculptGuide, (readonly)
     */
    public get guide(): GPencilSculptGuide {
        return PythonInterop.getClass(this.interop, `${this.accessor}.guide`, GPencilSculptGuide)
    }

    /**
     * Custom curve to control falloff of brush effect by Grease Pencil frames
     * @desc CurveMapping, (readonly)
     */
    public get multiframe_falloff_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.multiframe_falloff_curve`, CurveMapping)
    }

    /**
     * Custom curve to control primitive thickness
     * @desc CurveMapping, (readonly)
     */
    public get thickness_primitive_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.thickness_primitive_curve`, CurveMapping)
    }

    /**
     * Threshold for stroke intersections
     * @desc float in [0, 10], default 0.1
     */
    public get intersection_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.intersection_threshold`)
    }

    /**
     * 
     * @desc enum in ['VIEW', 'AXIS_Y', 'AXIS_X', 'AXIS_Z', 'CURSOR'], default 'VIEW'
     */
    public get lock_axis(): 'VIEW' | 'AXIS_Y' | 'AXIS_X' | 'AXIS_Z' | 'CURSOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.lock_axis`)
    }

    /**
     * 
     * @desc enum in ['SMOOTH', 'THICKNESS', 'STRENGTH', 'RANDOMIZE', 'GRAB', 'PUSH', 'TWIST', 'PINCH', 'CLONE'], default 'SMOOTH'
     */
    public get sculpt_tool(): 'SMOOTH' | 'THICKNESS' | 'STRENGTH' | 'RANDOMIZE' | 'GRAB' | 'PUSH' | 'TWIST' | 'PINCH' | 'CLONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sculpt_tool`)
    }

    /**
     * The brush affects the position of the point
     * @desc boolean, default False
     */
    public get use_edit_position(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_position`)
    }

    /**
     * The brush affects the color strength of the point
     * @desc boolean, default False
     */
    public get use_edit_strength(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_strength`)
    }

    /**
     * The brush affects the thickness of the point
     * @desc boolean, default False
     */
    public get use_edit_thickness(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_thickness`)
    }

    /**
     * The brush affects the UV rotation of the point
     * @desc boolean, default False
     */
    public get use_edit_uv(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_uv`)
    }

    /**
     * Use falloff effect when edit in multiframe mode to compute brush effect by frame
     * @desc boolean, default False
     */
    public get use_multiframe_falloff(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiframe_falloff`)
    }

    /**
     * Use curve to define primitive stroke thickness
     * @desc boolean, default False
     */
    public get use_thickness_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_thickness_curve`)
    }

    /**
     * Tool for weight painting
     * @desc enum in ['WEIGHT'], default 'WEIGHT'
     */
    public get weight_tool(): 'WEIGHT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.weight_tool`)
    }

    /**
     * Threshold for stroke intersections
     * @desc float in [0, 10], default 0.1
     */
    public set intersection_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.intersection_threshold`, value)
    }

    /**
     * 
     * @desc enum in ['VIEW', 'AXIS_Y', 'AXIS_X', 'AXIS_Z', 'CURSOR'], default 'VIEW'
     */
    public set lock_axis(value: 'VIEW' | 'AXIS_Y' | 'AXIS_X' | 'AXIS_Z' | 'CURSOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.lock_axis`, value)
    }

    /**
     * 
     * @desc enum in ['SMOOTH', 'THICKNESS', 'STRENGTH', 'RANDOMIZE', 'GRAB', 'PUSH', 'TWIST', 'PINCH', 'CLONE'], default 'SMOOTH'
     */
    public set sculpt_tool(value: 'SMOOTH' | 'THICKNESS' | 'STRENGTH' | 'RANDOMIZE' | 'GRAB' | 'PUSH' | 'TWIST' | 'PINCH' | 'CLONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sculpt_tool`, value)
    }

    /**
     * The brush affects the position of the point
     * @desc boolean, default False
     */
    public set use_edit_position(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_position`, value)
    }

    /**
     * The brush affects the color strength of the point
     * @desc boolean, default False
     */
    public set use_edit_strength(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_strength`, value)
    }

    /**
     * The brush affects the thickness of the point
     * @desc boolean, default False
     */
    public set use_edit_thickness(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_thickness`, value)
    }

    /**
     * The brush affects the UV rotation of the point
     * @desc boolean, default False
     */
    public set use_edit_uv(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_uv`, value)
    }

    /**
     * Use falloff effect when edit in multiframe mode to compute brush effect by frame
     * @desc boolean, default False
     */
    public set use_multiframe_falloff(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiframe_falloff`, value)
    }

    /**
     * Use curve to define primitive stroke thickness
     * @desc boolean, default False
     */
    public set use_thickness_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_thickness_curve`, value)
    }

    /**
     * Tool for weight painting
     * @desc enum in ['WEIGHT'], default 'WEIGHT'
     */
    public set weight_tool(value: 'WEIGHT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.weight_tool`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
