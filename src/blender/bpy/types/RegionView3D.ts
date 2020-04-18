import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * RegionView3D
 * 
 * https://docs.blender.org/api/current/bpy.types.RegionView3D.html
 */
export class RegionView3D {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Current perspective matrix (window_matrix * view_matrix)
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0)), (readonly)
     */
    public get perspective_matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.perspective_matrix`, 'number', 4, 4)
    }

    /**
     * Current window matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0)), (readonly)
     */
    public get window_matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.window_matrix`, 'number', 4, 4)
    }

    /**
     * 
     * @desc float multi-dimensional array of 6 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get clip_planes(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.clip_planes`, 'number', 6, 4)
    }

    /**
     * Is current view an orthographic side view
     * @desc boolean, default False
     */
    public get is_orthographic_side_view(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_orthographic_side_view`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get is_perspective(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_perspective`)
    }

    /**
     * Lock view rotation in side views
     * @desc boolean, default False
     */
    public get lock_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotation`)
    }

    /**
     * Sync view position between side views
     * @desc boolean, default False
     */
    public get show_sync_view(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_sync_view`)
    }

    /**
     * Clip objects based on what’s visible in other side views
     * @desc boolean, default False
     */
    public get use_box_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_box_clip`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_clip_planes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clip_planes`)
    }

    /**
     * View shift in camera view
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get view_camera_offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.view_camera_offset`, 'number', 2)
    }

    /**
     * Zoom factor in camera view
     * @desc float in [-30, 600], default 0.0
     */
    public get view_camera_zoom(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.view_camera_zoom`)
    }

    /**
     * Distance to the view location
     * @desc float in [0, inf], default 0.0
     */
    public get view_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.view_distance`)
    }

    /**
     * View pivot location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get view_location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.view_location`, 'number', 3)
    }

    /**
     * Current view matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get view_matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.view_matrix`, 'number', 4, 4)
    }

    /**
     * View Perspective
     * @desc enum in ['PERSP', 'ORTHO', 'CAMERA'], default 'ORTHO'
     */
    public get view_perspective(): 'PERSP' | 'ORTHO' | 'CAMERA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_perspective`)
    }

    /**
     * Rotation in quaternions (keep normalized)
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get view_rotation(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.view_rotation`, 'number', 4)
    }

    /**
     * 
     * @desc float multi-dimensional array of 6 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set clip_planes(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.clip_planes`, value)
    }

    /**
     * Is current view an orthographic side view
     * @desc boolean, default False
     */
    public set is_orthographic_side_view(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_orthographic_side_view`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set is_perspective(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_perspective`, value)
    }

    /**
     * Lock view rotation in side views
     * @desc boolean, default False
     */
    public set lock_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotation`, value)
    }

    /**
     * Sync view position between side views
     * @desc boolean, default False
     */
    public set show_sync_view(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_sync_view`, value)
    }

    /**
     * Clip objects based on what’s visible in other side views
     * @desc boolean, default False
     */
    public set use_box_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_box_clip`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_clip_planes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clip_planes`, value)
    }

    /**
     * View shift in camera view
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set view_camera_offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.view_camera_offset`, value)
    }

    /**
     * Zoom factor in camera view
     * @desc float in [-30, 600], default 0.0
     */
    public set view_camera_zoom(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.view_camera_zoom`, value)
    }

    /**
     * Distance to the view location
     * @desc float in [0, inf], default 0.0
     */
    public set view_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.view_distance`, value)
    }

    /**
     * View pivot location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set view_location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.view_location`, value)
    }

    /**
     * Current view matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set view_matrix(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.view_matrix`, value)
    }

    /**
     * View Perspective
     * @desc enum in ['PERSP', 'ORTHO', 'CAMERA'], default 'ORTHO'
     */
    public set view_perspective(value: 'PERSP' | 'ORTHO' | 'CAMERA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_perspective`, value)
    }

    /**
     * Rotation in quaternions (keep normalized)
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set view_rotation(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.view_rotation`, value)
    }

    /**
     * Recalculate the view matrices
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
