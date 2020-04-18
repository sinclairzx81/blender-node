import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GPencilSculptBrush
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilSculptBrush.html
 */
export class GPencilSculptBrush {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color for the cursor for addition
     * @desc float array of 3 items in [0, 1], default (1.0, 0.6, 0.6)
     */
    public get cursor_color_add(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor_color_add`, 'number', 3)
    }

    /**
     * Color for the cursor for subtraction
     * @desc float array of 3 items in [0, 1], default (0.6, 0.6, 1.0)
     */
    public get cursor_color_sub(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor_color_sub`, 'number', 3)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT'], default 'ADD'
     */
    public get direction(): 'ADD' | 'SUBTRACT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.direction`)
    }

    /**
     * Radius of the brush in pixels
     * @desc int in [1, 1000], default 0
     */
    public get size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size`)
    }

    /**
     * Brush strength
     * @desc float in [0.001, 1], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Enable cursor on screen
     * @desc boolean, default True
     */
    public get use_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cursor`)
    }

    /**
     * Affect pressure values as well when smoothing strokes
     * @desc boolean, default False
     */
    public get use_edit_pressure(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_pressure`)
    }

    /**
     * Strength of brush decays with distance from cursor
     * @desc boolean, default False
     */
    public get use_falloff(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_falloff`)
    }

    /**
     * Enable tablet pressure sensitivity for radius
     * @desc boolean, default False
     */
    public get use_pressure_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_radius`)
    }

    /**
     * Enable tablet pressure sensitivity for strength
     * @desc boolean, default False
     */
    public get use_pressure_strength(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pressure_strength`)
    }

    /**
     * Target weight (define a maximum range limit for the weight. Any value above will be clamped)
     * @desc float in [0, 1], default 0.0
     */
    public get weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight`)
    }

    /**
     * Color for the cursor for addition
     * @desc float array of 3 items in [0, 1], default (1.0, 0.6, 0.6)
     */
    public set cursor_color_add(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor_color_add`, value)
    }

    /**
     * Color for the cursor for subtraction
     * @desc float array of 3 items in [0, 1], default (0.6, 0.6, 1.0)
     */
    public set cursor_color_sub(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor_color_sub`, value)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT'], default 'ADD'
     */
    public set direction(value: 'ADD' | 'SUBTRACT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.direction`, value)
    }

    /**
     * Radius of the brush in pixels
     * @desc int in [1, 1000], default 0
     */
    public set size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Brush strength
     * @desc float in [0.001, 1], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Enable cursor on screen
     * @desc boolean, default True
     */
    public set use_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cursor`, value)
    }

    /**
     * Affect pressure values as well when smoothing strokes
     * @desc boolean, default False
     */
    public set use_edit_pressure(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_pressure`, value)
    }

    /**
     * Strength of brush decays with distance from cursor
     * @desc boolean, default False
     */
    public set use_falloff(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_falloff`, value)
    }

    /**
     * Enable tablet pressure sensitivity for radius
     * @desc boolean, default False
     */
    public set use_pressure_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_radius`, value)
    }

    /**
     * Enable tablet pressure sensitivity for strength
     * @desc boolean, default False
     */
    public set use_pressure_strength(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pressure_strength`, value)
    }

    /**
     * Target weight (define a maximum range limit for the weight. Any value above will be clamped)
     * @desc float in [0, 1], default 0.0
     */
    public set weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
