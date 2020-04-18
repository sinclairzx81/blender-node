import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ConstraintTargetBone } from './ConstraintTargetBone'

/**
 * ArmatureConstraintTargets
 * 
 * https://docs.blender.org/api/current/bpy.types.ArmatureConstraintTargets.html
 */
export class ArmatureConstraintTargets {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new target to the constraint
     * @desc ConstraintTargetBone
     */
    public new(): ConstraintTargetBone {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, ConstraintTargetBone)
    }

    /**
     * Delete target from the constraint
     * @desc void
     */
    public remove(options: { target?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Delete all targets from object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
