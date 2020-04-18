import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemeWidgetColors
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeWidgetColors.html
 */
export class ThemeWidgetColors {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get inner(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get inner_sel(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_sel`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get item(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.item`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get outline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.outline`, 'number', 3)
    }

    /**
     * Amount of edge rounding
     * @desc float in [0, 1], default 0.0
     */
    public get roundness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.roundness`)
    }

    /**
     * 
     * @desc int in [-100, 100], default 0
     */
    public get shadedown(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadedown`)
    }

    /**
     * 
     * @desc int in [-100, 100], default 0
     */
    public get shadetop(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadetop`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_shaded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_shaded`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get text_sel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.text_sel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set inner(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set inner_sel(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_sel`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set item(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.item`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set outline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.outline`, value)
    }

    /**
     * Amount of edge rounding
     * @desc float in [0, 1], default 0.0
     */
    public set roundness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.roundness`, value)
    }

    /**
     * 
     * @desc int in [-100, 100], default 0
     */
    public set shadedown(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadedown`, value)
    }

    /**
     * 
     * @desc int in [-100, 100], default 0
     */
    public set shadetop(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadetop`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_shaded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_shaded`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set text_sel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.text_sel`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
