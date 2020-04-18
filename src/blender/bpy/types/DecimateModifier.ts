import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * DecimateModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.DecimateModifier.html
 */
export class DecimateModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The current number of faces in the decimated mesh
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get face_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.face_count`)
    }

    /**
     * Only dissolve angles below this (planar only)
     * @desc float in [0, 3.14159], default 0.0
     */
    public get angle_limit(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_limit`)
    }

    /**
     * 
     * @desc enum in ['COLLAPSE', 'UNSUBDIV', 'DISSOLVE'], default 'COLLAPSE'
     */
    public get decimate_type(): 'COLLAPSE' | 'UNSUBDIV' | 'DISSOLVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.decimate_type`)
    }

    /**
     * Limit merging geometry
     * @desc enum set in {'NORMAL', 'MATERIAL', 'SEAM', 'SHARP', 'UV'}, default {'NORMAL'}
     */
    public get delimit(): ('NORMAL' | 'MATERIAL' | 'SEAM' | 'SHARP' | 'UV')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.delimit`)
    }

    /**
     * Invert vertex group influence (collapse only)
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Number of times reduce the geometry (unsubdivide only)
     * @desc int in [0, 32767], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * Ratio of triangles to reduce to (collapse only)
     * @desc float in [0, 1], default 0.0
     */
    public get ratio(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ratio`)
    }

    /**
     * Axis of symmetry
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get symmetry_axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.symmetry_axis`)
    }

    /**
     * Keep triangulated faces resulting from decimation (collapse only)
     * @desc boolean, default False
     */
    public get use_collapse_triangulate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_collapse_triangulate`)
    }

    /**
     * Dissolve all vertices in between face boundaries (planar only)
     * @desc boolean, default False
     */
    public get use_dissolve_boundaries(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dissolve_boundaries`)
    }

    /**
     * Maintain symmetry on an axis
     * @desc boolean, default False
     */
    public get use_symmetry(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_symmetry`)
    }

    /**
     * Vertex group name (collapse only)
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Vertex group strength
     * @desc float in [0, 1000], default 0.0
     */
    public get vertex_group_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.vertex_group_factor`)
    }

    /**
     * Only dissolve angles below this (planar only)
     * @desc float in [0, 3.14159], default 0.0
     */
    public set angle_limit(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_limit`, value)
    }

    /**
     * 
     * @desc enum in ['COLLAPSE', 'UNSUBDIV', 'DISSOLVE'], default 'COLLAPSE'
     */
    public set decimate_type(value: 'COLLAPSE' | 'UNSUBDIV' | 'DISSOLVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.decimate_type`, value)
    }

    /**
     * Limit merging geometry
     * @desc enum set in {'NORMAL', 'MATERIAL', 'SEAM', 'SHARP', 'UV'}, default {'NORMAL'}
     */
    public set delimit(value: ('NORMAL' | 'MATERIAL' | 'SEAM' | 'SHARP' | 'UV')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.delimit`, value)
    }

    /**
     * Invert vertex group influence (collapse only)
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Number of times reduce the geometry (unsubdivide only)
     * @desc int in [0, 32767], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * Ratio of triangles to reduce to (collapse only)
     * @desc float in [0, 1], default 0.0
     */
    public set ratio(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ratio`, value)
    }

    /**
     * Axis of symmetry
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set symmetry_axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.symmetry_axis`, value)
    }

    /**
     * Keep triangulated faces resulting from decimation (collapse only)
     * @desc boolean, default False
     */
    public set use_collapse_triangulate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_collapse_triangulate`, value)
    }

    /**
     * Dissolve all vertices in between face boundaries (planar only)
     * @desc boolean, default False
     */
    public set use_dissolve_boundaries(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dissolve_boundaries`, value)
    }

    /**
     * Maintain symmetry on an axis
     * @desc boolean, default False
     */
    public set use_symmetry(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_symmetry`, value)
    }

    /**
     * Vertex group name (collapse only)
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * Vertex group strength
     * @desc float in [0, 1000], default 0.0
     */
    public set vertex_group_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.vertex_group_factor`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
