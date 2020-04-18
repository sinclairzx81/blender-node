import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { LatticePoint } from './LatticePoint'
import { Key } from './Key'

/**
 * Lattice
 * 
 * https://docs.blender.org/api/current/bpy.types.Lattice.html
 */
export class Lattice {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * True when used in editmode
     * @desc boolean, default False, (readonly)
     */
    public get is_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_editmode`)
    }

    /**
     * Points of the lattice
     * @desc bpy_prop_collection of LatticePoint, (readonly)
     */
    public get points(): BlenderCollection<LatticePoint> & Indexable<LatticePoint> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.points`, LatticePoint)
    }

    /**
     * 
     * @desc Key, (readonly)
     */
    public get shape_keys(): Key {
        return PythonInterop.getClass(this.interop, `${this.accessor}.shape_keys`, Key)
    }

    /**
     * 
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_BSPLINE'
     */
    public get interpolation_type_u(): 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation_type_u`)
    }

    /**
     * 
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_BSPLINE'
     */
    public get interpolation_type_v(): 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation_type_v`)
    }

    /**
     * 
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_BSPLINE'
     */
    public get interpolation_type_w(): 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation_type_w`)
    }

    /**
     * Point in U direction (can’t be changed when there are shape keys)
     * @desc int in [1, 64], default 0
     */
    public get points_u(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.points_u`)
    }

    /**
     * Point in V direction (can’t be changed when there are shape keys)
     * @desc int in [1, 64], default 0
     */
    public get points_v(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.points_v`)
    }

    /**
     * Point in W direction (can’t be changed when there are shape keys)
     * @desc int in [1, 64], default 0
     */
    public get points_w(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.points_w`)
    }

    /**
     * Only draw, and take into account, the outer vertices
     * @desc boolean, default False
     */
    public get use_outside(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_outside`)
    }

    /**
     * Vertex group to apply the influence of the lattice
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * 
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_BSPLINE'
     */
    public set interpolation_type_u(value: 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation_type_u`, value)
    }

    /**
     * 
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_BSPLINE'
     */
    public set interpolation_type_v(value: 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation_type_v`, value)
    }

    /**
     * 
     * @desc enum in ['KEY_LINEAR', 'KEY_CARDINAL', 'KEY_CATMULL_ROM', 'KEY_BSPLINE'], default 'KEY_BSPLINE'
     */
    public set interpolation_type_w(value: 'KEY_LINEAR' | 'KEY_CARDINAL' | 'KEY_CATMULL_ROM' | 'KEY_BSPLINE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation_type_w`, value)
    }

    /**
     * Point in U direction (can’t be changed when there are shape keys)
     * @desc int in [1, 64], default 0
     */
    public set points_u(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.points_u`, value)
    }

    /**
     * Point in V direction (can’t be changed when there are shape keys)
     * @desc int in [1, 64], default 0
     */
    public set points_v(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.points_v`, value)
    }

    /**
     * Point in W direction (can’t be changed when there are shape keys)
     * @desc int in [1, 64], default 0
     */
    public set points_w(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.points_w`, value)
    }

    /**
     * Only draw, and take into account, the outer vertices
     * @desc boolean, default False
     */
    public set use_outside(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_outside`, value)
    }

    /**
     * Vertex group to apply the influence of the lattice
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    /**
     * Transform lattice by a matrix
     * @desc void
     */
    public transform(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], shape_keys?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
    }

    /**
     * update_gpu_tag
     * @desc void
     */
    public update_gpu_tag(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_gpu_tag`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
