import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeTextEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeTextEditor.html
 */
export class ThemeTextEditor {

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
    public get cursor(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get line_numbers(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_numbers`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get line_numbers_background(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_numbers_background`, 'number', 3)
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
    public get syntax_builtin(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_builtin`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_comment(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_comment`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_numbers(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_numbers`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_preprocessor(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_preprocessor`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_reserved(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_reserved`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_special(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_special`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_string(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_string`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get syntax_symbols(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.syntax_symbols`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set cursor(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set line_numbers(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_numbers`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set line_numbers_background(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_numbers_background`, value)
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
    public set syntax_builtin(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_builtin`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_comment(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_comment`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_numbers(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_numbers`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_preprocessor(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_preprocessor`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_reserved(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_reserved`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_special(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_special`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_string(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_string`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set syntax_symbols(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.syntax_symbols`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
