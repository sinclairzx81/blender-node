import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { Action } from './Action'
import { BlenderObject } from './BlenderObject'

/**
 * ActionConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.ActionConstraint.html
 */
export class ActionConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The constraining action
     * @desc Action
     */
    public get action(): Action {
        return PythonInterop.getClass(this.interop, `${this.accessor}.action`, Action)
    }

    /**
     * Last frame of the Action to use
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * First frame of the Action to use
     * @desc int in [-1048574, 1048574], default 0
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Maximum value for target channel range
     * @desc float in [-1000, 1000], default 0.0
     */
    public get max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max`)
    }

    /**
     * Minimum value for target channel range
     * @desc float in [-1000, 1000], default 0.0
     */
    public get min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min`)
    }

    /**
     * Specify how existing transformations and the action channels are combined
     * @desc enum in ['BEFORE', 'AFTER', 'AFTER_FULL'], default 'AFTER_FULL'
     */
    public get mix_mode(): 'BEFORE' | 'AFTER' | 'AFTER_FULL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode`)
    }

    /**
     * Armature bone, mesh or lattice vertex group, …
     * @desc string, default '', (never None)
     */
    public get subtarget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subtarget`)
    }

    /**
     * Target object
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Transformation channel from the target that is used to key the Action
     * @desc enum in ['LOCATION_X', 'LOCATION_Y', 'LOCATION_Z', 'ROTATION_X', 'ROTATION_Y', 'ROTATION_Z', 'SCALE_X', 'SCALE_Y', 'SCALE_Z'], default 'ROTATION_X'
     */
    public get transform_channel(): 'LOCATION_X' | 'LOCATION_Y' | 'LOCATION_Z' | 'ROTATION_X' | 'ROTATION_Y' | 'ROTATION_Z' | 'SCALE_X' | 'SCALE_Y' | 'SCALE_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.transform_channel`)
    }

    /**
     * Bones only: apply the object’s transformation channels of the action to the constrained bone, instead of bone’s channels
     * @desc boolean, default False
     */
    public get use_bone_object_action(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bone_object_action`)
    }

    /**
     * The constraining action
     * @desc Action
     */
    public set action(value: Action) {
        PythonInterop.setClass(this.interop, `${this.accessor}.action`, value)
    }

    /**
     * Last frame of the Action to use
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * First frame of the Action to use
     * @desc int in [-1048574, 1048574], default 0
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Maximum value for target channel range
     * @desc float in [-1000, 1000], default 0.0
     */
    public set max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max`, value)
    }

    /**
     * Minimum value for target channel range
     * @desc float in [-1000, 1000], default 0.0
     */
    public set min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.min`, value)
    }

    /**
     * Specify how existing transformations and the action channels are combined
     * @desc enum in ['BEFORE', 'AFTER', 'AFTER_FULL'], default 'AFTER_FULL'
     */
    public set mix_mode(value: 'BEFORE' | 'AFTER' | 'AFTER_FULL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode`, value)
    }

    /**
     * Armature bone, mesh or lattice vertex group, …
     * @desc string, default '', (never None)
     */
    public set subtarget(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.subtarget`, value)
    }

    /**
     * Target object
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Transformation channel from the target that is used to key the Action
     * @desc enum in ['LOCATION_X', 'LOCATION_Y', 'LOCATION_Z', 'ROTATION_X', 'ROTATION_Y', 'ROTATION_Z', 'SCALE_X', 'SCALE_Y', 'SCALE_Z'], default 'ROTATION_X'
     */
    public set transform_channel(value: 'LOCATION_X' | 'LOCATION_Y' | 'LOCATION_Z' | 'ROTATION_X' | 'ROTATION_Y' | 'ROTATION_Z' | 'SCALE_X' | 'SCALE_Y' | 'SCALE_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.transform_channel`, value)
    }

    /**
     * Bones only: apply the object’s transformation channels of the action to the constrained bone, instead of bone’s channels
     * @desc boolean, default False
     */
    public set use_bone_object_action(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bone_object_action`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
