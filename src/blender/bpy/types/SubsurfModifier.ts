import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * SubsurfModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.SubsurfModifier.html
 */
export class SubsurfModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of subdivisions to perform
     * @desc int in [0, 11], default 0
     */
    public get levels(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.levels`)
    }

    /**
     * Accuracy of vertex positions, lower value is faster but less precise
     * @desc int in [1, 10], default 0
     */
    public get quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.quality`)
    }

    /**
     * Number of subdivisions to perform when rendering
     * @desc int in [0, 11], default 0
     */
    public get render_levels(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.render_levels`)
    }

    /**
     * Skip drawing/rendering of interior subdivided edges
     * @desc boolean, default False
     */
    public get show_only_control_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_only_control_edges`)
    }

    /**
     * Select type of subdivision algorithm
     * @desc enum in ['CATMULL_CLARK', 'SIMPLE'], default 'CATMULL_CLARK'
     */
    public get subdivision_type(): 'CATMULL_CLARK' | 'SIMPLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.subdivision_type`)
    }

    /**
     * Use mesh edge crease information to sharpen edges
     * @desc boolean, default False
     */
    public get use_creases(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_creases`)
    }

    /**
     * Controls how smoothing is applied to UVs
     * @desc enum in ['NONE', 'PRESERVE_CORNERS'], default 'NONE'
     */
    public get uv_smooth(): 'NONE' | 'PRESERVE_CORNERS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.uv_smooth`)
    }

    /**
     * Number of subdivisions to perform
     * @desc int in [0, 11], default 0
     */
    public set levels(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.levels`, value)
    }

    /**
     * Accuracy of vertex positions, lower value is faster but less precise
     * @desc int in [1, 10], default 0
     */
    public set quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * Number of subdivisions to perform when rendering
     * @desc int in [0, 11], default 0
     */
    public set render_levels(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.render_levels`, value)
    }

    /**
     * Skip drawing/rendering of interior subdivided edges
     * @desc boolean, default False
     */
    public set show_only_control_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_only_control_edges`, value)
    }

    /**
     * Select type of subdivision algorithm
     * @desc enum in ['CATMULL_CLARK', 'SIMPLE'], default 'CATMULL_CLARK'
     */
    public set subdivision_type(value: 'CATMULL_CLARK' | 'SIMPLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.subdivision_type`, value)
    }

    /**
     * Use mesh edge crease information to sharpen edges
     * @desc boolean, default False
     */
    public set use_creases(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_creases`, value)
    }

    /**
     * Controls how smoothing is applied to UVs
     * @desc enum in ['NONE', 'PRESERVE_CORNERS'], default 'NONE'
     */
    public set uv_smooth(value: 'NONE' | 'PRESERVE_CORNERS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.uv_smooth`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
