import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UvOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.uv.html
 */
export class UvOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Align selected UV vertices to an axis
     * @desc void
     */
    public align(options: { axis?: 'ALIGN_S' | 'ALIGN_T' | 'ALIGN_U' | 'ALIGN_AUTO' | 'ALIGN_X' | 'ALIGN_Y' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.align`, options)
    }

    /**
     * Average the size of separate UV islands, based on their area in 3D space
     * @desc void
     */
    public average_islands_scale(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.average_islands_scale`, {})
    }

    /**
     * Project the UV vertices of the mesh over the six faces of a cube
     * @desc void
     */
    public cube_project(options: { cube_size?: number, correct_aspect?: boolean, clip_to_bounds?: boolean, scale_to_bounds?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cube_project`, options)
    }

    /**
     * Set 2D cursor location
     * @desc void
     */
    public cursor_set(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_set`, options)
    }

    /**
     * Project the UV vertices of the mesh over the curved wall of a cylinder
     * @desc void
     */
    public cylinder_project(options: { direction?: 'VIEW_ON_EQUATOR' | 'VIEW_ON_POLES' | 'ALIGN_TO_OBJECT', align?: 'POLAR_ZX' | 'POLAR_ZY', radius?: number, correct_aspect?: boolean, clip_to_bounds?: boolean, scale_to_bounds?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cylinder_project`, options)
    }

    /**
     * Export UV layout to file
     * @desc void
     */
    public export_layout(options: { filepath?: string, export_all?: boolean, modified?: boolean, mode?: 'SVG' | 'EPS' | 'PNG', size?: [number, number], opacity?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.export_layout`, options)
    }

    /**
     * Follow UVs from active quads along continuous face loops
     * @desc void
     */
    public follow_active_quads(options: { mode?: 'EVEN' | 'LENGTH' | 'LENGTH_AVERAGE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.follow_active_quads`, options)
    }

    /**
     * Hide (un)selected UV vertices
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Pack each faces UV’s into the UV bounds
     * @desc void
     */
    public lightmap_pack(options: { PREF_CONTEXT?: 'SEL_FACES' | 'ALL_FACES', PREF_PACK_IN_ONE?: boolean, PREF_NEW_UVLAYER?: boolean, PREF_APPLY_IMAGE?: boolean, PREF_IMG_PX_SIZE?: number, PREF_BOX_DIV?: number, PREF_MARGIN_DIV?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.lightmap_pack`, options)
    }

    /**
     * Mark selected UV edges as seams
     * @desc void
     */
    public mark_seam(options: { clear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mark_seam`, options)
    }

    /**
     * Reduce UV stretching by relaxing angles
     * @desc void
     */
    public minimize_stretch(options: { fill_holes?: boolean, blend?: number, iterations?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.minimize_stretch`, options)
    }

    /**
     * Transform all islands so that they fill up the UV space as much as possible
     * @desc void
     */
    public pack_islands(options: { rotate?: boolean, margin?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack_islands`, options)
    }

    /**
     * Set/clear selected UV vertices as anchored between multiple unwrap operations
     * @desc void
     */
    public pin(options: { clear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pin`, options)
    }

    /**
     * Project the UV vertices of the mesh as seen in current 3D view
     * @desc void
     */
    public project_from_view(options: { orthographic?: boolean, camera_bounds?: boolean, correct_aspect?: boolean, clip_to_bounds?: boolean, scale_to_bounds?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.project_from_view`, options)
    }

    /**
     * Selected UV vertices that are within a radius of each other are welded together
     * @desc void
     */
    public remove_doubles(options: { threshold?: number, use_unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_doubles`, options)
    }

    /**
     * Reset UV projection
     * @desc void
     */
    public reset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reset`, {})
    }

    /**
     * Reveal all hidden UV vertices
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * Set mesh seams according to island setup in the UV editor
     * @desc void
     */
    public seams_from_islands(options: { mark_seams?: boolean, mark_sharp?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.seams_from_islands`, options)
    }

    /**
     * Select UV vertices
     * @desc void
     */
    public select(options: { extend?: boolean, deselect_all?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Change selection of all UV vertices
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select UV vertices using box selection
     * @desc void
     */
    public select_box(options: { pinned?: boolean, xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select UV vertices using circle selection
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select UVs using lasso selection
     * @desc void
     */
    public select_lasso(options: { path?: string, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Deselect UV vertices at the boundary of each selection region
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select all UV vertices linked to the active UV map
     * @desc void
     */
    public select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, {})
    }

    /**
     * Select all UV vertices linked under the mouse
     * @desc void
     */
    public select_linked_pick(options: { extend?: boolean, deselect?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked_pick`, options)
    }

    /**
     * Select a loop of connected UV vertices
     * @desc void
     */
    public select_loop(options: { extend?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_loop`, options)
    }

    /**
     * Select more UV vertices connected to initial selection
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Select all UV faces which overlap each other
     * @desc void
     */
    public select_overlap(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_overlap`, options)
    }

    /**
     * Select all pinned UV vertices
     * @desc void
     */
    public select_pinned(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_pinned`, {})
    }

    /**
     * Select only entirely selected faces
     * @desc void
     */
    public select_split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_split`, {})
    }

    /**
     * This script projection unwraps the selected faces of a mesh (it operates on all selected mesh objects, and can be used to unwrap selected faces, or all faces)
     * @desc void
     */
    public smart_project(options: { angle_limit?: number, island_margin?: number, user_area_weight?: number, use_aspect?: boolean, stretch_to_bounds?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smart_project`, options)
    }

    /**
     * Snap cursor to target type
     * @desc void
     */
    public snap_cursor(options: { target?: 'PIXELS' | 'SELECTED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_cursor`, options)
    }

    /**
     * Snap selected UV vertices to target type
     * @desc void
     */
    public snap_selected(options: { target?: 'PIXELS' | 'CURSOR' | 'CURSOR_OFFSET' | 'ADJACENT_UNSELECTED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_selected`, options)
    }

    /**
     * Project the UV vertices of the mesh over the curved surface of a sphere
     * @desc void
     */
    public sphere_project(options: { direction?: 'VIEW_ON_EQUATOR' | 'VIEW_ON_POLES' | 'ALIGN_TO_OBJECT', align?: 'POLAR_ZX' | 'POLAR_ZY', correct_aspect?: boolean, clip_to_bounds?: boolean, scale_to_bounds?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sphere_project`, options)
    }

    /**
     * Stitch selected UV vertices by proximity
     * @desc void
     */
    public stitch(options: { use_limit?: boolean, snap_islands?: boolean, limit?: number, static_island?: number, active_object_index?: number, midpoint_snap?: boolean, clear_seams?: boolean, mode?: 'VERTEX' | 'EDGE', stored_mode?: 'VERTEX' | 'EDGE', selection?: any, objects_selection_count?: [number, number, number, number, number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stitch`, options)
    }

    /**
     * Unwrap the mesh of the object being edited
     * @desc void
     */
    public unwrap(options: { method?: 'ANGLE_BASED' | 'CONFORMAL', fill_holes?: boolean, correct_aspect?: boolean, use_subsurf_data?: boolean, margin?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unwrap`, options)
    }

    /**
     * Weld selected UV vertices together
     * @desc void
     */
    public weld(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weld`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
