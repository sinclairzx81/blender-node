import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { EffectorWeights } from './EffectorWeights'
import { PointCache } from './PointCache'
import { Collection } from './Collection'
import { Texture } from './Texture'

/**
 * DynamicPaintSurface
 * 
 * https://docs.blender.org/api/current/bpy.types.DynamicPaintSurface.html
 */
export class DynamicPaintSurface {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc EffectorWeights, (readonly)
     */
    public get effector_weights(): EffectorWeights {
        return PythonInterop.getClass(this.interop, `${this.accessor}.effector_weights`, EffectorWeights)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_cache_user(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_cache_user`)
    }

    /**
     * 
     * @desc PointCache, (readonly, never None)
     */
    public get point_cache(): PointCache {
        return PythonInterop.getClass(this.interop, `${this.accessor}.point_cache`, PointCache)
    }

    /**
     * Only use brush objects from this collection
     * @desc Collection
     */
    public get brush_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.brush_collection`, Collection)
    }

    /**
     * Adjust influence brush objects have on this surface
     * @desc float in [0, 1], default 0.0
     */
    public get brush_influence_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.brush_influence_scale`)
    }

    /**
     * Adjust radius of proximity brushes or particles for this surface
     * @desc float in [0, 10], default 0.0
     */
    public get brush_radius_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.brush_radius_scale`)
    }

    /**
     * The wetness level when colors start to shift to the background
     * @desc float in [0, 1], default 0.0
     */
    public get color_dry_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_dry_threshold`)
    }

    /**
     * How fast colors get mixed within wet paint
     * @desc float in [0, 2], default 0.0
     */
    public get color_spread_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_spread_speed`)
    }

    /**
     * Maximum level of depth intersection in object space (use 0.0 to disable)
     * @desc float in [0, 50], default 0.0
     */
    public get depth_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.depth_clamp`)
    }

    /**
     * Strength of displace when applied to the mesh
     * @desc float in [-50, 50], default 0.0
     */
    public get displace_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.displace_factor`)
    }

    /**
     * 
     * @desc enum in ['DISPLACE', 'DEPTH'], default 'DISPLACE'
     */
    public get displace_type(): 'DISPLACE' | 'DEPTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.displace_type`)
    }

    /**
     * Approximately in how many frames should dissolve happen
     * @desc int in [1, 10000], default 0
     */
    public get dissolve_speed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dissolve_speed`)
    }

    /**
     * How much surface acceleration affects dripping
     * @desc float in [-200, 200], default 0.0
     */
    public get drip_acceleration(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.drip_acceleration`)
    }

    /**
     * How much surface velocity affects dripping
     * @desc float in [-200, 200], default 0.0
     */
    public get drip_velocity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.drip_velocity`)
    }

    /**
     * Approximately in how many frames should drying happen
     * @desc int in [1, 10000], default 0
     */
    public get dry_speed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dry_speed`)
    }

    /**
     * 
     * @desc enum in ['SPREAD', 'DRIP', 'SHRINK'], default 'SPREAD'
     */
    public get effect_ui(): 'SPREAD' | 'DRIP' | 'SHRINK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.effect_ui`)
    }

    /**
     * Simulation end frame
     * @desc int in [1, 1048574], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Simulation start frame
     * @desc int in [1, 1048574], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Do extra frames between scene frames to ensure smooth motion
     * @desc int in [0, 20], default 0
     */
    public get frame_substeps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_substeps`)
    }

    /**
     * 
     * @desc enum in ['PNG', 'OPENEXR'], default 'PNG'
     */
    public get image_fileformat(): 'PNG' | 'OPENEXR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.image_fileformat`)
    }

    /**
     * Directory to save the textures
     * @desc string, default '', (never None)
     */
    public get image_output_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.image_output_path`)
    }

    /**
     * Output image resolution
     * @desc int in [16, 4096], default 0
     */
    public get image_resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.image_resolution`)
    }

    /**
     * Initial color of the surface
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get init_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.init_color`, 'number', 4)
    }

    /**
     * 
     * @desc enum in ['NONE', 'COLOR', 'TEXTURE', 'VERTEX_COLOR'], default 'NONE'
     */
    public get init_color_type(): 'NONE' | 'COLOR' | 'TEXTURE' | 'VERTEX_COLOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.init_color_type`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get init_layername(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.init_layername`)
    }

    /**
     * 
     * @desc Texture
     */
    public get init_texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.init_texture`, Texture)
    }

    /**
     * Toggle whether surface is processed or ignored
     * @desc boolean, default False
     */
    public get is_active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_active`)
    }

    /**
     * Surface name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Name used to save output from this surface
     * @desc string, default '', (never None)
     */
    public get output_name_a(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.output_name_a`)
    }

    /**
     * Name used to save output from this surface
     * @desc string, default '', (never None)
     */
    public get output_name_b(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.output_name_b`)
    }

    /**
     * How fast shrink effect moves on the canvas surface
     * @desc float in [0.001, 10], default 0.0
     */
    public get shrink_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shrink_speed`)
    }

    /**
     * How fast spread effect moves on the canvas surface
     * @desc float in [0.001, 10], default 0.0
     */
    public get spread_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spread_speed`)
    }

    /**
     * Surface Format
     * @desc enum in ['VERTEX', 'IMAGE'], default 'VERTEX'
     */
    public get surface_format(): 'VERTEX' | 'IMAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.surface_format`)
    }

    /**
     * Surface Type
     * @desc enum in ['PAINT'], default 'PAINT'
     */
    public get surface_type(): 'PAINT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.surface_type`)
    }

    /**
     * Use 5x multisampling to smooth paint edges
     * @desc boolean, default False
     */
    public get use_antialiasing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_antialiasing`)
    }

    /**
     * Enable to make surface changes disappear over time
     * @desc boolean, default False
     */
    public get use_dissolve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dissolve`)
    }

    /**
     * Use logarithmic dissolve (makes high values to fade faster than low values)
     * @desc boolean, default False
     */
    public get use_dissolve_log(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dissolve_log`)
    }

    /**
     * Process drip effect (drip wet paint to gravity direction)
     * @desc boolean, default False
     */
    public get use_drip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_drip`)
    }

    /**
     * Use logarithmic drying (makes high values to dry faster than low values)
     * @desc boolean, default False
     */
    public get use_dry_log(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dry_log`)
    }

    /**
     * Enable to make surface wetness dry over time
     * @desc boolean, default False
     */
    public get use_drying(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_drying`)
    }

    /**
     * New displace is added cumulatively on top of existing
     * @desc boolean, default False
     */
    public get use_incremental_displace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_incremental_displace`)
    }

    /**
     * Save this output layer
     * @desc boolean, default False
     */
    public get use_output_a(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_output_a`)
    }

    /**
     * Save this output layer
     * @desc boolean, default False
     */
    public get use_output_b(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_output_b`)
    }

    /**
     * Multiply color by alpha (recommended for Blender input)
     * @desc boolean, default False
     */
    public get use_premultiply(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_premultiply`)
    }

    /**
     * Process shrink effect (shrink paint areas)
     * @desc boolean, default False
     */
    public get use_shrink(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_shrink`)
    }

    /**
     * Process spread effect (spread wet paint around surface)
     * @desc boolean, default False
     */
    public get use_spread(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spread`)
    }

    /**
     * Pass waves through mesh edges
     * @desc boolean, default False
     */
    public get use_wave_open_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_wave_open_border`)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Wave damping factor
     * @desc float in [0, 1], default 0.0
     */
    public get wave_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_damping`)
    }

    /**
     * Limit maximum steepness of wave slope between simulation points (use higher values for smoother waves at expense of reduced detail)
     * @desc float in [0, 10], default 0.0
     */
    public get wave_smoothness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_smoothness`)
    }

    /**
     * Wave propagation speed
     * @desc float in [0.01, 5], default 0.0
     */
    public get wave_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_speed`)
    }

    /**
     * Spring force that pulls water level back to zero
     * @desc float in [0, 1], default 0.0
     */
    public get wave_spring(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_spring`)
    }

    /**
     * Wave time scaling factor
     * @desc float in [0.01, 3], default 0.0
     */
    public get wave_timescale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_timescale`)
    }

    /**
     * Only use brush objects from this collection
     * @desc Collection
     */
    public set brush_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.brush_collection`, value)
    }

    /**
     * Adjust influence brush objects have on this surface
     * @desc float in [0, 1], default 0.0
     */
    public set brush_influence_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.brush_influence_scale`, value)
    }

    /**
     * Adjust radius of proximity brushes or particles for this surface
     * @desc float in [0, 10], default 0.0
     */
    public set brush_radius_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.brush_radius_scale`, value)
    }

    /**
     * The wetness level when colors start to shift to the background
     * @desc float in [0, 1], default 0.0
     */
    public set color_dry_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_dry_threshold`, value)
    }

    /**
     * How fast colors get mixed within wet paint
     * @desc float in [0, 2], default 0.0
     */
    public set color_spread_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_spread_speed`, value)
    }

    /**
     * Maximum level of depth intersection in object space (use 0.0 to disable)
     * @desc float in [0, 50], default 0.0
     */
    public set depth_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.depth_clamp`, value)
    }

    /**
     * Strength of displace when applied to the mesh
     * @desc float in [-50, 50], default 0.0
     */
    public set displace_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.displace_factor`, value)
    }

    /**
     * 
     * @desc enum in ['DISPLACE', 'DEPTH'], default 'DISPLACE'
     */
    public set displace_type(value: 'DISPLACE' | 'DEPTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.displace_type`, value)
    }

    /**
     * Approximately in how many frames should dissolve happen
     * @desc int in [1, 10000], default 0
     */
    public set dissolve_speed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dissolve_speed`, value)
    }

    /**
     * How much surface acceleration affects dripping
     * @desc float in [-200, 200], default 0.0
     */
    public set drip_acceleration(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.drip_acceleration`, value)
    }

    /**
     * How much surface velocity affects dripping
     * @desc float in [-200, 200], default 0.0
     */
    public set drip_velocity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.drip_velocity`, value)
    }

    /**
     * Approximately in how many frames should drying happen
     * @desc int in [1, 10000], default 0
     */
    public set dry_speed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dry_speed`, value)
    }

    /**
     * 
     * @desc enum in ['SPREAD', 'DRIP', 'SHRINK'], default 'SPREAD'
     */
    public set effect_ui(value: 'SPREAD' | 'DRIP' | 'SHRINK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.effect_ui`, value)
    }

    /**
     * Simulation end frame
     * @desc int in [1, 1048574], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Simulation start frame
     * @desc int in [1, 1048574], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Do extra frames between scene frames to ensure smooth motion
     * @desc int in [0, 20], default 0
     */
    public set frame_substeps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_substeps`, value)
    }

    /**
     * 
     * @desc enum in ['PNG', 'OPENEXR'], default 'PNG'
     */
    public set image_fileformat(value: 'PNG' | 'OPENEXR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.image_fileformat`, value)
    }

    /**
     * Directory to save the textures
     * @desc string, default '', (never None)
     */
    public set image_output_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.image_output_path`, value)
    }

    /**
     * Output image resolution
     * @desc int in [16, 4096], default 0
     */
    public set image_resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.image_resolution`, value)
    }

    /**
     * Initial color of the surface
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set init_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.init_color`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'COLOR', 'TEXTURE', 'VERTEX_COLOR'], default 'NONE'
     */
    public set init_color_type(value: 'NONE' | 'COLOR' | 'TEXTURE' | 'VERTEX_COLOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.init_color_type`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set init_layername(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.init_layername`, value)
    }

    /**
     * 
     * @desc Texture
     */
    public set init_texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.init_texture`, value)
    }

    /**
     * Toggle whether surface is processed or ignored
     * @desc boolean, default False
     */
    public set is_active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_active`, value)
    }

    /**
     * Surface name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Name used to save output from this surface
     * @desc string, default '', (never None)
     */
    public set output_name_a(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.output_name_a`, value)
    }

    /**
     * Name used to save output from this surface
     * @desc string, default '', (never None)
     */
    public set output_name_b(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.output_name_b`, value)
    }

    /**
     * How fast shrink effect moves on the canvas surface
     * @desc float in [0.001, 10], default 0.0
     */
    public set shrink_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shrink_speed`, value)
    }

    /**
     * How fast spread effect moves on the canvas surface
     * @desc float in [0.001, 10], default 0.0
     */
    public set spread_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spread_speed`, value)
    }

    /**
     * Surface Format
     * @desc enum in ['VERTEX', 'IMAGE'], default 'VERTEX'
     */
    public set surface_format(value: 'VERTEX' | 'IMAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.surface_format`, value)
    }

    /**
     * Surface Type
     * @desc enum in ['PAINT'], default 'PAINT'
     */
    public set surface_type(value: 'PAINT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.surface_type`, value)
    }

    /**
     * Use 5x multisampling to smooth paint edges
     * @desc boolean, default False
     */
    public set use_antialiasing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_antialiasing`, value)
    }

    /**
     * Enable to make surface changes disappear over time
     * @desc boolean, default False
     */
    public set use_dissolve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dissolve`, value)
    }

    /**
     * Use logarithmic dissolve (makes high values to fade faster than low values)
     * @desc boolean, default False
     */
    public set use_dissolve_log(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dissolve_log`, value)
    }

    /**
     * Process drip effect (drip wet paint to gravity direction)
     * @desc boolean, default False
     */
    public set use_drip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_drip`, value)
    }

    /**
     * Use logarithmic drying (makes high values to dry faster than low values)
     * @desc boolean, default False
     */
    public set use_dry_log(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dry_log`, value)
    }

    /**
     * Enable to make surface wetness dry over time
     * @desc boolean, default False
     */
    public set use_drying(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_drying`, value)
    }

    /**
     * New displace is added cumulatively on top of existing
     * @desc boolean, default False
     */
    public set use_incremental_displace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_incremental_displace`, value)
    }

    /**
     * Save this output layer
     * @desc boolean, default False
     */
    public set use_output_a(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_output_a`, value)
    }

    /**
     * Save this output layer
     * @desc boolean, default False
     */
    public set use_output_b(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_output_b`, value)
    }

    /**
     * Multiply color by alpha (recommended for Blender input)
     * @desc boolean, default False
     */
    public set use_premultiply(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_premultiply`, value)
    }

    /**
     * Process shrink effect (shrink paint areas)
     * @desc boolean, default False
     */
    public set use_shrink(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_shrink`, value)
    }

    /**
     * Process spread effect (spread wet paint around surface)
     * @desc boolean, default False
     */
    public set use_spread(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spread`, value)
    }

    /**
     * Pass waves through mesh edges
     * @desc boolean, default False
     */
    public set use_wave_open_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_wave_open_border`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    /**
     * Wave damping factor
     * @desc float in [0, 1], default 0.0
     */
    public set wave_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_damping`, value)
    }

    /**
     * Limit maximum steepness of wave slope between simulation points (use higher values for smoother waves at expense of reduced detail)
     * @desc float in [0, 10], default 0.0
     */
    public set wave_smoothness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_smoothness`, value)
    }

    /**
     * Wave propagation speed
     * @desc float in [0.01, 5], default 0.0
     */
    public set wave_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_speed`, value)
    }

    /**
     * Spring force that pulls water level back to zero
     * @desc float in [0, 1], default 0.0
     */
    public set wave_spring(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_spring`, value)
    }

    /**
     * Wave time scaling factor
     * @desc float in [0.01, 3], default 0.0
     */
    public set wave_timescale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_timescale`, value)
    }

    /**
     * Checks if surface output layer of given name exists
     * @desc boolean
     */
    public output_exists(options: { index?: number }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.output_exists`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
