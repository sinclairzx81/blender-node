import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * CopyScaleConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.CopyScaleConstraint.html
 */
export class CopyScaleConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Raise the target’s scale to the specified power
     * @desc float in [-inf, inf], default 1.0
     */
    public get power(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.power`)
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
     * Use addition instead of multiplication to combine scale (2.7 compatibility)
     * @desc boolean, default False
     */
    public get use_add(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_add`)
    }

    /**
     * Redistribute the copied change in volume equally between the three axes of the owner
     * @desc boolean, default False
     */
    public get use_make_uniform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_make_uniform`)
    }

    /**
     * Combine original scale with copied scale
     * @desc boolean, default False
     */
    public get use_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_offset`)
    }

    /**
     * Copy the target’s X scale
     * @desc boolean, default False
     */
    public get use_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x`)
    }

    /**
     * Copy the target’s Y scale
     * @desc boolean, default False
     */
    public get use_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y`)
    }

    /**
     * Copy the target’s Z scale
     * @desc boolean, default False
     */
    public get use_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_z`)
    }

    /**
     * Raise the target’s scale to the specified power
     * @desc float in [-inf, inf], default 1.0
     */
    public set power(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.power`, value)
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
     * Use addition instead of multiplication to combine scale (2.7 compatibility)
     * @desc boolean, default False
     */
    public set use_add(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_add`, value)
    }

    /**
     * Redistribute the copied change in volume equally between the three axes of the owner
     * @desc boolean, default False
     */
    public set use_make_uniform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_make_uniform`, value)
    }

    /**
     * Combine original scale with copied scale
     * @desc boolean, default False
     */
    public set use_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_offset`, value)
    }

    /**
     * Copy the target’s X scale
     * @desc boolean, default False
     */
    public set use_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x`, value)
    }

    /**
     * Copy the target’s Y scale
     * @desc boolean, default False
     */
    public set use_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y`, value)
    }

    /**
     * Copy the target’s Z scale
     * @desc boolean, default False
     */
    public set use_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_z`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
