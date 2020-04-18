import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingMarkers } from './MovieTrackingMarkers'
import { MovieTrackingMarker } from './MovieTrackingMarker'
import { GreasePencil } from './GreasePencil'

/**
 * MovieTrackingTrack
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingTrack.html
 */
export class MovieTrackingTrack {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Average error of re-projection
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get average_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.average_error`)
    }

    /**
     * Position of bundle reconstructed from this track
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get bundle(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bundle`, 'number', 3)
    }

    /**
     * True if track has a valid bundle
     * @desc boolean, default False, (readonly)
     */
    public get has_bundle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_bundle`)
    }

    /**
     * Collection of markers in track
     * @desc MovieTrackingMarkers bpy_prop_collection of MovieTrackingMarker, (readonly)
     */
    public get markers(): BlenderCollection<MovieTrackingMarker> & Indexable<MovieTrackingMarker> & MovieTrackingMarkers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.markers`, MovieTrackingMarkers, MovieTrackingMarker)
    }

    /**
     * Color of the track in the Movie Clip Editor and the 3D viewport after a solve
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Minimal value of correlation between matched pattern and reference that is still treated as successful tracking
     * @desc float in [0, 1], default 0.0
     */
    public get correlation_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.correlation_min`)
    }

    /**
     * Every tracking cycle, this number of frames are tracked
     * @desc int in [0, 32767], default 0
     */
    public get frames_limit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frames_limit`)
    }

    /**
     * Grease pencil data for this track
     * @desc GreasePencil
     */
    public get grease_pencil(): GreasePencil {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grease_pencil`, GreasePencil)
    }

    /**
     * Track is hidden
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Track is locked and all changes to it are disabled
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * Distance from image boundary at which marker stops tracking
     * @desc int in [0, 300], default 0
     */
    public get margin(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.margin`)
    }

    /**
     * Default motion model to use for tracking
     * @desc enum in ['Perspective', 'Affine', 'LocRotScale', 'LocScale', 'LocRot', 'Loc'], default 'Loc'
     */
    public get motion_model(): 'Perspective' | 'Affine' | 'LocRotScale' | 'LocScale' | 'LocRot' | 'Loc' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.motion_model`)
    }

    /**
     * Unique name of track
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Offset of track from the parenting point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 2)
    }

    /**
     * Track pattern from given frame when tracking marker to next frame
     * @desc enum in ['KEYFRAME', 'PREV_FRAME'], default 'KEYFRAME'
     */
    public get pattern_match(): 'KEYFRAME' | 'PREV_FRAME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pattern_match`)
    }

    /**
     * Track is selected
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Track’s anchor point is selected
     * @desc boolean, default False
     */
    public get select_anchor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_anchor`)
    }

    /**
     * Track’s pattern area is selected
     * @desc boolean, default False
     */
    public get select_pattern(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_pattern`)
    }

    /**
     * Track’s search area is selected
     * @desc boolean, default False
     */
    public get select_search(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_search`)
    }

    /**
     * Apply track’s mask on displaying preview
     * @desc boolean, default False
     */
    public get use_alpha_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha_preview`)
    }

    /**
     * Use blue channel from footage for tracking
     * @desc boolean, default False
     */
    public get use_blue_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_blue_channel`)
    }

    /**
     * Use a brute-force translation only pre-track before refinement
     * @desc boolean, default False
     */
    public get use_brute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_brute`)
    }

    /**
     * Use custom color instead of theme-defined
     * @desc boolean, default False
     */
    public get use_custom_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_color`)
    }

    /**
     * Display what the tracking algorithm sees in the preview
     * @desc boolean, default False
     */
    public get use_grayscale_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_grayscale_preview`)
    }

    /**
     * Use green channel from footage for tracking
     * @desc boolean, default False
     */
    public get use_green_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_green_channel`)
    }

    /**
     * Use a grease pencil data-block as a mask to use only specified areas of pattern when tracking
     * @desc boolean, default False
     */
    public get use_mask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mask`)
    }

    /**
     * Normalize light intensities while tracking. Slower
     * @desc boolean, default False
     */
    public get use_normalization(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normalization`)
    }

    /**
     * Use red channel from footage for tracking
     * @desc boolean, default False
     */
    public get use_red_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_red_channel`)
    }

    /**
     * Influence of this track on a final solution
     * @desc float in [0, 1], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Influence of this track on 2D stabilization
     * @desc float in [0, 1], default 0.0
     */
    public get weight_stab(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_stab`)
    }

    /**
     * Color of the track in the Movie Clip Editor and the 3D viewport after a solve
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Minimal value of correlation between matched pattern and reference that is still treated as successful tracking
     * @desc float in [0, 1], default 0.0
     */
    public set correlation_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.correlation_min`, value)
    }

    /**
     * Every tracking cycle, this number of frames are tracked
     * @desc int in [0, 32767], default 0
     */
    public set frames_limit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frames_limit`, value)
    }

    /**
     * Grease pencil data for this track
     * @desc GreasePencil
     */
    public set grease_pencil(value: GreasePencil) {
        PythonInterop.setClass(this.interop, `${this.accessor}.grease_pencil`, value)
    }

    /**
     * Track is hidden
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Track is locked and all changes to it are disabled
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * Distance from image boundary at which marker stops tracking
     * @desc int in [0, 300], default 0
     */
    public set margin(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.margin`, value)
    }

    /**
     * Default motion model to use for tracking
     * @desc enum in ['Perspective', 'Affine', 'LocRotScale', 'LocScale', 'LocRot', 'Loc'], default 'Loc'
     */
    public set motion_model(value: 'Perspective' | 'Affine' | 'LocRotScale' | 'LocScale' | 'LocRot' | 'Loc') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.motion_model`, value)
    }

    /**
     * Unique name of track
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Offset of track from the parenting point
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Track pattern from given frame when tracking marker to next frame
     * @desc enum in ['KEYFRAME', 'PREV_FRAME'], default 'KEYFRAME'
     */
    public set pattern_match(value: 'KEYFRAME' | 'PREV_FRAME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pattern_match`, value)
    }

    /**
     * Track is selected
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Track’s anchor point is selected
     * @desc boolean, default False
     */
    public set select_anchor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_anchor`, value)
    }

    /**
     * Track’s pattern area is selected
     * @desc boolean, default False
     */
    public set select_pattern(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_pattern`, value)
    }

    /**
     * Track’s search area is selected
     * @desc boolean, default False
     */
    public set select_search(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_search`, value)
    }

    /**
     * Apply track’s mask on displaying preview
     * @desc boolean, default False
     */
    public set use_alpha_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha_preview`, value)
    }

    /**
     * Use blue channel from footage for tracking
     * @desc boolean, default False
     */
    public set use_blue_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_blue_channel`, value)
    }

    /**
     * Use a brute-force translation only pre-track before refinement
     * @desc boolean, default False
     */
    public set use_brute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_brute`, value)
    }

    /**
     * Use custom color instead of theme-defined
     * @desc boolean, default False
     */
    public set use_custom_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_color`, value)
    }

    /**
     * Display what the tracking algorithm sees in the preview
     * @desc boolean, default False
     */
    public set use_grayscale_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_grayscale_preview`, value)
    }

    /**
     * Use green channel from footage for tracking
     * @desc boolean, default False
     */
    public set use_green_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_green_channel`, value)
    }

    /**
     * Use a grease pencil data-block as a mask to use only specified areas of pattern when tracking
     * @desc boolean, default False
     */
    public set use_mask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mask`, value)
    }

    /**
     * Normalize light intensities while tracking. Slower
     * @desc boolean, default False
     */
    public set use_normalization(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normalization`, value)
    }

    /**
     * Use red channel from footage for tracking
     * @desc boolean, default False
     */
    public set use_red_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_red_channel`, value)
    }

    /**
     * Influence of this track on a final solution
     * @desc float in [0, 1], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    /**
     * Influence of this track on 2D stabilization
     * @desc float in [0, 1], default 0.0
     */
    public set weight_stab(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_stab`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
