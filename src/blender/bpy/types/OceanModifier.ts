import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * OceanModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.OceanModifier.html
 */
export class OceanModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Whether the ocean is using cached data or simulating
     * @desc boolean, default False, (readonly)
     */
    public get is_cached(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_cached`)
    }

    /**
     * How much foam accumulates over time (baked ocean only)
     * @desc float in [0, inf], default 0.0
     */
    public get bake_foam_fade(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bake_foam_fade`)
    }

    /**
     * Choppiness of the wave’s crest (adds some horizontal component to the displacement)
     * @desc float in [0, inf], default 0.0
     */
    public get choppiness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.choppiness`)
    }

    /**
     * Damp reflected waves going in opposite direction to the wind
     * @desc float in [0, 1], default 0.0
     */
    public get damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping`)
    }

    /**
     * Depth of the solid ground below the water surface
     * @desc float in [-inf, inf], default 0.0
     */
    public get depth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.depth`)
    }

    /**
     * Path to a folder to store external baked images
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Amount of generated foam
     * @desc float in [-inf, inf], default 0.0
     */
    public get foam_coverage(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.foam_coverage`)
    }

    /**
     * Name of the vertex color layer used for foam
     * @desc string, default '', (never None)
     */
    public get foam_layer_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.foam_layer_name`)
    }

    /**
     * End frame of the ocean baking
     * @desc int in [-inf, inf], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Start frame of the ocean baking
     * @desc int in [-inf, inf], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Method of modifying geometry
     * @desc enum in ['GENERATE', 'DISPLACE'], default 'GENERATE'
     */
    public get geometry_mode(): 'GENERATE' | 'DISPLACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.geometry_mode`)
    }

    /**
     * Seed of the random generator
     * @desc int in [0, inf], default 0
     */
    public get random_seed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.random_seed`)
    }

    /**
     * Repetitions of the generated surface in X
     * @desc int in [1, 1024], default 0
     */
    public get repeat_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.repeat_x`)
    }

    /**
     * Repetitions of the generated surface in Y
     * @desc int in [1, 1024], default 0
     */
    public get repeat_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.repeat_y`)
    }

    /**
     * Resolution of the generated surface
     * @desc int in [1, 1024], default 0
     */
    public get resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution`)
    }

    /**
     * Surface scale factor (does not affect the height of the waves)
     * @desc float in [0, inf], default 0.0
     */
    public get size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size`)
    }

    /**
     * Size of the simulation domain (in meters), and of the generated geometry (in BU)
     * @desc int in [-inf, inf], default 0
     */
    public get spatial_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.spatial_size`)
    }

    /**
     * Current time of the simulation
     * @desc float in [0, inf], default 0.0
     */
    public get time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time`)
    }

    /**
     * Generate foam mask as a vertex color channel
     * @desc boolean, default False
     */
    public get use_foam(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_foam`)
    }

    /**
     * Output normals for bump mapping - disabling can speed up performance if its not needed
     * @desc boolean, default False
     */
    public get use_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normals`)
    }

    /**
     * How much the waves are aligned to each other
     * @desc float in [0, 10], default 0.0
     */
    public get wave_alignment(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_alignment`)
    }

    /**
     * Main direction of the waves when they are (partially) aligned
     * @desc float in [-inf, inf], default 0.0
     */
    public get wave_direction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_direction`)
    }

    /**
     * Scale of the displacement effect
     * @desc float in [0, inf], default 0.0
     */
    public get wave_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_scale`)
    }

    /**
     * Shortest allowed wavelength
     * @desc float in [0, inf], default 0.0
     */
    public get wave_scale_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_scale_min`)
    }

    /**
     * Wind speed
     * @desc float in [-inf, inf], default 0.0
     */
    public get wind_velocity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wind_velocity`)
    }

    /**
     * How much foam accumulates over time (baked ocean only)
     * @desc float in [0, inf], default 0.0
     */
    public set bake_foam_fade(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bake_foam_fade`, value)
    }

    /**
     * Choppiness of the wave’s crest (adds some horizontal component to the displacement)
     * @desc float in [0, inf], default 0.0
     */
    public set choppiness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.choppiness`, value)
    }

    /**
     * Damp reflected waves going in opposite direction to the wind
     * @desc float in [0, 1], default 0.0
     */
    public set damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping`, value)
    }

    /**
     * Depth of the solid ground below the water surface
     * @desc float in [-inf, inf], default 0.0
     */
    public set depth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.depth`, value)
    }

    /**
     * Path to a folder to store external baked images
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Amount of generated foam
     * @desc float in [-inf, inf], default 0.0
     */
    public set foam_coverage(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.foam_coverage`, value)
    }

    /**
     * Name of the vertex color layer used for foam
     * @desc string, default '', (never None)
     */
    public set foam_layer_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.foam_layer_name`, value)
    }

    /**
     * End frame of the ocean baking
     * @desc int in [-inf, inf], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Start frame of the ocean baking
     * @desc int in [-inf, inf], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Method of modifying geometry
     * @desc enum in ['GENERATE', 'DISPLACE'], default 'GENERATE'
     */
    public set geometry_mode(value: 'GENERATE' | 'DISPLACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.geometry_mode`, value)
    }

    /**
     * Seed of the random generator
     * @desc int in [0, inf], default 0
     */
    public set random_seed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.random_seed`, value)
    }

    /**
     * Repetitions of the generated surface in X
     * @desc int in [1, 1024], default 0
     */
    public set repeat_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.repeat_x`, value)
    }

    /**
     * Repetitions of the generated surface in Y
     * @desc int in [1, 1024], default 0
     */
    public set repeat_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.repeat_y`, value)
    }

    /**
     * Resolution of the generated surface
     * @desc int in [1, 1024], default 0
     */
    public set resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution`, value)
    }

    /**
     * Surface scale factor (does not affect the height of the waves)
     * @desc float in [0, inf], default 0.0
     */
    public set size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Size of the simulation domain (in meters), and of the generated geometry (in BU)
     * @desc int in [-inf, inf], default 0
     */
    public set spatial_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.spatial_size`, value)
    }

    /**
     * Current time of the simulation
     * @desc float in [0, inf], default 0.0
     */
    public set time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time`, value)
    }

    /**
     * Generate foam mask as a vertex color channel
     * @desc boolean, default False
     */
    public set use_foam(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_foam`, value)
    }

    /**
     * Output normals for bump mapping - disabling can speed up performance if its not needed
     * @desc boolean, default False
     */
    public set use_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normals`, value)
    }

    /**
     * How much the waves are aligned to each other
     * @desc float in [0, 10], default 0.0
     */
    public set wave_alignment(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_alignment`, value)
    }

    /**
     * Main direction of the waves when they are (partially) aligned
     * @desc float in [-inf, inf], default 0.0
     */
    public set wave_direction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_direction`, value)
    }

    /**
     * Scale of the displacement effect
     * @desc float in [0, inf], default 0.0
     */
    public set wave_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_scale`, value)
    }

    /**
     * Shortest allowed wavelength
     * @desc float in [0, inf], default 0.0
     */
    public set wave_scale_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_scale_min`, value)
    }

    /**
     * Wind speed
     * @desc float in [-inf, inf], default 0.0
     */
    public set wind_velocity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wind_velocity`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
