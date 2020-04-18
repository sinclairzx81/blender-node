import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeInfo
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeInfo.html
 */
export class ThemeInfo {

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
    public get info_debug(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_debug`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_debug_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_debug_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_error(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_error`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_error_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_error_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_info(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_info`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_info_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_info_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_selected(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_selected`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_selected_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_selected_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_warning(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_warning`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get info_warning_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.info_warning_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_debug(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_debug`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_debug_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_debug_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_error(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_error`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_error_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_error_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_info(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_info`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_info_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_info_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_selected(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_selected`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_selected_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_selected_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_warning(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_warning`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set info_warning_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.info_warning_text`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
