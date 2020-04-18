import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * RigidBodyConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.RigidBodyConstraint.html
 */
export class RigidBodyConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Impulse threshold that must be reached for the constraint to break
     * @desc float in [0, inf], default 10.0
     */
    public get breaking_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.breaking_threshold`)
    }

    /**
     * Disable collisions between constrained rigid bodies
     * @desc boolean, default False
     */
    public get disable_collisions(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.disable_collisions`)
    }

    /**
     * Enable this constraint
     * @desc boolean, default False
     */
    public get enabled(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.enabled`)
    }

    /**
     * Lower limit of X axis rotation
     * @desc float in [-6.28319, 6.28319], default -0.785398
     */
    public get limit_ang_x_lower(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_ang_x_lower`)
    }

    /**
     * Upper limit of X axis rotation
     * @desc float in [-6.28319, 6.28319], default 0.785398
     */
    public get limit_ang_x_upper(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_ang_x_upper`)
    }

    /**
     * Lower limit of Y axis rotation
     * @desc float in [-6.28319, 6.28319], default -0.785398
     */
    public get limit_ang_y_lower(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_ang_y_lower`)
    }

    /**
     * Upper limit of Y axis rotation
     * @desc float in [-6.28319, 6.28319], default 0.785398
     */
    public get limit_ang_y_upper(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_ang_y_upper`)
    }

    /**
     * Lower limit of Z axis rotation
     * @desc float in [-6.28319, 6.28319], default -0.785398
     */
    public get limit_ang_z_lower(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_ang_z_lower`)
    }

    /**
     * Upper limit of Z axis rotation
     * @desc float in [-6.28319, 6.28319], default 0.785398
     */
    public get limit_ang_z_upper(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_ang_z_upper`)
    }

    /**
     * Lower limit of X axis translation
     * @desc float in [-inf, inf], default -1
     */
    public get limit_lin_x_lower(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_lin_x_lower`)
    }

    /**
     * Upper limit of X axis translation
     * @desc float in [-inf, inf], default 1.0
     */
    public get limit_lin_x_upper(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_lin_x_upper`)
    }

    /**
     * Lower limit of Y axis translation
     * @desc float in [-inf, inf], default -1
     */
    public get limit_lin_y_lower(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_lin_y_lower`)
    }

    /**
     * Upper limit of Y axis translation
     * @desc float in [-inf, inf], default 1.0
     */
    public get limit_lin_y_upper(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_lin_y_upper`)
    }

    /**
     * Lower limit of Z axis translation
     * @desc float in [-inf, inf], default -1
     */
    public get limit_lin_z_lower(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_lin_z_lower`)
    }

    /**
     * Upper limit of Z axis translation
     * @desc float in [-inf, inf], default 1.0
     */
    public get limit_lin_z_upper(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.limit_lin_z_upper`)
    }

    /**
     * Maximum angular motor impulse
     * @desc float in [0, inf], default 1.0
     */
    public get motor_ang_max_impulse(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motor_ang_max_impulse`)
    }

    /**
     * Target angular motor velocity
     * @desc float in [-inf, inf], default 1.0
     */
    public get motor_ang_target_velocity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motor_ang_target_velocity`)
    }

    /**
     * Maximum linear motor impulse
     * @desc float in [0, inf], default 1.0
     */
    public get motor_lin_max_impulse(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motor_lin_max_impulse`)
    }

    /**
     * Target linear motor velocity
     * @desc float in [-inf, inf], default 1.0
     */
    public get motor_lin_target_velocity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motor_lin_target_velocity`)
    }

    /**
     * First Rigid Body Object to be constrained
     * @desc Object
     */
    public get object1(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object1`, BlenderObject)
    }

    /**
     * Second Rigid Body Object to be constrained
     * @desc Object
     */
    public get object2(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object2`, BlenderObject)
    }

    /**
     * Number of constraint solver iterations made per simulation step (higher values are more accurate but slower)
     * @desc int in [1, 1000], default 10
     */
    public get solver_iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.solver_iterations`)
    }

    /**
     * Damping on the X rotational axis
     * @desc float in [0, inf], default 0.5
     */
    public get spring_damping_ang_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_damping_ang_x`)
    }

    /**
     * Damping on the Y rotational axis
     * @desc float in [0, inf], default 0.5
     */
    public get spring_damping_ang_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_damping_ang_y`)
    }

    /**
     * Damping on the Z rotational axis
     * @desc float in [0, inf], default 0.5
     */
    public get spring_damping_ang_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_damping_ang_z`)
    }

    /**
     * Damping on the X axis
     * @desc float in [0, inf], default 0.5
     */
    public get spring_damping_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_damping_x`)
    }

    /**
     * Damping on the Y axis
     * @desc float in [0, inf], default 0.5
     */
    public get spring_damping_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_damping_y`)
    }

    /**
     * Damping on the Z axis
     * @desc float in [0, inf], default 0.5
     */
    public get spring_damping_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_damping_z`)
    }

    /**
     * Stiffness on the X rotational axis
     * @desc float in [0, inf], default 10.0
     */
    public get spring_stiffness_ang_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_stiffness_ang_x`)
    }

    /**
     * Stiffness on the Y rotational axis
     * @desc float in [0, inf], default 10.0
     */
    public get spring_stiffness_ang_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_stiffness_ang_y`)
    }

    /**
     * Stiffness on the Z rotational axis
     * @desc float in [0, inf], default 10.0
     */
    public get spring_stiffness_ang_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_stiffness_ang_z`)
    }

    /**
     * Stiffness on the X axis
     * @desc float in [0, inf], default 10.0
     */
    public get spring_stiffness_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_stiffness_x`)
    }

    /**
     * Stiffness on the Y axis
     * @desc float in [0, inf], default 10.0
     */
    public get spring_stiffness_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_stiffness_y`)
    }

    /**
     * Stiffness on the Z axis
     * @desc float in [0, inf], default 10.0
     */
    public get spring_stiffness_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_stiffness_z`)
    }

    /**
     * Which implementation of spring to use
     * @desc enum in ['SPRING1', 'SPRING2'], default 'SPRING1'
     */
    public get spring_type(): 'SPRING1' | 'SPRING2' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.spring_type`)
    }

    /**
     * Type of Rigid Body Constraint
     * @desc enum in ['FIXED', 'POINT', 'HINGE', 'SLIDER', 'PISTON', 'GENERIC', 'GENERIC_SPRING', 'MOTOR'], default 'POINT'
     */
    public get type(): 'FIXED' | 'POINT' | 'HINGE' | 'SLIDER' | 'PISTON' | 'GENERIC' | 'GENERIC_SPRING' | 'MOTOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Constraint can be broken if it receives an impulse above the threshold
     * @desc boolean, default False
     */
    public get use_breaking(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_breaking`)
    }

    /**
     * Limit rotation around X axis
     * @desc boolean, default False
     */
    public get use_limit_ang_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_limit_ang_x`)
    }

    /**
     * Limit rotation around Y axis
     * @desc boolean, default False
     */
    public get use_limit_ang_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_limit_ang_y`)
    }

    /**
     * Limit rotation around Z axis
     * @desc boolean, default False
     */
    public get use_limit_ang_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_limit_ang_z`)
    }

    /**
     * Limit translation on X axis
     * @desc boolean, default False
     */
    public get use_limit_lin_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_limit_lin_x`)
    }

    /**
     * Limit translation on Y axis
     * @desc boolean, default False
     */
    public get use_limit_lin_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_limit_lin_y`)
    }

    /**
     * Limit translation on Z axis
     * @desc boolean, default False
     */
    public get use_limit_lin_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_limit_lin_z`)
    }

    /**
     * Enable angular motor
     * @desc boolean, default False
     */
    public get use_motor_ang(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motor_ang`)
    }

    /**
     * Enable linear motor
     * @desc boolean, default False
     */
    public get use_motor_lin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motor_lin`)
    }

    /**
     * Override the number of solver iterations for this constraint
     * @desc boolean, default False
     */
    public get use_override_solver_iterations(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_override_solver_iterations`)
    }

    /**
     * Enable spring on X rotational axis
     * @desc boolean, default False
     */
    public get use_spring_ang_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spring_ang_x`)
    }

    /**
     * Enable spring on Y rotational axis
     * @desc boolean, default False
     */
    public get use_spring_ang_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spring_ang_y`)
    }

    /**
     * Enable spring on Z rotational axis
     * @desc boolean, default False
     */
    public get use_spring_ang_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spring_ang_z`)
    }

    /**
     * Enable spring on X axis
     * @desc boolean, default False
     */
    public get use_spring_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spring_x`)
    }

    /**
     * Enable spring on Y axis
     * @desc boolean, default False
     */
    public get use_spring_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spring_y`)
    }

    /**
     * Enable spring on Z axis
     * @desc boolean, default False
     */
    public get use_spring_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_spring_z`)
    }

    /**
     * Impulse threshold that must be reached for the constraint to break
     * @desc float in [0, inf], default 10.0
     */
    public set breaking_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.breaking_threshold`, value)
    }

    /**
     * Disable collisions between constrained rigid bodies
     * @desc boolean, default False
     */
    public set disable_collisions(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.disable_collisions`, value)
    }

    /**
     * Enable this constraint
     * @desc boolean, default False
     */
    public set enabled(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.enabled`, value)
    }

    /**
     * Lower limit of X axis rotation
     * @desc float in [-6.28319, 6.28319], default -0.785398
     */
    public set limit_ang_x_lower(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_ang_x_lower`, value)
    }

    /**
     * Upper limit of X axis rotation
     * @desc float in [-6.28319, 6.28319], default 0.785398
     */
    public set limit_ang_x_upper(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_ang_x_upper`, value)
    }

    /**
     * Lower limit of Y axis rotation
     * @desc float in [-6.28319, 6.28319], default -0.785398
     */
    public set limit_ang_y_lower(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_ang_y_lower`, value)
    }

    /**
     * Upper limit of Y axis rotation
     * @desc float in [-6.28319, 6.28319], default 0.785398
     */
    public set limit_ang_y_upper(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_ang_y_upper`, value)
    }

    /**
     * Lower limit of Z axis rotation
     * @desc float in [-6.28319, 6.28319], default -0.785398
     */
    public set limit_ang_z_lower(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_ang_z_lower`, value)
    }

    /**
     * Upper limit of Z axis rotation
     * @desc float in [-6.28319, 6.28319], default 0.785398
     */
    public set limit_ang_z_upper(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_ang_z_upper`, value)
    }

    /**
     * Lower limit of X axis translation
     * @desc float in [-inf, inf], default -1
     */
    public set limit_lin_x_lower(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_lin_x_lower`, value)
    }

    /**
     * Upper limit of X axis translation
     * @desc float in [-inf, inf], default 1.0
     */
    public set limit_lin_x_upper(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_lin_x_upper`, value)
    }

    /**
     * Lower limit of Y axis translation
     * @desc float in [-inf, inf], default -1
     */
    public set limit_lin_y_lower(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_lin_y_lower`, value)
    }

    /**
     * Upper limit of Y axis translation
     * @desc float in [-inf, inf], default 1.0
     */
    public set limit_lin_y_upper(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_lin_y_upper`, value)
    }

    /**
     * Lower limit of Z axis translation
     * @desc float in [-inf, inf], default -1
     */
    public set limit_lin_z_lower(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_lin_z_lower`, value)
    }

    /**
     * Upper limit of Z axis translation
     * @desc float in [-inf, inf], default 1.0
     */
    public set limit_lin_z_upper(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.limit_lin_z_upper`, value)
    }

    /**
     * Maximum angular motor impulse
     * @desc float in [0, inf], default 1.0
     */
    public set motor_ang_max_impulse(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motor_ang_max_impulse`, value)
    }

    /**
     * Target angular motor velocity
     * @desc float in [-inf, inf], default 1.0
     */
    public set motor_ang_target_velocity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motor_ang_target_velocity`, value)
    }

    /**
     * Maximum linear motor impulse
     * @desc float in [0, inf], default 1.0
     */
    public set motor_lin_max_impulse(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motor_lin_max_impulse`, value)
    }

    /**
     * Target linear motor velocity
     * @desc float in [-inf, inf], default 1.0
     */
    public set motor_lin_target_velocity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motor_lin_target_velocity`, value)
    }

    /**
     * First Rigid Body Object to be constrained
     * @desc Object
     */
    public set object1(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object1`, value)
    }

    /**
     * Second Rigid Body Object to be constrained
     * @desc Object
     */
    public set object2(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object2`, value)
    }

    /**
     * Number of constraint solver iterations made per simulation step (higher values are more accurate but slower)
     * @desc int in [1, 1000], default 10
     */
    public set solver_iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.solver_iterations`, value)
    }

    /**
     * Damping on the X rotational axis
     * @desc float in [0, inf], default 0.5
     */
    public set spring_damping_ang_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_damping_ang_x`, value)
    }

    /**
     * Damping on the Y rotational axis
     * @desc float in [0, inf], default 0.5
     */
    public set spring_damping_ang_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_damping_ang_y`, value)
    }

    /**
     * Damping on the Z rotational axis
     * @desc float in [0, inf], default 0.5
     */
    public set spring_damping_ang_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_damping_ang_z`, value)
    }

    /**
     * Damping on the X axis
     * @desc float in [0, inf], default 0.5
     */
    public set spring_damping_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_damping_x`, value)
    }

    /**
     * Damping on the Y axis
     * @desc float in [0, inf], default 0.5
     */
    public set spring_damping_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_damping_y`, value)
    }

    /**
     * Damping on the Z axis
     * @desc float in [0, inf], default 0.5
     */
    public set spring_damping_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_damping_z`, value)
    }

    /**
     * Stiffness on the X rotational axis
     * @desc float in [0, inf], default 10.0
     */
    public set spring_stiffness_ang_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_stiffness_ang_x`, value)
    }

    /**
     * Stiffness on the Y rotational axis
     * @desc float in [0, inf], default 10.0
     */
    public set spring_stiffness_ang_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_stiffness_ang_y`, value)
    }

    /**
     * Stiffness on the Z rotational axis
     * @desc float in [0, inf], default 10.0
     */
    public set spring_stiffness_ang_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_stiffness_ang_z`, value)
    }

    /**
     * Stiffness on the X axis
     * @desc float in [0, inf], default 10.0
     */
    public set spring_stiffness_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_stiffness_x`, value)
    }

    /**
     * Stiffness on the Y axis
     * @desc float in [0, inf], default 10.0
     */
    public set spring_stiffness_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_stiffness_y`, value)
    }

    /**
     * Stiffness on the Z axis
     * @desc float in [0, inf], default 10.0
     */
    public set spring_stiffness_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_stiffness_z`, value)
    }

    /**
     * Which implementation of spring to use
     * @desc enum in ['SPRING1', 'SPRING2'], default 'SPRING1'
     */
    public set spring_type(value: 'SPRING1' | 'SPRING2') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.spring_type`, value)
    }

    /**
     * Type of Rigid Body Constraint
     * @desc enum in ['FIXED', 'POINT', 'HINGE', 'SLIDER', 'PISTON', 'GENERIC', 'GENERIC_SPRING', 'MOTOR'], default 'POINT'
     */
    public set type(value: 'FIXED' | 'POINT' | 'HINGE' | 'SLIDER' | 'PISTON' | 'GENERIC' | 'GENERIC_SPRING' | 'MOTOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Constraint can be broken if it receives an impulse above the threshold
     * @desc boolean, default False
     */
    public set use_breaking(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_breaking`, value)
    }

    /**
     * Limit rotation around X axis
     * @desc boolean, default False
     */
    public set use_limit_ang_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_limit_ang_x`, value)
    }

    /**
     * Limit rotation around Y axis
     * @desc boolean, default False
     */
    public set use_limit_ang_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_limit_ang_y`, value)
    }

    /**
     * Limit rotation around Z axis
     * @desc boolean, default False
     */
    public set use_limit_ang_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_limit_ang_z`, value)
    }

    /**
     * Limit translation on X axis
     * @desc boolean, default False
     */
    public set use_limit_lin_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_limit_lin_x`, value)
    }

    /**
     * Limit translation on Y axis
     * @desc boolean, default False
     */
    public set use_limit_lin_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_limit_lin_y`, value)
    }

    /**
     * Limit translation on Z axis
     * @desc boolean, default False
     */
    public set use_limit_lin_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_limit_lin_z`, value)
    }

    /**
     * Enable angular motor
     * @desc boolean, default False
     */
    public set use_motor_ang(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motor_ang`, value)
    }

    /**
     * Enable linear motor
     * @desc boolean, default False
     */
    public set use_motor_lin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motor_lin`, value)
    }

    /**
     * Override the number of solver iterations for this constraint
     * @desc boolean, default False
     */
    public set use_override_solver_iterations(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_override_solver_iterations`, value)
    }

    /**
     * Enable spring on X rotational axis
     * @desc boolean, default False
     */
    public set use_spring_ang_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spring_ang_x`, value)
    }

    /**
     * Enable spring on Y rotational axis
     * @desc boolean, default False
     */
    public set use_spring_ang_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spring_ang_y`, value)
    }

    /**
     * Enable spring on Z rotational axis
     * @desc boolean, default False
     */
    public set use_spring_ang_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spring_ang_z`, value)
    }

    /**
     * Enable spring on X axis
     * @desc boolean, default False
     */
    public set use_spring_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spring_x`, value)
    }

    /**
     * Enable spring on Y axis
     * @desc boolean, default False
     */
    public set use_spring_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spring_y`, value)
    }

    /**
     * Enable spring on Z axis
     * @desc boolean, default False
     */
    public set use_spring_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_spring_z`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
