import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * StretchToConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.StretchToConstraint.html
 */
export class StretchToConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Factor between volume variation and stretching
     * @desc float in [0, 100], default 0.0
     */
    public get bulge(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bulge`)
    }

    /**
     * Maximum volume stretching factor
     * @desc float in [1, 100], default 0.0
     */
    public get bulge_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bulge_max`)
    }

    /**
     * Minimum volume stretching factor
     * @desc float in [0, 1], default 0.0
     */
    public get bulge_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bulge_min`)
    }

    /**
     * Strength of volume stretching clamping
     * @desc float in [0, 1], default 0.0
     */
    public get bulge_smooth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bulge_smooth`)
    }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public get head_tail(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_tail`)
    }

    /**
     * The rotation type and axis order to use
     * @desc enum in ['PLANE_X', 'PLANE_Z', 'SWING_Y'], default 'PLANE_X'
     */
    public get keep_axis(): 'PLANE_X' | 'PLANE_Z' | 'SWING_Y' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.keep_axis`)
    }

    /**
     * Length at rest position
     * @desc float in [0, 1000], default 0.0
     */
    public get rest_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rest_length`)
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
     * Follow shape of B-Bone segments when calculating Head/Tail position
     * @desc boolean, default False
     */
    public get use_bbone_shape(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bbone_shape`)
    }

    /**
     * Use upper limit for volume variation
     * @desc boolean, default False
     */
    public get use_bulge_max(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bulge_max`)
    }

    /**
     * Use lower limit for volume variation
     * @desc boolean, default False
     */
    public get use_bulge_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bulge_min`)
    }

    /**
     * Maintain the object’s volume as it stretches
     * @desc enum in ['VOLUME_XZX', 'VOLUME_X', 'VOLUME_Z', 'NO_VOLUME'], default 'VOLUME_XZX'
     */
    public get volume(): 'VOLUME_XZX' | 'VOLUME_X' | 'VOLUME_Z' | 'NO_VOLUME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.volume`)
    }

    /**
     * Factor between volume variation and stretching
     * @desc float in [0, 100], default 0.0
     */
    public set bulge(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bulge`, value)
    }

    /**
     * Maximum volume stretching factor
     * @desc float in [1, 100], default 0.0
     */
    public set bulge_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bulge_max`, value)
    }

    /**
     * Minimum volume stretching factor
     * @desc float in [0, 1], default 0.0
     */
    public set bulge_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bulge_min`, value)
    }

    /**
     * Strength of volume stretching clamping
     * @desc float in [0, 1], default 0.0
     */
    public set bulge_smooth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bulge_smooth`, value)
    }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public set head_tail(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_tail`, value)
    }

    /**
     * The rotation type and axis order to use
     * @desc enum in ['PLANE_X', 'PLANE_Z', 'SWING_Y'], default 'PLANE_X'
     */
    public set keep_axis(value: 'PLANE_X' | 'PLANE_Z' | 'SWING_Y') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.keep_axis`, value)
    }

    /**
     * Length at rest position
     * @desc float in [0, 1000], default 0.0
     */
    public set rest_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rest_length`, value)
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
     * Follow shape of B-Bone segments when calculating Head/Tail position
     * @desc boolean, default False
     */
    public set use_bbone_shape(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bbone_shape`, value)
    }

    /**
     * Use upper limit for volume variation
     * @desc boolean, default False
     */
    public set use_bulge_max(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bulge_max`, value)
    }

    /**
     * Use lower limit for volume variation
     * @desc boolean, default False
     */
    public set use_bulge_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bulge_min`, value)
    }

    /**
     * Maintain the object’s volume as it stretches
     * @desc enum in ['VOLUME_XZX', 'VOLUME_X', 'VOLUME_Z', 'NO_VOLUME'], default 'VOLUME_XZX'
     */
    public set volume(value: 'VOLUME_XZX' | 'VOLUME_X' | 'VOLUME_Z' | 'NO_VOLUME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.volume`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
