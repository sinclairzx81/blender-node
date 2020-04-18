import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ConstraintOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.constraint.html
 */
export class ConstraintOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a target to the constraint
     * @desc void
     */
    public add_target(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_target`, {})
    }

    /**
     * Clear inverse correction for ChildOf constraint
     * @desc void
     */
    public childof_clear_inverse(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.childof_clear_inverse`, options)
    }

    /**
     * Set inverse correction for ChildOf constraint
     * @desc void
     */
    public childof_set_inverse(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.childof_set_inverse`, options)
    }

    /**
     * Remove constraint from constraint stack
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Set the influence of this constraint to zero while trying to maintain the object’s transformation. Other active constraints can still influence the final transformation
     * @desc void
     */
    public disable_keep_transform(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.disable_keep_transform`, {})
    }

    /**
     * Add default animation for path used by constraint if it isn’t animated already
     * @desc void
     */
    public followpath_path_animate(options: { constraint?: string, owner?: 'OBJECT' | 'BONE', frame_start?: number, length?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.followpath_path_animate`, options)
    }

    /**
     * Reset limiting distance for Limit Distance Constraint
     * @desc void
     */
    public limitdistance_reset(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.limitdistance_reset`, options)
    }

    /**
     * Move constraint down in constraint stack
     * @desc void
     */
    public move_down(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_down`, options)
    }

    /**
     * Move constraint up in constraint stack
     * @desc void
     */
    public move_up(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_up`, options)
    }

    /**
     * Normalize weights of all target bones
     * @desc void
     */
    public normalize_target_weights(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normalize_target_weights`, {})
    }

    /**
     * Clear inverse correction for ObjectSolver constraint
     * @desc void
     */
    public objectsolver_clear_inverse(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objectsolver_clear_inverse`, options)
    }

    /**
     * Set inverse correction for ObjectSolver constraint
     * @desc void
     */
    public objectsolver_set_inverse(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objectsolver_set_inverse`, options)
    }

    /**
     * Remove the target from the constraint
     * @desc void
     */
    public remove_target(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_target`, options)
    }

    /**
     * Reset original length of bone for Stretch To Constraint
     * @desc void
     */
    public stretchto_reset(options: { constraint?: string, owner?: 'OBJECT' | 'BONE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stretchto_reset`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
