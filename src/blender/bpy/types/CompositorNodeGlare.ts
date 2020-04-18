import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeGlare
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeGlare.html
 */
export class CompositorNodeGlare {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Streak angle offset
     * @desc float in [0, 3.14159], default 0.0
     */
    public get angle_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle_offset`)
    }

    /**
     * Amount of Color Modulation, modulates colors of streaks and ghosts for a spectral dispersion effect
     * @desc float in [0, 1], default 0.0
     */
    public get color_modulation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.color_modulation`)
    }

    /**
     * Streak fade-out factor
     * @desc float in [0.75, 1], default 0.0
     */
    public get fade(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fade`)
    }

    /**
     * 
     * @desc enum in ['GHOSTS', 'STREAKS', 'FOG_GLOW', 'SIMPLE_STAR'], default 'SIMPLE_STAR'
     */
    public get glare_type(): 'GHOSTS' | 'STREAKS' | 'FOG_GLOW' | 'SIMPLE_STAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.glare_type`)
    }

    /**
     * 
     * @desc int in [2, 5], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * -1 is original image only, 0 is exact 50/50 mix, 1 is processed image only
     * @desc float in [-1, 1], default 0.0
     */
    public get mix(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mix`)
    }

    /**
     * If not set to high quality, the effect will be applied to a low-res copy of the source image
     * @desc enum in ['HIGH', 'MEDIUM', 'LOW'], default 'HIGH'
     */
    public get quality(): 'HIGH' | 'MEDIUM' | 'LOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.quality`)
    }

    /**
     * Glow/glare size (not actual size; relative to initial size of bright area of pixels)
     * @desc int in [6, 9], default 0
     */
    public get size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size`)
    }

    /**
     * Total number of streaks
     * @desc int in [1, 16], default 0
     */
    public get streaks(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.streaks`)
    }

    /**
     * The glare filter will only be applied to pixels brighter than this value
     * @desc float in [0, 1000], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Simple star filter: add 45 degree rotation offset
     * @desc boolean, default False
     */
    public get use_rotate_45(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rotate_45`)
    }

    /**
     * Streak angle offset
     * @desc float in [0, 3.14159], default 0.0
     */
    public set angle_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle_offset`, value)
    }

    /**
     * Amount of Color Modulation, modulates colors of streaks and ghosts for a spectral dispersion effect
     * @desc float in [0, 1], default 0.0
     */
    public set color_modulation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.color_modulation`, value)
    }

    /**
     * Streak fade-out factor
     * @desc float in [0.75, 1], default 0.0
     */
    public set fade(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fade`, value)
    }

    /**
     * 
     * @desc enum in ['GHOSTS', 'STREAKS', 'FOG_GLOW', 'SIMPLE_STAR'], default 'SIMPLE_STAR'
     */
    public set glare_type(value: 'GHOSTS' | 'STREAKS' | 'FOG_GLOW' | 'SIMPLE_STAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.glare_type`, value)
    }

    /**
     * 
     * @desc int in [2, 5], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * -1 is original image only, 0 is exact 50/50 mix, 1 is processed image only
     * @desc float in [-1, 1], default 0.0
     */
    public set mix(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mix`, value)
    }

    /**
     * If not set to high quality, the effect will be applied to a low-res copy of the source image
     * @desc enum in ['HIGH', 'MEDIUM', 'LOW'], default 'HIGH'
     */
    public set quality(value: 'HIGH' | 'MEDIUM' | 'LOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * Glow/glare size (not actual size; relative to initial size of bright area of pixels)
     * @desc int in [6, 9], default 0
     */
    public set size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Total number of streaks
     * @desc int in [1, 16], default 0
     */
    public set streaks(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.streaks`, value)
    }

    /**
     * The glare filter will only be applied to pixels brighter than this value
     * @desc float in [0, 1000], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Simple star filter: add 45 degree rotation offset
     * @desc boolean, default False
     */
    public set use_rotate_45(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rotate_45`, value)
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
