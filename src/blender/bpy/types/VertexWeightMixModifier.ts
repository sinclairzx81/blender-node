import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'
import { Texture } from './Texture'

/**
 * VertexWeightMixModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexWeightMixModifier.html
 */
export class VertexWeightMixModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Default weight a vertex will have if it is not in the first A vgroup
     * @desc float in [0, 1], default 0.0
     */
    public get default_weight_a(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_weight_a`)
    }

    /**
     * Default weight a vertex will have if it is not in the second B vgroup
     * @desc float in [0, 1], default 0.0
     */
    public get default_weight_b(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_weight_b`)
    }

    /**
     * Global influence of current modifications on vgroup
     * @desc float in [-inf, inf], default 0.0
     */
    public get mask_constant(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mask_constant`)
    }

    /**
     * Which object to take texture coordinates from
     * @desc Object
     */
    public get mask_tex_map_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask_tex_map_object`, BlenderObject)
    }

    /**
     * Which texture coordinates to use for mapping
     * @desc enum in ['LOCAL', 'GLOBAL', 'OBJECT', 'UV'], default 'LOCAL'
     */
    public get mask_tex_mapping(): 'LOCAL' | 'GLOBAL' | 'OBJECT' | 'UV' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_tex_mapping`)
    }

    /**
     * Which texture channel to use for masking
     * @desc enum in ['INT', 'RED', 'GREEN', 'BLUE', 'HUE', 'SAT', 'VAL', 'ALPHA'], default 'INT'
     */
    public get mask_tex_use_channel(): 'INT' | 'RED' | 'GREEN' | 'BLUE' | 'HUE' | 'SAT' | 'VAL' | 'ALPHA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_tex_use_channel`)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get mask_tex_uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.mask_tex_uv_layer`)
    }

    /**
     * Masking texture
     * @desc Texture
     */
    public get mask_texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask_texture`, Texture)
    }

    /**
     * Masking vertex group name
     * @desc string, default '', (never None)
     */
    public get mask_vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.mask_vertex_group`)
    }

    /**
     * How weights from vgroup B affect weights of vgroup A
     * @desc enum in ['SET', 'ADD', 'SUB', 'MUL', 'DIV', 'DIF', 'AVG'], default 'SET'
     */
    public get mix_mode(): 'SET' | 'ADD' | 'SUB' | 'MUL' | 'DIV' | 'DIF' | 'AVG' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode`)
    }

    /**
     * Which vertices should be affected
     * @desc enum in ['ALL', 'A', 'B', 'OR', 'AND'], default 'ALL'
     */
    public get mix_set(): 'ALL' | 'A' | 'B' | 'OR' | 'AND' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_set`)
    }

    /**
     * First vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group_a(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_a`)
    }

    /**
     * Second vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group_b(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group_b`)
    }

    /**
     * Default weight a vertex will have if it is not in the first A vgroup
     * @desc float in [0, 1], default 0.0
     */
    public set default_weight_a(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_weight_a`, value)
    }

    /**
     * Default weight a vertex will have if it is not in the second B vgroup
     * @desc float in [0, 1], default 0.0
     */
    public set default_weight_b(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_weight_b`, value)
    }

    /**
     * Global influence of current modifications on vgroup
     * @desc float in [-inf, inf], default 0.0
     */
    public set mask_constant(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mask_constant`, value)
    }

    /**
     * Which object to take texture coordinates from
     * @desc Object
     */
    public set mask_tex_map_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask_tex_map_object`, value)
    }

    /**
     * Which texture coordinates to use for mapping
     * @desc enum in ['LOCAL', 'GLOBAL', 'OBJECT', 'UV'], default 'LOCAL'
     */
    public set mask_tex_mapping(value: 'LOCAL' | 'GLOBAL' | 'OBJECT' | 'UV') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_tex_mapping`, value)
    }

    /**
     * Which texture channel to use for masking
     * @desc enum in ['INT', 'RED', 'GREEN', 'BLUE', 'HUE', 'SAT', 'VAL', 'ALPHA'], default 'INT'
     */
    public set mask_tex_use_channel(value: 'INT' | 'RED' | 'GREEN' | 'BLUE' | 'HUE' | 'SAT' | 'VAL' | 'ALPHA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_tex_use_channel`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set mask_tex_uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.mask_tex_uv_layer`, value)
    }

    /**
     * Masking texture
     * @desc Texture
     */
    public set mask_texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask_texture`, value)
    }

    /**
     * Masking vertex group name
     * @desc string, default '', (never None)
     */
    public set mask_vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.mask_vertex_group`, value)
    }

    /**
     * How weights from vgroup B affect weights of vgroup A
     * @desc enum in ['SET', 'ADD', 'SUB', 'MUL', 'DIV', 'DIF', 'AVG'], default 'SET'
     */
    public set mix_mode(value: 'SET' | 'ADD' | 'SUB' | 'MUL' | 'DIV' | 'DIF' | 'AVG') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode`, value)
    }

    /**
     * Which vertices should be affected
     * @desc enum in ['ALL', 'A', 'B', 'OR', 'AND'], default 'ALL'
     */
    public set mix_set(value: 'ALL' | 'A' | 'B' | 'OR' | 'AND') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_set`, value)
    }

    /**
     * First vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group_a(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_a`, value)
    }

    /**
     * Second vertex group name
     * @desc string, default '', (never None)
     */
    public set vertex_group_b(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group_b`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
