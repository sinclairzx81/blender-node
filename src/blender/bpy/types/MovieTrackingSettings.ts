import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieTrackingSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingSettings.html
 */
export class MovieTrackingSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Cleanup action to execute
     * @desc enum in ['SELECT', 'DELETE_TRACK', 'DELETE_SEGMENTS'], default 'SELECT'
     */
    public get clean_action(): 'SELECT' | 'DELETE_TRACK' | 'DELETE_SEGMENTS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.clean_action`)
    }

    /**
     * Effect on tracks which have a larger re-projection error
     * @desc float in [0, inf], default 0.0
     */
    public get clean_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clean_error`)
    }

    /**
     * Effect on tracks which are tracked less than the specified amount of frames
     * @desc int in [0, inf], default 0
     */
    public get clean_frames(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.clean_frames`)
    }

    /**
     * Default minimum value of correlation between matched pattern and reference that is still treated as successful tracking
     * @desc float in [0, 1], default 0.0
     */
    public get default_correlation_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_correlation_min`)
    }

    /**
     * Every tracking cycle, this number of frames are tracked
     * @desc int in [0, 32767], default 0
     */
    public get default_frames_limit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_frames_limit`)
    }

    /**
     * Default distance from image boundary at which marker stops tracking
     * @desc int in [0, 300], default 0
     */
    public get default_margin(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_margin`)
    }

    /**
     * Default motion model to use for tracking
     * @desc enum in ['Perspective', 'Affine', 'LocRotScale', 'LocScale', 'LocRot', 'Loc'], default 'Loc'
     */
    public get default_motion_model(): 'Perspective' | 'Affine' | 'LocRotScale' | 'LocScale' | 'LocRot' | 'Loc' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.default_motion_model`)
    }

    /**
     * Track pattern from given frame when tracking marker to next frame
     * @desc enum in ['KEYFRAME', 'PREV_FRAME'], default 'KEYFRAME'
     */
    public get default_pattern_match(): 'KEYFRAME' | 'PREV_FRAME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.default_pattern_match`)
    }

    /**
     * Size of pattern area for newly created tracks
     * @desc int in [5, 1000], default 0
     */
    public get default_pattern_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_pattern_size`)
    }

    /**
     * Size of search area for newly created tracks
     * @desc int in [5, 1000], default 0
     */
    public get default_search_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default_search_size`)
    }

    /**
     * Influence of newly created track on a final solution
     * @desc float in [0, 1], default 0.0
     */
    public get default_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_weight`)
    }

    /**
     * Distance between two bundles used for scene scaling
     * @desc float in [-inf, inf], default 1.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Distance between two bundles used for object scaling
     * @desc float in [0.001, 10000], default 1.0
     */
    public get object_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.object_distance`)
    }

    /**
     * Refine intrinsics during camera solving
     * @desc enum in ['NONE', 'FOCAL_LENGTH', 'FOCAL_LENGTH_RADIAL_K1', 'FOCAL_LENGTH_RADIAL_K1_K2', 'FOCAL_LENGTH_PRINCIPAL_POINT_RADIAL_K1_K2', 'FOCAL_LENGTH_PRINCIPAL_POINT', 'RADIAL_K1_K2'], default 'NONE'
     */
    public get refine_intrinsics(): 'NONE' | 'FOCAL_LENGTH' | 'FOCAL_LENGTH_RADIAL_K1' | 'FOCAL_LENGTH_RADIAL_K1_K2' | 'FOCAL_LENGTH_PRINCIPAL_POINT_RADIAL_K1_K2' | 'FOCAL_LENGTH_PRINCIPAL_POINT' | 'RADIAL_K1_K2' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.refine_intrinsics`)
    }

    /**
     * Show default options expanded in the user interface
     * @desc boolean, default False
     */
    public get show_default_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_default_expanded`)
    }

    /**
     * Show extra options expanded in the user interface
     * @desc boolean, default False
     */
    public get show_extra_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_extra_expanded`)
    }

    /**
     * Limit speed of tracking to make visual feedback easier (this does not affect the tracking quality)
     * @desc enum in ['FASTEST', 'DOUBLE', 'REALTIME', 'HALF', 'QUARTER'], default 'FASTEST'
     */
    public get speed(): 'FASTEST' | 'DOUBLE' | 'REALTIME' | 'HALF' | 'QUARTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.speed`)
    }

    /**
     * Use blue channel from footage for tracking
     * @desc boolean, default False
     */
    public get use_default_blue_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_blue_channel`)
    }

    /**
     * Use a brute-force translation-only initialization when tracking
     * @desc boolean, default False
     */
    public get use_default_brute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_brute`)
    }

    /**
     * Use green channel from footage for tracking
     * @desc boolean, default False
     */
    public get use_default_green_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_green_channel`)
    }

    /**
     * Use a grease pencil data-block as a mask to use only specified areas of pattern when tracking
     * @desc boolean, default False
     */
    public get use_default_mask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_mask`)
    }

    /**
     * Normalize light intensities while tracking (slower)
     * @desc boolean, default False
     */
    public get use_default_normalization(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_normalization`)
    }

    /**
     * Use red channel from footage for tracking
     * @desc boolean, default False
     */
    public get use_default_red_channel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_default_red_channel`)
    }

    /**
     * Automatically select keyframes when solving camera/object motion
     * @desc boolean, default False
     */
    public get use_keyframe_selection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keyframe_selection`)
    }

    /**
     * Use special solver to track a stable camera position, such as a tripod
     * @desc boolean, default False
     */
    public get use_tripod_solver(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_tripod_solver`)
    }

    /**
     * Cleanup action to execute
     * @desc enum in ['SELECT', 'DELETE_TRACK', 'DELETE_SEGMENTS'], default 'SELECT'
     */
    public set clean_action(value: 'SELECT' | 'DELETE_TRACK' | 'DELETE_SEGMENTS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.clean_action`, value)
    }

    /**
     * Effect on tracks which have a larger re-projection error
     * @desc float in [0, inf], default 0.0
     */
    public set clean_error(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clean_error`, value)
    }

    /**
     * Effect on tracks which are tracked less than the specified amount of frames
     * @desc int in [0, inf], default 0
     */
    public set clean_frames(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.clean_frames`, value)
    }

    /**
     * Default minimum value of correlation between matched pattern and reference that is still treated as successful tracking
     * @desc float in [0, 1], default 0.0
     */
    public set default_correlation_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_correlation_min`, value)
    }

    /**
     * Every tracking cycle, this number of frames are tracked
     * @desc int in [0, 32767], default 0
     */
    public set default_frames_limit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_frames_limit`, value)
    }

    /**
     * Default distance from image boundary at which marker stops tracking
     * @desc int in [0, 300], default 0
     */
    public set default_margin(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_margin`, value)
    }

    /**
     * Default motion model to use for tracking
     * @desc enum in ['Perspective', 'Affine', 'LocRotScale', 'LocScale', 'LocRot', 'Loc'], default 'Loc'
     */
    public set default_motion_model(value: 'Perspective' | 'Affine' | 'LocRotScale' | 'LocScale' | 'LocRot' | 'Loc') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.default_motion_model`, value)
    }

    /**
     * Track pattern from given frame when tracking marker to next frame
     * @desc enum in ['KEYFRAME', 'PREV_FRAME'], default 'KEYFRAME'
     */
    public set default_pattern_match(value: 'KEYFRAME' | 'PREV_FRAME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.default_pattern_match`, value)
    }

    /**
     * Size of pattern area for newly created tracks
     * @desc int in [5, 1000], default 0
     */
    public set default_pattern_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_pattern_size`, value)
    }

    /**
     * Size of search area for newly created tracks
     * @desc int in [5, 1000], default 0
     */
    public set default_search_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.default_search_size`, value)
    }

    /**
     * Influence of newly created track on a final solution
     * @desc float in [0, 1], default 0.0
     */
    public set default_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_weight`, value)
    }

    /**
     * Distance between two bundles used for scene scaling
     * @desc float in [-inf, inf], default 1.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * Distance between two bundles used for object scaling
     * @desc float in [0.001, 10000], default 1.0
     */
    public set object_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.object_distance`, value)
    }

    /**
     * Refine intrinsics during camera solving
     * @desc enum in ['NONE', 'FOCAL_LENGTH', 'FOCAL_LENGTH_RADIAL_K1', 'FOCAL_LENGTH_RADIAL_K1_K2', 'FOCAL_LENGTH_PRINCIPAL_POINT_RADIAL_K1_K2', 'FOCAL_LENGTH_PRINCIPAL_POINT', 'RADIAL_K1_K2'], default 'NONE'
     */
    public set refine_intrinsics(value: 'NONE' | 'FOCAL_LENGTH' | 'FOCAL_LENGTH_RADIAL_K1' | 'FOCAL_LENGTH_RADIAL_K1_K2' | 'FOCAL_LENGTH_PRINCIPAL_POINT_RADIAL_K1_K2' | 'FOCAL_LENGTH_PRINCIPAL_POINT' | 'RADIAL_K1_K2') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.refine_intrinsics`, value)
    }

    /**
     * Show default options expanded in the user interface
     * @desc boolean, default False
     */
    public set show_default_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_default_expanded`, value)
    }

    /**
     * Show extra options expanded in the user interface
     * @desc boolean, default False
     */
    public set show_extra_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_extra_expanded`, value)
    }

    /**
     * Limit speed of tracking to make visual feedback easier (this does not affect the tracking quality)
     * @desc enum in ['FASTEST', 'DOUBLE', 'REALTIME', 'HALF', 'QUARTER'], default 'FASTEST'
     */
    public set speed(value: 'FASTEST' | 'DOUBLE' | 'REALTIME' | 'HALF' | 'QUARTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.speed`, value)
    }

    /**
     * Use blue channel from footage for tracking
     * @desc boolean, default False
     */
    public set use_default_blue_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_blue_channel`, value)
    }

    /**
     * Use a brute-force translation-only initialization when tracking
     * @desc boolean, default False
     */
    public set use_default_brute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_brute`, value)
    }

    /**
     * Use green channel from footage for tracking
     * @desc boolean, default False
     */
    public set use_default_green_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_green_channel`, value)
    }

    /**
     * Use a grease pencil data-block as a mask to use only specified areas of pattern when tracking
     * @desc boolean, default False
     */
    public set use_default_mask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_mask`, value)
    }

    /**
     * Normalize light intensities while tracking (slower)
     * @desc boolean, default False
     */
    public set use_default_normalization(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_normalization`, value)
    }

    /**
     * Use red channel from footage for tracking
     * @desc boolean, default False
     */
    public set use_default_red_channel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_default_red_channel`, value)
    }

    /**
     * Automatically select keyframes when solving camera/object motion
     * @desc boolean, default False
     */
    public set use_keyframe_selection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keyframe_selection`, value)
    }

    /**
     * Use special solver to track a stable camera position, such as a tripod
     * @desc boolean, default False
     */
    public set use_tripod_solver(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_tripod_solver`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
