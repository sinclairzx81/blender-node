import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'

/**
 * BuildGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.BuildGpencilModifier.html
 */
export class BuildGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * When should strokes start to appear/disappear
     * @desc enum in ['START', 'END'], default 'START'
     */
    public get concurrent_time_alignment(): 'START' | 'END' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.concurrent_time_alignment`)
    }

    /**
     * End Frame (when Restrict Frame Range is enabled)
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_end(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Start Frame (when Restrict Frame Range is enabled)
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public get frame_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame_start`)
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
     * Maximum number of frames that the build effect can run for (unless another GP keyframe occurs before this time has elapsed)
     * @desc float in [1, 1.04857e+06], default 0.0
     */
    public get length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.length`)
    }

    /**
     * How many strokes are being animated at a time
     * @desc enum in ['SEQUENTIAL', 'CONCURRENT'], default 'SEQUENTIAL'
     */
    public get mode(): 'SEQUENTIAL' | 'CONCURRENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Number of frames after each GP keyframe before the modifier has any effect
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public get start_delay(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.start_delay`)
    }

    /**
     * How are strokes animated (i.e. are they appearing or disappearing)
     * @desc enum in ['GROW', 'SHRINK', 'FADE'], default 'GROW'
     */
    public get transition(): 'GROW' | 'SHRINK' | 'FADE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.transition`)
    }

    /**
     * Only modify strokes during the specified frame range
     * @desc boolean, default False
     */
    public get use_restrict_frame_range(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_restrict_frame_range`)
    }

    /**
     * When should strokes start to appear/disappear
     * @desc enum in ['START', 'END'], default 'START'
     */
    public set concurrent_time_alignment(value: 'START' | 'END') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.concurrent_time_alignment`, value)
    }

    /**
     * End Frame (when Restrict Frame Range is enabled)
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_end(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_end`, value)
    }

    /**
     * Start Frame (when Restrict Frame Range is enabled)
     * @desc float in [-1.04857e+06, 1.04857e+06], default 0.0
     */
    public set frame_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame_start`, value)
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
     * Maximum number of frames that the build effect can run for (unless another GP keyframe occurs before this time has elapsed)
     * @desc float in [1, 1.04857e+06], default 0.0
     */
    public set length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.length`, value)
    }

    /**
     * How many strokes are being animated at a time
     * @desc enum in ['SEQUENTIAL', 'CONCURRENT'], default 'SEQUENTIAL'
     */
    public set mode(value: 'SEQUENTIAL' | 'CONCURRENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Number of frames after each GP keyframe before the modifier has any effect
     * @desc float in [0, 1.04857e+06], default 0.0
     */
    public set start_delay(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.start_delay`, value)
    }

    /**
     * How are strokes animated (i.e. are they appearing or disappearing)
     * @desc enum in ['GROW', 'SHRINK', 'FADE'], default 'GROW'
     */
    public set transition(value: 'GROW' | 'SHRINK' | 'FADE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.transition`, value)
    }

    /**
     * Only modify strokes during the specified frame range
     * @desc boolean, default False
     */
    public set use_restrict_frame_range(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_restrict_frame_range`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
