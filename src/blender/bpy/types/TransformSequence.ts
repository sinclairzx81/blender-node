import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * TransformSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.TransformSequence.html
 */
export class TransformSequence {

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
     * Method to determine how missing pixels are created
     * @desc enum in ['NONE', 'BILINEAR', 'BICUBIC'], default 'NONE'
     */
    public get interpolation(): 'NONE' | 'BILINEAR' | 'BICUBIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Degrees to rotate the input
     * @desc float in [-inf, inf], default 0.0
     */
    public get rotation_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation_start`)
    }

    /**
     * Amount to scale the input in the X axis
     * @desc float in [0, inf], default 0.0
     */
    public get scale_start_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_start_x`)
    }

    /**
     * Amount to scale the input in the Y axis
     * @desc float in [0, inf], default 0.0
     */
    public get scale_start_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_start_y`)
    }

    /**
     * Amount to move the input on the X axis
     * @desc float in [-inf, inf], default 0.0
     */
    public get translate_start_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.translate_start_x`)
    }

    /**
     * Amount to move the input on the Y axis
     * @desc float in [-inf, inf], default 0.0
     */
    public get translate_start_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.translate_start_y`)
    }

    /**
     * Unit of measure to translate the input
     * @desc enum in ['PIXELS', 'PERCENT'], default 'PIXELS'
     */
    public get translation_unit(): 'PIXELS' | 'PERCENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.translation_unit`)
    }

    /**
     * Scale uniformly, preserving aspect ratio
     * @desc boolean, default False
     */
    public get use_uniform_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_uniform_scale`)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public set input_1(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_1`, value)
    }

    /**
     * Method to determine how missing pixels are created
     * @desc enum in ['NONE', 'BILINEAR', 'BICUBIC'], default 'NONE'
     */
    public set interpolation(value: 'NONE' | 'BILINEAR' | 'BICUBIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Degrees to rotate the input
     * @desc float in [-inf, inf], default 0.0
     */
    public set rotation_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation_start`, value)
    }

    /**
     * Amount to scale the input in the X axis
     * @desc float in [0, inf], default 0.0
     */
    public set scale_start_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_start_x`, value)
    }

    /**
     * Amount to scale the input in the Y axis
     * @desc float in [0, inf], default 0.0
     */
    public set scale_start_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_start_y`, value)
    }

    /**
     * Amount to move the input on the X axis
     * @desc float in [-inf, inf], default 0.0
     */
    public set translate_start_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.translate_start_x`, value)
    }

    /**
     * Amount to move the input on the Y axis
     * @desc float in [-inf, inf], default 0.0
     */
    public set translate_start_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.translate_start_y`, value)
    }

    /**
     * Unit of measure to translate the input
     * @desc enum in ['PIXELS', 'PERCENT'], default 'PIXELS'
     */
    public set translation_unit(value: 'PIXELS' | 'PERCENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.translation_unit`, value)
    }

    /**
     * Scale uniformly, preserving aspect ratio
     * @desc boolean, default False
     */
    public set use_uniform_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_uniform_scale`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
