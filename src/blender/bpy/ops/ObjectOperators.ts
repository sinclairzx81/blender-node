import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { OBJECT_OT_duplicate } from './OBJECT_OT_duplicate'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'

/**
 * ObjectOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.object.html
 */
export class ObjectOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add an object to the scene
     * @desc void
     */
    public add(options: { radius?: number, type?: 'MESH' | 'CURVE' | 'SURFACE' | 'META' | 'FONT' | 'ARMATURE' | 'LATTICE' | 'EMPTY' | 'GPENCIL' | 'CAMERA' | 'LIGHT' | 'SPEAKER' | 'LIGHT_PROBE', enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    /**
     * Add named object
     * @desc void
     */
    public add_named(options: { linked?: boolean, name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_named`, options)
    }

    /**
     * Align Objects
     * @desc void
     */
    public align(options: { bb_quality?: boolean, align_mode?: 'OPT_1' | 'OPT_2' | 'OPT_3', relative_to?: 'OPT_1' | 'OPT_2' | 'OPT_3' | 'OPT_4', align_axis?: ('X' | 'Y' | 'Z')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.align`, options)
    }

    /**
     * Convert object animation for normal transforms to delta transforms
     * @desc void
     */
    public anim_transforms_to_deltas(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.anim_transforms_to_deltas`, {})
    }

    /**
     * Add an armature object to the scene
     * @desc void
     */
    public armature_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.armature_add`, options)
    }

    /**
     * Assign the current values of custom properties as their defaults, for use as part of the rest pose state in NLA track mixing
     * @desc void
     */
    public assign_property_defaults(options: { process_data?: boolean, process_bones?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.assign_property_defaults`, options)
    }

    /**
     * Bake image textures of selected objects
     * @desc void
     */
    public bake(options: { type?: 'COMBINED' | 'AO' | 'SHADOW' | 'NORMAL' | 'UV' | 'ROUGHNESS' | 'EMIT' | 'ENVIRONMENT' | 'DIFFUSE' | 'GLOSSY' | 'TRANSMISSION' | 'SUBSURFACE', pass_filter?: ('NONE' | 'AO' | 'EMIT' | 'DIRECT' | 'INDIRECT' | 'COLOR' | 'DIFFUSE' | 'GLOSSY' | 'TRANSMISSION' | 'SUBSURFACE')[], filepath?: string, width?: number, height?: number, margin?: number, use_selected_to_active?: boolean, cage_extrusion?: number, cage_object?: string, normal_space?: 'OBJECT' | 'TANGENT', normal_r?: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z', normal_g?: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z', normal_b?: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z', save_mode?: 'INTERNAL' | 'EXTERNAL', use_clear?: boolean, use_cage?: boolean, use_split_materials?: boolean, use_automatic_name?: boolean, uv_layer?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake`, options)
    }

    /**
     * Bake image textures of selected objects
     * @desc void
     */
    public bake_image(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_image`, {})
    }

    /**
     * Add a camera object to the scene
     * @desc void
     */
    public camera_add(options: { enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.camera_add`, options)
    }

    /**
     * Add an object to a new collection
     * @desc void
     */
    public collection_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_add`, {})
    }

    /**
     * Add a collection instance
     * @desc void
     */
    public collection_instance_add(options: { name?: string, collection?: string, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_instance_add`, options)
    }

    /**
     * Add an object to an existing collection
     * @desc void
     */
    public collection_link(options: { collection?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_link`, options)
    }

    /**
     * Select all objects in collection
     * @desc void
     */
    public collection_objects_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_objects_select`, {})
    }

    /**
     * Remove the active object from this collection
     * @desc void
     */
    public collection_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_remove`, {})
    }

    /**
     * Unlink the collection from all objects
     * @desc void
     */
    public collection_unlink(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collection_unlink`, {})
    }

    /**
     * Add a constraint to the active object
     * @desc void
     */
    public constraint_add(options: { type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_add`, options)
    }

    /**
     * Add a constraint to the active object, with target (where applicable) set to the selected Objects/Bones
     * @desc void
     */
    public constraint_add_with_targets(options: { type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_add_with_targets`, options)
    }

    /**
     * Clear all the constraints for the active Object only
     * @desc void
     */
    public constraints_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraints_clear`, {})
    }

    /**
     * Copy constraints to other selected objects
     * @desc void
     */
    public constraints_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraints_copy`, {})
    }

    /**
     * Convert selected objects to another type
     * @desc void
     */
    public convert(options: { target?: 'CURVE' | 'MESH' | 'GPENCIL', keep_original?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convert`, options)
    }

    /**
     * Bind base pose in Corrective Smooth modifier
     * @desc void
     */
    public correctivesmooth_bind(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.correctivesmooth_bind`, options)
    }

    /**
     * Transfer data layer(s) (weights, edge sharp, …) from active to selected meshes
     * @desc void
     */
    public data_transfer(options: { use_reverse_transfer?: boolean, use_freeze?: boolean, data_type?: 'VGROUP_WEIGHTS' | 'BEVEL_WEIGHT_VERT' | 'SHARP_EDGE' | 'SEAM' | 'CREASE' | 'BEVEL_WEIGHT_EDGE' | 'FREESTYLE_EDGE' | 'CUSTOM_NORMAL' | 'VCOL' | 'UV' | 'SMOOTH' | 'FREESTYLE_FACE', use_create?: boolean, vert_mapping?: 'TOPOLOGY' | 'NEAREST' | 'EDGE_NEAREST' | 'EDGEINTERP_NEAREST' | 'POLY_NEAREST' | 'POLYINTERP_NEAREST' | 'POLYINTERP_VNORPROJ', edge_mapping?: 'TOPOLOGY' | 'VERT_NEAREST' | 'NEAREST' | 'POLY_NEAREST' | 'EDGEINTERP_VNORPROJ', loop_mapping?: 'TOPOLOGY' | 'NEAREST_NORMAL' | 'NEAREST_POLYNOR' | 'NEAREST_POLY' | 'POLYINTERP_NEAREST' | 'POLYINTERP_LNORPROJ', poly_mapping?: 'TOPOLOGY' | 'NEAREST' | 'NORMAL' | 'POLYINTERP_PNORPROJ', use_auto_transform?: boolean, use_object_transform?: boolean, use_max_distance?: boolean, max_distance?: number, ray_radius?: number, islands_precision?: number, layers_select_src?: 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM', layers_select_dst?: 'ACTIVE' | 'NAME' | 'INDEX', mix_mode?: 'REPLACE' | 'ABOVE_THRESHOLD' | 'BELOW_THRESHOLD' | 'MIX' | 'ADD' | 'SUB' | 'MUL', mix_factor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.data_transfer`, options)
    }

    /**
     * Transfer layout of data layer(s) from active to selected meshes
     * @desc void
     */
    public datalayout_transfer(options: { modifier?: string, data_type?: 'VGROUP_WEIGHTS' | 'BEVEL_WEIGHT_VERT' | 'SHARP_EDGE' | 'SEAM' | 'CREASE' | 'BEVEL_WEIGHT_EDGE' | 'FREESTYLE_EDGE' | 'CUSTOM_NORMAL' | 'VCOL' | 'UV' | 'SMOOTH' | 'FREESTYLE_FACE', use_delete?: boolean, layers_select_src?: 'ACTIVE' | 'ALL' | 'BONE_SELECT' | 'BONE_DEFORM', layers_select_dst?: 'ACTIVE' | 'NAME' | 'INDEX' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.datalayout_transfer`, options)
    }

    /**
     * Delete selected objects
     * @desc void
     */
    public delete(options: { use_global?: boolean, confirm?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Add an empty image type to scene with data
     * @desc void
     */
    public drop_named_image(options: { filepath?: string, relative_path?: boolean, name?: string, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drop_named_image`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public drop_named_material(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drop_named_material`, options)
    }

    /**
     * Duplicate selected objects
     * @desc void
     */
    public duplicate(options: { linked?: boolean, mode?: 'INIT' | 'DUMMY' | 'TRANSLATION' | 'ROTATION' | 'RESIZE' | 'SKIN_RESIZE' | 'TOSPHERE' | 'SHEAR' | 'BEND' | 'SHRINKFATTEN' | 'TILT' | 'TRACKBALL' | 'PUSHPULL' | 'CREASE' | 'MIRROR' | 'BONE_SIZE' | 'BONE_ENVELOPE' | 'BONE_ENVELOPE_DIST' | 'CURVE_SHRINKFATTEN' | 'MASK_SHRINKFATTEN' | 'GPENCIL_SHRINKFATTEN' | 'BONE_ROLL' | 'TIME_TRANSLATE' | 'TIME_SLIDE' | 'TIME_SCALE' | 'TIME_EXTEND' | 'BAKE_TIME' | 'BWEIGHT' | 'ALIGN' | 'EDGESLIDE' | 'SEQSLIDE' | 'GPENCIL_OPACITY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Duplicate selected objects and move them
     * @desc void
     */
    public duplicate_move(options: { OBJECT_OT_duplicate?: OBJECT_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Duplicate selected objects and move them
     * @desc void
     */
    public duplicate_move_linked(options: { OBJECT_OT_duplicate?: OBJECT_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move_linked`, options)
    }

    /**
     * Make instanced objects attached to this object real
     * @desc void
     */
    public duplicates_make_real(options: { use_base_parent?: boolean, use_hierarchy?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicates_make_real`, options)
    }

    /**
     * Toggle object’s editmode
     * @desc void
     */
    public editmode_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.editmode_toggle`, {})
    }

    /**
     * Add an empty object with a physics effector to the scene
     * @desc void
     */
    public effector_add(options: { type?: 'FORCE' | 'WIND' | 'VORTEX' | 'MAGNET' | 'HARMONIC' | 'CHARGE' | 'LENNARDJ' | 'TEXTURE' | 'GUIDE' | 'BOID' | 'TURBULENCE' | 'DRAG' | 'SMOKE', radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.effector_add`, options)
    }

    /**
     * Add an empty object to the scene
     * @desc void
     */
    public empty_add(options: { type?: 'PLAIN_AXES' | 'ARROWS' | 'SINGLE_ARROW' | 'CIRCLE' | 'CUBE' | 'SPHERE' | 'CONE' | 'IMAGE', radius?: number, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.empty_add`, options)
    }

    /**
     * Refresh data in the Explode modifier
     * @desc void
     */
    public explode_refresh(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.explode_refresh`, options)
    }

    /**
     * Add a new face map to the active object
     * @desc void
     */
    public face_map_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_add`, {})
    }

    /**
     * Assign faces to a face map
     * @desc void
     */
    public face_map_assign(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_assign`, {})
    }

    /**
     * Deselect faces belonging to a face map
     * @desc void
     */
    public face_map_deselect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_deselect`, {})
    }

    /**
     * Move the active face map up/down in the list
     * @desc void
     */
    public face_map_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_move`, options)
    }

    /**
     * Remove a face map from the active object
     * @desc void
     */
    public face_map_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_remove`, {})
    }

    /**
     * Remove faces from a face map
     * @desc void
     */
    public face_map_remove_from(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_remove_from`, {})
    }

    /**
     * Select faces belonging to a face map
     * @desc void
     */
    public face_map_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_map_select`, {})
    }

    /**
     * Toggle object’s force field
     * @desc void
     */
    public forcefield_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.forcefield_toggle`, {})
    }

    /**
     * Add a Grease Pencil object to the scene
     * @desc void
     */
    public gpencil_add(options: { radius?: number, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number], type?: 'EMPTY' | 'STROKE' | 'MONKEY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_add`, options)
    }

    /**
     * Add a procedural operation/effect to the active grease pencil object
     * @desc void
     */
    public gpencil_modifier_add(options: { type?: 'DATA_TRANSFER' | 'MESH_CACHE' | 'MESH_SEQUENCE_CACHE' | 'NORMAL_EDIT' | 'WEIGHTED_NORMAL' | 'UV_PROJECT' | 'UV_WARP' | 'VERTEX_WEIGHT_EDIT' | 'VERTEX_WEIGHT_MIX' | 'VERTEX_WEIGHT_PROXIMITY' | 'ARRAY' | 'BEVEL' | 'BOOLEAN' | 'BUILD' | 'DECIMATE' | 'EDGE_SPLIT' | 'MASK' | 'MIRROR' | 'MULTIRES' | 'REMESH' | 'SCREW' | 'SKIN' | 'SOLIDIFY' | 'SUBSURF' | 'TRIANGULATE' | 'WIREFRAME' | 'WELD' | 'ARMATURE' | 'CAST' | 'CURVE' | 'DISPLACE' | 'HOOK' | 'LAPLACIANDEFORM' | 'LATTICE' | 'MESH_DEFORM' | 'SHRINKWRAP' | 'SIMPLE_DEFORM' | 'SMOOTH' | 'CORRECTIVE_SMOOTH' | 'LAPLACIANSMOOTH' | 'SURFACE_DEFORM' | 'WARP' | 'WAVE' | 'CLOTH' | 'COLLISION' | 'DYNAMIC_PAINT' | 'EXPLODE' | 'OCEAN' | 'PARTICLE_INSTANCE' | 'PARTICLE_SYSTEM' | 'FLUID' | 'SOFT_BODY' | 'SURFACE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_modifier_add`, options)
    }

    /**
     * Apply modifier and remove from the stack
     * @desc void
     */
    public gpencil_modifier_apply(options: { apply_as?: 'DATA' | 'SHAPE', modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_modifier_apply`, options)
    }

    /**
     * Duplicate modifier at the same position in the stack
     * @desc void
     */
    public gpencil_modifier_copy(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_modifier_copy`, options)
    }

    /**
     * Move modifier down in the stack
     * @desc void
     */
    public gpencil_modifier_move_down(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_modifier_move_down`, options)
    }

    /**
     * Move modifier up in the stack
     * @desc void
     */
    public gpencil_modifier_move_up(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_modifier_move_up`, options)
    }

    /**
     * Remove a modifier from the active grease pencil object
     * @desc void
     */
    public gpencil_modifier_remove(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_modifier_remove`, options)
    }

    /**
     * Show only objects in collection (Shift to extend)
     * @desc void
     */
    public hide_collection(options: { collection_index?: number, toggle?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_collection`, options)
    }

    /**
     * Reveal all render objects by setting the hide render flag
     * @desc void
     */
    public hide_render_clear_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_render_clear_all`, {})
    }

    /**
     * Reveal temporarily hidden objects
     * @desc void
     */
    public hide_view_clear(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_view_clear`, options)
    }

    /**
     * Temporarily hide objects from the viewport
     * @desc void
     */
    public hide_view_set(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_view_set`, options)
    }

    /**
     * Hook selected vertices to a newly created object
     * @desc void
     */
    public hook_add_newob(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_add_newob`, {})
    }

    /**
     * Hook selected vertices to the first selected object
     * @desc void
     */
    public hook_add_selob(options: { use_bone?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_add_selob`, options)
    }

    /**
     * Assign the selected vertices to a hook
     * @desc void
     */
    public hook_assign(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_assign`, options)
    }

    /**
     * Set hook center to cursor position
     * @desc void
     */
    public hook_recenter(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_recenter`, options)
    }

    /**
     * Remove a hook from the active object
     * @desc void
     */
    public hook_remove(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_remove`, options)
    }

    /**
     * Recalculate and clear offset transformation
     * @desc void
     */
    public hook_reset(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_reset`, options)
    }

    /**
     * Select affected vertices on mesh
     * @desc void
     */
    public hook_select(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hook_select`, options)
    }

    /**
     * Set offset used for collection instances based on cursor position
     * @desc void
     */
    public instance_offset_from_cursor(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.instance_offset_from_cursor`, {})
    }

    /**
     * Hide unselected render objects of same type as active by setting the hide render flag
     * @desc void
     */
    public isolate_type_render(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.isolate_type_render`, {})
    }

    /**
     * Join selected objects into active object
     * @desc void
     */
    public join(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.join`, {})
    }

    /**
     * Copy the current resulting shape of another selected object to this one
     * @desc void
     */
    public join_shapes(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.join_shapes`, {})
    }

    /**
     * Transfer UV Maps from active to selected objects (needs matching geometry)
     * @desc void
     */
    public join_uvs(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.join_uvs`, {})
    }

    /**
     * Bind mesh to system in laplacian deform modifier
     * @desc void
     */
    public laplaciandeform_bind(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.laplaciandeform_bind`, options)
    }

    /**
     * Add a light object to the scene
     * @desc void
     */
    public light_add(options: { type?: 'POINT' | 'SUN' | 'SPOT' | 'AREA', radius?: number, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.light_add`, options)
    }

    /**
     * Add a light probe object
     * @desc void
     */
    public lightprobe_add(options: { type?: 'CUBEMAP' | 'PLANAR' | 'GRID', radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lightprobe_add`, options)
    }

    /**
     * Link objects to a collection
     * @desc void
     */
    public link_to_collection(options: { collection_index?: number, is_new?: boolean, new_collection_name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link_to_collection`, options)
    }

    /**
     * Add a reference image into the background behind objects
     * @desc void
     */
    public load_background_image(options: { filepath?: string, filter_image?: boolean, filter_folder?: boolean, view_align?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.load_background_image`, options)
    }

    /**
     * Add a reference image into the scene between objects
     * @desc void
     */
    public load_reference_image(options: { filepath?: string, filter_image?: boolean, filter_folder?: boolean, view_align?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.load_reference_image`, options)
    }

    /**
     * Clear the object’s location
     * @desc void
     */
    public location_clear(options: { clear_delta?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.location_clear`, options)
    }

    /**
     * Convert objects into instanced faces
     * @desc void
     */
    public make_dupli_face(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_dupli_face`, {})
    }

    /**
     * Apply active object links to other selected objects
     * @desc void
     */
    public make_links_data(options: { type?: 'OBDATA' | 'MATERIAL' | 'ANIMATION' | 'GROUPS' | 'DUPLICOLLECTION' | 'MODIFIERS' | 'FONTS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_links_data`, options)
    }

    /**
     * Link selection to another scene
     * @desc void
     */
    public make_links_scene(options: { scene?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_links_scene`, options)
    }

    /**
     * Make library linked data-blocks local to this file
     * @desc void
     */
    public make_local(options: { type?: 'SELECT_OBJECT' | 'SELECT_OBDATA' | 'SELECT_OBDATA_MATERIAL' | 'ALL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_local`, options)
    }

    /**
     * Make a local override of this library linked data-block
     * @desc void
     */
    public make_override_library(options: { object?: 'DEFAULT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_override_library`, options)
    }

    /**
     * Make linked data local to each object
     * @desc void
     */
    public make_single_user(options: { type?: 'SELECTED_OBJECTS' | 'ALL', object?: boolean, obdata?: boolean, material?: boolean, animation?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_single_user`, options)
    }

    /**
     * Add a new material slot
     * @desc void
     */
    public material_slot_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_add`, {})
    }

    /**
     * Assign active material slot to selection
     * @desc void
     */
    public material_slot_assign(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_assign`, {})
    }

    /**
     * Copy material to selected objects
     * @desc void
     */
    public material_slot_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_copy`, {})
    }

    /**
     * Deselect by active material slot
     * @desc void
     */
    public material_slot_deselect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_deselect`, {})
    }

    /**
     * Move the active material up/down in the list
     * @desc void
     */
    public material_slot_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_move`, options)
    }

    /**
     * Remove the selected material slot
     * @desc void
     */
    public material_slot_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_remove`, {})
    }

    /**
     * Remove unused material slots
     * @desc void
     */
    public material_slot_remove_unused(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_remove_unused`, {})
    }

    /**
     * Select by active material slot
     * @desc void
     */
    public material_slot_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.material_slot_select`, {})
    }

    /**
     * Bind mesh to cage in mesh deform modifier
     * @desc void
     */
    public meshdeform_bind(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.meshdeform_bind`, options)
    }

    /**
     * Add an metaball object to the scene
     * @desc void
     */
    public metaball_add(options: { type?: 'BALL' | 'CAPSULE' | 'PLANE' | 'ELLIPSOID' | 'CUBE', radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.metaball_add`, options)
    }

    /**
     * Sets the object interaction mode
     * @desc void
     */
    public mode_set(options: { mode?: 'OBJECT' | 'EDIT' | 'POSE' | 'SCULPT' | 'VERTEX_PAINT' | 'WEIGHT_PAINT' | 'TEXTURE_PAINT' | 'PARTICLE_EDIT' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'PAINT_GPENCIL' | 'WEIGHT_GPENCIL', toggle?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mode_set`, options)
    }

    /**
     * Sets the object interaction mode
     * @desc void
     */
    public mode_set_with_submode(options: { mode?: 'OBJECT' | 'EDIT' | 'POSE' | 'SCULPT' | 'VERTEX_PAINT' | 'WEIGHT_PAINT' | 'TEXTURE_PAINT' | 'PARTICLE_EDIT' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'PAINT_GPENCIL' | 'WEIGHT_GPENCIL', toggle?: boolean, mesh_select_mode?: ('VERT' | 'EDGE' | 'FACE')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mode_set_with_submode`, options)
    }

    /**
     * Add a procedural operation/effect to the active object
     * @desc void
     */
    public modifier_add(options: { type?: 'DATA_TRANSFER' | 'MESH_CACHE' | 'MESH_SEQUENCE_CACHE' | 'NORMAL_EDIT' | 'WEIGHTED_NORMAL' | 'UV_PROJECT' | 'UV_WARP' | 'VERTEX_WEIGHT_EDIT' | 'VERTEX_WEIGHT_MIX' | 'VERTEX_WEIGHT_PROXIMITY' | 'ARRAY' | 'BEVEL' | 'BOOLEAN' | 'BUILD' | 'DECIMATE' | 'EDGE_SPLIT' | 'MASK' | 'MIRROR' | 'MULTIRES' | 'REMESH' | 'SCREW' | 'SKIN' | 'SOLIDIFY' | 'SUBSURF' | 'TRIANGULATE' | 'WIREFRAME' | 'WELD' | 'ARMATURE' | 'CAST' | 'CURVE' | 'DISPLACE' | 'HOOK' | 'LAPLACIANDEFORM' | 'LATTICE' | 'MESH_DEFORM' | 'SHRINKWRAP' | 'SIMPLE_DEFORM' | 'SMOOTH' | 'CORRECTIVE_SMOOTH' | 'LAPLACIANSMOOTH' | 'SURFACE_DEFORM' | 'WARP' | 'WAVE' | 'CLOTH' | 'COLLISION' | 'DYNAMIC_PAINT' | 'EXPLODE' | 'OCEAN' | 'PARTICLE_INSTANCE' | 'PARTICLE_SYSTEM' | 'FLUID' | 'SOFT_BODY' | 'SURFACE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_add`, options)
    }

    /**
     * Apply modifier and remove from the stack
     * @desc void
     */
    public modifier_apply(options: { apply_as?: 'DATA' | 'SHAPE', modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_apply`, options)
    }

    /**
     * Convert particles to a mesh object
     * @desc void
     */
    public modifier_convert(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_convert`, options)
    }

    /**
     * Duplicate modifier at the same position in the stack
     * @desc void
     */
    public modifier_copy(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_copy`, options)
    }

    /**
     * Move modifier down in the stack
     * @desc void
     */
    public modifier_move_down(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_move_down`, options)
    }

    /**
     * Move modifier up in the stack
     * @desc void
     */
    public modifier_move_up(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_move_up`, options)
    }

    /**
     * Remove a modifier from the active object
     * @desc void
     */
    public modifier_remove(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.modifier_remove`, options)
    }

    /**
     * Move objects to a collection
     * @desc void
     */
    public move_to_collection(options: { collection_index?: number, is_new?: boolean, new_collection_name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_to_collection`, options)
    }

    /**
     * Modify the base mesh to conform to the displaced mesh
     * @desc void
     */
    public multires_base_apply(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.multires_base_apply`, options)
    }

    /**
     * Pack displacements from an external file
     * @desc void
     */
    public multires_external_pack(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.multires_external_pack`, {})
    }

    /**
     * Save displacements to an external file
     * @desc void
     */
    public multires_external_save(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.multires_external_save`, options)
    }

    /**
     * Deletes the higher resolution mesh, potential loss of detail
     * @desc void
     */
    public multires_higher_levels_delete(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.multires_higher_levels_delete`, options)
    }

    /**
     * Copy vertex coordinates from other object
     * @desc void
     */
    public multires_reshape(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.multires_reshape`, options)
    }

    /**
     * Add a new level of subdivision
     * @desc void
     */
    public multires_subdivide(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.multires_subdivide`, options)
    }

    /**
     * Bake an image sequence of ocean data
     * @desc void
     */
    public ocean_bake(options: { modifier?: string, free?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ocean_bake`, options)
    }

    /**
     * Clear the object’s origin
     * @desc void
     */
    public origin_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.origin_clear`, {})
    }

    /**
     * Set the object’s origin, by either moving the data, or set to center of data, or use 3D cursor
     * @desc void
     */
    public origin_set(options: { type?: 'GEOMETRY_ORIGIN' | 'ORIGIN_GEOMETRY' | 'ORIGIN_CURSOR' | 'ORIGIN_CENTER_OF_MASS' | 'ORIGIN_CENTER_OF_VOLUME', center?: 'MEDIAN' | 'BOUNDS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.origin_set`, options)
    }

    /**
     * Clear the object’s parenting
     * @desc void
     */
    public parent_clear(options: { type?: 'CLEAR' | 'CLEAR_KEEP_TRANSFORM' | 'CLEAR_INVERSE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_clear`, options)
    }

    /**
     * Set the object’s parenting without setting the inverse parent correction
     * @desc void
     */
    public parent_no_inverse_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_no_inverse_set`, {})
    }

    /**
     * Set the object’s parenting
     * @desc void
     */
    public parent_set(options: { type?: 'OBJECT' | 'ARMATURE' | 'ARMATURE_NAME' | 'ARMATURE_AUTO' | 'ARMATURE_ENVELOPE' | 'BONE' | 'BONE_RELATIVE' | 'CURVE' | 'FOLLOW' | 'PATH_CONST' | 'LATTICE' | 'VERTEX' | 'VERTEX_TRI', xmirror?: boolean, keep_transform?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_set`, options)
    }

    /**
     * Add a particle system
     * @desc void
     */
    public particle_system_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.particle_system_add`, {})
    }

    /**
     * Remove the selected particle system
     * @desc void
     */
    public particle_system_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.particle_system_remove`, {})
    }

    /**
     * Calculate motion paths for the selected objects
     * @desc void
     */
    public paths_calculate(options: { start_frame?: number, end_frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_calculate`, options)
    }

    /**
     * Clear path caches for all objects, hold Shift key for selected objects only
     * @desc void
     */
    public paths_clear(options: { only_selected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_clear`, options)
    }

    /**
     * Update frame range for motion paths from the Scene’s current frame range
     * @desc void
     */
    public paths_range_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_range_update`, {})
    }

    /**
     * Recalculate paths for selected objects
     * @desc void
     */
    public paths_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_update`, {})
    }

    /**
     * Enable or disable posing/selecting bones
     * @desc void
     */
    public posemode_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.posemode_toggle`, {})
    }

    /**
     * Add empty object to become local replacement data of a library-linked object
     * @desc void
     */
    public proxy_make(options: { object?: 'DEFAULT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.proxy_make`, options)
    }

    /**
     * Create a new quad based mesh using the surface data of the current mesh. All data layers will be lost
     * @desc void
     */
    public quadriflow_remesh(options: { use_paint_symmetry?: boolean, use_preserve_sharp?: boolean, use_preserve_boundary?: boolean, use_mesh_curvature?: boolean, preserve_paint_mask?: boolean, smooth_normals?: boolean, mode?: 'RATIO' | 'EDGE' | 'FACES', target_ratio?: number, target_edge_length?: number, target_faces?: number, mesh_area?: number, seed?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quadriflow_remesh`, options)
    }

    /**
     * Make selected objects explode
     * @desc void
     */
    public quick_explode(options: { style?: 'EXPLODE' | 'BLEND', amount?: number, frame_duration?: number, frame_start?: number, frame_end?: number, velocity?: number, fade?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quick_explode`, options)
    }

    /**
     * Add fur setup to the selected objects
     * @desc void
     */
    public quick_fur(options: { density?: 'LIGHT' | 'MEDIUM' | 'HEAVY', view_percentage?: number, length?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quick_fur`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public quick_liquid(options: { show_flows?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quick_liquid`, options)
    }

    /**
     * Use selected objects as smoke emitters
     * @desc void
     */
    public quick_smoke(options: { style?: 'SMOKE' | 'FIRE' | 'BOTH', show_flows?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quick_smoke`, options)
    }

    /**
     * Randomize objects loc/rot/scale
     * @desc void
     */
    public randomize_transform(options: { random_seed?: number, use_delta?: boolean, use_loc?: boolean, loc?: [number, number, number], use_rot?: boolean, rot?: [number, number, number], use_scale?: boolean, scale_even?: boolean, scale?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.randomize_transform`, options)
    }

    /**
     * Clear the object’s rotation
     * @desc void
     */
    public rotation_clear(options: { clear_delta?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rotation_clear`, options)
    }

    /**
     * Clear the object’s scale
     * @desc void
     */
    public scale_clear(options: { clear_delta?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scale_clear`, options)
    }

    /**
     * Change selection of all visible objects in scene
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select all visible objects that are of a type
     * @desc void
     */
    public select_by_type(options: { extend?: boolean, type?: 'MESH' | 'CURVE' | 'SURFACE' | 'META' | 'FONT' | 'ARMATURE' | 'LATTICE' | 'EMPTY' | 'GPENCIL' | 'CAMERA' | 'LIGHT' | 'SPEAKER' | 'LIGHT_PROBE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_by_type`, options)
    }

    /**
     * Select the active camera
     * @desc void
     */
    public select_camera(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_camera`, options)
    }

    /**
     * Select all visible objects grouped by various properties
     * @desc void
     */
    public select_grouped(options: { extend?: boolean, type?: 'CHILDREN_RECURSIVE' | 'CHILDREN' | 'PARENT' | 'SIBLINGS' | 'TYPE' | 'COLLECTION' | 'HOOK' | 'PASS' | 'COLOR' | 'KEYINGSET' | 'LIGHT_TYPE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_grouped`, options)
    }

    /**
     * Select object relative to the active object’s position in the hierarchy
     * @desc void
     */
    public select_hierarchy(options: { direction?: 'PARENT' | 'CHILD', extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_hierarchy`, options)
    }

    /**
     * Deselect objects at the boundaries of parent/child relationships
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select all visible objects that are linked
     * @desc void
     */
    public select_linked(options: { extend?: boolean, type?: 'OBDATA' | 'MATERIAL' | 'DUPGROUP' | 'PARTICLE' | 'LIBRARY' | 'LIBRARY_OBDATA' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, options)
    }

    /**
     * Select the Mirror objects of the selected object eg. L.sword -> R.sword
     * @desc void
     */
    public select_mirror(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_mirror`, options)
    }

    /**
     * Select connected parent/child objects
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Select objects matching a naming pattern
     * @desc void
     */
    public select_pattern(options: { pattern?: string, case_sensitive?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_pattern`, options)
    }

    /**
     * Set select on random visible objects
     * @desc void
     */
    public select_random(options: { percent?: number, seed?: number, action?: 'SELECT' | 'DESELECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_random`, options)
    }

    /**
     * Select object in the same collection
     * @desc void
     */
    public select_same_collection(options: { collection?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_same_collection`, options)
    }

    /**
     * Render and display faces uniform, using Face Normals
     * @desc void
     */
    public shade_flat(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shade_flat`, {})
    }

    /**
     * Render and display faces smooth, using interpolated Vertex Normals
     * @desc void
     */
    public shade_smooth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shade_smooth`, {})
    }

    /**
     * Add a visual effect to the active object
     * @desc void
     */
    public shaderfx_add(options: { type?: 'FX_BLUR' | 'FX_COLORIZE' | 'FX_FLIP' | 'FX_GLOW' | 'FX_LIGHT' | 'FX_PIXEL' | 'FX_RIM' | 'FX_SHADOW' | 'FX_SWIRL' | 'FX_WAVE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shaderfx_add`, options)
    }

    /**
     * Move shaderfx down in the stack
     * @desc void
     */
    public shaderfx_move_down(options: { shaderfx?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shaderfx_move_down`, options)
    }

    /**
     * Move shaderfx up in the stack
     * @desc void
     */
    public shaderfx_move_up(options: { shaderfx?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shaderfx_move_up`, options)
    }

    /**
     * Remove a shaderfx from the active grease pencil object
     * @desc void
     */
    public shaderfx_remove(options: { shaderfx?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shaderfx_remove`, options)
    }

    /**
     * Add shape key to the object
     * @desc void
     */
    public shape_key_add(options: { from_mix?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_add`, options)
    }

    /**
     * Clear weights for all shape keys
     * @desc void
     */
    public shape_key_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_clear`, {})
    }

    /**
     * Mirror the current shape key along the local X axis
     * @desc void
     */
    public shape_key_mirror(options: { use_topology?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_mirror`, options)
    }

    /**
     * Move the active shape key up/down in the list
     * @desc void
     */
    public shape_key_move(options: { type?: 'TOP' | 'UP' | 'DOWN' | 'BOTTOM' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_move`, options)
    }

    /**
     * Remove shape key from the object
     * @desc void
     */
    public shape_key_remove(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_remove`, options)
    }

    /**
     * Resets the timing for absolute shape keys
     * @desc void
     */
    public shape_key_retime(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_retime`, {})
    }

    /**
     * Copy the active shape key of another selected object to this one
     * @desc void
     */
    public shape_key_transfer(options: { mode?: 'OFFSET' | 'RELATIVE_FACE' | 'RELATIVE_EDGE', use_clamp?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_transfer`, options)
    }

    /**
     * Create an armature that parallels the skin layout
     * @desc void
     */
    public skin_armature_create(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.skin_armature_create`, options)
    }

    /**
     * Mark/clear selected vertices as loose
     * @desc void
     */
    public skin_loose_mark_clear(options: { action?: 'MARK' | 'CLEAR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.skin_loose_mark_clear`, options)
    }

    /**
     * Make skin radii of selected vertices equal on each axis
     * @desc void
     */
    public skin_radii_equalize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.skin_radii_equalize`, {})
    }

    /**
     * Mark selected vertices as roots
     * @desc void
     */
    public skin_root_mark(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.skin_root_mark`, {})
    }

    /**
     * Add a speaker object to the scene
     * @desc void
     */
    public speaker_add(options: { enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.speaker_add`, options)
    }

    /**
     * Sets a Subdivision Surface Level (1-5)
     * @desc void
     */
    public subdivision_set(options: { level?: number, relative?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.subdivision_set`, options)
    }

    /**
     * Bind mesh to target in surface deform modifier
     * @desc void
     */
    public surfacedeform_bind(options: { modifier?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.surfacedeform_bind`, options)
    }

    /**
     * Add a text object to the scene
     * @desc void
     */
    public text_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.text_add`, options)
    }

    /**
     * Clear tracking constraint or flag from object
     * @desc void
     */
    public track_clear(options: { type?: 'CLEAR' | 'CLEAR_KEEP_TRANSFORM' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_clear`, options)
    }

    /**
     * Make the object track another object, using various methods/constraints
     * @desc void
     */
    public track_set(options: { type?: 'DAMPTRACK' | 'TRACKTO' | 'LOCKTRACK' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.track_set`, options)
    }

    /**
     * Apply the object’s transformation to its data
     * @desc void
     */
    public transform_apply(options: { location?: boolean, rotation?: boolean, scale?: boolean, properties?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform_apply`, options)
    }

    /**
     * Interactively point cameras and lights to a location (Ctrl translates)
     * @desc void
     */
    public transform_axis_target(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform_axis_target`, {})
    }

    /**
     * Convert normal object transforms to delta transforms, any existing delta transforms will be included as well
     * @desc void
     */
    public transforms_to_deltas(options: { mode?: 'ALL' | 'LOC' | 'ROT' | 'SCALE', reset_values?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transforms_to_deltas`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public unlink_data(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink_data`, {})
    }

    /**
     * Add a new vertex group to the active object
     * @desc void
     */
    public vertex_group_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_add`, {})
    }

    /**
     * Assign the selected vertices to the active vertex group
     * @desc void
     */
    public vertex_group_assign(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_assign`, {})
    }

    /**
     * Assign the selected vertices to a new vertex group
     * @desc void
     */
    public vertex_group_assign_new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_assign_new`, {})
    }

    /**
     * Remove vertex group assignments which are not required
     * @desc void
     */
    public vertex_group_clean(options: { group_select_mode?: string, limit?: number, keep_single?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_clean`, options)
    }

    /**
     * Make a copy of the active vertex group
     * @desc void
     */
    public vertex_group_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_copy`, {})
    }

    /**
     * Replace vertex groups of all users of the same geometry data by vertex groups of active object
     * @desc void
     */
    public vertex_group_copy_to_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_copy_to_linked`, {})
    }

    /**
     * Replace vertex groups of selected objects by vertex groups of active object
     * @desc void
     */
    public vertex_group_copy_to_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_copy_to_selected`, {})
    }

    /**
     * Deselect all selected vertices assigned to the active vertex group
     * @desc void
     */
    public vertex_group_deselect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_deselect`, {})
    }

    /**
     * Modify the position of selected vertices by changing only their respective groups’ weights (this tool may be slow for many vertices)
     * @desc void
     */
    public vertex_group_fix(options: { dist?: number, strength?: number, accuracy?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_fix`, options)
    }

    /**
     * Invert active vertex group’s weights
     * @desc void
     */
    public vertex_group_invert(options: { group_select_mode?: string, auto_assign?: boolean, auto_remove?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_invert`, options)
    }

    /**
     * Add some offset and multiply with some gain the weights of the active vertex group
     * @desc void
     */
    public vertex_group_levels(options: { group_select_mode?: string, offset?: number, gain?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_levels`, options)
    }

    /**
     * Limit deform weights associated with a vertex to a specified number by removing lowest weights
     * @desc void
     */
    public vertex_group_limit_total(options: { group_select_mode?: string, limit?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_limit_total`, options)
    }

    /**
     * Change the lock state of all vertex groups of active object
     * @desc void
     */
    public vertex_group_lock(options: { action?: 'TOGGLE' | 'LOCK' | 'UNLOCK' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_lock`, options)
    }

    /**
     * Mirror vertex group, flip weights and/or names, editing only selected vertices, flipping when both sides are selected otherwise copy from unselected
     * @desc void
     */
    public vertex_group_mirror(options: { mirror_weights?: boolean, flip_group_names?: boolean, all_groups?: boolean, use_topology?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_mirror`, options)
    }

    /**
     * Move the active vertex group up/down in the list
     * @desc void
     */
    public vertex_group_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_move`, options)
    }

    /**
     * Normalize weights of the active vertex group, so that the highest ones are now 1.0
     * @desc void
     */
    public vertex_group_normalize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_normalize`, {})
    }

    /**
     * Normalize all weights of all vertex groups, so that for each vertex, the sum of all weights is 1.0
     * @desc void
     */
    public vertex_group_normalize_all(options: { group_select_mode?: string, lock_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_normalize_all`, options)
    }

    /**
     * Set weights to a fixed number of steps
     * @desc void
     */
    public vertex_group_quantize(options: { group_select_mode?: string, steps?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_quantize`, options)
    }

    /**
     * Delete the active or all vertex groups from the active object
     * @desc void
     */
    public vertex_group_remove(options: { all?: boolean, all_unlocked?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_remove`, options)
    }

    /**
     * Remove the selected vertices from active or all vertex group(s)
     * @desc void
     */
    public vertex_group_remove_from(options: { use_all_groups?: boolean, use_all_verts?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_remove_from`, options)
    }

    /**
     * Select all the vertices assigned to the active vertex group
     * @desc void
     */
    public vertex_group_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_select`, {})
    }

    /**
     * Set the active vertex group
     * @desc void
     */
    public vertex_group_set_active(options: { group?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_set_active`, options)
    }

    /**
     * Smooth weights for selected vertices
     * @desc void
     */
    public vertex_group_smooth(options: { group_select_mode?: string, factor?: number, repeat?: number, expand?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_smooth`, options)
    }

    /**
     * Sort vertex groups
     * @desc void
     */
    public vertex_group_sort(options: { sort_type?: 'NAME' | 'BONE_HIERARCHY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_sort`, options)
    }

    /**
     * Parent selected objects to the selected vertices
     * @desc void
     */
    public vertex_parent_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_parent_set`, {})
    }

    /**
     * Copy weights from active to selected
     * @desc void
     */
    public vertex_weight_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_weight_copy`, {})
    }

    /**
     * Delete this weight from the vertex (disabled if vertex group is locked)
     * @desc void
     */
    public vertex_weight_delete(options: { weight_group?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_weight_delete`, options)
    }

    /**
     * Normalize active vertex’s weights
     * @desc void
     */
    public vertex_weight_normalize_active_vertex(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_weight_normalize_active_vertex`, {})
    }

    /**
     * Copy this group’s weight to other selected verts (disabled if vertex group is locked)
     * @desc void
     */
    public vertex_weight_paste(options: { weight_group?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_weight_paste`, options)
    }

    /**
     * Set as active vertex group
     * @desc void
     */
    public vertex_weight_set_active(options: { weight_group?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_weight_set_active`, options)
    }

    /**
     * Apply the object’s visual transformation to its data
     * @desc void
     */
    public visual_transform_apply(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.visual_transform_apply`, {})
    }

    /**
     * Calculates a new manifold mesh based on the volume of the current mesh. All data layers will be lost
     * @desc void
     */
    public voxel_remesh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.voxel_remesh`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
