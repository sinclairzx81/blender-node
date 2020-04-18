import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxRim
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxRim.html
 */
export class ShaderFxRim {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of pixels for blurring rim (set to 0 to disable)
     * @desc int array of 2 items in [0, 32767], default (0, 0)
     */
    public get blur(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.blur`, 'number', 2)
    }

    /**
     * Color that must be kept
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get mask_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.mask_color`, 'number', 3)
    }

    /**
     * Blend mode
     * @desc enum in ['NORMAL', 'OVERLAY', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'], default 'NORMAL'
     */
    public get mode(): 'NORMAL' | 'OVERLAY' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Offset of the rim
     * @desc int array of 2 items in [-32768, 32767], default (0, 0)
     */
    public get offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 2)
    }

    /**
     * Color used for Rim
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get rim_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rim_color`, 'number', 3)
    }

    /**
     * Number of Blur Samples (zero, disable blur)
     * @desc int in [0, 32], default 4
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Number of pixels for blurring rim (set to 0 to disable)
     * @desc int array of 2 items in [0, 32767], default (0, 0)
     */
    public set blur(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.blur`, value)
    }

    /**
     * Color that must be kept
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set mask_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.mask_color`, value)
    }

    /**
     * Blend mode
     * @desc enum in ['NORMAL', 'OVERLAY', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'], default 'NORMAL'
     */
    public set mode(value: 'NORMAL' | 'OVERLAY' | 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Offset of the rim
     * @desc int array of 2 items in [-32768, 32767], default (0, 0)
     */
    public set offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Color used for Rim
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set rim_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rim_color`, value)
    }

    /**
     * Number of Blur Samples (zero, disable blur)
     * @desc int in [0, 32], default 4
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
