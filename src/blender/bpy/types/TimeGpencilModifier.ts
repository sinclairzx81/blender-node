import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'

/**
 * TimeGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.TimeGpencilModifier.html
 */
export class TimeGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Final frame of the range
     * @desc int in [0, 1048574], default 250
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0.001, 100], default 0.0
     */
    public get frame_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_scale`)
    }

    /**
     * First frame of the range
     * @desc int in [0, 1048574], default 1
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Inverse filter
     * @desc boolean, default False
     */
    public get invert_layer_pass(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_layer_pass`)
    }

    /**
     * Inverse filter
     * @desc boolean, default False
     */
    public get invert_layers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_layers`)
    }

    /**
     * Layer name
     * @desc string, default '', (never None)
     */
    public get layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.layer`)
    }

    /**
     * Layer pass index
     * @desc int in [0, 100], default 0
     */
    public get layer_pass(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.layer_pass`)
    }

    /**
     * 
     * @desc enum in ['NORMAL', 'REVERSE', 'FIX'], default 'NORMAL'
     */
    public get mode(): 'NORMAL' | 'REVERSE' | 'FIX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Number of frames to offset original keyframe number or frame to fix
     * @desc int in [-32768, 32767], default 0
     */
    public get offset(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Define a custom range of frames to use in modifier
     * @desc boolean, default False
     */
    public get use_custom_frame_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_frame_range`)
    }

    /**
     * Retiming end frames and move to start of animation to keep loop
     * @desc boolean, default False
     */
    public get use_keep_loop(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keep_loop`)
    }

    /**
     * Final frame of the range
     * @desc int in [0, 1048574], default 250
     */
    public set frame_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Evaluation time in seconds
     * @desc float in [0.001, 100], default 0.0
     */
    public set frame_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_scale`, value)
    }

    /**
     * First frame of the range
     * @desc int in [0, 1048574], default 1
     */
    public set frame_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_start`, value)
    }

    /**
     * Inverse filter
     * @desc boolean, default False
     */
    public set invert_layer_pass(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_layer_pass`, value)
    }

    /**
     * Inverse filter
     * @desc boolean, default False
     */
    public set invert_layers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_layers`, value)
    }

    /**
     * Layer name
     * @desc string, default '', (never None)
     */
    public set layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.layer`, value)
    }

    /**
     * Layer pass index
     * @desc int in [0, 100], default 0
     */
    public set layer_pass(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.layer_pass`, value)
    }

    /**
     * 
     * @desc enum in ['NORMAL', 'REVERSE', 'FIX'], default 'NORMAL'
     */
    public set mode(value: 'NORMAL' | 'REVERSE' | 'FIX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Number of frames to offset original keyframe number or frame to fix
     * @desc int in [-32768, 32767], default 0
     */
    public set offset(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Define a custom range of frames to use in modifier
     * @desc boolean, default False
     */
    public set use_custom_frame_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_frame_range`, value)
    }

    /**
     * Retiming end frames and move to start of animation to keep loop
     * @desc boolean, default False
     */
    public set use_keep_loop(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keep_loop`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
