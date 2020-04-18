import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { ParticleDupliWeight } from './ParticleDupliWeight'
import { AnimData } from './AnimData'
import { BoidSettings } from './BoidSettings'
import { CurveMapping } from './CurveMapping'
import { EffectorWeights } from './EffectorWeights'
import { SPHFluidSettings } from './SPHFluidSettings'
import { FieldSettings } from './FieldSettings'
import { ParticleSettingsTextureSlots } from './ParticleSettingsTextureSlots'
import { ParticleSettingsTextureSlot } from './ParticleSettingsTextureSlot'
import { Texture } from './Texture'
import { Collection } from './Collection'
import { BlenderObject } from './BlenderObject'

/**
 * ParticleSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ParticleSettings.html
 */
export class ParticleSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ParticleDupliWeight, (readonly)
     */
    public get active_instanceweight(): ParticleDupliWeight {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_instanceweight`, ParticleDupliWeight)
    }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * 
     * @desc BoidSettings, (readonly)
     */
    public get boids(): BoidSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.boids`, BoidSettings)
    }

    /**
     * Curve defining clump tapering
     * @desc CurveMapping, (readonly)
     */
    public get clump_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clump_curve`, CurveMapping)
    }

    /**
     * 
     * @desc EffectorWeights, (readonly)
     */
    public get effector_weights(): EffectorWeights {
        return PythonInterop.getClass(this.interop, `${this.accessor}.effector_weights`, EffectorWeights)
    }

    /**
     * 
     * @desc SPHFluidSettings, (readonly)
     */
    public get fluid(): SPHFluidSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.fluid`, SPHFluidSettings)
    }

    /**
     * 
     * @desc FieldSettings, (readonly)
     */
    public get force_field_1(): FieldSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.force_field_1`, FieldSettings)
    }

    /**
     * 
     * @desc FieldSettings, (readonly)
     */
    public get force_field_2(): FieldSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.force_field_2`, FieldSettings)
    }

    /**
     * Weights for all of the objects in the dupli collection
     * @desc bpy_prop_collection of ParticleDupliWeight, (readonly)
     */
    public get instance_weights(): BlenderCollection<ParticleDupliWeight> & Indexable<ParticleDupliWeight> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.instance_weights`, ParticleDupliWeight)
    }

    /**
     * Particles were created by a fluid simulation
     * @desc boolean, default False, (readonly)
     */
    public get is_fluid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_fluid`)
    }

    /**
     * Curve defining roughness
     * @desc CurveMapping, (readonly)
     */
    public get roughness_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.roughness_curve`, CurveMapping)
    }

    /**
     * Texture slots defining the mapping and influence of textures
     * @desc ParticleSettingsTextureSlots bpy_prop_collection of ParticleSettingsTextureSlot, (readonly)
     */
    public get texture_slots(): BlenderCollection<ParticleSettingsTextureSlot> & Indexable<ParticleSettingsTextureSlot> & ParticleSettingsTextureSlots {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.texture_slots`, ParticleSettingsTextureSlots, ParticleSettingsTextureSlot)
    }

    /**
     * Curve defining twist
     * @desc CurveMapping, (readonly)
     */
    public get twist_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.twist_curve`, CurveMapping)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get active_instanceweight_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_instanceweight_index`)
    }

    /**
     * Active texture slot being displayed
     * @desc Texture
     */
    public get active_texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_texture`, Texture)
    }

    /**
     * Index of active texture slot
     * @desc int in [0, 17], default 0
     */
    public get active_texture_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_texture_index`)
    }

    /**
     * How many degrees path has to curve to make another render segment
     * @desc int in [0, 45], default 0
     */
    public get adaptive_angle(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.adaptive_angle`)
    }

    /**
     * How many pixels path has to cover to make another render segment
     * @desc int in [0, 50], default 0
     */
    public get adaptive_pixel(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.adaptive_pixel`)
    }

    /**
     * Angular velocity amount (in radians per second)
     * @desc float in [-200, 200], default 0.0
     */
    public get angular_velocity_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angular_velocity_factor`)
    }

    /**
     * What axis is used to change particle rotation with time
     * @desc enum in ['NONE', 'VELOCITY', 'HORIZONTAL', 'VERTICAL', 'GLOBAL_X', 'GLOBAL_Y', 'GLOBAL_Z', 'RAND'], default 'NONE'
     */
    public get angular_velocity_mode(): 'NONE' | 'VELOCITY' | 'HORIZONTAL' | 'VERTICAL' | 'GLOBAL_X' | 'GLOBAL_Y' | 'GLOBAL_Z' | 'RAND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.angular_velocity_mode`)
    }

    /**
     * Apply effectors to children
     * @desc boolean, default False
     */
    public get apply_effector_to_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.apply_effector_to_children`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get apply_guide_to_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.apply_guide_to_children`)
    }

    /**
     * Random stiffness of hairs
     * @desc float in [0, 1], default 0.0
     */
    public get bending_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bending_random`)
    }

    /**
     * Threshold of branching
     * @desc float in [0, 1], default 0.0
     */
    public get branch_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.branch_threshold`)
    }

    /**
     * Amount of random, erratic particle movement
     * @desc float in [0, 200], default 0.0
     */
    public get brownian_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.brownian_factor`)
    }

    /**
     * Length of child paths
     * @desc float in [0, 1], default 0.0
     */
    public get child_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_length`)
    }

    /**
     * Amount of particles left untouched by child path length
     * @desc float in [0, 1], default 0.0
     */
    public get child_length_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_length_threshold`)
    }

    /**
     * Number of children/parent
     * @desc int in [0, 100000], default 0
     */
    public get child_nbr(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.child_nbr`)
    }

    /**
     * Create parting in the children based on parent strands
     * @desc float in [0, 1], default 0.0
     */
    public get child_parting_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_parting_factor`)
    }

    /**
     * Maximum root to tip angle (tip distance/root distance for long hair)
     * @desc float in [0, 180], default 0.0
     */
    public get child_parting_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_parting_max`)
    }

    /**
     * Minimum root to tip angle (tip distance/root distance for long hair)
     * @desc float in [0, 180], default 0.0
     */
    public get child_parting_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_parting_min`)
    }

    /**
     * Radius of children around parent
     * @desc float in [0, 100000], default 0.0
     */
    public get child_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_radius`)
    }

    /**
     * Roundness of children around parent
     * @desc float in [0, 1], default 0.0
     */
    public get child_roundness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_roundness`)
    }

    /**
     * A multiplier for the child particle size
     * @desc float in [0.001, 100000], default 0.0
     */
    public get child_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_size`)
    }

    /**
     * Random variation to the size of the child particles
     * @desc float in [0, 1], default 0.0
     */
    public get child_size_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.child_size_random`)
    }

    /**
     * Create child particles
     * @desc enum in ['NONE', 'SIMPLE', 'INTERPOLATED'], default 'NONE'
     */
    public get child_type(): 'NONE' | 'SIMPLE' | 'INTERPOLATED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.child_type`)
    }

    /**
     * Amount of clumping
     * @desc float in [-1, 1], default 0.0
     */
    public get clump_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clump_factor`)
    }

    /**
     * Size of clump noise
     * @desc float in [1e-05, 100000], default 0.0
     */
    public get clump_noise_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clump_noise_size`)
    }

    /**
     * Shape of clumping
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public get clump_shape(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clump_shape`)
    }

    /**
     * Limit colliders to this collection
     * @desc Collection
     */
    public get collision_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collision_collection`, Collection)
    }

    /**
     * Maximum length of the particle color vector
     * @desc float in [0.01, 100], default 0.0
     */
    public get color_maximum(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_maximum`)
    }

    /**
     * Total number of particles
     * @desc int in [0, inf], default 0
     */
    public get count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.count`)
    }

    /**
     * The relative distance a particle can move before requiring more subframes (target Courant number); 0.01-0.3 is the recommended range
     * @desc float in [0.0001, 10], default 0.1
     */
    public get courant_target(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.courant_target`)
    }

    /**
     * Calculate children that suit long hair well
     * @desc boolean, default False
     */
    public get create_long_hair_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.create_long_hair_children`)
    }

    /**
     * Amount of damping
     * @desc float in [0, 1], default 0.0
     */
    public get damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping`)
    }

    /**
     * Draw additional particle data as a color
     * @desc enum in ['NONE', 'MATERIAL', 'VELOCITY', 'ACCELERATION'], default 'NONE'
     */
    public get display_color(): 'NONE' | 'MATERIAL' | 'VELOCITY' | 'ACCELERATION' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_color`)
    }

    /**
     * How particles are drawn in viewport
     * @desc enum in ['NONE', 'RENDER', 'DOT', 'CIRC', 'CROSS', 'AXIS'], default 'NONE'
     */
    public get display_method(): 'NONE' | 'RENDER' | 'DOT' | 'CIRC' | 'CROSS' | 'AXIS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_method`)
    }

    /**
     * Percentage of particles to display in 3D view
     * @desc int in [0, 100], default 0
     */
    public get display_percentage(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.display_percentage`)
    }

    /**
     * Size of particles on viewport in BU
     * @desc float in [0, 1000], default 0.0
     */
    public get display_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.display_size`)
    }

    /**
     * How many steps paths are drawn with (power of 2)
     * @desc int in [0, 10], default 0
     */
    public get display_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.display_step`)
    }

    /**
     * How to distribute particles on selected element
     * @desc enum in ['JIT', 'RAND', 'GRID'], default 'JIT'
     */
    public get distribution(): 'JIT' | 'RAND' | 'GRID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distribution`)
    }

    /**
     * Amount of air-drag
     * @desc float in [0, 1], default 0.0
     */
    public get drag_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.drag_factor`)
    }

    /**
     * Hair stiffness for effectors
     * @desc float in [0, 1], default 0.0
     */
    public get effect_hair(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.effect_hair`)
    }

    /**
     * How many particles are effectors (0 is all particles)
     * @desc int in [0, 10000], default 0
     */
    public get effector_amount(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.effector_amount`)
    }

    /**
     * Where to emit particles from
     * @desc enum in ['VERT', 'FACE', 'VOLUME'], default 'VERT'
     */
    public get emit_from(): 'VERT' | 'FACE' | 'VOLUME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.emit_from`)
    }

    /**
     * Give the starting velocity a random variation
     * @desc float in [0, 200], default 0.0
     */
    public get factor_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor_random`)
    }

    /**
     * Frame number to stop emitting particles
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Frame number to start emitting particles
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Add random offset to the grid locations
     * @desc float in [0, 1], default 0.0
     */
    public get grid_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.grid_random`)
    }

    /**
     * The resolution of the particle grid
     * @desc int in [1, 250], default 0
     */
    public get grid_resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grid_resolution`)
    }

    /**
     * Length of the hair
     * @desc float in [0, 1000], default 0.0
     */
    public get hair_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.hair_length`)
    }

    /**
     * Number of hair segments
     * @desc int in [2, 32767], default 0
     */
    public get hair_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.hair_step`)
    }

    /**
     * Create the grid in a hexagonal pattern
     * @desc boolean, default False
     */
    public get hexagonal_grid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hexagonal_grid`)
    }

    /**
     * Show Objects in this collection in place of particles
     * @desc Collection
     */
    public get instance_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.instance_collection`, Collection)
    }

    /**
     * Show this Object in place of particles
     * @desc Object
     */
    public get instance_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.instance_object`, BlenderObject)
    }

    /**
     * Algorithm used to calculate physics, from the fastest to the most stable/accurate: Midpoint, Euler, Verlet, RK4 (Old)
     * @desc enum in ['EULER', 'VERLET', 'MIDPOINT', 'RK4'], default 'EULER'
     */
    public get integrator(): 'EULER' | 'VERLET' | 'MIDPOINT' | 'RK4' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.integrator`)
    }

    /**
     * Invert what is considered object and what is not
     * @desc boolean, default False
     */
    public get invert_grid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_grid`)
    }

    /**
     * Amount of jitter applied to the sampling
     * @desc float in [0, 2], default 0.0
     */
    public get jitter_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.jitter_factor`)
    }

    /**
     * Number of times the keys are looped
     * @desc int in [1, 10000], default 0
     */
    public get keyed_loops(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.keyed_loops`)
    }

    /**
     * 
     * @desc int in [0, 32767], default 0
     */
    public get keys_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.keys_step`)
    }

    /**
     * Type of periodic offset on the path
     * @desc enum in ['NO', 'CURL', 'RADIAL', 'WAVE', 'BRAID', 'SPIRAL'], default 'NO'
     */
    public get kink(): 'NO' | 'CURL' | 'RADIAL' | 'WAVE' | 'BRAID' | 'SPIRAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.kink`)
    }

    /**
     * The amplitude of the offset
     * @desc float in [-100000, 100000], default 0.0
     */
    public get kink_amplitude(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_amplitude`)
    }

    /**
     * How much clump affects kink amplitude
     * @desc float in [0, 1], default 0.0
     */
    public get kink_amplitude_clump(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_amplitude_clump`)
    }

    /**
     * Random variation of the amplitude
     * @desc float in [0, 1], default 0.0
     */
    public get kink_amplitude_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_amplitude_random`)
    }

    /**
     * Which axis to use for offset
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get kink_axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.kink_axis`)
    }

    /**
     * Random variation of the orientation
     * @desc float in [0, 1], default 0.0
     */
    public get kink_axis_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_axis_random`)
    }

    /**
     * Extra steps for resolution of special kink features
     * @desc int in [1, inf], default 0
     */
    public get kink_extra_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.kink_extra_steps`)
    }

    /**
     * How flat the hairs are
     * @desc float in [0, 1], default 0.0
     */
    public get kink_flat(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_flat`)
    }

    /**
     * The frequency of the offset (1/total length)
     * @desc float in [-100000, 100000], default 0.0
     */
    public get kink_frequency(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_frequency`)
    }

    /**
     * Adjust the offset to the beginning/end
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public get kink_shape(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.kink_shape`)
    }

    /**
     * Give path length a random variation
     * @desc float in [0, 1], default 0.0
     */
    public get length_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length_random`)
    }

    /**
     * Life span of the particles
     * @desc float in [1, 1.04857e+06], default 0.0
     */
    public get lifetime(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lifetime`)
    }

    /**
     * Give the particle life a random variation
     * @desc float in [0, 1], default 0.0
     */
    public get lifetime_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lifetime_random`)
    }

    /**
     * Length of the line’s head
     * @desc float in [0, 100000], default 0.0
     */
    public get line_length_head(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.line_length_head`)
    }

    /**
     * Length of the line’s tail
     * @desc float in [0, 100000], default 0.0
     */
    public get line_length_tail(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.line_length_tail`)
    }

    /**
     * Constrain boids to a surface
     * @desc boolean, default False
     */
    public get lock_boids_to_surface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_boids_to_surface`)
    }

    /**
     * Mass of the particles
     * @desc float in [1e-08, 100000], default 0.0
     */
    public get mass(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mass`)
    }

    /**
     * Index of material slot used for rendering particles
     * @desc int in [1, 32767], default 0
     */
    public get material(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material`)
    }

    /**
     * Material slot used for rendering particles
     * @desc enum in ['DUMMY'], default 'DUMMY'
     */
    public get material_slot(): 'DUMMY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.material_slot`)
    }

    /**
     * Let the surface normal give the particle a starting velocity
     * @desc float in [-1000, 1000], default 0.0
     */
    public get normal_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.normal_factor`)
    }

    /**
     * Let the emitter object orientation give the particle a starting velocity
     * @desc float array of 3 items in [-200, 200], default (0.0, 0.0, 0.0)
     */
    public get object_align_factor(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.object_align_factor`, 'number', 3)
    }

    /**
     * Let the object give the particle a starting velocity
     * @desc float in [-200, 200], default 0.0
     */
    public get object_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.object_factor`)
    }

    /**
     * Let the target particle give the particle a starting velocity
     * @desc float in [-200, 200], default 0.0
     */
    public get particle_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.particle_factor`)
    }

    /**
     * The size of the particles
     * @desc float in [0.001, 100000], default 0.0
     */
    public get particle_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.particle_size`)
    }

    /**
     * End time of drawn path
     * @desc float in [-inf, inf], default 0.0
     */
    public get path_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.path_end`)
    }

    /**
     * Starting time of drawn path
     * @desc float in [-inf, inf], default 0.0
     */
    public get path_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.path_start`)
    }

    /**
     * Rotation around the chosen orientation axis
     * @desc float in [-1, 1], default 0.0
     */
    public get phase_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.phase_factor`)
    }

    /**
     * Randomize rotation around the chosen orientation axis
     * @desc float in [0, 2], default 0.0
     */
    public get phase_factor_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.phase_factor_random`)
    }

    /**
     * Particle physics type
     * @desc enum in ['NO', 'NEWTON', 'KEYED', 'BOIDS', 'FLUID'], default 'NO'
     */
    public get physics_type(): 'NO' | 'NEWTON' | 'KEYED' | 'BOIDS' | 'FLUID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.physics_type`)
    }

    /**
     * Multiplier of radius properties
     * @desc float in [0, inf], default 0.0
     */
    public get radius_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius_scale`)
    }

    /**
     * The event of target particles to react on
     * @desc enum in ['DEATH', 'COLLIDE', 'NEAR'], default 'DEATH'
     */
    public get react_event(): 'DEATH' | 'COLLIDE' | 'NEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.react_event`)
    }

    /**
     * Let the vector away from the target particle’s location give the particle a starting velocity
     * @desc float in [-10, 10], default 0.0
     */
    public get reactor_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.reactor_factor`)
    }

    /**
     * How many steps paths are rendered with (power of 2)
     * @desc int in [0, 20], default 0
     */
    public get render_step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.render_step`)
    }

    /**
     * How particles are rendered
     * @desc enum in ['NONE', 'HALO', 'LINE', 'PATH', 'OBJECT', 'COLLECTION'], default 'NONE'
     */
    public get render_type(): 'NONE' | 'HALO' | 'LINE' | 'PATH' | 'OBJECT' | 'COLLECTION' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.render_type`)
    }

    /**
     * Number of children/parent for rendering
     * @desc int in [0, 100000], default 0
     */
    public get rendered_child_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.rendered_child_count`)
    }

    /**
     * Strand diameter width at the root
     * @desc float in [0, inf], default 0.0
     */
    public get root_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.root_radius`)
    }

    /**
     * Randomize particle orientation
     * @desc float in [0, 1], default 0.0
     */
    public get rotation_factor_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation_factor_random`)
    }

    /**
     * Particle orientation axis (does not affect Explode modifier’s results)
     * @desc enum in ['NONE', 'NOR', 'NOR_TAN', 'VEL', 'GLOB_X', 'GLOB_Y', 'GLOB_Z', 'OB_X', 'OB_Y', 'OB_Z'], default 'NONE'
     */
    public get rotation_mode(): 'NONE' | 'NOR' | 'NOR_TAN' | 'VEL' | 'GLOB_X' | 'GLOB_Y' | 'GLOB_Z' | 'OB_X' | 'OB_Y' | 'OB_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rotation_mode`)
    }

    /**
     * Amount of location dependent rough
     * @desc float in [0, 100000], default 0.0
     */
    public get roughness_1(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_1`)
    }

    /**
     * Size of location dependent rough
     * @desc float in [0.01, 100000], default 0.0
     */
    public get roughness_1_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_1_size`)
    }

    /**
     * Amount of random rough
     * @desc float in [0, 100000], default 0.0
     */
    public get roughness_2(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_2`)
    }

    /**
     * Size of random rough
     * @desc float in [0.01, 100000], default 0.0
     */
    public get roughness_2_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_2_size`)
    }

    /**
     * Amount of particles left untouched by random rough
     * @desc float in [0, 1], default 0.0
     */
    public get roughness_2_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_2_threshold`)
    }

    /**
     * Shape of end point rough
     * @desc float in [0, 10], default 0.0
     */
    public get roughness_end_shape(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_end_shape`)
    }

    /**
     * Amount of end point rough
     * @desc float in [0, 100000], default 0.0
     */
    public get roughness_endpoint(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roughness_endpoint`)
    }

    /**
     * Strand shape parameter
     * @desc float in [-1, 1], default 0.0
     */
    public get shape(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shape`)
    }

    /**
     * Show guide hairs
     * @desc boolean, default False
     */
    public get show_guide_hairs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_guide_hairs`)
    }

    /**
     * Show hair simulation grid
     * @desc boolean, default False
     */
    public get show_hair_grid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_hair_grid`)
    }

    /**
     * Draw boid health
     * @desc boolean, default False
     */
    public get show_health(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_health`)
    }

    /**
     * Show particle number
     * @desc boolean, default False
     */
    public get show_number(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_number`)
    }

    /**
     * Show particle size
     * @desc boolean, default False
     */
    public get show_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_size`)
    }

    /**
     * Show particles before they are emitted
     * @desc boolean, default False
     */
    public get show_unborn(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_unborn`)
    }

    /**
     * Show particle velocity
     * @desc boolean, default False
     */
    public get show_velocity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_velocity`)
    }

    /**
     * Give the particle size a random variation
     * @desc float in [0, 1], default 0.0
     */
    public get size_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_random`)
    }

    /**
     * Subframes to simulate for improved stability and finer granularity simulations (dt = timestep / (subframes + 1))
     * @desc int in [0, 1000], default 0
     */
    public get subframes(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subframes`)
    }

    /**
     * Let the surface tangent give the particle a starting velocity
     * @desc float in [-1000, 1000], default 0.0
     */
    public get tangent_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tangent_factor`)
    }

    /**
     * Rotate the surface tangent
     * @desc float in [-1, 1], default 0.0
     */
    public get tangent_phase(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tangent_phase`)
    }

    /**
     * A multiplier for physics timestep (1.0 means one frame = 1/25 seconds)
     * @desc float in [0, 100], default 0.0
     */
    public get time_tweak(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_tweak`)
    }

    /**
     * The simulation timestep per frame (seconds per frame)
     * @desc float in [0.0001, 100], default 0.0
     */
    public get timestep(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.timestep`)
    }

    /**
     * Strand diameter width at the tip
     * @desc float in [0, inf], default 0.0
     */
    public get tip_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tip_radius`)
    }

    /**
     * Number of trail particles
     * @desc int in [1, 100000], default 0
     */
    public get trail_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.trail_count`)
    }

    /**
     * Number of turns around parent along the strand
     * @desc float in [-100000, 100000], default 0.0
     */
    public get twist(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.twist`)
    }

    /**
     * Particle Type
     * @desc enum in ['EMITTER', 'HAIR'], default 'EMITTER'
     */
    public get type(): 'EMITTER' | 'HAIR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Path timing is in absolute frames
     * @desc boolean, default False
     */
    public get use_absolute_path_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_absolute_path_time`)
    }

    /**
     * Automatically set the number of subframes
     * @desc boolean, default False
     */
    public get use_adaptive_subframes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_adaptive_subframes`)
    }

    /**
     * Use full physics calculations for growing hair
     * @desc boolean, default False
     */
    public get use_advanced_hair(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_advanced_hair`)
    }

    /**
     * Set tip radius to zero
     * @desc boolean, default False
     */
    public get use_close_tip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_close_tip`)
    }

    /**
     * Use a curve to define clump tapering
     * @desc boolean, default False
     */
    public get use_clump_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clump_curve`)
    }

    /**
     * Create random clumps around the parent
     * @desc boolean, default False
     */
    public get use_clump_noise(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clump_noise`)
    }

    /**
     * Use object multiple times in the same collection
     * @desc boolean, default False
     */
    public get use_collection_count(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_collection_count`)
    }

    /**
     * Pick objects from collection randomly
     * @desc boolean, default False
     */
    public get use_collection_pick_random(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_collection_pick_random`)
    }

    /**
     * Show particles after they have died
     * @desc boolean, default False
     */
    public get use_dead(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dead`)
    }

    /**
     * Particles die when they collide with a deflector object
     * @desc boolean, default False
     */
    public get use_die_on_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_die_on_collision`)
    }

    /**
     * Particle rotations are affected by collisions and effectors
     * @desc boolean, default False
     */
    public get use_dynamic_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dynamic_rotation`)
    }

    /**
     * Emit in random order of elements
     * @desc boolean, default False
     */
    public get use_emit_random(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_emit_random`)
    }

    /**
     * Use even distribution from faces based on face areas or edge lengths
     * @desc boolean, default False
     */
    public get use_even_distribution(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_even_distribution`)
    }

    /**
     * Use object’s global coordinates for duplication
     * @desc boolean, default False
     */
    public get use_global_instance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_global_instance`)
    }

    /**
     * Interpolate hair using B-Splines
     * @desc boolean, default False
     */
    public get use_hair_bspline(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_hair_bspline`)
    }

    /**
     * Emit particles from mesh with modifiers applied (must use same subsurf level for viewport and render for correct results)
     * @desc boolean, default False
     */
    public get use_modifier_stack(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_modifier_stack`)
    }

    /**
     * Multiply mass by particle size
     * @desc boolean, default False
     */
    public get use_multiply_size_mass(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiply_size_mass`)
    }

    /**
     * Render parent particles
     * @desc boolean, default False
     */
    public get use_parent_particles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_parent_particles`)
    }

    /**
     * React multiple times
     * @desc boolean, default False
     */
    public get use_react_multiple(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_react_multiple`)
    }

    /**
     * Give birth to unreacted particles eventually
     * @desc boolean, default False
     */
    public get use_react_start_end(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_react_start_end`)
    }

    /**
     * Regrow hair for each frame
     * @desc boolean, default False
     */
    public get use_regrow_hair(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_regrow_hair`)
    }

    /**
     * Draw steps of the particle path
     * @desc boolean, default False
     */
    public get use_render_adaptive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_render_adaptive`)
    }

    /**
     * Use object’s rotation for duplication (global x-axis is aligned particle rotation axis)
     * @desc boolean, default False
     */
    public get use_rotation_instance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotation_instance`)
    }

    /**
     * Calculate particle rotations
     * @desc boolean, default False
     */
    public get use_rotations(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotations`)
    }

    /**
     * Use a curve to define roughness
     * @desc boolean, default False
     */
    public get use_roughness_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_roughness_curve`)
    }

    /**
     * Use object’s scale for duplication
     * @desc boolean, default False
     */
    public get use_scale_instance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scale_instance`)
    }

    /**
     * Particle effectors affect themselves
     * @desc boolean, default False
     */
    public get use_self_effect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self_effect`)
    }

    /**
     * Use particle’s size in deflection
     * @desc boolean, default False
     */
    public get use_size_deflect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_size_deflect`)
    }

    /**
     * Use the strand primitive for rendering
     * @desc boolean, default False
     */
    public get use_strand_primitive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_strand_primitive`)
    }

    /**
     * Use a curve to define twist
     * @desc boolean, default False
     */
    public get use_twist_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_twist_curve`)
    }

    /**
     * Multiply line length by particle speed
     * @desc boolean, default False
     */
    public get use_velocity_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_velocity_length`)
    }

    /**
     * Use whole collection at once
     * @desc boolean, default False
     */
    public get use_whole_collection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_whole_collection`)
    }

    /**
     * Emission locations / face (0 = automatic)
     * @desc int in [0, 1000], default 0
     */
    public get userjit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.userjit`)
    }

    /**
     * Relative amount of virtual parents
     * @desc float in [0, 1], default 0.0
     */
    public get virtual_parents(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.virtual_parents`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set active_instanceweight_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_instanceweight_index`, value)
    }

    /**
     * Active texture slot being displayed
     * @desc Texture
     */
    public set active_texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_texture`, value)
    }

    /**
     * Index of active texture slot
     * @desc int in [0, 17], default 0
     */
    public set active_texture_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_texture_index`, value)
    }

    /**
     * How many degrees path has to curve to make another render segment
     * @desc int in [0, 45], default 0
     */
    public set adaptive_angle(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.adaptive_angle`, value)
    }

    /**
     * How many pixels path has to cover to make another render segment
     * @desc int in [0, 50], default 0
     */
    public set adaptive_pixel(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.adaptive_pixel`, value)
    }

    /**
     * Angular velocity amount (in radians per second)
     * @desc float in [-200, 200], default 0.0
     */
    public set angular_velocity_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angular_velocity_factor`, value)
    }

    /**
     * What axis is used to change particle rotation with time
     * @desc enum in ['NONE', 'VELOCITY', 'HORIZONTAL', 'VERTICAL', 'GLOBAL_X', 'GLOBAL_Y', 'GLOBAL_Z', 'RAND'], default 'NONE'
     */
    public set angular_velocity_mode(value: 'NONE' | 'VELOCITY' | 'HORIZONTAL' | 'VERTICAL' | 'GLOBAL_X' | 'GLOBAL_Y' | 'GLOBAL_Z' | 'RAND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.angular_velocity_mode`, value)
    }

    /**
     * Apply effectors to children
     * @desc boolean, default False
     */
    public set apply_effector_to_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.apply_effector_to_children`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set apply_guide_to_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.apply_guide_to_children`, value)
    }

    /**
     * Random stiffness of hairs
     * @desc float in [0, 1], default 0.0
     */
    public set bending_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bending_random`, value)
    }

    /**
     * Threshold of branching
     * @desc float in [0, 1], default 0.0
     */
    public set branch_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.branch_threshold`, value)
    }

    /**
     * Amount of random, erratic particle movement
     * @desc float in [0, 200], default 0.0
     */
    public set brownian_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.brownian_factor`, value)
    }

    /**
     * Length of child paths
     * @desc float in [0, 1], default 0.0
     */
    public set child_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_length`, value)
    }

    /**
     * Amount of particles left untouched by child path length
     * @desc float in [0, 1], default 0.0
     */
    public set child_length_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_length_threshold`, value)
    }

    /**
     * Number of children/parent
     * @desc int in [0, 100000], default 0
     */
    public set child_nbr(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.child_nbr`, value)
    }

    /**
     * Create parting in the children based on parent strands
     * @desc float in [0, 1], default 0.0
     */
    public set child_parting_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_parting_factor`, value)
    }

    /**
     * Maximum root to tip angle (tip distance/root distance for long hair)
     * @desc float in [0, 180], default 0.0
     */
    public set child_parting_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_parting_max`, value)
    }

    /**
     * Minimum root to tip angle (tip distance/root distance for long hair)
     * @desc float in [0, 180], default 0.0
     */
    public set child_parting_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_parting_min`, value)
    }

    /**
     * Radius of children around parent
     * @desc float in [0, 100000], default 0.0
     */
    public set child_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_radius`, value)
    }

    /**
     * Roundness of children around parent
     * @desc float in [0, 1], default 0.0
     */
    public set child_roundness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_roundness`, value)
    }

    /**
     * A multiplier for the child particle size
     * @desc float in [0.001, 100000], default 0.0
     */
    public set child_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_size`, value)
    }

    /**
     * Random variation to the size of the child particles
     * @desc float in [0, 1], default 0.0
     */
    public set child_size_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.child_size_random`, value)
    }

    /**
     * Create child particles
     * @desc enum in ['NONE', 'SIMPLE', 'INTERPOLATED'], default 'NONE'
     */
    public set child_type(value: 'NONE' | 'SIMPLE' | 'INTERPOLATED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.child_type`, value)
    }

    /**
     * Amount of clumping
     * @desc float in [-1, 1], default 0.0
     */
    public set clump_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clump_factor`, value)
    }

    /**
     * Size of clump noise
     * @desc float in [1e-05, 100000], default 0.0
     */
    public set clump_noise_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clump_noise_size`, value)
    }

    /**
     * Shape of clumping
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public set clump_shape(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clump_shape`, value)
    }

    /**
     * Limit colliders to this collection
     * @desc Collection
     */
    public set collision_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.collision_collection`, value)
    }

    /**
     * Maximum length of the particle color vector
     * @desc float in [0.01, 100], default 0.0
     */
    public set color_maximum(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_maximum`, value)
    }

    /**
     * Total number of particles
     * @desc int in [0, inf], default 0
     */
    public set count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.count`, value)
    }

    /**
     * The relative distance a particle can move before requiring more subframes (target Courant number); 0.01-0.3 is the recommended range
     * @desc float in [0.0001, 10], default 0.1
     */
    public set courant_target(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.courant_target`, value)
    }

    /**
     * Calculate children that suit long hair well
     * @desc boolean, default False
     */
    public set create_long_hair_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.create_long_hair_children`, value)
    }

    /**
     * Amount of damping
     * @desc float in [0, 1], default 0.0
     */
    public set damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping`, value)
    }

    /**
     * Draw additional particle data as a color
     * @desc enum in ['NONE', 'MATERIAL', 'VELOCITY', 'ACCELERATION'], default 'NONE'
     */
    public set display_color(value: 'NONE' | 'MATERIAL' | 'VELOCITY' | 'ACCELERATION') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_color`, value)
    }

    /**
     * How particles are drawn in viewport
     * @desc enum in ['NONE', 'RENDER', 'DOT', 'CIRC', 'CROSS', 'AXIS'], default 'NONE'
     */
    public set display_method(value: 'NONE' | 'RENDER' | 'DOT' | 'CIRC' | 'CROSS' | 'AXIS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_method`, value)
    }

    /**
     * Percentage of particles to display in 3D view
     * @desc int in [0, 100], default 0
     */
    public set display_percentage(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.display_percentage`, value)
    }

    /**
     * Size of particles on viewport in BU
     * @desc float in [0, 1000], default 0.0
     */
    public set display_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.display_size`, value)
    }

    /**
     * How many steps paths are drawn with (power of 2)
     * @desc int in [0, 10], default 0
     */
    public set display_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.display_step`, value)
    }

    /**
     * How to distribute particles on selected element
     * @desc enum in ['JIT', 'RAND', 'GRID'], default 'JIT'
     */
    public set distribution(value: 'JIT' | 'RAND' | 'GRID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distribution`, value)
    }

    /**
     * Amount of air-drag
     * @desc float in [0, 1], default 0.0
     */
    public set drag_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.drag_factor`, value)
    }

    /**
     * Hair stiffness for effectors
     * @desc float in [0, 1], default 0.0
     */
    public set effect_hair(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.effect_hair`, value)
    }

    /**
     * How many particles are effectors (0 is all particles)
     * @desc int in [0, 10000], default 0
     */
    public set effector_amount(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.effector_amount`, value)
    }

    /**
     * Where to emit particles from
     * @desc enum in ['VERT', 'FACE', 'VOLUME'], default 'VERT'
     */
    public set emit_from(value: 'VERT' | 'FACE' | 'VOLUME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.emit_from`, value)
    }

    /**
     * Give the starting velocity a random variation
     * @desc float in [0, 200], default 0.0
     */
    public set factor_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor_random`, value)
    }

    /**
     * Frame number to stop emitting particles
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Frame number to start emitting particles
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Add random offset to the grid locations
     * @desc float in [0, 1], default 0.0
     */
    public set grid_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.grid_random`, value)
    }

    /**
     * The resolution of the particle grid
     * @desc int in [1, 250], default 0
     */
    public set grid_resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grid_resolution`, value)
    }

    /**
     * Length of the hair
     * @desc float in [0, 1000], default 0.0
     */
    public set hair_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.hair_length`, value)
    }

    /**
     * Number of hair segments
     * @desc int in [2, 32767], default 0
     */
    public set hair_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.hair_step`, value)
    }

    /**
     * Create the grid in a hexagonal pattern
     * @desc boolean, default False
     */
    public set hexagonal_grid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hexagonal_grid`, value)
    }

    /**
     * Show Objects in this collection in place of particles
     * @desc Collection
     */
    public set instance_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.instance_collection`, value)
    }

    /**
     * Show this Object in place of particles
     * @desc Object
     */
    public set instance_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.instance_object`, value)
    }

    /**
     * Algorithm used to calculate physics, from the fastest to the most stable/accurate: Midpoint, Euler, Verlet, RK4 (Old)
     * @desc enum in ['EULER', 'VERLET', 'MIDPOINT', 'RK4'], default 'EULER'
     */
    public set integrator(value: 'EULER' | 'VERLET' | 'MIDPOINT' | 'RK4') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.integrator`, value)
    }

    /**
     * Invert what is considered object and what is not
     * @desc boolean, default False
     */
    public set invert_grid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_grid`, value)
    }

    /**
     * Amount of jitter applied to the sampling
     * @desc float in [0, 2], default 0.0
     */
    public set jitter_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.jitter_factor`, value)
    }

    /**
     * Number of times the keys are looped
     * @desc int in [1, 10000], default 0
     */
    public set keyed_loops(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.keyed_loops`, value)
    }

    /**
     * 
     * @desc int in [0, 32767], default 0
     */
    public set keys_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.keys_step`, value)
    }

    /**
     * Type of periodic offset on the path
     * @desc enum in ['NO', 'CURL', 'RADIAL', 'WAVE', 'BRAID', 'SPIRAL'], default 'NO'
     */
    public set kink(value: 'NO' | 'CURL' | 'RADIAL' | 'WAVE' | 'BRAID' | 'SPIRAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.kink`, value)
    }

    /**
     * The amplitude of the offset
     * @desc float in [-100000, 100000], default 0.0
     */
    public set kink_amplitude(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_amplitude`, value)
    }

    /**
     * How much clump affects kink amplitude
     * @desc float in [0, 1], default 0.0
     */
    public set kink_amplitude_clump(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_amplitude_clump`, value)
    }

    /**
     * Random variation of the amplitude
     * @desc float in [0, 1], default 0.0
     */
    public set kink_amplitude_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_amplitude_random`, value)
    }

    /**
     * Which axis to use for offset
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set kink_axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.kink_axis`, value)
    }

    /**
     * Random variation of the orientation
     * @desc float in [0, 1], default 0.0
     */
    public set kink_axis_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_axis_random`, value)
    }

    /**
     * Extra steps for resolution of special kink features
     * @desc int in [1, inf], default 0
     */
    public set kink_extra_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.kink_extra_steps`, value)
    }

    /**
     * How flat the hairs are
     * @desc float in [0, 1], default 0.0
     */
    public set kink_flat(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_flat`, value)
    }

    /**
     * The frequency of the offset (1/total length)
     * @desc float in [-100000, 100000], default 0.0
     */
    public set kink_frequency(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_frequency`, value)
    }

    /**
     * Adjust the offset to the beginning/end
     * @desc float in [-0.999, 0.999], default 0.0
     */
    public set kink_shape(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.kink_shape`, value)
    }

    /**
     * Give path length a random variation
     * @desc float in [0, 1], default 0.0
     */
    public set length_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.length_random`, value)
    }

    /**
     * Life span of the particles
     * @desc float in [1, 1.04857e+06], default 0.0
     */
    public set lifetime(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lifetime`, value)
    }

    /**
     * Give the particle life a random variation
     * @desc float in [0, 1], default 0.0
     */
    public set lifetime_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lifetime_random`, value)
    }

    /**
     * Length of the line’s head
     * @desc float in [0, 100000], default 0.0
     */
    public set line_length_head(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.line_length_head`, value)
    }

    /**
     * Length of the line’s tail
     * @desc float in [0, 100000], default 0.0
     */
    public set line_length_tail(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.line_length_tail`, value)
    }

    /**
     * Constrain boids to a surface
     * @desc boolean, default False
     */
    public set lock_boids_to_surface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_boids_to_surface`, value)
    }

    /**
     * Mass of the particles
     * @desc float in [1e-08, 100000], default 0.0
     */
    public set mass(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mass`, value)
    }

    /**
     * Index of material slot used for rendering particles
     * @desc int in [1, 32767], default 0
     */
    public set material(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material`, value)
    }

    /**
     * Material slot used for rendering particles
     * @desc enum in ['DUMMY'], default 'DUMMY'
     */
    public set material_slot(value: 'DUMMY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.material_slot`, value)
    }

    /**
     * Let the surface normal give the particle a starting velocity
     * @desc float in [-1000, 1000], default 0.0
     */
    public set normal_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.normal_factor`, value)
    }

    /**
     * Let the emitter object orientation give the particle a starting velocity
     * @desc float array of 3 items in [-200, 200], default (0.0, 0.0, 0.0)
     */
    public set object_align_factor(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.object_align_factor`, value)
    }

    /**
     * Let the object give the particle a starting velocity
     * @desc float in [-200, 200], default 0.0
     */
    public set object_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.object_factor`, value)
    }

    /**
     * Let the target particle give the particle a starting velocity
     * @desc float in [-200, 200], default 0.0
     */
    public set particle_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.particle_factor`, value)
    }

    /**
     * The size of the particles
     * @desc float in [0.001, 100000], default 0.0
     */
    public set particle_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.particle_size`, value)
    }

    /**
     * End time of drawn path
     * @desc float in [-inf, inf], default 0.0
     */
    public set path_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.path_end`, value)
    }

    /**
     * Starting time of drawn path
     * @desc float in [-inf, inf], default 0.0
     */
    public set path_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.path_start`, value)
    }

    /**
     * Rotation around the chosen orientation axis
     * @desc float in [-1, 1], default 0.0
     */
    public set phase_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.phase_factor`, value)
    }

    /**
     * Randomize rotation around the chosen orientation axis
     * @desc float in [0, 2], default 0.0
     */
    public set phase_factor_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.phase_factor_random`, value)
    }

    /**
     * Particle physics type
     * @desc enum in ['NO', 'NEWTON', 'KEYED', 'BOIDS', 'FLUID'], default 'NO'
     */
    public set physics_type(value: 'NO' | 'NEWTON' | 'KEYED' | 'BOIDS' | 'FLUID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.physics_type`, value)
    }

    /**
     * Multiplier of radius properties
     * @desc float in [0, inf], default 0.0
     */
    public set radius_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius_scale`, value)
    }

    /**
     * The event of target particles to react on
     * @desc enum in ['DEATH', 'COLLIDE', 'NEAR'], default 'DEATH'
     */
    public set react_event(value: 'DEATH' | 'COLLIDE' | 'NEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.react_event`, value)
    }

    /**
     * Let the vector away from the target particle’s location give the particle a starting velocity
     * @desc float in [-10, 10], default 0.0
     */
    public set reactor_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.reactor_factor`, value)
    }

    /**
     * How many steps paths are rendered with (power of 2)
     * @desc int in [0, 20], default 0
     */
    public set render_step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.render_step`, value)
    }

    /**
     * How particles are rendered
     * @desc enum in ['NONE', 'HALO', 'LINE', 'PATH', 'OBJECT', 'COLLECTION'], default 'NONE'
     */
    public set render_type(value: 'NONE' | 'HALO' | 'LINE' | 'PATH' | 'OBJECT' | 'COLLECTION') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.render_type`, value)
    }

    /**
     * Number of children/parent for rendering
     * @desc int in [0, 100000], default 0
     */
    public set rendered_child_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.rendered_child_count`, value)
    }

    /**
     * Strand diameter width at the root
     * @desc float in [0, inf], default 0.0
     */
    public set root_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.root_radius`, value)
    }

    /**
     * Randomize particle orientation
     * @desc float in [0, 1], default 0.0
     */
    public set rotation_factor_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation_factor_random`, value)
    }

    /**
     * Particle orientation axis (does not affect Explode modifier’s results)
     * @desc enum in ['NONE', 'NOR', 'NOR_TAN', 'VEL', 'GLOB_X', 'GLOB_Y', 'GLOB_Z', 'OB_X', 'OB_Y', 'OB_Z'], default 'NONE'
     */
    public set rotation_mode(value: 'NONE' | 'NOR' | 'NOR_TAN' | 'VEL' | 'GLOB_X' | 'GLOB_Y' | 'GLOB_Z' | 'OB_X' | 'OB_Y' | 'OB_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rotation_mode`, value)
    }

    /**
     * Amount of location dependent rough
     * @desc float in [0, 100000], default 0.0
     */
    public set roughness_1(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_1`, value)
    }

    /**
     * Size of location dependent rough
     * @desc float in [0.01, 100000], default 0.0
     */
    public set roughness_1_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_1_size`, value)
    }

    /**
     * Amount of random rough
     * @desc float in [0, 100000], default 0.0
     */
    public set roughness_2(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_2`, value)
    }

    /**
     * Size of random rough
     * @desc float in [0.01, 100000], default 0.0
     */
    public set roughness_2_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_2_size`, value)
    }

    /**
     * Amount of particles left untouched by random rough
     * @desc float in [0, 1], default 0.0
     */
    public set roughness_2_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_2_threshold`, value)
    }

    /**
     * Shape of end point rough
     * @desc float in [0, 10], default 0.0
     */
    public set roughness_end_shape(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_end_shape`, value)
    }

    /**
     * Amount of end point rough
     * @desc float in [0, 100000], default 0.0
     */
    public set roughness_endpoint(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roughness_endpoint`, value)
    }

    /**
     * Strand shape parameter
     * @desc float in [-1, 1], default 0.0
     */
    public set shape(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shape`, value)
    }

    /**
     * Show guide hairs
     * @desc boolean, default False
     */
    public set show_guide_hairs(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_guide_hairs`, value)
    }

    /**
     * Show hair simulation grid
     * @desc boolean, default False
     */
    public set show_hair_grid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_hair_grid`, value)
    }

    /**
     * Draw boid health
     * @desc boolean, default False
     */
    public set show_health(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_health`, value)
    }

    /**
     * Show particle number
     * @desc boolean, default False
     */
    public set show_number(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_number`, value)
    }

    /**
     * Show particle size
     * @desc boolean, default False
     */
    public set show_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_size`, value)
    }

    /**
     * Show particles before they are emitted
     * @desc boolean, default False
     */
    public set show_unborn(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_unborn`, value)
    }

    /**
     * Show particle velocity
     * @desc boolean, default False
     */
    public set show_velocity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_velocity`, value)
    }

    /**
     * Give the particle size a random variation
     * @desc float in [0, 1], default 0.0
     */
    public set size_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_random`, value)
    }

    /**
     * Subframes to simulate for improved stability and finer granularity simulations (dt = timestep / (subframes + 1))
     * @desc int in [0, 1000], default 0
     */
    public set subframes(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.subframes`, value)
    }

    /**
     * Let the surface tangent give the particle a starting velocity
     * @desc float in [-1000, 1000], default 0.0
     */
    public set tangent_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tangent_factor`, value)
    }

    /**
     * Rotate the surface tangent
     * @desc float in [-1, 1], default 0.0
     */
    public set tangent_phase(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tangent_phase`, value)
    }

    /**
     * A multiplier for physics timestep (1.0 means one frame = 1/25 seconds)
     * @desc float in [0, 100], default 0.0
     */
    public set time_tweak(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time_tweak`, value)
    }

    /**
     * The simulation timestep per frame (seconds per frame)
     * @desc float in [0.0001, 100], default 0.0
     */
    public set timestep(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.timestep`, value)
    }

    /**
     * Strand diameter width at the tip
     * @desc float in [0, inf], default 0.0
     */
    public set tip_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tip_radius`, value)
    }

    /**
     * Number of trail particles
     * @desc int in [1, 100000], default 0
     */
    public set trail_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.trail_count`, value)
    }

    /**
     * Number of turns around parent along the strand
     * @desc float in [-100000, 100000], default 0.0
     */
    public set twist(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.twist`, value)
    }

    /**
     * Particle Type
     * @desc enum in ['EMITTER', 'HAIR'], default 'EMITTER'
     */
    public set type(value: 'EMITTER' | 'HAIR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Path timing is in absolute frames
     * @desc boolean, default False
     */
    public set use_absolute_path_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_absolute_path_time`, value)
    }

    /**
     * Automatically set the number of subframes
     * @desc boolean, default False
     */
    public set use_adaptive_subframes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_adaptive_subframes`, value)
    }

    /**
     * Use full physics calculations for growing hair
     * @desc boolean, default False
     */
    public set use_advanced_hair(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_advanced_hair`, value)
    }

    /**
     * Set tip radius to zero
     * @desc boolean, default False
     */
    public set use_close_tip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_close_tip`, value)
    }

    /**
     * Use a curve to define clump tapering
     * @desc boolean, default False
     */
    public set use_clump_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clump_curve`, value)
    }

    /**
     * Create random clumps around the parent
     * @desc boolean, default False
     */
    public set use_clump_noise(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clump_noise`, value)
    }

    /**
     * Use object multiple times in the same collection
     * @desc boolean, default False
     */
    public set use_collection_count(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_collection_count`, value)
    }

    /**
     * Pick objects from collection randomly
     * @desc boolean, default False
     */
    public set use_collection_pick_random(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_collection_pick_random`, value)
    }

    /**
     * Show particles after they have died
     * @desc boolean, default False
     */
    public set use_dead(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dead`, value)
    }

    /**
     * Particles die when they collide with a deflector object
     * @desc boolean, default False
     */
    public set use_die_on_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_die_on_collision`, value)
    }

    /**
     * Particle rotations are affected by collisions and effectors
     * @desc boolean, default False
     */
    public set use_dynamic_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dynamic_rotation`, value)
    }

    /**
     * Emit in random order of elements
     * @desc boolean, default False
     */
    public set use_emit_random(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_emit_random`, value)
    }

    /**
     * Use even distribution from faces based on face areas or edge lengths
     * @desc boolean, default False
     */
    public set use_even_distribution(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_even_distribution`, value)
    }

    /**
     * Use object’s global coordinates for duplication
     * @desc boolean, default False
     */
    public set use_global_instance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_global_instance`, value)
    }

    /**
     * Interpolate hair using B-Splines
     * @desc boolean, default False
     */
    public set use_hair_bspline(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_hair_bspline`, value)
    }

    /**
     * Emit particles from mesh with modifiers applied (must use same subsurf level for viewport and render for correct results)
     * @desc boolean, default False
     */
    public set use_modifier_stack(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_modifier_stack`, value)
    }

    /**
     * Multiply mass by particle size
     * @desc boolean, default False
     */
    public set use_multiply_size_mass(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiply_size_mass`, value)
    }

    /**
     * Render parent particles
     * @desc boolean, default False
     */
    public set use_parent_particles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_parent_particles`, value)
    }

    /**
     * React multiple times
     * @desc boolean, default False
     */
    public set use_react_multiple(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_react_multiple`, value)
    }

    /**
     * Give birth to unreacted particles eventually
     * @desc boolean, default False
     */
    public set use_react_start_end(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_react_start_end`, value)
    }

    /**
     * Regrow hair for each frame
     * @desc boolean, default False
     */
    public set use_regrow_hair(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_regrow_hair`, value)
    }

    /**
     * Draw steps of the particle path
     * @desc boolean, default False
     */
    public set use_render_adaptive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_render_adaptive`, value)
    }

    /**
     * Use object’s rotation for duplication (global x-axis is aligned particle rotation axis)
     * @desc boolean, default False
     */
    public set use_rotation_instance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotation_instance`, value)
    }

    /**
     * Calculate particle rotations
     * @desc boolean, default False
     */
    public set use_rotations(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotations`, value)
    }

    /**
     * Use a curve to define roughness
     * @desc boolean, default False
     */
    public set use_roughness_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_roughness_curve`, value)
    }

    /**
     * Use object’s scale for duplication
     * @desc boolean, default False
     */
    public set use_scale_instance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scale_instance`, value)
    }

    /**
     * Particle effectors affect themselves
     * @desc boolean, default False
     */
    public set use_self_effect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_self_effect`, value)
    }

    /**
     * Use particle’s size in deflection
     * @desc boolean, default False
     */
    public set use_size_deflect(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_size_deflect`, value)
    }

    /**
     * Use the strand primitive for rendering
     * @desc boolean, default False
     */
    public set use_strand_primitive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_strand_primitive`, value)
    }

    /**
     * Use a curve to define twist
     * @desc boolean, default False
     */
    public set use_twist_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_twist_curve`, value)
    }

    /**
     * Multiply line length by particle speed
     * @desc boolean, default False
     */
    public set use_velocity_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_velocity_length`, value)
    }

    /**
     * Use whole collection at once
     * @desc boolean, default False
     */
    public set use_whole_collection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_whole_collection`, value)
    }

    /**
     * Emission locations / face (0 = automatic)
     * @desc int in [0, 1000], default 0
     */
    public set userjit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.userjit`, value)
    }

    /**
     * Relative amount of virtual parents
     * @desc float in [0, 1], default 0.0
     */
    public set virtual_parents(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.virtual_parents`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
