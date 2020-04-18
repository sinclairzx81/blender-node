import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { DopeSheet } from './DopeSheet'

/**
 * SpaceGraphEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceGraphEditor.html
 */
export class SpaceGraphEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for filtering animation data
     * @desc DopeSheet, (readonly)
     */
    public get dopesheet(): DopeSheet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.dopesheet`, DopeSheet)
    }

    /**
     * Graph Editor instance has some ghost curves stored
     * @desc boolean, default False, (readonly)
     */
    public get has_ghost_curves(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_ghost_curves`)
    }

    /**
     * Automatic time snapping settings for transformations
     * @desc enum in ['NONE', 'STEP', 'TIME_STEP', 'FRAME', 'SECOND', 'MARKER'], default 'NONE'
     */
    public get auto_snap(): 'NONE' | 'STEP' | 'TIME_STEP' | 'FRAME' | 'SECOND' | 'MARKER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.auto_snap`)
    }

    /**
     * Graph Editor 2D-Value cursor - X-Value component
     * @desc float in [-inf, inf], default 0.0
     */
    public get cursor_position_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cursor_position_x`)
    }

    /**
     * Graph Editor 2D-Value cursor - Y-Value component
     * @desc float in [-inf, inf], default 0.0
     */
    public get cursor_position_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cursor_position_y`)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['FCURVES', 'DRIVERS'], default 'FCURVES'
     */
    public get mode(): 'FCURVES' | 'DRIVERS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Pivot center for rotation/scaling
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS'], default 'BOUNDING_BOX_CENTER'
     */
    public get pivot_point(): 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pivot_point`)
    }

    /**
     * Show 2D cursor
     * @desc boolean, default False
     */
    public get show_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cursor`)
    }

    /**
     * Display groups and channels with colors matching their corresponding groups
     * @desc boolean, default False
     */
    public get show_group_colors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_group_colors`)
    }

    /**
     * Show handles of Bezier control points
     * @desc boolean, default False
     */
    public get show_handles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_handles`)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public get show_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_markers`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_hud(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_hud`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Show timing in seconds not frames
     * @desc boolean, default False
     */
    public get show_seconds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_seconds`)
    }

    /**
     * Show sliders beside F-Curve channels
     * @desc boolean, default False
     */
    public get show_sliders(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_sliders`)
    }

    /**
     * Automatically merge nearby keyframes
     * @desc boolean, default False
     */
    public get use_auto_merge_keyframes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_merge_keyframes`)
    }

    /**
     * Automatically recalculate curve normalization on every curve edit
     * @desc boolean, default False
     */
    public get use_auto_normalization(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_normalization`)
    }

    /**
     * Display F-Curves using Anti-Aliasing and other fancy effects (disable for better performance)
     * @desc boolean, default False
     */
    public get use_beauty_drawing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_beauty_drawing`)
    }

    /**
     * Display curves in normalized to -1..1 range, for easier editing of multiple curves with different ranges
     * @desc boolean, default False
     */
    public get use_normalization(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normalization`)
    }

    /**
     * Only keyframes of selected F-Curves are visible and editable
     * @desc boolean, default False
     */
    public get use_only_selected_curves_handles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_only_selected_curves_handles`)
    }

    /**
     * Only show and edit handles of selected keyframes
     * @desc boolean, default False
     */
    public get use_only_selected_keyframe_handles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_only_selected_keyframe_handles`)
    }

    /**
     * When transforming keyframes, changes to the animation data are flushed to other views
     * @desc boolean, default False
     */
    public get use_realtime_update(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_realtime_update`)
    }

    /**
     * Automatic time snapping settings for transformations
     * @desc enum in ['NONE', 'STEP', 'TIME_STEP', 'FRAME', 'SECOND', 'MARKER'], default 'NONE'
     */
    public set auto_snap(value: 'NONE' | 'STEP' | 'TIME_STEP' | 'FRAME' | 'SECOND' | 'MARKER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.auto_snap`, value)
    }

    /**
     * Graph Editor 2D-Value cursor - X-Value component
     * @desc float in [-inf, inf], default 0.0
     */
    public set cursor_position_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cursor_position_x`, value)
    }

    /**
     * Graph Editor 2D-Value cursor - Y-Value component
     * @desc float in [-inf, inf], default 0.0
     */
    public set cursor_position_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cursor_position_y`, value)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['FCURVES', 'DRIVERS'], default 'FCURVES'
     */
    public set mode(value: 'FCURVES' | 'DRIVERS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Pivot center for rotation/scaling
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS'], default 'BOUNDING_BOX_CENTER'
     */
    public set pivot_point(value: 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pivot_point`, value)
    }

    /**
     * Show 2D cursor
     * @desc boolean, default False
     */
    public set show_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cursor`, value)
    }

    /**
     * Display groups and channels with colors matching their corresponding groups
     * @desc boolean, default False
     */
    public set show_group_colors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_group_colors`, value)
    }

    /**
     * Show handles of Bezier control points
     * @desc boolean, default False
     */
    public set show_handles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_handles`, value)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public set show_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_markers`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_hud(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_hud`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Show timing in seconds not frames
     * @desc boolean, default False
     */
    public set show_seconds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_seconds`, value)
    }

    /**
     * Show sliders beside F-Curve channels
     * @desc boolean, default False
     */
    public set show_sliders(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_sliders`, value)
    }

    /**
     * Automatically merge nearby keyframes
     * @desc boolean, default False
     */
    public set use_auto_merge_keyframes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_merge_keyframes`, value)
    }

    /**
     * Automatically recalculate curve normalization on every curve edit
     * @desc boolean, default False
     */
    public set use_auto_normalization(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_normalization`, value)
    }

    /**
     * Display F-Curves using Anti-Aliasing and other fancy effects (disable for better performance)
     * @desc boolean, default False
     */
    public set use_beauty_drawing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_beauty_drawing`, value)
    }

    /**
     * Display curves in normalized to -1..1 range, for easier editing of multiple curves with different ranges
     * @desc boolean, default False
     */
    public set use_normalization(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normalization`, value)
    }

    /**
     * Only keyframes of selected F-Curves are visible and editable
     * @desc boolean, default False
     */
    public set use_only_selected_curves_handles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_only_selected_curves_handles`, value)
    }

    /**
     * Only show and edit handles of selected keyframes
     * @desc boolean, default False
     */
    public set use_only_selected_keyframe_handles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_only_selected_keyframe_handles`, value)
    }

    /**
     * When transforming keyframes, changes to the animation data are flushed to other views
     * @desc boolean, default False
     */
    public set use_realtime_update(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_realtime_update`, value)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
