import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * WipeSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.WipeSequence.html
 */
export class WipeSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get input_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_count`)
    }

    /**
     * Edge angle
     * @desc float in [-1.5708, 1.5708], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Width of the blur edge, in percentage relative to the image size
     * @desc float in [0, 1], default 0.0
     */
    public get blur_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blur_width`)
    }

    /**
     * Wipe direction
     * @desc enum in ['OUT', 'IN'], default 'OUT'
     */
    public get direction(): 'OUT' | 'IN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.direction`)
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
     * 
     * @desc enum in ['SINGLE', 'DOUBLE', 'IRIS', 'CLOCK'], default 'SINGLE'
     */
    public get transition_type(): 'SINGLE' | 'DOUBLE' | 'IRIS' | 'CLOCK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.transition_type`)
    }

    /**
     * Edge angle
     * @desc float in [-1.5708, 1.5708], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Width of the blur edge, in percentage relative to the image size
     * @desc float in [0, 1], default 0.0
     */
    public set blur_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blur_width`, value)
    }

    /**
     * Wipe direction
     * @desc enum in ['OUT', 'IN'], default 'OUT'
     */
    public set direction(value: 'OUT' | 'IN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.direction`, value)
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

    /**
     * 
     * @desc enum in ['SINGLE', 'DOUBLE', 'IRIS', 'CLOCK'], default 'SINGLE'
     */
    public set transition_type(value: 'SINGLE' | 'DOUBLE' | 'IRIS' | 'CLOCK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.transition_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
