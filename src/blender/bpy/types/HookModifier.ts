import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { CurveMapping } from './CurveMapping'
import { BlenderObject } from './BlenderObject'

/**
 * HookModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.HookModifier.html
 */
export class HookModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom falloff curve
     * @desc CurveMapping, (readonly)
     */
    public get falloff_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.falloff_curve`, CurveMapping)
    }

    /**
     * Indices of vertices bound to the modifier. For bezier curves, handles count as additional vertices
     * @desc int array of 32 items in [0, inf], default (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), (readonly)
     */
    public get vertex_indices(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertex_indices`, 'number', 32)
    }

    /**
     * Center of the hook, used for falloff and display
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
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Center of the hook, used for falloff and display
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
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * Validates and assigns the array of vertex indices bound to the modifier
     * @desc void
     */
    public vertex_indices_set(options: { indices?: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_indices_set`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
