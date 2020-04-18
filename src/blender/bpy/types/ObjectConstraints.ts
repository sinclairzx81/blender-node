import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Constraint } from './Constraint'

/**
 * ObjectConstraints
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectConstraints.html
 */
export class ObjectConstraints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active Object constraint
     * @desc Constraint
     */
    public get active(): Constraint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, Constraint)
    }

    /**
     * Active Object constraint
     * @desc Constraint
     */
    public set active(value: Constraint) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a new constraint to this object
     * @desc Constraint
     */
    public new(options: { type?: 'CAMERA_SOLVER' | 'FOLLOW_TRACK' | 'OBJECT_SOLVER' | 'COPY_LOCATION' | 'COPY_ROTATION' | 'COPY_SCALE' | 'COPY_TRANSFORMS' | 'LIMIT_DISTANCE' | 'LIMIT_LOCATION' | 'LIMIT_ROTATION' | 'LIMIT_SCALE' | 'MAINTAIN_VOLUME' | 'TRANSFORM' | 'TRANSFORM_CACHE' | 'CLAMP_TO' | 'DAMPED_TRACK' | 'IK' | 'LOCKED_TRACK' | 'SPLINE_IK' | 'STRETCH_TO' | 'TRACK_TO' | 'ACTION' | 'ARMATURE' | 'CHILD_OF' | 'FLOOR' | 'FOLLOW_PATH' | 'PIVOT' | 'SHRINKWRAP' }): Constraint {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Constraint)
    }

    /**
     * Remove a constraint from this object
     * @desc void
     */
    public remove(options: { constraint?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all constraint from this object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    /**
     * Move a constraint to a different position
     * @desc void
     */
    public move(options: { from_index?: number, to_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
