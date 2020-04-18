import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'
import { VectorFont } from './VectorFont'

/**
 * TextSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.TextSequence.html
 */
export class TextSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get input_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_count`)
    }

    /**
     * Align the text along the X axis, relative to the text bounds
     * @desc enum in ['LEFT', 'CENTER', 'RIGHT'], default 'LEFT'
     */
    public get align_x(): 'LEFT' | 'CENTER' | 'RIGHT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.align_x`)
    }

    /**
     * Align the text along the Y axis, relative to the text bounds
     * @desc enum in ['TOP', 'CENTER', 'BOTTOM'], default 'TOP'
     */
    public get align_y(): 'TOP' | 'CENTER' | 'BOTTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.align_y`)
    }

    /**
     * Text color
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 4)
    }

    /**
     * Font of the text. Falls back to the UI font by default
     * @desc VectorFont
     */
    public get font(): VectorFont {
        return PythonInterop.getClass(this.interop, `${this.accessor}.font`, VectorFont)
    }

    /**
     * Size of the text
     * @desc int in [0, 2000], default 0
     */
    public get font_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.font_size`)
    }

    /**
     * Location of the text
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get location(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 2)
    }

    /**
     * 
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get shadow_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.shadow_color`, 'number', 4)
    }

    /**
     * Text that will be displayed
     * @desc string, default '', (never None)
     */
    public get text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.text`)
    }

    /**
     * Display shadow behind text
     * @desc boolean, default False
     */
    public get use_shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_shadow`)
    }

    /**
     * Word wrap width as factor, zero disables
     * @desc float in [0, inf], default 0.0
     */
    public get wrap_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wrap_width`)
    }

    /**
     * Align the text along the X axis, relative to the text bounds
     * @desc enum in ['LEFT', 'CENTER', 'RIGHT'], default 'LEFT'
     */
    public set align_x(value: 'LEFT' | 'CENTER' | 'RIGHT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.align_x`, value)
    }

    /**
     * Align the text along the Y axis, relative to the text bounds
     * @desc enum in ['TOP', 'CENTER', 'BOTTOM'], default 'TOP'
     */
    public set align_y(value: 'TOP' | 'CENTER' | 'BOTTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.align_y`, value)
    }

    /**
     * Text color
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Font of the text. Falls back to the UI font by default
     * @desc VectorFont
     */
    public set font(value: VectorFont) {
        PythonInterop.setClass(this.interop, `${this.accessor}.font`, value)
    }

    /**
     * Size of the text
     * @desc int in [0, 2000], default 0
     */
    public set font_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.font_size`, value)
    }

    /**
     * Location of the text
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set location(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * 
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set shadow_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.shadow_color`, value)
    }

    /**
     * Text that will be displayed
     * @desc string, default '', (never None)
     */
    public set text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.text`, value)
    }

    /**
     * Display shadow behind text
     * @desc boolean, default False
     */
    public set use_shadow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_shadow`, value)
    }

    /**
     * Word wrap width as factor, zero disables
     * @desc float in [0, inf], default 0.0
     */
    public set wrap_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wrap_width`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
