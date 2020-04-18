import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'
import { CurveMapping } from './CurveMapping'

/**
 * ThickGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ThickGpencilModifier.html
 */
export class ThickGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom Thickness Curve
     * @desc CurveMapping, (readonly)
     */
    public get curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve`, CurveMapping)
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
     * Inverse filter
     * @desc boolean, default False
     */
    public get invert_vertex(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex`)
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
     * Normalize the full stroke to modifier thickness
     * @desc boolean, default False
     */
    public get normalize_thickness(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.normalize_thickness`)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Factor of thickness change
     * @desc int in [-100, 500], default 0
     */
    public get thickness(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.thickness`)
    }

    /**
     * Use a custom curve to define thickness changes
     * @desc boolean, default False
     */
    public get use_custom_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_curve`)
    }

    /**
     * Vertex group name for modulating the deform
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
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
     * Inverse filter
     * @desc boolean, default False
     */
    public set invert_vertex(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex`, value)
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
     * Normalize the full stroke to modifier thickness
     * @desc boolean, default False
     */
    public set normalize_thickness(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.normalize_thickness`, value)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Factor of thickness change
     * @desc int in [-100, 500], default 0
     */
    public set thickness(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.thickness`, value)
    }

    /**
     * Use a custom curve to define thickness changes
     * @desc boolean, default False
     */
    public set use_custom_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_curve`, value)
    }

    /**
     * Vertex group name for modulating the deform
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
