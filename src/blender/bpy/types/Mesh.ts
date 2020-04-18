import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { CyclesMeshSettings } from './CyclesMeshSettings'
import { MeshEdges } from './MeshEdges'
import { MeshEdge } from './MeshEdge'
import { MeshFaceMapLayers } from './MeshFaceMapLayers'
import { MeshFaceMapLayer } from './MeshFaceMapLayer'
import { MeshLoopTriangles } from './MeshLoopTriangles'
import { MeshLoopTriangle } from './MeshLoopTriangle'
import { MeshLoops } from './MeshLoops'
import { MeshLoop } from './MeshLoop'
import { IDMaterials } from './IDMaterials'
import { Material } from './Material'
import { PolygonFloatProperties } from './PolygonFloatProperties'
import { MeshPolygonFloatPropertyLayer } from './MeshPolygonFloatPropertyLayer'
import { PolygonIntProperties } from './PolygonIntProperties'
import { MeshPolygonIntPropertyLayer } from './MeshPolygonIntPropertyLayer'
import { PolygonStringProperties } from './PolygonStringProperties'
import { MeshPolygonStringPropertyLayer } from './MeshPolygonStringPropertyLayer'
import { MeshPolygons } from './MeshPolygons'
import { MeshPolygon } from './MeshPolygon'
import { Key } from './Key'
import { MeshSkinVertexLayer } from './MeshSkinVertexLayer'
import { UVLoopLayers } from './UVLoopLayers'
import { MeshUVLoopLayer } from './MeshUVLoopLayer'
import { LoopColors } from './LoopColors'
import { MeshLoopColorLayer } from './MeshLoopColorLayer'
import { VertexFloatProperties } from './VertexFloatProperties'
import { MeshVertexFloatPropertyLayer } from './MeshVertexFloatPropertyLayer'
import { VertexIntProperties } from './VertexIntProperties'
import { MeshVertexIntPropertyLayer } from './MeshVertexIntPropertyLayer'
import { VertexStringProperties } from './VertexStringProperties'
import { MeshVertexStringPropertyLayer } from './MeshVertexStringPropertyLayer'
import { MeshPaintMaskLayer } from './MeshPaintMaskLayer'
import { MeshVertices } from './MeshVertices'
import { MeshVertex } from './MeshVertex'

/**
 * Mesh
 * 
 * https://docs.blender.org/api/current/bpy.types.Mesh.html
 */
