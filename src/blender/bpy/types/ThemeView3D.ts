import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGradient } from './ThemeSpaceGradient'

/**
 * ThemeView3D
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeView3D.html
 */
export class ThemeView3D {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGradient, (readonly, never None)
     */
    public get space(): ThemeSpaceGradient {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGradient)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get act_spline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.act_spline`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get bone_pose(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bone_pose`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get bone_pose_active(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bone_pose_active`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get bone_solid(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bone_solid`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get bundle_solid(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bundle_solid`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get camera(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.camera`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get camera_path(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.camera_path`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get clipping_border_3d(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.clipping_border_3d`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get edge_bevel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edge_bevel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get edge_crease(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edge_crease`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get edge_facesel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edge_facesel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get edge_seam(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edge_seam`, 'number', 3)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get edge_sharp(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edge_sharp`, 'number', 3)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get empty(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.empty`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get extra_edge_angle(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.extra_edge_angle`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get extra_edge_len(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.extra_edge_len`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get extra_face_angle(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.extra_face_angle`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get extra_face_area(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.extra_face_area`, 'number', 3)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get freestyle_edge_mark(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.freestyle_edge_mark`, 'number', 3)
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
    public get gp_vertex(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gp_vertex`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gp_vertex_select(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gp_vertex_select`, 'number', 3)
    }

    /**
     * 
     * @desc int in [1, 10], default 0
     */
    public get gp_vertex_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.gp_vertex_size`)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get grid(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.grid`, 'number', 4)
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
    public get handle_sel_free(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_sel_free`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_sel_vect(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_sel_vect`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get handle_vect(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.handle_vect`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get lastsel_point(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lastsel_point`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get light(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.light`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get nurb_sel_uline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.nurb_sel_uline`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get nurb_sel_vline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.nurb_sel_vline`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get nurb_uline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.nurb_uline`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get nurb_vline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.nurb_vline`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get object_active(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.object_active`, 'number', 3)
    }

    /**
     * Diameter in Pixels for Object/Light origin display
     * @desc int in [4, 10], default 0
     */
    public get object_origin_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.object_origin_size`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get object_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.object_selected`, 'number', 3)
    }

    /**
     * 
     * @desc int in [1, 5], default 0
     */
    public get outline_width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.outline_width`)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get skin_root(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.skin_root`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get speaker(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.speaker`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get split_normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.split_normal`, 'number', 3)
    }

    /**
     * Color for indicating Grease Pencil keyframes
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get text_grease_pencil(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.text_grease_pencil`, 'number', 3)
    }

    /**
     * Color for indicating Object keyframes
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get text_keyframe(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.text_keyframe`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get transform(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.transform`, 'number', 3)
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
    public get vertex_normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertex_normal`, 'number', 3)
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
    public get view_overlay(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.view_overlay`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get wire(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.wire`, 'number', 3)
    }

    /**
     * Color for wireframe when in edit mode, but edge selection is active
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get wire_edit(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.wire_edit`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set act_spline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.act_spline`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set bone_pose(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.bone_pose`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set bone_pose_active(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.bone_pose_active`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set bone_solid(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.bone_solid`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set bundle_solid(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.bundle_solid`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set camera(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.camera`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set camera_path(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.camera_path`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set clipping_border_3d(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.clipping_border_3d`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set edge_bevel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edge_bevel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set edge_crease(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edge_crease`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set edge_facesel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edge_facesel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set edge_seam(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edge_seam`, value)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set edge_sharp(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edge_sharp`, value)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set empty(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.empty`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set extra_edge_angle(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.extra_edge_angle`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set extra_edge_len(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.extra_edge_len`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set extra_face_angle(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.extra_face_angle`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set extra_face_area(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.extra_face_area`, value)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set freestyle_edge_mark(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.freestyle_edge_mark`, value)
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
    public set gp_vertex(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gp_vertex`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gp_vertex_select(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gp_vertex_select`, value)
    }

    /**
     * 
     * @desc int in [1, 10], default 0
     */
    public set gp_vertex_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.gp_vertex_size`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set grid(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.grid`, value)
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
    public set handle_sel_free(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_sel_free`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_sel_vect(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_sel_vect`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set handle_vect(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.handle_vect`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set lastsel_point(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lastsel_point`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set light(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.light`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set normal(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.normal`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set nurb_sel_uline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.nurb_sel_uline`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set nurb_sel_vline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.nurb_sel_vline`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set nurb_uline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.nurb_uline`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set nurb_vline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.nurb_vline`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set object_active(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.object_active`, value)
    }

    /**
     * Diameter in Pixels for Object/Light origin display
     * @desc int in [4, 10], default 0
     */
    public set object_origin_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.object_origin_size`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set object_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.object_selected`, value)
    }

    /**
     * 
     * @desc int in [1, 5], default 0
     */
    public set outline_width(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.outline_width`, value)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set skin_root(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.skin_root`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set speaker(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.speaker`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set split_normal(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.split_normal`, value)
    }

    /**
     * Color for indicating Grease Pencil keyframes
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set text_grease_pencil(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.text_grease_pencil`, value)
    }

    /**
     * Color for indicating Object keyframes
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set text_keyframe(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.text_keyframe`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set transform(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.transform`, value)
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
    public set vertex_normal(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertex_normal`, value)
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
    public set view_overlay(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.view_overlay`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set wire(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.wire`, value)
    }

    /**
     * Color for wireframe when in edit mode, but edge selection is active
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set wire_edit(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.wire_edit`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
