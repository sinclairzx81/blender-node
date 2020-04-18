import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Sequence } from './Sequence'

/**
 * Sequences
 * 
 * https://docs.blender.org/api/current/bpy.types.Sequences.html
 */
export class Sequences {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new movie clip sequence
     * @desc Sequence
     */
    public new_clip(options: { name?: string, clip?: unknown, channel?: number, frame_start?: number }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_clip`, options, Sequence)
    }

    /**
     * Add a new mask sequence
     * @desc Sequence
     */
    public new_mask(options: { name?: string, mask?: unknown, channel?: number, frame_start?: number }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_mask`, options, Sequence)
    }

    /**
     * Add a new scene sequence
     * @desc Sequence
     */
    public new_scene(options: { name?: string, scene?: unknown, channel?: number, frame_start?: number }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_scene`, options, Sequence)
    }

    /**
     * Add a new image sequence
     * @desc Sequence
     */
    public new_image(options: { name?: string, filepath?: string, channel?: number, frame_start?: number }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_image`, options, Sequence)
    }

    /**
     * Add a new movie sequence
     * @desc Sequence
     */
    public new_movie(options: { name?: string, filepath?: string, channel?: number, frame_start?: number }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_movie`, options, Sequence)
    }

    /**
     * Add a new sound sequence
     * @desc Sequence
     */
    public new_sound(options: { name?: string, filepath?: string, channel?: number, frame_start?: number }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_sound`, options, Sequence)
    }

    /**
     * Add a new effect sequence
     * @desc Sequence
     */
    public new_effect(options: { name?: string, type?: 'CROSS' | 'ADD' | 'SUBTRACT' | 'ALPHA_OVER' | 'ALPHA_UNDER' | 'GAMMA_CROSS' | 'MULTIPLY' | 'OVER_DROP' | 'WIPE' | 'GLOW' | 'TRANSFORM' | 'COLOR' | 'SPEED' | 'MULTICAM' | 'ADJUSTMENT' | 'GAUSSIAN_BLUR' | 'TEXT' | 'COLORMIX', channel?: number, frame_start?: number, frame_end?: number, seq1?: unknown, seq2?: unknown, seq3?: unknown }): Sequence {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new_effect`, options, Sequence)
    }

    /**
     * Remove a Sequence
     * @desc void
     */
    public remove(options: { sequence?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