export class Mesh {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Cycles mesh settings
     * @desc CyclesMeshSettings, (readonly)
     */
    public get cycles(): CyclesMeshSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesMeshSettings)
    }

    /**
     * Edges of the mesh
     * @desc MeshEdges bpy_prop_collection of MeshEdge, (readonly)
     */
    public get edges(): BlenderCollection<MeshEdge> & Indexable<MeshEdge> & MeshEdges {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.edges`, MeshEdges, MeshEdge)
    }

    /**
     * 
     * @desc MeshFaceMapLayers bpy_prop_collection of MeshFaceMapLayer, (readonly)
     */
    public get face_maps(): BlenderCollection<MeshFaceMapLayer> & Indexable<MeshFaceMapLayer> & MeshFaceMapLayers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.face_maps`, MeshFaceMapLayers, MeshFaceMapLayer)
    }

    /**
     * True if there are custom split normals data in this mesh
     * @desc boolean, default False, (readonly)
     */
    public get has_custom_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_custom_normals`)
    }

    /**
     * True when used in editmode
     * @desc boolean, default False, (readonly)
     */
    public get is_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_editmode`)
    }

    /**
     * Tessellation of mesh polygons into triangles
     * @desc MeshLoopTriangles bpy_prop_collection of MeshLoopTriangle, (readonly)
     */
    public get loop_triangles(): BlenderCollection<MeshLoopTriangle> & Indexable<MeshLoopTriangle> & MeshLoopTriangles {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.loop_triangles`, MeshLoopTriangles, MeshLoopTriangle)
    }

    /**
     * Loops of the mesh (polygon corners)
     * @desc MeshLoops bpy_prop_collection of MeshLoop, (readonly)
     */
    public get loops(): BlenderCollection<MeshLoop> & Indexable<MeshLoop> & MeshLoops {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.loops`, MeshLoops, MeshLoop)
    }

    /**
     * 
     * @desc IDMaterials bpy_prop_collection of Material, (readonly)
     */
    public get materials(): BlenderCollection<Material> & Indexable<Material> & IDMaterials {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.materials`, IDMaterials, Material)
    }

    /**
     * 
     * @desc PolygonFloatProperties bpy_prop_collection of MeshPolygonFloatPropertyLayer, (readonly)
     */
    public get polygon_layers_float(): BlenderCollection<MeshPolygonFloatPropertyLayer> & Indexable<MeshPolygonFloatPropertyLayer> & PolygonFloatProperties {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.polygon_layers_float`, PolygonFloatProperties, MeshPolygonFloatPropertyLayer)
    }

    /**
     * 
     * @desc PolygonIntProperties bpy_prop_collection of MeshPolygonIntPropertyLayer, (readonly)
     */
    public get polygon_layers_int(): BlenderCollection<MeshPolygonIntPropertyLayer> & Indexable<MeshPolygonIntPropertyLayer> & PolygonIntProperties {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.polygon_layers_int`, PolygonIntProperties, MeshPolygonIntPropertyLayer)
    }

    /**
     * 
     * @desc PolygonStringProperties bpy_prop_collection of MeshPolygonStringPropertyLayer, (readonly)
     */
    public get polygon_layers_string(): BlenderCollection<MeshPolygonStringPropertyLayer> & Indexable<MeshPolygonStringPropertyLayer> & PolygonStringProperties {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.polygon_layers_string`, PolygonStringProperties, MeshPolygonStringPropertyLayer)
    }

    /**
     * Polygons of the mesh
     * @desc MeshPolygons bpy_prop_collection of MeshPolygon, (readonly)
     */
    public get polygons(): BlenderCollection<MeshPolygon> & Indexable<MeshPolygon> & MeshPolygons {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.polygons`, MeshPolygons, MeshPolygon)
    }

    /**
     * 
     * @desc Key, (readonly)
     */
    public get shape_keys(): Key {
        return PythonInterop.getClass(this.interop, `${this.accessor}.shape_keys`, Key)
    }

    /**
     * All skin vertices
     * @desc bpy_prop_collection of MeshSkinVertexLayer, (readonly)
     */
    public get skin_vertices(): BlenderCollection<MeshSkinVertexLayer> & Indexable<MeshSkinVertexLayer> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.skin_vertices`, MeshSkinVertexLayer)
    }

    /**
     * Selected edge count in editmode
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get total_edge_sel(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.total_edge_sel`)
    }

    /**
     * Selected face count in editmode
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get total_face_sel(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.total_face_sel`)
    }

    /**
     * Selected vertex count in editmode
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get total_vert_sel(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.total_vert_sel`)
    }

    /**
     * All UV loop layers
     * @desc UVLoopLayers bpy_prop_collection of MeshUVLoopLayer, (readonly)
     */
    public get uv_layers(): BlenderCollection<MeshUVLoopLayer> & Indexable<MeshUVLoopLayer> & UVLoopLayers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.uv_layers`, UVLoopLayers, MeshUVLoopLayer)
    }

    /**
     * All vertex colors
     * @desc LoopColors bpy_prop_collection of MeshLoopColorLayer, (readonly)
     */
    public get vertex_colors(): BlenderCollection<MeshLoopColorLayer> & Indexable<MeshLoopColorLayer> & LoopColors {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.vertex_colors`, LoopColors, MeshLoopColorLayer)
    }

    /**
     * 
     * @desc VertexFloatProperties bpy_prop_collection of MeshVertexFloatPropertyLayer, (readonly)
     */
    public get vertex_layers_float(): BlenderCollection<MeshVertexFloatPropertyLayer> & Indexable<MeshVertexFloatPropertyLayer> & VertexFloatProperties {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.vertex_layers_float`, VertexFloatProperties, MeshVertexFloatPropertyLayer)
    }

    /**
     * 
     * @desc VertexIntProperties bpy_prop_collection of MeshVertexIntPropertyLayer, (readonly)
     */
    public get vertex_layers_int(): BlenderCollection<MeshVertexIntPropertyLayer> & Indexable<MeshVertexIntPropertyLayer> & VertexIntProperties {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.vertex_layers_int`, VertexIntProperties, MeshVertexIntPropertyLayer)
    }

    /**
     * 
     * @desc VertexStringProperties bpy_prop_collection of MeshVertexStringPropertyLayer, (readonly)
     */
    public get vertex_layers_string(): BlenderCollection<MeshVertexStringPropertyLayer> & Indexable<MeshVertexStringPropertyLayer> & VertexStringProperties {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.vertex_layers_string`, VertexStringProperties, MeshVertexStringPropertyLayer)
    }

    /**
     * Vertex paint mask
     * @desc bpy_prop_collection of MeshPaintMaskLayer, (readonly)
     */
    public get vertex_paint_masks(): BlenderCollection<MeshPaintMaskLayer> & Indexable<MeshPaintMaskLayer> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.vertex_paint_masks`, MeshPaintMaskLayer)
    }

    /**
     * Vertices of the mesh
     * @desc MeshVertices bpy_prop_collection of MeshVertex, (readonly)
     */
    public get vertices(): BlenderCollection<MeshVertex> & Indexable<MeshVertex> & MeshVertices {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.vertices`, MeshVertices, MeshVertex)
    }

    /**
     * (readonly)
     * @desc void
     */
    public get edge_keys(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.edge_keys`)
    }

    /**
     * Maximum angle between face normals that will be considered as smooth (unused if custom split normals data are available)
     * @desc float in [0, 3.14159], default 0.523599
     */
    public get auto_smooth_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.auto_smooth_angle`)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public get auto_texspace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.auto_texspace`)
    }

    /**
     * 
     * @desc enum in ['VOXEL', 'QUAD'], default 'VOXEL'
     */
    public get remesh_mode(): 'VOXEL' | 'QUAD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.remesh_mode`)
    }

    /**
     * Reduces the final face count by simplifying geometry where detail is not needed, generating triangles. A value greater than 0 disables Fix Poles
     * @desc float in [0, 1], default 0.0
     */
    public get remesh_voxel_adaptivity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.remesh_voxel_adaptivity`)
    }

    /**
     * Size of the voxel in object space used for volume evaluation. Lower values preserve finer details
     * @desc float in [0.0001, inf], default 0.1
     */
    public get remesh_voxel_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.remesh_voxel_size`)
    }

    /**
     * Derive texture coordinates from another mesh
     * @desc Mesh
     */
    public get texco_mesh(): Mesh {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texco_mesh`, Mesh)
    }

    /**
     * Texture space location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get texspace_location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texspace_location`, 'number', 3)
    }

    /**
     * Texture space size
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get texspace_size(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.texspace_size`, 'number', 3)
    }

    /**
     * Use another mesh for texture indices (vertex indices must be aligned)
     * @desc Mesh
     */
    public get texture_mesh(): Mesh {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_mesh`, Mesh)
    }

    /**
     * Auto smooth (based on smooth/sharp faces/edges and angle between faces), or use custom split normals data if available
     * @desc boolean, default False
     */
    public get use_auto_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_smooth`)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public get use_auto_texspace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_texspace`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_customdata_edge_bevel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_customdata_edge_bevel`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_customdata_edge_crease(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_customdata_edge_crease`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_customdata_vertex_bevel(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_customdata_vertex_bevel`)
    }

    /**
     * Use topology based mirroring (for when both sides of mesh have matching, unique topology)
     * @desc boolean, default False
     */
    public get use_mirror_topology(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_topology`)
    }

    /**
     * X Axis mirror editing
     * @desc boolean, default False
     */
    public get use_mirror_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_x`)
    }

    /**
     * Y Axis mirror editing
     * @desc boolean, default False
     */
    public get use_mirror_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_y`)
    }

    /**
     * Z Axis mirror editing
     * @desc boolean, default False
     */
    public get use_mirror_z(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_z`)
    }

    /**
     * Face selection masking for painting
     * @desc boolean, default False
     */
    public get use_paint_mask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_mask`)
    }

    /**
     * Vertex selection masking for painting
     * @desc boolean, default False
     */
    public get use_paint_mask_vertex(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_paint_mask_vertex`)
    }

    /**
     * Produces less poles and a better topology flow
     * @desc boolean, default True
     */
    public get use_remesh_fix_poles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_remesh_fix_poles`)
    }

    /**
     * Keep the current mask on the new mesh
     * @desc boolean, default False
     */
    public get use_remesh_preserve_paint_mask(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_remesh_preserve_paint_mask`)
    }

    /**
     * Projects the mesh to preserve the volume and details of the original mesh
     * @desc boolean, default True
     */
    public get use_remesh_preserve_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_remesh_preserve_volume`)
    }

    /**
     * Smooth the normals of the remesher result
     * @desc boolean, default False
     */
    public get use_remesh_smooth_normals(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_remesh_smooth_normals`)
    }

    /**
     * UV loop layer to be used as cloning source
     * @desc MeshUVLoopLayer
     */
    public get uv_layer_clone(): MeshUVLoopLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.uv_layer_clone`, MeshUVLoopLayer)
    }

    /**
     * Clone UV loop layer index
     * @desc int in [0, inf], default 0
     */
    public get uv_layer_clone_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.uv_layer_clone_index`)
    }

    /**
     * UV loop layer to mask the painted area
     * @desc MeshUVLoopLayer
     */
    public get uv_layer_stencil(): MeshUVLoopLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.uv_layer_stencil`, MeshUVLoopLayer)
    }

    /**
     * Mask UV loop layer index
     * @desc int in [0, inf], default 0
     */
    public get uv_layer_stencil_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.uv_layer_stencil_index`)
    }

    /**
     * Maximum angle between face normals that will be considered as smooth (unused if custom split normals data are available)
     * @desc float in [0, 3.14159], default 0.523599
     */
    public set auto_smooth_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.auto_smooth_angle`, value)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public set auto_texspace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.auto_texspace`, value)
    }

    /**
     * 
     * @desc enum in ['VOXEL', 'QUAD'], default 'VOXEL'
     */
    public set remesh_mode(value: 'VOXEL' | 'QUAD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.remesh_mode`, value)
    }

    /**
     * Reduces the final face count by simplifying geometry where detail is not needed, generating triangles. A value greater than 0 disables Fix Poles
     * @desc float in [0, 1], default 0.0
     */
    public set remesh_voxel_adaptivity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.remesh_voxel_adaptivity`, value)
    }

    /**
     * Size of the voxel in object space used for volume evaluation. Lower values preserve finer details
     * @desc float in [0.0001, inf], default 0.1
     */
    public set remesh_voxel_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.remesh_voxel_size`, value)
    }

    /**
     * Derive texture coordinates from another mesh
     * @desc Mesh
     */
    public set texco_mesh(value: Mesh) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texco_mesh`, value)
    }

    /**
     * Texture space location
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set texspace_location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texspace_location`, value)
    }

    /**
     * Texture space size
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set texspace_size(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.texspace_size`, value)
    }

    /**
     * Use another mesh for texture indices (vertex indices must be aligned)
     * @desc Mesh
     */
    public set texture_mesh(value: Mesh) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture_mesh`, value)
    }

    /**
     * Auto smooth (based on smooth/sharp faces/edges and angle between faces), or use custom split normals data if available
     * @desc boolean, default False
     */
    public set use_auto_smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_smooth`, value)
    }

    /**
     * Adjust active object’s texture space automatically when transforming object
     * @desc boolean, default True
     */
    public set use_auto_texspace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_texspace`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_customdata_edge_bevel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_customdata_edge_bevel`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_customdata_edge_crease(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_customdata_edge_crease`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_customdata_vertex_bevel(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_customdata_vertex_bevel`, value)
    }

    /**
     * Use topology based mirroring (for when both sides of mesh have matching, unique topology)
     * @desc boolean, default False
     */
    public set use_mirror_topology(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_topology`, value)
    }

    /**
     * X Axis mirror editing
     * @desc boolean, default False
     */
    public set use_mirror_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_x`, value)
    }

    /**
     * Y Axis mirror editing
     * @desc boolean, default False
     */
    public set use_mirror_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_y`, value)
    }

    /**
     * Z Axis mirror editing
     * @desc boolean, default False
     */
    public set use_mirror_z(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_z`, value)
    }

    /**
     * Face selection masking for painting
     * @desc boolean, default False
     */
    public set use_paint_mask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_mask`, value)
    }

    /**
     * Vertex selection masking for painting
     * @desc boolean, default False
     */
    public set use_paint_mask_vertex(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_paint_mask_vertex`, value)
    }

    /**
     * Produces less poles and a better topology flow
     * @desc boolean, default True
     */
    public set use_remesh_fix_poles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_remesh_fix_poles`, value)
    }

    /**
     * Keep the current mask on the new mesh
     * @desc boolean, default False
     */
    public set use_remesh_preserve_paint_mask(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_remesh_preserve_paint_mask`, value)
    }

    /**
     * Projects the mesh to preserve the volume and details of the original mesh
     * @desc boolean, default True
     */
    public set use_remesh_preserve_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_remesh_preserve_volume`, value)
    }

    /**
     * Smooth the normals of the remesher result
     * @desc boolean, default False
     */
    public set use_remesh_smooth_normals(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_remesh_smooth_normals`, value)
    }

    /**
     * UV loop layer to be used as cloning source
     * @desc MeshUVLoopLayer
     */
    public set uv_layer_clone(value: MeshUVLoopLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.uv_layer_clone`, value)
    }

    /**
     * Clone UV loop layer index
     * @desc int in [0, inf], default 0
     */
    public set uv_layer_clone_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.uv_layer_clone_index`, value)
    }

    /**
     * UV loop layer to mask the painted area
     * @desc MeshUVLoopLayer
     */
    public set uv_layer_stencil(value: MeshUVLoopLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.uv_layer_stencil`, value)
    }

    /**
     * Mask UV loop layer index
     * @desc int in [0, inf], default 0
     */
    public set uv_layer_stencil_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.uv_layer_stencil_index`, value)
    }

    /**
     * Transform mesh vertices by a matrix (Warning: inverts normals if matrix is negative)
     * @desc void
     */
    public transform(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], shape_keys?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
    }

    /**
     * Invert winding of all polygons (clears tessellation, does not handle custom normals)
     * @desc void
     */
    public flip_normals(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flip_normals`, {})
    }

    /**
     * Calculate vertex normals
     * @desc void
     */
    public calc_normals(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calc_normals`, {})
    }

    /**
     * Empty split vertex normals
     * @desc void
     */
    public create_normals_split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.create_normals_split`, {})
    }

    /**
     * Calculate split vertex normals, which preserve sharp edges
     * @desc void
     */
    public calc_normals_split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calc_normals_split`, {})
    }

    /**
     * Free split vertex normals
     * @desc void
     */
    public free_normals_split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_normals_split`, {})
    }

    /**
     * Split faces based on the edge angle
     * @desc void
     */
    public split_faces(options: { free_loop_normals?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.split_faces`, options)
    }

    /**
     * Compute tangents and bitangent signs, to be used together with the split normals to get a complete tangent space for normal mapping (split normals are also computed if not yet present)
     * @desc void
     */
    public calc_tangents(options: { uvmap?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calc_tangents`, options)
    }

    /**
     * Free tangents
     * @desc void
     */
    public free_tangents(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_tangents`, {})
    }

    /**
     * Calculate loop triangle tessellation (supports editmode too)
     * @desc void
     */
    public calc_loop_triangles(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calc_loop_triangles`, {})
    }

    /**
     * Calculate smooth groups from sharp edges
     * @desc void
     */
    public calc_smooth_groups(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calc_smooth_groups`, {})
    }

    /**
     * Define custom split normals of this mesh (use zero-vectors to keep auto ones)
     * @desc void
     */
    public normals_split_custom_set(options: { normals?: [[number, number, number]] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normals_split_custom_set`, options)
    }

    /**
     * Define custom split normals of this mesh, from vertices’ normals (use zero-vectors to keep auto ones)
     * @desc void
     */
    public normals_split_custom_set_from_vertices(options: { normals?: [[number, number, number]] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normals_split_custom_set_from_vertices`, options)
    }

    /**
     * update
     * @desc void
     */
    public update(options: { calc_edges?: boolean, calc_edges_loose?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, options)
    }

    /**
     * update_gpu_tag
     * @desc void
     */
    public update_gpu_tag(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_gpu_tag`, {})
    }

    /**
     * unit_test_compare
     * @desc string, (never None)
     */
    public unit_test_compare(options: { mesh?: unknown }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.unit_test_compare`, options)
    }

    /**
     * Remove all geometry from the mesh. Note that this does not free shape keys or materials
     * @desc void
     */
    public clear_geometry(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_geometry`, {})
    }

    /**
     * Validate geometry, return True when the mesh has had invalid geometry corrected/removed
     * @desc boolean
     */
    public validate(options: { verbose?: boolean, clean_customdata?: boolean }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.validate`, options)
    }

    /**
     * Validate material indices of polygons, return True when the mesh has had invalid indices corrected (to default 0)
     * @desc boolean
     */
    public validate_material_indices(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.validate_material_indices`, {})
    }

    /**
     * Return the number of selected items (vert, edge, face)
     * @desc int array of 3 items in [0, inf]
     */
    public count_selected_items(): [number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.count_selected_items`, {})
    }

    /**
     * Make a mesh from a list of vertices/edges/facesUntil we have a nicer way to make geometry, use this.
     * @desc void
     */
    public from_pydata(options: { vertices?: { [key: string]: any }, edges?: { [key: string]: any }, faces?: any }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.from_pydata`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
