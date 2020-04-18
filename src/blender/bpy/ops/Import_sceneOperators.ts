import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Import_sceneOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.import_scene.html
 */
export class Import_sceneOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load a FBX file
     * @desc void
     */
    public fbx(options: { filepath?: string, directory?: string, filter_glob?: string, files?: any, ui_tab?: 'MAIN' | 'ARMATURE', use_manual_orientation?: boolean, global_scale?: number, bake_space_transform?: boolean, use_custom_normals?: boolean, use_image_search?: boolean, use_alpha_decals?: boolean, decal_offset?: number, use_anim?: boolean, anim_offset?: number, use_subsurf?: boolean, use_custom_props?: boolean, use_custom_props_enum_as_string?: boolean, ignore_leaf_bones?: boolean, force_connect_children?: boolean, automatic_bone_orientation?: boolean, primary_bone_axis?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', secondary_bone_axis?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', use_prepost_rot?: boolean, axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fbx`, options)
    }

    /**
     * Load a glTF 2.0 file
     * @desc void
     */
    public gltf(options: { filepath?: string, filter_glob?: string, files?: any, loglevel?: number, import_pack_images?: boolean, import_shading?: 'NORMALS' | 'FLAT' | 'SMOOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gltf`, options)
    }

    /**
     * Load a Wavefront OBJ File
     * @desc void
     */
    public obj(options: { filepath?: string, filter_glob?: string, use_edges?: boolean, use_smooth_groups?: boolean, use_split_objects?: boolean, use_split_groups?: boolean, use_groups_as_vgroups?: boolean, use_image_search?: boolean, split_mode?: 'ON' | 'OFF', global_clight_size?: number, axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.obj`, options)
    }

    /**
     * Import an X3D or VRML2 file
     * @desc void
     */
    public x3d(options: { filepath?: string, filter_glob?: string, axis_forward?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', axis_up?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.x3d`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
