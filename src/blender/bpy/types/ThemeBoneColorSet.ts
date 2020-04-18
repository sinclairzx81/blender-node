import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemeBoneColorSet
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeBoneColorSet.html
 */
export class ThemeBoneColorSet {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color used for active bones
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get active(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.active`, 'number', 3)
    }

    /**
     * Color used for the surface of bones
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal`, 'number', 3)
    }

    /**
     * Color used for selected bones
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get select(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.select`, 'number', 3)
    }

    /**
     * Allow the use of colors indicating constraints/keyed status
     * @desc boolean, default False
     */
    public get show_colored_constraints(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_colored_constraints`)
    }

    /**
     * Color used for active bones
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set active(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Color used for the surface of bones
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set normal(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.normal`, value)
    }

    /**
     * Color used for selected bones
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set select(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Allow the use of colors indicating constraints/keyed status
     * @desc boolean, default False
     */
    public set show_colored_constraints(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_colored_constraints`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
