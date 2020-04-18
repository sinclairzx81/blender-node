import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MaskSplines } from './MaskSplines'
import { MaskSpline } from './MaskSpline'

/**
 * MaskLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskLayer.html
 */
export class MaskLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Collection of splines which defines this layer
     * @desc MaskSplines bpy_prop_collection of MaskSpline, (readonly)
     */
    public get splines(): BlenderCollection<MaskSpline> & Indexable<MaskSpline> & MaskSplines {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.splines`, MaskSplines, MaskSpline)
    }

    /**
     * Render Opacity
     * @desc float in [-inf, inf], default 0.0
     */
    public get alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha`)
    }

    /**
     * Method of blending mask layers
     * @desc enum in ['MERGE_ADD', 'MERGE_SUBTRACT', 'ADD', 'SUBTRACT', 'LIGHTEN', 'DARKEN', 'MUL', 'REPLACE', 'DIFFERENCE'], default 'ADD'
     */
    public get blend(): 'MERGE_ADD' | 'MERGE_SUBTRACT' | 'ADD' | 'SUBTRACT' | 'LIGHTEN' | 'DARKEN' | 'MUL' | 'REPLACE' | 'DIFFERENCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend`)
    }

    /**
     * Falloff type the feather
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR'], default 'SMOOTH'
     */
    public get falloff(): 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Restrict visibility in the viewport
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Restrict renderability
     * @desc boolean, default False
     */
    public get hide_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_render`)
    }

    /**
     * Restrict selection in the viewport
     * @desc boolean, default False
     */
    public get hide_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_select`)
    }

    /**
     * Invert the mask black/white
     * @desc boolean, default False
     */
    public get invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert`)
    }

    /**
     * Unique name of layer
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Layer is selected for editing in the Dope Sheet
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Calculate holes when filling overlapping curves
     * @desc boolean, default False
     */
    public get use_fill_holes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill_holes`)
    }

    /**
     * Calculate self intersections and overlap before filling
     * @desc boolean, default False
     */
    public get use_fill_overlap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fill_overlap`)
    }

    /**
     * Render Opacity
     * @desc float in [-inf, inf], default 0.0
     */
    public set alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha`, value)
    }

    /**
     * Method of blending mask layers
     * @desc enum in ['MERGE_ADD', 'MERGE_SUBTRACT', 'ADD', 'SUBTRACT', 'LIGHTEN', 'DARKEN', 'MUL', 'REPLACE', 'DIFFERENCE'], default 'ADD'
     */
    public set blend(value: 'MERGE_ADD' | 'MERGE_SUBTRACT' | 'ADD' | 'SUBTRACT' | 'LIGHTEN' | 'DARKEN' | 'MUL' | 'REPLACE' | 'DIFFERENCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend`, value)
    }

    /**
     * Falloff type the feather
     * @desc enum in ['SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR'], default 'SMOOTH'
     */
    public set falloff(value: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff`, value)
    }

    /**
     * Restrict visibility in the viewport
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Restrict renderability
     * @desc boolean, default False
     */
    public set hide_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_render`, value)
    }

    /**
     * Restrict selection in the viewport
     * @desc boolean, default False
     */
    public set hide_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_select`, value)
    }

    /**
     * Invert the mask black/white
     * @desc boolean, default False
     */
    public set invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert`, value)
    }

    /**
     * Unique name of layer
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Layer is selected for editing in the Dope Sheet
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Calculate holes when filling overlapping curves
     * @desc boolean, default False
     */
    public set use_fill_holes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill_holes`, value)
    }

    /**
     * Calculate self intersections and overlap before filling
     * @desc boolean, default False
     */
    public set use_fill_overlap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fill_overlap`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
