import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'
import { ThemeSpaceListGeneric } from './ThemeSpaceListGeneric'

/**
 * ThemeNodeEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeNodeEditor.html
 */
export class ThemeNodeEditor {

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
    public get color_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get converter_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.converter_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get distor_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.distor_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get filter_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.filter_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get frame_node(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.frame_node`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get group_node(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.group_node`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get group_socket_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.group_socket_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get input_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.input_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get layout_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.layout_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get matte_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.matte_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get node_active(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.node_active`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get node_backdrop(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.node_backdrop`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get node_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.node_selected`, 'number', 3)
    }

    /**
     * Curving of the noodle
     * @desc int in [0, 10], default 5
     */
    public get noodle_curving(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.noodle_curving`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get output_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.output_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get pattern_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.pattern_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get script_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.script_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get selected_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.selected_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get shader_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.shader_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get texture_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texture_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get vector_node(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vector_node`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get wire(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.wire`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get wire_inner(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.wire_inner`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get wire_select(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.wire_select`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set color_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set converter_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.converter_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set distor_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.distor_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set filter_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.filter_node`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set frame_node(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.frame_node`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set group_node(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.group_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set group_socket_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.group_socket_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set input_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.input_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set layout_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.layout_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set matte_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.matte_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set node_active(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.node_active`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set node_backdrop(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.node_backdrop`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set node_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.node_selected`, value)
    }

    /**
     * Curving of the noodle
     * @desc int in [0, 10], default 5
     */
    public set noodle_curving(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.noodle_curving`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set output_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.output_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set pattern_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.pattern_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set script_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.script_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set selected_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.selected_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set shader_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.shader_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set texture_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texture_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set vector_node(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vector_node`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set wire(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.wire`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set wire_inner(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.wire_inner`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set wire_select(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.wire_select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
