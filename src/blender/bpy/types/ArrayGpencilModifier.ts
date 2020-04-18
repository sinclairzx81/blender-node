import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'
import { BlenderObject } from './BlenderObject'

/**
 * ArrayGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ArrayGpencilModifier.html
 */
export class ArrayGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of items
     * @desc int in [1, 32767], default 0
     */
    public get count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.count`)
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
     * Keep the original stroke in front of new instances (only affect by layer)
     * @desc boolean, default False
     */
    public get keep_on_top(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.keep_on_top`)
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
     * Value for the distance between items
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 3)
    }

    /**
     * Use the location and rotation of another object to determine the distance and rotational change between arrayed items
     * @desc Object
     */
    public get offset_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.offset_object`, BlenderObject)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Use random factors for rotation
     * @desc boolean, default False
     */
    public get random_rot(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.random_rot`)
    }

    /**
     * Use random factors for scale
     * @desc boolean, default False
     */
    public get random_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.random_scale`)
    }

    /**
     * Index of the material used for generated strokes (0 keep original material)
     * @desc int in [0, 32767], default 0
     */
    public get replace_material(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.replace_material`)
    }

    /**
     * Random factor for rotation
     * @desc float in [-10, 10], default 0.0
     */
    public get rot_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rot_factor`)
    }

    /**
     * Value for changes in rotation
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get rotation(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation`, 'number', 3)
    }

    /**
     * Value for changes in scale
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get scale(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 3)
    }

    /**
     * Random factor for scale
     * @desc float in [-10, 10], default 0.0
     */
    public get scale_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale_factor`)
    }

    /**
     * Shiftiness value
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get shift(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.shift`, 'number', 3)
    }

    /**
     * Number of items
     * @desc int in [1, 32767], default 0
     */
    public set count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.count`, value)
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
     * Keep the original stroke in front of new instances (only affect by layer)
     * @desc boolean, default False
     */
    public set keep_on_top(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.keep_on_top`, value)
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
     * Value for the distance between items
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Use the location and rotation of another object to determine the distance and rotational change between arrayed items
     * @desc Object
     */
    public set offset_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.offset_object`, value)
    }

    /**
     * Pass index
     * @desc int in [0, 100], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Use random factors for rotation
     * @desc boolean, default False
     */
    public set random_rot(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.random_rot`, value)
    }

    /**
     * Use random factors for scale
     * @desc boolean, default False
     */
    public set random_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.random_scale`, value)
    }

    /**
     * Index of the material used for generated strokes (0 keep original material)
     * @desc int in [0, 32767], default 0
     */
    public set replace_material(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.replace_material`, value)
    }

    /**
     * Random factor for rotation
     * @desc float in [-10, 10], default 0.0
     */
    public set rot_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rot_factor`, value)
    }

    /**
     * Value for changes in rotation
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set rotation(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Value for changes in scale
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set scale(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Random factor for scale
     * @desc float in [-10, 10], default 0.0
     */
    public set scale_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale_factor`, value)
    }

    /**
     * Shiftiness value
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set shift(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.shift`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
