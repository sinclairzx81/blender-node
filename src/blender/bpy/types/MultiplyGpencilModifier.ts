import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'

/**
 * MultiplyGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MultiplyGpencilModifier.html
 */
export class MultiplyGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distance of duplications
     * @desc float in [0, 3.14159], default 0.0
     */
    public get distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distance`)
    }

    /**
     * How many copies of strokes be displayed
     * @desc int in [0, 10], default 0
     */
    public get duplications(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.duplications`)
    }

    /**
     * Enable angle splitting
     * @desc boolean, default False
     */
    public get enable_angle_splitting(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.enable_angle_splitting`)
    }

    /**
     * Enable fading
     * @desc boolean, default False
     */
    public get enable_fading(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.enable_fading`)
    }

    /**
     * Fade center
     * @desc float in [0, 1], default 0.0
     */
    public get fading_center(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fading_center`)
    }

    /**
     * Fade influence of stroke’s opacity
     * @desc float in [0, 1], default 0.5
     */
    public get fading_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fading_opacity`)
    }

    /**
     * Fade influence of stroke’s thickness
     * @desc float in [0, 1], default 0.5
     */
    public get fading_thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fading_thickness`)
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
     * Inverse filter
     * @desc boolean, default False
     */
    public get invert_material_pass(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_material_pass`)
    }

    /**
     * Inverse filter
     * @desc boolean, default False
     */
    public get invert_materials(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_materials`)
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
     * Material name
     * @desc string, default '', (never None)
     */
    public get material(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.material`)
    }

    /**
     * Offset of duplications. -1 to 1: inner to outer
     * @desc float in [-inf, inf], default 0.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Split angle for segments
     * @desc float in [0, 3.14159], default 0.0
     */
    public get split_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.split_angle`)
    }

    /**
     * Distance of duplications
     * @desc float in [0, 3.14159], default 0.0
     */
    public set distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * How many copies of strokes be displayed
     * @desc int in [0, 10], default 0
     */
    public set duplications(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.duplications`, value)
    }

    /**
     * Enable angle splitting
     * @desc boolean, default False
     */
    public set enable_angle_splitting(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.enable_angle_splitting`, value)
    }

    /**
     * Enable fading
     * @desc boolean, default False
     */
    public set enable_fading(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.enable_fading`, value)
    }

    /**
     * Fade center
     * @desc float in [0, 1], default 0.0
     */
    public set fading_center(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fading_center`, value)
    }

    /**
     * Fade influence of stroke’s opacity
     * @desc float in [0, 1], default 0.5
     */
    public set fading_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fading_opacity`, value)
    }

    /**
     * Fade influence of stroke’s thickness
     * @desc float in [0, 1], default 0.5
     */
    public set fading_thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fading_thickness`, value)
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
     * Inverse filter
     * @desc boolean, default False
     */
    public set invert_material_pass(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_material_pass`, value)
    }

    /**
     * Inverse filter
     * @desc boolean, default False
     */
    public set invert_materials(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_materials`, value)
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
     * Material name
     * @desc string, default '', (never None)
     */
    public set material(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.material`, value)
    }

    /**
     * Offset of duplications. -1 to 1: inner to outer
     * @desc float in [-inf, inf], default 0.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Split angle for segments
     * @desc float in [0, 3.14159], default 0.0
     */
    public set split_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.split_angle`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
