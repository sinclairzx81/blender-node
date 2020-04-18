import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * ArrayModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ArrayModifier.html
 */
export class ArrayModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Value for the distance between arrayed items
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get constant_offset_displace(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.constant_offset_displace`, 'number', 3)
    }

    /**
     * Number of duplicates to make
     * @desc int in [1, inf], default 0
     */
    public get count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.count`)
    }

    /**
     * Curve object to fit array length to
     * @desc Object
     */
    public get curve(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve`, BlenderObject)
    }

    /**
     * Mesh object to use as an end cap
     * @desc Object
     */
    public get end_cap(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.end_cap`, BlenderObject)
    }

    /**
     * Length to fit array within
     * @desc float in [0, inf], default 0.0
     */
    public get fit_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fit_length`)
    }

    /**
     * Array length calculation method
     * @desc enum in ['FIXED_COUNT', 'FIT_LENGTH', 'FIT_CURVE'], default 'FIXED_COUNT'
     */
    public get fit_type(): 'FIXED_COUNT' | 'FIT_LENGTH' | 'FIT_CURVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fit_type`)
    }

    /**
     * Limit below which to merge vertices
     * @desc float in [0, inf], default 0.0
     */
    public get merge_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.merge_threshold`)
    }

    /**
     * Use the location and rotation of another object to determine the distance and rotational change between arrayed items
     * @desc Object
     */
    public get offset_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.offset_object`, BlenderObject)
    }

    /**
     * Amount to offset array UVs on the U axis
     * @desc float in [-1, 1], default 0.0
     */
    public get offset_u(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_u`)
    }

    /**
     * Amount to offset array UVs on the V axis
     * @desc float in [-1, 1], default 0.0
     */
    public get offset_v(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_v`)
    }

    /**
     * The size of the geometry will determine the distance between arrayed items
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get relative_offset_displace(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.relative_offset_displace`, 'number', 3)
    }

    /**
     * Mesh object to use as a start cap
     * @desc Object
     */
    public get start_cap(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.start_cap`, BlenderObject)
    }

    /**
     * Add a constant offset
     * @desc boolean, default False
     */
    public get use_constant_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_constant_offset`)
    }

    /**
     * Merge vertices in adjacent duplicates
     * @desc boolean, default False
     */
    public get use_merge_vertices(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_merge_vertices`)
    }

    /**
     * Merge vertices in first and last duplicates
     * @desc boolean, default False
     */
    public get use_merge_vertices_cap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_merge_vertices_cap`)
    }

    /**
     * Add another object’s transformation to the total offset
     * @desc boolean, default False
     */
    public get use_object_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_object_offset`)
    }

    /**
     * Add an offset relative to the object’s bounding box
     * @desc boolean, default False
     */
    public get use_relative_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative_offset`)
    }

    /**
     * Value for the distance between arrayed items
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set constant_offset_displace(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.constant_offset_displace`, value)
    }

    /**
     * Number of duplicates to make
     * @desc int in [1, inf], default 0
     */
    public set count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.count`, value)
    }

    /**
     * Curve object to fit array length to
     * @desc Object
     */
    public set curve(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.curve`, value)
    }

    /**
     * Mesh object to use as an end cap
     * @desc Object
     */
    public set end_cap(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.end_cap`, value)
    }

    /**
     * Length to fit array within
     * @desc float in [0, inf], default 0.0
     */
    public set fit_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fit_length`, value)
    }

    /**
     * Array length calculation method
     * @desc enum in ['FIXED_COUNT', 'FIT_LENGTH', 'FIT_CURVE'], default 'FIXED_COUNT'
     */
    public set fit_type(value: 'FIXED_COUNT' | 'FIT_LENGTH' | 'FIT_CURVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fit_type`, value)
    }

    /**
     * Limit below which to merge vertices
     * @desc float in [0, inf], default 0.0
     */
    public set merge_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.merge_threshold`, value)
    }

    /**
     * Use the location and rotation of another object to determine the distance and rotational change between arrayed items
     * @desc Object
     */
    public set offset_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.offset_object`, value)
    }

    /**
     * Amount to offset array UVs on the U axis
     * @desc float in [-1, 1], default 0.0
     */
    public set offset_u(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_u`, value)
    }

    /**
     * Amount to offset array UVs on the V axis
     * @desc float in [-1, 1], default 0.0
     */
    public set offset_v(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_v`, value)
    }

    /**
     * The size of the geometry will determine the distance between arrayed items
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set relative_offset_displace(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.relative_offset_displace`, value)
    }

    /**
     * Mesh object to use as a start cap
     * @desc Object
     */
    public set start_cap(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.start_cap`, value)
    }

    /**
     * Add a constant offset
     * @desc boolean, default False
     */
    public set use_constant_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_constant_offset`, value)
    }

    /**
     * Merge vertices in adjacent duplicates
     * @desc boolean, default False
     */
    public set use_merge_vertices(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_merge_vertices`, value)
    }

    /**
     * Merge vertices in first and last duplicates
     * @desc boolean, default False
     */
    public set use_merge_vertices_cap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_merge_vertices_cap`, value)
    }

    /**
     * Add another object’s transformation to the total offset
     * @desc boolean, default False
     */
    public set use_object_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_object_offset`, value)
    }

    /**
     * Add an offset relative to the object’s bounding box
     * @desc boolean, default False
     */
    public set use_relative_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative_offset`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
