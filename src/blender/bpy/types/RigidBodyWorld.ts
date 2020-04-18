import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { EffectorWeights } from './EffectorWeights'
import { PointCache } from './PointCache'
import { Collection } from './Collection'

/**
 * RigidBodyWorld
 * 
 * https://docs.blender.org/api/current/bpy.types.RigidBodyWorld.html
 */
export class RigidBodyWorld {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc EffectorWeights, (readonly)
     */
    public get effector_weights(): EffectorWeights {
        return PythonInterop.getClass(this.interop, `${this.accessor}.effector_weights`, EffectorWeights)
    }

    /**
     * 
     * @desc PointCache, (readonly, never None)
     */
    public get point_cache(): PointCache {
        return PythonInterop.getClass(this.interop, `${this.accessor}.point_cache`, PointCache)
    }

    /**
     * Collection containing objects participating in this simulation
     * @desc Collection
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * Collection containing rigid body constraint objects
     * @desc Collection
     */
    public get constraints(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.constraints`, Collection)
    }

    /**
     * Simulation will be evaluated
     * @desc boolean, default False
     */
    public get enabled(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.enabled`)
    }

    /**
     * Number of constraint solver iterations made per simulation step (higher values are more accurate but slower)
     * @desc int in [1, 1000], default 10
     */
    public get solver_iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.solver_iterations`)
    }

    /**
     * Number of simulation steps taken per second (higher values are more accurate but slower)
     * @desc int in [1, 32767], default 60
     */
    public get steps_per_second(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.steps_per_second`)
    }

    /**
     * Change the speed of the simulation
     * @desc float in [0, 100], default 1.0
     */
    public get time_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_scale`)
    }

    /**
     * Reduce extra velocity that can build up when objects collide (lowers simulation stability a little so use only when necessary)
     * @desc boolean, default False
     */
    public get use_split_impulse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_split_impulse`)
    }

    /**
     * Collection containing objects participating in this simulation
     * @desc Collection
     */
    public set collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.collection`, value)
    }

    /**
     * Collection containing rigid body constraint objects
     * @desc Collection
     */
    public set constraints(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.constraints`, value)
    }

    /**
     * Simulation will be evaluated
     * @desc boolean, default False
     */
    public set enabled(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.enabled`, value)
    }

    /**
     * Number of constraint solver iterations made per simulation step (higher values are more accurate but slower)
     * @desc int in [1, 1000], default 10
     */
    public set solver_iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.solver_iterations`, value)
    }

    /**
     * Number of simulation steps taken per second (higher values are more accurate but slower)
     * @desc int in [1, 32767], default 60
     */
    public set steps_per_second(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.steps_per_second`, value)
    }

    /**
     * Change the speed of the simulation
     * @desc float in [0, 100], default 1.0
     */
    public set time_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time_scale`, value)
    }

    /**
     * Reduce extra velocity that can build up when objects collide (lowers simulation stability a little so use only when necessary)
     * @desc boolean, default False
     */
    public set use_split_impulse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_split_impulse`, value)
    }

    /**
     * Sweep test convex rigidbody against the current rigidbody world
     * @desc void
     */
    public convex_sweep_test(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convex_sweep_test`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
