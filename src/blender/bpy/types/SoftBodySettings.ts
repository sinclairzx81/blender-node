import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { EffectorWeights } from './EffectorWeights'
import { Collection } from './Collection'

/**
 * SoftBodySettings
 * 
 * https://docs.blender.org/api/current/bpy.types.SoftBodySettings.html
 */
export class SoftBodySettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc EffectorWeights, (readonly)
     */
    public get effector_weights(): EffectorWeights {
        return PythonInterop.getClass(this.interop, `${this.accessor}.effector_weights`, EffectorWeights)
    }

    /**
     * Make edges ‘sail’
     * @desc int in [0, 30000], default 0
     */
    public get aero(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.aero`)
    }

    /**
     * Method of calculating aerodynamic interaction
     * @desc enum in ['SIMPLE', 'LIFT_FORCE'], default 'SIMPLE'
     */
    public get aerodynamics_type(): 'SIMPLE' | 'LIFT_FORCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.aerodynamics_type`)
    }

    /**
     * Blending to inelastic collision
     * @desc float in [0.001, 1], default 0.0
     */
    public get ball_damp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ball_damp`)
    }

    /**
     * Absolute ball size or factor if not manually adjusted
     * @desc float in [-10, 10], default 0.0
     */
    public get ball_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ball_size`)
    }

    /**
     * Ball inflating pressure
     * @desc float in [0.001, 100], default 0.0
     */
    public get ball_stiff(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ball_stiff`)
    }

    /**
     * Bending Stiffness
     * @desc float in [0, 10], default 0.0
     */
    public get bend(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bend`)
    }

    /**
     * ‘Viscosity’ inside collision target
     * @desc int in [0, 100], default 0
     */
    public get choke(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.choke`)
    }

    /**
     * Limit colliders to this collection
     * @desc Collection
     */
    public get collision_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collision_collection`, Collection)
    }

    /**
     * Choose Collision Type
     * @desc enum in ['MANUAL', 'AVERAGE', 'MINIMAL', 'MAXIMAL', 'MINMAX'], default 'MANUAL'
     */
    public get collision_type(): 'MANUAL' | 'AVERAGE' | 'MINIMAL' | 'MAXIMAL' | 'MINMAX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.collision_type`)
    }

    /**
     * Edge spring friction
     * @desc float in [0, 50], default 0.0
     */
    public get damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping`)
    }

    /**
     * The Runge-Kutta ODE solver error limit, low value gives more precision, high values speed
     * @desc float in [0.001, 10], default 0.0
     */
    public get error_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.error_threshold`)
    }

    /**
     * General media friction for point movements
     * @desc float in [0, 50], default 0.0
     */
    public get friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.friction`)
    }

    /**
     * Fuzziness while on collision, high values make collision handling faster but less stable
     * @desc int in [1, 100], default 0
     */
    public get fuzzy(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.fuzzy`)
    }

    /**
     * Default Goal (vertex target position) value
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
     * Goal maximum, vertex weights are scaled to match this range
     * @desc float in [0, 1], default 0.0
     */
    public get goal_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.goal_max`)
    }

    /**
     * Goal minimum, vertex weights are scaled to match this range
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
     * Apply gravitation to point movement
     * @desc float in [-10, 10], default 0.0
     */
    public get gravity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gravity`)
    }

    /**
     * Location of center of mass
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location_mass_center(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location_mass_center`, 'number', 3)
    }

    /**
     * General Mass value
     * @desc float in [0, 50000], default 0.0
     */
    public get mass(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mass`)
    }

    /**
     * Permanent deform
     * @desc int in [0, 100], default 0
     */
    public get plastic(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.plastic`)
    }

    /**
     * Edge spring stiffness when longer than rest length
     * @desc float in [0, 0.999], default 0.0
     */
    public get pull(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pull`)
    }

    /**
     * Edge spring stiffness when shorter than rest length
     * @desc float in [0, 0.999], default 0.0
     */
    public get push(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.push`)
    }

    /**
     * Estimated rotation matrix
     * @desc float multi-dimensional array of 3 * 3 items in [-inf, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0))
     */
    public get rotation_estimate(): [[number, number, number], [number, number, number], [number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.rotation_estimate`, 'number', 3, 3)
    }

    /**
     * Estimated scale matrix
     * @desc float multi-dimensional array of 3 * 3 items in [-inf, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0))
     */
    public get scale_estimate(): [[number, number, number], [number, number, number], [number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.scale_estimate`, 'number', 3, 3)
    }

    /**
     * Shear Stiffness
     * @desc float in [0, 1], default 0.0
     */
    public get shear(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shear`)
    }

    /**
     * Tweak timing for physics to control frequency and speed
     * @desc float in [0.01, 100], default 0.0
     */
    public get speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.speed`)
    }

    /**
     * Alter spring length to shrink/blow up (unit %) 0 to disable
     * @desc int in [0, 200], default 0
     */
    public get spring_length(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.spring_length`)
    }

    /**
     * Maximal # solver steps/frame
     * @desc int in [0, 30000], default 0
     */
    public get step_max(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.step_max`)
    }

    /**
     * Minimal # solver steps/frame
     * @desc int in [0, 30000], default 0
     */
    public get step_min(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.step_min`)
    }

    /**
     * Use velocities for automagic step sizes
     * @desc boolean, default False
     */
    public get use_auto_step(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_step`)
    }

    /**
     * Turn on SB diagnose console prints
     * @desc boolean, default False
     */
    public get use_diagnose(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_diagnose`)
    }

    /**
     * Edges collide too
     * @desc boolean, default False
     */
    public get use_edge_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_collision`)
    }

    /**
     * Use Edges as springs
     * @desc boolean, default False
     */
    public get use_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edges`)
    }

    /**
     * Estimate matrix… split to COM, ROT, SCALE
     * @desc boolean, default False
     */
    public get use_estimate_matrix(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_estimate_matrix`)
    }

    /**
     * Faces collide too, can be very slow
     * @desc boolean, default False
     */
    public get use_face_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_face_collision`)
    }

    /**
     * Define forces for vertices to stick to animated position
     * @desc boolean, default False
     */
    public get use_goal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_goal`)
    }

    /**
     * Enable naive vertex ball self collision
     * @desc boolean, default False
     */
    public get use_self_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self_collision`)
    }

    /**
     * Add diagonal springs on 4-gons
     * @desc boolean, default False
     */
    public get use_stiff_quads(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stiff_quads`)
    }

    /**
     * Control point weight values
     * @desc string, default '', (never None)
     */
    public get vertex_group_goal(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_goal`)
    }

    /**
     * Control point mass values
     * @desc string, default '', (never None)
     */
    public get vertex_group_mass(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_mass`)
    }

    /**
     * Control point spring strength values
     * @desc string, default '', (never None)
     */
    public get vertex_group_spring(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_spring`)
    }

    /**
     * Make edges ‘sail’
     * @desc int in [0, 30000], default 0
     */
    public set aero(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.aero`, value)
    }

    /**
     * Method of calculating aerodynamic interaction
     * @desc enum in ['SIMPLE', 'LIFT_FORCE'], default 'SIMPLE'
     */
    public set aerodynamics_type(value: 'SIMPLE' | 'LIFT_FORCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.aerodynamics_type`, value)
    }

    /**
     * Blending to inelastic collision
     * @desc float in [0.001, 1], default 0.0
     */
    public set ball_damp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ball_damp`, value)
    }

    /**
     * Absolute ball size or factor if not manually adjusted
     * @desc float in [-10, 10], default 0.0
     */
    public set ball_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ball_size`, value)
    }

    /**
     * Ball inflating pressure
     * @desc float in [0.001, 100], default 0.0
     */
    public set ball_stiff(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ball_stiff`, value)
    }

    /**
     * Bending Stiffness
     * @desc float in [0, 10], default 0.0
     */
    public set bend(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bend`, value)
    }

    /**
     * ‘Viscosity’ inside collision target
     * @desc int in [0, 100], default 0
     */
    public set choke(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.choke`, value)
    }

    /**
     * Limit colliders to this collection
     * @desc Collection
     */
    public set collision_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.collision_collection`, value)
    }

    /**
     * Choose Collision Type
     * @desc enum in ['MANUAL', 'AVERAGE', 'MINIMAL', 'MAXIMAL', 'MINMAX'], default 'MANUAL'
     */
    public set collision_type(value: 'MANUAL' | 'AVERAGE' | 'MINIMAL' | 'MAXIMAL' | 'MINMAX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.collision_type`, value)
    }

    /**
     * Edge spring friction
     * @desc float in [0, 50], default 0.0
     */
    public set damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping`, value)
    }

    /**
     * The Runge-Kutta ODE solver error limit, low value gives more precision, high values speed
     * @desc float in [0.001, 10], default 0.0
     */
    public set error_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.error_threshold`, value)
    }

    /**
     * General media friction for point movements
     * @desc float in [0, 50], default 0.0
     */
    public set friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.friction`, value)
    }

    /**
     * Fuzziness while on collision, high values make collision handling faster but less stable
     * @desc int in [1, 100], default 0
     */
    public set fuzzy(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.fuzzy`, value)
    }

    /**
     * Default Goal (vertex target position) value
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
     * Goal maximum, vertex weights are scaled to match this range
     * @desc float in [0, 1], default 0.0
     */
    public set goal_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.goal_max`, value)
    }

    /**
     * Goal minimum, vertex weights are scaled to match this range
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
     * Apply gravitation to point movement
     * @desc float in [-10, 10], default 0.0
     */
    public set gravity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gravity`, value)
    }

    /**
     * Location of center of mass
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location_mass_center(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location_mass_center`, value)
    }

    /**
     * General Mass value
     * @desc float in [0, 50000], default 0.0
     */
    public set mass(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mass`, value)
    }

    /**
     * Permanent deform
     * @desc int in [0, 100], default 0
     */
    public set plastic(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.plastic`, value)
    }

    /**
     * Edge spring stiffness when longer than rest length
     * @desc float in [0, 0.999], default 0.0
     */
    public set pull(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pull`, value)
    }

    /**
     * Edge spring stiffness when shorter than rest length
     * @desc float in [0, 0.999], default 0.0
     */
    public set push(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.push`, value)
    }

    /**
     * Estimated rotation matrix
     * @desc float multi-dimensional array of 3 * 3 items in [-inf, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0))
     */
    public set rotation_estimate(value: [[number, number, number], [number, number, number], [number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.rotation_estimate`, value)
    }

    /**
     * Estimated scale matrix
     * @desc float multi-dimensional array of 3 * 3 items in [-inf, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0))
     */
    public set scale_estimate(value: [[number, number, number], [number, number, number], [number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.scale_estimate`, value)
    }

    /**
     * Shear Stiffness
     * @desc float in [0, 1], default 0.0
     */
    public set shear(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shear`, value)
    }

    /**
     * Tweak timing for physics to control frequency and speed
     * @desc float in [0.01, 100], default 0.0
     */
    public set speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.speed`, value)
    }

    /**
     * Alter spring length to shrink/blow up (unit %) 0 to disable
     * @desc int in [0, 200], default 0
     */
    public set spring_length(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.spring_length`, value)
    }

    /**
     * Maximal # solver steps/frame
     * @desc int in [0, 30000], default 0
     */
    public set step_max(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.step_max`, value)
    }

    /**
     * Minimal # solver steps/frame
     * @desc int in [0, 30000], default 0
     */
    public set step_min(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.step_min`, value)
    }

    /**
     * Use velocities for automagic step sizes
     * @desc boolean, default False
     */
    public set use_auto_step(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_step`, value)
    }

    /**
     * Turn on SB diagnose console prints
     * @desc boolean, default False
     */
    public set use_diagnose(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_diagnose`, value)
    }

    /**
     * Edges collide too
     * @desc boolean, default False
     */
    public set use_edge_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_collision`, value)
    }

    /**
     * Use Edges as springs
     * @desc boolean, default False
     */
    public set use_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edges`, value)
    }

    /**
     * Estimate matrix… split to COM, ROT, SCALE
     * @desc boolean, default False
     */
    public set use_estimate_matrix(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_estimate_matrix`, value)
    }

    /**
     * Faces collide too, can be very slow
     * @desc boolean, default False
     */
    public set use_face_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_face_collision`, value)
    }

    /**
     * Define forces for vertices to stick to animated position
     * @desc boolean, default False
     */
    public set use_goal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_goal`, value)
    }

    /**
     * Enable naive vertex ball self collision
     * @desc boolean, default False
     */
    public set use_self_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_self_collision`, value)
    }

    /**
     * Add diagonal springs on 4-gons
     * @desc boolean, default False
     */
    public set use_stiff_quads(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stiff_quads`, value)
    }

    /**
     * Control point weight values
     * @desc string, default '', (never None)
     */
    public set vertex_group_goal(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_goal`, value)
    }

    /**
     * Control point mass values
     * @desc string, default '', (never None)
     */
    public set vertex_group_mass(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_mass`, value)
    }

    /**
     * Control point spring strength values
     * @desc string, default '', (never None)
     */
    public set vertex_group_spring(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_spring`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
