import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'
import { Texture } from './Texture'

/**
 * FieldSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.FieldSettings.html
 */
export class FieldSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Affect particle’s location
     * @desc boolean, default False
     */
    public get apply_to_location(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.apply_to_location`)
    }

    /**
     * Affect particle’s dynamic rotation
     * @desc boolean, default False
     */
    public get apply_to_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.apply_to_rotation`)
    }

    /**
     * Maximum distance for the field to work
     * @desc float in [0, inf], default 0.0
     */
    public get distance_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance_max`)
    }

    /**
     * Minimum distance for the field’s fall-off
     * @desc float in [0, 1000], default 0.0
     */
    public get distance_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance_min`)
    }

    /**
     * How quickly strength falls off with distance from the force field
     * @desc float in [0, 10], default 0.0
     */
    public get falloff_power(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff_power`)
    }

    /**
     * 
     * @desc enum in ['SPHERE', 'TUBE', 'CONE'], default 'SPHERE'
     */
    public get falloff_type(): 'SPHERE' | 'TUBE' | 'CONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff_type`)
    }

    /**
     * Convert effector force into air flow velocity
     * @desc float in [0, 10], default 0.0
     */
    public get flow(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.flow`)
    }

    /**
     * Amount of clumping
     * @desc float in [-1, 1], default 0.0
     */
    public get guide_clump_amount(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_clump_amount`)
    }

    /**
     * Shape of clumping
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public get guide_clump_shape(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_clump_shape`)
    }

    /**
     * Guide-free time from particle life’s end
     * @desc float in [0, 0.99], default 0.0
     */
    public get guide_free(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_free`)
    }

    /**
     * The amplitude of the offset
     * @desc float in [0, 10], default 0.0
     */
    public get guide_kink_amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_kink_amplitude`)
    }

    /**
     * Which axis to use for offset
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get guide_kink_axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.guide_kink_axis`)
    }

    /**
     * The frequency of the offset (1/total length)
     * @desc float in [0, 10], default 0.0
     */
    public get guide_kink_frequency(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_kink_frequency`)
    }

    /**
     * Adjust the offset to the beginning/end
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public get guide_kink_shape(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_kink_shape`)
    }

    /**
     * Type of periodic offset on the curve
     * @desc enum in ['NONE', 'CURL', 'RADIAL', 'WAVE', 'BRAID', 'ROTATION', 'ROLL'], default 'NONE'
     */
    public get guide_kink_type(): 'NONE' | 'CURL' | 'RADIAL' | 'WAVE' | 'BRAID' | 'ROTATION' | 'ROLL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.guide_kink_type`)
    }

    /**
     * The distance from which particles are affected fully
     * @desc float in [0, 1000], default 0.0
     */
    public get guide_minimum(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.guide_minimum`)
    }

    /**
     * Damping of the harmonic force
     * @desc float in [0, 10], default 0.0
     */
    public get harmonic_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.harmonic_damping`)
    }

    /**
     * Inwards component of the vortex force
     * @desc float in [-10, 10], default 0.0
     */
    public get inflow(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.inflow`)
    }

    /**
     * Drag component proportional to velocity
     * @desc float in [-2, 2], default 0.0
     */
    public get linear_drag(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.linear_drag`)
    }

    /**
     * Amount of noise for the force strength
     * @desc float in [0, 10], default 0.0
     */
    public get noise(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.noise`)
    }

    /**
     * Drag component proportional to the square of velocity
     * @desc float in [-2, 2], default 0.0
     */
    public get quadratic_drag(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.quadratic_drag`)
    }

    /**
     * Radial falloff power (real gravitational falloff = 2)
     * @desc float in [0, 10], default 0.0
     */
    public get radial_falloff(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radial_falloff`)
    }

    /**
     * Maximum radial distance for the field to work
     * @desc float in [0, 1000], default 0.0
     */
    public get radial_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radial_max`)
    }

    /**
     * Minimum radial distance for the field’s fall-off
     * @desc float in [0, 1000], default 0.0
     */
    public get radial_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radial_min`)
    }

    /**
     * Rest length of the harmonic force
     * @desc float in [0, 1000], default 0.0
     */
    public get rest_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rest_length`)
    }

    /**
     * Seed of the noise
     * @desc int in [1, 128], default 0
     */
    public get seed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.seed`)
    }

    /**
     * Which direction is used to calculate the effector force
     * @desc enum in ['POINT', 'LINE', 'PLANE', 'SURFACE', 'POINTS'], default 'POINT'
     */
    public get shape(): 'POINT' | 'LINE' | 'PLANE' | 'SURFACE' | 'POINTS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.shape`)
    }

    /**
     * Size of the turbulence
     * @desc float in [0, inf], default 0.0
     */
    public get size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size`)
    }

    /**
     * Select domain object of the smoke simulation
     * @desc Object
     */
    public get source_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.source_object`, BlenderObject)
    }

    /**
     * Strength of force field
     * @desc float in [-inf, inf], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Texture to use as force
     * @desc Texture
     */
    public get texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture`, Texture)
    }

    /**
     * How the texture effect is calculated (RGB & Curl need a RGB texture, else Gradient will be used instead)
     * @desc enum in ['RGB', 'GRADIENT', 'CURL'], default 'RGB'
     */
    public get texture_mode(): 'RGB' | 'GRADIENT' | 'CURL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_mode`)
    }

    /**
     * Defines size of derivative offset used for calculating gradient and curl
     * @desc float in [0.0001, 1], default 0.0
     */
    public get texture_nabla(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_nabla`)
    }

    /**
     * Type of field
     * @desc enum in ['NONE', 'FORCE', 'WIND', 'VORTEX', 'MAGNET', 'HARMONIC', 'CHARGE', 'LENNARDJ', 'TEXTURE', 'GUIDE', 'BOID', 'TURBULENCE', 'DRAG', 'SMOKE_FLOW'], default 'NONE'
     */
    public get type(): 'NONE' | 'FORCE' | 'WIND' | 'VORTEX' | 'MAGNET' | 'HARMONIC' | 'CHARGE' | 'LENNARDJ' | 'TEXTURE' | 'GUIDE' | 'BOID' | 'TURBULENCE' | 'DRAG' | 'SMOKE_FLOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Apply force only in 2D
     * @desc boolean, default False
     */
    public get use_2d_force(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_2d_force`)
    }

    /**
     * Force gets absorbed by collision objects
     * @desc boolean, default False
     */
    public get use_absorption(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_absorption`)
    }

    /**
     * Use effector/global coordinates for turbulence
     * @desc boolean, default False
     */
    public get use_global_coords(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_global_coords`)
    }

    /**
     * Multiply force by 1/distance²
     * @desc boolean, default False
     */
    public get use_gravity_falloff(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_gravity_falloff`)
    }

    /**
     * Based on distance/falloff it adds a portion of the entire path
     * @desc boolean, default False
     */
    public get use_guide_path_add(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_guide_path_add`)
    }

    /**
     * Use curve weights to influence the particle influence along the curve
     * @desc boolean, default False
     */
    public get use_guide_path_weight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_guide_path_weight`)
    }

    /**
     * Use a maximum distance for the field to work
     * @desc boolean, default False
     */
    public get use_max_distance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max_distance`)
    }

    /**
     * Use a minimum distance for the field’s fall-off
     * @desc boolean, default False
     */
    public get use_min_distance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_min_distance`)
    }

    /**
     * Every point is effected by multiple springs
     * @desc boolean, default False
     */
    public get use_multiple_springs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiple_springs`)
    }

    /**
     * Use object/global coordinates for texture
     * @desc boolean, default False
     */
    public get use_object_coords(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_object_coords`)
    }

    /**
     * Use a maximum radial distance for the field to work
     * @desc boolean, default False
     */
    public get use_radial_max(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_radial_max`)
    }

    /**
     * Use a minimum radial distance for the field’s fall-off
     * @desc boolean, default False
     */
    public get use_radial_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_radial_min`)
    }

    /**
     * Texture coordinates from root particle locations
     * @desc boolean, default False
     */
    public get use_root_coords(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_root_coords`)
    }

    /**
     * Adjust force strength based on smoke density
     * @desc boolean, default False
     */
    public get use_smoke_density(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smoke_density`)
    }

    /**
     * Effect in full or only positive/negative Z direction
     * @desc enum in ['BOTH', 'POSITIVE', 'NEGATIVE'], default 'BOTH'
     */
    public get z_direction(): 'BOTH' | 'POSITIVE' | 'NEGATIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.z_direction`)
    }

    /**
     * Affect particle’s location
     * @desc boolean, default False
     */
    public set apply_to_location(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.apply_to_location`, value)
    }

    /**
     * Affect particle’s dynamic rotation
     * @desc boolean, default False
     */
    public set apply_to_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.apply_to_rotation`, value)
    }

    /**
     * Maximum distance for the field to work
     * @desc float in [0, inf], default 0.0
     */
    public set distance_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance_max`, value)
    }

    /**
     * Minimum distance for the field’s fall-off
     * @desc float in [0, 1000], default 0.0
     */
    public set distance_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance_min`, value)
    }

    /**
     * How quickly strength falls off with distance from the force field
     * @desc float in [0, 10], default 0.0
     */
    public set falloff_power(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff_power`, value)
    }

    /**
     * 
     * @desc enum in ['SPHERE', 'TUBE', 'CONE'], default 'SPHERE'
     */
    public set falloff_type(value: 'SPHERE' | 'TUBE' | 'CONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff_type`, value)
    }

    /**
     * Convert effector force into air flow velocity
     * @desc float in [0, 10], default 0.0
     */
    public set flow(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.flow`, value)
    }

    /**
     * Amount of clumping
     * @desc float in [-1, 1], default 0.0
     */
    public set guide_clump_amount(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_clump_amount`, value)
    }

    /**
     * Shape of clumping
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public set guide_clump_shape(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_clump_shape`, value)
    }

    /**
     * Guide-free time from particle life’s end
     * @desc float in [0, 0.99], default 0.0
     */
    public set guide_free(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_free`, value)
    }

    /**
     * The amplitude of the offset
     * @desc float in [0, 10], default 0.0
     */
    public set guide_kink_amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_kink_amplitude`, value)
    }

    /**
     * Which axis to use for offset
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set guide_kink_axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.guide_kink_axis`, value)
    }

    /**
     * The frequency of the offset (1/total length)
     * @desc float in [0, 10], default 0.0
     */
    public set guide_kink_frequency(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_kink_frequency`, value)
    }

    /**
     * Adjust the offset to the beginning/end
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public set guide_kink_shape(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_kink_shape`, value)
    }

    /**
     * Type of periodic offset on the curve
     * @desc enum in ['NONE', 'CURL', 'RADIAL', 'WAVE', 'BRAID', 'ROTATION', 'ROLL'], default 'NONE'
     */
    public set guide_kink_type(value: 'NONE' | 'CURL' | 'RADIAL' | 'WAVE' | 'BRAID' | 'ROTATION' | 'ROLL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.guide_kink_type`, value)
    }

    /**
     * The distance from which particles are affected fully
     * @desc float in [0, 1000], default 0.0
     */
    public set guide_minimum(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.guide_minimum`, value)
    }

    /**
     * Damping of the harmonic force
     * @desc float in [0, 10], default 0.0
     */
    public set harmonic_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.harmonic_damping`, value)
    }

    /**
     * Inwards component of the vortex force
     * @desc float in [-10, 10], default 0.0
     */
    public set inflow(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.inflow`, value)
    }

    /**
     * Drag component proportional to velocity
     * @desc float in [-2, 2], default 0.0
     */
    public set linear_drag(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.linear_drag`, value)
    }

    /**
     * Amount of noise for the force strength
     * @desc float in [0, 10], default 0.0
     */
    public set noise(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.noise`, value)
    }

    /**
     * Drag component proportional to the square of velocity
     * @desc float in [-2, 2], default 0.0
     */
    public set quadratic_drag(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.quadratic_drag`, value)
    }

    /**
     * Radial falloff power (real gravitational falloff = 2)
     * @desc float in [0, 10], default 0.0
     */
    public set radial_falloff(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radial_falloff`, value)
    }

    /**
     * Maximum radial distance for the field to work
     * @desc float in [0, 1000], default 0.0
     */
    public set radial_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radial_max`, value)
    }

    /**
     * Minimum radial distance for the field’s fall-off
     * @desc float in [0, 1000], default 0.0
     */
    public set radial_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radial_min`, value)
    }

    /**
     * Rest length of the harmonic force
     * @desc float in [0, 1000], default 0.0
     */
    public set rest_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rest_length`, value)
    }

    /**
     * Seed of the noise
     * @desc int in [1, 128], default 0
     */
    public set seed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.seed`, value)
    }

    /**
     * Which direction is used to calculate the effector force
     * @desc enum in ['POINT', 'LINE', 'PLANE', 'SURFACE', 'POINTS'], default 'POINT'
     */
    public set shape(value: 'POINT' | 'LINE' | 'PLANE' | 'SURFACE' | 'POINTS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.shape`, value)
    }

    /**
     * Size of the turbulence
     * @desc float in [0, inf], default 0.0
     */
    public set size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Select domain object of the smoke simulation
     * @desc Object
     */
    public set source_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.source_object`, value)
    }

    /**
     * Strength of force field
     * @desc float in [-inf, inf], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Texture to use as force
     * @desc Texture
     */
    public set texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture`, value)
    }

    /**
     * How the texture effect is calculated (RGB & Curl need a RGB texture, else Gradient will be used instead)
     * @desc enum in ['RGB', 'GRADIENT', 'CURL'], default 'RGB'
     */
    public set texture_mode(value: 'RGB' | 'GRADIENT' | 'CURL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_mode`, value)
    }

    /**
     * Defines size of derivative offset used for calculating gradient and curl
     * @desc float in [0.0001, 1], default 0.0
     */
    public set texture_nabla(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_nabla`, value)
    }

    /**
     * Type of field
     * @desc enum in ['NONE', 'FORCE', 'WIND', 'VORTEX', 'MAGNET', 'HARMONIC', 'CHARGE', 'LENNARDJ', 'TEXTURE', 'GUIDE', 'BOID', 'TURBULENCE', 'DRAG', 'SMOKE_FLOW'], default 'NONE'
     */
    public set type(value: 'NONE' | 'FORCE' | 'WIND' | 'VORTEX' | 'MAGNET' | 'HARMONIC' | 'CHARGE' | 'LENNARDJ' | 'TEXTURE' | 'GUIDE' | 'BOID' | 'TURBULENCE' | 'DRAG' | 'SMOKE_FLOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Apply force only in 2D
     * @desc boolean, default False
     */
    public set use_2d_force(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_2d_force`, value)
    }

    /**
     * Force gets absorbed by collision objects
     * @desc boolean, default False
     */
    public set use_absorption(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_absorption`, value)
    }

    /**
     * Use effector/global coordinates for turbulence
     * @desc boolean, default False
     */
    public set use_global_coords(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_global_coords`, value)
    }

    /**
     * Multiply force by 1/distance²
     * @desc boolean, default False
     */
    public set use_gravity_falloff(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_gravity_falloff`, value)
    }

    /**
     * Based on distance/falloff it adds a portion of the entire path
     * @desc boolean, default False
     */
    public set use_guide_path_add(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_guide_path_add`, value)
    }

    /**
     * Use curve weights to influence the particle influence along the curve
     * @desc boolean, default False
     */
    public set use_guide_path_weight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_guide_path_weight`, value)
    }

    /**
     * Use a maximum distance for the field to work
     * @desc boolean, default False
     */
    public set use_max_distance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max_distance`, value)
    }

    /**
     * Use a minimum distance for the field’s fall-off
     * @desc boolean, default False
     */
    public set use_min_distance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_min_distance`, value)
    }

    /**
     * Every point is effected by multiple springs
     * @desc boolean, default False
     */
    public set use_multiple_springs(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiple_springs`, value)
    }

    /**
     * Use object/global coordinates for texture
     * @desc boolean, default False
     */
    public set use_object_coords(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_object_coords`, value)
    }

    /**
     * Use a maximum radial distance for the field to work
     * @desc boolean, default False
     */
    public set use_radial_max(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_radial_max`, value)
    }

    /**
     * Use a minimum radial distance for the field’s fall-off
     * @desc boolean, default False
     */
    public set use_radial_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_radial_min`, value)
    }

    /**
     * Texture coordinates from root particle locations
     * @desc boolean, default False
     */
    public set use_root_coords(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_root_coords`, value)
    }

    /**
     * Adjust force strength based on smoke density
     * @desc boolean, default False
     */
    public set use_smoke_density(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smoke_density`, value)
    }

    /**
     * Effect in full or only positive/negative Z direction
     * @desc enum in ['BOTH', 'POSITIVE', 'NEGATIVE'], default 'BOTH'
     */
    public set z_direction(value: 'BOTH' | 'POSITIVE' | 'NEGATIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.z_direction`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
