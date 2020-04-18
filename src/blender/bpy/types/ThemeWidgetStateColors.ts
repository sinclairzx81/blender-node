import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemeWidgetStateColors
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeWidgetStateColors.html
 */
export class ThemeWidgetStateColors {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get blend(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_anim(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_anim`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_anim_sel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_anim_sel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_changed(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_changed`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_changed_sel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_changed_sel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_driven(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_driven`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_driven_sel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_driven_sel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_key(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_key`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_key_sel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_key_sel`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_overridden(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_overridden`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get inner_overridden_sel(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.inner_overridden_sel`, 'number', 3)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set blend(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_anim(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_anim`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_anim_sel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_anim_sel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_changed(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_changed`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_changed_sel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_changed_sel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_driven(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_driven`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_driven_sel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_driven_sel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_key(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_key`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_key_sel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_key_sel`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_overridden(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_overridden`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set inner_overridden_sel(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.inner_overridden_sel`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
