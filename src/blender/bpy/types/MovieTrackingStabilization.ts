import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingTrack } from './MovieTrackingTrack'

/**
 * MovieTrackingStabilization
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingStabilization.html
 */
export class MovieTrackingStabilization {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Collection of tracks used for 2D stabilization (translation)
     * @desc bpy_prop_collection of MovieTrackingTrack, (readonly)
     */
    public get rotation_tracks(): BlenderCollection<MovieTrackingTrack> & Indexable<MovieTrackingTrack> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.rotation_tracks`, MovieTrackingTrack)
    }

    /**
     * Collection of tracks used for 2D stabilization (translation)
     * @desc bpy_prop_collection of MovieTrackingTrack, (readonly)
     */
    public get tracks(): BlenderCollection<MovieTrackingTrack> & Indexable<MovieTrackingTrack> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.tracks`, MovieTrackingTrack)
    }

    /**
     * Index of active track in rotation stabilization tracks list
     * @desc int in [-inf, inf], default 0
     */
    public get active_rotation_track_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_rotation_track_index`)
    }

    /**
     * Index of active track in translation stabilization tracks list
     * @desc int in [-inf, inf], default 0
     */
    public get active_track_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_track_index`)
    }

    /**
     * Reference point to anchor stabilization (other frames will be adjusted relative to this frame’s position)
     * @desc int in [0, 1048574], default 0
     */
    public get anchor_frame(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.anchor_frame`)
    }

    /**
     * Interpolation to use for sub-pixel shifts and rotations due to stabilization
     * @desc enum in ['NEAREST', 'BILINEAR', 'BICUBIC'], default 'NEAREST'
     */
    public get filter_type(): 'NEAREST' | 'BILINEAR' | 'BICUBIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * Influence of stabilization algorithm on footage location
     * @desc float in [0, 1], default 0.0
     */
    public get influence_location(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence_location`)
    }

    /**
     * Influence of stabilization algorithm on footage rotation
     * @desc float in [0, 1], default 0.0
     */
    public get influence_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence_rotation`)
    }

    /**
     * Influence of stabilization algorithm on footage scale
     * @desc float in [0, 1], default 0.0
     */
    public get influence_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence_scale`)
    }

    /**
     * Limit the amount of automatic scaling
     * @desc float in [0, 10], default 0.0
     */
    public get scale_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_max`)
    }

    /**
     * Show UI list of tracks participating in stabilization
     * @desc boolean, default False
     */
    public get show_tracks_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_tracks_expanded`)
    }

    /**
     * Known relative offset of original shot, will be subtracted (e.g. for panning shot, can be animated)
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get target_position(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.target_position`, 'number', 2)
    }

    /**
     * Rotation present on original shot, will be compensated (e.g. for deliberate tilting)
     * @desc float in [-inf, inf], default 0.0
     */
    public get target_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.target_rotation`)
    }

    /**
     * Explicitly scale resulting frame to compensate zoom of original shot
     * @desc float in [1.192e-07, inf], default 0.0
     */
    public get target_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.target_scale`)
    }

    /**
     * Use 2D stabilization for footage
     * @desc boolean, default False
     */
    public get use_2d_stabilization(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_2d_stabilization`)
    }

    /**
     * Automatically scale footage to cover unfilled areas when stabilizing
     * @desc boolean, default False
     */
    public get use_autoscale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_autoscale`)
    }

    /**
     * Stabilize detected rotation around center of frame
     * @desc boolean, default False
     */
    public get use_stabilize_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stabilize_rotation`)
    }

    /**
     * Compensate any scale changes relative to center of rotation
     * @desc boolean, default False
     */
    public get use_stabilize_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stabilize_scale`)
    }

    /**
     * Index of active track in rotation stabilization tracks list
     * @desc int in [-inf, inf], default 0
     */
    public set active_rotation_track_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_rotation_track_index`, value)
    }

    /**
     * Index of active track in translation stabilization tracks list
     * @desc int in [-inf, inf], default 0
     */
    public set active_track_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_track_index`, value)
    }

    /**
     * Reference point to anchor stabilization (other frames will be adjusted relative to this frame’s position)
     * @desc int in [0, 1048574], default 0
     */
    public set anchor_frame(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.anchor_frame`, value)
    }

    /**
     * Interpolation to use for sub-pixel shifts and rotations due to stabilization
     * @desc enum in ['NEAREST', 'BILINEAR', 'BICUBIC'], default 'NEAREST'
     */
    public set filter_type(value: 'NEAREST' | 'BILINEAR' | 'BICUBIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * Influence of stabilization algorithm on footage location
     * @desc float in [0, 1], default 0.0
     */
    public set influence_location(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence_location`, value)
    }

    /**
     * Influence of stabilization algorithm on footage rotation
     * @desc float in [0, 1], default 0.0
     */
    public set influence_rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence_rotation`, value)
    }

    /**
     * Influence of stabilization algorithm on footage scale
     * @desc float in [0, 1], default 0.0
     */
    public set influence_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence_scale`, value)
    }

    /**
     * Limit the amount of automatic scaling
     * @desc float in [0, 10], default 0.0
     */
    public set scale_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_max`, value)
    }

    /**
     * Show UI list of tracks participating in stabilization
     * @desc boolean, default False
     */
    public set show_tracks_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_tracks_expanded`, value)
    }

    /**
     * Known relative offset of original shot, will be subtracted (e.g. for panning shot, can be animated)
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set target_position(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.target_position`, value)
    }

    /**
     * Rotation present on original shot, will be compensated (e.g. for deliberate tilting)
     * @desc float in [-inf, inf], default 0.0
     */
    public set target_rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.target_rotation`, value)
    }

    /**
     * Explicitly scale resulting frame to compensate zoom of original shot
     * @desc float in [1.192e-07, inf], default 0.0
     */
    public set target_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.target_scale`, value)
    }

    /**
     * Use 2D stabilization for footage
     * @desc boolean, default False
     */
    public set use_2d_stabilization(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_2d_stabilization`, value)
    }

    /**
     * Automatically scale footage to cover unfilled areas when stabilizing
     * @desc boolean, default False
     */
    public set use_autoscale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_autoscale`, value)
    }

    /**
     * Stabilize detected rotation around center of frame
     * @desc boolean, default False
     */
    public set use_stabilize_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stabilize_rotation`, value)
    }

    /**
     * Compensate any scale changes relative to center of rotation
     * @desc boolean, default False
     */
    public set use_stabilize_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stabilize_scale`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
