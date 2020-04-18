import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemePanelColors } from './ThemePanelColors'

/**
 * ThemeSpaceGeneric
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeSpaceGeneric.html
 */
export class ThemeSpaceGeneric {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ThemePanelColors, (readonly, never None)
     */
    public get panelcolors(): ThemePanelColors {
        return PythonInterop.getClass(this.interop, `${this.accessor}.panelcolors`, ThemePanelColors)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get back(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.back`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get button(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.button`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get button_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.button_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get button_text_hi(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.button_text_hi`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get button_title(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.button_title`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get execution_buts(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.execution_buts`, 'number', 4)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get header_text(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.header_text`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get header_text_hi(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.header_text_hi`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get navigation_bar(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.navigation_bar`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get tab_active(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tab_active`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get tab_back(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tab_back`, 'number', 4)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get tab_inactive(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tab_inactive`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get tab_outline(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tab_outline`, 'number', 3)
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
    public get text_hi(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.text_hi`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get title(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.title`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set back(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.back`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set button(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.button`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set button_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.button_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set button_text_hi(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.button_text_hi`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set button_title(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.button_title`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set execution_buts(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.execution_buts`, value)
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
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set header_text(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.header_text`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set header_text_hi(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.header_text_hi`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set navigation_bar(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.navigation_bar`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set tab_active(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tab_active`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set tab_back(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tab_back`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set tab_inactive(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tab_inactive`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set tab_outline(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.tab_outline`, value)
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
    public set text_hi(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.text_hi`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set title(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.title`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
