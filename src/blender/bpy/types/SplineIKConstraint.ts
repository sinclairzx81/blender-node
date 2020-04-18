import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * SplineIKConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.SplineIKConstraint.html
 */
export class SplineIKConstraint {

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
     * How many bones are included in the chain
     * @desc int in [1, 255], default 0
     */
    public get chain_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.chain_count`)
    }

    /**
     * (EXPERIENCED USERS ONLY) The relative positions of the joints along the chain, as percentages
     * @desc float array of 32 items in [0, 1], default (0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
     */
    public get joint_bindings(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.joint_bindings`, 'number', 32)
    }

    /**
     * Curve that controls this relationship
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
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
     * Offset the entire chain relative to the root joint
     * @desc boolean, default False
     */
    public get use_chain_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_chain_offset`)
    }

    /**
     * Average radius of the endpoints is used to tweak the X and Z Scaling of the bones, on top of XZ Scale mode
     * @desc boolean, default False
     */
    public get use_curve_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curve_radius`)
    }

    /**
     * Ignore the relative lengths of the bones when fitting to the curve
     * @desc boolean, default False
     */
    public get use_even_divisions(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_even_divisions`)
    }

    /**
     * Apply volume preservation over the original scaling
     * @desc boolean, default False
     */
    public get use_original_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_original_scale`)
    }

    /**
     * Method used for determining the scaling of the X and Z axes of the bones
     * @desc enum in ['NONE', 'BONE_ORIGINAL', 'INVERSE_PRESERVE', 'VOLUME_PRESERVE'], default 'NONE'
     */
    public get xz_scale_mode(): 'NONE' | 'BONE_ORIGINAL' | 'INVERSE_PRESERVE' | 'VOLUME_PRESERVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.xz_scale_mode`)
    }

    /**
     * Method used for determining the scaling of the Y axis of the bones, on top of the shape and scaling of the curve itself
     * @desc enum in ['NONE', 'FIT_CURVE', 'BONE_ORIGINAL'], default 'NONE'
     */
    public get y_scale_mode(): 'NONE' | 'FIT_CURVE' | 'BONE_ORIGINAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.y_scale_mode`)
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
     * How many bones are included in the chain
     * @desc int in [1, 255], default 0
     */
    public set chain_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.chain_count`, value)
    }

    /**
     * (EXPERIENCED USERS ONLY) The relative positions of the joints along the chain, as percentages
     * @desc float array of 32 items in [0, 1], default (0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
     */
    public set joint_bindings(value: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.joint_bindings`, value)
    }

    /**
     * Curve that controls this relationship
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
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
     * Offset the entire chain relative to the root joint
     * @desc boolean, default False
     */
    public set use_chain_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_chain_offset`, value)
    }

    /**
     * Average radius of the endpoints is used to tweak the X and Z Scaling of the bones, on top of XZ Scale mode
     * @desc boolean, default False
     */
    public set use_curve_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curve_radius`, value)
    }

    /**
     * Ignore the relative lengths of the bones when fitting to the curve
     * @desc boolean, default False
     */
    public set use_even_divisions(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_even_divisions`, value)
    }

    /**
     * Apply volume preservation over the original scaling
     * @desc boolean, default False
     */
    public set use_original_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_original_scale`, value)
    }

    /**
     * Method used for determining the scaling of the X and Z axes of the bones
     * @desc enum in ['NONE', 'BONE_ORIGINAL', 'INVERSE_PRESERVE', 'VOLUME_PRESERVE'], default 'NONE'
     */
    public set xz_scale_mode(value: 'NONE' | 'BONE_ORIGINAL' | 'INVERSE_PRESERVE' | 'VOLUME_PRESERVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.xz_scale_mode`, value)
    }

    /**
     * Method used for determining the scaling of the Y axis of the bones, on top of the shape and scaling of the curve itself
     * @desc enum in ['NONE', 'FIT_CURVE', 'BONE_ORIGINAL'], default 'NONE'
     */
    public set y_scale_mode(value: 'NONE' | 'FIT_CURVE' | 'BONE_ORIGINAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.y_scale_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
