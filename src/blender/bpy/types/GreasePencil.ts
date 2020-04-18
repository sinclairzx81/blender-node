import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { GreasePencilGrid } from './GreasePencilGrid'
import { GreasePencilLayers } from './GreasePencilLayers'
import { GPencilLayer } from './GPencilLayer'
import { IDMaterials } from './IDMaterials'
import { Material } from './Material'

/**
 * GreasePencil
 * 
 * https://docs.blender.org/api/current/bpy.types.GreasePencil.html
 */
export class GreasePencil {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Settings for grid and canvas in the 3D viewport
     * @desc GreasePencilGrid, (readonly, never None)
     */
    public get grid(): GreasePencilGrid {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grid`, GreasePencilGrid)
    }

    /**
     * Current datablock is an annotation
     * @desc boolean, default False, (readonly)
     */
    public get is_annotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_annotation`)
    }

    /**
     * Draw Grease Pencil strokes on click/drag
     * @desc boolean, default False, (readonly)
     */
    public get is_stroke_paint_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_stroke_paint_mode`)
    }

    /**
     * Sculpt Grease Pencil strokes instead of viewport data
     * @desc boolean, default False, (readonly)
     */
    public get is_stroke_sculpt_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_stroke_sculpt_mode`)
    }

    /**
     * Grease Pencil weight paint
     * @desc boolean, default False, (readonly)
     */
    public get is_stroke_weight_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_stroke_weight_mode`)
    }

    /**
     * 
     * @desc GreasePencilLayers bpy_prop_collection of GPencilLayer, (readonly)
     */
    public get layers(): BlenderCollection<GPencilLayer> & Indexable<GPencilLayer> & GreasePencilLayers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.layers`, GreasePencilLayers, GPencilLayer)
    }

    /**
     * 
     * @desc IDMaterials bpy_prop_collection of Material, (readonly)
     */
    public get materials(): BlenderCollection<Material> & Indexable<Material> & IDMaterials {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.materials`, IDMaterials, Material)
    }

    /**
     * Base color for ghosts after the active frame
     * @desc float array of 3 items in [0, 1], default (0.12549, 0.082353, 0.529412)
     */
    public get after_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.after_color`, 'number', 3)
    }

    /**
     * Base color for ghosts before the active frame
     * @desc float array of 3 items in [0, 1], default (0.145098, 0.419608, 0.137255)
     */
    public get before_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.before_color`, 'number', 3)
    }

    /**
     * Color for editing line
     * @desc float array of 4 items in [0, 1], default (0.6, 0.6, 0.6, 0.5)
     */
    public get edit_line_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edit_line_color`, 'number', 4)
    }

    /**
     * Maximum number of frames to show after current frame (0 = don’t show any frames after current)
     * @desc int in [0, 120], default 1
     */
    public get ghost_after_range(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.ghost_after_range`)
    }

    /**
     * Maximum number of frames to show before current frame (0 = don’t show any frames before current)
     * @desc int in [0, 120], default 1
     */
    public get ghost_before_range(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.ghost_before_range`)
    }

    /**
     * Change fade opacity of displayed onion frames
     * @desc float in [0, 1], default 0.5
     */
    public get onion_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.onion_factor`)
    }

    /**
     * Type of keyframe (for filtering)
     * @desc enum in ['ALL', 'KEYFRAME', 'BREAKDOWN', 'MOVING_HOLD', 'EXTREME', 'JITTER'], default 'KEYFRAME'
     */
    public get onion_keyframe_type(): 'ALL' | 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.onion_keyframe_type`)
    }

    /**
     * Mode to display frames
     * @desc enum in ['ABSOLUTE', 'RELATIVE', 'SELECTED'], default 'ABSOLUTE'
     */
    public get onion_mode(): 'ABSOLUTE' | 'RELATIVE' | 'SELECTED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.onion_mode`)
    }

    /**
     * Scale conversion factor for pixel size (use larger values for thicker lines)
     * @desc float in [0.1, 30], default 0.0
     */
    public get pixel_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixel_factor`)
    }

    /**
     * Show stroke drawing direction with a bigger green dot (start) and smaller red dot (end) points
     * @desc boolean, default False
     */
    public get show_stroke_direction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stroke_direction`)
    }

    /**
     * Defines how the strokes are ordered in 3D space
     * @desc enum in ['2D', '3D'], default '2D'
     */
    public get stroke_depth_order(): '2D' | '3D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stroke_depth_order`)
    }

    /**
     * Set stroke thickness in screen space or world space
     * @desc enum in ['WORLDSPACE', 'SCREENSPACE'], default 'WORLDSPACE'
     */
    public get stroke_thickness_space(): 'WORLDSPACE' | 'SCREENSPACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stroke_thickness_space`)
    }

    /**
     * Automatic UVs are calculated depending of the stroke size
     * @desc boolean, default False
     */
    public get use_adaptive_uv(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_adaptive_uv`)
    }

    /**
     * Lock automatically all layers except active one to avoid accidental changes
     * @desc boolean, default False
     */
    public get use_autolock_layers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_autolock_layers`)
    }

    /**
     * Force recalc of fill data after use deformation modifiers (reduce FPS)
     * @desc boolean, default False
     */
    public get use_force_fill_recalc(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_force_fill_recalc`)
    }

    /**
     * Use custom colors for ghost frames
     * @desc boolean, default False
     */
    public get use_ghost_custom_colors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ghost_custom_colors`)
    }

    /**
     * Ghosts are shown in renders and animation playback. Useful for special effects (e.g. motion blur)
     * @desc boolean, default False
     */
    public get use_ghosts_always(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ghosts_always`)
    }

    /**
     * Edit strokes from multiple grease pencil keyframes at the same time (keyframes must be selected to be included)
     * @desc boolean, default False
     */
    public get use_multiedit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiedit`)
    }

    /**
     * Display onion keyframes with a fade in color transparency
     * @desc boolean, default False
     */
    public get use_onion_fade(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_onion_fade`)
    }

    /**
     * Display first onion keyframes using next frame color to show indication of loop start frame
     * @desc boolean, default False
     */
    public get use_onion_loop(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_onion_loop`)
    }

    /**
     * Show ghosts of the keyframes before and after the current frame
     * @desc boolean, default True
     */
    public get use_onion_skinning(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_onion_skinning`)
    }

    /**
     * Edit Grease Pencil strokes instead of viewport data
     * @desc boolean, default False
     */
    public get use_stroke_edit_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stroke_edit_mode`)
    }

    /**
     * Offset amount when drawing in surface mode
     * @desc float in [0, 1], default 0.0
     */
    public get zdepth_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.zdepth_offset`)
    }

    /**
     * Base color for ghosts after the active frame
     * @desc float array of 3 items in [0, 1], default (0.12549, 0.082353, 0.529412)
     */
    public set after_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.after_color`, value)
    }

    /**
     * Base color for ghosts before the active frame
     * @desc float array of 3 items in [0, 1], default (0.145098, 0.419608, 0.137255)
     */
    public set before_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.before_color`, value)
    }

    /**
     * Color for editing line
     * @desc float array of 4 items in [0, 1], default (0.6, 0.6, 0.6, 0.5)
     */
    public set edit_line_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edit_line_color`, value)
    }

    /**
     * Maximum number of frames to show after current frame (0 = don’t show any frames after current)
     * @desc int in [0, 120], default 1
     */
    public set ghost_after_range(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.ghost_after_range`, value)
    }

    /**
     * Maximum number of frames to show before current frame (0 = don’t show any frames before current)
     * @desc int in [0, 120], default 1
     */
    public set ghost_before_range(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.ghost_before_range`, value)
    }

    /**
     * Change fade opacity of displayed onion frames
     * @desc float in [0, 1], default 0.5
     */
    public set onion_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.onion_factor`, value)
    }

    /**
     * Type of keyframe (for filtering)
     * @desc enum in ['ALL', 'KEYFRAME', 'BREAKDOWN', 'MOVING_HOLD', 'EXTREME', 'JITTER'], default 'KEYFRAME'
     */
    public set onion_keyframe_type(value: 'ALL' | 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.onion_keyframe_type`, value)
    }

    /**
     * Mode to display frames
     * @desc enum in ['ABSOLUTE', 'RELATIVE', 'SELECTED'], default 'ABSOLUTE'
     */
    public set onion_mode(value: 'ABSOLUTE' | 'RELATIVE' | 'SELECTED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.onion_mode`, value)
    }

    /**
     * Scale conversion factor for pixel size (use larger values for thicker lines)
     * @desc float in [0.1, 30], default 0.0
     */
    public set pixel_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pixel_factor`, value)
    }

    /**
     * Show stroke drawing direction with a bigger green dot (start) and smaller red dot (end) points
     * @desc boolean, default False
     */
    public set show_stroke_direction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stroke_direction`, value)
    }

    /**
     * Defines how the strokes are ordered in 3D space
     * @desc enum in ['2D', '3D'], default '2D'
     */
    public set stroke_depth_order(value: '2D' | '3D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.stroke_depth_order`, value)
    }

    /**
     * Set stroke thickness in screen space or world space
     * @desc enum in ['WORLDSPACE', 'SCREENSPACE'], default 'WORLDSPACE'
     */
    public set stroke_thickness_space(value: 'WORLDSPACE' | 'SCREENSPACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.stroke_thickness_space`, value)
    }

    /**
     * Automatic UVs are calculated depending of the stroke size
     * @desc boolean, default False
     */
    public set use_adaptive_uv(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_adaptive_uv`, value)
    }

    /**
     * Lock automatically all layers except active one to avoid accidental changes
     * @desc boolean, default False
     */
    public set use_autolock_layers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_autolock_layers`, value)
    }

    /**
     * Force recalc of fill data after use deformation modifiers (reduce FPS)
     * @desc boolean, default False
     */
    public set use_force_fill_recalc(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_force_fill_recalc`, value)
    }

    /**
     * Use custom colors for ghost frames
     * @desc boolean, default False
     */
    public set use_ghost_custom_colors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ghost_custom_colors`, value)
    }

    /**
     * Ghosts are shown in renders and animation playback. Useful for special effects (e.g. motion blur)
     * @desc boolean, default False
     */
    public set use_ghosts_always(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ghosts_always`, value)
    }

    /**
     * Edit strokes from multiple grease pencil keyframes at the same time (keyframes must be selected to be included)
     * @desc boolean, default False
     */
    public set use_multiedit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiedit`, value)
    }

    /**
     * Display onion keyframes with a fade in color transparency
     * @desc boolean, default False
     */
    public set use_onion_fade(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_onion_fade`, value)
    }

    /**
     * Display first onion keyframes using next frame color to show indication of loop start frame
     * @desc boolean, default False
     */
    public set use_onion_loop(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_onion_loop`, value)
    }

    /**
     * Show ghosts of the keyframes before and after the current frame
     * @desc boolean, default True
     */
    public set use_onion_skinning(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_onion_skinning`, value)
    }

    /**
     * Edit Grease Pencil strokes instead of viewport data
     * @desc boolean, default False
     */
    public set use_stroke_edit_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stroke_edit_mode`, value)
    }

    /**
     * Offset amount when drawing in surface mode
     * @desc float in [0, 1], default 0.0
     */
    public set zdepth_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.zdepth_offset`, value)
    }

    /**
     * Remove all the Grease Pencil data
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
