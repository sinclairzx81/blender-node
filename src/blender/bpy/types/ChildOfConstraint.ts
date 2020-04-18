import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { BlenderObject } from './BlenderObject'

/**
 * ChildOfConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.ChildOfConstraint.html
 */
export class ChildOfConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Transformation matrix to apply before
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get inverse_matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.inverse_matrix`, 'number', 4, 4)
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
     * Use X Location of Parent
     * @desc boolean, default False
     */
    public get use_location_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_location_x`)
    }

    /**
     * Use Y Location of Parent
     * @desc boolean, default False
     */
    public get use_location_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_location_y`)
    }

    /**
     * Use Z Location of Parent
     * @desc boolean, default False
     */
    public get use_location_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_location_z`)
    }

    /**
     * Use X Rotation of Parent
     * @desc boolean, default False
     */
    public get use_rotation_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotation_x`)
    }

    /**
     * Use Y Rotation of Parent
     * @desc boolean, default False
     */
    public get use_rotation_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotation_y`)
    }

    /**
     * Use Z Rotation of Parent
     * @desc boolean, default False
     */
    public get use_rotation_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotation_z`)
    }

    /**
     * Use X Scale of Parent
     * @desc boolean, default False
     */
    public get use_scale_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scale_x`)
    }

    /**
     * Use Y Scale of Parent
     * @desc boolean, default False
     */
    public get use_scale_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scale_y`)
    }

    /**
     * Use Z Scale of Parent
     * @desc boolean, default False
     */
    public get use_scale_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scale_z`)
    }

    /**
     * Transformation matrix to apply before
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set inverse_matrix(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.inverse_matrix`, value)
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
     * Use X Location of Parent
     * @desc boolean, default False
     */
    public set use_location_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_location_x`, value)
    }

    /**
     * Use Y Location of Parent
     * @desc boolean, default False
     */
    public set use_location_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_location_y`, value)
    }

    /**
     * Use Z Location of Parent
     * @desc boolean, default False
     */
    public set use_location_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_location_z`, value)
    }

    /**
     * Use X Rotation of Parent
     * @desc boolean, default False
     */
    public set use_rotation_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotation_x`, value)
    }

    /**
     * Use Y Rotation of Parent
     * @desc boolean, default False
     */
    public set use_rotation_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotation_y`, value)
    }

    /**
     * Use Z Rotation of Parent
     * @desc boolean, default False
     */
    public set use_rotation_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotation_z`, value)
    }

    /**
     * Use X Scale of Parent
     * @desc boolean, default False
     */
    public set use_scale_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scale_x`, value)
    }

    /**
     * Use Y Scale of Parent
     * @desc boolean, default False
     */
    public set use_scale_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scale_y`, value)
    }

    /**
     * Use Z Scale of Parent
     * @desc boolean, default False
     */
    public set use_scale_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scale_z`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
