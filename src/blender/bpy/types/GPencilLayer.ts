import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPencilFrame } from './GPencilFrame'
import { GPencilFrames } from './GPencilFrames'
import { BlenderObject } from './BlenderObject'

/**
 * GPencilLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilLayer.html
 */
export class GPencilLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Frame currently being displayed for this layer
     * @desc GPencilFrame, (readonly)
     */
    public get active_frame(): GPencilFrame {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_frame`, GPencilFrame)
    }

    /**
     * Sketches for this layer on different frames
     * @desc GPencilFrames bpy_prop_collection of GPencilFrame, (readonly)
     */
    public get frames(): BlenderCollection<GPencilFrame> & Indexable<GPencilFrame> & GPencilFrames {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.frames`, GPencilFrames, GPencilFrame)
    }

    /**
     * True when the layer parent object is set
     * @desc boolean, default False, (readonly)
     */
    public get is_parented(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_parented`)
    }

    /**
     * This is a special ruler layer
     * @desc boolean, default False, (readonly)
     */
    public get is_ruler(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_ruler`)
    }

    /**
     * Set annotation Visibility
     * @desc boolean, default False
     */
    public get annotation_hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.annotation_hide`)
    }

    /**
     * Base color for ghosts after the active frame
     * @desc float array of 3 items in [0, 1], default (0.25, 0.1, 1.0)
     */
    public get annotation_onion_after_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.annotation_onion_after_color`, 'number', 3)
    }

    /**
     * Maximum number of frames to show after current frame
     * @desc int in [-1, 120], default 0
     */
    public get annotation_onion_after_range(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.annotation_onion_after_range`)
    }

    /**
     * Base color for ghosts before the active frame
     * @desc float array of 3 items in [0, 1], default (0.302, 0.851, 0.302)
     */
    public get annotation_onion_before_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.annotation_onion_before_color`, 'number', 3)
    }

    /**
     * Maximum number of frames to show before current frame
     * @desc int in [-1, 120], default 0
     */
    public get annotation_onion_before_range(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.annotation_onion_before_range`)
    }

    /**
     * Blend mode
     * @desc enum in ['REGULAR', 'OVERLAY', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'], default 'REGULAR'
     */
    public get blend_mode(): 'REGULAR' | 'OVERLAY' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_mode`)
    }

    /**
     * Custom color for animation channel in Dopesheet
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get channel_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.channel_color`, 'number', 3)
    }

    /**
     * Color for all strokes in this layer
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Set layer Visibility
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Layer name
     * @desc string, default '', (never None)
     */
    public get info(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.info`)
    }

    /**
     * Thickness change to apply to current strokes (in pixels)
     * @desc int in [-300, 300], default 0
     */
    public get line_change(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.line_change`)
    }

    /**
     * Protect layer from further editing and/or frame changes
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Lock current frame displayed by layer
     * @desc boolean, default False
     */
    public get lock_frame(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_frame`)
    }

    /**
     * Avoids editing locked materials in the layer
     * @desc boolean, default False
     */
    public get lock_material(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_material`)
    }

    /**
     * Remove any pixel outside underlying layers drawing
     * @desc boolean, default False
     */
    public get mask_layer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mask_layer`)
    }

    /**
     * Parent inverse transformation matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_inverse(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_inverse`, 'number', 4, 4)
    }

    /**
     * Layer Opacity
     * @desc float in [0, 1], default 0.0
     */
    public get opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.opacity`)
    }

    /**
     * Parent Object
     * @desc Object
     */
    public get parent(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, BlenderObject)
    }

    /**
     * Name of parent bone in case of a bone parenting relation
     * @desc string, default '', (never None)
     */
    public get parent_bone(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.parent_bone`)
    }

    /**
     * Type of parent relation
     * @desc enum in ['OBJECT', 'ARMATURE', 'BONE'], default 'OBJECT'
     */
    public get parent_type(): 'OBJECT' | 'ARMATURE' | 'BONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.parent_type`)
    }

    /**
     * Index number for the “Layer Index” pass
     * @desc int in [0, 32767], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Layer is selected for editing in the Dope Sheet
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Make the layer draw in front of objects
     * @desc boolean, default False
     */
    public get show_in_front(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_in_front`)
    }

    /**
     * Draw the points which make up the strokes (for debugging purposes)
     * @desc boolean, default False
     */
    public get show_points(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_points`)
    }

    /**
     * Thickness of annotation strokes
     * @desc int in [1, 10], default 0
     */
    public get thickness(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.thickness`)
    }

    /**
     * Color for tinting stroke colors
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get tint_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tint_color`, 'number', 3)
    }

    /**
     * Factor of tinting color
     * @desc float in [0, 1], default 0.0
     */
    public get tint_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tint_factor`)
    }

    /**
     * Display annotation onion skins before and after the current frame
     * @desc boolean, default False
     */
    public get use_annotation_onion_skinning(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_annotation_onion_skinning`)
    }

    /**
     * Display onion skins before and after the current frame
     * @desc boolean, default False
     */
    public get use_onion_skinning(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_onion_skinning`)
    }

    /**
     * In Paint mode display only layers with keyframe in current frame
     * @desc boolean, default False
     */
    public get use_solo_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_solo_mode`)
    }

    /**
     * Only include Layer in this View Layer render output (leave blank to include always)
     * @desc string, default '', (never None)
     */
    public get viewlayer_render(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.viewlayer_render`)
    }

    /**
     * Set annotation Visibility
     * @desc boolean, default False
     */
    public set annotation_hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.annotation_hide`, value)
    }

    /**
     * Base color for ghosts after the active frame
     * @desc float array of 3 items in [0, 1], default (0.25, 0.1, 1.0)
     */
    public set annotation_onion_after_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.annotation_onion_after_color`, value)
    }

    /**
     * Maximum number of frames to show after current frame
     * @desc int in [-1, 120], default 0
     */
    public set annotation_onion_after_range(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.annotation_onion_after_range`, value)
    }

    /**
     * Base color for ghosts before the active frame
     * @desc float array of 3 items in [0, 1], default (0.302, 0.851, 0.302)
     */
    public set annotation_onion_before_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.annotation_onion_before_color`, value)
    }

    /**
     * Maximum number of frames to show before current frame
     * @desc int in [-1, 120], default 0
     */
    public set annotation_onion_before_range(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.annotation_onion_before_range`, value)
    }

    /**
     * Blend mode
     * @desc enum in ['REGULAR', 'OVERLAY', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'], default 'REGULAR'
     */
    public set blend_mode(value: 'REGULAR' | 'OVERLAY' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_mode`, value)
    }

    /**
     * Custom color for animation channel in Dopesheet
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set channel_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.channel_color`, value)
    }

    /**
     * Color for all strokes in this layer
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Set layer Visibility
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Layer name
     * @desc string, default '', (never None)
     */
    public set info(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.info`, value)
    }

    /**
     * Thickness change to apply to current strokes (in pixels)
     * @desc int in [-300, 300], default 0
     */
    public set line_change(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.line_change`, value)
    }

    /**
     * Protect layer from further editing and/or frame changes
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Lock current frame displayed by layer
     * @desc boolean, default False
     */
    public set lock_frame(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_frame`, value)
    }

    /**
     * Avoids editing locked materials in the layer
     * @desc boolean, default False
     */
    public set lock_material(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_material`, value)
    }

    /**
     * Remove any pixel outside underlying layers drawing
     * @desc boolean, default False
     */
    public set mask_layer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mask_layer`, value)
    }

    /**
     * Parent inverse transformation matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_inverse(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_inverse`, value)
    }

    /**
     * Layer Opacity
     * @desc float in [0, 1], default 0.0
     */
    public set opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.opacity`, value)
    }

    /**
     * Parent Object
     * @desc Object
     */
    public set parent(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.parent`, value)
    }

    /**
     * Name of parent bone in case of a bone parenting relation
     * @desc string, default '', (never None)
     */
    public set parent_bone(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.parent_bone`, value)
    }

    /**
     * Type of parent relation
     * @desc enum in ['OBJECT', 'ARMATURE', 'BONE'], default 'OBJECT'
     */
    public set parent_type(value: 'OBJECT' | 'ARMATURE' | 'BONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.parent_type`, value)
    }

    /**
     * Index number for the “Layer Index” pass
     * @desc int in [0, 32767], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Layer is selected for editing in the Dope Sheet
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Make the layer draw in front of objects
     * @desc boolean, default False
     */
    public set show_in_front(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_in_front`, value)
    }

    /**
     * Draw the points which make up the strokes (for debugging purposes)
     * @desc boolean, default False
     */
    public set show_points(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_points`, value)
    }

    /**
     * Thickness of annotation strokes
     * @desc int in [1, 10], default 0
     */
    public set thickness(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.thickness`, value)
    }

    /**
     * Color for tinting stroke colors
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set tint_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tint_color`, value)
    }

    /**
     * Factor of tinting color
     * @desc float in [0, 1], default 0.0
     */
    public set tint_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tint_factor`, value)
    }

    /**
     * Display annotation onion skins before and after the current frame
     * @desc boolean, default False
     */
    public set use_annotation_onion_skinning(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_annotation_onion_skinning`, value)
    }

    /**
     * Display onion skins before and after the current frame
     * @desc boolean, default False
     */
    public set use_onion_skinning(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_onion_skinning`, value)
    }

    /**
     * In Paint mode display only layers with keyframe in current frame
     * @desc boolean, default False
     */
    public set use_solo_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_solo_mode`, value)
    }

    /**
     * Only include Layer in this View Layer render output (leave blank to include always)
     * @desc string, default '', (never None)
     */
    public set viewlayer_render(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.viewlayer_render`, value)
    }

    /**
     * Remove all the grease pencil layer data
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
