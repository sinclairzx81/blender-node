import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'
import { Texture } from './Texture'

/**
 * VertexWeightProximityModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexWeightProximityModifier.html
 */
export class VertexWeightProximityModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * How weights are mapped to their new values
     * @desc enum in ['LINEAR', 'SHARP', 'SMOOTH', 'ROOT', 'ICON_SPHERECURVE', 'RANDOM', 'STEP'], default 'LINEAR'
     */
    public get falloff_type(): 'LINEAR' | 'SHARP' | 'SMOOTH' | 'ROOT' | 'ICON_SPHERECURVE' | 'RANDOM' | 'STEP' {
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
     * Distance mapping to weight 1.0
     * @desc float in [0, inf], default 0.0
     */
    public get max_dist(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max_dist`)
    }

    /**
     * Distance mapping to weight 0.0
     * @desc float in [0, inf], default 0.0
     */
    public get min_dist(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min_dist`)
    }

    /**
     * Use the shortest computed distance to target object’s geometry as weight
     * @desc enum set in {'VERTEX', 'EDGE', 'FACE'}, default {'FACE'}
     */
    public get proximity_geometry(): ('VERTEX' | 'EDGE' | 'FACE')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.proximity_geometry`)
    }

    /**
     * Which distances to target object to use
     * @desc enum in ['OBJECT', 'GEOMETRY'], default 'GEOMETRY'
     */
    public get proximity_mode(): 'OBJECT' | 'GEOMETRY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.proximity_mode`)
    }

    /**
     * Object to calculate vertices distances from
     * @desc Object
     */
    public get target(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.target`, BlenderObject)
    }

    /**
     * Vertex group name
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * How weights are mapped to their new values
     * @desc enum in ['LINEAR', 'SHARP', 'SMOOTH', 'ROOT', 'ICON_SPHERECURVE', 'RANDOM', 'STEP'], default 'LINEAR'
     */
    public set falloff_type(value: 'LINEAR' | 'SHARP' | 'SMOOTH' | 'ROOT' | 'ICON_SPHERECURVE' | 'RANDOM' | 'STEP') {
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
     * Distance mapping to weight 1.0
     * @desc float in [0, inf], default 0.0
     */
    public set max_dist(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max_dist`, value)
    }

    /**
     * Distance mapping to weight 0.0
     * @desc float in [0, inf], default 0.0
     */
    public set min_dist(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.min_dist`, value)
    }

    /**
     * Use the shortest computed distance to target object’s geometry as weight
     * @desc enum set in {'VERTEX', 'EDGE', 'FACE'}, default {'FACE'}
     */
    public set proximity_geometry(value: ('VERTEX' | 'EDGE' | 'FACE')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.proximity_geometry`, value)
    }

    /**
     * Which distances to target object to use
     * @desc enum in ['OBJECT', 'GEOMETRY'], default 'GEOMETRY'
     */
    public set proximity_mode(value: 'OBJECT' | 'GEOMETRY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.proximity_mode`, value)
    }

    /**
     * Object to calculate vertices distances from
     * @desc Object
     */
    public set target(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.target`, value)
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
