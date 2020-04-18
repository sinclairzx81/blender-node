import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * TransformConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.TransformConstraint.html
 */
export class TransformConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Top range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_x`)
    }

    /**
     * Top range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_x_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_x_rot`)
    }

    /**
     * Top range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_x_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_x_scale`)
    }

    /**
     * Top range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_y`)
    }

    /**
     * Top range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_y_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_y_rot`)
    }

    /**
     * Top range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_y_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_y_scale`)
    }

    /**
     * Top range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_z`)
    }

    /**
     * Top range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_z_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_z_rot`)
    }

    /**
     * Top range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_max_z_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_max_z_scale`)
    }

    /**
     * Bottom range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_x`)
    }

    /**
     * Bottom range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_x_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_x_rot`)
    }

    /**
     * Bottom range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_x_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_x_scale`)
    }

    /**
     * Bottom range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_y`)
    }

    /**
     * Bottom range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_y_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_y_rot`)
    }

    /**
     * Bottom range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_y_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_y_scale`)
    }

    /**
     * Bottom range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_z`)
    }

    /**
     * Bottom range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_z_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_z_rot`)
    }

    /**
     * Bottom range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get from_min_z_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.from_min_z_scale`)
    }

    /**
     * Specify the type of rotation channels to use
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'QUATERNION', 'SWING_TWIST_X', 'SWING_TWIST_Y', 'SWING_TWIST_Z'], default 'AUTO'
     */
    public get from_rotation_mode(): 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'QUATERNION' | 'SWING_TWIST_X' | 'SWING_TWIST_Y' | 'SWING_TWIST_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.from_rotation_mode`)
    }

    /**
     * The transformation type to use from the target
     * @desc enum in ['LOCATION', 'ROTATION', 'SCALE'], default 'LOCATION'
     */
    public get map_from(): 'LOCATION' | 'ROTATION' | 'SCALE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_from`)
    }

    /**
     * The transformation type to affect of the constrained object
     * @desc enum in ['LOCATION', 'ROTATION', 'SCALE'], default 'LOCATION'
     */
    public get map_to(): 'LOCATION' | 'ROTATION' | 'SCALE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_to`)
    }

    /**
     * The source axis constrained object’s X axis uses
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get map_to_x_from(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_to_x_from`)
    }

    /**
     * The source axis constrained object’s Y axis uses
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get map_to_y_from(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_to_y_from`)
    }

    /**
     * The source axis constrained object’s Z axis uses
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get map_to_z_from(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_to_z_from`)
    }

    /**
     * Specify how to combine the new location with original
     * @desc enum in ['REPLACE', 'ADD'], default 'ADD'
     */
    public get mix_mode(): 'REPLACE' | 'ADD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode`)
    }

    /**
     * Specify how to combine the new rotation with original
     * @desc enum in ['REPLACE', 'ADD', 'BEFORE', 'AFTER'], default 'ADD'
     */
    public get mix_mode_rot(): 'REPLACE' | 'ADD' | 'BEFORE' | 'AFTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode_rot`)
    }

    /**
     * Specify how to combine the new scale with original
     * @desc enum in ['REPLACE', 'MULTIPLY'], default 'REPLACE'
     */
    public get mix_mode_scale(): 'REPLACE' | 'MULTIPLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode_scale`)
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
     * Explicitly specify the output euler rotation order
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX'], default 'AUTO'
     */
    public get to_euler_order(): 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.to_euler_order`)
    }

    /**
     * Top range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_x`)
    }

    /**
     * Top range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_x_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_x_rot`)
    }

    /**
     * Top range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_x_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_x_scale`)
    }

    /**
     * Top range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_y`)
    }

    /**
     * Top range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_y_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_y_rot`)
    }

    /**
     * Top range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_y_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_y_scale`)
    }

    /**
     * Top range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_z`)
    }

    /**
     * Top range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_z_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_z_rot`)
    }

    /**
     * Top range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_max_z_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_max_z_scale`)
    }

    /**
     * Bottom range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_x`)
    }

    /**
     * Bottom range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_x_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_x_rot`)
    }

    /**
     * Bottom range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_x_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_x_scale`)
    }

    /**
     * Bottom range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_y`)
    }

    /**
     * Bottom range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_y_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_y_rot`)
    }

    /**
     * Bottom range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_y_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_y_scale`)
    }

    /**
     * Bottom range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_z`)
    }

    /**
     * Bottom range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_z_rot(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_z_rot`)
    }

    /**
     * Bottom range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public get to_min_z_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.to_min_z_scale`)
    }

    /**
     * Extrapolate ranges
     * @desc boolean, default False
     */
    public get use_motion_extrapolate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motion_extrapolate`)
    }

    /**
     * Top range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_x`, value)
    }

    /**
     * Top range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_x_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_x_rot`, value)
    }

    /**
     * Top range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_x_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_x_scale`, value)
    }

    /**
     * Top range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_y`, value)
    }

    /**
     * Top range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_y_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_y_rot`, value)
    }

    /**
     * Top range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_y_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_y_scale`, value)
    }

    /**
     * Top range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_z`, value)
    }

    /**
     * Top range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_z_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_z_rot`, value)
    }

    /**
     * Top range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_max_z_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_max_z_scale`, value)
    }

    /**
     * Bottom range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_x`, value)
    }

    /**
     * Bottom range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_x_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_x_rot`, value)
    }

    /**
     * Bottom range of X axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_x_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_x_scale`, value)
    }

    /**
     * Bottom range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_y`, value)
    }

    /**
     * Bottom range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_y_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_y_rot`, value)
    }

    /**
     * Bottom range of Y axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_y_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_y_scale`, value)
    }

    /**
     * Bottom range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_z`, value)
    }

    /**
     * Bottom range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_z_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_z_rot`, value)
    }

    /**
     * Bottom range of Z axis source motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set from_min_z_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.from_min_z_scale`, value)
    }

    /**
     * Specify the type of rotation channels to use
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'QUATERNION', 'SWING_TWIST_X', 'SWING_TWIST_Y', 'SWING_TWIST_Z'], default 'AUTO'
     */
    public set from_rotation_mode(value: 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'QUATERNION' | 'SWING_TWIST_X' | 'SWING_TWIST_Y' | 'SWING_TWIST_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.from_rotation_mode`, value)
    }

    /**
     * The transformation type to use from the target
     * @desc enum in ['LOCATION', 'ROTATION', 'SCALE'], default 'LOCATION'
     */
    public set map_from(value: 'LOCATION' | 'ROTATION' | 'SCALE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_from`, value)
    }

    /**
     * The transformation type to affect of the constrained object
     * @desc enum in ['LOCATION', 'ROTATION', 'SCALE'], default 'LOCATION'
     */
    public set map_to(value: 'LOCATION' | 'ROTATION' | 'SCALE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_to`, value)
    }

    /**
     * The source axis constrained object’s X axis uses
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set map_to_x_from(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_to_x_from`, value)
    }

    /**
     * The source axis constrained object’s Y axis uses
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set map_to_y_from(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_to_y_from`, value)
    }

    /**
     * The source axis constrained object’s Z axis uses
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set map_to_z_from(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_to_z_from`, value)
    }

    /**
     * Specify how to combine the new location with original
     * @desc enum in ['REPLACE', 'ADD'], default 'ADD'
     */
    public set mix_mode(value: 'REPLACE' | 'ADD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode`, value)
    }

    /**
     * Specify how to combine the new rotation with original
     * @desc enum in ['REPLACE', 'ADD', 'BEFORE', 'AFTER'], default 'ADD'
     */
    public set mix_mode_rot(value: 'REPLACE' | 'ADD' | 'BEFORE' | 'AFTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode_rot`, value)
    }

    /**
     * Specify how to combine the new scale with original
     * @desc enum in ['REPLACE', 'MULTIPLY'], default 'REPLACE'
     */
    public set mix_mode_scale(value: 'REPLACE' | 'MULTIPLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode_scale`, value)
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
     * Explicitly specify the output euler rotation order
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX'], default 'AUTO'
     */
    public set to_euler_order(value: 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.to_euler_order`, value)
    }

    /**
     * Top range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_x`, value)
    }

    /**
     * Top range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_x_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_x_rot`, value)
    }

    /**
     * Top range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_x_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_x_scale`, value)
    }

    /**
     * Top range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_y`, value)
    }

    /**
     * Top range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_y_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_y_rot`, value)
    }

    /**
     * Top range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_y_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_y_scale`, value)
    }

    /**
     * Top range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_z`, value)
    }

    /**
     * Top range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_z_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_z_rot`, value)
    }

    /**
     * Top range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_max_z_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_max_z_scale`, value)
    }

    /**
     * Bottom range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_x`, value)
    }

    /**
     * Bottom range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_x_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_x_rot`, value)
    }

    /**
     * Bottom range of X axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_x_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_x_scale`, value)
    }

    /**
     * Bottom range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_y`, value)
    }

    /**
     * Bottom range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_y_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_y_rot`, value)
    }

    /**
     * Bottom range of Y axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_y_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_y_scale`, value)
    }

    /**
     * Bottom range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_z`, value)
    }

    /**
     * Bottom range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_z_rot(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_z_rot`, value)
    }

    /**
     * Bottom range of Z axis destination motion
     * @desc float in [-inf, inf], default 0.0
     */
    public set to_min_z_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.to_min_z_scale`, value)
    }

    /**
     * Extrapolate ranges
     * @desc boolean, default False
     */
    public set use_motion_extrapolate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motion_extrapolate`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
