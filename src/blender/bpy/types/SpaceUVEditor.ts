import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SpaceUVEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceUVEditor.html
 */
export class SpaceUVEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of stretch to draw
     * @desc enum in ['ANGLE', 'AREA'], default 'ANGLE'
     */
    public get display_stretch_type(): 'ANGLE' | 'AREA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_stretch_type`)
    }

    /**
     * Display style for UV edges
     * @desc enum in ['OUTLINE', 'DASH', 'BLACK', 'WHITE'], default 'OUTLINE'
     */
    public get edge_display_type(): 'OUTLINE' | 'DASH' | 'BLACK' | 'WHITE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.edge_display_type`)
    }

    /**
     * Constraint to stay within the image bounds while editing
     * @desc boolean, default False
     */
    public get lock_bounds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_bounds`)
    }

    /**
     * Snap UVs to pixels while editing
     * @desc enum in ['DISABLED', 'CORNER', 'CENTER'], default 'DISABLED'
     */
    public get pixel_snap_mode(): 'DISABLED' | 'CORNER' | 'CENTER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pixel_snap_mode`)
    }

    /**
     * Display faces over the image
     * @desc boolean, default False
     */
    public get show_faces(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_faces`)
    }

    /**
     * Display metadata properties of the image
     * @desc boolean, default False
     */
    public get show_metadata(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_metadata`)
    }

    /**
     * Display edges after modifiers are applied
     * @desc boolean, default False
     */
    public get show_modified_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_modified_edges`)
    }

    /**
     * Display UV coordinates in pixels rather than from 0.0 to 1.0
     * @desc boolean, default False
     */
    public get show_pixel_coords(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_pixel_coords`)
    }

    /**
     * Display UV edges anti-aliased
     * @desc boolean, default False
     */
    public get show_smooth_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_smooth_edges`)
    }

    /**
     * Display faces colored according to the difference in shape between UVs and their 3D coordinates (blue for low distortion, red for high distortion)
     * @desc boolean, default False
     */
    public get show_stretch(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stretch`)
    }

    /**
     * Display overlay of texture paint uv layer
     * @desc boolean, default False
     */
    public get show_texpaint(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_texpaint`)
    }

    /**
     * Automatically select also UVs sharing the same vertex as the ones being selected
     * @desc enum in ['DISABLED', 'SHARED_LOCATION', 'SHARED_VERTEX'], default 'SHARED_LOCATION'
     */
    public get sticky_select_mode(): 'DISABLED' | 'SHARED_LOCATION' | 'SHARED_VERTEX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sticky_select_mode`)
    }

    /**
     * How many tiles will be shown in the background
     * @desc int array of 2 items in [1, 10], default (1, 1)
     */
    public get tile_grid_shape(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tile_grid_shape`, 'number', 2)
    }

    /**
     * Continuously unwrap the selected UV island while transforming pinned vertices
     * @desc boolean, default False
     */
    public get use_live_unwrap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_live_unwrap`)
    }

    /**
     * Type of stretch to draw
     * @desc enum in ['ANGLE', 'AREA'], default 'ANGLE'
     */
    public set display_stretch_type(value: 'ANGLE' | 'AREA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_stretch_type`, value)
    }

    /**
     * Display style for UV edges
     * @desc enum in ['OUTLINE', 'DASH', 'BLACK', 'WHITE'], default 'OUTLINE'
     */
    public set edge_display_type(value: 'OUTLINE' | 'DASH' | 'BLACK' | 'WHITE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.edge_display_type`, value)
    }

    /**
     * Constraint to stay within the image bounds while editing
     * @desc boolean, default False
     */
    public set lock_bounds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_bounds`, value)
    }

    /**
     * Snap UVs to pixels while editing
     * @desc enum in ['DISABLED', 'CORNER', 'CENTER'], default 'DISABLED'
     */
    public set pixel_snap_mode(value: 'DISABLED' | 'CORNER' | 'CENTER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pixel_snap_mode`, value)
    }

    /**
     * Display faces over the image
     * @desc boolean, default False
     */
    public set show_faces(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_faces`, value)
    }

    /**
     * Display metadata properties of the image
     * @desc boolean, default False
     */
    public set show_metadata(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_metadata`, value)
    }

    /**
     * Display edges after modifiers are applied
     * @desc boolean, default False
     */
    public set show_modified_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_modified_edges`, value)
    }

    /**
     * Display UV coordinates in pixels rather than from 0.0 to 1.0
     * @desc boolean, default False
     */
    public set show_pixel_coords(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_pixel_coords`, value)
    }

    /**
     * Display UV edges anti-aliased
     * @desc boolean, default False
     */
    public set show_smooth_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_smooth_edges`, value)
    }

    /**
     * Display faces colored according to the difference in shape between UVs and their 3D coordinates (blue for low distortion, red for high distortion)
     * @desc boolean, default False
     */
    public set show_stretch(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stretch`, value)
    }

    /**
     * Display overlay of texture paint uv layer
     * @desc boolean, default False
     */
    public set show_texpaint(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_texpaint`, value)
    }

    /**
     * Automatically select also UVs sharing the same vertex as the ones being selected
     * @desc enum in ['DISABLED', 'SHARED_LOCATION', 'SHARED_VERTEX'], default 'SHARED_LOCATION'
     */
    public set sticky_select_mode(value: 'DISABLED' | 'SHARED_LOCATION' | 'SHARED_VERTEX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sticky_select_mode`, value)
    }

    /**
     * How many tiles will be shown in the background
     * @desc int array of 2 items in [1, 10], default (1, 1)
     */
    public set tile_grid_shape(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tile_grid_shape`, value)
    }

    /**
     * Continuously unwrap the selected UV island while transforming pinned vertices
     * @desc boolean, default False
     */
    public set use_live_unwrap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_live_unwrap`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
