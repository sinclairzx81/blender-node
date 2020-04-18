import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'
import { BlenderObject } from './BlenderObject'

/**
 * MirrorGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MirrorGpencilModifier.html
 */
export class MirrorGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

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
     * Object used as center
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Clip points
     * @desc boolean, default False
     */
    public get use_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clip`)
    }

    /**
     * Mirror this axis
     * @desc boolean, default False
     */
    public get x_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.x_axis`)
    }

    /**
     * Mirror this axis
     * @desc boolean, default False
     */
    public get y_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.y_axis`)
    }

    /**
     * Mirror this axis
     * @desc boolean, default False
     */
    public get z_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.z_axis`)
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
     * Object used as center
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Clip points
     * @desc boolean, default False
     */
    public set use_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clip`, value)
    }

    /**
     * Mirror this axis
     * @desc boolean, default False
     */
    public set x_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.x_axis`, value)
    }

    /**
     * Mirror this axis
     * @desc boolean, default False
     */
    public set y_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.y_axis`, value)
    }

    /**
     * Mirror this axis
     * @desc boolean, default False
     */
    public set z_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.z_axis`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
