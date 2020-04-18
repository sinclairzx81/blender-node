import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GPENCIL_OT_duplicate } from './GPENCIL_OT_duplicate'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'
import { GPENCIL_OT_extrude } from './GPENCIL_OT_extrude'

/**
 * GpencilOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.gpencil.html
 */
export class GpencilOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Delete the active frame for the active Grease Pencil Layer
     * @desc void
     */
    public active_frame_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.active_frame_delete`, {})
    }

    /**
     * Delete the active frame(s) of all editable Grease Pencil layers
     * @desc void
     */
    public active_frames_delete_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.active_frames_delete_all`, {})
    }

    /**
     * Make annotations on the active data
     * @desc void
     */
    public annotate(options: { mode?: 'DRAW' | 'DRAW_STRAIGHT' | 'DRAW_POLY' | 'ERASER', stroke?: string, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.annotate`, options)
    }

    /**
     * Delete the active frame for the active Annotation Layer
     * @desc void
     */
    public annotation_active_frame_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.annotation_active_frame_delete`, {})
    }

    /**
     * Add new Annotation data-block
     * @desc void
     */
    public annotation_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.annotation_add`, {})
    }

    /**
     * Insert a blank frame on the current frame (all subsequently existing frames, if any, are shifted right by one frame)
     * @desc void
     */
    public blank_frame_add(options: { all_layers?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.blank_frame_add`, options)
    }

    /**
     * Create a set of predefined Grease Pencil drawing brushes
     * @desc void
     */
    public brush_presets_create(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.brush_presets_create`, {})
    }

    /**
     * Hide selected/unselected Grease Pencil colors
     * @desc void
     */
    public color_hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_hide`, options)
    }

    /**
     * Toggle whether the active color is the only one that is editable and/or visible
     * @desc void
     */
    public color_isolate(options: { affect_visibility?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_isolate`, options)
    }

    /**
     * Lock all Grease Pencil colors to prevent them from being accidentally modified
     * @desc void
     */
    public color_lock_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_lock_all`, {})
    }

    /**
     * Unhide all hidden Grease Pencil colors
     * @desc void
     */
    public color_reveal(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_reveal`, {})
    }

    /**
     * Select all Grease Pencil strokes using current color
     * @desc void
     */
    public color_select(options: { deselect?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_select`, options)
    }

    /**
     * Unlock all Grease Pencil colors so that they can be edited
     * @desc void
     */
    public color_unlock_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.color_unlock_all`, {})
    }

    /**
     * Convert the active Grease Pencil layer to a new Curve Object
     * @desc void
     */
    public convert(options: { type?: 'PATH' | 'CURVE' | 'POLY', use_normalize_weights?: boolean, radius_multiplier?: number, use_link_strokes?: boolean, timing_mode?: 'NONE' | 'LINEAR' | 'FULL' | 'CUSTOMGAP', frame_range?: number, start_frame?: number, use_realtime?: boolean, end_frame?: number, gap_duration?: number, gap_randomness?: number, seed?: number, use_timing_data?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convert`, options)
    }

    /**
     * Convert 2.7x grease pencil files to 2.80
     * @desc void
     */
    public convert_old_files(options: { annotation?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convert_old_files`, options)
    }

    /**
     * Copy selected Grease Pencil points and strokes
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Unlink active Annotation data-block
     * @desc void
     */
    public data_unlink(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.data_unlink`, {})
    }

    /**
     * Delete selected Grease Pencil strokes, vertices, or frames
     * @desc void
     */
    public delete(options: { type?: 'POINTS' | 'STROKES' | 'FRAME' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Delete selected points without splitting strokes
     * @desc void
     */
    public dissolve(options: { type?: 'POINTS' | 'BETWEEN' | 'UNSELECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve`, options)
    }

    /**
     * Draw a new stroke in the active Grease Pencil Object
     * @desc void
     */
    public draw(options: { mode?: 'DRAW' | 'DRAW_STRAIGHT' | 'DRAW_POLY' | 'ERASER', stroke?: string, wait_for_input?: boolean, disable_straight?: boolean, disable_fill?: boolean, guide_last_angle?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, options)
    }

    /**
     * Duplicate the selected Grease Pencil strokes
     * @desc void
     */
    public duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, {})
    }

    /**
     * Make copies of the selected Grease Pencil strokes and move them
     * @desc void
     */
    public duplicate_move(options: { GPENCIL_OT_duplicate?: GPENCIL_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Enter/Exit edit mode for Grease Pencil strokes
     * @desc void
     */
    public editmode_toggle(options: { back?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.editmode_toggle`, options)
    }

    /**
     * Extrude the selected Grease Pencil points
     * @desc void
     */
    public extrude(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude`, {})
    }

    /**
     * Extrude selected points and move them
     * @desc void
     */
    public extrude_move(options: { GPENCIL_OT_extrude?: GPENCIL_OT_extrude, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_move`, options)
    }

    /**
     * Fill with color the shape formed by strokes
     * @desc void
     */
    public fill(options: { on_back?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fill`, options)
    }

    /**
     * Remove ‘no fill’ boundary strokes
     * @desc void
     */
    public frame_clean_fill(options: { mode?: 'ACTIVE' | 'ALL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_clean_fill`, options)
    }

    /**
     * Remove loose points
     * @desc void
     */
    public frame_clean_loose(options: { limit?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_clean_loose`, options)
    }

    /**
     * Make a copy of the active Grease Pencil Frame
     * @desc void
     */
    public frame_duplicate(options: { mode?: 'ACTIVE' | 'ALL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_duplicate`, options)
    }

    /**
     * Generate automatic weights for armatures (requires armature modifier)
     * @desc void
     */
    public generate_weights(options: { mode?: 'NAME' | 'AUTO', armature?: 'DEFAULT', ratio?: number, decay?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.generate_weights`, options)
    }

    /**
     * Rotate guide angle
     * @desc void
     */
    public guide_rotate(options: { increment?: boolean, angle?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.guide_rotate`, options)
    }

    /**
     * Hide selected/unselected Grease Pencil layers
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Interpolate grease pencil strokes between frames
     * @desc void
     */
    public interpolate(options: { shift?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.interpolate`, options)
    }

    /**
     * Remove breakdown frames generated by interpolating between two Grease Pencil frames
     * @desc void
     */
    public interpolate_reverse(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.interpolate_reverse`, {})
    }

    /**
     * Generate ‘in-betweens’ to smoothly interpolate between Grease Pencil frames
     * @desc void
     */
    public interpolate_sequence(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.interpolate_sequence`, {})
    }

    /**
     * Add new layer or note for the active data-block
     * @desc void
     */
    public layer_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_add`, {})
    }

    /**
     * Add new Annotation layer or note for the active data-block
     * @desc void
     */
    public layer_annotation_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_annotation_add`, {})
    }

    /**
     * Move the active Annotation layer up/down in the list
     * @desc void
     */
    public layer_annotation_move(options: { type?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_annotation_move`, options)
    }

    /**
     * Remove active Annotation layer
     * @desc void
     */
    public layer_annotation_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_annotation_remove`, {})
    }

    /**
     * Change active Grease Pencil layer
     * @desc void
     */
    public layer_change(options: { layer?: 'DEFAULT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_change`, options)
    }

    /**
     * Make a copy of the active Grease Pencil layer
     * @desc void
     */
    public layer_duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_duplicate`, {})
    }

    /**
     * Make a copy of the active Grease Pencil layer to new object
     * @desc void
     */
    public layer_duplicate_object(options: { object?: string, mode?: 'ALL' | 'ACTIVE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_duplicate_object`, options)
    }

    /**
     * Toggle whether the active layer is the only one that can be edited and/or visible
     * @desc void
     */
    public layer_isolate(options: { affect_visibility?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_isolate`, options)
    }

    /**
     * Merge the current layer with the layer below
     * @desc void
     */
    public layer_merge(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_merge`, {})
    }

    /**
     * Move the active Grease Pencil layer up/down in the list
     * @desc void
     */
    public layer_move(options: { type?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_move`, options)
    }

    /**
     * Remove active Grease Pencil layer
     * @desc void
     */
    public layer_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layer_remove`, {})
    }

    /**
     * Lock all Grease Pencil layers to prevent them from being accidentally modified
     * @desc void
     */
    public lock_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lock_all`, {})
    }

    /**
     * Lock and hide any color not used in any layer
     * @desc void
     */
    public lock_layer(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lock_layer`, {})
    }

    /**
     * Move selected strokes to another layer
     * @desc void
     */
    public move_to_layer(options: { layer?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_to_layer`, options)
    }

    /**
     * Enter/Exit paint mode for Grease Pencil strokes
     * @desc void
     */
    public paintmode_toggle(options: { back?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paintmode_toggle`, options)
    }

    /**
     * Paste previously copied strokes to active layer or to original layer
     * @desc void
     */
    public paste(options: { type?: 'ACTIVE' | 'LAYER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, options)
    }

    /**
     * Create predefined grease pencil stroke shapes
     * @desc void
     */
    public primitive(options: { edges?: number, type?: 'BOX' | 'LINE' | 'POLYLINE' | 'CIRCLE' | 'ARC' | 'CURVE', wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive`, options)
    }

    /**
     * Reproject the selected strokes from the current viewpoint as if they had been newly drawn (e.g. to fix problems from accidental 3D cursor movement or accidental viewport changes, or for matching deforming geometry)
     * @desc void
     */
    public reproject(options: { type?: 'FRONT' | 'SIDE' | 'TOP' | 'VIEW' | 'SURFACE' | 'CURSOR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reproject`, options)
    }

    /**
     * Show all Grease Pencil layers
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * Apply tweaks to strokes by painting over the strokes
     * @desc void
     */
    public sculpt_paint(options: { stroke?: string, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sculpt_paint`, options)
    }

    /**
     * Enter/Exit sculpt mode for Grease Pencil strokes
     * @desc void
     */
    public sculptmode_toggle(options: { back?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sculptmode_toggle`, options)
    }

    /**
     * Select Grease Pencil strokes and/or stroke points
     * @desc void
     */
    public select(options: { extend?: boolean, deselect?: boolean, toggle?: boolean, deselect_all?: boolean, entire_strokes?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Change selection of all Grease Pencil strokes currently visible
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select alternative points in same strokes as already selected points
     * @desc void
     */
    public select_alternate(options: { unselect_ends?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_alternate`, options)
    }

    /**
     * Select Grease Pencil strokes within a rectangular region
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' | 'XOR' | 'AND' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select Grease Pencil strokes using brush selection
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select first point in Grease Pencil strokes
     * @desc void
     */
    public select_first(options: { only_selected_strokes?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_first`, options)
    }

    /**
     * Select all strokes with similar characteristics
     * @desc void
     */
    public select_grouped(options: { type?: 'LAYER' | 'MATERIAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_grouped`, options)
    }

    /**
     * Select Grease Pencil strokes using lasso selection
     * @desc void
     */
    public select_lasso(options: { mode?: 'SET' | 'ADD' | 'SUB' | 'XOR' | 'AND', path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Select last point in Grease Pencil strokes
     * @desc void
     */
    public select_last(options: { only_selected_strokes?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_last`, options)
    }

    /**
     * Shrink sets of selected Grease Pencil points
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select all points in same strokes as already selected points
     * @desc void
     */
    public select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, {})
    }

    /**
     * Grow sets of selected Grease Pencil points
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Hide/Unhide selected points for Grease Pencil strokes setting alpha factor
     * @desc void
     */
    public selection_opacity_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.selection_opacity_toggle`, {})
    }

    /**
     * Set selection mode for Grease Pencil strokes
     * @desc void
     */
    public selectmode_toggle(options: { mode?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.selectmode_toggle`, options)
    }

    /**
     * Set the selected stroke material as the active material
     * @desc void
     */
    public set_active_material(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.set_active_material`, {})
    }

    /**
     * Snap cursor to center of selected points
     * @desc void
     */
    public snap_cursor_to_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_cursor_to_selected`, {})
    }

    /**
     * Snap selected points/strokes to the cursor
     * @desc void
     */
    public snap_to_cursor(options: { use_offset?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_to_cursor`, options)
    }

    /**
     * Snap selected points to the nearest grid points
     * @desc void
     */
    public snap_to_grid(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_to_grid`, {})
    }

    /**
     * Apply the thickness change of the layer to its strokes
     * @desc void
     */
    public stroke_apply_thickness(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_apply_thickness`, {})
    }

    /**
     * Arrange selected strokes up/down in the drawing order of the active layer
     * @desc void
     */
    public stroke_arrange(options: { direction?: 'TOP' | 'UP' | 'DOWN' | 'BOTTOM' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_arrange`, options)
    }

    /**
     * Change Stroke caps mode (rounded or flat)
     * @desc void
     */
    public stroke_caps_set(options: { type?: 'TOGGLE' | 'START' | 'END' | 'TOGGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_caps_set`, options)
    }

    /**
     * Move selected strokes to active material
     * @desc void
     */
    public stroke_change_color(options: { material?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_change_color`, options)
    }

    /**
     * Select section and cut
     * @desc void
     */
    public stroke_cutter(options: { path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_cutter`, options)
    }

    /**
     * Close or open the selected stroke adding an edge from last to first point
     * @desc void
     */
    public stroke_cyclical_set(options: { type?: 'CLOSE' | 'OPEN' | 'TOGGLE', geometry?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_cyclical_set`, options)
    }

    /**
     * Change direction of the points of the selected strokes
     * @desc void
     */
    public stroke_flip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_flip`, {})
    }

    /**
     * Join selected strokes (optionally as new stroke)
     * @desc void
     */
    public stroke_join(options: { type?: 'JOIN' | 'JOINCOPY', leave_gaps?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_join`, options)
    }

    /**
     * Lock any color not used in any selected stroke
     * @desc void
     */
    public stroke_lock_color(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_lock_color`, {})
    }

    /**
     * Create a new stroke with the selected stroke points
     * @desc void
     */
    public stroke_merge(options: { mode?: 'STROKE' | 'POINT', back?: boolean, additive?: boolean, cyclic?: boolean, clear_point?: boolean, clear_stroke?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_merge`, options)
    }

    /**
     * Merge points by distance
     * @desc void
     */
    public stroke_merge_by_distance(options: { threshold?: number, use_unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_merge_by_distance`, options)
    }

    /**
     * Sample stroke points to predefined segment length
     * @desc void
     */
    public stroke_sample(options: { length?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_sample`, options)
    }

    /**
     * Separate the selected strokes or layer in a new grease pencil object
     * @desc void
     */
    public stroke_separate(options: { mode?: 'POINT' | 'STROKE' | 'LAYER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_separate`, options)
    }

    /**
     * Simplify selected stroked reducing number of points
     * @desc void
     */
    public stroke_simplify(options: { factor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_simplify`, options)
    }

    /**
     * Simplify selected stroked reducing number of points using fixed algorithm
     * @desc void
     */
    public stroke_simplify_fixed(options: { step?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_simplify_fixed`, options)
    }

    /**
     * Smooth selected strokes
     * @desc void
     */
    public stroke_smooth(options: { repeat?: number, factor?: number, only_selected?: boolean, smooth_position?: boolean, smooth_thickness?: boolean, smooth_strength?: boolean, smooth_uv?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_smooth`, options)
    }

    /**
     * Split selected points as new stroke on same frame
     * @desc void
     */
    public stroke_split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_split`, {})
    }

    /**
     * Subdivide between continuous selected points of the stroke adding a point half way between them
     * @desc void
     */
    public stroke_subdivide(options: { number_cuts?: number, factor?: number, repeat?: number, only_selected?: boolean, smooth_position?: boolean, smooth_thickness?: boolean, smooth_strength?: boolean, smooth_uv?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_subdivide`, options)
    }

    /**
     * Trim selected stroke to first loop or intersection
     * @desc void
     */
    public stroke_trim(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stroke_trim`, {})
    }

    /**
     * Unlock all Grease Pencil layers so that they can be edited
     * @desc void
     */
    public unlock_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlock_all`, {})
    }

    /**
     * Assign the selected vertices to the active vertex group
     * @desc void
     */
    public vertex_group_assign(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_assign`, {})
    }

    /**
     * Deselect all selected vertices assigned to the active vertex group
     * @desc void
     */
    public vertex_group_deselect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_deselect`, {})
    }

    /**
     * Invert weights to the active vertex group
     * @desc void
     */
    public vertex_group_invert(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_invert`, {})
    }

    /**
     * Normalize weights to the active vertex group
     * @desc void
     */
    public vertex_group_normalize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_normalize`, {})
    }

    /**
     * Normalize all weights of all vertex groups, so that for each vertex, the sum of all weights is 1.0
     * @desc void
     */
    public vertex_group_normalize_all(options: { lock_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_normalize_all`, options)
    }

    /**
     * Remove the selected vertices from active or all vertex group(s)
     * @desc void
     */
    public vertex_group_remove_from(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_remove_from`, {})
    }

    /**
     * Select all the vertices assigned to the active vertex group
     * @desc void
     */
    public vertex_group_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_select`, {})
    }

    /**
     * Smooth weights to the active vertex group
     * @desc void
     */
    public vertex_group_smooth(options: { factor?: number, repeat?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_group_smooth`, options)
    }

    /**
     * Enter/Exit weight paint mode for Grease Pencil strokes
     * @desc void
     */
    public weightmode_toggle(options: { back?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weightmode_toggle`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
