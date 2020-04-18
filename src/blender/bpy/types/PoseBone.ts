import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Bone } from './Bone'
import { PoseBoneConstraints } from './PoseBoneConstraints'
import { Constraint } from './Constraint'
import { MotionPath } from './MotionPath'
import { BoneGroup } from './BoneGroup'
import { BlenderObject } from './BlenderObject'

/**
 * PoseBone
 * 
 * https://docs.blender.org/api/current/bpy.types.PoseBone.html
 */
export class PoseBone {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bone that serves as the end handle for the B-Bone curve
     * @desc PoseBone, (readonly)
     */
    public get bbone_custom_handle_end(): PoseBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bbone_custom_handle_end`, PoseBone)
    }

    /**
     * Bone that serves as the start handle for the B-Bone curve
     * @desc PoseBone, (readonly)
     */
    public get bbone_custom_handle_start(): PoseBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bbone_custom_handle_start`, PoseBone)
    }

    /**
     * Bone associated with this PoseBone
     * @desc Bone, (readonly, never None)
     */
    public get bone(): Bone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bone`, Bone)
    }

    /**
     * Child of this pose bone
     * @desc PoseBone, (readonly)
     */
    public get child(): PoseBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.child`, PoseBone)
    }

    /**
     * Constraints that act on this PoseChannel
     * @desc PoseBoneConstraints bpy_prop_collection of Constraint, (readonly)
     */
    public get constraints(): BlenderCollection<Constraint> & Indexable<Constraint> & PoseBoneConstraints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.constraints`, PoseBoneConstraints, Constraint)
    }

    /**
     * Location of head of the channel’s bone
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get head(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.head`, 'number', 3)
    }

    /**
     * Is part of an IK chain
     * @desc boolean, default False, (readonly)
     */
    public get is_in_ik_chain(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_in_ik_chain`)
    }

    /**
     * Length of the bone
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length`)
    }

    /**
     * 4x4 matrix, before constraints
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0)), (readonly)
     */
    public get matrix_channel(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_channel`, 'number', 4, 4)
    }

    /**
     * Motion Path for this element
     * @desc MotionPath, (readonly)
     */
    public get motion_path(): MotionPath {
        return PythonInterop.getClass(this.interop, `${this.accessor}.motion_path`, MotionPath)
    }

    /**
     * Parent of this pose bone
     * @desc PoseBone, (readonly)
     */
    public get parent(): PoseBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, PoseBone)
    }

    /**
     * Location of tail of the channel’s bone
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get tail(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tail`, 'number', 3)
    }

    /**
     * The name of this bone before any ‘.’ character(readonly)
     * @desc void
     */
    public get basename(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.basename`)
    }

    /**
     * The midpoint between the head and the tail.(readonly)
     * @desc void
     */
    public get center(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.center`)
    }

    /**
     * (readonly)
     * @desc void
     */
    public get children(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children`)
    }

    /**
     * A list of all children from this bone. Warning: takes O(len(bones)**2) time.(readonly)
     * @desc void
     */
    public get children_recursive(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children_recursive`)
    }

    /**
     * Returns a chain of children with the same base name as this bone.Only direct chains are supported, forks caused by multiple childrenwith matching base names will terminate the functionand not be returned. Warning: takes O(len(bones)**2) time.(readonly)
     * @desc void
     */
    public get children_recursive_basename(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children_recursive_basename`)
    }

    /**
     * A list of parents, starting with the immediate parent(readonly)
     * @desc void
     */
    public get parent_recursive(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.parent_recursive`)
    }

    /**
     * The direction this bone is pointing.Utility function for (tail - head)(readonly)
     * @desc void
     */
    public get vector(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.vector`)
    }

    /**
     * Vector pointing down the x-axis of the bone.(readonly)
     * @desc void
     */
    public get x_axis(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.x_axis`)
    }

    /**
     * Vector pointing down the y-axis of the bone.(readonly)
     * @desc void
     */
    public get y_axis(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.y_axis`)
    }

    /**
     * Vector pointing down the z-axis of the bone.(readonly)
     * @desc void
     */
    public get z_axis(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.z_axis`)
    }

    /**
     * X-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveinx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveinx`)
    }

    /**
     * Y-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveiny(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveiny`)
    }

    /**
     * X-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveoutx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveoutx`)
    }

    /**
     * Y-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_curveouty(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_curveouty`)
    }

    /**
     * Length of first Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_easein(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_easein`)
    }

    /**
     * Length of second Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_easeout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_easeout`)
    }

    /**
     * Roll offset for the start of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_rollin(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_rollin`)
    }

    /**
     * Roll offset for the end of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public get bbone_rollout(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_rollout`)
    }

    /**
     * X-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleinx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleinx`)
    }

    /**
     * Y-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleiny(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleiny`)
    }

    /**
     * X-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleoutx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleoutx`)
    }

    /**
     * Y-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public get bbone_scaleouty(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bbone_scaleouty`)
    }

    /**
     * Bone Group this pose channel belongs to
     * @desc BoneGroup
     */
    public get bone_group(): BoneGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.bone_group`, BoneGroup)
    }

    /**
     * Bone Group this pose channel belongs to (0=no group)
     * @desc int in [-32768, 32767], default 0
     */
    public get bone_group_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bone_group_index`)
    }

    /**
     * Object that defines custom draw type for this bone
     * @desc Object
     */
    public get custom_shape(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.custom_shape`, BlenderObject)
    }

    /**
     * Adjust the size of the custom shape
     * @desc float in [0, 1000], default 0.0
     */
    public get custom_shape_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.custom_shape_scale`)
    }

    /**
     * Bone that defines the display transform of this custom shape
     * @desc PoseBone
     */
    public get custom_shape_transform(): PoseBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.custom_shape_transform`, PoseBone)
    }

    /**
     * Weight of scale constraint for IK
     * @desc float in [0, 1], default 0.0
     */
    public get ik_linear_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_linear_weight`)
    }

    /**
     * Maximum angles for IK Limit
     * @desc float in [0, 3.14159], default 0.0
     */
    public get ik_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_max_x`)
    }

    /**
     * Maximum angles for IK Limit
     * @desc float in [0, 3.14159], default 0.0
     */
    public get ik_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_max_y`)
    }

    /**
     * Maximum angles for IK Limit
     * @desc float in [0, 3.14159], default 0.0
     */
    public get ik_max_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_max_z`)
    }

    /**
     * Minimum angles for IK Limit
     * @desc float in [-3.14159, 0], default 0.0
     */
    public get ik_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_min_x`)
    }

    /**
     * Minimum angles for IK Limit
     * @desc float in [-3.14159, 0], default 0.0
     */
    public get ik_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_min_y`)
    }

    /**
     * Minimum angles for IK Limit
     * @desc float in [-3.14159, 0], default 0.0
     */
    public get ik_min_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_min_z`)
    }

    /**
     * Weight of rotation constraint for IK
     * @desc float in [0, 1], default 0.0
     */
    public get ik_rotation_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_rotation_weight`)
    }

    /**
     * IK stiffness around the X axis
     * @desc float in [0, 0.99], default 0.0
     */
    public get ik_stiffness_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_stiffness_x`)
    }

    /**
     * IK stiffness around the Y axis
     * @desc float in [0, 0.99], default 0.0
     */
    public get ik_stiffness_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_stiffness_y`)
    }

    /**
     * IK stiffness around the Z axis
     * @desc float in [0, 0.99], default 0.0
     */
    public get ik_stiffness_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_stiffness_z`)
    }

    /**
     * Allow scaling of the bone for IK
     * @desc float in [0, 1], default 0.0
     */
    public get ik_stretch(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ik_stretch`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * Disallow movement around the X axis
     * @desc boolean, default False
     */
    public get lock_ik_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_ik_x`)
    }

    /**
     * Disallow movement around the Y axis
     * @desc boolean, default False
     */
    public get lock_ik_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_ik_y`)
    }

    /**
     * Disallow movement around the Z axis
     * @desc boolean, default False
     */
    public get lock_ik_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_ik_z`)
    }

    /**
     * Lock editing of location when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get lock_location(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lock_location`, 'boolean', 3)
    }

    /**
     * Lock editing of rotation when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get lock_rotation(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lock_rotation`, 'boolean', 3)
    }

    /**
     * Lock editing of ‘angle’ component of four-component rotations when transforming
     * @desc boolean, default False
     */
    public get lock_rotation_w(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotation_w`)
    }

    /**
     * Lock editing of four component rotations by components (instead of as Eulers)
     * @desc boolean, default False
     */
    public get lock_rotations_4d(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotations_4d`)
    }

    /**
     * Lock editing of scale when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get lock_scale(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lock_scale`, 'boolean', 3)
    }

    /**
     * Final 4x4 matrix after constraints and drivers are applied (object space)
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, 'number', 4, 4)
    }

    /**
     * Alternative access to location/scale/rotation relative to the parent and own rest bone
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_basis(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_basis`, 'number', 4, 4)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Angle of Rotation for Axis-Angle rotation representation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 1.0, 0.0)
     */
    public get rotation_axis_angle(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_axis_angle`, 'number', 4)
    }

    /**
     * Rotation in Eulers
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get rotation_euler(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_euler`, 'number', 3)
    }

    /**
     * 
     * @desc enum in ['QUATERNION', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'AXIS_ANGLE'], default 'QUATERNION'
     */
    public get rotation_mode(): 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rotation_mode`)
    }

    /**
     * Rotation in Quaternions
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public get rotation_quaternion(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_quaternion`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get scale(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 3)
    }

    /**
     * Scale the custom object by the bone length
     * @desc boolean, default False
     */
    public get use_custom_shape_bone_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_shape_bone_size`)
    }

    /**
     * Limit movement around the X axis
     * @desc boolean, default False
     */
    public get use_ik_limit_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ik_limit_x`)
    }

    /**
     * Limit movement around the Y axis
     * @desc boolean, default False
     */
    public get use_ik_limit_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ik_limit_y`)
    }

    /**
     * Limit movement around the Z axis
     * @desc boolean, default False
     */
    public get use_ik_limit_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ik_limit_z`)
    }

    /**
     * Apply channel size as IK constraint if stretching is enabled
     * @desc boolean, default False
     */
    public get use_ik_linear_control(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ik_linear_control`)
    }

    /**
     * Apply channel rotation as IK constraint
     * @desc boolean, default False
     */
    public get use_ik_rotation_control(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_ik_rotation_control`)
    }

    /**
     * X-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveinx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveinx`, value)
    }

    /**
     * Y-axis handle offset for start of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveiny(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveiny`, value)
    }

    /**
     * X-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveoutx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveoutx`, value)
    }

    /**
     * Y-axis handle offset for end of the B-Bone’s curve, adjusts curvature
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_curveouty(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_curveouty`, value)
    }

    /**
     * Length of first Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_easein(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_easein`, value)
    }

    /**
     * Length of second Bezier Handle (for B-Bones only)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_easeout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_easeout`, value)
    }

    /**
     * Roll offset for the start of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_rollin(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_rollin`, value)
    }

    /**
     * Roll offset for the end of the B-Bone, adjusts twist
     * @desc float in [-inf, inf], default 0.0
     */
    public set bbone_rollout(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_rollout`, value)
    }

    /**
     * X-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleinx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleinx`, value)
    }

    /**
     * Y-axis scale factor for start of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleiny(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleiny`, value)
    }

    /**
     * X-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleoutx(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleoutx`, value)
    }

    /**
     * Y-axis scale factor for end of the B-Bone, adjusts thickness (for tapering effects)
     * @desc float in [-inf, inf], default 1.0
     */
    public set bbone_scaleouty(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bbone_scaleouty`, value)
    }

    /**
     * Bone Group this pose channel belongs to
     * @desc BoneGroup
     */
    public set bone_group(value: BoneGroup) {
        PythonInterop.setClass(this.interop, `${this.accessor}.bone_group`, value)
    }

    /**
     * Bone Group this pose channel belongs to (0=no group)
     * @desc int in [-32768, 32767], default 0
     */
    public set bone_group_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bone_group_index`, value)
    }

    /**
     * Object that defines custom draw type for this bone
     * @desc Object
     */
    public set custom_shape(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.custom_shape`, value)
    }

    /**
     * Adjust the size of the custom shape
     * @desc float in [0, 1000], default 0.0
     */
    public set custom_shape_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.custom_shape_scale`, value)
    }

    /**
     * Bone that defines the display transform of this custom shape
     * @desc PoseBone
     */
    public set custom_shape_transform(value: PoseBone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.custom_shape_transform`, value)
    }

    /**
     * Weight of scale constraint for IK
     * @desc float in [0, 1], default 0.0
     */
    public set ik_linear_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_linear_weight`, value)
    }

    /**
     * Maximum angles for IK Limit
     * @desc float in [0, 3.14159], default 0.0
     */
    public set ik_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_max_x`, value)
    }

    /**
     * Maximum angles for IK Limit
     * @desc float in [0, 3.14159], default 0.0
     */
    public set ik_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_max_y`, value)
    }

    /**
     * Maximum angles for IK Limit
     * @desc float in [0, 3.14159], default 0.0
     */
    public set ik_max_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_max_z`, value)
    }

    /**
     * Minimum angles for IK Limit
     * @desc float in [-3.14159, 0], default 0.0
     */
    public set ik_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_min_x`, value)
    }

    /**
     * Minimum angles for IK Limit
     * @desc float in [-3.14159, 0], default 0.0
     */
    public set ik_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_min_y`, value)
    }

    /**
     * Minimum angles for IK Limit
     * @desc float in [-3.14159, 0], default 0.0
     */
    public set ik_min_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_min_z`, value)
    }

    /**
     * Weight of rotation constraint for IK
     * @desc float in [0, 1], default 0.0
     */
    public set ik_rotation_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_rotation_weight`, value)
    }

    /**
     * IK stiffness around the X axis
     * @desc float in [0, 0.99], default 0.0
     */
    public set ik_stiffness_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_stiffness_x`, value)
    }

    /**
     * IK stiffness around the Y axis
     * @desc float in [0, 0.99], default 0.0
     */
    public set ik_stiffness_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_stiffness_y`, value)
    }

    /**
     * IK stiffness around the Z axis
     * @desc float in [0, 0.99], default 0.0
     */
    public set ik_stiffness_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_stiffness_z`, value)
    }

    /**
     * Allow scaling of the bone for IK
     * @desc float in [0, 1], default 0.0
     */
    public set ik_stretch(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ik_stretch`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Disallow movement around the X axis
     * @desc boolean, default False
     */
    public set lock_ik_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_ik_x`, value)
    }

    /**
     * Disallow movement around the Y axis
     * @desc boolean, default False
     */
    public set lock_ik_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_ik_y`, value)
    }

    /**
     * Disallow movement around the Z axis
     * @desc boolean, default False
     */
    public set lock_ik_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_ik_z`, value)
    }

    /**
     * Lock editing of location when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set lock_location(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lock_location`, value)
    }

    /**
     * Lock editing of rotation when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set lock_rotation(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lock_rotation`, value)
    }

    /**
     * Lock editing of ‘angle’ component of four-component rotations when transforming
     * @desc boolean, default False
     */
    public set lock_rotation_w(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotation_w`, value)
    }

    /**
     * Lock editing of four component rotations by components (instead of as Eulers)
     * @desc boolean, default False
     */
    public set lock_rotations_4d(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotations_4d`, value)
    }

    /**
     * Lock editing of scale when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set lock_scale(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lock_scale`, value)
    }

    /**
     * Final 4x4 matrix after constraints and drivers are applied (object space)
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, value)
    }

    /**
     * Alternative access to location/scale/rotation relative to the parent and own rest bone
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_basis(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_basis`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Angle of Rotation for Axis-Angle rotation representation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 1.0, 0.0)
     */
    public set rotation_axis_angle(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_axis_angle`, value)
    }

    /**
     * Rotation in Eulers
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set rotation_euler(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_euler`, value)
    }

    /**
     * 
     * @desc enum in ['QUATERNION', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'AXIS_ANGLE'], default 'QUATERNION'
     */
    public set rotation_mode(value: 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rotation_mode`, value)
    }

    /**
     * Rotation in Quaternions
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public set rotation_quaternion(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_quaternion`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set scale(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Scale the custom object by the bone length
     * @desc boolean, default False
     */
    public set use_custom_shape_bone_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_shape_bone_size`, value)
    }

    /**
     * Limit movement around the X axis
     * @desc boolean, default False
     */
    public set use_ik_limit_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ik_limit_x`, value)
    }

    /**
     * Limit movement around the Y axis
     * @desc boolean, default False
     */
    public set use_ik_limit_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ik_limit_y`, value)
    }

    /**
     * Limit movement around the Z axis
     * @desc boolean, default False
     */
    public set use_ik_limit_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ik_limit_z`, value)
    }

    /**
     * Apply channel size as IK constraint if stretching is enabled
     * @desc boolean, default False
     */
    public set use_ik_linear_control(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ik_linear_control`, value)
    }

    /**
     * Apply channel rotation as IK constraint
     * @desc boolean, default False
     */
    public set use_ik_rotation_control(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_ik_rotation_control`, value)
    }

    /**
     * Calculate bone envelope at given point
     * @desc float in [-inf, inf]
     */
    public evaluate_envelope(options: { point?: [number, number, number] }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.evaluate_envelope`, options)
    }

    /**
     * Retrieve the matrix of the joint between B-Bone segments if available
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf]
     */
    public bbone_segment_matrix(options: { index?: number, rest?: boolean }): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.callMultiDimensionalArray(this.interop, `${this.accessor}.bbone_segment_matrix`, options)
    }

    /**
     * Retrieve the vectors and rolls coming from B-Bone custom handles
     * @desc void
     */
    public compute_bbone_handles(options: { rest?: boolean, ease?: boolean, offsets?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.compute_bbone_handles`, options)
    }

    /**
     * The same as ‘bone in other_bone.parent_recursive’but saved generating a list.
     * @desc void
     */
    public parent_index(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_index`, {})
    }

    /**
     * Utility function to add vec to the head and tail of this bone
     * @desc void
     */
    public translate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.translate`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
