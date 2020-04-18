import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CURVE_OT_duplicate } from './CURVE_OT_duplicate'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'
import { CURVE_OT_extrude } from './CURVE_OT_extrude'

/**
 * CurveOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.curve.html
 */
export class CurveOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Make active spline closed/opened loop
     * @desc void
     */
    public cyclic_toggle(options: { direction?: 'CYCLIC_U' | 'CYCLIC_V' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cyclic_toggle`, options)
    }

    /**
     * (De)select first of visible part of each NURBS
     * @desc void
     */
    public de_select_first(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.de_select_first`, {})
    }

    /**
     * (De)select last of visible part of each NURBS
     * @desc void
     */
    public de_select_last(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.de_select_last`, {})
    }

    /**
     * Simplify selected curves
     * @desc void
     */
    public decimate(options: { ratio?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.decimate`, options)
    }

    /**
     * Delete selected control points or segments
     * @desc void
     */
    public delete(options: { type?: 'VERT' | 'SEGMENT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Delete selected control points, correcting surrounding handles
     * @desc void
     */
    public dissolve_verts(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve_verts`, {})
    }

    /**
     * Draw a freehand spline
     * @desc void
     */
    public draw(options: { error_threshold?: number, fit_method?: 'REFIT' | 'SPLIT', corner_angle?: number, use_cyclic?: boolean, stroke?: string, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, options)
    }

    /**
     * Duplicate selected control points
     * @desc void
     */
    public duplicate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, {})
    }

    /**
     * Duplicate curve and move
     * @desc void
     */
    public duplicate_move(options: { CURVE_OT_duplicate?: CURVE_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Extrude selected control point(s)
     * @desc void
     */
    public extrude(options: { mode?: 'INIT' | 'DUMMY' | 'TRANSLATION' | 'ROTATION' | 'RESIZE' | 'SKIN_RESIZE' | 'TOSPHERE' | 'SHEAR' | 'BEND' | 'SHRINKFATTEN' | 'TILT' | 'TRACKBALL' | 'PUSHPULL' | 'CREASE' | 'MIRROR' | 'BONE_SIZE' | 'BONE_ENVELOPE' | 'BONE_ENVELOPE_DIST' | 'CURVE_SHRINKFATTEN' | 'MASK_SHRINKFATTEN' | 'GPENCIL_SHRINKFATTEN' | 'BONE_ROLL' | 'TIME_TRANSLATE' | 'TIME_SLIDE' | 'TIME_SCALE' | 'TIME_EXTEND' | 'BAKE_TIME' | 'BWEIGHT' | 'ALIGN' | 'EDGESLIDE' | 'SEQSLIDE' | 'GPENCIL_OPACITY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude`, options)
    }

    /**
     * Extrude curve and move result
     * @desc void
     */
    public extrude_move(options: { CURVE_OT_extrude?: CURVE_OT_extrude, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_move`, options)
    }

    /**
     * Set type of handles for selected control points
     * @desc void
     */
    public handle_type_set(options: { type?: 'AUTOMATIC' | 'VECTOR' | 'ALIGNED' | 'FREE_ALIGN' | 'TOGGLE_FREE_ALIGN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.handle_type_set`, options)
    }

    /**
     * Hide (un)selected control points
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Join two curves by their selected ends
     * @desc void
     */
    public make_segment(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_segment`, {})
    }

    /**
     * Match texture space to object’s bounding box
     * @desc void
     */
    public match_texture_space(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.match_texture_space`, {})
    }

    /**
     * Recalculate the direction of selected handles
     * @desc void
     */
    public normals_make_consistent(options: { calc_length?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.normals_make_consistent`, options)
    }

    /**
     * Construct a Bezier Circle
     * @desc void
     */
    public primitive_bezier_circle_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_bezier_circle_add`, options)
    }

    /**
     * Construct a Bezier Curve
     * @desc void
     */
    public primitive_bezier_curve_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_bezier_curve_add`, options)
    }

    /**
     * Construct a Nurbs Circle
     * @desc void
     */
    public primitive_nurbs_circle_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_circle_add`, options)
    }

    /**
     * Construct a Nurbs Curve
     * @desc void
     */
    public primitive_nurbs_curve_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_curve_add`, options)
    }

    /**
     * Construct a Path
     * @desc void
     */
    public primitive_nurbs_path_add(options: { radius?: number, enter_editmode?: boolean, align?: 'WORLD' | 'VIEW' | 'CURSOR', location?: [number, number, number], rotation?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.primitive_nurbs_path_add`, options)
    }

    /**
     * Set per-point radius which is used for bevel tapering
     * @desc void
     */
    public radius_set(options: { radius?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.radius_set`, options)
    }

    /**
     * Reveal hidden control points
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * (De)select all control points
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Reduce current selection by deselecting boundary elements
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select all control points linked to the current selection
     * @desc void
     */
    public select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, {})
    }

    /**
     * Select all control points linked to already selected ones
     * @desc void
     */
    public select_linked_pick(options: { deselect?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_pick`, options)
    }

    /**
     * Select control points directly linked to already selected ones
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Select control points following already selected ones along the curves
     * @desc void
     */
    public select_next(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_next`, {})
    }

    /**
     * Deselect every Nth point starting from the active one
     * @desc void
     */
    public select_nth(options: { skip?: number, nth?: number, offset?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_nth`, options)
    }

    /**
     * Select control points preceding already selected ones along the curves
     * @desc void
     */
    public select_previous(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_previous`, {})
    }

    /**
     * Randomly select some control points
     * @desc void
     */
    public select_random(options: { percent?: number, seed?: number, action?: 'SELECT' | 'DESELECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_random`, options)
    }

    /**
     * Select a row of control points including active one
     * @desc void
     */
    public select_row(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_row`, {})
    }

    /**
     * Select similar curve points by property type
     * @desc void
     */
    public select_similar(options: { type?: 'TYPE' | 'RADIUS' | 'WEIGHT' | 'DIRECTION', compare?: 'EQUAL' | 'GREATER' | 'LESS', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_similar`, options)
    }

    /**
     * Separate selected points from connected unselected points into a new object
     * @desc void
     */
    public separate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.separate`, {})
    }

    /**
     * Set shading to flat
     * @desc void
     */
    public shade_flat(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shade_flat`, {})
    }

    /**
     * Set shading to smooth
     * @desc void
     */
    public shade_smooth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shade_smooth`, {})
    }

    /**
     * Select shortest path between two selections
     * @desc void
     */
    public shortest_path_pick(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shortest_path_pick`, {})
    }

    /**
     * Flatten angles of selected points
     * @desc void
     */
    public smooth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smooth`, {})
    }

    /**
     * Interpolate radii of selected points
     * @desc void
     */
    public smooth_radius(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smooth_radius`, {})
    }

    /**
     * Interpolate tilt of selected points
     * @desc void
     */
    public smooth_tilt(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smooth_tilt`, {})
    }

    /**
     * Interpolate weight of selected points
     * @desc void
     */
    public smooth_weight(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smooth_weight`, {})
    }

    /**
     * Extrude selected boundary row around pivot point and current view axis
     * @desc void
     */
    public spin(options: { center?: [number, number, number], axis?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.spin`, options)
    }

    /**
     * Set type of active spline
     * @desc void
     */
    public spline_type_set(options: { type?: 'POLY' | 'BEZIER' | 'NURBS', use_handles?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.spline_type_set`, options)
    }

    /**
     * Set softbody goal weight for selected points
     * @desc void
     */
    public spline_weight_set(options: { weight?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.spline_weight_set`, options)
    }

    /**
     * Split off selected points from connected unselected points
     * @desc void
     */
    public split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.split`, {})
    }

    /**
     * Subdivide selected segments
     * @desc void
     */
    public subdivide(options: { number_cuts?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.subdivide`, options)
    }

    /**
     * Switch direction of selected splines
     * @desc void
     */
    public switch_direction(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.switch_direction`, {})
    }

    /**
     * Clear the tilt of selected control points
     * @desc void
     */
    public tilt_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tilt_clear`, {})
    }

    /**
     * Add a new control point (linked to only selected end-curve one, if any)
     * @desc void
     */
    public vertex_add(options: { location?: [number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
