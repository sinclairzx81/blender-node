import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemePanelColors
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemePanelColors.html
 */
export class ThemePanelColors {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get back(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.back`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get header(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.header`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get sub_back(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.sub_back`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set back(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.back`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set header(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.header`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set sub_back(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.sub_back`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
