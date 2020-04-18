import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * UVWarpModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.UVWarpModifier.html
 */
export class UVWarpModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Pole axis for rotation
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get axis_u(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis_u`)
    }

    /**
     * Pole axis for rotation
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get axis_v(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis_v`)
    }

    /**
     * Bone defining offset
     * @desc string, default '', (never None)
     */
    public get bone_from(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bone_from`)
    }

    /**
     * Bone defining offset
     * @desc string, default '', (never None)
     */
    public get bone_to(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bone_to`)
    }

    /**
     * Center point for rotate/scale
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get center(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.center`, 'number', 2)
    }

    /**
     * Object defining offset
     * @desc Object
     */
    public get object_from(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object_from`, BlenderObject)
    }

    /**
     * Object defining offset
     * @desc Object
     */
    public get object_to(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object_to`, BlenderObject)
    }

    /**
     * UV Layer name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Pole axis for rotation
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set axis_u(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis_u`, value)
    }

    /**
     * Pole axis for rotation
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set axis_v(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis_v`, value)
    }

    /**
     * Bone defining offset
     * @desc string, default '', (never None)
     */
    public set bone_from(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bone_from`, value)
    }

    /**
     * Bone defining offset
     * @desc string, default '', (never None)
     */
    public set bone_to(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bone_to`, value)
    }

    /**
     * Center point for rotate/scale
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set center(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.center`, value)
    }

    /**
     * Object defining offset
     * @desc Object
     */
    public set object_from(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object_from`, value)
    }

    /**
     * Object defining offset
     * @desc Object
     */
    public set object_to(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object_to`, value)
    }

    /**
     * UV Layer name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
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
