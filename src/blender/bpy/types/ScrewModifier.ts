import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * ScrewModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ScrewModifier.html
 */
export class ScrewModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angle of revolution
     * @desc float in [-inf, inf], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Screw axis
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis`)
    }

    /**
     * Number of times to apply the screw operation
     * @desc int in [1, 10000], default 0
     */
    public get iterations(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.iterations`)
    }

    /**
     * Limit below which to merge vertices
     * @desc float in [0, inf], default 0.0
     */
    public get merge_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.merge_threshold`)
    }

    /**
     * Object to define the screw axis
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Number of steps in the revolution
     * @desc int in [2, 10000], default 0
     */
    public get render_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.render_steps`)
    }

    /**
     * Offset the revolution along its axis
     * @desc float in [-inf, inf], default 0.0
     */
    public get screw_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.screw_offset`)
    }

    /**
     * Number of steps in the revolution
     * @desc int in [2, 10000], default 0
     */
    public get steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.steps`)
    }

    /**
     * Merge adjacent vertices (screw offset must be zero)
     * @desc boolean, default False
     */
    public get use_merge_vertices(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_merge_vertices`)
    }

    /**
     * Calculate the order of edges (needed for meshes, but not curves)
     * @desc boolean, default False
     */
    public get use_normal_calculate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_calculate`)
    }

    /**
     * Flip normals of lathed faces
     * @desc boolean, default False
     */
    public get use_normal_flip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_flip`)
    }

    /**
     * Use the distance between the objects to make a screw
     * @desc boolean, default False
     */
    public get use_object_screw_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_object_screw_offset`)
    }

    /**
     * Output faces with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public get use_smooth_shade(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth_shade`)
    }

    /**
     * Stretch the U coordinates between 0-1 when UV’s are present
     * @desc boolean, default False
     */
    public get use_stretch_u(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stretch_u`)
    }

    /**
     * Stretch the V coordinates between 0-1 when UV’s are present
     * @desc boolean, default False
     */
    public get use_stretch_v(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stretch_v`)
    }

    /**
     * Angle of revolution
     * @desc float in [-inf, inf], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Screw axis
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis`, value)
    }

    /**
     * Number of times to apply the screw operation
     * @desc int in [1, 10000], default 0
     */
    public set iterations(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.iterations`, value)
    }

    /**
     * Limit below which to merge vertices
     * @desc float in [0, inf], default 0.0
     */
    public set merge_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.merge_threshold`, value)
    }

    /**
     * Object to define the screw axis
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Number of steps in the revolution
     * @desc int in [2, 10000], default 0
     */
    public set render_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.render_steps`, value)
    }

    /**
     * Offset the revolution along its axis
     * @desc float in [-inf, inf], default 0.0
     */
    public set screw_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.screw_offset`, value)
    }

    /**
     * Number of steps in the revolution
     * @desc int in [2, 10000], default 0
     */
    public set steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.steps`, value)
    }

    /**
     * Merge adjacent vertices (screw offset must be zero)
     * @desc boolean, default False
     */
    public set use_merge_vertices(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_merge_vertices`, value)
    }

    /**
     * Calculate the order of edges (needed for meshes, but not curves)
     * @desc boolean, default False
     */
    public set use_normal_calculate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_calculate`, value)
    }

    /**
     * Flip normals of lathed faces
     * @desc boolean, default False
     */
    public set use_normal_flip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_flip`, value)
    }

    /**
     * Use the distance between the objects to make a screw
     * @desc boolean, default False
     */
    public set use_object_screw_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_object_screw_offset`, value)
    }

    /**
     * Output faces with smooth shading rather than flat shaded
     * @desc boolean, default False
     */
    public set use_smooth_shade(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth_shade`, value)
    }

    /**
     * Stretch the U coordinates between 0-1 when UV’s are present
     * @desc boolean, default False
     */
    public set use_stretch_u(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stretch_u`, value)
    }

    /**
     * Stretch the V coordinates between 0-1 when UV’s are present
     * @desc boolean, default False
     */
    public set use_stretch_v(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stretch_v`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
