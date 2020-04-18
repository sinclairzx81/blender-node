import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'
import { ThemeSpaceListGeneric } from './ThemeSpaceListGeneric'

/**
 * ThemeClipEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeClipEditor.html
 */
export class ThemeClipEditor {

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
     * Color of active marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get active_marker(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active_marker`, 'number', 3)
    }

    /**
     * Color of disabled marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get disabled_marker(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.disabled_marker`, 'number', 3)
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
     * Color of locked marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get locked_marker(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.locked_marker`, 'number', 3)
    }

    /**
     * Color of marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get marker(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.marker`, 'number', 3)
    }

    /**
     * Color of marker’s outline
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get marker_outline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.marker_outline`, 'number', 3)
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
     * Color of path after current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get path_after(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.path_after`, 'number', 3)
    }

    /**
     * Color of path before current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get path_before(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.path_before`, 'number', 3)
    }

    /**
     * Color of path after current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get path_keyframe_after(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.path_keyframe_after`, 'number', 3)
    }

    /**
     * Color of path before current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get path_keyframe_before(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.path_keyframe_before`, 'number', 3)
    }

    /**
     * Color of selected marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get selected_marker(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.selected_marker`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get strips(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.strips`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get strips_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.strips_selected`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get time_scrub_background(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.time_scrub_background`, 'number', 4)
    }

    /**
     * Color of active marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set active_marker(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active_marker`, value)
    }

    /**
     * Color of disabled marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set disabled_marker(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.disabled_marker`, value)
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
     * Color of locked marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set locked_marker(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.locked_marker`, value)
    }

    /**
     * Color of marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set marker(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.marker`, value)
    }

    /**
     * Color of marker’s outline
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set marker_outline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.marker_outline`, value)
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
     * Color of path after current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set path_after(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.path_after`, value)
    }

    /**
     * Color of path before current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set path_before(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.path_before`, value)
    }

    /**
     * Color of path after current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set path_keyframe_after(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.path_keyframe_after`, value)
    }

    /**
     * Color of path before current frame
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set path_keyframe_before(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.path_keyframe_before`, value)
    }

    /**
     * Color of selected marker
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set selected_marker(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.selected_marker`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set strips(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.strips`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set strips_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.strips_selected`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set time_scrub_background(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.time_scrub_background`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
