import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { BlenderObject } from './BlenderObject'

/**
 * DataTransferModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.DataTransferModifier.html
 */
export class DataTransferModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Which edge data layers to transfer
     * @desc enum set in {'SHARP_EDGE', 'SEAM', 'CREASE', 'BEVEL_WEIGHT_EDGE', 'FREESTYLE_EDGE'}, default {'SHARP_EDGE'}
     */
    public get data_types_edges(): ('SHARP_EDGE' | 'SEAM' | 'CREASE' | 'BEVEL_WEIGHT_EDGE' | 'FREESTYLE_EDGE')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.data_types_edges`)
    }

    /**
     * Which face corner data layers to transfer
     * @desc enum set in {'CUSTOM_NORMAL', 'VCOL', 'UV'}, default {'CUSTOM_NORMAL'}
     */
    public get data_types_loops(): ('CUSTOM_NORMAL' | 'VCOL' | 'UV')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.data_types_loops`)
    }

    /**
     * Which poly data layers to transfer
     * @desc enum set in {'SMOOTH', 'FREESTYLE_FACE'}, default {'SMOOTH'}
     */
    public get data_types_polys(): ('SMOOTH' | 'FREESTYLE_FACE')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.data_types_polys`)
    }

    /**
     * Which vertex data layers to transfer
     * @desc enum set in {'VGROUP_WEIGHTS', 'BEVEL_WEIGHT_VERT'}, default {'VGROUP_WEIGHTS'}
     */
    public get data_types_verts(): ('VGROUP_WEIGHTS' | 'BEVEL_WEIGHT_VERT')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.data_types_verts`)
    }

    /**
     * Method used to map source edges to destination ones
     * @desc enum in ['TOPOLOGY', 'VERT_NEAREST', 'NEAREST', 'POLY_NEAREST', 'EDGEINTERP_VNORPROJ'], default 'NEAREST'
     */
    public get edge_mapping(): 'TOPOLOGY' | 'VERT_NEAREST' | 'NEAREST' | 'POLY_NEAREST' | 'EDGEINTERP_VNORPROJ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.edge_mapping`)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public get invert_vertex_group(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_vertex_group`)
    }

    /**
     * Factor controlling precision of islands handling (typically, 0.1 should be enough, higher values can make things really slow)
     * @desc float in [0, 1], default 0.0
     */
    public get islands_precision(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.islands_precision`)
    }

    /**
     * How to match source and destination layers
     * @desc enum in ['ACTIVE', 'NAME', 'INDEX'], default 'NAME'
     */
    public get layers_uv_select_dst(): 'ACTIVE' | 'NAME' | 'INDEX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layers_uv_select_dst`)
    }

    /**
     * Which layers to transfer, in case of multi-layers types
     * @desc enum in ['ACTIVE', 'ALL', 'BONE_SELECT', 'BONE_DEFORM'], default 'ALL'
     */
    public get layers_uv_select_src(): 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layers_uv_select_src`)
    }

    /**
     * How to match source and destination layers
     * @desc enum in ['ACTIVE', 'NAME', 'INDEX'], default 'NAME'
     */
    public get layers_vcol_select_dst(): 'ACTIVE' | 'NAME' | 'INDEX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layers_vcol_select_dst`)
    }

    /**
     * Which layers to transfer, in case of multi-layers types
     * @desc enum in ['ACTIVE', 'ALL', 'BONE_SELECT', 'BONE_DEFORM'], default 'ALL'
     */
    public get layers_vcol_select_src(): 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layers_vcol_select_src`)
    }

    /**
     * How to match source and destination layers
     * @desc enum in ['ACTIVE', 'NAME', 'INDEX'], default 'NAME'
     */
    public get layers_vgroup_select_dst(): 'ACTIVE' | 'NAME' | 'INDEX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layers_vgroup_select_dst`)
    }

    /**
     * Which layers to transfer, in case of multi-layers types
     * @desc enum in ['ACTIVE', 'ALL', 'BONE_SELECT', 'BONE_DEFORM'], default 'ALL'
     */
    public get layers_vgroup_select_src(): 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layers_vgroup_select_src`)
    }

    /**
     * Method used to map source faces’ corners to destination ones
     * @desc enum in ['TOPOLOGY', 'NEAREST_NORMAL', 'NEAREST_POLYNOR', 'NEAREST_POLY', 'POLYINTERP_NEAREST', 'POLYINTERP_LNORPROJ'], default 'NEAREST_POLYNOR'
     */
    public get loop_mapping(): 'TOPOLOGY' | 'NEAREST_NORMAL' | 'NEAREST_POLYNOR' | 'NEAREST_POLY' | 'POLYINTERP_NEAREST' | 'POLYINTERP_LNORPROJ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.loop_mapping`)
    }

    /**
     * Maximum allowed distance between source and destination element, for non-topology mappings
     * @desc float in [0, inf], default 1.0
     */
    public get max_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max_distance`)
    }

    /**
     * Factor to use when applying data to destination (exact behavior depends on mix mode, multiplied with weights from vertex group when defined)
     * @desc float in [0, 1], default 1.0
     */
    public get mix_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.mix_factor`)
    }

    /**
     * How to affect destination elements with source values
     * @desc enum in ['REPLACE', 'ABOVE_THRESHOLD', 'BELOW_THRESHOLD', 'MIX', 'ADD', 'SUB', 'MUL'], default 'REPLACE'
     */
    public get mix_mode(): 'REPLACE' | 'ABOVE_THRESHOLD' | 'BELOW_THRESHOLD' | 'MIX' | 'ADD' | 'SUB' | 'MUL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mix_mode`)
    }

    /**
     * Object to transfer data from
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Method used to map source faces to destination ones
     * @desc enum in ['TOPOLOGY', 'NEAREST', 'NORMAL', 'POLYINTERP_PNORPROJ'], default 'NEAREST'
     */
    public get poly_mapping(): 'TOPOLOGY' | 'NEAREST' | 'NORMAL' | 'POLYINTERP_PNORPROJ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.poly_mapping`)
    }

    /**
     * ‘Width’ of rays (especially useful when raycasting against vertices or edges)
     * @desc float in [0, inf], default 0.0
     */
    public get ray_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ray_radius`)
    }

    /**
     * Enable edge data transfer
     * @desc boolean, default False
     */
    public get use_edge_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_data`)
    }

    /**
     * Enable face corner data transfer
     * @desc boolean, default False
     */
    public get use_loop_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_loop_data`)
    }

    /**
     * Source elements must be closer than given distance from destination one
     * @desc boolean, default False
     */
    public get use_max_distance(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_max_distance`)
    }

    /**
     * Evaluate source and destination meshes in global space
     * @desc boolean, default True
     */
    public get use_object_transform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_object_transform`)
    }

    /**
     * Enable face data transfer
     * @desc boolean, default False
     */
    public get use_poly_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_poly_data`)
    }

    /**
     * Enable vertex data transfer
     * @desc boolean, default False
     */
    public get use_vert_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_vert_data`)
    }

    /**
     * Method used to map source vertices to destination ones
     * @desc enum in ['TOPOLOGY', 'NEAREST', 'EDGE_NEAREST', 'EDGEINTERP_NEAREST', 'POLY_NEAREST', 'POLYINTERP_NEAREST', 'POLYINTERP_VNORPROJ'], default 'NEAREST'
     */
    public get vert_mapping(): 'TOPOLOGY' | 'NEAREST' | 'EDGE_NEAREST' | 'EDGEINTERP_NEAREST' | 'POLY_NEAREST' | 'POLYINTERP_NEAREST' | 'POLYINTERP_VNORPROJ' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vert_mapping`)
    }

    /**
     * Vertex group name for selecting the affected areas
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * Which edge data layers to transfer
     * @desc enum set in {'SHARP_EDGE', 'SEAM', 'CREASE', 'BEVEL_WEIGHT_EDGE', 'FREESTYLE_EDGE'}, default {'SHARP_EDGE'}
     */
    public set data_types_edges(value: ('SHARP_EDGE' | 'SEAM' | 'CREASE' | 'BEVEL_WEIGHT_EDGE' | 'FREESTYLE_EDGE')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.data_types_edges`, value)
    }

    /**
     * Which face corner data layers to transfer
     * @desc enum set in {'CUSTOM_NORMAL', 'VCOL', 'UV'}, default {'CUSTOM_NORMAL'}
     */
    public set data_types_loops(value: ('CUSTOM_NORMAL' | 'VCOL' | 'UV')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.data_types_loops`, value)
    }

    /**
     * Which poly data layers to transfer
     * @desc enum set in {'SMOOTH', 'FREESTYLE_FACE'}, default {'SMOOTH'}
     */
    public set data_types_polys(value: ('SMOOTH' | 'FREESTYLE_FACE')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.data_types_polys`, value)
    }

    /**
     * Which vertex data layers to transfer
     * @desc enum set in {'VGROUP_WEIGHTS', 'BEVEL_WEIGHT_VERT'}, default {'VGROUP_WEIGHTS'}
     */
    public set data_types_verts(value: ('VGROUP_WEIGHTS' | 'BEVEL_WEIGHT_VERT')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.data_types_verts`, value)
    }

    /**
     * Method used to map source edges to destination ones
     * @desc enum in ['TOPOLOGY', 'VERT_NEAREST', 'NEAREST', 'POLY_NEAREST', 'EDGEINTERP_VNORPROJ'], default 'NEAREST'
     */
    public set edge_mapping(value: 'TOPOLOGY' | 'VERT_NEAREST' | 'NEAREST' | 'POLY_NEAREST' | 'EDGEINTERP_VNORPROJ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.edge_mapping`, value)
    }

    /**
     * Invert vertex group influence
     * @desc boolean, default False
     */
    public set invert_vertex_group(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_vertex_group`, value)
    }

    /**
     * Factor controlling precision of islands handling (typically, 0.1 should be enough, higher values can make things really slow)
     * @desc float in [0, 1], default 0.0
     */
    public set islands_precision(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.islands_precision`, value)
    }

    /**
     * How to match source and destination layers
     * @desc enum in ['ACTIVE', 'NAME', 'INDEX'], default 'NAME'
     */
    public set layers_uv_select_dst(value: 'ACTIVE' | 'NAME' | 'INDEX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layers_uv_select_dst`, value)
    }

    /**
     * Which layers to transfer, in case of multi-layers types
     * @desc enum in ['ACTIVE', 'ALL', 'BONE_SELECT', 'BONE_DEFORM'], default 'ALL'
     */
    public set layers_uv_select_src(value: 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layers_uv_select_src`, value)
    }

    /**
     * How to match source and destination layers
     * @desc enum in ['ACTIVE', 'NAME', 'INDEX'], default 'NAME'
     */
    public set layers_vcol_select_dst(value: 'ACTIVE' | 'NAME' | 'INDEX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layers_vcol_select_dst`, value)
    }

    /**
     * Which layers to transfer, in case of multi-layers types
     * @desc enum in ['ACTIVE', 'ALL', 'BONE_SELECT', 'BONE_DEFORM'], default 'ALL'
     */
    public set layers_vcol_select_src(value: 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layers_vcol_select_src`, value)
    }

    /**
     * How to match source and destination layers
     * @desc enum in ['ACTIVE', 'NAME', 'INDEX'], default 'NAME'
     */
    public set layers_vgroup_select_dst(value: 'ACTIVE' | 'NAME' | 'INDEX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layers_vgroup_select_dst`, value)
    }

    /**
     * Which layers to transfer, in case of multi-layers types
     * @desc enum in ['ACTIVE', 'ALL', 'BONE_SELECT', 'BONE_DEFORM'], default 'ALL'
     */
    public set layers_vgroup_select_src(value: 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.layers_vgroup_select_src`, value)
    }

    /**
     * Method used to map source faces’ corners to destination ones
     * @desc enum in ['TOPOLOGY', 'NEAREST_NORMAL', 'NEAREST_POLYNOR', 'NEAREST_POLY', 'POLYINTERP_NEAREST', 'POLYINTERP_LNORPROJ'], default 'NEAREST_POLYNOR'
     */
    public set loop_mapping(value: 'TOPOLOGY' | 'NEAREST_NORMAL' | 'NEAREST_POLYNOR' | 'NEAREST_POLY' | 'POLYINTERP_NEAREST' | 'POLYINTERP_LNORPROJ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.loop_mapping`, value)
    }

    /**
     * Maximum allowed distance between source and destination element, for non-topology mappings
     * @desc float in [0, inf], default 1.0
     */
    public set max_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max_distance`, value)
    }

    /**
     * Factor to use when applying data to destination (exact behavior depends on mix mode, multiplied with weights from vertex group when defined)
     * @desc float in [0, 1], default 1.0
     */
    public set mix_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.mix_factor`, value)
    }

    /**
     * How to affect destination elements with source values
     * @desc enum in ['REPLACE', 'ABOVE_THRESHOLD', 'BELOW_THRESHOLD', 'MIX', 'ADD', 'SUB', 'MUL'], default 'REPLACE'
     */
    public set mix_mode(value: 'REPLACE' | 'ABOVE_THRESHOLD' | 'BELOW_THRESHOLD' | 'MIX' | 'ADD' | 'SUB' | 'MUL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mix_mode`, value)
    }

    /**
     * Object to transfer data from
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Method used to map source faces to destination ones
     * @desc enum in ['TOPOLOGY', 'NEAREST', 'NORMAL', 'POLYINTERP_PNORPROJ'], default 'NEAREST'
     */
    public set poly_mapping(value: 'TOPOLOGY' | 'NEAREST' | 'NORMAL' | 'POLYINTERP_PNORPROJ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.poly_mapping`, value)
    }

    /**
     * ‘Width’ of rays (especially useful when raycasting against vertices or edges)
     * @desc float in [0, inf], default 0.0
     */
    public set ray_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ray_radius`, value)
    }

    /**
     * Enable edge data transfer
     * @desc boolean, default False
     */
    public set use_edge_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_data`, value)
    }

    /**
     * Enable face corner data transfer
     * @desc boolean, default False
     */
    public set use_loop_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_loop_data`, value)
    }

    /**
     * Source elements must be closer than given distance from destination one
     * @desc boolean, default False
     */
    public set use_max_distance(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_max_distance`, value)
    }

    /**
     * Evaluate source and destination meshes in global space
     * @desc boolean, default True
     */
    public set use_object_transform(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_object_transform`, value)
    }

    /**
     * Enable face data transfer
     * @desc boolean, default False
     */
    public set use_poly_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_poly_data`, value)
    }

    /**
     * Enable vertex data transfer
     * @desc boolean, default False
     */
    public set use_vert_data(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_vert_data`, value)
    }

    /**
     * Method used to map source vertices to destination ones
     * @desc enum in ['TOPOLOGY', 'NEAREST', 'EDGE_NEAREST', 'EDGEINTERP_NEAREST', 'POLY_NEAREST', 'POLYINTERP_NEAREST', 'POLYINTERP_VNORPROJ'], default 'NEAREST'
     */
    public set vert_mapping(value: 'TOPOLOGY' | 'NEAREST' | 'EDGE_NEAREST' | 'EDGEINTERP_NEAREST' | 'POLY_NEAREST' | 'POLYINTERP_NEAREST' | 'POLYINTERP_VNORPROJ') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vert_mapping`, value)
    }

    /**
     * Vertex group name for selecting the affected areas
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
