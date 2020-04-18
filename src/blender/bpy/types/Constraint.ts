import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Constraint
 * 
 * https://docs.blender.org/api/current/bpy.types.Constraint.html
 */
export class Constraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount of residual error in Blender space unit for constraints that work on position
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get error_location(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.error_location`)
    }

    /**
     * Amount of residual error in radians for constraints that work on orientation
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get error_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.error_rotation`)
    }

    /**
     * Constraint was added in this proxy instance (i.e. did not belong to source Armature)
     * @desc boolean, default False, (readonly)
     */
    public get is_proxy_local(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_proxy_local`)
    }

    /**
     * Constraint has valid settings and can be evaluated
     * @desc boolean, default False, (readonly)
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * 
     * @desc enum in ['CAMERA_SOLVER', 'FOLLOW_TRACK', 'OBJECT_SOLVER', 'COPY_LOCATION', 'COPY_ROTATION', 'COPY_SCALE', 'COPY_TRANSFORMS', 'LIMIT_DISTANCE', 'LIMIT_LOCATION', 'LIMIT_ROTATION', 'LIMIT_SCALE', 'MAINTAIN_VOLUME', 'TRANSFORM', 'TRANSFORM_CACHE', 'CLAMP_TO', 'DAMPED_TRACK', 'IK', 'LOCKED_TRACK', 'SPLINE_IK', 'STRETCH_TO', 'TRACK_TO', 'ACTION', 'ARMATURE', 'CHILD_OF', 'FLOOR', 'FOLLOW_PATH', 'PIVOT', 'SHRINKWRAP'], default 'CAMERA_SOLVER', (readonly)
     */
    public get type(): 'CAMERA_SOLVER' | 'FOLLOW_TRACK' | 'OBJECT_SOLVER' | 'COPY_LOCATION' | 'COPY_ROTATION' | 'COPY_SCALE' | 'COPY_TRANSFORMS' | 'LIMIT_DISTANCE' | 'LIMIT_LOCATION' | 'LIMIT_ROTATION' | 'LIMIT_SCALE' | 'MAINTAIN_VOLUME' | 'TRANSFORM' | 'TRANSFORM_CACHE' | 'CLAMP_TO' | 'DAMPED_TRACK' | 'IK' | 'LOCKED_TRACK' | 'SPLINE_IK' | 'STRETCH_TO' | 'TRACK_TO' | 'ACTION' | 'ARMATURE' | 'CHILD_OF' | 'FLOOR' | 'FOLLOW_PATH' | 'PIVOT' | 'SHRINKWRAP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Constraint is the one being edited
     * @desc boolean, default False
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * Amount of influence constraint will have on the final solution
     * @desc float in [0, 1], default 0.0
     */
    public get influence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.influence`)
    }

    /**
     * Enable/Disable Constraint
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * Constraint name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Space that owner is evaluated in
     * @desc enum in ['WORLD', 'POSE', 'LOCAL_WITH_PARENT', 'LOCAL'], default 'WORLD'
     */
    public get owner_space(): 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.owner_space`)
    }

    /**
     * Constraint’s panel is expanded in UI
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Space that target is evaluated in
     * @desc enum in ['WORLD', 'POSE', 'LOCAL_WITH_PARENT', 'LOCAL'], default 'WORLD'
     */
    public get target_space(): 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.target_space`)
    }

    /**
     * Constraint is the one being edited
     * @desc boolean, default False
     */
    public set active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Amount of influence constraint will have on the final solution
     * @desc float in [0, 1], default 0.0
     */
    public set influence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.influence`, value)
    }

    /**
     * Enable/Disable Constraint
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * Constraint name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Space that owner is evaluated in
     * @desc enum in ['WORLD', 'POSE', 'LOCAL_WITH_PARENT', 'LOCAL'], default 'WORLD'
     */
    public set owner_space(value: 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.owner_space`, value)
    }

    /**
     * Constraint’s panel is expanded in UI
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Space that target is evaluated in
     * @desc enum in ['WORLD', 'POSE', 'LOCAL_WITH_PARENT', 'LOCAL'], default 'WORLD'
     */
    public set target_space(value: 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.target_space`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
