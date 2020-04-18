import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ColorRamp } from './ColorRamp'

/**
 * ColorMapping
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorMapping.html
 */
export class ColorMapping {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ColorRamp, (readonly)
     */
    public get color_ramp(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_ramp`, ColorRamp)
    }

    /**
     * Blend color to mix with texture output color
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get blend_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.blend_color`, 'number', 3)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get blend_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blend_factor`)
    }

    /**
     * Mode used to mix with texture output color
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'LIGHTEN', 'SCREEN', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public get blend_type(): 'MIX' | 'DARKEN' | 'MULTIPLY' | 'LIGHTEN' | 'SCREEN' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_type`)
    }

    /**
     * Adjust the brightness of the texture
     * @desc float in [0, 2], default 0.0
     */
    public get brightness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.brightness`)
    }

    /**
     * Adjust the contrast of the texture
     * @desc float in [0, 5], default 0.0
     */
    public get contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contrast`)
    }

    /**
     * Adjust the saturation of colors in the texture
     * @desc float in [0, 2], default 0.0
     */
    public get saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.saturation`)
    }

    /**
     * Toggle color ramp operations
     * @desc boolean, default False
     */
    public get use_color_ramp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_color_ramp`)
    }

    /**
     * Blend color to mix with texture output color
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set blend_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.blend_color`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set blend_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blend_factor`, value)
    }

    /**
     * Mode used to mix with texture output color
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'LIGHTEN', 'SCREEN', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public set blend_type(value: 'MIX' | 'DARKEN' | 'MULTIPLY' | 'LIGHTEN' | 'SCREEN' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_type`, value)
    }

    /**
     * Adjust the brightness of the texture
     * @desc float in [0, 2], default 0.0
     */
    public set brightness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.brightness`, value)
    }

    /**
     * Adjust the contrast of the texture
     * @desc float in [0, 5], default 0.0
     */
    public set contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contrast`, value)
    }

    /**
     * Adjust the saturation of colors in the texture
     * @desc float in [0, 2], default 0.0
     */
    public set saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.saturation`, value)
    }

    /**
     * Toggle color ramp operations
     * @desc boolean, default False
     */
    public set use_color_ramp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_color_ramp`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
