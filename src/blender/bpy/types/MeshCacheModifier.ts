import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * MeshCacheModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshCacheModifier.html
 */
export class MeshCacheModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['MDD', 'PC2'], default 'MDD'
     */
    public get cache_format(): 'MDD' | 'PC2' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.cache_format`)
    }

    /**
     * 
     * @desc enum in ['OVERWRITE', 'INTEGRATE'], default 'OVERWRITE'
     */
    public get deform_mode(): 'OVERWRITE' | 'INTEGRATE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.deform_mode`)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0, 1], default 0.0
     */
    public get eval_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eval_factor`)
    }

    /**
     * The frame to evaluate (starting at 0)
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public get eval_frame(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eval_frame`)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0, inf], default 0.0
     */
    public get eval_time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.eval_time`)
    }

    /**
     * Influence of the deformation
     * @desc float in [0, 1], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * Path to external displacements file
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * 
     * @desc enum set in {'X', 'Y', 'Z'}, default {'X'}
     */
    public get flip_axis(): ('X' | 'Y' | 'Z')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.flip_axis`)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get forward_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.forward_axis`)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0, 100], default 0.0
     */
    public get frame_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_scale`)
    }

    /**
     * Add this to the start frame
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'LINEAR'], default 'NONE'
     */
    public get interpolation(): 'NONE' | 'LINEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * 
     * @desc enum in ['SCENE', 'CUSTOM'], default 'SCENE'
     */
    public get play_mode(): 'SCENE' | 'CUSTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.play_mode`)
    }

    /**
     * Method to control playback time
     * @desc enum in ['FRAME', 'TIME', 'FACTOR'], default 'FRAME'
     */
    public get time_mode(): 'FRAME' | 'TIME' | 'FACTOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.time_mode`)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get up_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.up_axis`)
    }

    /**
     * 
     * @desc enum in ['MDD', 'PC2'], default 'MDD'
     */
    public set cache_format(value: 'MDD' | 'PC2') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.cache_format`, value)
    }

    /**
     * 
     * @desc enum in ['OVERWRITE', 'INTEGRATE'], default 'OVERWRITE'
     */
    public set deform_mode(value: 'OVERWRITE' | 'INTEGRATE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.deform_mode`, value)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0, 1], default 0.0
     */
    public set eval_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eval_factor`, value)
    }

    /**
     * The frame to evaluate (starting at 0)
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public set eval_frame(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eval_frame`, value)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0, inf], default 0.0
     */
    public set eval_time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.eval_time`, value)
    }

    /**
     * Influence of the deformation
     * @desc float in [0, 1], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * Path to external displacements file
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * 
     * @desc enum set in {'X', 'Y', 'Z'}, default {'X'}
     */
    public set flip_axis(value: ('X' | 'Y' | 'Z')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.flip_axis`, value)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set forward_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.forward_axis`, value)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0, 100], default 0.0
     */
    public set frame_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_scale`, value)
    }

    /**
     * Add this to the start frame
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'LINEAR'], default 'NONE'
     */
    public set interpolation(value: 'NONE' | 'LINEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * 
     * @desc enum in ['SCENE', 'CUSTOM'], default 'SCENE'
     */
    public set play_mode(value: 'SCENE' | 'CUSTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.play_mode`, value)
    }

    /**
     * Method to control playback time
     * @desc enum in ['FRAME', 'TIME', 'FACTOR'], default 'FRAME'
     */
    public set time_mode(value: 'FRAME' | 'TIME' | 'FACTOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.time_mode`, value)
    }

    /**
     * 
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set up_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.up_axis`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
