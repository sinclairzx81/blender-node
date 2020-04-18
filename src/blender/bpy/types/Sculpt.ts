import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Paint } from './Paint'
import { BlenderObject } from './BlenderObject'

/**
 * Sculpt
 * 
 * https://docs.blender.org/api/current/bpy.types.Sculpt.html
 */
export class Sculpt {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Maximum edge length for dynamic topology sculpting (as divisor of blender unit - higher value means smaller edge length)
     * @desc float in [0.0001, inf], default 0.0
     */
    public get constant_detail_resolution(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.constant_detail_resolution`)
    }

    /**
     * Maximum edge length for dynamic topology sculpting (in brush percenage)
     * @desc float in [-inf, inf], default 0.0
     */
    public get detail_percent(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.detail_percent`)
    }

    /**
     * In dynamic-topology mode, how to add or remove mesh detail
     * @desc enum in ['SUBDIVIDE', 'COLLAPSE', 'SUBDIVIDE_COLLAPSE'], default 'SUBDIVIDE'
     */
    public get detail_refine_method(): 'SUBDIVIDE' | 'COLLAPSE' | 'SUBDIVIDE_COLLAPSE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.detail_refine_method`)
    }

    /**
     * Maximum edge length for dynamic topology sculpting (in pixels)
     * @desc float in [-inf, inf], default 0.0
     */
    public get detail_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.detail_size`)
    }

    /**
     * In dynamic-topology mode, how mesh detail size is calculated
     * @desc enum in ['RELATIVE', 'CONSTANT', 'BRUSH', 'MANUAL'], default 'RELATIVE'
     */
    public get detail_type_method(): 'RELATIVE' | 'CONSTANT' | 'BRUSH' | 'MANUAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.detail_type_method`)
    }

    /**
     * Amount of gravity after each dab
     * @desc float in [0, 1], default 0.0
     */
    public get gravity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gravity`)
    }

    /**
     * Object whose Z axis defines orientation of gravity
     * @desc Object
     */
    public get gravity_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.gravity_object`, BlenderObject)
    }

    /**
     * Disallow changes to the X axis of vertices
     * @desc boolean, default False
     */
    public get lock_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_x`)
    }

    /**
     * Disallow changes to the Y axis of vertices
     * @desc boolean, default False
     */
    public get lock_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_y`)
    }

    /**
     * Disallow changes to the Z axis of vertices
     * @desc boolean, default False
     */
    public get lock_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_z`)
    }

    /**
     * Number of times to copy strokes across the surface
     * @desc int array of 3 items in [1, 64], default (1, 1, 1)
     */
    public get radial_symmetry(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.radial_symmetry`, 'number', 3)
    }

    /**
     * Show mask as overlay on object
     * @desc boolean, default False
     */
    public get show_mask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_mask`)
    }

    /**
     * Source and destination for symmetrize operator
     * @desc enum in ['NEGATIVE_X', 'POSITIVE_X', 'NEGATIVE_Y', 'POSITIVE_Y', 'NEGATIVE_Z', 'POSITIVE_Z'], default 'NEGATIVE_X'
     */
    public get symmetrize_direction(): 'NEGATIVE_X' | 'POSITIVE_X' | 'NEGATIVE_Y' | 'POSITIVE_Y' | 'NEGATIVE_Z' | 'POSITIVE_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.symmetrize_direction`)
    }

    /**
     * Use only deformation modifiers (temporary disable all constructive modifiers except multi-resolution)
     * @desc boolean, default False
     */
    public get use_deform_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform_only`)
    }

    /**
     * Show faces in dynamic-topology mode with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public get use_smooth_shading(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth_shading`)
    }

    /**
     * Take advantage of multiple CPU cores to improve sculpting performance
     * @desc boolean, default False
     */
    public get use_threaded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_threaded`)
    }

    /**
     * Maximum edge length for dynamic topology sculpting (as divisor of blender unit - higher value means smaller edge length)
     * @desc float in [0.0001, inf], default 0.0
     */
    public set constant_detail_resolution(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.constant_detail_resolution`, value)
    }

    /**
     * Maximum edge length for dynamic topology sculpting (in brush percenage)
     * @desc float in [-inf, inf], default 0.0
     */
    public set detail_percent(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.detail_percent`, value)
    }

    /**
     * In dynamic-topology mode, how to add or remove mesh detail
     * @desc enum in ['SUBDIVIDE', 'COLLAPSE', 'SUBDIVIDE_COLLAPSE'], default 'SUBDIVIDE'
     */
    public set detail_refine_method(value: 'SUBDIVIDE' | 'COLLAPSE' | 'SUBDIVIDE_COLLAPSE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.detail_refine_method`, value)
    }

    /**
     * Maximum edge length for dynamic topology sculpting (in pixels)
     * @desc float in [-inf, inf], default 0.0
     */
    public set detail_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.detail_size`, value)
    }

    /**
     * In dynamic-topology mode, how mesh detail size is calculated
     * @desc enum in ['RELATIVE', 'CONSTANT', 'BRUSH', 'MANUAL'], default 'RELATIVE'
     */
    public set detail_type_method(value: 'RELATIVE' | 'CONSTANT' | 'BRUSH' | 'MANUAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.detail_type_method`, value)
    }

    /**
     * Amount of gravity after each dab
     * @desc float in [0, 1], default 0.0
     */
    public set gravity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gravity`, value)
    }

    /**
     * Object whose Z axis defines orientation of gravity
     * @desc Object
     */
    public set gravity_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.gravity_object`, value)
    }

    /**
     * Disallow changes to the X axis of vertices
     * @desc boolean, default False
     */
    public set lock_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_x`, value)
    }

    /**
     * Disallow changes to the Y axis of vertices
     * @desc boolean, default False
     */
    public set lock_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_y`, value)
    }

    /**
     * Disallow changes to the Z axis of vertices
     * @desc boolean, default False
     */
    public set lock_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_z`, value)
    }

    /**
     * Number of times to copy strokes across the surface
     * @desc int array of 3 items in [1, 64], default (1, 1, 1)
     */
    public set radial_symmetry(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.radial_symmetry`, value)
    }

    /**
     * Show mask as overlay on object
     * @desc boolean, default False
     */
    public set show_mask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_mask`, value)
    }

    /**
     * Source and destination for symmetrize operator
     * @desc enum in ['NEGATIVE_X', 'POSITIVE_X', 'NEGATIVE_Y', 'POSITIVE_Y', 'NEGATIVE_Z', 'POSITIVE_Z'], default 'NEGATIVE_X'
     */
    public set symmetrize_direction(value: 'NEGATIVE_X' | 'POSITIVE_X' | 'NEGATIVE_Y' | 'POSITIVE_Y' | 'NEGATIVE_Z' | 'POSITIVE_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.symmetrize_direction`, value)
    }

    /**
     * Use only deformation modifiers (temporary disable all constructive modifiers except multi-resolution)
     * @desc boolean, default False
     */
    public set use_deform_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform_only`, value)
    }

    /**
     * Show faces in dynamic-topology mode with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public set use_smooth_shading(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth_shading`, value)
    }

    /**
     * Take advantage of multiple CPU cores to improve sculpting performance
     * @desc boolean, default False
     */
    public set use_threaded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_threaded`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
