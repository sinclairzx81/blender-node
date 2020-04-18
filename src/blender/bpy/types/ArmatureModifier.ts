import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * ArmatureModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ArmatureModifier.html
 */
export class ArmatureModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Armature object to deform with
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Bind Bone envelopes to armature modifier
     * @desc boolean, default False
     */
    public get use_bone_envelopes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bone_envelopes`)
    }

    /**
     * Deform rotation interpolation with quaternions
     * @desc boolean, default False
     */
    public get use_deform_preserve_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform_preserve_volume`)
    }

    /**
     * Use same input as previous modifier, and mix results using overall vgroup
     * @desc boolean, default False
     */
    public get use_multi_modifier(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multi_modifier`)
    }

    /**
     * Bind vertex groups to armature modifier
     * @desc boolean, default False
     */
    public get use_vertex_groups(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_vertex_groups`)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
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
     * Armature object to deform with
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Bind Bone envelopes to armature modifier
     * @desc boolean, default False
     */
    public set use_bone_envelopes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_bone_envelopes`, value)
    }

    /**
     * Deform rotation interpolation with quaternions
     * @desc boolean, default False
     */
    public set use_deform_preserve_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform_preserve_volume`, value)
    }

    /**
     * Use same input as previous modifier, and mix results using overall vgroup
     * @desc boolean, default False
     */
    public set use_multi_modifier(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multi_modifier`, value)
    }

    /**
     * Bind vertex groups to armature modifier
     * @desc boolean, default False
     */
    public set use_vertex_groups(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_vertex_groups`, value)
    }

    /**
     * Name of Vertex Group which determines influence of modifier per point
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
