import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { MovieClip } from './MovieClip'

/**
 * CompositorNodePlaneTrackDeform
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodePlaneTrackDeform.html
 */
export class CompositorNodePlaneTrackDeform {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Number of motion blur samples
     * @desc int in [1, 64], default 0
     */
    public get motion_blur_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.motion_blur_samples`)
    }

    /**
     * Exposure for motion blur as a factor of FPS
     * @desc float in [0, 1], default 0.0
     */
    public get motion_blur_shutter(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.motion_blur_shutter`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get plane_track_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.plane_track_name`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get tracking_object(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.tracking_object`)
    }

    /**
     * Use multi-sampled motion blur of the mask
     * @desc boolean, default False
     */
    public get use_motion_blur(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motion_blur`)
    }

    /**
     * 
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Number of motion blur samples
     * @desc int in [1, 64], default 0
     */
    public set motion_blur_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.motion_blur_samples`, value)
    }

    /**
     * Exposure for motion blur as a factor of FPS
     * @desc float in [0, 1], default 0.0
     */
    public set motion_blur_shutter(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.motion_blur_shutter`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set plane_track_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.plane_track_name`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set tracking_object(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.tracking_object`, value)
    }

    /**
     * Use multi-sampled motion blur of the mask
     * @desc boolean, default False
     */
    public set use_motion_blur(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motion_blur`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
