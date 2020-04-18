import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeSpaceGeneric } from './ThemeSpaceGeneric'

/**
 * ThemeConsole
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeConsole.html
 */
export class ThemeConsole {

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
    public get line_error(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_error`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get line_info(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_info`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get line_input(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_input`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get line_output(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.line_output`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get select(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.select`, 'number', 4)
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
    public set line_error(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_error`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set line_info(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_info`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set line_input(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_input`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set line_output(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.line_output`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set select(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
