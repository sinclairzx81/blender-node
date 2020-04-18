import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * GaussianBlurSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.GaussianBlurSequence.html
 */
export class GaussianBlurSequence {

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
     * Size of the blur along X axis
     * @desc float in [0, inf], default 0.0
     */
    public get size_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_x`)
    }

    /**
     * Size of the blur along Y axis
     * @desc float in [0, inf], default 0.0
     */
    public get size_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_y`)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public set input_1(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_1`, value)
    }

    /**
     * Size of the blur along X axis
     * @desc float in [0, inf], default 0.0
     */
    public set size_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_x`, value)
    }

    /**
     * Size of the blur along Y axis
     * @desc float in [0, inf], default 0.0
     */
    public set size_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
