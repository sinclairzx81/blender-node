import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * PivotConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.PivotConstraint.html
 */
export class PivotConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public get head_tail(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_tail`)
    }

    /**
     * Offset of pivot from target (when set), or from owner’s location (when Fixed Position is off), or the absolute pivot point
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 3)
    }

    /**
     * Rotation range on which pivoting should occur
     * @desc enum in ['ALWAYS_ACTIVE', 'NX', 'NY', 'NZ', 'X', 'Y', 'Z'], default 'NX'
     */
    public get rotation_range(): 'ALWAYS_ACTIVE' | 'NX' | 'NY' | 'NZ' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rotation_range`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get subtarget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subtarget`)
    }

    /**
     * Target Object, defining the position of the pivot when defined
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
     * Offset will be an absolute point in space instead of relative to the target
     * @desc boolean, default False
     */
    public get use_relative_location(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative_location`)
    }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public set head_tail(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_tail`, value)
    }

    /**
     * Offset of pivot from target (when set), or from owner’s location (when Fixed Position is off), or the absolute pivot point
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Rotation range on which pivoting should occur
     * @desc enum in ['ALWAYS_ACTIVE', 'NX', 'NY', 'NZ', 'X', 'Y', 'Z'], default 'NX'
     */
    public set rotation_range(value: 'ALWAYS_ACTIVE' | 'NX' | 'NY' | 'NZ' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rotation_range`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set subtarget(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.subtarget`, value)
    }

    /**
     * Target Object, defining the position of the pivot when defined
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
     * Offset will be an absolute point in space instead of relative to the target
     * @desc boolean, default False
     */
    public set use_relative_location(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative_location`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
