import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { ArmatureConstraintTargets } from './ArmatureConstraintTargets'
import { ConstraintTargetBone } from './ConstraintTargetBone'

/**
 * ArmatureConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.ArmatureConstraint.html
 */
export class ArmatureConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Target Bones
     * @desc ArmatureConstraintTargets bpy_prop_collection of ConstraintTargetBone, (readonly)
     */
    public get targets(): BlenderCollection<ConstraintTargetBone> & Indexable<ConstraintTargetBone> & ArmatureConstraintTargets {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.targets`, ArmatureConstraintTargets, ConstraintTargetBone)
    }

    /**
     * Multiply weights by envelope for all bones, instead of acting like Vertex Group based blending. The specified weights are still used, and only the listed bones are considered
     * @desc boolean, default False
     */
    public get use_bone_envelopes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bone_envelopes`)
    }

    /**
     * Use the current bone location for envelopes and choosing B-Bone segments instead of rest position
     * @desc boolean, default False
     */
    public get use_current_location(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_current_location`)
    }

    /**
     * Deform rotation interpolation with quaternions
     * @desc boolean, default False
     */
    public get use_deform_preserve_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform_preserve_volume`)
    }

    /**
     * Multiply weights by envelope for all bones, instead of acting like Vertex Group based blending. The specified weights are still used, and only the listed bones are considered
     * @desc boolean, default False
     */
    public set use_bone_envelopes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bone_envelopes`, value)
    }

    /**
     * Use the current bone location for envelopes and choosing B-Bone segments instead of rest position
     * @desc boolean, default False
     */
    public set use_current_location(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_current_location`, value)
    }

    /**
     * Deform rotation interpolation with quaternions
     * @desc boolean, default False
     */
    public set use_deform_preserve_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform_preserve_volume`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
