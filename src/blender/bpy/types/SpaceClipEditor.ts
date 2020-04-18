import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { MovieClipUser } from './MovieClipUser'
import { MovieClipScopes } from './MovieClipScopes'
import { MovieClip } from './MovieClip'
import { Mask } from './Mask'

/**
 * SpaceClipEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceClipEditor.html
 */
export class SpaceClipEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Parameters defining which frame of the movie clip is displayed
     * @desc MovieClipUser, (readonly, never None)
     */
    public get clip_user(): MovieClipUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip_user`, MovieClipUser)
    }

    /**
     * Scopes to visualize movie clip statistics
     * @desc MovieClipScopes, (readonly)
     */
    public get scopes(): MovieClipScopes {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scopes`, MovieClipScopes)
    }

    /**
     * Movie clip displayed and edited in this space
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Where the grease pencil comes from
     * @desc enum in ['CLIP', 'TRACK'], default 'CLIP'
     */
    public get grease_pencil_source(): 'CLIP' | 'TRACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.grease_pencil_source`)
    }

    /**
     * Lock viewport to selected markers during playback
     * @desc boolean, default False
     */
    public get lock_selection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_selection`)
    }

    /**
     * Lock curves view to time cursor during playback and tracking
     * @desc boolean, default False
     */
    public get lock_time_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_time_cursor`)
    }

    /**
     * Mask displayed and edited in this space
     * @desc Mask
     */
    public get mask(): Mask {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask`, Mask)
    }

    /**
     * Display type for mask splines
     * @desc enum in ['OUTLINE', 'DASH', 'BLACK', 'WHITE'], default 'OUTLINE'
     */
    public get mask_display_type(): 'OUTLINE' | 'DASH' | 'BLACK' | 'WHITE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_display_type`)
    }

    /**
     * Overlay mode of rasterized mask
     * @desc enum in ['ALPHACHANNEL', 'COMBINED'], default 'ALPHACHANNEL'
     */
    public get mask_overlay_mode(): 'ALPHACHANNEL' | 'COMBINED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_overlay_mode`)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['TRACKING', 'MASK'], default 'TRACKING'
     */
    public get mode(): 'TRACKING' | 'MASK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Length of displaying path, in frames
     * @desc int in [0, inf], default 0
     */
    public get path_length(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.path_length`)
    }

    /**
     * Pivot center for rotation/scaling
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS', 'MEDIAN_POINT'], default 'BOUNDING_BOX_CENTER'
     */
    public get pivot_point(): 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' | 'MEDIAN_POINT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pivot_point`)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public get show_annotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_annotation`)
    }

    /**
     * Show blue channel in the frame
     * @desc boolean, default False
     */
    public get show_blue_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_blue_channel`)
    }

    /**
     * Show projection of 3D markers into footage
     * @desc boolean, default False
     */
    public get show_bundles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_bundles`)
    }

    /**
     * Show disabled tracks from the footage
     * @desc boolean, default False
     */
    public get show_disabled(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_disabled`)
    }

    /**
     * Show filters for graph editor
     * @desc boolean, default False
     */
    public get show_filters(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_filters`)
    }

    /**
     * Show curve for per-frame average error (camera motion should be solved first)
     * @desc boolean, default False
     */
    public get show_graph_frames(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_graph_frames`)
    }

    /**
     * Include channels from objects/bone that aren’t visible
     * @desc boolean, default False
     */
    public get show_graph_hidden(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_graph_hidden`)
    }

    /**
     * Only include channels relating to selected objects and data
     * @desc boolean, default False
     */
    public get show_graph_only_selected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_graph_only_selected`)
    }

    /**
     * Display the reprojection error curve for selected tracks
     * @desc boolean, default False
     */
    public get show_graph_tracks_error(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_graph_tracks_error`)
    }

    /**
     * Display the speed curves (in “x” direction red, in “y” direction green) for the selected tracks
     * @desc boolean, default False
     */
    public get show_graph_tracks_motion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_graph_tracks_motion`)
    }

    /**
     * Show green channel in the frame
     * @desc boolean, default False
     */
    public get show_green_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_green_channel`)
    }

    /**
     * Show grid showing lens distortion
     * @desc boolean, default False
     */
    public get show_grid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_grid`)
    }

    /**
     * Show pattern boundbox for markers
     * @desc boolean, default False
     */
    public get show_marker_pattern(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_marker_pattern`)
    }

    /**
     * Show search boundbox for markers
     * @desc boolean, default False
     */
    public get show_marker_search(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_marker_search`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_mask_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_mask_overlay`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_mask_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_mask_smooth`)
    }

    /**
     * Show metadata of clip
     * @desc boolean, default False
     */
    public get show_metadata(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_metadata`)
    }

    /**
     * Show track names and status
     * @desc boolean, default False
     */
    public get show_names(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_names`)
    }

    /**
     * Show red channel in the frame
     * @desc boolean, default False
     */
    public get show_red_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_red_channel`)
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
    public get show_region_toolbar(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_toolbar`)
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
     * Show stable footage in editor (if stabilization is enabled)
     * @desc boolean, default False
     */
    public get show_stable(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stable`)
    }

    /**
     * Show markers in a more compact manner
     * @desc boolean, default False
     */
    public get show_tiny_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_tiny_markers`)
    }

    /**
     * Show path of how track moves
     * @desc boolean, default False
     */
    public get show_track_path(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_track_path`)
    }

    /**
     * Display frame in grayscale mode
     * @desc boolean, default False
     */
    public get use_grayscale_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_grayscale_preview`)
    }

    /**
     * Use manual calibration helpers
     * @desc boolean, default False
     */
    public get use_manual_calibration(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_manual_calibration`)
    }

    /**
     * Mute footage and show black background instead
     * @desc boolean, default False
     */
    public get use_mute_footage(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mute_footage`)
    }

    /**
     * Type of the clip editor view
     * @desc enum in ['CLIP', 'GRAPH', 'DOPESHEET'], default 'CLIP'
     */
    public get view(): 'CLIP' | 'GRAPH' | 'DOPESHEET' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view`)
    }

    /**
     * Movie clip displayed and edited in this space
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Where the grease pencil comes from
     * @desc enum in ['CLIP', 'TRACK'], default 'CLIP'
     */
    public set grease_pencil_source(value: 'CLIP' | 'TRACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.grease_pencil_source`, value)
    }

    /**
     * Lock viewport to selected markers during playback
     * @desc boolean, default False
     */
    public set lock_selection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_selection`, value)
    }

    /**
     * Lock curves view to time cursor during playback and tracking
     * @desc boolean, default False
     */
    public set lock_time_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_time_cursor`, value)
    }

    /**
     * Mask displayed and edited in this space
     * @desc Mask
     */
    public set mask(value: Mask) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask`, value)
    }

    /**
     * Display type for mask splines
     * @desc enum in ['OUTLINE', 'DASH', 'BLACK', 'WHITE'], default 'OUTLINE'
     */
    public set mask_display_type(value: 'OUTLINE' | 'DASH' | 'BLACK' | 'WHITE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_display_type`, value)
    }

    /**
     * Overlay mode of rasterized mask
     * @desc enum in ['ALPHACHANNEL', 'COMBINED'], default 'ALPHACHANNEL'
     */
    public set mask_overlay_mode(value: 'ALPHACHANNEL' | 'COMBINED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_overlay_mode`, value)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['TRACKING', 'MASK'], default 'TRACKING'
     */
    public set mode(value: 'TRACKING' | 'MASK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Length of displaying path, in frames
     * @desc int in [0, inf], default 0
     */
    public set path_length(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.path_length`, value)
    }

    /**
     * Pivot center for rotation/scaling
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS', 'MEDIAN_POINT'], default 'BOUNDING_BOX_CENTER'
     */
    public set pivot_point(value: 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' | 'MEDIAN_POINT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pivot_point`, value)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public set show_annotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_annotation`, value)
    }

    /**
     * Show blue channel in the frame
     * @desc boolean, default False
     */
    public set show_blue_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_blue_channel`, value)
    }

    /**
     * Show projection of 3D markers into footage
     * @desc boolean, default False
     */
    public set show_bundles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_bundles`, value)
    }

    /**
     * Show disabled tracks from the footage
     * @desc boolean, default False
     */
    public set show_disabled(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_disabled`, value)
    }

    /**
     * Show filters for graph editor
     * @desc boolean, default False
     */
    public set show_filters(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_filters`, value)
    }

    /**
     * Show curve for per-frame average error (camera motion should be solved first)
     * @desc boolean, default False
     */
    public set show_graph_frames(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_graph_frames`, value)
    }

    /**
     * Include channels from objects/bone that aren’t visible
     * @desc boolean, default False
     */
    public set show_graph_hidden(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_graph_hidden`, value)
    }

    /**
     * Only include channels relating to selected objects and data
     * @desc boolean, default False
     */
    public set show_graph_only_selected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_graph_only_selected`, value)
    }

    /**
     * Display the reprojection error curve for selected tracks
     * @desc boolean, default False
     */
    public set show_graph_tracks_error(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_graph_tracks_error`, value)
    }

    /**
     * Display the speed curves (in “x” direction red, in “y” direction green) for the selected tracks
     * @desc boolean, default False
     */
    public set show_graph_tracks_motion(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_graph_tracks_motion`, value)
    }

    /**
     * Show green channel in the frame
     * @desc boolean, default False
     */
    public set show_green_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_green_channel`, value)
    }

    /**
     * Show grid showing lens distortion
     * @desc boolean, default False
     */
    public set show_grid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_grid`, value)
    }

    /**
     * Show pattern boundbox for markers
     * @desc boolean, default False
     */
    public set show_marker_pattern(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_marker_pattern`, value)
    }

    /**
     * Show search boundbox for markers
     * @desc boolean, default False
     */
    public set show_marker_search(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_marker_search`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_mask_overlay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_mask_overlay`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_mask_smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_mask_smooth`, value)
    }

    /**
     * Show metadata of clip
     * @desc boolean, default False
     */
    public set show_metadata(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_metadata`, value)
    }

    /**
     * Show track names and status
     * @desc boolean, default False
     */
    public set show_names(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_names`, value)
    }

    /**
     * Show red channel in the frame
     * @desc boolean, default False
     */
    public set show_red_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_red_channel`, value)
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
    public set show_region_toolbar(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_toolbar`, value)
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
     * Show stable footage in editor (if stabilization is enabled)
     * @desc boolean, default False
     */
    public set show_stable(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stable`, value)
    }

    /**
     * Show markers in a more compact manner
     * @desc boolean, default False
     */
    public set show_tiny_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_tiny_markers`, value)
    }

    /**
     * Show path of how track moves
     * @desc boolean, default False
     */
    public set show_track_path(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_track_path`, value)
    }

    /**
     * Display frame in grayscale mode
     * @desc boolean, default False
     */
    public set use_grayscale_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_grayscale_preview`, value)
    }

    /**
     * Use manual calibration helpers
     * @desc boolean, default False
     */
    public set use_manual_calibration(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_manual_calibration`, value)
    }

    /**
     * Mute footage and show black background instead
     * @desc boolean, default False
     */
    public set use_mute_footage(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mute_footage`, value)
    }

    /**
     * Type of the clip editor view
     * @desc enum in ['CLIP', 'GRAPH', 'DOPESHEET'], default 'CLIP'
     */
    public set view(value: 'CLIP' | 'GRAPH' | 'DOPESHEET') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view`, value)
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
