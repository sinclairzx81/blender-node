import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * ShrinkwrapModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ShrinkwrapModifier.html
 */
export class ShrinkwrapModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Additional mesh target to shrink to
     * @desc Object
     */
    public get auxiliary_target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.auxiliary_target`, BlenderObject)
    }

    /**
     * Stop vertices from projecting to a face on the target when facing towards/away
     * @desc enum in ['OFF', 'FRONT', 'BACK'], default 'OFF'
     */
    public get cull_face(): 'OFF' | 'FRONT' | 'BACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.cull_face`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Distance to keep from the target
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Limit the distance used for projection (zero disables)
     * @desc float in [0, inf], default 0.0
     */
    public get project_limit(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.project_limit`)
    }

    /**
     * Number of subdivisions that must be performed before extracting vertices’ positions and normals
     * @desc int in [0, 6], default 0
     */
    public get subsurf_levels(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subsurf_levels`)
    }

    /**
     * Mesh target to shrink to
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * When projecting in the negative direction invert the face cull mode
     * @desc boolean, default False
     */
    public get use_invert_cull(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_invert_cull`)
    }

    /**
     * Allow vertices to move in the negative direction of axis
     * @desc boolean, default False
     */
    public get use_negative_direction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_negative_direction`)
    }

    /**
     * Allow vertices to move in the positive direction of axis
     * @desc boolean, default False
     */
    public get use_positive_direction(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_positive_direction`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_project_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_project_x`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_project_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_project_y`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_project_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_project_z`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * 
     * @desc enum in ['NEAREST_SURFACEPOINT', 'PROJECT', 'NEAREST_VERTEX', 'TARGET_PROJECT'], default 'NEAREST_SURFACEPOINT'
     */
    public get wrap_method(): 'NEAREST_SURFACEPOINT' | 'PROJECT' | 'NEAREST_VERTEX' | 'TARGET_PROJECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wrap_method`)
    }

    /**
     * Select how vertices are constrained to the target surface
     * @desc enum in ['ON_SURFACE', 'INSIDE', 'OUTSIDE', 'OUTSIDE_SURFACE', 'ABOVE_SURFACE'], default 'ON_SURFACE'
     */
    public get wrap_mode(): 'ON_SURFACE' | 'INSIDE' | 'OUTSIDE' | 'OUTSIDE_SURFACE' | 'ABOVE_SURFACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wrap_mode`)
    }

    /**
     * Additional mesh target to shrink to
     * @desc Object
     */
    public set auxiliary_target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.auxiliary_target`, value)
    }

    /**
     * Stop vertices from projecting to a face on the target when facing towards/away
     * @desc enum in ['OFF', 'FRONT', 'BACK'], default 'OFF'
     */
    public set cull_face(value: 'OFF' | 'FRONT' | 'BACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.cull_face`, value)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Distance to keep from the target
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Limit the distance used for projection (zero disables)
     * @desc float in [0, inf], default 0.0
     */
    public set project_limit(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.project_limit`, value)
    }

    /**
     * Number of subdivisions that must be performed before extracting vertices’ positions and normals
     * @desc int in [0, 6], default 0
     */
    public set subsurf_levels(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.subsurf_levels`, value)
    }

    /**
     * Mesh target to shrink to
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * When projecting in the negative direction invert the face cull mode
     * @desc boolean, default False
     */
    public set use_invert_cull(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_invert_cull`, value)
    }

    /**
     * Allow vertices to move in the negative direction of axis
     * @desc boolean, default False
     */
    public set use_negative_direction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_negative_direction`, value)
    }

    /**
     * Allow vertices to move in the positive direction of axis
     * @desc boolean, default False
     */
    public set use_positive_direction(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_positive_direction`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_project_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_project_x`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_project_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_project_y`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_project_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_project_z`, value)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * 
     * @desc enum in ['NEAREST_SURFACEPOINT', 'PROJECT', 'NEAREST_VERTEX', 'TARGET_PROJECT'], default 'NEAREST_SURFACEPOINT'
     */
    public set wrap_method(value: 'NEAREST_SURFACEPOINT' | 'PROJECT' | 'NEAREST_VERTEX' | 'TARGET_PROJECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wrap_method`, value)
    }

    /**
     * Select how vertices are constrained to the target surface
     * @desc enum in ['ON_SURFACE', 'INSIDE', 'OUTSIDE', 'OUTSIDE_SURFACE', 'ABOVE_SURFACE'], default 'ON_SURFACE'
     */
    public set wrap_mode(value: 'ON_SURFACE' | 'INSIDE' | 'OUTSIDE' | 'OUTSIDE_SURFACE' | 'ABOVE_SURFACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wrap_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
