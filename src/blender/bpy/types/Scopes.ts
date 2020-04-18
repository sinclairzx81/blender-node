import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Histogram } from './Histogram'

/**
 * Scopes
 * 
 * https://docs.blender.org/api/current/bpy.types.Scopes.html
 */
export class Scopes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Histogram for viewing image statistics
     * @desc Histogram, (readonly)
     */
    public get histogram(): Histogram {
        return PythonInterop.getClass(this.interop, `${this.accessor}.histogram`, Histogram)
    }

    /**
     * Proportion of original image source pixel lines to sample
     * @desc float in [0, 100], default 0.0
     */
    public get accuracy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.accuracy`)
    }

    /**
     * Sample every pixel of the image
     * @desc boolean, default False
     */
    public get use_full_resolution(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_full_resolution`)
    }

    /**
     * Opacity of the points
     * @desc float in [0, 1], default 0.0
     */
    public get vectorscope_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.vectorscope_alpha`)
    }

    /**
     * Opacity of the points
     * @desc float in [0, 1], default 0.0
     */
    public get waveform_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.waveform_alpha`)
    }

    /**
     * 
     * @desc enum in ['LUMA', 'PARADE', 'YCBCR601', 'YCBCR709', 'YCBCRJPG', 'RGB'], default 'LUMA'
     */
    public get waveform_mode(): 'LUMA' | 'PARADE' | 'YCBCR601' | 'YCBCR709' | 'YCBCRJPG' | 'RGB' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.waveform_mode`)
    }

    /**
     * Proportion of original image source pixel lines to sample
     * @desc float in [0, 100], default 0.0
     */
    public set accuracy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.accuracy`, value)
    }

    /**
     * Sample every pixel of the image
     * @desc boolean, default False
     */
    public set use_full_resolution(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_full_resolution`, value)
    }

    /**
     * Opacity of the points
     * @desc float in [0, 1], default 0.0
     */
    public set vectorscope_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.vectorscope_alpha`, value)
    }

    /**
     * Opacity of the points
     * @desc float in [0, 1], default 0.0
     */
    public set waveform_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.waveform_alpha`, value)
    }

    /**
     * 
     * @desc enum in ['LUMA', 'PARADE', 'YCBCR601', 'YCBCR709', 'YCBCRJPG', 'RGB'], default 'LUMA'
     */
    public set waveform_mode(value: 'LUMA' | 'PARADE' | 'YCBCR601' | 'YCBCR709' | 'YCBCRJPG' | 'RGB') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.waveform_mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
