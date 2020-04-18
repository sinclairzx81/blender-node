import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CLIP_OT_add_marker } from './CLIP_OT_add_marker'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'

/**
 * ClipOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.clip.html
 */
export class ClipOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Place new marker at specified location
     * @desc void
     */
    public add_marker(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_marker`, options)
    }

    /**
     * Place new marker at the desired (clicked) position
     * @desc void
     */
    public add_marker_at_click(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_marker_at_click`, {})
    }

    /**
     * Add new marker and move it on movie
     * @desc void
     */
    public add_marker_move(options: { CLIP_OT_add_marker?: CLIP_OT_add_marker, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_marker_move`, options)
    }

    /**
     * Add new marker and slide it with mouse until mouse button release
     * @desc void
     */
    public add_marker_slide(options: { CLIP_OT_add_marker?: CLIP_OT_add_marker, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_marker_slide`, options)
    }

    /**
     * Apply scale on solution itself to make distance between selected tracks equals to desired
     * @desc void
     */
    public apply_solution_scale(options: { distance?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.apply_solution_scale`, options)
    }

    /**
     * Create vertex cloud using coordinates of reconstructed tracks
     * @desc void
     */
    public bundles_to_mesh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bundles_to_mesh`, {})
    }

    /**
     * Add or remove a Tracking Camera Intrinsics Preset
     * @desc void
     */
    public camera_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean, use_focal_length?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.camera_preset_add`, options)
    }

    /**
     * Interactively change the current frame number
     * @desc void
     */
    public change_frame(options: { frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_frame`, options)
    }

    /**
     * Clean tracks with high error values or few frames
     * @desc void
     */
    public clean_tracks(options: { frames?: number, error?: number, action?: 'SELECT' | 'DELETE_TRACK' | 'DELETE_SEGMENTS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clean_tracks`, options)
    }

    /**
     * Clear all calculated data
     * @desc void
     */
    public clear_solution(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_solution`, {})
    }

    /**
     * Clear tracks after/before current position or clear the whole track
     * @desc void
     */
    public clear_track_path(options: { action?: 'UPTO' | 'REMAINED' | 'ALL', clear_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_track_path`, options)
    }

    /**
     * Create F-Curves for object which will copy object’s movement caused by this constraint
     * @desc void
     */
    public constraint_to_fcurve(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_to_fcurve`, {})
    }

    /**
     * Copy selected tracks to clipboard
     * @desc void
     */
    public copy_tracks(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_tracks`, {})
    }

    /**
     * Create new plane track out of selected point tracks
     * @desc void
     */
    public create_plane_track(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.create_plane_track`, {})
    }

    /**
     * Set 2D cursor location
     * @desc void
     */
    public cursor_set(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_set`, options)
    }

    /**
     * Delete marker for current frame from selected tracks
     * @desc void
     */
    public delete_marker(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_marker`, {})
    }

    /**
     * Delete movie clip proxy files from the hard drive
     * @desc void
     */
    public delete_proxy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_proxy`, {})
    }

    /**
     * Delete selected tracks
     * @desc void
     */
    public delete_track(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_track`, {})
    }

    /**
     * Automatically detect features and place markers to track
     * @desc void
     */
    public detect_features(options: { placement?: 'FRAME' | 'INSIDE_GPENCIL' | 'OUTSIDE_GPENCIL', margin?: number, threshold?: number, min_distance?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.detect_features`, options)
    }

    /**
     * Disable/enable selected markers
     * @desc void
     */
    public disable_markers(options: { action?: 'DISABLE' | 'ENABLE' | 'TOGGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.disable_markers`, options)
    }

    /**
     * Select movie tracking channel
     * @desc void
     */
    public dopesheet_select_channel(options: { location?: [number, number], extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dopesheet_select_channel`, options)
    }

    /**
     * Reset viewable area to show full keyframe range
     * @desc void
     */
    public dopesheet_view_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dopesheet_view_all`, {})
    }

    /**
     * Filter tracks which has weirdly looking spikes in motion curves
     * @desc void
     */
    public filter_tracks(options: { track_threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.filter_tracks`, options)
    }

    /**
     * Jump to special frame
     * @desc void
     */
    public frame_jump(options: { position?: 'PATHSTART' | 'PATHEND' | 'FAILEDPREV' | 'FAILNEXT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_jump`, options)
    }

    /**
     * Scroll view so current frame would be centered
     * @desc void
     */
    public graph_center_current_frame(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_center_current_frame`, {})
    }

    /**
     * Delete track corresponding to the selected curve
     * @desc void
     */
    public graph_delete_curve(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_delete_curve`, {})
    }

    /**
     * Delete curve knots
     * @desc void
     */
    public graph_delete_knot(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_delete_knot`, {})
    }

    /**
     * Disable/enable selected markers
     * @desc void
     */
    public graph_disable_markers(options: { action?: 'DISABLE' | 'ENABLE' | 'TOGGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_disable_markers`, options)
    }

    /**
     * Select graph curves
     * @desc void
     */
    public graph_select(options: { location?: [number, number], extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_select`, options)
    }

    /**
     * Change selection of all markers of active track
     * @desc void
     */
    public graph_select_all_markers(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_select_all_markers`, options)
    }

    /**
     * Select curve points using box selection
     * @desc void
     */
    public graph_select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, deselect?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_select_box`, options)
    }

    /**
     * View all curves in editor
     * @desc void
     */
    public graph_view_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.graph_view_all`, {})
    }

    /**
     * Hide selected tracks
     * @desc void
     */
    public hide_tracks(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_tracks`, options)
    }

    /**
     * Clear hide selected tracks
     * @desc void
     */
    public hide_tracks_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_tracks_clear`, {})
    }

    /**
     * Join selected tracks
     * @desc void
     */
    public join_tracks(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.join_tracks`, {})
    }

    /**
     * Delete a keyframe from selected tracks at current frame
     * @desc void
     */
    public keyframe_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_delete`, {})
    }

    /**
     * Insert a keyframe to selected tracks at current frame
     * @desc void
     */
    public keyframe_insert(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyframe_insert`, {})
    }

    /**
     * Toggle Lock Selection option of the current clip editor
     * @desc void
     */
    public lock_selection_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lock_selection_toggle`, {})
    }

    /**
     * Lock/unlock selected tracks
     * @desc void
     */
    public lock_tracks(options: { action?: 'LOCK' | 'UNLOCK' | 'TOGGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lock_tracks`, options)
    }

    /**
     * Set the clip interaction mode
     * @desc void
     */
    public mode_set(options: { mode?: 'TRACKING' | 'MASK' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mode_set`, options)
    }

    /**
     * Load a sequence of frames or a movie file
     * @desc void
     */
    public open(options: { directory?: string, files?: any, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open`, options)
    }

    /**
     * Paste tracks from clipboard
     * @desc void
     */
    public paste_tracks(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste_tracks`, {})
    }

    /**
     * Prefetch frames from disk for faster playback/tracking
     * @desc void
     */
    public prefetch(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.prefetch`, {})
    }

    /**
     * Rebuild all selected proxies and timecode indices in the background
     * @desc void
     */
    public rebuild_proxy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rebuild_proxy`, {})
    }

    /**
     * Refine selected markers positions by running the tracker from track’s reference to current frame
     * @desc void
     */
    public refine_markers(options: { backwards?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refine_markers`, options)
    }

    /**
     * Reload clip
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    /**
     * Select tracking markers
     * @desc void
     */
    public select(options: { extend?: boolean, deselect_all?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Change selection of all tracking markers
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select markers using box selection
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select markers using circle selection
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select all tracks from specified group
     * @desc void
     */
    public select_grouped(options: { group?: 'KEYFRAMED' | 'ESTIMATED' | 'TRACKED' | 'LOCKED' | 'DISABLED' | 'COLOR' | 'FAILED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_grouped`, options)
    }

    /**
     * Select markers using lasso selection
     * @desc void
     */
    public select_lasso(options: { path?: string, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public set_active_clip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_active_clip`, {})
    }

    /**
     * Set direction of scene axis rotating camera (or its parent if present) and assume selected track lies on real axis, joining it with the origin
     * @desc void
     */
    public set_axis(options: { axis?: 'X' | 'Y' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_axis`, options)
    }

    /**
     * Set optical center to center of footage
     * @desc void
     */
    public set_center_principal(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_center_principal`, {})
    }

    /**
     * Set active marker as origin by moving camera (or its parent if present) in 3D space
     * @desc void
     */
    public set_origin(options: { use_median?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_origin`, options)
    }

    /**
     * Set plane based on 3 selected bundles by moving camera (or its parent if present) in 3D space
     * @desc void
     */
    public set_plane(options: { plane?: 'FLOOR' | 'WALL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_plane`, options)
    }

    /**
     * Set scale of scene by scaling camera (or its parent if present)
     * @desc void
     */
    public set_scale(options: { distance?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_scale`, options)
    }

    /**
     * Set scene’s start and end frame to match clip’s start frame and length
     * @desc void
     */
    public set_scene_frames(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_scene_frames`, {})
    }

    /**
     * Set object solution scale using distance between two selected tracks
     * @desc void
     */
    public set_solution_scale(options: { distance?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_solution_scale`, options)
    }

    /**
     * Set keyframe used by solver
     * @desc void
     */
    public set_solver_keyframe(options: { keyframe?: 'KEYFRAME_A' | 'KEYFRAME_B' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_solver_keyframe`, options)
    }

    /**
     * Set current movie clip as a camera background in 3D view-port (works only when a 3D view-port is visible)
     * @desc void
     */
    public set_viewport_background(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_viewport_background`, {})
    }

    /**
     * Prepare scene for compositing 3D objects into this footage
     * @desc void
     */
    public setup_tracking_scene(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.setup_tracking_scene`, {})
    }

    /**
     * Slide marker areas
     * @desc void
     */
    public slide_marker(options: { offset?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slide_marker`, options)
    }

    /**
     * Slide plane marker areas
     * @desc void
     */
    public slide_plane_marker(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slide_plane_marker`, {})
    }

    /**
     * Solve camera motion from tracks
     * @desc void
     */
    public solve_camera(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.solve_camera`, {})
    }

    /**
     * Add selected tracks to 2D translation stabilization
     * @desc void
     */
    public stabilize_2d_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stabilize_2d_add`, {})
    }

    /**
     * Remove selected track from translation stabilization
     * @desc void
     */
    public stabilize_2d_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stabilize_2d_remove`, {})
    }

    /**
     * Add selected tracks to 2D rotation stabilization
     * @desc void
     */
    public stabilize_2d_rotation_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stabilize_2d_rotation_add`, {})
    }

    /**
     * Remove selected track from rotation stabilization
     * @desc void
     */
    public stabilize_2d_rotation_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stabilize_2d_rotation_remove`, {})
    }

    /**
     * Select tracks which are used for rotation stabilization
     * @desc void
     */
    public stabilize_2d_rotation_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stabilize_2d_rotation_select`, {})
    }

    /**
     * Select tracks which are used for translation stabilization
     * @desc void
     */
    public stabilize_2d_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stabilize_2d_select`, {})
    }

    /**
     * Add or remove a Clip Track Color Preset
     * @desc void
     */
    public track_color_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_color_preset_add`, options)
    }

    /**
     * Copy color to all selected tracks
     * @desc void
     */
    public track_copy_color(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_copy_color`, {})
    }

    /**
     * Track selected markers
     * @desc void
     */
    public track_markers(options: { backwards?: boolean, sequence?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_markers`, options)
    }

    /**
     * Copy tracking settings from active track to default settings
     * @desc void
     */
    public track_settings_as_default(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_settings_as_default`, {})
    }

    /**
     * Copy tracking settings from active track to selected tracks
     * @desc void
     */
    public track_settings_to_track(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_settings_to_track`, {})
    }

    /**
     * Create an Empty object which will be copying movement of active track
     * @desc void
     */
    public track_to_empty(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_to_empty`, {})
    }

    /**
     * Add new object for tracking
     * @desc void
     */
    public tracking_object_new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tracking_object_new`, {})
    }

    /**
     * Remove object for tracking
     * @desc void
     */
    public tracking_object_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tracking_object_remove`, {})
    }

    /**
     * Add or remove a motion tracking settings preset
     * @desc void
     */
    public tracking_settings_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tracking_settings_preset_add`, options)
    }

    /**
     * View whole image with markers
     * @desc void
     */
    public view_all(options: { fit_view?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, options)
    }

    /**
     * Center the view so that the cursor is in the middle of the view
     * @desc void
     */
    public view_center_cursor(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_center_cursor`, {})
    }

    /**
     * Use a 3D mouse device to pan/zoom the view
     * @desc void
     */
    public view_ndof(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_ndof`, {})
    }

    /**
     * Pan the view
     * @desc void
     */
    public view_pan(options: { offset?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_pan`, options)
    }

    /**
     * View all selected elements
     * @desc void
     */
    public view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, {})
    }

    /**
     * Zoom in/out the view
     * @desc void
     */
    public view_zoom(options: { factor?: number, use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom`, options)
    }

    /**
     * Zoom in the view
     * @desc void
     */
    public view_zoom_in(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_in`, options)
    }

    /**
     * Zoom out the view
     * @desc void
     */
    public view_zoom_out(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_out`, options)
    }

    /**
     * Set the zoom ratio (based on clip size)
     * @desc void
     */
    public view_zoom_ratio(options: { ratio?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_ratio`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
