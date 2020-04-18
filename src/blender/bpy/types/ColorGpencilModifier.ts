import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'

/**
 * ColorGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorGpencilModifier.html
 */
export class ColorGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * When apply modifier, create new material
     * @desc boolean, default False
     */
    public get create_materials(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.create_materials`)
    }

    /**
     * Color Hue
     * @desc float in [0, 1], default 0.0
     */
    public get hue(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.hue`)
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
     * Set what colors of the stroke are affected
     * @desc enum in ['BOTH', 'STROKE', 'FILL'], default 'BOTH'
     */
    public get modify_color(): 'BOTH' | 'STROKE' | 'FILL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.modify_color`)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Color Saturation
     * @desc float in [0, 2], default 0.0
     */
    public get saturation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.saturation`)
    }

    /**
     * Color Value
     * @desc float in [0, 2], default 0.0
     */
    public get value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.value`)
    }

    /**
     * When apply modifier, create new material
     * @desc boolean, default False
     */
    public set create_materials(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.create_materials`, value)
    }

    /**
     * Color Hue
     * @desc float in [0, 1], default 0.0
     */
    public set hue(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.hue`, value)
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
     * Set what colors of the stroke are affected
     * @desc enum in ['BOTH', 'STROKE', 'FILL'], default 'BOTH'
     */
    public set modify_color(value: 'BOTH' | 'STROKE' | 'FILL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.modify_color`, value)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Color Saturation
     * @desc float in [0, 2], default 0.0
     */
    public set saturation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.saturation`, value)
    }

    /**
     * Color Value
     * @desc float in [0, 2], default 0.0
     */
    public set value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
