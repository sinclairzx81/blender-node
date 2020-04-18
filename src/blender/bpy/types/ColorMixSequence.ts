import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * ColorMixSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorMixSequence.html
 */
export class ColorMixSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get input_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_count`)
    }

    /**
     * Method for controlling how the strip combines with other strips
     * @desc enum in ['DARKEN', 'MULTIPLY', 'BURN', 'LINEAR_BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'HARD_LIGHT', 'VIVID_LIGHT', 'LINEAR_LIGHT', 'PIN_LIGHT', 'DIFFERENCE', 'EXCLUSION', 'SUBTRACT', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'DARKEN'
     */
    public get blend_effect(): 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LINEAR_BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'HARD_LIGHT' | 'VIVID_LIGHT' | 'LINEAR_LIGHT' | 'PIN_LIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'SUBTRACT' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_effect`)
    }

    /**
     * Percentage of how much the strip’s colors affect other strips
     * @desc float in [0, 1], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public get input_1(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_1`, Sequence)
    }

    /**
     * Second input for the effect strip
     * @desc Sequence, (never None)
     */
    public get input_2(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_2`, Sequence)
    }

    /**
     * Method for controlling how the strip combines with other strips
     * @desc enum in ['DARKEN', 'MULTIPLY', 'BURN', 'LINEAR_BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'HARD_LIGHT', 'VIVID_LIGHT', 'LINEAR_LIGHT', 'PIN_LIGHT', 'DIFFERENCE', 'EXCLUSION', 'SUBTRACT', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'DARKEN'
     */
    public set blend_effect(value: 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LINEAR_BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'HARD_LIGHT' | 'VIVID_LIGHT' | 'LINEAR_LIGHT' | 'PIN_LIGHT' | 'DIFFERENCE' | 'EXCLUSION' | 'SUBTRACT' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_effect`, value)
    }

    /**
     * Percentage of how much the strip’s colors affect other strips
     * @desc float in [0, 1], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public set input_1(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_1`, value)
    }

    /**
     * Second input for the effect strip
     * @desc Sequence, (never None)
     */
    public set input_2(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_2`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
