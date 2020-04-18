import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { EffectSequence } from './EffectSequence'

/**
 * GlowSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.GlowSequence.html
 */
export class GlowSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get input_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.input_count`)
    }

    /**
     * Radius of glow effect
     * @desc float in [0.5, 20], default 0.0
     */
    public get blur_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.blur_radius`)
    }

    /**
     * Brightness multiplier
     * @desc float in [0, 10], default 0.0
     */
    public get boost_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.boost_factor`)
    }

    /**
     * Brightness limit of intensity
     * @desc float in [0, 1], default 0.0
     */
    public get clamp(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clamp`)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public get input_1(): Sequence {
        return PythonInterop.getClass(this.interop, `${this.accessor}.input_1`, Sequence)
    }

    /**
     * Accuracy of the blur effect
     * @desc int in [1, 5], default 0
     */
    public get quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.quality`)
    }

    /**
     * Minimum intensity to trigger a glow
     * @desc float in [0, 1], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Show the glow buffer only
     * @desc boolean, default False
     */
    public get use_only_boost(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_only_boost`)
    }

    /**
     * Radius of glow effect
     * @desc float in [0.5, 20], default 0.0
     */
    public set blur_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.blur_radius`, value)
    }

    /**
     * Brightness multiplier
     * @desc float in [0, 10], default 0.0
     */
    public set boost_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.boost_factor`, value)
    }

    /**
     * Brightness limit of intensity
     * @desc float in [0, 1], default 0.0
     */
    public set clamp(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clamp`, value)
    }

    /**
     * First input for the effect strip
     * @desc Sequence, (never None)
     */
    public set input_1(value: Sequence) {
        PythonInterop.setClass(this.interop, `${this.accessor}.input_1`, value)
    }

    /**
     * Accuracy of the blur effect
     * @desc int in [1, 5], default 0
     */
    public set quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * Minimum intensity to trigger a glow
     * @desc float in [0, 1], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Show the glow buffer only
     * @desc boolean, default False
     */
    public set use_only_boost(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_only_boost`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
