import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { CurveProfile } from './CurveProfile'

/**
 * BevelModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.BevelModifier.html
 */
export class BevelModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The path for the custom profile
     * @desc CurveProfile, (readonly)
     */
    public get custom_profile(): CurveProfile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.custom_profile`, CurveProfile)
    }

    /**
     * Angle above which to bevel edges
     * @desc float in [0, 3.14159], default 0.0
     */
    public get angle_limit(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_limit`)
    }

    /**
     * Whether to set face strength, and which faces to set it on
     * @desc enum in ['FSTR_NONE', 'FSTR_NEW', 'FSTR_AFFECTED', 'FSTR_ALL'], default 'FSTR_NONE'
     */
    public get face_strength_mode(): 'FSTR_NONE' | 'FSTR_NEW' | 'FSTR_AFFECTED' | 'FSTR_ALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.face_strength_mode`)
    }

    /**
     * Match normals of new faces to adjacent faces
     * @desc boolean, default False
     */
    public get harden_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.harden_normals`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'ANGLE', 'WEIGHT', 'VGROUP'], default 'NONE'
     */
    public get limit_method(): 'NONE' | 'ANGLE' | 'WEIGHT' | 'VGROUP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.limit_method`)
    }

    /**
     * Prefer sliding along edges to having even widths
     * @desc boolean, default False
     */
    public get loop_slide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.loop_slide`)
    }

    /**
     * Mark Seams along beveled edges
     * @desc boolean, default False
     */
    public get mark_seam(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mark_seam`)
    }

    /**
     * Mark beveled edges as sharp
     * @desc boolean, default False
     */
    public get mark_sharp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mark_sharp`)
    }

    /**
     * Material index of generated faces, -1 for automatic
     * @desc int in [-1, 32767], default 0
     */
    public get material(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material`)
    }

    /**
     * Pattern to use for inside of miters
     * @desc enum in ['MITER_SHARP', 'MITER_ARC'], default 'MITER_SHARP'
     */
    public get miter_inner(): 'MITER_SHARP' | 'MITER_ARC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.miter_inner`)
    }

    /**
     * Pattern to use for outside of miters
     * @desc enum in ['MITER_SHARP', 'MITER_PATCH', 'MITER_ARC'], default 'MITER_SHARP'
     */
    public get miter_outer(): 'MITER_SHARP' | 'MITER_PATCH' | 'MITER_ARC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.miter_outer`)
    }

    /**
     * What distance Width measures
     * @desc enum in ['OFFSET', 'WIDTH', 'DEPTH', 'PERCENT'], default 'OFFSET'
     */
    public get offset_type(): 'OFFSET' | 'WIDTH' | 'DEPTH' | 'PERCENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.offset_type`)
    }

    /**
     * The profile shape (0.5 = round)
     * @desc float in [0, 1], default 0.0
     */
    public get profile(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.profile`)
    }

    /**
     * Number of segments for round edges/verts
     * @desc int in [1, 100], default 0
     */
    public get segments(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.segments`)
    }

    /**
     * Spread distance for inner miter arcs
     * @desc float in [0, inf], default 0.0
     */
    public get spread(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spread`)
    }

    /**
     * Clamp the width to avoid overlap
     * @desc boolean, default False
     */
    public get use_clamp_overlap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clamp_overlap`)
    }

    /**
     * Whether to use a user inputed curve for the bevel’s profile
     * @desc boolean, default False
     */
    public get use_custom_profile(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_profile`)
    }

    /**
     * Bevel verts/corners, not edges
     * @desc boolean, default False
     */
    public get use_only_vertices(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_only_vertices`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * The method to use to create the mesh at intersections
     * @desc enum in ['ADJ', 'CUTOFF'], default 'ADJ'
     */
    public get vmesh_method(): 'ADJ' | 'CUTOFF' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vmesh_method`)
    }

    /**
     * Bevel amount
     * @desc float in [0, inf], default 0.0
     */
    public get width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.width`)
    }

    /**
     * Bevel amount for percentage method
     * @desc float in [0, inf], default 0.0
     */
    public get width_pct(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.width_pct`)
    }

    /**
     * Angle above which to bevel edges
     * @desc float in [0, 3.14159], default 0.0
     */
    public set angle_limit(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_limit`, value)
    }

    /**
     * Whether to set face strength, and which faces to set it on
     * @desc enum in ['FSTR_NONE', 'FSTR_NEW', 'FSTR_AFFECTED', 'FSTR_ALL'], default 'FSTR_NONE'
     */
    public set face_strength_mode(value: 'FSTR_NONE' | 'FSTR_NEW' | 'FSTR_AFFECTED' | 'FSTR_ALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.face_strength_mode`, value)
    }

    /**
     * Match normals of new faces to adjacent faces
     * @desc boolean, default False
     */
    public set harden_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.harden_normals`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'ANGLE', 'WEIGHT', 'VGROUP'], default 'NONE'
     */
    public set limit_method(value: 'NONE' | 'ANGLE' | 'WEIGHT' | 'VGROUP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.limit_method`, value)
    }

    /**
     * Prefer sliding along edges to having even widths
     * @desc boolean, default False
     */
    public set loop_slide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.loop_slide`, value)
    }

    /**
     * Mark Seams along beveled edges
     * @desc boolean, default False
     */
    public set mark_seam(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mark_seam`, value)
    }

    /**
     * Mark beveled edges as sharp
     * @desc boolean, default False
     */
    public set mark_sharp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mark_sharp`, value)
    }

    /**
     * Material index of generated faces, -1 for automatic
     * @desc int in [-1, 32767], default 0
     */
    public set material(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material`, value)
    }

    /**
     * Pattern to use for inside of miters
     * @desc enum in ['MITER_SHARP', 'MITER_ARC'], default 'MITER_SHARP'
     */
    public set miter_inner(value: 'MITER_SHARP' | 'MITER_ARC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.miter_inner`, value)
    }

    /**
     * Pattern to use for outside of miters
     * @desc enum in ['MITER_SHARP', 'MITER_PATCH', 'MITER_ARC'], default 'MITER_SHARP'
     */
    public set miter_outer(value: 'MITER_SHARP' | 'MITER_PATCH' | 'MITER_ARC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.miter_outer`, value)
    }

    /**
     * What distance Width measures
     * @desc enum in ['OFFSET', 'WIDTH', 'DEPTH', 'PERCENT'], default 'OFFSET'
     */
    public set offset_type(value: 'OFFSET' | 'WIDTH' | 'DEPTH' | 'PERCENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.offset_type`, value)
    }

    /**
     * The profile shape (0.5 = round)
     * @desc float in [0, 1], default 0.0
     */
    public set profile(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.profile`, value)
    }

    /**
     * Number of segments for round edges/verts
     * @desc int in [1, 100], default 0
     */
    public set segments(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.segments`, value)
    }

    /**
     * Spread distance for inner miter arcs
     * @desc float in [0, inf], default 0.0
     */
    public set spread(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spread`, value)
    }

    /**
     * Clamp the width to avoid overlap
     * @desc boolean, default False
     */
    public set use_clamp_overlap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clamp_overlap`, value)
    }

    /**
     * Whether to use a user inputed curve for the bevel’s profile
     * @desc boolean, default False
     */
    public set use_custom_profile(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_profile`, value)
    }

    /**
     * Bevel verts/corners, not edges
     * @desc boolean, default False
     */
    public set use_only_vertices(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_only_vertices`, value)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * The method to use to create the mesh at intersections
     * @desc enum in ['ADJ', 'CUTOFF'], default 'ADJ'
     */
    public set vmesh_method(value: 'ADJ' | 'CUTOFF') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vmesh_method`, value)
    }

    /**
     * Bevel amount
     * @desc float in [0, inf], default 0.0
     */
    public set width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.width`, value)
    }

    /**
     * Bevel amount for percentage method
     * @desc float in [0, inf], default 0.0
     */
    public set width_pct(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.width_pct`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
