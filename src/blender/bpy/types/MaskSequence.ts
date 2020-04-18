import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Sequence } from './Sequence'
import { SequenceCrop } from './SequenceCrop'
import { SequenceTransform } from './SequenceTransform'
import { Mask } from './Mask'

/**
 * MaskSequence
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskSequence.html
 */
export class MaskSequence {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc SequenceCrop, (readonly)
     */
    public get crop(): SequenceCrop {
        return PythonInterop.getClass(this.interop, `${this.accessor}.crop`, SequenceCrop)
    }

    /**
     * 
     * @desc SequenceTransform, (readonly)
     */
    public get transform(): SequenceTransform {
        return PythonInterop.getClass(this.interop, `${this.accessor}.transform`, SequenceTransform)
    }

    /**
     * Representation of alpha information in the RGBA pixels
     * @desc enum in ['STRAIGHT', 'PREMUL'], default 'STRAIGHT'
     */
    public get alpha_mode(): 'STRAIGHT' | 'PREMUL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.alpha_mode`)
    }

    /**
     * Animation end offset (trim end)
     * @desc int in [0, inf], default 0
     */
    public get animation_offset_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.animation_offset_end`)
    }

    /**
     * Animation start offset (trim start)
     * @desc int in [0, inf], default 0
     */
    public get animation_offset_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.animation_offset_start`)
    }

    /**
     * 
     * @desc float in [0, 20], default 1.0
     */
    public get color_multiply(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_multiply`)
    }

    /**
     * Adjust the intensity of the input’s color
     * @desc float in [0, 20], default 1.0
     */
    public get color_saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_saturation`)
    }

    /**
     * Mask that this sequence uses
     * @desc Mask
     */
    public get mask(): Mask {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask`, Mask)
    }

    /**
     * Only display every nth frame
     * @desc float in [1, 30], default 0.0
     */
    public get strobe(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strobe`)
    }

    /**
     * Crop image before processing
     * @desc boolean, default False
     */
    public get use_crop(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_crop`)
    }

    /**
     * Remove fields from video movies
     * @desc boolean, default False
     */
    public get use_deinterlace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deinterlace`)
    }

    /**
     * Flip on the X axis
     * @desc boolean, default False
     */
    public get use_flip_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flip_x`)
    }

    /**
     * Flip on the Y axis
     * @desc boolean, default False
     */
    public get use_flip_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flip_y`)
    }

    /**
     * Convert input to float data
     * @desc boolean, default False
     */
    public get use_float(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_float`)
    }

    /**
     * Reverse frame order
     * @desc boolean, default False
     */
    public get use_reverse_frames(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_reverse_frames`)
    }

    /**
     * Translate image before processing
     * @desc boolean, default False
     */
    public get use_translation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_translation`)
    }

    /**
     * Representation of alpha information in the RGBA pixels
     * @desc enum in ['STRAIGHT', 'PREMUL'], default 'STRAIGHT'
     */
    public set alpha_mode(value: 'STRAIGHT' | 'PREMUL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.alpha_mode`, value)
    }

    /**
     * Animation end offset (trim end)
     * @desc int in [0, inf], default 0
     */
    public set animation_offset_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.animation_offset_end`, value)
    }

    /**
     * Animation start offset (trim start)
     * @desc int in [0, inf], default 0
     */
    public set animation_offset_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.animation_offset_start`, value)
    }

    /**
     * 
     * @desc float in [0, 20], default 1.0
     */
    public set color_multiply(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_multiply`, value)
    }

    /**
     * Adjust the intensity of the input’s color
     * @desc float in [0, 20], default 1.0
     */
    public set color_saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_saturation`, value)
    }

    /**
     * Mask that this sequence uses
     * @desc Mask
     */
    public set mask(value: Mask) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask`, value)
    }

    /**
     * Only display every nth frame
     * @desc float in [1, 30], default 0.0
     */
    public set strobe(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strobe`, value)
    }

    /**
     * Crop image before processing
     * @desc boolean, default False
     */
    public set use_crop(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_crop`, value)
    }

    /**
     * Remove fields from video movies
     * @desc boolean, default False
     */
    public set use_deinterlace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deinterlace`, value)
    }

    /**
     * Flip on the X axis
     * @desc boolean, default False
     */
    public set use_flip_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flip_x`, value)
    }

    /**
     * Flip on the Y axis
     * @desc boolean, default False
     */
    public set use_flip_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flip_y`, value)
    }

    /**
     * Convert input to float data
     * @desc boolean, default False
     */
    public set use_float(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_float`, value)
    }

    /**
     * Reverse frame order
     * @desc boolean, default False
     */
    public set use_reverse_frames(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_reverse_frames`, value)
    }

    /**
     * Translate image before processing
     * @desc boolean, default False
     */
    public set use_translation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_translation`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
