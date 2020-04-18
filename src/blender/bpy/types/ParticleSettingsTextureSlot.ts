import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { TextureSlot } from './TextureSlot'
import { BlenderObject } from './BlenderObject'

/**
 * ParticleSettingsTextureSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleSettingsTextureSlot.html
 */
export class ParticleSettingsTextureSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount texture affects child clump
     * @desc float in [-inf, inf], default 1.0
     */
    public get clump_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clump_factor`)
    }

    /**
     * Amount texture affects particle damping
     * @desc float in [-inf, inf], default 1.0
     */
    public get damp_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damp_factor`)
    }

    /**
     * Amount texture affects particle density
     * @desc float in [-inf, inf], default 1.0
     */
    public get density_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.density_factor`)
    }

    /**
     * Amount texture affects particle force fields
     * @desc float in [-inf, inf], default 1.0
     */
    public get field_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.field_factor`)
    }

    /**
     * Amount texture affects particle gravity
     * @desc float in [-inf, inf], default 1.0
     */
    public get gravity_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gravity_factor`)
    }

    /**
     * Amount texture affects child kink amplitude
     * @desc float in [-inf, inf], default 1.0
     */
    public get kink_amp_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_amp_factor`)
    }

    /**
     * Amount texture affects child kink frequency
     * @desc float in [-inf, inf], default 1.0
     */
    public get kink_freq_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_freq_factor`)
    }

    /**
     * Amount texture affects child hair length
     * @desc float in [-inf, inf], default 1.0
     */
    public get length_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length_factor`)
    }

    /**
     * Amount texture affects particle life time
     * @desc float in [-inf, inf], default 1.0
     */
    public get life_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.life_factor`)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'CUBE', 'TUBE', 'SPHERE'], default 'FLAT'
     */
    public get mapping(): 'FLAT' | 'CUBE' | 'TUBE' | 'SPHERE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'X'
     */
    public get mapping_x(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_x`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Y'
     */
    public get mapping_y(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_y`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Z'
     */
    public get mapping_z(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_z`)
    }

    /**
     * Object to use for mapping with Object texture coordinates
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Amount texture affects child roughness
     * @desc float in [-inf, inf], default 1.0
     */
    public get rough_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rough_factor`)
    }

    /**
     * Amount texture affects physical particle size
     * @desc float in [-inf, inf], default 1.0
     */
    public get size_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_factor`)
    }

    /**
     * Texture coordinates used to map the texture onto the background
     * @desc enum in ['GLOBAL', 'OBJECT', 'UV', 'ORCO', 'STRAND'], default 'UV'
     */
    public get texture_coords(): 'GLOBAL' | 'OBJECT' | 'UV' | 'ORCO' | 'STRAND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_coords`)
    }

    /**
     * Amount texture affects particle emission time
     * @desc float in [-inf, inf], default 1.0
     */
    public get time_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_factor`)
    }

    /**
     * Amount texture affects child twist
     * @desc float in [-inf, inf], default 1.0
     */
    public get twist_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.twist_factor`)
    }

    /**
     * Affect the child clumping
     * @desc boolean, default False
     */
    public get use_map_clump(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_clump`)
    }

    /**
     * Affect the particle velocity damping
     * @desc boolean, default False
     */
    public get use_map_damp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_damp`)
    }

    /**
     * Affect the density of the particles
     * @desc boolean, default False
     */
    public get use_map_density(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_density`)
    }

    /**
     * Affect the particle force fields
     * @desc boolean, default False
     */
    public get use_map_field(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_field`)
    }

    /**
     * Affect the particle gravity
     * @desc boolean, default False
     */
    public get use_map_gravity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_gravity`)
    }

    /**
     * Affect the child kink amplitude
     * @desc boolean, default False
     */
    public get use_map_kink_amp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_kink_amp`)
    }

    /**
     * Affect the child kink frequency
     * @desc boolean, default False
     */
    public get use_map_kink_freq(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_kink_freq`)
    }

    /**
     * Affect the child hair length
     * @desc boolean, default False
     */
    public get use_map_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_length`)
    }

    /**
     * Affect the life time of the particles
     * @desc boolean, default False
     */
    public get use_map_life(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_life`)
    }

    /**
     * Affect the child rough
     * @desc boolean, default False
     */
    public get use_map_rough(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_rough`)
    }

    /**
     * Affect the particle size
     * @desc boolean, default False
     */
    public get use_map_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_size`)
    }

    /**
     * Affect the emission time of the particles
     * @desc boolean, default True
     */
    public get use_map_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_time`)
    }

    /**
     * Affect the child twist
     * @desc boolean, default False
     */
    public get use_map_twist(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_twist`)
    }

    /**
     * Affect the particle initial velocity
     * @desc boolean, default False
     */
    public get use_map_velocity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_velocity`)
    }

    /**
     * UV map to use for mapping with UV texture coordinates
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Amount texture affects particle initial velocity
     * @desc float in [-inf, inf], default 1.0
     */
    public get velocity_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_factor`)
    }

    /**
     * Amount texture affects child clump
     * @desc float in [-inf, inf], default 1.0
     */
    public set clump_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clump_factor`, value)
    }

    /**
     * Amount texture affects particle damping
     * @desc float in [-inf, inf], default 1.0
     */
    public set damp_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damp_factor`, value)
    }

    /**
     * Amount texture affects particle density
     * @desc float in [-inf, inf], default 1.0
     */
    public set density_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.density_factor`, value)
    }

    /**
     * Amount texture affects particle force fields
     * @desc float in [-inf, inf], default 1.0
     */
    public set field_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.field_factor`, value)
    }

    /**
     * Amount texture affects particle gravity
     * @desc float in [-inf, inf], default 1.0
     */
    public set gravity_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gravity_factor`, value)
    }

    /**
     * Amount texture affects child kink amplitude
     * @desc float in [-inf, inf], default 1.0
     */
    public set kink_amp_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_amp_factor`, value)
    }

    /**
     * Amount texture affects child kink frequency
     * @desc float in [-inf, inf], default 1.0
     */
    public set kink_freq_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_freq_factor`, value)
    }

    /**
     * Amount texture affects child hair length
     * @desc float in [-inf, inf], default 1.0
     */
    public set length_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.length_factor`, value)
    }

    /**
     * Amount texture affects particle life time
     * @desc float in [-inf, inf], default 1.0
     */
    public set life_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.life_factor`, value)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'CUBE', 'TUBE', 'SPHERE'], default 'FLAT'
     */
    public set mapping(value: 'FLAT' | 'CUBE' | 'TUBE' | 'SPHERE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'X'
     */
    public set mapping_x(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_x`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Y'
     */
    public set mapping_y(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_y`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Z'
     */
    public set mapping_z(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_z`, value)
    }

    /**
     * Object to use for mapping with Object texture coordinates
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Amount texture affects child roughness
     * @desc float in [-inf, inf], default 1.0
     */
    public set rough_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rough_factor`, value)
    }

    /**
     * Amount texture affects physical particle size
     * @desc float in [-inf, inf], default 1.0
     */
    public set size_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_factor`, value)
    }

    /**
     * Texture coordinates used to map the texture onto the background
     * @desc enum in ['GLOBAL', 'OBJECT', 'UV', 'ORCO', 'STRAND'], default 'UV'
     */
    public set texture_coords(value: 'GLOBAL' | 'OBJECT' | 'UV' | 'ORCO' | 'STRAND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_coords`, value)
    }

    /**
     * Amount texture affects particle emission time
     * @desc float in [-inf, inf], default 1.0
     */
    public set time_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time_factor`, value)
    }

    /**
     * Amount texture affects child twist
     * @desc float in [-inf, inf], default 1.0
     */
    public set twist_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.twist_factor`, value)
    }

    /**
     * Affect the child clumping
     * @desc boolean, default False
     */
    public set use_map_clump(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_clump`, value)
    }

    /**
     * Affect the particle velocity damping
     * @desc boolean, default False
     */
    public set use_map_damp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_damp`, value)
    }

    /**
     * Affect the density of the particles
     * @desc boolean, default False
     */
    public set use_map_density(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_density`, value)
    }

    /**
     * Affect the particle force fields
     * @desc boolean, default False
     */
    public set use_map_field(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_field`, value)
    }

    /**
     * Affect the particle gravity
     * @desc boolean, default False
     */
    public set use_map_gravity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_gravity`, value)
    }

    /**
     * Affect the child kink amplitude
     * @desc boolean, default False
     */
    public set use_map_kink_amp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_kink_amp`, value)
    }

    /**
     * Affect the child kink frequency
     * @desc boolean, default False
     */
    public set use_map_kink_freq(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_kink_freq`, value)
    }

    /**
     * Affect the child hair length
     * @desc boolean, default False
     */
    public set use_map_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_length`, value)
    }

    /**
     * Affect the life time of the particles
     * @desc boolean, default False
     */
    public set use_map_life(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_life`, value)
    }

    /**
     * Affect the child rough
     * @desc boolean, default False
     */
    public set use_map_rough(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_rough`, value)
    }

    /**
     * Affect the particle size
     * @desc boolean, default False
     */
    public set use_map_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_size`, value)
    }

    /**
     * Affect the emission time of the particles
     * @desc boolean, default True
     */
    public set use_map_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_time`, value)
    }

    /**
     * Affect the child twist
     * @desc boolean, default False
     */
    public set use_map_twist(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_twist`, value)
    }

    /**
     * Affect the particle initial velocity
     * @desc boolean, default False
     */
    public set use_map_velocity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_velocity`, value)
    }

    /**
     * UV map to use for mapping with UV texture coordinates
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    /**
     * Amount texture affects particle initial velocity
     * @desc float in [-inf, inf], default 1.0
     */
    public set velocity_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_factor`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
