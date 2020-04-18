import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BoidOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.boid.html
 */
export class BoidOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a boid rule to the current boid state
     * @desc void
     */
    public rule_add(options: { type?: 'GOAL' | 'AVOID' | 'AVOID_COLLISION' | 'SEPARATE' | 'FLOCK' | 'FOLLOW_LEADER' | 'AVERAGE_SPEED' | 'FIGHT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rule_add`, options)
    }

    /**
     * Delete current boid rule
     * @desc void
     */
    public rule_del(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rule_del`, {})
    }

    /**
     * Move boid rule down in the list
     * @desc void
     */
    public rule_move_down(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rule_move_down`, {})
    }

    /**
     * Move boid rule up in the list
     * @desc void
     */
    public rule_move_up(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rule_move_up`, {})
    }

    /**
     * Add a boid state to the particle system
     * @desc void
     */
    public state_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.state_add`, {})
    }

    /**
     * Delete current boid state
     * @desc void
     */
    public state_del(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.state_del`, {})
    }

    /**
     * Move boid state down in the list
     * @desc void
     */
    public state_move_down(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.state_move_down`, {})
    }

    /**
     * Move boid state up in the list
     * @desc void
     */
    public state_move_up(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.state_move_up`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
