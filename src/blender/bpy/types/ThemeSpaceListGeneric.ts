import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemeSpaceListGeneric
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeSpaceListGeneric.html
 */
export class ThemeSpaceListGeneric {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get list(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.list`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get list_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.list_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get list_text_hi(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.list_text_hi`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get list_title(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.list_title`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set list(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.list`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set list_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.list_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set list_text_hi(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.list_text_hi`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set list_title(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.list_title`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
