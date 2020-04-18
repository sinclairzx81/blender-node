import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { GpencilModifier } from './GpencilModifier'
import { CurveMapping } from './CurveMapping'
import { BlenderObject } from './BlenderObject'

/**
 * HookGpencilModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.HookGpencilModifier.html
 */
export class HookGpencilModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom light falloff curve
     * @desc CurveMapping, (readonly)
     */
    public get falloff_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.falloff_curve`, CurveMapping)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get center(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.center`, 'number', 3)
    }

    /**
     * If not zero, the distance from the hook where influence ends
     * @desc float in [0, inf], default 0.0
     */
    public get falloff_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.falloff_radius`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'CURVE', 'SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR', 'CONSTANT'], default 'NONE'
     */
    public get falloff_type(): 'NONE' | 'CURVE' | 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff_type`)
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
     * Reverse the transformation between this object and its target
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_inverse(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_inverse`, 'number', 4, 4)
    }

    /**
     * Parent Object for hook, also recalculates and clears offset
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
     * Relative force of the hook
     * @desc float in [0, 1], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Name of Parent Bone for hook (if applicable), also recalculates and clears offset
     * @desc string, default '', (never None)
     */
    public get subtarget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.subtarget`)
    }

    /**
     * Compensate for non-uniform object scale
     * @desc boolean, default False
     */
    public get use_falloff_uniform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_falloff_uniform`)
    }

    /**
     * Vertex group name for modulating the deform
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set center(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.center`, value)
    }

    /**
     * If not zero, the distance from the hook where influence ends
     * @desc float in [0, inf], default 0.0
     */
    public set falloff_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.falloff_radius`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'CURVE', 'SMOOTH', 'SPHERE', 'ROOT', 'INVERSE_SQUARE', 'SHARP', 'LINEAR', 'CONSTANT'], default 'NONE'
     */
    public set falloff_type(value: 'NONE' | 'CURVE' | 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff_type`, value)
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
     * Reverse the transformation between this object and its target
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_inverse(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_inverse`, value)
    }

    /**
     * Parent Object for hook, also recalculates and clears offset
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
     * Relative force of the hook
     * @desc float in [0, 1], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Name of Parent Bone for hook (if applicable), also recalculates and clears offset
     * @desc string, default '', (never None)
     */
    public set subtarget(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.subtarget`, value)
    }

    /**
     * Compensate for non-uniform object scale
     * @desc boolean, default False
     */
    public set use_falloff_uniform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_falloff_uniform`, value)
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
