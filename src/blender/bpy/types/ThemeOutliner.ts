import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeOutliner
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeOutliner.html
 */
export class ThemeOutliner {

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
    public get active(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get active_object(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active_object`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get edited_object(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.edited_object`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get match(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.match`, 'number', 3)
    }

    /**
     * Overlay color on every other row
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get row_alternate(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.row_alternate`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get selected_highlight(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.selected_highlight`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get selected_object(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.selected_object`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set active(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set active_object(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active_object`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set edited_object(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.edited_object`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set match(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.match`, value)
    }

    /**
     * Overlay color on every other row
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set row_alternate(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.row_alternate`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set selected_highlight(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.selected_highlight`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set selected_object(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.selected_object`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
