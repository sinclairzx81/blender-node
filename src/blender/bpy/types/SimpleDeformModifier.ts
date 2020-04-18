import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * SimpleDeformModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SimpleDeformModifier.html
 */
export class SimpleDeformModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angle of deformation
     * @desc float in [-inf, inf], default 0.785398
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Deform around local axis
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get deform_axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.deform_axis`)
    }

    /**
     * 
     * @desc enum in ['TWIST', 'BEND', 'TAPER', 'STRETCH'], default 'TWIST'
     */
    public get deform_method(): 'TWIST' | 'BEND' | 'TAPER' | 'STRETCH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.deform_method`)
    }

    /**
     * Amount to deform object
     * @desc float in [-inf, inf], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Lower/Upper limits for deform
     * @desc float array of 2 items in [0, 1], default (0.0, 0.0)
     */
    public get limits(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.limits`, 'number', 2)
    }

    /**
     * Do not allow deformation along the X axis
     * @desc boolean, default False
     */
    public get lock_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_x`)
    }

    /**
     * Do not allow deformation along the Y axis
     * @desc boolean, default False
     */
    public get lock_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_y`)
    }

    /**
     * Do not allow deformation along the Z axis
     * @desc boolean, default False
     */
    public get lock_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_z`)
    }

    /**
     * Offset the origin and orientation of the deformation
     * @desc Object
     */
    public get origin(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.origin`, BlenderObject)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Angle of deformation
     * @desc float in [-inf, inf], default 0.785398
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Deform around local axis
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set deform_axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.deform_axis`, value)
    }

    /**
     * 
     * @desc enum in ['TWIST', 'BEND', 'TAPER', 'STRETCH'], default 'TWIST'
     */
    public set deform_method(value: 'TWIST' | 'BEND' | 'TAPER' | 'STRETCH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.deform_method`, value)
    }

    /**
     * Amount to deform object
     * @desc float in [-inf, inf], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Lower/Upper limits for deform
     * @desc float array of 2 items in [0, 1], default (0.0, 0.0)
     */
    public set limits(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.limits`, value)
    }

    /**
     * Do not allow deformation along the X axis
     * @desc boolean, default False
     */
    public set lock_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_x`, value)
    }

    /**
     * Do not allow deformation along the Y axis
     * @desc boolean, default False
     */
    public set lock_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_y`, value)
    }

    /**
     * Do not allow deformation along the Z axis
     * @desc boolean, default False
     */
    public set lock_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_z`, value)
    }

    /**
     * Offset the origin and orientation of the deformation
     * @desc Object
     */
    public set origin(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.origin`, value)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
