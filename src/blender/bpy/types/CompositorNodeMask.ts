import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { Mask } from './Mask'

/**
 * CompositorNodeMask
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeMask.html
 */
export class CompositorNodeMask {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Mask
     */
    public get mask(): Mask {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask`, Mask)
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
     * Where to get the mask size from for aspect/size information
     * @desc enum in ['SCENE', 'FIXED', 'FIXED_SCENE'], default 'SCENE'
     */
    public get size_source(): 'SCENE' | 'FIXED' | 'FIXED_SCENE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.size_source`)
    }

    /**
     * 
     * @desc int in [1, 10000], default 0
     */
    public get size_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size_x`)
    }

    /**
     * 
     * @desc int in [1, 10000], default 0
     */
    public get size_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size_y`)
    }

    /**
     * Use feather information from the mask
     * @desc boolean, default False
     */
    public get use_feather(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_feather`)
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
     * @desc Mask
     */
    public set mask(value: Mask) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask`, value)
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
     * Where to get the mask size from for aspect/size information
     * @desc enum in ['SCENE', 'FIXED', 'FIXED_SCENE'], default 'SCENE'
     */
    public set size_source(value: 'SCENE' | 'FIXED' | 'FIXED_SCENE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.size_source`, value)
    }

    /**
     * 
     * @desc int in [1, 10000], default 0
     */
    public set size_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size_x`, value)
    }

    /**
     * 
     * @desc int in [1, 10000], default 0
     */
    public set size_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size_y`, value)
    }

    /**
     * Use feather information from the mask
     * @desc boolean, default False
     */
    public set use_feather(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_feather`, value)
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
