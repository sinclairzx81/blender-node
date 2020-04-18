import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemeFontStyle
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeFontStyle.html
 */
export class ThemeFontStyle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Which style to use for font kerning
     * @desc enum in ['UNFITTED', 'FITTED'], default 'UNFITTED'
     */
    public get font_kerning_style(): 'UNFITTED' | 'FITTED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.font_kerning_style`)
    }

    /**
     * 
     * @desc int in [6, 48], default 0
     */
    public get points(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.points`)
    }

    /**
     * Shadow size (0, 3 and 5 supported)
     * @desc int in [0, 5], default 0
     */
    public get shadow(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadow`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get shadow_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_alpha`)
    }

    /**
     * Shadow offset in pixels
     * @desc int in [-10, 10], default 0
     */
    public get shadow_offset_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadow_offset_x`)
    }

    /**
     * Shadow offset in pixels
     * @desc int in [-10, 10], default 0
     */
    public get shadow_offset_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadow_offset_y`)
    }

    /**
     * Shadow color in gray value
     * @desc float in [0, 1], default 0.0
     */
    public get shadow_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_value`)
    }

    /**
     * Which style to use for font kerning
     * @desc enum in ['UNFITTED', 'FITTED'], default 'UNFITTED'
     */
    public set font_kerning_style(value: 'UNFITTED' | 'FITTED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.font_kerning_style`, value)
    }

    /**
     * 
     * @desc int in [6, 48], default 0
     */
    public set points(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.points`, value)
    }

    /**
     * Shadow size (0, 3 and 5 supported)
     * @desc int in [0, 5], default 0
     */
    public set shadow(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadow`, value)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set shadow_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_alpha`, value)
    }

    /**
     * Shadow offset in pixels
     * @desc int in [-10, 10], default 0
     */
    public set shadow_offset_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadow_offset_x`, value)
    }

    /**
     * Shadow offset in pixels
     * @desc int in [-10, 10], default 0
     */
    public set shadow_offset_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadow_offset_y`, value)
    }

    /**
     * Shadow color in gray value
     * @desc float in [0, 1], default 0.0
     */
    public set shadow_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
