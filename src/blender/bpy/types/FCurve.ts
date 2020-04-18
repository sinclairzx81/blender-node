import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Driver } from './Driver'
import { FCurveKeyframePoints } from './FCurveKeyframePoints'
import { Keyframe } from './Keyframe'
import { FCurveModifiers } from './FCurveModifiers'
import { FModifier } from './FModifier'
import { FCurveSample } from './FCurveSample'
import { ActionGroup } from './ActionGroup'

/**
 * FCurve
 * 
 * https://docs.blender.org/api/current/bpy.types.FCurve.html
 */
export class FCurve {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Channel Driver (only set for Driver F-Curves)
     * @desc Driver, (readonly)
     */
    public get driver(): Driver {
        return PythonInterop.getClass(this.interop, `${this.accessor}.driver`, Driver)
    }

    /**
     * True if the curve contributes no animation due to lack of keyframes or useful modifiers, and should be deleted
     * @desc boolean, default False, (readonly)
     */
    public get is_empty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_empty`)
    }

    /**
     * User-editable keyframes
     * @desc FCurveKeyframePoints bpy_prop_collection of Keyframe, (readonly)
     */
    public get keyframe_points(): BlenderCollection<Keyframe> & Indexable<Keyframe> & FCurveKeyframePoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.keyframe_points`, FCurveKeyframePoints, Keyframe)
    }

    /**
     * Modifiers affecting the shape of the F-Curve
     * @desc FCurveModifiers bpy_prop_collection of FModifier, (readonly)
     */
    public get modifiers(): BlenderCollection<FModifier> & Indexable<FModifier> & FCurveModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.modifiers`, FCurveModifiers, FModifier)
    }

    /**
     * Sampled animation data
     * @desc bpy_prop_collection of FCurveSample, (readonly)
     */
    public get sampled_points(): BlenderCollection<FCurveSample> & Indexable<FCurveSample> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.sampled_points`, FCurveSample)
    }

    /**
     * Index to the specific property affected by F-Curve if applicable
     * @desc int in [-inf, inf], default 0
     */
    public get array_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.array_index`)
    }

    /**
     * Algorithm used to compute automatic handles
     * @desc enum in ['NONE', 'CONT_ACCEL'], default 'NONE'
     */
    public get auto_smoothing(): 'NONE' | 'CONT_ACCEL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.auto_smoothing`)
    }

    /**
     * Color of the F-Curve in the Graph Editor
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Method used to determine color of F-Curve in Graph Editor
     * @desc enum in ['AUTO_RAINBOW', 'AUTO_RGB', 'AUTO_YRGB', 'CUSTOM'], default 'AUTO_RAINBOW'
     */
    public get color_mode(): 'AUTO_RAINBOW' | 'AUTO_RGB' | 'AUTO_YRGB' | 'CUSTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_mode`)
    }

    /**
     * RNA Path to property affected by F-Curve
     * @desc string, default '', (never None)
     */
    public get data_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.data_path`)
    }

    /**
     * Method used for evaluating value of F-Curve outside first and last keyframes
     * @desc enum in ['CONSTANT', 'LINEAR'], default 'CONSTANT'
     */
    public get extrapolation(): 'CONSTANT' | 'LINEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.extrapolation`)
    }

    /**
     * Action Group that this F-Curve belongs to
     * @desc ActionGroup
     */
    public get group(): ActionGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.group`, ActionGroup)
    }

    /**
     * F-Curve and its keyframes are hidden in the Graph Editor graphs
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * False when F-Curve could not be evaluated in past, so should be skipped when evaluating
     * @desc boolean, default False
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * F-Curve’s settings cannot be edited
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Disable F-Curve Modifier evaluation
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * F-Curve is selected for editing
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Index to the specific property affected by F-Curve if applicable
     * @desc int in [-inf, inf], default 0
     */
    public set array_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.array_index`, value)
    }

    /**
     * Algorithm used to compute automatic handles
     * @desc enum in ['NONE', 'CONT_ACCEL'], default 'NONE'
     */
    public set auto_smoothing(value: 'NONE' | 'CONT_ACCEL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.auto_smoothing`, value)
    }

    /**
     * Color of the F-Curve in the Graph Editor
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Method used to determine color of F-Curve in Graph Editor
     * @desc enum in ['AUTO_RAINBOW', 'AUTO_RGB', 'AUTO_YRGB', 'CUSTOM'], default 'AUTO_RAINBOW'
     */
    public set color_mode(value: 'AUTO_RAINBOW' | 'AUTO_RGB' | 'AUTO_YRGB' | 'CUSTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_mode`, value)
    }

    /**
     * RNA Path to property affected by F-Curve
     * @desc string, default '', (never None)
     */
    public set data_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.data_path`, value)
    }

    /**
     * Method used for evaluating value of F-Curve outside first and last keyframes
     * @desc enum in ['CONSTANT', 'LINEAR'], default 'CONSTANT'
     */
    public set extrapolation(value: 'CONSTANT' | 'LINEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.extrapolation`, value)
    }

    /**
     * Action Group that this F-Curve belongs to
     * @desc ActionGroup
     */
    public set group(value: ActionGroup) {
        PythonInterop.setClass(this.interop, `${this.accessor}.group`, value)
    }

    /**
     * F-Curve and its keyframes are hidden in the Graph Editor graphs
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * False when F-Curve could not be evaluated in past, so should be skipped when evaluating
     * @desc boolean, default False
     */
    public set is_valid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_valid`, value)
    }

    /**
     * F-Curve’s settings cannot be edited
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Disable F-Curve Modifier evaluation
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * F-Curve is selected for editing
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Evaluate F-Curve
     * @desc float in [-inf, inf]
     */
    public evaluate(options: { frame?: number }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.evaluate`, options)
    }

    /**
     * Ensure keyframes are sorted in chronological order and handles are set correctly
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * Get the time extents for F-Curve
     * @desc float array of 2 items in [-inf, inf]
     */
    public range(): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.range`, {})
    }

    /**
     * Update FCurve flags set automatically from affected property (currently, integer/discrete flags set when the property is not a float)
     * @desc void
     */
    public update_autoflags(options: { data?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_autoflags`, options)
    }

    /**
     * Convert current FCurve from keyframes to sample points, if necessary
     * @desc void
     */
    public convert_to_samples(options: { start?: number, end?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convert_to_samples`, options)
    }

    /**
     * Convert current FCurve from sample points to keyframes (linear interpolation), if necessary
     * @desc void
     */
    public convert_to_keyframes(options: { start?: number, end?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convert_to_keyframes`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
