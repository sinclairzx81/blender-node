import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * SpeedControlSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.SpeedControlSequence.html
 */
export class SpeedControlSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get input_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_count`)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public get input_1(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_1`, Sequence)
    }

    /**
     * Multiply the resulting speed after the speed factor
     * @desc float in [0, inf], default 0.0
     */
    public get multiply_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.multiply_speed`)
    }

    /**
     * Interpret the value as speed instead of a frame number
     * @desc boolean, default False
     */
    public get use_as_speed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_as_speed`)
    }

    /**
     * Scale values from 0.0 to 1.0 to target sequence length
     * @desc boolean, default False
     */
    public get use_scale_to_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scale_to_length`)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public set input_1(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_1`, value)
    }

    /**
     * Multiply the resulting speed after the speed factor
     * @desc float in [0, inf], default 0.0
     */
    public set multiply_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.multiply_speed`, value)
    }

    /**
     * Interpret the value as speed instead of a frame number
     * @desc boolean, default False
     */
    public set use_as_speed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_as_speed`, value)
    }

    /**
     * Scale values from 0.0 to 1.0 to target sequence length
     * @desc boolean, default False
     */
    public set use_scale_to_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scale_to_length`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
