import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * KinematicConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.KinematicConstraint.html
 */
export class KinematicConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * How many bones are included in the IK effect - 0 uses all bones
     * @desc int in [0, 255], default 0
     */
    public get chain_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.chain_count`)
    }

    /**
     * Radius of limiting sphere
     * @desc float in [0, 100], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * 
     * @desc enum in ['COPY_POSE', 'DISTANCE'], default 'COPY_POSE'
     */
    public get ik_type(): 'COPY_POSE' | 'DISTANCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ik_type`)
    }

    /**
     * Maximum number of solving iterations
     * @desc int in [0, 10000], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * Distances in relation to sphere of influence to allow
     * @desc enum in ['LIMITDIST_INSIDE', 'LIMITDIST_OUTSIDE', 'LIMITDIST_ONSURFACE'], default 'LIMITDIST_INSIDE'
     */
    public get limit_mode(): 'LIMITDIST_INSIDE' | 'LIMITDIST_OUTSIDE' | 'LIMITDIST_ONSURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_mode`)
    }

    /**
     * Constraint position along X axis
     * @desc boolean, default False
     */
    public get lock_location_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_location_x`)
    }

    /**
     * Constraint position along Y axis
     * @desc boolean, default False
     */
    public get lock_location_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_location_y`)
    }

    /**
     * Constraint position along Z axis
     * @desc boolean, default False
     */
    public get lock_location_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_location_z`)
    }

    /**
     * Constraint rotation along X axis
     * @desc boolean, default False
     */
    public get lock_rotation_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotation_x`)
    }

    /**
     * Constraint rotation along Y axis
     * @desc boolean, default False
     */
    public get lock_rotation_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotation_y`)
    }

    /**
     * Constraint rotation along Z axis
     * @desc boolean, default False
     */
    public get lock_rotation_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotation_z`)
    }

    /**
     * For Tree-IK: Weight of orientation control for this target
     * @desc float in [0.01, 1], default 0.0
     */
    public get orient_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.orient_weight`)
    }

    /**
     * Pole rotation offset
     * @desc float in [-3.14159, 3.14159], default 0.0
     */
    public get pole_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pole_angle`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get pole_subtarget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.pole_subtarget`)
    }

    /**
     * Object for pole rotation
     * @desc Object
     */
    public get pole_target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.pole_target`, BlenderObject)
    }

    /**
     * Constraint axis Lock options relative to Bone or Target reference
     * @desc enum in ['BONE', 'TARGET'], default 'BONE'
     */
    public get reference_axis(): 'BONE' | 'TARGET' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.reference_axis`)
    }

    /**
     * Armature bone, mesh or lattice vertex group, …
     * @desc string, default '', (never None)
     */
    public get subtarget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subtarget`)
    }

    /**
     * Target object
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Chain follows position of target
     * @desc boolean, default False
     */
    public get use_location(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_location`)
    }

    /**
     * Chain follows rotation of target
     * @desc boolean, default False
     */
    public get use_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotation`)
    }

    /**
     * Enable IK Stretching
     * @desc boolean, default False
     */
    public get use_stretch(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stretch`)
    }

    /**
     * Include bone’s tail as last element in chain
     * @desc boolean, default False
     */
    public get use_tail(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_tail`)
    }

    /**
     * For Tree-IK: Weight of position control for this target
     * @desc float in [0.01, 1], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * How many bones are included in the IK effect - 0 uses all bones
     * @desc int in [0, 255], default 0
     */
    public set chain_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.chain_count`, value)
    }

    /**
     * Radius of limiting sphere
     * @desc float in [0, 100], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * 
     * @desc enum in ['COPY_POSE', 'DISTANCE'], default 'COPY_POSE'
     */
    public set ik_type(value: 'COPY_POSE' | 'DISTANCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ik_type`, value)
    }

    /**
     * Maximum number of solving iterations
     * @desc int in [0, 10000], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * Distances in relation to sphere of influence to allow
     * @desc enum in ['LIMITDIST_INSIDE', 'LIMITDIST_OUTSIDE', 'LIMITDIST_ONSURFACE'], default 'LIMITDIST_INSIDE'
     */
    public set limit_mode(value: 'LIMITDIST_INSIDE' | 'LIMITDIST_OUTSIDE' | 'LIMITDIST_ONSURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_mode`, value)
    }

    /**
     * Constraint position along X axis
     * @desc boolean, default False
     */
    public set lock_location_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_location_x`, value)
    }

    /**
     * Constraint position along Y axis
     * @desc boolean, default False
     */
    public set lock_location_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_location_y`, value)
    }

    /**
     * Constraint position along Z axis
     * @desc boolean, default False
     */
    public set lock_location_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_location_z`, value)
    }

    /**
     * Constraint rotation along X axis
     * @desc boolean, default False
     */
    public set lock_rotation_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotation_x`, value)
    }

    /**
     * Constraint rotation along Y axis
     * @desc boolean, default False
     */
    public set lock_rotation_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotation_y`, value)
    }

    /**
     * Constraint rotation along Z axis
     * @desc boolean, default False
     */
    public set lock_rotation_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotation_z`, value)
    }

    /**
     * For Tree-IK: Weight of orientation control for this target
     * @desc float in [0.01, 1], default 0.0
     */
    public set orient_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.orient_weight`, value)
    }

    /**
     * Pole rotation offset
     * @desc float in [-3.14159, 3.14159], default 0.0
     */
    public set pole_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pole_angle`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set pole_subtarget(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.pole_subtarget`, value)
    }

    /**
     * Object for pole rotation
     * @desc Object
     */
    public set pole_target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.pole_target`, value)
    }

    /**
     * Constraint axis Lock options relative to Bone or Target reference
     * @desc enum in ['BONE', 'TARGET'], default 'BONE'
     */
    public set reference_axis(value: 'BONE' | 'TARGET') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.reference_axis`, value)
    }

    /**
     * Armature bone, mesh or lattice vertex group, …
     * @desc string, default '', (never None)
     */
    public set subtarget(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.subtarget`, value)
    }

    /**
     * Target object
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Chain follows position of target
     * @desc boolean, default False
     */
    public set use_location(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_location`, value)
    }

    /**
     * Chain follows rotation of target
     * @desc boolean, default False
     */
    public set use_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotation`, value)
    }

    /**
     * Enable IK Stretching
     * @desc boolean, default False
     */
    public set use_stretch(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stretch`, value)
    }

    /**
     * Include bone’s tail as last element in chain
     * @desc boolean, default False
     */
    public set use_tail(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_tail`, value)
    }

    /**
     * For Tree-IK: Weight of position control for this target
     * @desc float in [0.01, 1], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
