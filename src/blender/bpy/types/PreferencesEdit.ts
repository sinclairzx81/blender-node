import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PreferencesEdit
 * 
 * https://docs.blender.org/api/current/bpy.types.PreferencesEdit.html
 */
export class PreferencesEdit {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Mode of automatic keyframe insertion for Objects and Bones (default setting used for new Scenes)
     * @desc enum in ['ADD_REPLACE_KEYS', 'REPLACE_KEYS'], default 'ADD_REPLACE_KEYS'
     */
    public get auto_keying_mode(): 'ADD_REPLACE_KEYS' | 'REPLACE_KEYS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.auto_keying_mode`)
    }

    /**
     * Auto Handle Smoothing mode used for newly added F-Curves
     * @desc enum in ['NONE', 'CONT_ACCEL'], default 'CONT_ACCEL'
     */
    public get fcurve_new_auto_smoothing(): 'NONE' | 'CONT_ACCEL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fcurve_new_auto_smoothing`)
    }

    /**
     * Amount that unselected F-Curves stand out from the background (Graph Editor)
     * @desc float in [0.001, 1], default 0.25
     */
    public get fcurve_unselected_alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fcurve_unselected_alpha`)
    }

    /**
     * Color of new annotation layers
     * @desc float array of 4 items in [0, inf], default (0.38, 0.61, 0.78, 0.9)
     */
    public get grease_pencil_default_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.grease_pencil_default_color`, 'number', 4)
    }

    /**
     * Radius of eraser ‘brush’
     * @desc int in [1, 500], default 25
     */
    public get grease_pencil_eraser_radius(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grease_pencil_eraser_radius`)
    }

    /**
     * Distance moved by mouse when drawing stroke to include
     * @desc int in [0, 100], default 2
     */
    public get grease_pencil_euclidean_distance(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grease_pencil_euclidean_distance`)
    }

    /**
     * Pixels moved by mouse per axis when drawing stroke
     * @desc int in [0, 100], default 1
     */
    public get grease_pencil_manhattan_distance(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.grease_pencil_manhattan_distance`)
    }

    /**
     * Handle type for handles of new keyframes
     * @desc enum in ['FREE', 'ALIGNED', 'VECTOR', 'AUTO', 'AUTO_CLAMPED'], default 'AUTO_CLAMPED'
     */
    public get keyframe_new_handle_type(): 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.keyframe_new_handle_type`)
    }

    /**
     * Interpolation mode used for first keyframe on newly added F-Curves (subsequent keyframes take interpolation from preceding keyframe)
     * @desc enum in ['CONSTANT', 'LINEAR', 'BEZIER', 'SINE', 'QUAD', 'CUBIC', 'QUART', 'QUINT', 'EXPO', 'CIRC', 'BACK', 'BOUNCE', 'ELASTIC'], default 'BEZIER'
     */
    public get keyframe_new_interpolation_type(): 'CONSTANT' | 'LINEAR' | 'BEZIER' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.keyframe_new_interpolation_type`)
    }

    /**
     * Toggle whether the material is linked to object data or the object block
     * @desc enum in ['OBDATA', 'OBJECT'], default 'OBDATA'
     */
    public get material_link(): 'OBDATA' | 'OBJECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.material_link`)
    }

    /**
     * Minimum distance between nodes for Auto-offsetting nodes
     * @desc int in [0, 255], default 80
     */
    public get node_margin(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.node_margin`)
    }

    /**
     * When adding objects from a 3D View menu, either align them with that view or with the world
     * @desc enum in ['WORLD', 'VIEW', 'CURSOR'], default 'WORLD'
     */
    public get object_align(): 'WORLD' | 'VIEW' | 'CURSOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.object_align`)
    }

    /**
     * Color of texture overlay
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get sculpt_paint_overlay_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.sculpt_paint_overlay_color`, 'number', 3)
    }

    /**
     * Maximum memory usage in megabytes (0 means unlimited)
     * @desc int in [0, inf], default 0
     */
    public get undo_memory_limit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.undo_memory_limit`)
    }

    /**
     * Number of undo steps available (smaller values conserve memory)
     * @desc int in [0, 256], default 32
     */
    public get undo_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.undo_steps`)
    }

    /**
     * Automatic keyframe insertion for Objects and Bones (default setting used for new Scenes)
     * @desc boolean, default False
     */
    public get use_auto_keying(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_keying`)
    }

    /**
     * Show warning indicators when transforming objects and bones if auto keying is enabled
     * @desc boolean, default False
     */
    public get use_auto_keying_warning(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_keying_warning`)
    }

    /**
     * Place the cursor without ‘jumping’ to the new location (when lock-to-cursor is used)
     * @desc boolean, default True
     */
    public get use_cursor_lock_adjust(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cursor_lock_adjust`)
    }

    /**
     * Causes actions to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_action(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_action`)
    }

    /**
     * Causes armature data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_armature(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_armature`)
    }

    /**
     * Causes curve data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_curve(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_curve`)
    }

    /**
     * Causes grease pencil data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_grease_pencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_grease_pencil`)
    }

    /**
     * Causes light data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_light(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_light`)
    }

    /**
     * Causes light probe data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_lightprobe(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_lightprobe`)
    }

    /**
     * Causes material data to be duplicated with the object
     * @desc boolean, default False
     */
    public get use_duplicate_material(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_material`)
    }

    /**
     * Causes mesh data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_mesh`)
    }

    /**
     * Causes metaball data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_metaball(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_metaball`)
    }

    /**
     * Causes particle systems to be duplicated with the object
     * @desc boolean, default False
     */
    public get use_duplicate_particle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_particle`)
    }

    /**
     * Causes surface data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_surface(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_surface`)
    }

    /**
     * Causes text data to be duplicated with the object
     * @desc boolean, default True
     */
    public get use_duplicate_text(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_duplicate_text`)
    }

    /**
     * Enter Edit Mode automatically after adding a new object
     * @desc boolean, default False
     */
    public get use_enter_edit_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_enter_edit_mode`)
    }

    /**
     * Global undo works by keeping a full copy of the file itself in memory, so takes extra memory
     * @desc boolean, default True
     */
    public get use_global_undo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_global_undo`)
    }

    /**
     * Color for newly added transformation F-Curves (Location, Rotation, Scale) and also Color is based on the transform axis
     * @desc boolean, default True
     */
    public get use_insertkey_xyz_to_rgb(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_xyz_to_rgb`)
    }

    /**
     * Automatic keyframe insertion in available F-Curves
     * @desc boolean, default False
     */
    public get use_keyframe_insert_available(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keyframe_insert_available`)
    }

    /**
     * Keyframe insertion only when keyframe needed
     * @desc boolean, default False
     */
    public get use_keyframe_insert_needed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_keyframe_insert_needed`)
    }

    /**
     * Use the surface depth for cursor placement
     * @desc boolean, default True
     */
    public get use_mouse_depth_cursor(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mouse_depth_cursor`)
    }

    /**
     * Current frame number can be manually set to a negative value
     * @desc boolean, default True
     */
    public get use_negative_frames(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_negative_frames`)
    }

    /**
     * Use Visual keying automatically for constrained objects
     * @desc boolean, default False
     */
    public get use_visual_keying(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_visual_keying`)
    }

    /**
     * Mode of automatic keyframe insertion for Objects and Bones (default setting used for new Scenes)
     * @desc enum in ['ADD_REPLACE_KEYS', 'REPLACE_KEYS'], default 'ADD_REPLACE_KEYS'
     */
    public set auto_keying_mode(value: 'ADD_REPLACE_KEYS' | 'REPLACE_KEYS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.auto_keying_mode`, value)
    }

    /**
     * Auto Handle Smoothing mode used for newly added F-Curves
     * @desc enum in ['NONE', 'CONT_ACCEL'], default 'CONT_ACCEL'
     */
    public set fcurve_new_auto_smoothing(value: 'NONE' | 'CONT_ACCEL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fcurve_new_auto_smoothing`, value)
    }

    /**
     * Amount that unselected F-Curves stand out from the background (Graph Editor)
     * @desc float in [0.001, 1], default 0.25
     */
    public set fcurve_unselected_alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fcurve_unselected_alpha`, value)
    }

    /**
     * Color of new annotation layers
     * @desc float array of 4 items in [0, inf], default (0.38, 0.61, 0.78, 0.9)
     */
    public set grease_pencil_default_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.grease_pencil_default_color`, value)
    }

    /**
     * Radius of eraser ‘brush’
     * @desc int in [1, 500], default 25
     */
    public set grease_pencil_eraser_radius(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grease_pencil_eraser_radius`, value)
    }

    /**
     * Distance moved by mouse when drawing stroke to include
     * @desc int in [0, 100], default 2
     */
    public set grease_pencil_euclidean_distance(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grease_pencil_euclidean_distance`, value)
    }

    /**
     * Pixels moved by mouse per axis when drawing stroke
     * @desc int in [0, 100], default 1
     */
    public set grease_pencil_manhattan_distance(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.grease_pencil_manhattan_distance`, value)
    }

    /**
     * Handle type for handles of new keyframes
     * @desc enum in ['FREE', 'ALIGNED', 'VECTOR', 'AUTO', 'AUTO_CLAMPED'], default 'AUTO_CLAMPED'
     */
    public set keyframe_new_handle_type(value: 'FREE' | 'ALIGNED' | 'VECTOR' | 'AUTO' | 'AUTO_CLAMPED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.keyframe_new_handle_type`, value)
    }

    /**
     * Interpolation mode used for first keyframe on newly added F-Curves (subsequent keyframes take interpolation from preceding keyframe)
     * @desc enum in ['CONSTANT', 'LINEAR', 'BEZIER', 'SINE', 'QUAD', 'CUBIC', 'QUART', 'QUINT', 'EXPO', 'CIRC', 'BACK', 'BOUNCE', 'ELASTIC'], default 'BEZIER'
     */
    public set keyframe_new_interpolation_type(value: 'CONSTANT' | 'LINEAR' | 'BEZIER' | 'SINE' | 'QUAD' | 'CUBIC' | 'QUART' | 'QUINT' | 'EXPO' | 'CIRC' | 'BACK' | 'BOUNCE' | 'ELASTIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.keyframe_new_interpolation_type`, value)
    }

    /**
     * Toggle whether the material is linked to object data or the object block
     * @desc enum in ['OBDATA', 'OBJECT'], default 'OBDATA'
     */
    public set material_link(value: 'OBDATA' | 'OBJECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.material_link`, value)
    }

    /**
     * Minimum distance between nodes for Auto-offsetting nodes
     * @desc int in [0, 255], default 80
     */
    public set node_margin(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.node_margin`, value)
    }

    /**
     * When adding objects from a 3D View menu, either align them with that view or with the world
     * @desc enum in ['WORLD', 'VIEW', 'CURSOR'], default 'WORLD'
     */
    public set object_align(value: 'WORLD' | 'VIEW' | 'CURSOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.object_align`, value)
    }

    /**
     * Color of texture overlay
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set sculpt_paint_overlay_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.sculpt_paint_overlay_color`, value)
    }

    /**
     * Maximum memory usage in megabytes (0 means unlimited)
     * @desc int in [0, inf], default 0
     */
    public set undo_memory_limit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.undo_memory_limit`, value)
    }

    /**
     * Number of undo steps available (smaller values conserve memory)
     * @desc int in [0, 256], default 32
     */
    public set undo_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.undo_steps`, value)
    }

    /**
     * Automatic keyframe insertion for Objects and Bones (default setting used for new Scenes)
     * @desc boolean, default False
     */
    public set use_auto_keying(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_keying`, value)
    }

    /**
     * Show warning indicators when transforming objects and bones if auto keying is enabled
     * @desc boolean, default False
     */
    public set use_auto_keying_warning(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_keying_warning`, value)
    }

    /**
     * Place the cursor without ‘jumping’ to the new location (when lock-to-cursor is used)
     * @desc boolean, default True
     */
    public set use_cursor_lock_adjust(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cursor_lock_adjust`, value)
    }

    /**
     * Causes actions to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_action(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_action`, value)
    }

    /**
     * Causes armature data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_armature(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_armature`, value)
    }

    /**
     * Causes curve data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_curve(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_curve`, value)
    }

    /**
     * Causes grease pencil data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_grease_pencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_grease_pencil`, value)
    }

    /**
     * Causes light data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_light(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_light`, value)
    }

    /**
     * Causes light probe data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_lightprobe(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_lightprobe`, value)
    }

    /**
     * Causes material data to be duplicated with the object
     * @desc boolean, default False
     */
    public set use_duplicate_material(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_material`, value)
    }

    /**
     * Causes mesh data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_mesh`, value)
    }

    /**
     * Causes metaball data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_metaball(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_metaball`, value)
    }

    /**
     * Causes particle systems to be duplicated with the object
     * @desc boolean, default False
     */
    public set use_duplicate_particle(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_particle`, value)
    }

    /**
     * Causes surface data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_surface(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_surface`, value)
    }

    /**
     * Causes text data to be duplicated with the object
     * @desc boolean, default True
     */
    public set use_duplicate_text(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_duplicate_text`, value)
    }

    /**
     * Enter Edit Mode automatically after adding a new object
     * @desc boolean, default False
     */
    public set use_enter_edit_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_enter_edit_mode`, value)
    }

    /**
     * Global undo works by keeping a full copy of the file itself in memory, so takes extra memory
     * @desc boolean, default True
     */
    public set use_global_undo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_global_undo`, value)
    }

    /**
     * Color for newly added transformation F-Curves (Location, Rotation, Scale) and also Color is based on the transform axis
     * @desc boolean, default True
     */
    public set use_insertkey_xyz_to_rgb(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_xyz_to_rgb`, value)
    }

    /**
     * Automatic keyframe insertion in available F-Curves
     * @desc boolean, default False
     */
    public set use_keyframe_insert_available(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keyframe_insert_available`, value)
    }

    /**
     * Keyframe insertion only when keyframe needed
     * @desc boolean, default False
     */
    public set use_keyframe_insert_needed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_keyframe_insert_needed`, value)
    }

    /**
     * Use the surface depth for cursor placement
     * @desc boolean, default True
     */
    public set use_mouse_depth_cursor(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mouse_depth_cursor`, value)
    }

    /**
     * Current frame number can be manually set to a negative value
     * @desc boolean, default True
     */
    public set use_negative_frames(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_negative_frames`, value)
    }

    /**
     * Use Visual keying automatically for constrained objects
     * @desc boolean, default False
     */
    public set use_visual_keying(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_visual_keying`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
