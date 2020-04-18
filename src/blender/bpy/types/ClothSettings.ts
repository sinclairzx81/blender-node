import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { EffectorWeights } from './EffectorWeights'
import { ShapeKey } from './ShapeKey'

/**
 * ClothSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ClothSettings.html
 */
export class ClothSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc EffectorWeights, (readonly)
     */
    public get effector_weights(): EffectorWeights {
        return PythonInterop.getClass(this.interop, `${this.accessor}.effector_weights`, EffectorWeights)
    }

    /**
     * Air has normally some thickness which slows falling things down
     * @desc float in [0, 10], default 0.0
     */
    public get air_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.air_damping`)
    }

    /**
     * Amount of damping in bending behavior
     * @desc float in [0, 1000], default 0.0
     */
    public get bending_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bending_damping`)
    }

    /**
     * Physical model for simulating bending forces
     * @desc enum in ['ANGULAR', 'LINEAR'], default 'LINEAR'
     */
    public get bending_model(): 'ANGULAR' | 'LINEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bending_model`)
    }

    /**
     * How much the material resists bending
     * @desc float in [0, 10000], default 0.0
     */
    public get bending_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bending_stiffness`)
    }

    /**
     * Maximum bending stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public get bending_stiffness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bending_stiffness_max`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get collider_friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.collider_friction`)
    }

    /**
     * Amount of damping in compression behavior
     * @desc float in [0, 50], default 0.0
     */
    public get compression_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.compression_damping`)
    }

    /**
     * How much the material resists compression
     * @desc float in [0, 10000], default 0.0
     */
    public get compression_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.compression_stiffness`)
    }

    /**
     * Maximum compression stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public get compression_stiffness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.compression_stiffness_max`)
    }

    /**
     * Influence of target density on the simulation
     * @desc float in [0, 1], default 0.0
     */
    public get density_strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.density_strength`)
    }

    /**
     * Maximum density of hair
     * @desc float in [0, 10000], default 0.0
     */
    public get density_target(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.density_target`)
    }

    /**
     * Default Goal (vertex target position) value, when no Vertex Group used
     * @desc float in [0, 1], default 0.0
     */
    public get goal_default(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.goal_default`)
    }

    /**
     * Goal (vertex target position) friction
     * @desc float in [0, 50], default 0.0
     */
    public get goal_friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.goal_friction`)
    }

    /**
     * Goal maximum, vertex group weights are scaled to match this range
     * @desc float in [0, 1], default 0.0
     */
    public get goal_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.goal_max`)
    }

    /**
     * Goal minimum, vertex group weights are scaled to match this range
     * @desc float in [0, 1], default 0.0
     */
    public get goal_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.goal_min`)
    }

    /**
     * Goal (vertex target position) spring stiffness
     * @desc float in [0, 0.999], default 0.0
     */
    public get goal_spring(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.goal_spring`)
    }

    /**
     * Gravity or external force vector
     * @desc float array of 3 items in [-100, 100], default (0.0, 0.0, 0.0)
     */
    public get gravity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gravity`, 'number', 3)
    }

    /**
     * How much the material resists compression
     * @desc float in [0, 10000], default 0.0
     */
    public get internal_compression_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_compression_stiffness`)
    }

    /**
     * Maximum compression stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public get internal_compression_stiffness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_compression_stiffness_max`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get internal_friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_friction`)
    }

    /**
     * How much the rays used to connect the internal points can diverge from the vertex normal
     * @desc float in [0, 0.785398], default 0.0
     */
    public get internal_spring_max_diversion(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_spring_max_diversion`)
    }

    /**
     * The maximum length an internal spring can have during creation. If the distance between internal points is greater than this, no internal spring will be created between these points. A length of zero means that there is no length limit
     * @desc float in [0, 1000], default 0.0
     */
    public get internal_spring_max_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_spring_max_length`)
    }

    /**
     * Require the points the internal springs connect to have opposite normal directions
     * @desc boolean, default False
     */
    public get internal_spring_normal_check(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.internal_spring_normal_check`)
    }

    /**
     * How much the material resists stretching
     * @desc float in [0, 10000], default 0.0
     */
    public get internal_tension_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_tension_stiffness`)
    }

    /**
     * Maximum tension stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public get internal_tension_stiffness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.internal_tension_stiffness_max`)
    }

    /**
     * The mass of each vertex on the cloth material
     * @desc float in [0, inf], default 0.0
     */
    public get mass(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mass`)
    }

    /**
     * Pin (vertex target position) spring stiffness
     * @desc float in [0, 50], default 0.0
     */
    public get pin_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pin_stiffness`)
    }

    /**
     * Air pressure scaling factor
     * @desc float in [0, 10000], default 1.0
     */
    public get pressure_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pressure_factor`)
    }

    /**
     * Quality of the simulation in steps per frame (higher is better quality but slower)
     * @desc int in [1, inf], default 0
     */
    public get quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.quality`)
    }

    /**
     * Shape key to use the rest spring lengths from
     * @desc ShapeKey
     */
    public get rest_shape_key(): ShapeKey {
        return PythonInterop.getClass(this.interop, `${this.accessor}.rest_shape_key`, ShapeKey)
    }

    /**
     * Maximum sewing force
     * @desc float in [0, 10000], default 0.0
     */
    public get sewing_force_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sewing_force_max`)
    }

    /**
     * Amount of damping in shearing behavior
     * @desc float in [0, 50], default 0.0
     */
    public get shear_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shear_damping`)
    }

    /**
     * How much the material resists shearing
     * @desc float in [0, 10000], default 0.0
     */
    public get shear_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shear_stiffness`)
    }

    /**
     * Maximum shear scaling value
     * @desc float in [0, 10000], default 0.0
     */
    public get shear_stiffness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shear_stiffness_max`)
    }

    /**
     * Max amount to shrink cloth by
     * @desc float in [-inf, 1], default 0.0
     */
    public get shrink_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shrink_max`)
    }

    /**
     * Factor by which to shrink cloth
     * @desc float in [-inf, 1], default 0.0
     */
    public get shrink_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shrink_min`)
    }

    /**
     * The mesh volume where the inner/outer pressure will be the same. If set to zero the volume will not contribute to the total pressure
     * @desc float in [0, 10000], default 0.0
     */
    public get target_volume(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.target_volume`)
    }

    /**
     * Amount of damping in stretching behavior
     * @desc float in [0, 50], default 0.0
     */
    public get tension_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tension_damping`)
    }

    /**
     * How much the material resists stretching
     * @desc float in [0, 10000], default 0.0
     */
    public get tension_stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tension_stiffness`)
    }

    /**
     * Maximum tension stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public get tension_stiffness_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.tension_stiffness_max`)
    }

    /**
     * Cloth speed is multiplied by this value
     * @desc float in [0, inf], default 0.0
     */
    public get time_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_scale`)
    }

    /**
     * The uniform pressure that is constantly applied to the mesh. Can be negative
     * @desc float in [-10000, 10000], default 0.0
     */
    public get uniform_pressure_force(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.uniform_pressure_force`)
    }

    /**
     * Make simulation respect deformations in the base mesh
     * @desc boolean, default False
     */
    public get use_dynamic_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dynamic_mesh`)
    }

    /**
     * Simulate an internal volume structure by creating springs connecting the opposite sides of the mesh
     * @desc boolean, default False
     */
    public get use_internal_springs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_internal_springs`)
    }

    /**
     * Simulate pressure inside a closed cloth mesh
     * @desc boolean, default False
     */
    public get use_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure`)
    }

    /**
     * Use the Volume parameter as the initial volume
     * @desc boolean, default False
     */
    public get use_pressure_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_volume`)
    }

    /**
     * Pulls loose edges together
     * @desc boolean, default False
     */
    public get use_sewing_springs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sewing_springs`)
    }

    /**
     * Vertex group for fine control over bending stiffness
     * @desc string, default '', (never None)
     */
    public get vertex_group_bending(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_bending`)
    }

    /**
     * Vertex group for fine control over the internal spring stiffness
     * @desc string, default '', (never None)
     */
    public get vertex_group_intern(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_intern`)
    }

    /**
     * Vertex Group for pinning of vertices
     * @desc string, default '', (never None)
     */
    public get vertex_group_mass(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_mass`)
    }

    /**
     * Vertex Group for where to apply pressure. Zero weight means no pressure while a weight of one means full pressure. Faces with a vertex that has zero weight will be excluded from the volume calculation
     * @desc string, default '', (never None)
     */
    public get vertex_group_pressure(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_pressure`)
    }

    /**
     * Vertex group for fine control over shear stiffness
     * @desc string, default '', (never None)
     */
    public get vertex_group_shear_stiffness(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_shear_stiffness`)
    }

    /**
     * Vertex Group for shrinking cloth
     * @desc string, default '', (never None)
     */
    public get vertex_group_shrink(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_shrink`)
    }

    /**
     * Vertex group for fine control over structural stiffness
     * @desc string, default '', (never None)
     */
    public get vertex_group_structural_stiffness(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_structural_stiffness`)
    }

    /**
     * Size of the voxel grid cells for interaction effects
     * @desc float in [0.0001, 10000], default 0.1
     */
    public get voxel_cell_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.voxel_cell_size`)
    }

    /**
     * Air has normally some thickness which slows falling things down
     * @desc float in [0, 10], default 0.0
     */
    public set air_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.air_damping`, value)
    }

    /**
     * Amount of damping in bending behavior
     * @desc float in [0, 1000], default 0.0
     */
    public set bending_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bending_damping`, value)
    }

    /**
     * Physical model for simulating bending forces
     * @desc enum in ['ANGULAR', 'LINEAR'], default 'LINEAR'
     */
    public set bending_model(value: 'ANGULAR' | 'LINEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bending_model`, value)
    }

    /**
     * How much the material resists bending
     * @desc float in [0, 10000], default 0.0
     */
    public set bending_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bending_stiffness`, value)
    }

    /**
     * Maximum bending stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public set bending_stiffness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bending_stiffness_max`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set collider_friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.collider_friction`, value)
    }

    /**
     * Amount of damping in compression behavior
     * @desc float in [0, 50], default 0.0
     */
    public set compression_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.compression_damping`, value)
    }

    /**
     * How much the material resists compression
     * @desc float in [0, 10000], default 0.0
     */
    public set compression_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.compression_stiffness`, value)
    }

    /**
     * Maximum compression stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public set compression_stiffness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.compression_stiffness_max`, value)
    }

    /**
     * Influence of target density on the simulation
     * @desc float in [0, 1], default 0.0
     */
    public set density_strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.density_strength`, value)
    }

    /**
     * Maximum density of hair
     * @desc float in [0, 10000], default 0.0
     */
    public set density_target(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.density_target`, value)
    }

    /**
     * Default Goal (vertex target position) value, when no Vertex Group used
     * @desc float in [0, 1], default 0.0
     */
    public set goal_default(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.goal_default`, value)
    }

    /**
     * Goal (vertex target position) friction
     * @desc float in [0, 50], default 0.0
     */
    public set goal_friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.goal_friction`, value)
    }

    /**
     * Goal maximum, vertex group weights are scaled to match this range
     * @desc float in [0, 1], default 0.0
     */
    public set goal_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.goal_max`, value)
    }

    /**
     * Goal minimum, vertex group weights are scaled to match this range
     * @desc float in [0, 1], default 0.0
     */
    public set goal_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.goal_min`, value)
    }

    /**
     * Goal (vertex target position) spring stiffness
     * @desc float in [0, 0.999], default 0.0
     */
    public set goal_spring(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.goal_spring`, value)
    }

    /**
     * Gravity or external force vector
     * @desc float array of 3 items in [-100, 100], default (0.0, 0.0, 0.0)
     */
    public set gravity(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gravity`, value)
    }

    /**
     * How much the material resists compression
     * @desc float in [0, 10000], default 0.0
     */
    public set internal_compression_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_compression_stiffness`, value)
    }

    /**
     * Maximum compression stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public set internal_compression_stiffness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_compression_stiffness_max`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set internal_friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_friction`, value)
    }

    /**
     * How much the rays used to connect the internal points can diverge from the vertex normal
     * @desc float in [0, 0.785398], default 0.0
     */
    public set internal_spring_max_diversion(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_spring_max_diversion`, value)
    }

    /**
     * The maximum length an internal spring can have during creation. If the distance between internal points is greater than this, no internal spring will be created between these points. A length of zero means that there is no length limit
     * @desc float in [0, 1000], default 0.0
     */
    public set internal_spring_max_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_spring_max_length`, value)
    }

    /**
     * Require the points the internal springs connect to have opposite normal directions
     * @desc boolean, default False
     */
    public set internal_spring_normal_check(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.internal_spring_normal_check`, value)
    }

    /**
     * How much the material resists stretching
     * @desc float in [0, 10000], default 0.0
     */
    public set internal_tension_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_tension_stiffness`, value)
    }

    /**
     * Maximum tension stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public set internal_tension_stiffness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.internal_tension_stiffness_max`, value)
    }

    /**
     * The mass of each vertex on the cloth material
     * @desc float in [0, inf], default 0.0
     */
    public set mass(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mass`, value)
    }

    /**
     * Pin (vertex target position) spring stiffness
     * @desc float in [0, 50], default 0.0
     */
    public set pin_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pin_stiffness`, value)
    }

    /**
     * Air pressure scaling factor
     * @desc float in [0, 10000], default 1.0
     */
    public set pressure_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pressure_factor`, value)
    }

    /**
     * Quality of the simulation in steps per frame (higher is better quality but slower)
     * @desc int in [1, inf], default 0
     */
    public set quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * Shape key to use the rest spring lengths from
     * @desc ShapeKey
     */
    public set rest_shape_key(value: ShapeKey) {
        PythonInterop.setClass(this.interop, `${this.accessor}.rest_shape_key`, value)
    }

    /**
     * Maximum sewing force
     * @desc float in [0, 10000], default 0.0
     */
    public set sewing_force_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sewing_force_max`, value)
    }

    /**
     * Amount of damping in shearing behavior
     * @desc float in [0, 50], default 0.0
     */
    public set shear_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shear_damping`, value)
    }

    /**
     * How much the material resists shearing
     * @desc float in [0, 10000], default 0.0
     */
    public set shear_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shear_stiffness`, value)
    }

    /**
     * Maximum shear scaling value
     * @desc float in [0, 10000], default 0.0
     */
    public set shear_stiffness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shear_stiffness_max`, value)
    }

    /**
     * Max amount to shrink cloth by
     * @desc float in [-inf, 1], default 0.0
     */
    public set shrink_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shrink_max`, value)
    }

    /**
     * Factor by which to shrink cloth
     * @desc float in [-inf, 1], default 0.0
     */
    public set shrink_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shrink_min`, value)
    }

    /**
     * The mesh volume where the inner/outer pressure will be the same. If set to zero the volume will not contribute to the total pressure
     * @desc float in [0, 10000], default 0.0
     */
    public set target_volume(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.target_volume`, value)
    }

    /**
     * Amount of damping in stretching behavior
     * @desc float in [0, 50], default 0.0
     */
    public set tension_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tension_damping`, value)
    }

    /**
     * How much the material resists stretching
     * @desc float in [0, 10000], default 0.0
     */
    public set tension_stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tension_stiffness`, value)
    }

    /**
     * Maximum tension stiffness value
     * @desc float in [0, 10000], default 0.0
     */
    public set tension_stiffness_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.tension_stiffness_max`, value)
    }

    /**
     * Cloth speed is multiplied by this value
     * @desc float in [0, inf], default 0.0
     */
    public set time_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time_scale`, value)
    }

    /**
     * The uniform pressure that is constantly applied to the mesh. Can be negative
     * @desc float in [-10000, 10000], default 0.0
     */
    public set uniform_pressure_force(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.uniform_pressure_force`, value)
    }

    /**
     * Make simulation respect deformations in the base mesh
     * @desc boolean, default False
     */
    public set use_dynamic_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dynamic_mesh`, value)
    }

    /**
     * Simulate an internal volume structure by creating springs connecting the opposite sides of the mesh
     * @desc boolean, default False
     */
    public set use_internal_springs(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_internal_springs`, value)
    }

    /**
     * Simulate pressure inside a closed cloth mesh
     * @desc boolean, default False
     */
    public set use_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure`, value)
    }

    /**
     * Use the Volume parameter as the initial volume
     * @desc boolean, default False
     */
    public set use_pressure_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_volume`, value)
    }

    /**
     * Pulls loose edges together
     * @desc boolean, default False
     */
    public set use_sewing_springs(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sewing_springs`, value)
    }

    /**
     * Vertex group for fine control over bending stiffness
     * @desc string, default '', (never None)
     */
    public set vertex_group_bending(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_bending`, value)
    }

    /**
     * Vertex group for fine control over the internal spring stiffness
     * @desc string, default '', (never None)
     */
    public set vertex_group_intern(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_intern`, value)
    }

    /**
     * Vertex Group for pinning of vertices
     * @desc string, default '', (never None)
     */
    public set vertex_group_mass(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_mass`, value)
    }

    /**
     * Vertex Group for where to apply pressure. Zero weight means no pressure while a weight of one means full pressure. Faces with a vertex that has zero weight will be excluded from the volume calculation
     * @desc string, default '', (never None)
     */
    public set vertex_group_pressure(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_pressure`, value)
    }

    /**
     * Vertex group for fine control over shear stiffness
     * @desc string, default '', (never None)
     */
    public set vertex_group_shear_stiffness(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_shear_stiffness`, value)
    }

    /**
     * Vertex Group for shrinking cloth
     * @desc string, default '', (never None)
     */
    public set vertex_group_shrink(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_shrink`, value)
    }

    /**
     * Vertex group for fine control over structural stiffness
     * @desc string, default '', (never None)
     */
    public set vertex_group_structural_stiffness(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_structural_stiffness`, value)
    }

    /**
     * Size of the voxel grid cells for interaction effects
     * @desc float in [0.0001, 10000], default 0.1
     */
    public set voxel_cell_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.voxel_cell_size`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
