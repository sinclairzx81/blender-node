import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * WireframeModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.WireframeModifier.html
 */
export class WireframeModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Crease weight (if active)
     * @desc float in [-inf, inf], default 0.0
     */
    public get crease_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crease_weight`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Offset material index of generated faces
     * @desc int in [-32768, 32767], default 0
     */
    public get material_offset(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_offset`)
    }

    /**
     * Offset the thickness from the center
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Thickness factor
     * @desc float in [-inf, inf], default 0.0
     */
    public get thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness`)
    }

    /**
     * Thickness factor to use for zero vertex group influence
     * @desc float in [0, 1], default 0.0
     */
    public get thickness_vertex_group(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_vertex_group`)
    }

    /**
     * Support face boundaries
     * @desc boolean, default False
     */
    public get use_boundary(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_boundary`)
    }

    /**
     * Crease hub edges for improved subsurf
     * @desc boolean, default False
     */
    public get use_crease(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_crease`)
    }

    /**
     * Scale the offset to give more even thickness
     * @desc boolean, default False
     */
    public get use_even_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_even_offset`)
    }

    /**
     * Scale the offset by surrounding geometry
     * @desc boolean, default False
     */
    public get use_relative_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative_offset`)
    }

    /**
     * Remove original geometry
     * @desc boolean, default False
     */
    public get use_replace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_replace`)
    }

    /**
     * Vertex group name for selecting the affected areas
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Crease weight (if active)
     * @desc float in [-inf, inf], default 0.0
     */
    public set crease_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crease_weight`, value)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Offset material index of generated faces
     * @desc int in [-32768, 32767], default 0
     */
    public set material_offset(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material_offset`, value)
    }

    /**
     * Offset the thickness from the center
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Thickness factor
     * @desc float in [-inf, inf], default 0.0
     */
    public set thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness`, value)
    }

    /**
     * Thickness factor to use for zero vertex group influence
     * @desc float in [0, 1], default 0.0
     */
    public set thickness_vertex_group(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_vertex_group`, value)
    }

    /**
     * Support face boundaries
     * @desc boolean, default False
     */
    public set use_boundary(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_boundary`, value)
    }

    /**
     * Crease hub edges for improved subsurf
     * @desc boolean, default False
     */
    public set use_crease(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_crease`, value)
    }

    /**
     * Scale the offset to give more even thickness
     * @desc boolean, default False
     */
    public set use_even_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_even_offset`, value)
    }

    /**
     * Scale the offset by surrounding geometry
     * @desc boolean, default False
     */
    public set use_relative_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative_offset`, value)
    }

    /**
     * Remove original geometry
     * @desc boolean, default False
     */
    public set use_replace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_replace`, value)
    }

    /**
     * Vertex group name for selecting the affected areas
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
