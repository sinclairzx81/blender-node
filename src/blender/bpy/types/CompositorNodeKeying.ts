import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeKeying
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeKeying.html
 */
export class CompositorNodeKeying {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Matte blur size which applies after clipping and dilate/eroding
     * @desc int in [0, 2048], default 0
     */
    public get blur_post(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.blur_post`)
    }

    /**
     * Chroma pre-blur size which applies before running keyer
     * @desc int in [0, 2048], default 0
     */
    public get blur_pre(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.blur_pre`)
    }

    /**
     * Value of non-scaled matte pixel which considers as fully background pixel
     * @desc float in [0, 1], default 0.0
     */
    public get clip_black(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_black`)
    }

    /**
     * Value of non-scaled matte pixel which considers as fully foreground pixel
     * @desc float in [0, 1], default 0.0
     */
    public get clip_white(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.clip_white`)
    }

    /**
     * Balance between non-key colors used to detect amount of key color to be removed
     * @desc float in [0, 1], default 0.0
     */
    public get despill_balance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.despill_balance`)
    }

    /**
     * Factor of despilling screen color from image
     * @desc float in [0, 1], default 0.0
     */
    public get despill_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.despill_factor`)
    }

    /**
     * Matte dilate/erode side
     * @desc int in [-100, 100], default 0
     */
    public get dilate_distance(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.dilate_distance`)
    }

    /**
     * Radius of kernel used to detect whether pixel belongs to edge
     * @desc int in [0, 100], default 0
     */
    public get edge_kernel_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.edge_kernel_radius`)
    }

    /**
     * Tolerance to pixels inside kernel which are treating as belonging to the same plane
     * @desc float in [0, 1], default 0.0
     */
    public get edge_kernel_tolerance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.edge_kernel_tolerance`)
    }

    /**
     * Distance to grow/shrink the feather
     * @desc int in [-100, 100], default 0
     */
    public get feather_distance(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.feather_distance`)
    }

    /**
     * Falloff type the feather
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR'], default 'SMOOTH'
     */
    public get feather_falloff(): 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.feather_falloff`)
    }

    /**
     * Balance between two non-primary channels primary channel is comparing against
     * @desc float in [0, 1], default 0.0
     */
    public get screen_balance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.screen_balance`)
    }

    /**
     * Matte blur size which applies after clipping and dilate/eroding
     * @desc int in [0, 2048], default 0
     */
    public set blur_post(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.blur_post`, value)
    }

    /**
     * Chroma pre-blur size which applies before running keyer
     * @desc int in [0, 2048], default 0
     */
    public set blur_pre(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.blur_pre`, value)
    }

    /**
     * Value of non-scaled matte pixel which considers as fully background pixel
     * @desc float in [0, 1], default 0.0
     */
    public set clip_black(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_black`, value)
    }

    /**
     * Value of non-scaled matte pixel which considers as fully foreground pixel
     * @desc float in [0, 1], default 0.0
     */
    public set clip_white(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.clip_white`, value)
    }

    /**
     * Balance between non-key colors used to detect amount of key color to be removed
     * @desc float in [0, 1], default 0.0
     */
    public set despill_balance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.despill_balance`, value)
    }

    /**
     * Factor of despilling screen color from image
     * @desc float in [0, 1], default 0.0
     */
    public set despill_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.despill_factor`, value)
    }

    /**
     * Matte dilate/erode side
     * @desc int in [-100, 100], default 0
     */
    public set dilate_distance(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.dilate_distance`, value)
    }

    /**
     * Radius of kernel used to detect whether pixel belongs to edge
     * @desc int in [0, 100], default 0
     */
    public set edge_kernel_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.edge_kernel_radius`, value)
    }

    /**
     * Tolerance to pixels inside kernel which are treating as belonging to the same plane
     * @desc float in [0, 1], default 0.0
     */
    public set edge_kernel_tolerance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.edge_kernel_tolerance`, value)
    }

    /**
     * Distance to grow/shrink the feather
     * @desc int in [-100, 100], default 0
     */
    public set feather_distance(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.feather_distance`, value)
    }

    /**
     * Falloff type the feather
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR'], default 'SMOOTH'
     */
    public set feather_falloff(value: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.feather_falloff`, value)
    }

    /**
     * Balance between two non-primary channels primary channel is comparing against
     * @desc float in [0, 1], default 0.0
     */
    public set screen_balance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.screen_balance`, value)
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
