import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { DopeSheet } from './DopeSheet'
import { Action } from './Action'

/**
 * SpaceDopeSheetEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceDopeSheetEditor.html
 */
export class SpaceDopeSheetEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for filtering animation data
     * @desc DopeSheet, (readonly)
     */
    public get dopesheet(): DopeSheet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.dopesheet`, DopeSheet)
    }

    /**
     * Action displayed and edited in this space
     * @desc Action
     */
    public get action(): Action {
        return PythonInterop.getClass(this.interop, `${this.accessor}.action`, Action)
    }

    /**
     * Automatic time snapping settings for transformations
     * @desc enum in ['NONE', 'STEP', 'TIME_STEP', 'FRAME', 'SECOND', 'MARKER'], default 'NONE'
     */
    public get auto_snap(): 'NONE' | 'STEP' | 'TIME_STEP' | 'FRAME' | 'SECOND' | 'MARKER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.auto_snap`)
    }

    /**
     * Show the active object’s cloth point cache
     * @desc boolean, default False
     */
    public get cache_cloth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cache_cloth`)
    }

    /**
     * Show the active object’s Dynamic Paint cache
     * @desc boolean, default False
     */
    public get cache_dynamicpaint(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cache_dynamicpaint`)
    }

    /**
     * Show the active object’s particle point cache
     * @desc boolean, default False
     */
    public get cache_particles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cache_particles`)
    }

    /**
     * Show the active object’s Rigid Body cache
     * @desc boolean, default False
     */
    public get cache_rigidbody(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cache_rigidbody`)
    }

    /**
     * Show the active object’s smoke cache
     * @desc boolean, default False
     */
    public get cache_smoke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cache_smoke`)
    }

    /**
     * Show the active object’s softbody point cache
     * @desc boolean, default False
     */
    public get cache_softbody(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.cache_softbody`)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['DOPESHEET', 'TIMELINE', 'ACTION', 'SHAPEKEY', 'GPENCIL', 'MASK', 'CACHEFILE'], default 'ACTION'
     */
    public get mode(): 'DOPESHEET' | 'TIMELINE' | 'ACTION' | 'SHAPEKEY' | 'GPENCIL' | 'MASK' | 'CACHEFILE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Show the status of cached frames in the timeline
     * @desc boolean, default False
     */
    public get show_cache(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cache`)
    }

    /**
     * Mark keyframes where the key value flow changes direction, based on comparison with adjacent keys
     * @desc boolean, default False
     */
    public get show_extremes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extremes`)
    }

    /**
     * Display groups and channels with colors matching their corresponding groups (pose bones only currently)
     * @desc boolean, default False
     */
    public get show_group_colors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_group_colors`)
    }

    /**
     * Display keyframe handle types and non-bezier interpolation modes
     * @desc boolean, default False
     */
    public get show_interpolation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_interpolation`)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public get show_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_markers`)
    }

    /**
     * Show markers belonging to the active action instead of Scene markers (Action and Shape Key Editors only)
     * @desc boolean, default False
     */
    public get show_pose_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_pose_markers`)
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
     * Editing context being displayed
     * @desc enum in ['DOPESHEET', 'ACTION', 'SHAPEKEY', 'GPENCIL', 'MASK', 'CACHEFILE'], default 'ACTION'
     */
    public get ui_mode(): 'DOPESHEET' | 'ACTION' | 'SHAPEKEY' | 'GPENCIL' | 'MASK' | 'CACHEFILE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ui_mode`)
    }

    /**
     * Automatically merge nearby keyframes
     * @desc boolean, default False
     */
    public get use_auto_merge_keyframes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_merge_keyframes`)
    }

    /**
     * Sync Markers with keyframe edits
     * @desc boolean, default False
     */
    public get use_marker_sync(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_marker_sync`)
    }

    /**
     * When transforming keyframes, changes to the animation data are flushed to other views
     * @desc boolean, default False
     */
    public get use_realtime_update(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_realtime_update`)
    }

    /**
     * Action displayed and edited in this space
     * @desc Action
     */
    public set action(value: Action) {
        PythonInterop.setClass(this.interop, `${this.accessor}.action`, value)
    }

    /**
     * Automatic time snapping settings for transformations
     * @desc enum in ['NONE', 'STEP', 'TIME_STEP', 'FRAME', 'SECOND', 'MARKER'], default 'NONE'
     */
    public set auto_snap(value: 'NONE' | 'STEP' | 'TIME_STEP' | 'FRAME' | 'SECOND' | 'MARKER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.auto_snap`, value)
    }

    /**
     * Show the active object’s cloth point cache
     * @desc boolean, default False
     */
    public set cache_cloth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cache_cloth`, value)
    }

    /**
     * Show the active object’s Dynamic Paint cache
     * @desc boolean, default False
     */
    public set cache_dynamicpaint(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cache_dynamicpaint`, value)
    }

    /**
     * Show the active object’s particle point cache
     * @desc boolean, default False
     */
    public set cache_particles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cache_particles`, value)
    }

    /**
     * Show the active object’s Rigid Body cache
     * @desc boolean, default False
     */
    public set cache_rigidbody(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cache_rigidbody`, value)
    }

    /**
     * Show the active object’s smoke cache
     * @desc boolean, default False
     */
    public set cache_smoke(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cache_smoke`, value)
    }

    /**
     * Show the active object’s softbody point cache
     * @desc boolean, default False
     */
    public set cache_softbody(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.cache_softbody`, value)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['DOPESHEET', 'TIMELINE', 'ACTION', 'SHAPEKEY', 'GPENCIL', 'MASK', 'CACHEFILE'], default 'ACTION'
     */
    public set mode(value: 'DOPESHEET' | 'TIMELINE' | 'ACTION' | 'SHAPEKEY' | 'GPENCIL' | 'MASK' | 'CACHEFILE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Show the status of cached frames in the timeline
     * @desc boolean, default False
     */
    public set show_cache(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cache`, value)
    }

    /**
     * Mark keyframes where the key value flow changes direction, based on comparison with adjacent keys
     * @desc boolean, default False
     */
    public set show_extremes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extremes`, value)
    }

    /**
     * Display groups and channels with colors matching their corresponding groups (pose bones only currently)
     * @desc boolean, default False
     */
    public set show_group_colors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_group_colors`, value)
    }

    /**
     * Display keyframe handle types and non-bezier interpolation modes
     * @desc boolean, default False
     */
    public set show_interpolation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_interpolation`, value)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public set show_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_markers`, value)
    }

    /**
     * Show markers belonging to the active action instead of Scene markers (Action and Shape Key Editors only)
     * @desc boolean, default False
     */
    public set show_pose_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_pose_markers`, value)
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
     * Editing context being displayed
     * @desc enum in ['DOPESHEET', 'ACTION', 'SHAPEKEY', 'GPENCIL', 'MASK', 'CACHEFILE'], default 'ACTION'
     */
    public set ui_mode(value: 'DOPESHEET' | 'ACTION' | 'SHAPEKEY' | 'GPENCIL' | 'MASK' | 'CACHEFILE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ui_mode`, value)
    }

    /**
     * Automatically merge nearby keyframes
     * @desc boolean, default False
     */
    public set use_auto_merge_keyframes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_merge_keyframes`, value)
    }

    /**
     * Sync Markers with keyframe edits
     * @desc boolean, default False
     */
    public set use_marker_sync(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_marker_sync`, value)
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
