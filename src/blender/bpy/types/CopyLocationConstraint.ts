import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * CopyLocationConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.CopyLocationConstraint.html
 */
export class CopyLocationConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public get head_tail(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.head_tail`)
    }

    /**
     * Invert the X location
     * @desc boolean, default False
     */
    public get invert_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_x`)
    }

    /**
     * Invert the Y location
     * @desc boolean, default False
     */
    public get invert_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_y`)
    }

    /**
     * Invert the Z location
     * @desc boolean, default False
     */
    public get invert_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_z`)
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
     * Add original location into copied location
     * @desc boolean, default False
     */
    public get use_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_offset`)
    }

    /**
     * Copy the target’s X location
     * @desc boolean, default False
     */
    public get use_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x`)
    }

    /**
     * Copy the target’s Y location
     * @desc boolean, default False
     */
    public get use_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y`)
    }

    /**
     * Copy the target’s Z location
     * @desc boolean, default False
     */
    public get use_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_z`)
    }

    /**
     * Target along length of bone: Head=0, Tail=1
     * @desc float in [0, 1], default 0.0
     */
    public set head_tail(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.head_tail`, value)
    }

    /**
     * Invert the X location
     * @desc boolean, default False
     */
    public set invert_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_x`, value)
    }

    /**
     * Invert the Y location
     * @desc boolean, default False
     */
    public set invert_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_y`, value)
    }

    /**
     * Invert the Z location
     * @desc boolean, default False
     */
    public set invert_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_z`, value)
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
     * Add original location into copied location
     * @desc boolean, default False
     */
    public set use_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_offset`, value)
    }

    /**
     * Copy the target’s X location
     * @desc boolean, default False
     */
    public set use_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x`, value)
    }

    /**
     * Copy the target’s Y location
     * @desc boolean, default False
     */
    public set use_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y`, value)
    }

    /**
     * Copy the target’s Z location
     * @desc boolean, default False
     */
    public set use_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_z`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
