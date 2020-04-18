import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CollisionSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CollisionSettings.html
 */
export class CollisionSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * How much of effector force gets lost during collision with this object (in percent)
     * @desc float in [0, 1], default 0.0
     */
    public get absorption(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.absorption`)
    }

    /**
     * Friction for cloth collisions
     * @desc float in [0, 80], default 0.0
     */
    public get cloth_friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cloth_friction`)
    }

    /**
     * Amount of damping during collision
     * @desc float in [0, 1], default 0.0
     */
    public get damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping`)
    }

    /**
     * Amount of damping during particle collision
     * @desc float in [0, 1], default 0.0
     */
    public get damping_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping_factor`)
    }

    /**
     * Random variation of damping
     * @desc float in [0, 1], default 0.0
     */
    public get damping_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping_random`)
    }

    /**
     * Amount of friction during particle collision
     * @desc float in [0, 1], default 0.0
     */
    public get friction_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.friction_factor`)
    }

    /**
     * Random variation of friction
     * @desc float in [0, 1], default 0.0
     */
    public get friction_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.friction_random`)
    }

    /**
     * Chance that the particle will pass through the mesh
     * @desc float in [0, 1], default 0.0
     */
    public get permeability(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.permeability`)
    }

    /**
     * Amount of stickiness to surface collision
     * @desc float in [0, 10], default 0.0
     */
    public get stickiness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.stickiness`)
    }

    /**
     * Inner face thickness (only used by softbodies)
     * @desc float in [0.001, 1], default 0.0
     */
    public get thickness_inner(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_inner`)
    }

    /**
     * Outer face thickness
     * @desc float in [0.001, 1], default 0.0
     */
    public get thickness_outer(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_outer`)
    }

    /**
     * Enable this objects as a collider for physics systems
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Cloth collision acts with respect to the collider normals (improves penetration recovery)
     * @desc boolean, default False
     */
    public get use_culling(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_culling`)
    }

    /**
     * Cloth collision impulses act in the direction of the collider normals (more reliable in some cases)
     * @desc boolean, default False
     */
    public get use_normal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal`)
    }

    /**
     * Kill collided particles
     * @desc boolean, default False
     */
    public get use_particle_kill(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_particle_kill`)
    }

    /**
     * How much of effector force gets lost during collision with this object (in percent)
     * @desc float in [0, 1], default 0.0
     */
    public set absorption(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.absorption`, value)
    }

    /**
     * Friction for cloth collisions
     * @desc float in [0, 80], default 0.0
     */
    public set cloth_friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cloth_friction`, value)
    }

    /**
     * Amount of damping during collision
     * @desc float in [0, 1], default 0.0
     */
    public set damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping`, value)
    }

    /**
     * Amount of damping during particle collision
     * @desc float in [0, 1], default 0.0
     */
    public set damping_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping_factor`, value)
    }

    /**
     * Random variation of damping
     * @desc float in [0, 1], default 0.0
     */
    public set damping_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping_random`, value)
    }

    /**
     * Amount of friction during particle collision
     * @desc float in [0, 1], default 0.0
     */
    public set friction_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.friction_factor`, value)
    }

    /**
     * Random variation of friction
     * @desc float in [0, 1], default 0.0
     */
    public set friction_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.friction_random`, value)
    }

    /**
     * Chance that the particle will pass through the mesh
     * @desc float in [0, 1], default 0.0
     */
    public set permeability(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.permeability`, value)
    }

    /**
     * Amount of stickiness to surface collision
     * @desc float in [0, 10], default 0.0
     */
    public set stickiness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.stickiness`, value)
    }

    /**
     * Inner face thickness (only used by softbodies)
     * @desc float in [0.001, 1], default 0.0
     */
    public set thickness_inner(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_inner`, value)
    }

    /**
     * Outer face thickness
     * @desc float in [0.001, 1], default 0.0
     */
    public set thickness_outer(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_outer`, value)
    }

    /**
     * Enable this objects as a collider for physics systems
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    /**
     * Cloth collision acts with respect to the collider normals (improves penetration recovery)
     * @desc boolean, default False
     */
    public set use_culling(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_culling`, value)
    }

    /**
     * Cloth collision impulses act in the direction of the collider normals (more reliable in some cases)
     * @desc boolean, default False
     */
    public set use_normal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal`, value)
    }

    /**
     * Kill collided particles
     * @desc boolean, default False
     */
    public set use_particle_kill(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_particle_kill`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
