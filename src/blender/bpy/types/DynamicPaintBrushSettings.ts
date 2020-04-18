import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ColorRamp } from './ColorRamp'
import { ParticleSystem } from './ParticleSystem'

/**
 * DynamicPaintBrushSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.DynamicPaintBrushSettings.html
 */
export class DynamicPaintBrushSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color ramp used to define proximity falloff
     * @desc ColorRamp, (readonly)
     */
    public get paint_ramp(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.paint_ramp`, ColorRamp)
    }

    /**
     * Color ramp used to define brush velocity effect
     * @desc ColorRamp, (readonly)
     */
    public get velocity_ramp(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.velocity_ramp`, ColorRamp)
    }

    /**
     * Proximity falloff is applied inside the volume
     * @desc boolean, default False
     */
    public get invert_proximity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_proximity`)
    }

    /**
     * Paint alpha
     * @desc float in [0, 1], default 0.0
     */
    public get paint_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.paint_alpha`)
    }

    /**
     * Color of the paint
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get paint_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.paint_color`, 'number', 3)
    }

    /**
     * Maximum distance from brush to mesh surface to affect paint
     * @desc float in [0, 500], default 0.0
     */
    public get paint_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.paint_distance`)
    }

    /**
     * 
     * @desc enum in ['PARTICLE_SYSTEM', 'POINT', 'DISTANCE', 'VOLUME_DISTANCE', 'VOLUME'], default 'VOLUME'
     */
    public get paint_source(): 'PARTICLE_SYSTEM' | 'POINT' | 'DISTANCE' | 'VOLUME_DISTANCE' | 'VOLUME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.paint_source`)
    }

    /**
     * Paint wetness, visible in wetmap (some effects only affect wet paint)
     * @desc float in [0, 1], default 0.0
     */
    public get paint_wetness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.paint_wetness`)
    }

    /**
     * The particle system to paint with
     * @desc ParticleSystem
     */
    public get particle_system(): ParticleSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.particle_system`, ParticleSystem)
    }

    /**
     * Proximity falloff type
     * @desc enum in ['SMOOTH', 'CONSTANT', 'RAMP'], default 'CONSTANT'
     */
    public get proximity_falloff(): 'SMOOTH' | 'CONSTANT' | 'RAMP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.proximity_falloff`)
    }

    /**
     * Ray direction to use for projection (if brush object is located in that direction it’s painted)
     * @desc enum in ['CANVAS', 'BRUSH', 'Z_AXIS'], default 'CANVAS'
     */
    public get ray_direction(): 'CANVAS' | 'BRUSH' | 'Z_AXIS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ray_direction`)
    }

    /**
     * Smooth falloff added after solid radius
     * @desc float in [0, 10], default 0.0
     */
    public get smooth_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.smooth_radius`)
    }

    /**
     * Smudge effect strength
     * @desc float in [0, 1], default 0.0
     */
    public get smudge_strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.smudge_strength`)
    }

    /**
     * Radius that will be painted solid
     * @desc float in [0.01, 10], default 0.0
     */
    public get solid_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.solid_radius`)
    }

    /**
     * Only increase alpha value if paint alpha is higher than existing
     * @desc boolean, default False
     */
    public get use_absolute_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_absolute_alpha`)
    }

    /**
     * Negate influence inside the volume
     * @desc boolean, default False
     */
    public get use_negative_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_negative_volume`)
    }

    /**
     * Erase / remove paint instead of adding it
     * @desc boolean, default False
     */
    public get use_paint_erase(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_erase`)
    }

    /**
     * Use radius from particle settings
     * @desc boolean, default False
     */
    public get use_particle_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_particle_radius`)
    }

    /**
     * Brush is projected to canvas from defined direction within brush proximity
     * @desc boolean, default False
     */
    public get use_proximity_project(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proximity_project`)
    }

    /**
     * Only read color ramp alpha
     * @desc boolean, default False
     */
    public get use_proximity_ramp_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_proximity_ramp_alpha`)
    }

    /**
     * Make this brush to smudge existing paint as it moves
     * @desc boolean, default False
     */
    public get use_smudge(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smudge`)
    }

    /**
     * Multiply brush influence by velocity color ramp alpha
     * @desc boolean, default False
     */
    public get use_velocity_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_velocity_alpha`)
    }

    /**
     * Replace brush color by velocity color ramp
     * @desc boolean, default False
     */
    public get use_velocity_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_velocity_color`)
    }

    /**
     * Multiply brush intersection depth (displace, waves) by velocity ramp alpha
     * @desc boolean, default False
     */
    public get use_velocity_depth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_velocity_depth`)
    }

    /**
     * Velocity considered as maximum influence (Blender units per frame)
     * @desc float in [0.0001, 10], default 0.0
     */
    public get velocity_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_max`)
    }

    /**
     * Maximum level of surface intersection used to influence waves (use 0.0 to disable)
     * @desc float in [0, 50], default 0.0
     */
    public get wave_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_clamp`)
    }

    /**
     * Multiplier for wave influence of this brush
     * @desc float in [-2, 2], default 0.0
     */
    public get wave_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wave_factor`)
    }

    /**
     * 
     * @desc enum in ['CHANGE', 'DEPTH', 'FORCE', 'REFLECT'], default 'DEPTH'
     */
    public get wave_type(): 'CHANGE' | 'DEPTH' | 'FORCE' | 'REFLECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wave_type`)
    }

    /**
     * Proximity falloff is applied inside the volume
     * @desc boolean, default False
     */
    public set invert_proximity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_proximity`, value)
    }

    /**
     * Paint alpha
     * @desc float in [0, 1], default 0.0
     */
    public set paint_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.paint_alpha`, value)
    }

    /**
     * Color of the paint
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set paint_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.paint_color`, value)
    }

    /**
     * Maximum distance from brush to mesh surface to affect paint
     * @desc float in [0, 500], default 0.0
     */
    public set paint_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.paint_distance`, value)
    }

    /**
     * 
     * @desc enum in ['PARTICLE_SYSTEM', 'POINT', 'DISTANCE', 'VOLUME_DISTANCE', 'VOLUME'], default 'VOLUME'
     */
    public set paint_source(value: 'PARTICLE_SYSTEM' | 'POINT' | 'DISTANCE' | 'VOLUME_DISTANCE' | 'VOLUME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.paint_source`, value)
    }

    /**
     * Paint wetness, visible in wetmap (some effects only affect wet paint)
     * @desc float in [0, 1], default 0.0
     */
    public set paint_wetness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.paint_wetness`, value)
    }

    /**
     * The particle system to paint with
     * @desc ParticleSystem
     */
    public set particle_system(value: ParticleSystem) {
        PythonInterop.setClass(this.interop, `${this.accessor}.particle_system`, value)
    }

    /**
     * Proximity falloff type
     * @desc enum in ['SMOOTH', 'CONSTANT', 'RAMP'], default 'CONSTANT'
     */
    public set proximity_falloff(value: 'SMOOTH' | 'CONSTANT' | 'RAMP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.proximity_falloff`, value)
    }

    /**
     * Ray direction to use for projection (if brush object is located in that direction it’s painted)
     * @desc enum in ['CANVAS', 'BRUSH', 'Z_AXIS'], default 'CANVAS'
     */
    public set ray_direction(value: 'CANVAS' | 'BRUSH' | 'Z_AXIS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ray_direction`, value)
    }

    /**
     * Smooth falloff added after solid radius
     * @desc float in [0, 10], default 0.0
     */
    public set smooth_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.smooth_radius`, value)
    }

    /**
     * Smudge effect strength
     * @desc float in [0, 1], default 0.0
     */
    public set smudge_strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.smudge_strength`, value)
    }

    /**
     * Radius that will be painted solid
     * @desc float in [0.01, 10], default 0.0
     */
    public set solid_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.solid_radius`, value)
    }

    /**
     * Only increase alpha value if paint alpha is higher than existing
     * @desc boolean, default False
     */
    public set use_absolute_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_absolute_alpha`, value)
    }

    /**
     * Negate influence inside the volume
     * @desc boolean, default False
     */
    public set use_negative_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_negative_volume`, value)
    }

    /**
     * Erase / remove paint instead of adding it
     * @desc boolean, default False
     */
    public set use_paint_erase(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_erase`, value)
    }

    /**
     * Use radius from particle settings
     * @desc boolean, default False
     */
    public set use_particle_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_particle_radius`, value)
    }

    /**
     * Brush is projected to canvas from defined direction within brush proximity
     * @desc boolean, default False
     */
    public set use_proximity_project(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proximity_project`, value)
    }

    /**
     * Only read color ramp alpha
     * @desc boolean, default False
     */
    public set use_proximity_ramp_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_proximity_ramp_alpha`, value)
    }

    /**
     * Make this brush to smudge existing paint as it moves
     * @desc boolean, default False
     */
    public set use_smudge(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smudge`, value)
    }

    /**
     * Multiply brush influence by velocity color ramp alpha
     * @desc boolean, default False
     */
    public set use_velocity_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_velocity_alpha`, value)
    }

    /**
     * Replace brush color by velocity color ramp
     * @desc boolean, default False
     */
    public set use_velocity_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_velocity_color`, value)
    }

    /**
     * Multiply brush intersection depth (displace, waves) by velocity ramp alpha
     * @desc boolean, default False
     */
    public set use_velocity_depth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_velocity_depth`, value)
    }

    /**
     * Velocity considered as maximum influence (Blender units per frame)
     * @desc float in [0.0001, 10], default 0.0
     */
    public set velocity_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_max`, value)
    }

    /**
     * Maximum level of surface intersection used to influence waves (use 0.0 to disable)
     * @desc float in [0, 50], default 0.0
     */
    public set wave_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_clamp`, value)
    }

    /**
     * Multiplier for wave influence of this brush
     * @desc float in [-2, 2], default 0.0
     */
    public set wave_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wave_factor`, value)
    }

    /**
     * 
     * @desc enum in ['CHANGE', 'DEPTH', 'FORCE', 'REFLECT'], default 'DEPTH'
     */
    public set wave_type(value: 'CHANGE' | 'DEPTH' | 'FORCE' | 'REFLECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wave_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
