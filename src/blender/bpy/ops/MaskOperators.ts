import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MASK_OT_add_feather_vertex } from './MASK_OT_add_feather_vertex'
import { MASK_OT_slide_point } from './MASK_OT_slide_point'
import { MASK_OT_add_vertex } from './MASK_OT_add_vertex'
import { MASK_OT_duplicate } from './MASK_OT_duplicate'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'

/**
 * MaskOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.mask.html
 */
export class MaskOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add vertex to feather
     * @desc void
     */
    public add_feather_vertex(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_feather_vertex`, options)
    }

    /**
     * Add new vertex to feather and slide it
     * @desc void
     */
    public add_feather_vertex_slide(options: { MASK_OT_add_feather_vertex?: MASK_OT_add_feather_vertex, MASK_OT_slide_point?: MASK_OT_slide_point }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_feather_vertex_slide`, options)
    }

    /**
     * Add vertex to active spline
     * @desc void
     */
    public add_vertex(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_vertex`, options)
    }

    /**
     * Add new vertex and slide it
     * @desc void
     */
    public add_vertex_slide(options: { MASK_OT_add_vertex?: MASK_OT_add_vertex, MASK_OT_slide_point?: MASK_OT_slide_point }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_vertex_slide`, options)
    }

    /**
     * Copy selected splines to clipboard
     * @desc void
     */
    public copy_splines(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_splines`, {})
    }

    /**
     * Toggle cyclic for selected splines
     * @desc void
     */
    public cyclic_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cyclic_toggle`, {})
    }

    /**
     * Delete selected control points or splines
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Duplicate selected control points and segments between them
     * @desc void
     */
    public duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, {})
    }

    /**
     * Duplicate mask and move
     * @desc void
     */
    public duplicate_move(options: { MASK_OT_duplicate?: MASK_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Reset the feather weight to zero
     * @desc void
     */
    public feather_weight_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.feather_weight_clear`, {})
    }

    /**
     * Set type of handles for selected control points
     * @desc void
     */
    public handle_type_set(options: { type?: 'AUTO' | 'VECTOR' | 'ALIGNED' | 'ALIGNED_DOUBLESIDE' | 'FREE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.handle_type_set`, options)
    }

    /**
     * Reveal the layer by setting the hide flag
     * @desc void
     */
    public hide_view_clear(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_view_clear`, options)
    }

    /**
     * Hide the layer by setting the hide flag
     * @desc void
     */
    public hide_view_set(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_view_set`, options)
    }

    /**
     * Move the active layer up/down in the list
     * @desc void
     */
    public layer_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_move`, options)
    }

    /**
     * Add new mask layer for masking
     * @desc void
     */
    public layer_new(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_new`, options)
    }

    /**
     * Remove mask layer
     * @desc void
     */
    public layer_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_remove`, {})
    }

    /**
     * Create new mask
     * @desc void
     */
    public new(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, options)
    }

    /**
     * Re-calculate the direction of selected handles
     * @desc void
     */
    public normals_make_consistent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normals_make_consistent`, {})
    }

    /**
     * Clear the mask’s parenting
     * @desc void
     */
    public parent_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_clear`, {})
    }

    /**
     * Set the mask’s parenting
     * @desc void
     */
    public parent_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_set`, {})
    }

    /**
     * Paste splines from clipboard
     * @desc void
     */
    public paste_splines(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste_splines`, {})
    }

    /**
     * Add new circle-shaped spline
     * @desc void
     */
    public primitive_circle_add(options: { size?: number, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_circle_add`, options)
    }

    /**
     * Add new square-shaped spline
     * @desc void
     */
    public primitive_square_add(options: { size?: number, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_square_add`, options)
    }

    /**
     * Select spline points
     * @desc void
     */
    public select(options: { extend?: boolean, deselect?: boolean, toggle?: boolean, deselect_all?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Change selection of all curve points
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select curve points using box selection
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select curve points using circle selection
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select curve points using lasso selection
     * @desc void
     */
    public select_lasso(options: { path?: string, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Deselect spline points at the boundary of each selection region
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select all curve points linked to already selected ones
     * @desc void
     */
    public select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, {})
    }

    /**
     * (De)select all points linked to the curve under the mouse cursor
     * @desc void
     */
    public select_linked_pick(options: { deselect?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_pick`, options)
    }

    /**
     * Select more spline points connected to initial selection
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Remove mask shape keyframe for active mask layer at the current frame
     * @desc void
     */
    public shape_key_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_clear`, {})
    }

    /**
     * Reset feather weights on all selected points animation values
     * @desc void
     */
    public shape_key_feather_reset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_feather_reset`, {})
    }

    /**
     * Insert mask shape keyframe for active mask layer at the current frame
     * @desc void
     */
    public shape_key_insert(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_insert`, {})
    }

    /**
     * Recalculate animation data on selected points for frames selected in the dopesheet
     * @desc void
     */
    public shape_key_rekey(options: { location?: boolean, feather?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_rekey`, options)
    }

    /**
     * Slide control points
     * @desc void
     */
    public slide_point(options: { slide_feather?: boolean, is_new_point?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slide_point`, options)
    }

    /**
     * Slide a point on the spline to define it’s curvature
     * @desc void
     */
    public slide_spline_curvature(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slide_spline_curvature`, {})
    }

    /**
     * Switch direction of selected splines
     * @desc void
     */
    public switch_direction(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.switch_direction`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
