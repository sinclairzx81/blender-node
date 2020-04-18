import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * GammaCrossSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.GammaCrossSequence.html
 */
export class GammaCrossSequence {

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
     * Second input for the effect strip
     * @desc Sequence, (never None)
     */
    public get input_2(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_2`, Sequence)
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
