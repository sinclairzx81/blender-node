import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeVecBlur
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeVecBlur.html
 */
export class CompositorNodeVecBlur {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Scaling factor for motion vectors (actually, ‘shutter speed’, in frames)
     * @desc float in [0, 20], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * 
     * @desc int in [1, 256], default 0
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Maximum speed, or zero for none
     * @desc int in [0, 1024], default 0
     */
    public get speed_max(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.speed_max`)
    }

    /**
     * Minimum speed for a pixel to be blurred (used to separate background from foreground)
     * @desc int in [0, 1024], default 0
     */
    public get speed_min(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.speed_min`)
    }

    /**
     * Interpolate between frames in a Bezier curve, rather than linearly
     * @desc boolean, default False
     */
    public get use_curved(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_curved`)
    }

    /**
     * Scaling factor for motion vectors (actually, ‘shutter speed’, in frames)
     * @desc float in [0, 20], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * 
     * @desc int in [1, 256], default 0
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Maximum speed, or zero for none
     * @desc int in [0, 1024], default 0
     */
    public set speed_max(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.speed_max`, value)
    }

    /**
     * Minimum speed for a pixel to be blurred (used to separate background from foreground)
     * @desc int in [0, 1024], default 0
     */
    public set speed_min(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.speed_min`, value)
    }

    /**
     * Interpolate between frames in a Bezier curve, rather than linearly
     * @desc boolean, default False
     */
    public set use_curved(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_curved`, value)
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
