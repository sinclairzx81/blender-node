import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { ColorRamp } from './ColorRamp'
import { NodeTree } from './NodeTree'

/**
 * Texture
 * 
 * https://docs.blender.org/api/current/bpy.types.Texture.html
 */
export class Texture {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * 
     * @desc ColorRamp, (readonly)
     */
    public get color_ramp(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_ramp`, ColorRamp)
    }

    /**
     * Node tree for node-based textures
     * @desc NodeTree, (readonly)
     */
    public get node_tree(): NodeTree {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node_tree`, NodeTree)
    }

    /**
     * Materials that use this texture(readonly)
     * @desc void
     */
    public get users_material(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_material`)
    }

    /**
     * Object modifiers that use this texture(readonly)
     * @desc void
     */
    public get users_object_modifier(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_object_modifier`)
    }

    /**
     * Adjust the contrast of the texture
     * @desc float in [0, 5], default 1.0
     */
    public get contrast(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contrast`)
    }

    /**
     * 
     * @desc float in [0, 2], default 1.0
     */
    public get factor_blue(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor_blue`)
    }

    /**
     * 
     * @desc float in [0, 2], default 1.0
     */
    public get factor_green(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor_green`)
    }

    /**
     * 
     * @desc float in [0, 2], default 1.0
     */
    public get factor_red(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor_red`)
    }

    /**
     * Adjust the brightness of the texture
     * @desc float in [0, 2], default 1.0
     */
    public get intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.intensity`)
    }

    /**
     * Adjust the saturation of colors in the texture
     * @desc float in [0, 2], default 1.0
     */
    public get saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.saturation`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'BLEND', 'CLOUDS', 'DISTORTED_NOISE', 'IMAGE', 'MAGIC', 'MARBLE', 'MUSGRAVE', 'NOISE', 'STUCCI', 'VORONOI', 'WOOD'], default 'IMAGE'
     */
    public get type(): 'NONE' | 'BLEND' | 'CLOUDS' | 'DISTORTED_NOISE' | 'IMAGE' | 'MAGIC' | 'MARBLE' | 'MUSGRAVE' | 'NOISE' | 'STUCCI' | 'VORONOI' | 'WOOD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Set negative texture RGB and intensity values to zero, for some uses like displacement this option can be disabled to get the full range
     * @desc boolean, default False
     */
    public get use_clamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clamp`)
    }

    /**
     * Toggle color ramp operations
     * @desc boolean, default False
     */
    public get use_color_ramp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_color_ramp`)
    }

    /**
     * Make this a node-based texture
     * @desc boolean, default False
     */
    public get use_nodes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_nodes`)
    }

    /**
     * Show Alpha in Preview Render
     * @desc boolean, default False
     */
    public get use_preview_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preview_alpha`)
    }

    /**
     * Adjust the contrast of the texture
     * @desc float in [0, 5], default 1.0
     */
    public set contrast(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contrast`, value)
    }

    /**
     * 
     * @desc float in [0, 2], default 1.0
     */
    public set factor_blue(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor_blue`, value)
    }

    /**
     * 
     * @desc float in [0, 2], default 1.0
     */
    public set factor_green(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor_green`, value)
    }

    /**
     * 
     * @desc float in [0, 2], default 1.0
     */
    public set factor_red(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor_red`, value)
    }

    /**
     * Adjust the brightness of the texture
     * @desc float in [0, 2], default 1.0
     */
    public set intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.intensity`, value)
    }

    /**
     * Adjust the saturation of colors in the texture
     * @desc float in [0, 2], default 1.0
     */
    public set saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.saturation`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'BLEND', 'CLOUDS', 'DISTORTED_NOISE', 'IMAGE', 'MAGIC', 'MARBLE', 'MUSGRAVE', 'NOISE', 'STUCCI', 'VORONOI', 'WOOD'], default 'IMAGE'
     */
    public set type(value: 'NONE' | 'BLEND' | 'CLOUDS' | 'DISTORTED_NOISE' | 'IMAGE' | 'MAGIC' | 'MARBLE' | 'MUSGRAVE' | 'NOISE' | 'STUCCI' | 'VORONOI' | 'WOOD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Set negative texture RGB and intensity values to zero, for some uses like displacement this option can be disabled to get the full range
     * @desc boolean, default False
     */
    public set use_clamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clamp`, value)
    }

    /**
     * Toggle color ramp operations
     * @desc boolean, default False
     */
    public set use_color_ramp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_color_ramp`, value)
    }

    /**
     * Make this a node-based texture
     * @desc boolean, default False
     */
    public set use_nodes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_nodes`, value)
    }

    /**
     * Show Alpha in Preview Render
     * @desc boolean, default False
     */
    public set use_preview_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preview_alpha`, value)
    }

    /**
     * Evaluate the texture at the coordinates given
     * @desc float array of 4 items in [-inf, inf]
     */
    public evaluate(): [number, number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.evaluate`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
