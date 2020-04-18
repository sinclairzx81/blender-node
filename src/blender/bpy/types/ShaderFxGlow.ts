import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxGlow
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxGlow.html
 */
export class ShaderFxGlow {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color used for generated glow
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get glow_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.glow_color`, 'number', 3)
    }

    /**
     * Glow mode
     * @desc enum in ['LUMINANCE', 'COLOR'], default 'LUMINANCE'
     */
    public get mode(): 'LUMINANCE' | 'COLOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Number of pixels for blurring glow (set to 0 to disable)
     * @desc int in [0, 32767], default 0
     */
    public get radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Number of Blur Samples
     * @desc int in [1, 32], default 4
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Color selected to apply glow
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get select_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.select_color`, 'number', 3)
    }

    /**
     * Limit to select color for glow effect
     * @desc float in [0, 1], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Glow only areas with alpha
     * @desc boolean, default False
     */
    public get use_alpha_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha_mode`)
    }

    /**
     * Color used for generated glow
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set glow_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.glow_color`, value)
    }

    /**
     * Glow mode
     * @desc enum in ['LUMINANCE', 'COLOR'], default 'LUMINANCE'
     */
    public set mode(value: 'LUMINANCE' | 'COLOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Number of pixels for blurring glow (set to 0 to disable)
     * @desc int in [0, 32767], default 0
     */
    public set radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Number of Blur Samples
     * @desc int in [1, 32], default 4
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Color selected to apply glow
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set select_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.select_color`, value)
    }

    /**
     * Limit to select color for glow effect
     * @desc float in [0, 1], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Glow only areas with alpha
     * @desc boolean, default False
     */
    public set use_alpha_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
