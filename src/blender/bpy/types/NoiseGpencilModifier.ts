import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'

/**
 * NoiseGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.NoiseGpencilModifier.html
 */
export class NoiseGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount of noise to apply
     * @desc float in [0, 30], default 0.0
     */
    public get factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.factor`)
    }

    /**
     * The noise moves the stroke as a whole, not point by point
     * @desc boolean, default False
     */
    public get full_stroke(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.full_stroke`)
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
     * The noise moves the stroke extreme points
     * @desc boolean, default False
     */
    public get move_extreme(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.move_extreme`)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Use random values
     * @desc boolean, default False
     */
    public get random(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.random`)
    }

    /**
     * Random seed
     * @desc int in [0, inf], default 0
     */
    public get seed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.seed`)
    }

    /**
     * Number of frames before recalculate random values again
     * @desc int in [1, 100], default 0
     */
    public get step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.step`)
    }

    /**
     * The modifier affects the position of the point
     * @desc boolean, default False
     */
    public get use_edit_position(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_position`)
    }

    /**
     * The modifier affects the color strength of the point
     * @desc boolean, default False
     */
    public get use_edit_strength(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_strength`)
    }

    /**
     * The modifier affects the thickness of the point
     * @desc boolean, default False
     */
    public get use_edit_thickness(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_thickness`)
    }

    /**
     * The modifier affects the UV rotation factor of the point
     * @desc boolean, default False
     */
    public get use_edit_uv(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edit_uv`)
    }

    /**
     * Vertex group name for modulating the deform
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Amount of noise to apply
     * @desc float in [0, 30], default 0.0
     */
    public set factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.factor`, value)
    }

    /**
     * The noise moves the stroke as a whole, not point by point
     * @desc boolean, default False
     */
    public set full_stroke(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.full_stroke`, value)
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
     * The noise moves the stroke extreme points
     * @desc boolean, default False
     */
    public set move_extreme(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.move_extreme`, value)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Use random values
     * @desc boolean, default False
     */
    public set random(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.random`, value)
    }

    /**
     * Random seed
     * @desc int in [0, inf], default 0
     */
    public set seed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.seed`, value)
    }

    /**
     * Number of frames before recalculate random values again
     * @desc int in [1, 100], default 0
     */
    public set step(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.step`, value)
    }

    /**
     * The modifier affects the position of the point
     * @desc boolean, default False
     */
    public set use_edit_position(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_position`, value)
    }

    /**
     * The modifier affects the color strength of the point
     * @desc boolean, default False
     */
    public set use_edit_strength(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_strength`, value)
    }

    /**
     * The modifier affects the thickness of the point
     * @desc boolean, default False
     */
    public set use_edit_thickness(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_thickness`, value)
    }

    /**
     * The modifier affects the UV rotation factor of the point
     * @desc boolean, default False
     */
    public set use_edit_uv(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edit_uv`, value)
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
