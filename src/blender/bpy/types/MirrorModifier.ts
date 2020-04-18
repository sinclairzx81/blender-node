import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * MirrorModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MirrorModifier.html
 */
export class MirrorModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distance within which mirrored vertices are merged
     * @desc float in [0, inf], default 0.0
     */
    public get merge_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.merge_threshold`)
    }

    /**
     * Object to use as mirror
     * @desc Object
     */
    public get mirror_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mirror_object`, BlenderObject)
    }

    /**
     * Amount to offset mirrored UVs flipping point from the 0.5 on the U axis
     * @desc float in [-1, 1], default 0.0
     */
    public get mirror_offset_u(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mirror_offset_u`)
    }

    /**
     * Amount to offset mirrored UVs flipping point from the 0.5 point on the V axis
     * @desc float in [-1, 1], default 0.0
     */
    public get mirror_offset_v(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mirror_offset_v`)
    }

    /**
     * Mirrored UV offset on the U axis
     * @desc float in [-10000, 10000], default 0.0
     */
    public get offset_u(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_u`)
    }

    /**
     * Mirrored UV offset on the V axis
     * @desc float in [-10000, 10000], default 0.0
     */
    public get offset_v(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset_v`)
    }

    /**
     * Enable axis mirror
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get use_axis(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.use_axis`, 'boolean', 3)
    }

    /**
     * Cuts the mesh across the mirror plane
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get use_bisect_axis(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.use_bisect_axis`, 'boolean', 3)
    }

    /**
     * Flips the direction of the slice
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get use_bisect_flip_axis(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.use_bisect_flip_axis`, 'boolean', 3)
    }

    /**
     * Prevent vertices from going through the mirror during transform
     * @desc boolean, default False
     */
    public get use_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clip`)
    }

    /**
     * Merge vertices within the merge threshold
     * @desc boolean, default False
     */
    public get use_mirror_merge(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_merge`)
    }

    /**
     * Mirror the U texture coordinate around the flip offset point
     * @desc boolean, default False
     */
    public get use_mirror_u(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_u`)
    }

    /**
     * Mirror the V texture coordinate around the flip offset point
     * @desc boolean, default False
     */
    public get use_mirror_v(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_v`)
    }

    /**
     * Mirror vertex groups (e.g. .R->.L)
     * @desc boolean, default False
     */
    public get use_mirror_vertex_groups(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_vertex_groups`)
    }

    /**
     * Distance within which mirrored vertices are merged
     * @desc float in [0, inf], default 0.0
     */
    public set merge_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.merge_threshold`, value)
    }

    /**
     * Object to use as mirror
     * @desc Object
     */
    public set mirror_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mirror_object`, value)
    }

    /**
     * Amount to offset mirrored UVs flipping point from the 0.5 on the U axis
     * @desc float in [-1, 1], default 0.0
     */
    public set mirror_offset_u(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mirror_offset_u`, value)
    }

    /**
     * Amount to offset mirrored UVs flipping point from the 0.5 point on the V axis
     * @desc float in [-1, 1], default 0.0
     */
    public set mirror_offset_v(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mirror_offset_v`, value)
    }

    /**
     * Mirrored UV offset on the U axis
     * @desc float in [-10000, 10000], default 0.0
     */
    public set offset_u(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_u`, value)
    }

    /**
     * Mirrored UV offset on the V axis
     * @desc float in [-10000, 10000], default 0.0
     */
    public set offset_v(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset_v`, value)
    }

    /**
     * Enable axis mirror
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set use_axis(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.use_axis`, value)
    }

    /**
     * Cuts the mesh across the mirror plane
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set use_bisect_axis(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.use_bisect_axis`, value)
    }

    /**
     * Flips the direction of the slice
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set use_bisect_flip_axis(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.use_bisect_flip_axis`, value)
    }

    /**
     * Prevent vertices from going through the mirror during transform
     * @desc boolean, default False
     */
    public set use_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clip`, value)
    }

    /**
     * Merge vertices within the merge threshold
     * @desc boolean, default False
     */
    public set use_mirror_merge(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_merge`, value)
    }

    /**
     * Mirror the U texture coordinate around the flip offset point
     * @desc boolean, default False
     */
    public set use_mirror_u(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_u`, value)
    }

    /**
     * Mirror the V texture coordinate around the flip offset point
     * @desc boolean, default False
     */
    public set use_mirror_v(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_v`, value)
    }

    /**
     * Mirror vertex groups (e.g. .R->.L)
     * @desc boolean, default False
     */
    public set use_mirror_vertex_groups(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_vertex_groups`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
