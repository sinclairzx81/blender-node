import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * RigidBodyObject
 * 
 * https://docs.blender.org/api/current/bpy.types.RigidBodyObject.html
 */
export class RigidBodyObject {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount of angular velocity that is lost over time
     * @desc float in [0, 1], default 0.1
     */
    public get angular_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angular_damping`)
    }

    /**
     * Collision collections rigid body belongs to
     * @desc boolean array of 20 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public get collision_collections(): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.collision_collections`, 'boolean', 20)
    }

    /**
     * Threshold of distance near surface where collisions are still considered (best results when non-zero)
     * @desc float in [0, 1], default 0.04
     */
    public get collision_margin(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.collision_margin`)
    }

    /**
     * Collision Shape of object in Rigid Body Simulations
     * @desc enum in ['BOX', 'SPHERE', 'CAPSULE', 'CYLINDER', 'CONE', 'CONVEX_HULL', 'MESH'], default 'BOX'
     */
    public get collision_shape(): 'BOX' | 'SPHERE' | 'CAPSULE' | 'CYLINDER' | 'CONE' | 'CONVEX_HULL' | 'MESH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.collision_shape`)
    }

    /**
     * Angular Velocity below which simulation stops simulating object
     * @desc float in [0, inf], default 0.5
     */
    public get deactivate_angular_velocity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.deactivate_angular_velocity`)
    }

    /**
     * Linear Velocity below which simulation stops simulating object
     * @desc float in [0, inf], default 0.4
     */
    public get deactivate_linear_velocity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.deactivate_linear_velocity`)
    }

    /**
     * Rigid Body actively participates to the simulation
     * @desc boolean, default False
     */
    public get enabled(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.enabled`)
    }

    /**
     * Resistance of object to movement
     * @desc float in [0, inf], default 0.5
     */
    public get friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.friction`)
    }

    /**
     * Allow rigid body to be controlled by the animation system
     * @desc boolean, default False
     */
    public get kinematic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.kinematic`)
    }

    /**
     * Amount of linear velocity that is lost over time
     * @desc float in [0, 1], default 0.04
     */
    public get linear_damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.linear_damping`)
    }

    /**
     * How much the object ‘weighs’ irrespective of gravity
     * @desc float in [0.001, inf], default 1.0
     */
    public get mass(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mass`)
    }

    /**
     * Source of the mesh used to create collision shape
     * @desc enum in ['BASE', 'DEFORM', 'FINAL'], default 'BASE'
     */
    public get mesh_source(): 'BASE' | 'DEFORM' | 'FINAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mesh_source`)
    }

    /**
     * Tendency of object to bounce after colliding with another (0 = stays still, 1 = perfectly elastic)
     * @desc float in [0, inf], default 0.0
     */
    public get restitution(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.restitution`)
    }

    /**
     * Role of object in Rigid Body Simulations
     * @desc enum in ['ACTIVE', 'PASSIVE'], default 'ACTIVE'
     */
    public get type(): 'ACTIVE' | 'PASSIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Enable deactivation of resting rigid bodies (increases performance and stability but can cause glitches)
     * @desc boolean, default True
     */
    public get use_deactivation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deactivation`)
    }

    /**
     * Rigid body deforms during simulation
     * @desc boolean, default False
     */
    public get use_deform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform`)
    }

    /**
     * Use custom collision margin (some shapes will have a visible gap around them)
     * @desc boolean, default False
     */
    public get use_margin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_margin`)
    }

    /**
     * Deactivate rigid body at the start of the simulation
     * @desc boolean, default False
     */
    public get use_start_deactivated(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_start_deactivated`)
    }

    /**
     * Amount of angular velocity that is lost over time
     * @desc float in [0, 1], default 0.1
     */
    public set angular_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angular_damping`, value)
    }

    /**
     * Collision collections rigid body belongs to
     * @desc boolean array of 20 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public set collision_collections(value: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.collision_collections`, value)
    }

    /**
     * Threshold of distance near surface where collisions are still considered (best results when non-zero)
     * @desc float in [0, 1], default 0.04
     */
    public set collision_margin(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.collision_margin`, value)
    }

    /**
     * Collision Shape of object in Rigid Body Simulations
     * @desc enum in ['BOX', 'SPHERE', 'CAPSULE', 'CYLINDER', 'CONE', 'CONVEX_HULL', 'MESH'], default 'BOX'
     */
    public set collision_shape(value: 'BOX' | 'SPHERE' | 'CAPSULE' | 'CYLINDER' | 'CONE' | 'CONVEX_HULL' | 'MESH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.collision_shape`, value)
    }

    /**
     * Angular Velocity below which simulation stops simulating object
     * @desc float in [0, inf], default 0.5
     */
    public set deactivate_angular_velocity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.deactivate_angular_velocity`, value)
    }

    /**
     * Linear Velocity below which simulation stops simulating object
     * @desc float in [0, inf], default 0.4
     */
    public set deactivate_linear_velocity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.deactivate_linear_velocity`, value)
    }

    /**
     * Rigid Body actively participates to the simulation
     * @desc boolean, default False
     */
    public set enabled(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.enabled`, value)
    }

    /**
     * Resistance of object to movement
     * @desc float in [0, inf], default 0.5
     */
    public set friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.friction`, value)
    }

    /**
     * Allow rigid body to be controlled by the animation system
     * @desc boolean, default False
     */
    public set kinematic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.kinematic`, value)
    }

    /**
     * Amount of linear velocity that is lost over time
     * @desc float in [0, 1], default 0.04
     */
    public set linear_damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.linear_damping`, value)
    }

    /**
     * How much the object ‘weighs’ irrespective of gravity
     * @desc float in [0.001, inf], default 1.0
     */
    public set mass(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mass`, value)
    }

    /**
     * Source of the mesh used to create collision shape
     * @desc enum in ['BASE', 'DEFORM', 'FINAL'], default 'BASE'
     */
    public set mesh_source(value: 'BASE' | 'DEFORM' | 'FINAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mesh_source`, value)
    }

    /**
     * Tendency of object to bounce after colliding with another (0 = stays still, 1 = perfectly elastic)
     * @desc float in [0, inf], default 0.0
     */
    public set restitution(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.restitution`, value)
    }

    /**
     * Role of object in Rigid Body Simulations
     * @desc enum in ['ACTIVE', 'PASSIVE'], default 'ACTIVE'
     */
    public set type(value: 'ACTIVE' | 'PASSIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Enable deactivation of resting rigid bodies (increases performance and stability but can cause glitches)
     * @desc boolean, default True
     */
    public set use_deactivation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deactivation`, value)
    }

    /**
     * Rigid body deforms during simulation
     * @desc boolean, default False
     */
    public set use_deform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform`, value)
    }

    /**
     * Use custom collision margin (some shapes will have a visible gap around them)
     * @desc boolean, default False
     */
    public set use_margin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_margin`, value)
    }

    /**
     * Deactivate rigid body at the start of the simulation
     * @desc boolean, default False
     */
    public set use_start_deactivated(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_start_deactivated`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
