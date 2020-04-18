import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * CastModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.CastModifier.html
 */
export class CastModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Target object shape
     * @desc enum in ['SPHERE', 'CYLINDER', 'CUBOID'], default 'SPHERE'
     */
    public get cast_type(): 'SPHERE' | 'CYLINDER' | 'CUBOID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.cast_type`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * Control object: if available, its location determines the center of the effect
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Only deform vertices within this distance from the center of the effect (leave as 0 for infinite.)
     * @desc float in [0, inf], default 0.0
     */
    public get radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Size of projection shape (leave as 0 for auto)
     * @desc float in [0, inf], default 0.0
     */
    public get size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size`)
    }

    /**
     * Use radius as size of projection shape (0 = auto)
     * @desc boolean, default False
     */
    public get use_radius_as_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_radius_as_size`)
    }

    /**
     * Use object transform to control projection shape
     * @desc boolean, default False
     */
    public get use_transform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transform`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_x`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_y`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_z`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Target object shape
     * @desc enum in ['SPHERE', 'CYLINDER', 'CUBOID'], default 'SPHERE'
     */
    public set cast_type(value: 'SPHERE' | 'CYLINDER' | 'CUBOID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.cast_type`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * Control object: if available, its location determines the center of the effect
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Only deform vertices within this distance from the center of the effect (leave as 0 for infinite.)
     * @desc float in [0, inf], default 0.0
     */
    public set radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Size of projection shape (leave as 0 for auto)
     * @desc float in [0, inf], default 0.0
     */
    public set size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Use radius as size of projection shape (0 = auto)
     * @desc boolean, default False
     */
    public set use_radius_as_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_radius_as_size`, value)
    }

    /**
     * Use object transform to control projection shape
     * @desc boolean, default False
     */
    public set use_transform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transform`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_x`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_y`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_z`, value)
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
