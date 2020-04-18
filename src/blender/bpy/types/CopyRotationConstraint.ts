import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * CopyRotationConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.CopyRotationConstraint.html
 */
export class CopyRotationConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Explicitly specify the euler rotation order
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX'], default 'AUTO'
     */
    public get euler_order(): 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.euler_order`)
    }

    /**
     * Invert the X rotation
     * @desc boolean, default False
     */
    public get invert_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_x`)
    }

    /**
     * Invert the Y rotation
     * @desc boolean, default False
     */
    public get invert_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_y`)
    }

    /**
     * Invert the Z rotation
     * @desc boolean, default False
     */
    public get invert_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_z`)
    }

    /**
     * Specify how the copied and existing rotations are combined
     * @desc enum in ['REPLACE', 'ADD', 'BEFORE', 'AFTER', 'OFFSET'], default 'REPLACE'
     */
    public get mix_mode(): 'REPLACE' | 'ADD' | 'BEFORE' | 'AFTER' | 'OFFSET' {
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
     * DEPRECATED: Add original rotation into copied rotation
     * @desc boolean, default False
     */
    public get use_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_offset`)
    }

    /**
     * Copy the target’s X rotation
     * @desc boolean, default False
     */
    public get use_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x`)
    }

    /**
     * Copy the target’s Y rotation
     * @desc boolean, default False
     */
    public get use_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y`)
    }

    /**
     * Copy the target’s Z rotation
     * @desc boolean, default False
     */
    public get use_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_z`)
    }

    /**
     * Explicitly specify the euler rotation order
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX'], default 'AUTO'
     */
    public set euler_order(value: 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.euler_order`, value)
    }

    /**
     * Invert the X rotation
     * @desc boolean, default False
     */
    public set invert_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_x`, value)
    }

    /**
     * Invert the Y rotation
     * @desc boolean, default False
     */
    public set invert_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_y`, value)
    }

    /**
     * Invert the Z rotation
     * @desc boolean, default False
     */
    public set invert_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_z`, value)
    }

    /**
     * Specify how the copied and existing rotations are combined
     * @desc enum in ['REPLACE', 'ADD', 'BEFORE', 'AFTER', 'OFFSET'], default 'REPLACE'
     */
    public set mix_mode(value: 'REPLACE' | 'ADD' | 'BEFORE' | 'AFTER' | 'OFFSET') {
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
     * DEPRECATED: Add original rotation into copied rotation
     * @desc boolean, default False
     */
    public set use_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_offset`, value)
    }

    /**
     * Copy the target’s X rotation
     * @desc boolean, default False
     */
    public set use_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x`, value)
    }

    /**
     * Copy the target’s Y rotation
     * @desc boolean, default False
     */
    public set use_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y`, value)
    }

    /**
     * Copy the target’s Z rotation
     * @desc boolean, default False
     */
    public set use_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_z`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
