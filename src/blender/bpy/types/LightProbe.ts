import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { Collection } from './Collection'

/**
 * LightProbe
 * 
 * https://docs.blender.org/api/current/bpy.types.LightProbe.html
 */
export class LightProbe {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Type of light probe
     * @desc enum in ['CUBEMAP', 'PLANAR', 'GRID'], default 'CUBEMAP', (readonly)
     */
    public get type(): 'CUBEMAP' | 'PLANAR' | 'GRID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Probe clip end, beyond which objects will not appear in reflections
     * @desc float in [1e-06, inf], default 40.0
     */
    public get clip_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_end`)
    }

    /**
     * Probe clip start, below which objects will not appear in reflections
     * @desc float in [1e-06, inf], default 0.8
     */
    public get clip_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_start`)
    }

    /**
     * Control how fast the probe influence decreases
     * @desc float in [0, 1], default 0.2
     */
    public get falloff(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Number of sample along the x axis of the volume
     * @desc int in [1, 256], default 4
     */
    public get grid_resolution_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grid_resolution_x`)
    }

    /**
     * Number of sample along the y axis of the volume
     * @desc int in [1, 256], default 4
     */
    public get grid_resolution_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grid_resolution_y`)
    }

    /**
     * Number of sample along the z axis of the volume
     * @desc int in [1, 256], default 4
     */
    public get grid_resolution_z(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grid_resolution_z`)
    }

    /**
     * Influence distance of the probe
     * @desc float in [0, inf], default 2.5
     */
    public get influence_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence_distance`)
    }

    /**
     * Type of influence volume
     * @desc enum in ['ELIPSOID', 'BOX'], default 'ELIPSOID'
     */
    public get influence_type(): 'ELIPSOID' | 'BOX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.influence_type`)
    }

    /**
     * Modify the intensity of the lighting captured by this probe
     * @desc float in [0, inf], default 1.0
     */
    public get intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.intensity`)
    }

    /**
     * Invert visibility collection
     * @desc boolean, default False
     */
    public get invert_visibility_collection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_visibility_collection`)
    }

    /**
     * Lowest corner of the parallax bounding box
     * @desc float in [0, inf], default 2.5
     */
    public get parallax_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.parallax_distance`)
    }

    /**
     * Type of parallax volume
     * @desc enum in ['ELIPSOID', 'BOX'], default 'ELIPSOID'
     */
    public get parallax_type(): 'ELIPSOID' | 'BOX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.parallax_type`)
    }

    /**
     * Show the clipping distances in the 3D view
     * @desc boolean, default False
     */
    public get show_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_clip`)
    }

    /**
     * Show captured lighting data into the 3D view for debugging purpose
     * @desc boolean, default False
     */
    public get show_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_data`)
    }

    /**
     * Show the influence volume in the 3D view
     * @desc boolean, default True
     */
    public get show_influence(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_influence`)
    }

    /**
     * Show the parallax correction volume in the 3D view
     * @desc boolean, default False
     */
    public get show_parallax(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_parallax`)
    }

    /**
     * Enable custom settings for the parallax correction volume
     * @desc boolean, default False
     */
    public get use_custom_parallax(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_parallax`)
    }

    /**
     * Bias for reducing light-bleed on variance shadow maps
     * @desc float in [0, 1], default 0.0
     */
    public get visibility_bleed_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.visibility_bleed_bias`)
    }

    /**
     * Filter size of the visibility blur
     * @desc float in [0, 1], default 0.2
     */
    public get visibility_blur(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.visibility_blur`)
    }

    /**
     * Bias for reducing self shadowing
     * @desc float in [0.001, 9999], default 1.0
     */
    public get visibility_buffer_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.visibility_buffer_bias`)
    }

    /**
     * Restrict objects visible for this probe
     * @desc Collection
     */
    public get visibility_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.visibility_collection`, Collection)
    }

    /**
     * Probe clip end, beyond which objects will not appear in reflections
     * @desc float in [1e-06, inf], default 40.0
     */
    public set clip_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_end`, value)
    }

    /**
     * Probe clip start, below which objects will not appear in reflections
     * @desc float in [1e-06, inf], default 0.8
     */
    public set clip_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_start`, value)
    }

    /**
     * Control how fast the probe influence decreases
     * @desc float in [0, 1], default 0.2
     */
    public set falloff(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff`, value)
    }

    /**
     * Number of sample along the x axis of the volume
     * @desc int in [1, 256], default 4
     */
    public set grid_resolution_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grid_resolution_x`, value)
    }

    /**
     * Number of sample along the y axis of the volume
     * @desc int in [1, 256], default 4
     */
    public set grid_resolution_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grid_resolution_y`, value)
    }

    /**
     * Number of sample along the z axis of the volume
     * @desc int in [1, 256], default 4
     */
    public set grid_resolution_z(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grid_resolution_z`, value)
    }

    /**
     * Influence distance of the probe
     * @desc float in [0, inf], default 2.5
     */
    public set influence_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence_distance`, value)
    }

    /**
     * Type of influence volume
     * @desc enum in ['ELIPSOID', 'BOX'], default 'ELIPSOID'
     */
    public set influence_type(value: 'ELIPSOID' | 'BOX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.influence_type`, value)
    }

    /**
     * Modify the intensity of the lighting captured by this probe
     * @desc float in [0, inf], default 1.0
     */
    public set intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.intensity`, value)
    }

    /**
     * Invert visibility collection
     * @desc boolean, default False
     */
    public set invert_visibility_collection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_visibility_collection`, value)
    }

    /**
     * Lowest corner of the parallax bounding box
     * @desc float in [0, inf], default 2.5
     */
    public set parallax_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.parallax_distance`, value)
    }

    /**
     * Type of parallax volume
     * @desc enum in ['ELIPSOID', 'BOX'], default 'ELIPSOID'
     */
    public set parallax_type(value: 'ELIPSOID' | 'BOX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.parallax_type`, value)
    }

    /**
     * Show the clipping distances in the 3D view
     * @desc boolean, default False
     */
    public set show_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_clip`, value)
    }

    /**
     * Show captured lighting data into the 3D view for debugging purpose
     * @desc boolean, default False
     */
    public set show_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_data`, value)
    }

    /**
     * Show the influence volume in the 3D view
     * @desc boolean, default True
     */
    public set show_influence(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_influence`, value)
    }

    /**
     * Show the parallax correction volume in the 3D view
     * @desc boolean, default False
     */
    public set show_parallax(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_parallax`, value)
    }

    /**
     * Enable custom settings for the parallax correction volume
     * @desc boolean, default False
     */
    public set use_custom_parallax(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_parallax`, value)
    }

    /**
     * Bias for reducing light-bleed on variance shadow maps
     * @desc float in [0, 1], default 0.0
     */
    public set visibility_bleed_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.visibility_bleed_bias`, value)
    }

    /**
     * Filter size of the visibility blur
     * @desc float in [0, 1], default 0.2
     */
    public set visibility_blur(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.visibility_blur`, value)
    }

    /**
     * Bias for reducing self shadowing
     * @desc float in [0.001, 9999], default 1.0
     */
    public set visibility_buffer_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.visibility_buffer_bias`, value)
    }

    /**
     * Restrict objects visible for this probe
     * @desc Collection
     */
    public set visibility_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.visibility_collection`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
