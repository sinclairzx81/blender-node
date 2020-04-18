import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TransformOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.transform.html
 */
export class TransformOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bend selected items between the 3D cursor and the mouse
     * @desc void
     */
    public bend(options: { value?: [number], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bend`, options)
    }

    /**
     * Create transformation orientation from selection
     * @desc void
     */
    public create_orientation(options: { name?: string, use_view?: boolean, use?: boolean, overwrite?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.create_orientation`, options)
    }

    /**
     * Delete transformation orientation
     * @desc void
     */
    public delete_orientation(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_orientation`, {})
    }

    /**
     * Change the bevel weight of edges
     * @desc void
     */
    public edge_bevelweight(options: { value?: number, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_bevelweight`, options)
    }

    /**
     * Change the crease of edges
     * @desc void
     */
    public edge_crease(options: { value?: number, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_crease`, options)
    }

    /**
     * Slide an edge loop along a mesh
     * @desc void
     */
    public edge_slide(options: { value?: number, single_side?: boolean, use_even?: boolean, flipped?: boolean, use_clamp?: boolean, mirror?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], correct_uv?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edge_slide`, options)
    }

    /**
     * Transform selected items by mode type
     * @desc void
     */
    public from_gizmo(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.from_gizmo`, {})
    }

    /**
     * Mirror selected items around one or more axes
     * @desc void
     */
    public mirror(options: { orient_type?: string, orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: string, constraint_axis?: [boolean, boolean, boolean], use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, gpencil_strokes?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mirror`, options)
    }

    /**
     * Push/Pull selected items
     * @desc void
     */
    public push_pull(options: { value?: number, mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.push_pull`, options)
    }

    /**
     * Scale (resize) selected items
     * @desc void
     */
    public resize(options: { value?: [number, number, number], orient_type?: string, orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: string, constraint_axis?: [boolean, boolean, boolean], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, texture_space?: boolean, remove_on_cancel?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.resize`, options)
    }

    /**
     * Rotate selected items
     * @desc void
     */
    public rotate(options: { value?: number, orient_axis?: 'X' | 'Y' | 'Z', orient_type?: string, orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: string, constraint_axis?: [boolean, boolean, boolean], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rotate`, options)
    }

    /**
     * Rotate split normal of selected items
     * @desc void
     */
    public rotate_normal(options: { value?: number, orient_axis?: 'X' | 'Y' | 'Z', orient_type?: string, orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: string, constraint_axis?: [boolean, boolean, boolean], mirror?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rotate_normal`, options)
    }

    /**
     * Select transformation orientation
     * @desc void
     */
    public select_orientation(options: { orientation?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_orientation`, options)
    }

    /**
     * Slide a sequence strip in time
     * @desc void
     */
    public seq_slide(options: { value?: [number, number], snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.seq_slide`, options)
    }

    /**
     * Shear selected items along the horizontal screen axis
     * @desc void
     */
    public shear(options: { value?: number, orient_axis?: 'X' | 'Y' | 'Z', orient_axis_ortho?: 'X' | 'Y' | 'Z', orient_type?: string, orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: string, mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shear`, options)
    }

    /**
     * Shrink/fatten selected vertices along normals
     * @desc void
     */
    public shrink_fatten(options: { value?: number, use_even_offset?: boolean, mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shrink_fatten`, options)
    }

    /**
     * Scale selected vertices’ skin radii
     * @desc void
     */
    public skin_resize(options: { value?: [number, number, number], orient_type?: string, orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: string, constraint_axis?: [boolean, boolean, boolean], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.skin_resize`, options)
    }

    /**
     * Tilt selected control vertices of 3D curve
     * @desc void
     */
    public tilt(options: { value?: number, mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tilt`, options)
    }

    /**
     * Move selected vertices outward in a spherical shape around mesh center
     * @desc void
     */
    public tosphere(options: { value?: number, mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tosphere`, options)
    }

    /**
     * Trackball style rotation of selected items
     * @desc void
     */
    public trackball(options: { value?: [number, number], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.trackball`, options)
    }

    /**
     * Transform selected items by mode type
     * @desc void
     */
    public transform(options: { mode?: 'INIT' | 'DUMMY' | 'TRANSLATION' | 'ROTATION' | 'RESIZE' | 'SKIN_RESIZE' | 'TOSPHERE' | 'SHEAR' | 'BEND' | 'SHRINKFATTEN' | 'TILT' | 'TRACKBALL' | 'PUSHPULL' | 'CREASE' | 'MIRROR' | 'BONE_SIZE' | 'BONE_ENVELOPE' | 'BONE_ENVELOPE_DIST' | 'CURVE_SHRINKFATTEN' | 'MASK_SHRINKFATTEN' | 'GPENCIL_SHRINKFATTEN' | 'BONE_ROLL' | 'TIME_TRANSLATE' | 'TIME_SLIDE' | 'TIME_SCALE' | 'TIME_EXTEND' | 'BAKE_TIME' | 'BWEIGHT' | 'ALIGN' | 'EDGESLIDE' | 'SEQSLIDE' | 'GPENCIL_OPACITY', value?: [number, number, number, number], orient_axis?: 'X' | 'Y' | 'Z', orient_type?: 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR', orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR', constraint_axis?: [boolean, boolean, boolean], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, center_override?: [number, number, number], release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
    }

    /**
     * Move selected items
     * @desc void
     */
    public translate(options: { value?: [number, number, number], orient_type?: 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR', orient_matrix?: [[number, number, number], [number, number, number], [number, number, number]], orient_matrix_type?: 'GLOBAL' | 'LOCAL' | 'NORMAL' | 'GIMBAL' | 'VIEW' | 'CURSOR', constraint_axis?: [boolean, boolean, boolean], mirror?: boolean, use_proportional_edit?: boolean, proportional_edit_falloff?: 'SMOOTH' | 'SPHERE' | 'ROOT' | 'INVERSE_SQUARE' | 'SHARP' | 'LINEAR' | 'CONSTANT' | 'RANDOM', proportional_size?: number, use_proportional_connected?: boolean, use_proportional_projected?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], gpencil_strokes?: boolean, cursor_transform?: boolean, texture_space?: boolean, remove_on_cancel?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.translate`, options)
    }

    /**
     * Slide a vertex along a mesh
     * @desc void
     */
    public vert_slide(options: { value?: number, use_even?: boolean, flipped?: boolean, use_clamp?: boolean, mirror?: boolean, snap?: boolean, snap_target?: 'CLOSEST' | 'CENTER' | 'MEDIAN' | 'ACTIVE', snap_point?: [number, number, number], snap_align?: boolean, snap_normal?: [number, number, number], correct_uv?: boolean, release_confirm?: boolean, use_accurate?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_slide`, options)
    }

    /**
     * Randomize vertices
     * @desc void
     */
    public vertex_random(options: { offset?: number, uniform?: number, normal?: number, seed?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_random`, options)
    }

    /**
     * Warp vertices around the cursor
     * @desc void
     */
    public vertex_warp(options: { warp_angle?: number, offset_angle?: number, min?: number, max?: number, viewmat?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], center?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_warp`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
