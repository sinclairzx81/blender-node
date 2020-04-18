import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * MeshDeformModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshDeformModifier.html
 */
export class MeshDeformModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Whether geometry has been bound to control cage
     * @desc boolean, default False, (readonly)
     */
    public get is_bound(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_bound`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Mesh object to deform with
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * The grid size for binding
     * @desc int in [2, 10], default 0
     */
    public get precision(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.precision`)
    }

    /**
     * Recompute binding dynamically on top of other deformers (slower and more memory consuming)
     * @desc boolean, default False
     */
    public get use_dynamic_bind(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dynamic_bind`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Mesh object to deform with
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * The grid size for binding
     * @desc int in [2, 10], default 0
     */
    public set precision(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.precision`, value)
    }

    /**
     * Recompute binding dynamically on top of other deformers (slower and more memory consuming)
     * @desc boolean, default False
     */
    public set use_dynamic_bind(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dynamic_bind`, value)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
