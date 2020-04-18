import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { CurveMapping } from './CurveMapping'
import { BlenderObject } from './BlenderObject'
import { Texture } from './Texture'

/**
 * VertexWeightEditModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexWeightEditModifier.html
 */
export class VertexWeightEditModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom mapping curve
     * @desc CurveMapping, (readonly)
     */
    public get map_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.map_curve`, CurveMapping)
    }

    /**
     * Lower bound for a vertex’s weight to be added to the vgroup
     * @desc float in [0, 1], default 0.0
     */
    public get add_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.add_threshold`)
    }

    /**
     * Default weight a vertex will have if it is not in the vgroup
     * @desc float in [0, 1], default 0.0
     */
    public get default_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_weight`)
    }

    /**
     * How weights are mapped to their new values
     * @desc enum in ['LINEAR', 'CURVE', 'SHARP', 'SMOOTH', 'ROOT', 'ICON_SPHERECURVE', 'RANDOM', 'STEP'], default 'LINEAR'
     */
    public get falloff_type(): 'LINEAR' | 'CURVE' | 'SHARP' | 'SMOOTH' | 'ROOT' | 'ICON_SPHERECURVE' | 'RANDOM' | 'STEP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff_type`)
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
     * Upper bound for a vertex’s weight to be removed from the vgroup
     * @desc float in [0, 1], default 0.0
     */
    public get remove_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.remove_threshold`)
    }

    /**
     * Add vertices with weight over threshold to vgroup
     * @desc boolean, default False
     */
    public get use_add(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_add`)
    }

    /**
     * Remove vertices with weight below threshold from vgroup
     * @desc boolean, default False
     */
    public get use_remove(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_remove`)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Lower bound for a vertex’s weight to be added to the vgroup
     * @desc float in [0, 1], default 0.0
     */
    public set add_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.add_threshold`, value)
    }

    /**
     * Default weight a vertex will have if it is not in the vgroup
     * @desc float in [0, 1], default 0.0
     */
    public set default_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_weight`, value)
    }

    /**
     * How weights are mapped to their new values
     * @desc enum in ['LINEAR', 'CURVE', 'SHARP', 'SMOOTH', 'ROOT', 'ICON_SPHERECURVE', 'RANDOM', 'STEP'], default 'LINEAR'
     */
    public set falloff_type(value: 'LINEAR' | 'CURVE' | 'SHARP' | 'SMOOTH' | 'ROOT' | 'ICON_SPHERECURVE' | 'RANDOM' | 'STEP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff_type`, value)
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
     * Upper bound for a vertex’s weight to be removed from the vgroup
     * @desc float in [0, 1], default 0.0
     */
    public set remove_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.remove_threshold`, value)
    }

    /**
     * Add vertices with weight over threshold to vgroup
     * @desc boolean, default False
     */
    public set use_add(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_add`, value)
    }

    /**
     * Remove vertices with weight below threshold from vgroup
     * @desc boolean, default False
     */
    public set use_remove(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_remove`, value)
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
