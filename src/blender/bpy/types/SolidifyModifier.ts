import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * SolidifyModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SolidifyModifier.html
 */
export class SolidifyModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Assign a crease to inner edges
     * @desc float in [0, 1], default 0.0
     */
    public get edge_crease_inner(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.edge_crease_inner`)
    }

    /**
     * Assign a crease to outer edges
     * @desc float in [0, 1], default 0.0
     */
    public get edge_crease_outer(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.edge_crease_outer`)
    }

    /**
     * Assign a crease to the edges making up the rim
     * @desc float in [0, 1], default 0.0
     */
    public get edge_crease_rim(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.edge_crease_rim`)
    }

    /**
     * Invert the vertex group influence
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
     * Offset material index of generated rim faces
     * @desc int in [-32768, 32767], default 0
     */
    public get material_offset_rim(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_offset_rim`)
    }

    /**
     * Selects the boundary adjustment algorithm
     * @desc enum in ['NONE', 'ROUND', 'FLAT'], default 'NONE'
     */
    public get nonmanifold_boundary_mode(): 'NONE' | 'ROUND' | 'FLAT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.nonmanifold_boundary_mode`)
    }

    /**
     * Selects the used thickness algorithm
     * @desc enum in ['FIXED', 'EVEN', 'CONSTRAINTS'], default 'FIXED'
     */
    public get nonmanifold_thickness_mode(): 'FIXED' | 'EVEN' | 'CONSTRAINTS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.nonmanifold_thickness_mode`)
    }

    /**
     * Offset the thickness from the center
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Selects the used algorithm
     * @desc enum in ['EXTRUDE', 'NON_MANIFOLD'], default 'EXTRUDE'
     */
    public get solidify_mode(): 'EXTRUDE' | 'NON_MANIFOLD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.solidify_mode`)
    }

    /**
     * Thickness of the shell
     * @desc float in [-inf, inf], default 0.0
     */
    public get thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness`)
    }

    /**
     * Offset clamp based on geometry scale
     * @desc float in [0, 100], default 0.0
     */
    public get thickness_clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_clamp`)
    }

    /**
     * Thickness factor to use for zero vertex group influence
     * @desc float in [0, 1], default 0.0
     */
    public get thickness_vertex_group(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.thickness_vertex_group`)
    }

    /**
     * Maintain thickness by adjusting for sharp corners (slow, disable when not needed)
     * @desc boolean, default False
     */
    public get use_even_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_even_offset`)
    }

    /**
     * Invert the face direction
     * @desc boolean, default False
     */
    public get use_flip_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flip_normals`)
    }

    /**
     * Calculate normals which result in more even thickness (slow, disable when not needed)
     * @desc boolean, default False
     */
    public get use_quality_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_quality_normals`)
    }

    /**
     * Create edge loops between the inner and outer surfaces on face edges (slow, disable when not needed)
     * @desc boolean, default False
     */
    public get use_rim(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rim`)
    }

    /**
     * Only add the rim to the original data
     * @desc boolean, default False
     */
    public get use_rim_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rim_only`)
    }

    /**
     * Clamp thickness based on angles
     * @desc boolean, default False
     */
    public get use_thickness_angle_clamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_thickness_angle_clamp`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Assign a crease to inner edges
     * @desc float in [0, 1], default 0.0
     */
    public set edge_crease_inner(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.edge_crease_inner`, value)
    }

    /**
     * Assign a crease to outer edges
     * @desc float in [0, 1], default 0.0
     */
    public set edge_crease_outer(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.edge_crease_outer`, value)
    }

    /**
     * Assign a crease to the edges making up the rim
     * @desc float in [0, 1], default 0.0
     */
    public set edge_crease_rim(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.edge_crease_rim`, value)
    }

    /**
     * Invert the vertex group influence
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
     * Offset material index of generated rim faces
     * @desc int in [-32768, 32767], default 0
     */
    public set material_offset_rim(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material_offset_rim`, value)
    }

    /**
     * Selects the boundary adjustment algorithm
     * @desc enum in ['NONE', 'ROUND', 'FLAT'], default 'NONE'
     */
    public set nonmanifold_boundary_mode(value: 'NONE' | 'ROUND' | 'FLAT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.nonmanifold_boundary_mode`, value)
    }

    /**
     * Selects the used thickness algorithm
     * @desc enum in ['FIXED', 'EVEN', 'CONSTRAINTS'], default 'FIXED'
     */
    public set nonmanifold_thickness_mode(value: 'FIXED' | 'EVEN' | 'CONSTRAINTS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.nonmanifold_thickness_mode`, value)
    }

    /**
     * Offset the thickness from the center
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Selects the used algorithm
     * @desc enum in ['EXTRUDE', 'NON_MANIFOLD'], default 'EXTRUDE'
     */
    public set solidify_mode(value: 'EXTRUDE' | 'NON_MANIFOLD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.solidify_mode`, value)
    }

    /**
     * Thickness of the shell
     * @desc float in [-inf, inf], default 0.0
     */
    public set thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness`, value)
    }

    /**
     * Offset clamp based on geometry scale
     * @desc float in [0, 100], default 0.0
     */
    public set thickness_clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_clamp`, value)
    }

    /**
     * Thickness factor to use for zero vertex group influence
     * @desc float in [0, 1], default 0.0
     */
    public set thickness_vertex_group(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.thickness_vertex_group`, value)
    }

    /**
     * Maintain thickness by adjusting for sharp corners (slow, disable when not needed)
     * @desc boolean, default False
     */
    public set use_even_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_even_offset`, value)
    }

    /**
     * Invert the face direction
     * @desc boolean, default False
     */
    public set use_flip_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flip_normals`, value)
    }

    /**
     * Calculate normals which result in more even thickness (slow, disable when not needed)
     * @desc boolean, default False
     */
    public set use_quality_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_quality_normals`, value)
    }

    /**
     * Create edge loops between the inner and outer surfaces on face edges (slow, disable when not needed)
     * @desc boolean, default False
     */
    public set use_rim(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rim`, value)
    }

    /**
     * Only add the rim to the original data
     * @desc boolean, default False
     */
    public set use_rim_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rim_only`, value)
    }

    /**
     * Clamp thickness based on angles
     * @desc boolean, default False
     */
    public set use_thickness_angle_clamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_thickness_angle_clamp`, value)
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
