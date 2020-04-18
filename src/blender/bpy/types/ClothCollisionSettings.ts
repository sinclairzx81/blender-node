import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Collection } from './Collection'

/**
 * ClothCollisionSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ClothCollisionSettings.html
 */
export class ClothCollisionSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Limit colliders to this Collection
     * @desc Collection
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * How many collision iterations should be done. (higher is better quality but slower)
     * @desc int in [1, 32767], default 0
     */
    public get collision_quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.collision_quality`)
    }

    /**
     * Amount of velocity lost on collision
     * @desc float in [0, 1], default 1.0
     */
    public get damping(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.damping`)
    }

    /**
     * Minimum distance between collision objects before collision response takes effect
     * @desc float in [0.001, 1], default 0.0
     */
    public get distance_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance_min`)
    }

    /**
     * Friction force if a collision happened (higher = less movement)
     * @desc float in [0, 80], default 0.0
     */
    public get friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.friction`)
    }

    /**
     * Clamp collision impulses to avoid instability (0.0 to disable clamping)
     * @desc float in [0, 100], default 0.0
     */
    public get impulse_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.impulse_clamp`)
    }

    /**
     * Minimum distance between cloth faces before collision response takes effect
     * @desc float in [0.001, 0.1], default 0.0
     */
    public get self_distance_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.self_distance_min`)
    }

    /**
     * Friction with self contact
     * @desc float in [0, 80], default 0.0
     */
    public get self_friction(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.self_friction`)
    }

    /**
     * Clamp collision impulses to avoid instability (0.0 to disable clamping)
     * @desc float in [0, 100], default 0.0
     */
    public get self_impulse_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.self_impulse_clamp`)
    }

    /**
     * Enable collisions with other objects
     * @desc boolean, default False
     */
    public get use_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_collision`)
    }

    /**
     * Enable self collisions
     * @desc boolean, default False
     */
    public get use_self_collision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self_collision`)
    }

    /**
     * Vertex group to define vertices which are not used during self collisions
     * @desc string, default '', (never None)
     */
    public get vertex_group_self_collisions(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_self_collisions`)
    }

    /**
     * Limit colliders to this Collection
     * @desc Collection
     */
    public set collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.collection`, value)
    }

    /**
     * How many collision iterations should be done. (higher is better quality but slower)
     * @desc int in [1, 32767], default 0
     */
    public set collision_quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.collision_quality`, value)
    }

    /**
     * Amount of velocity lost on collision
     * @desc float in [0, 1], default 1.0
     */
    public set damping(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.damping`, value)
    }

    /**
     * Minimum distance between collision objects before collision response takes effect
     * @desc float in [0.001, 1], default 0.0
     */
    public set distance_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance_min`, value)
    }

    /**
     * Friction force if a collision happened (higher = less movement)
     * @desc float in [0, 80], default 0.0
     */
    public set friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.friction`, value)
    }

    /**
     * Clamp collision impulses to avoid instability (0.0 to disable clamping)
     * @desc float in [0, 100], default 0.0
     */
    public set impulse_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.impulse_clamp`, value)
    }

    /**
     * Minimum distance between cloth faces before collision response takes effect
     * @desc float in [0.001, 0.1], default 0.0
     */
    public set self_distance_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.self_distance_min`, value)
    }

    /**
     * Friction with self contact
     * @desc float in [0, 80], default 0.0
     */
    public set self_friction(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.self_friction`, value)
    }

    /**
     * Clamp collision impulses to avoid instability (0.0 to disable clamping)
     * @desc float in [0, 100], default 0.0
     */
    public set self_impulse_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.self_impulse_clamp`, value)
    }

    /**
     * Enable collisions with other objects
     * @desc boolean, default False
     */
    public set use_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_collision`, value)
    }

    /**
     * Enable self collisions
     * @desc boolean, default False
     */
    public set use_self_collision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_self_collision`, value)
    }

    /**
     * Vertex group to define vertices which are not used during self collisions
     * @desc string, default '', (never None)
     */
    public set vertex_group_self_collisions(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_self_collisions`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
