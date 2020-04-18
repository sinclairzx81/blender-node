import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeImageEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeImageEditor.html
 */
export class ThemeImageEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGeneric, (readonly, never None)
     */
    public get space(): ThemeSpaceGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGeneric)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get edge_select(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edge_select`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get editmesh_active(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.editmesh_active`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get face(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.face`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get face_back(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.face_back`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get face_dot(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.face_dot`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get face_front(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.face_front`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get face_select(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.face_select`, 'number', 4)
    }

    /**
     * 
     * @desc int in [1, 10], default 0
     */
    public get facedot_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.facedot_size`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get frame_current(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.frame_current`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get freestyle_face_mark(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.freestyle_face_mark`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_align(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_align`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_auto(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_auto`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_auto_clamped(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_auto_clamped`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_free(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_free`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_sel_align(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_sel_align`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_sel_auto(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_sel_auto`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_sel_auto_clamped(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_sel_auto_clamped`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_sel_free(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_sel_free`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_vertex(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_vertex`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_vertex_select(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_vertex_select`, 'number', 3)
    }

    /**
     * 
     * @desc int in [1, 100], default 0
     */
    public get handle_vertex_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.handle_vertex_size`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get metadatabg(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.metadatabg`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get metadatatext(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.metadatatext`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get paint_curve_handle(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.paint_curve_handle`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get paint_curve_pivot(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.paint_curve_pivot`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_stitch_active(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_stitch_active`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_stitch_edge(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_stitch_edge`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_stitch_face(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_stitch_face`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_stitch_stitchable(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_stitch_stitchable`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_stitch_unstitchable(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_stitch_unstitchable`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_stitch_vert(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_stitch_vert`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get scope_back(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scope_back`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get uv_others(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv_others`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get uv_shadow(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv_shadow`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get vertex(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertex`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get vertex_bevel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertex_bevel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get vertex_select(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertex_select`, 'number', 3)
    }

    /**
     * 
     * @desc int in [1, 32], default 0
     */
    public get vertex_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.vertex_size`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get vertex_unreferenced(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertex_unreferenced`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get wire_edit(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.wire_edit`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set edge_select(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edge_select`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set editmesh_active(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.editmesh_active`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set face(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.face`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set face_back(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.face_back`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set face_dot(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.face_dot`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set face_front(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.face_front`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set face_select(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.face_select`, value)
    }

    /**
     * 
     * @desc int in [1, 10], default 0
     */
    public set facedot_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.facedot_size`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set frame_current(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.frame_current`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set freestyle_face_mark(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.freestyle_face_mark`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_align(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_align`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_auto(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_auto`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_auto_clamped(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_auto_clamped`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_free(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_free`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_sel_align(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_sel_align`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_sel_auto(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_sel_auto`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_sel_auto_clamped(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_sel_auto_clamped`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_sel_free(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_sel_free`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_vertex(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_vertex`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_vertex_select(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_vertex_select`, value)
    }

    /**
     * 
     * @desc int in [1, 100], default 0
     */
    public set handle_vertex_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.handle_vertex_size`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set metadatabg(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.metadatabg`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set metadatatext(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.metadatatext`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set paint_curve_handle(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.paint_curve_handle`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set paint_curve_pivot(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.paint_curve_pivot`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_stitch_active(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_stitch_active`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_stitch_edge(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_stitch_edge`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_stitch_face(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_stitch_face`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_stitch_stitchable(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_stitch_stitchable`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_stitch_unstitchable(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_stitch_unstitchable`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_stitch_vert(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_stitch_vert`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set scope_back(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scope_back`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set uv_others(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.uv_others`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set uv_shadow(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.uv_shadow`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set vertex(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertex`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set vertex_bevel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertex_bevel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set vertex_select(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertex_select`, value)
    }

    /**
     * 
     * @desc int in [1, 32], default 0
     */
    public set vertex_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.vertex_size`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set vertex_unreferenced(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertex_unreferenced`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set wire_edit(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.wire_edit`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
