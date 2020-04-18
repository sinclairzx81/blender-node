import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * WmOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.wm.html
 */
export class WmOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Export current scene in an Alembic archive
     * @desc void
     */
    public alembic_export(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', start?: number, end?: number, xsamples?: number, gsamples?: number, sh_open?: number, sh_close?: number, selected?: boolean, renderable_only?: boolean, visible_objects_only?: boolean, flatten?: boolean, uvs?: boolean, packuv?: boolean, normals?: boolean, vcolors?: boolean, face_sets?: boolean, subdiv_schema?: boolean, apply_subdiv?: boolean, curves_as_mesh?: boolean, compression_type?: 'OGAWA' | 'HDF5', global_scale?: number, triangulate?: boolean, quad_method?: 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL', ngon_method?: 'BEAUTY' | 'FIXED' | 'FIXED_ALTERNATE' | 'SHORTEST_DIAGONAL', export_hair?: boolean, export_particles?: boolean, as_background_job?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.alembic_export`, options)
    }

    /**
     * Load an Alembic archive
     * @desc void
     */
    public alembic_import(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', scale?: number, set_frame_range?: boolean, validate_meshes?: boolean, is_sequence?: boolean, as_background_job?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.alembic_import`, options)
    }

    /**
     * Append from a Library .blend file
     * @desc void
     */
    public append(options: { filepath?: string, directory?: string, filename?: string, files?: any, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', link?: boolean, autoselect?: boolean, active_collection?: boolean, instance_collections?: boolean, set_fake?: boolean, use_recursive?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.append`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public batch_rename(options: { data_type?: 'OBJECT' | 'MATERIAL' | 'MESH' | 'CURVE' | 'META' | 'ARMATURE' | 'LATTICE' | 'GPENCIL' | 'CAMERA' | 'SPEAKER' | 'LIGHT_PROBE' | 'BONE' | 'NODE' | 'SEQUENCE_STRIP', data_source?: 'SELECT' | 'ALL', actions?: any }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.batch_rename`, options)
    }

    /**
     * Check and fix all strings in current .blend file to be valid UTF-8 Unicode (needed for some old, 2.4x area files)
     * @desc void
     */
    public blend_strings_utf8_validate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.blend_strings_utf8_validate`, {})
    }

    /**
     * Call (draw) a pre-defined menu
     * @desc void
     */
    public call_menu(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.call_menu`, options)
    }

    /**
     * Call (draw) a pre-defined pie menu
     * @desc void
     */
    public call_menu_pie(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.call_menu_pie`, options)
    }

    /**
     * Call (draw) a pre-defined panel
     * @desc void
     */
    public call_panel(options: { name?: string, keep_open?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.call_panel`, options)
    }

    /**
     * Save a Collada file
     * @desc void
     */
    public collada_export(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', prop_bc_export_ui_section?: 'main' | 'geometry' | 'armature' | 'animation' | 'collada', apply_modifiers?: boolean, export_mesh_type?: number, export_mesh_type_selection?: 'view' | 'render', export_global_forward_selection?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', export_global_up_selection?: 'X' | 'Y' | 'Z' | '-X' | '-Y' | '-Z', apply_global_orientation?: boolean, selected?: boolean, include_children?: boolean, include_armatures?: boolean, include_shapekeys?: boolean, deform_bones_only?: boolean, include_animations?: boolean, include_all_actions?: boolean, export_animation_type_selection?: 'sample' | 'keys', sampling_rate?: number, keep_smooth_curves?: boolean, keep_keyframes?: boolean, keep_flat_curves?: boolean, active_uv_only?: boolean, use_texture_copies?: boolean, triangulate?: boolean, use_object_instantiation?: boolean, use_blender_profile?: boolean, sort_by_name?: boolean, export_object_transformation_type?: number, export_object_transformation_type_selection?: 'matrix' | 'decomposed', export_animation_transformation_type?: number, export_animation_transformation_type_selection?: 'matrix' | 'decomposed', open_sim?: boolean, limit_precision?: boolean, keep_bind_info?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collada_export`, options)
    }

    /**
     * Load a Collada file
     * @desc void
     */
    public collada_import(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', import_units?: boolean, fix_orientation?: boolean, find_chains?: boolean, auto_connect?: boolean, min_chain_length?: number, keep_bind_info?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.collada_import`, options)
    }

    /**
     * Set boolean values for a collection of items
     * @desc void
     */
    public context_collection_boolean_set(options: { data_path_iter?: string, data_path_item?: string, type?: 'TOGGLE' | 'ENABLE' | 'DISABLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_collection_boolean_set`, options)
    }

    /**
     * Set a context array value (useful for cycling the active mesh edit mode)
     * @desc void
     */
    public context_cycle_array(options: { data_path?: string, reverse?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_cycle_array`, options)
    }

    /**
     * Toggle a context value
     * @desc void
     */
    public context_cycle_enum(options: { data_path?: string, reverse?: boolean, wrap?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_cycle_enum`, options)
    }

    /**
     * Set a context value (useful for cycling active material, vertex keys, groups, etc.)
     * @desc void
     */
    public context_cycle_int(options: { data_path?: string, reverse?: boolean, wrap?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_cycle_int`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public context_menu_enum(options: { data_path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_menu_enum`, options)
    }

    /**
     * Adjust arbitrary values with mouse input
     * @desc void
     */
    public context_modal_mouse(options: { data_path_iter?: string, data_path_item?: string, header_text?: string, input_scale?: number, invert?: boolean, initial_x?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_modal_mouse`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public context_pie_enum(options: { data_path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_pie_enum`, options)
    }

    /**
     * Scale a float context value
     * @desc void
     */
    public context_scale_float(options: { data_path?: string, value?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_scale_float`, options)
    }

    /**
     * Scale an int context value
     * @desc void
     */
    public context_scale_int(options: { data_path?: string, value?: number, always_step?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_scale_int`, options)
    }

    /**
     * Set a context value
     * @desc void
     */
    public context_set_boolean(options: { data_path?: string, value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_boolean`, options)
    }

    /**
     * Set a context value
     * @desc void
     */
    public context_set_enum(options: { data_path?: string, value?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_enum`, options)
    }

    /**
     * Set a context value
     * @desc void
     */
    public context_set_float(options: { data_path?: string, value?: number, relative?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_float`, options)
    }

    /**
     * Set a context value to an ID data-block
     * @desc void
     */
    public context_set_id(options: { data_path?: string, value?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_id`, options)
    }

    /**
     * Set a context value
     * @desc void
     */
    public context_set_int(options: { data_path?: string, value?: number, relative?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_int`, options)
    }

    /**
     * Set a context value
     * @desc void
     */
    public context_set_string(options: { data_path?: string, value?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_string`, options)
    }

    /**
     * Set a context value
     * @desc void
     */
    public context_set_value(options: { data_path?: string, value?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_set_value`, options)
    }

    /**
     * Toggle a context value
     * @desc void
     */
    public context_toggle(options: { data_path?: string, module?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_toggle`, options)
    }

    /**
     * Toggle a context value
     * @desc void
     */
    public context_toggle_enum(options: { data_path?: string, value_1?: string, value_2?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_toggle_enum`, options)
    }

    /**
     * Open a popup to set the debug level
     * @desc void
     */
    public debug_menu(options: { debug_value?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.debug_menu`, options)
    }

    /**
     * Open online reference docs in a web browser
     * @desc void
     */
    public doc_view(options: { doc_id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.doc_view`, options)
    }

    /**
     * Load online manual
     * @desc void
     */
    public doc_view_manual(options: { doc_id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.doc_view_manual`, options)
    }

    /**
     * View a context based online manual in a web browser
     * @desc void
     */
    public doc_view_manual_ui_context(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.doc_view_manual_ui_context`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public drop_blend_file(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.drop_blend_file`, options)
    }

    /**
     * Add or remove a theme preset
     * @desc void
     */
    public interface_theme_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.interface_theme_preset_add`, options)
    }

    /**
     * Add or remove a Key-config Preset
     * @desc void
     */
    public keyconfig_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyconfig_preset_add`, options)
    }

    /**
     * Reload the given library
     * @desc void
     */
    public lib_reload(options: { library?: string, filepath?: string, directory?: string, filename?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lib_reload`, options)
    }

    /**
     * Relocate the given library to one or several others
     * @desc void
     */
    public lib_relocate(options: { library?: string, filepath?: string, directory?: string, filename?: string, files?: any, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lib_relocate`, options)
    }

    /**
     * Link from a Library .blend file
     * @desc void
     */
    public link(options: { filepath?: string, directory?: string, filename?: string, files?: any, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', link?: boolean, autoselect?: boolean, active_collection?: boolean, instance_collections?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link`, options)
    }

    /**
     * Print memory statistics to the console
     * @desc void
     */
    public memory_statistics(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.memory_statistics`, {})
    }

    /**
     * Open a Blender file
     * @desc void
     */
    public open_mainfile(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', load_ui?: boolean, use_scripts?: boolean, display_file_selector?: boolean, state?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open_mainfile`, options)
    }

    /**
     * List all the Operators in a text-block, useful for scripting
     * @desc void
     */
    public operator_cheat_sheet(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.operator_cheat_sheet`, {})
    }

    /**
     * Set the active operator to its default values
     * @desc void
     */
    public operator_defaults(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.operator_defaults`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public operator_pie_enum(options: { data_path?: string, prop_string?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.operator_pie_enum`, options)
    }

    /**
     * Add or remove an Operator Preset
     * @desc void
     */
    public operator_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean, operator?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.operator_preset_add`, options)
    }

    /**
     * Enable workspace owner ID
     * @desc void
     */
    public owner_disable(options: { owner_id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.owner_disable`, options)
    }

    /**
     * Enable workspace owner ID
     * @desc void
     */
    public owner_enable(options: { owner_id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.owner_enable`, options)
    }

    /**
     * Open a path in a file browser
     * @desc void
     */
    public path_open(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.path_open`, options)
    }

    /**
     * Clear selected .blend file’s previews
     * @desc void
     */
    public previews_batch_clear(options: { files?: any, directory?: string, filter_blender?: boolean, filter_folder?: boolean, use_scenes?: boolean, use_collections?: boolean, use_objects?: boolean, use_intern_data?: boolean, use_trusted?: boolean, use_backups?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previews_batch_clear`, options)
    }

    /**
     * Generate selected .blend file’s previews
     * @desc void
     */
    public previews_batch_generate(options: { files?: any, directory?: string, filter_blender?: boolean, filter_folder?: boolean, use_scenes?: boolean, use_collections?: boolean, use_objects?: boolean, use_intern_data?: boolean, use_trusted?: boolean, use_backups?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previews_batch_generate`, options)
    }

    /**
     * Clear data-block previews (only for some types like objects, materials, textures, etc.)
     * @desc void
     */
    public previews_clear(options: { id_type?: ('ALL' | 'GEOMETRY' | 'SHADING' | 'SCENE' | 'GROUP' | 'OBJECT' | 'MATERIAL' | 'LIGHT' | 'WORLD' | 'TEXTURE' | 'IMAGE')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previews_clear`, options)
    }

    /**
     * Ensure data-block previews are available and up-to-date (to be saved in .blend file, only for some types like materials, textures, etc.)
     * @desc void
     */
    public previews_ensure(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previews_ensure`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public properties_add(options: { data_path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.properties_add`, options)
    }

    /**
     * Jump to a different tab inside the properties editor
     * @desc void
     */
    public properties_context_change(options: { context?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.properties_context_change`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public properties_edit(options: { data_path?: string, property?: string, value?: string, default?: string, min?: number, max?: number, use_soft_limits?: boolean, is_overridable_library?: boolean, soft_min?: number, soft_max?: number, description?: string, subtype?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.properties_edit`, options)
    }

    /**
     * Internal use (edit a property data_path)
     * @desc void
     */
    public properties_remove(options: { data_path?: string, property?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.properties_remove`, options)
    }

    /**
     * Quit Blender
     * @desc void
     */
    public quit_blender(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quit_blender`, {})
    }

    /**
     * Set some size property (like e.g. brush size) with mouse wheel
     * @desc void
     */
    public radial_control(options: { data_path_primary?: string, data_path_secondary?: string, use_secondary?: string, rotation_path?: string, color_path?: string, fill_color_path?: string, fill_color_override_path?: string, fill_color_override_test_path?: string, zoom_path?: string, image_id?: string, secondary_tex?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.radial_control`, options)
    }

    /**
     * Load factory default startup file and preferences. To make changes permanent, use “Save Startup File” and “Save Preferences”
     * @desc void
     */
    public read_factory_settings(options: { use_empty?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_factory_settings`, options)
    }

    /**
     * Load factory default preferences. To make changes to preferences permanent, use “Save Preferences”
     * @desc void
     */
    public read_factory_userpref(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_factory_userpref`, {})
    }

    /**
     * Reloads history and bookmarks
     * @desc void
     */
    public read_history(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_history`, {})
    }

    /**
     * Open the default file (doesn’t save the current file)
     * @desc void
     */
    public read_homefile(options: { filepath?: string, load_ui?: boolean, use_splash?: boolean, use_empty?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_homefile`, options)
    }

    /**
     * Load last saved preferences
     * @desc void
     */
    public read_userpref(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_userpref`, {})
    }

    /**
     * Open an automatically saved file to recover it
     * @desc void
     */
    public recover_auto_save(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.recover_auto_save`, options)
    }

    /**
     * Open the last closed file (“quit.blend”)
     * @desc void
     */
    public recover_last_session(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.recover_last_session`, {})
    }

    /**
     * Simple redraw timer to test the speed of updating the interface
     * @desc void
     */
    public redraw_timer(options: { type?: 'DRAW' | 'DRAW_SWAP' | 'DRAW_WIN' | 'DRAW_WIN_SWAP' | 'ANIM_STEP' | 'ANIM_PLAY' | 'UNDO', iterations?: number, time_limit?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.redraw_timer`, options)
    }

    /**
     * Reload the saved file
     * @desc void
     */
    public revert_mainfile(options: { use_scripts?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.revert_mainfile`, options)
    }

    /**
     * Save the current file in the desired location
     * @desc void
     */
    public save_as_mainfile(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', compress?: boolean, relative_remap?: boolean, copy?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_as_mainfile`, options)
    }

    /**
     * Make the current file the default .blend file
     * @desc void
     */
    public save_homefile(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_homefile`, {})
    }

    /**
     * Save the current Blender file
     * @desc void
     */
    public save_mainfile(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', compress?: boolean, relative_remap?: boolean, exit?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_mainfile`, options)
    }

    /**
     * Make the current preferences default
     * @desc void
     */
    public save_userpref(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_userpref`, {})
    }

    /**
     * Pop-up a search menu over all available operators in current context
     * @desc void
     */
    public search_menu(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.search_menu`, {})
    }

    /**
     * Toggle 3D stereo support for current window (or change the display mode)
     * @desc void
     */
    public set_stereo_3d(options: { display_mode?: 'ANAGLYPH' | 'INTERLACE' | 'TIMESEQUENTIAL' | 'SIDEBYSIDE' | 'TOPBOTTOM', anaglyph_type?: 'RED_CYAN' | 'GREEN_MAGENTA' | 'YELLOW_BLUE', interlace_type?: 'ROW_INTERLEAVED' | 'COLUMN_INTERLEAVED' | 'CHECKERBOARD_INTERLEAVED', use_interlace_swap?: boolean, use_sidebyside_crosseyed?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_stereo_3d`, options)
    }

    /**
     * Open the splash screen with release info
     * @desc void
     */
    public splash(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.splash`, {})
    }

    /**
     * Generate system information, saved into a text file
     * @desc void
     */
    public sysinfo(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sysinfo`, options)
    }

    /**
     * Set the tool by name (for keymaps)
     * @desc void
     */
    public tool_set_by_id(options: { name?: string, cycle?: boolean, as_fallback?: boolean, space_type?: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tool_set_by_id`, options)
    }

    /**
     * Set the tool by index (for keymaps)
     * @desc void
     */
    public tool_set_by_index(options: { index?: number, cycle?: boolean, expand?: boolean, as_fallback?: boolean, space_type?: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tool_set_by_index`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public toolbar(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.toolbar`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public toolbar_fallback_pie(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.toolbar_fallback_pie`, {})
    }

    /**
     * Leader key like functionality for accessing tools
     * @desc void
     */
    public toolbar_prompt(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.toolbar_prompt`, {})
    }

    /**
     * Open a website in the web-browser
     * @desc void
     */
    public url_open(options: { url?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.url_open`, options)
    }

    /**
     * Open a preset website in the web-browser
     * @desc void
     */
    public url_open_preset(options: { type?: string, id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.url_open_preset`, options)
    }

    /**
     * Add path to exclude from autoexecution
     * @desc void
     */
    public userpref_autoexec_path_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.userpref_autoexec_path_add`, {})
    }

    /**
     * Remove path to exclude from autoexecution
     * @desc void
     */
    public userpref_autoexec_path_remove(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.userpref_autoexec_path_remove`, options)
    }

    /**
     * Close the current window
     * @desc void
     */
    public window_close(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.window_close`, {})
    }

    /**
     * Toggle the current window fullscreen
     * @desc void
     */
    public window_fullscreen_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.window_fullscreen_toggle`, {})
    }

    /**
     * Create a new window
     * @desc void
     */
    public window_new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.window_new`, {})
    }

    /**
     * Create a new main window with its own workspace and scene selection
     * @desc void
     */
    public window_new_main(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.window_new_main`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
