import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UnknownType } from './UnknownType'

/**
 * ShapeKey
 * 
 * https://docs.blender.org/api/current/bpy.types.ShapeKey.html
 */
export class ShapeKey {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of UnknownType, (readonly)
     */
    public get data(): BlenderCollection<UnknownType> & Indexable<UnknownType> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, UnknownType)
    }

    /**
     * Frame for absolute keys
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get frame(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame`)
    }

    /**
     * Interpolation type for absolute shape keys
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_LINEAR'
     */
    public get interpolation(): 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Toggle this shape key
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * Name of Shape Key
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Shape used as a relative key
     * @desc ShapeKey, (never None)
     */
    public get relative_key(): ShapeKey {
        return PythonInterop.getClass(this.interop, `${this.accessor}.relative_key`, ShapeKey)
    }

    /**
     * Maximum for slider
     * @desc float in [-10, 10], default 1.0
     */
    public get slider_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.slider_max`)
    }

    /**
     * Minimum for slider
     * @desc float in [-10, 10], default 0.0
     */
    public get slider_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.slider_min`)
    }

    /**
     * Value of shape key at the current frame
     * @desc float in [0, 1], default 0.0
     */
    public get value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.value`)
    }

    /**
     * Vertex weight group, to blend with basis shape
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Interpolation type for absolute shape keys
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_LINEAR'
     */
    public set interpolation(value: 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Toggle this shape key
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * Name of Shape Key
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Shape used as a relative key
     * @desc ShapeKey, (never None)
     */
    public set relative_key(value: ShapeKey) {
        PythonInterop.setClass(this.interop, `${this.accessor}.relative_key`, value)
    }

    /**
     * Maximum for slider
     * @desc float in [-10, 10], default 1.0
     */
    public set slider_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.slider_max`, value)
    }

    /**
     * Minimum for slider
     * @desc float in [-10, 10], default 0.0
     */
    public set slider_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.slider_min`, value)
    }

    /**
     * Value of shape key at the current frame
     * @desc float in [0, 1], default 0.0
     */
    public set value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.value`, value)
    }

    /**
     * Vertex weight group, to blend with basis shape
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * Compute local space vertices’ normals for this shape key
     * @desc float in [-1, 1]
     */
    public normals_vertex_get(): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.normals_vertex_get`, {})
    }

    /**
     * Compute local space faces’ normals for this shape key
     * @desc float in [-1, 1]
     */
    public normals_polygon_get(): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.normals_polygon_get`, {})
    }

    /**
     * Compute local space face corners’ normals for this shape key
     * @desc float in [-1, 1]
     */
    public normals_split_get(): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.normals_split_get`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
