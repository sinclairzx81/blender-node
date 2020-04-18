import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'
import { ThemeSpaceListGeneric } from './ThemeSpaceListGeneric'

/**
 * ThemeGraphEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeGraphEditor.html
 */
export class ThemeGraphEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for space
     * @desc ThemeSpaceGeneric, (readonly, never None)
     */
    public get space(): ThemeSpaceGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space`, ThemeSpaceGeneric)
    }

    /**
     * Settings for space list
     * @desc ThemeSpaceListGeneric, (readonly, never None)
     */
    public get space_list(): ThemeSpaceListGeneric {
        return PythonInterop.getClass(this.interop, `${this.accessor}.space_list`, ThemeSpaceListGeneric)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get active_channels_group(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active_channels_group`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get channel_group(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.channel_group`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get channels_region(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.channels_region`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get dopesheet_channel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.dopesheet_channel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get dopesheet_subchannel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.dopesheet_subchannel`, 'number', 3)
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
    public get grid(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.grid`, 'number', 3)
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
    public get lastsel_point(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lastsel_point`, 'number', 3)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get preview_range(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.preview_range`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get time_scrub_background(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.time_scrub_background`, 'number', 4)
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
    public get window_sliders(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.window_sliders`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set active_channels_group(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active_channels_group`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set channel_group(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.channel_group`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set channels_region(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.channels_region`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set dopesheet_channel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.dopesheet_channel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set dopesheet_subchannel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.dopesheet_subchannel`, value)
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
    public set grid(value: [number, number, number]) {
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
    public set lastsel_point(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lastsel_point`, value)
    }

    /**
     * Color of preview range overlay
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set preview_range(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.preview_range`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set time_scrub_background(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.time_scrub_background`, value)
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
    public set window_sliders(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.window_sliders`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
