import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Export_sceneOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.export_scene.html
 */
export class Export_sceneOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Write a FBX file
     * @desc void
     */
    public fbx(options: { filepath?: string, check_existing?: boolean, filter_glob?: string, use_selection?: boolean, use_active_collection?: boolean, global_scale?: number, apply_unit_scale?: boolean, apply_scale_options?: 'FBX_SCALE_NONE' | 'FBX_SCALE_UNITS' | 'FBX_SCALE_CUSTOM' | 'FBX_SCALE_ALL', bake_space_transform?: boolean, object_types?: ('EMPTY' | 'CAMERA' | 'LIGHT' | 'ARMATURE' | 'MESH' | 'OTHER')[], use_mesh_modifiers?: boolean, use_mesh_modifiers_render?: boolean, mesh_smooth_type?: 'OFF' | 'FACE' | 'EDGE', use_subsurf?: boolean, use_mesh_edges?: boolean, use_tspace?: boolean, use_custom_props?: boolean, add_leaf_bones?: boolean, primary_bone_axis?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', secondary_bone_axis?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', use_armature_deform_only?: boolean, armature_nodetype?: 'NULL' | 'ROOT' | 'LIMBNODE', bake_anim?: boolean, bake_anim_use_all_bones?: boolean, bake_anim_use_nla_strips?: boolean, bake_anim_use_all_actions?: boolean, bake_anim_force_startend_keying?: boolean, bake_anim_step?: number, bake_anim_simplify_factor?: number, path_mode?: 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'MATCH' | 'STRIP' | 'COPY', embed_textures?: boolean, batch_mode?: 'OFF' | 'SCENE' | 'COLLECTION' | 'SCENE_COLLECTION' | 'ACTIVE_SCENE_COLLECTION', use_batch_own_dir?: boolean, use_metadata?: boolean, axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fbx`, options)
    }

    /**
     * Export scene as glTF 2.0 file
     * @desc void
     */
    public gltf(options: { export_format?: 'GLB' | 'GLTF_EMBEDDED' | 'GLTF_SEPARATE', ui_tab?: 'GENERAL' | 'MESHES' | 'OBJECTS' | 'ANIMATION', export_copyright?: string, export_image_format?: 'NAME' | 'JPEG' | 'PNG', export_texture_dir?: string, export_texcoords?: boolean, export_normals?: boolean, export_draco_mesh_compression_enable?: boolean, export_draco_mesh_compression_level?: number, export_draco_position_quantization?: number, export_draco_normal_quantization?: number, export_draco_texcoord_quantization?: number, export_draco_generic_quantization?: number, export_tangents?: boolean, export_materials?: boolean, export_colors?: boolean, export_cameras?: boolean, export_selected?: boolean, export_extras?: boolean, export_yup?: boolean, export_apply?: boolean, export_animations?: boolean, export_frame_range?: boolean, export_frame_step?: number, export_force_sampling?: boolean, export_nla_strips?: boolean, export_def_bones?: boolean, export_current_frame?: boolean, export_skins?: boolean, export_all_influences?: boolean, export_morph?: boolean, export_morph_normal?: boolean, export_morph_tangent?: boolean, export_lights?: boolean, export_displacement?: boolean, will_save_settings?: boolean, filepath?: string, check_existing?: boolean, filter_glob?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gltf`, options)
    }

    /**
     * Save a Wavefront OBJ File
     * @desc void
     */
    public obj(options: { filepath?: string, check_existing?: boolean, filter_glob?: string, use_selection?: boolean, use_animation?: boolean, use_mesh_modifiers?: boolean, use_edges?: boolean, use_smooth_groups?: boolean, use_smooth_groups_bitflags?: boolean, use_normals?: boolean, use_uvs?: boolean, use_materials?: boolean, use_triangles?: boolean, use_nurbs?: boolean, use_vertex_groups?: boolean, use_blen_objects?: boolean, group_by_object?: boolean, group_by_material?: boolean, keep_vertex_order?: boolean, global_scale?: number, path_mode?: 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'MATCH' | 'STRIP' | 'COPY', axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.obj`, options)
    }

    /**
     * Export selection to Extensible 3D file (.x3d)
     * @desc void
     */
    public x3d(options: { filepath?: string, check_existing?: boolean, filter_glob?: string, use_selection?: boolean, use_mesh_modifiers?: boolean, use_triangulate?: boolean, use_normals?: boolean, use_compress?: boolean, use_hierarchy?: boolean, name_decorations?: boolean, use_h3d?: boolean, global_scale?: number, path_mode?: 'AUTO' | 'ABSOLUTE' | 'RELATIVE' | 'MATCH' | 'STRIP' | 'COPY', axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.x3d`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
