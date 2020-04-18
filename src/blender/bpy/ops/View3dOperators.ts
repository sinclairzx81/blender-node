import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * View3dOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.view3d.html
 */
export class View3dOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new background image
     * @desc void
     */
    public background_image_add(options: { name?: string, filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.background_image_add`, options)
    }

    /**
     * Remove a background image from the 3D view
     * @desc void
     */
    public background_image_remove(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.background_image_remove`, options)
    }

    /**
     * Set camera view to active view
     * @desc void
     */
    public camera_to_view(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.camera_to_view`, {})
    }

    /**
     * Move the camera so selected objects are framed
     * @desc void
     */
    public camera_to_view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.camera_to_view_selected`, {})
    }

    /**
     * Clear the boundaries of the border render and disable border render
     * @desc void
     */
    public clear_render_border(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_render_border`, {})
    }

    /**
     * Set the view clipping region
     * @desc void
     */
    public clip_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clip_border`, options)
    }

    /**
     * Selected objects are copied to the clipboard
     * @desc void
     */
    public copybuffer(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copybuffer`, {})
    }

    /**
     * Set the location of the 3D cursor
     * @desc void
     */
    public cursor3d(options: { use_depth?: boolean, orientation?: 'NONE' | 'VIEW' | 'XFORM' | 'GEOM' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor3d`, options)
    }

    /**
     * Dolly in/out in the view
     * @desc void
     */
    public dolly(options: { mx?: number, my?: number, delta?: number, use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dolly`, options)
    }

    /**
     * Extrude each individual face separately along local normals
     * @desc void
     */
    public edit_mesh_extrude_individual_move(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edit_mesh_extrude_individual_move`, {})
    }

    /**
     * Extrude region together along the average normal
     * @desc void
     */
    public edit_mesh_extrude_move_normal(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edit_mesh_extrude_move_normal`, {})
    }

    /**
     * Extrude region together along local normals
     * @desc void
     */
    public edit_mesh_extrude_move_shrink_fatten(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edit_mesh_extrude_move_shrink_fatten`, {})
    }

    /**
     * Interactively fly around the scene
     * @desc void
     */
    public fly(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fly`, {})
    }

    /**
     * Toggle display of selected object(s) separately and centered in view
     * @desc void
     */
    public localview(options: { frame_selected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.localview`, options)
    }

    /**
     * Move selected objects out of local view
     * @desc void
     */
    public localview_remove_from(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.localview_remove_from`, {})
    }

    /**
     * Move the view
     * @desc void
     */
    public move(options: { use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    /**
     * Interactively navigate around the scene (uses the mode (walk/fly) preference)
     * @desc void
     */
    public navigate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.navigate`, {})
    }

    /**
     * Pan and rotate the view with the 3D mouse
     * @desc void
     */
    public ndof_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ndof_all`, {})
    }

    /**
     * Orbit the view using the 3D mouse
     * @desc void
     */
    public ndof_orbit(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ndof_orbit`, {})
    }

    /**
     * Orbit and zoom the view using the 3D mouse
     * @desc void
     */
    public ndof_orbit_zoom(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ndof_orbit_zoom`, {})
    }

    /**
     * Pan the view with the 3D mouse
     * @desc void
     */
    public ndof_pan(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ndof_pan`, {})
    }

    /**
     * Set the active object as the active camera for this view or scene
     * @desc void
     */
    public object_as_camera(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.object_as_camera`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public object_mode_pie_or_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.object_mode_pie_or_toggle`, {})
    }

    /**
     * Objects from the clipboard are pasted
     * @desc void
     */
    public pastebuffer(options: { autoselect?: boolean, active_collection?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pastebuffer`, options)
    }

    /**
     * Set the boundaries of the border render and enable border render
     * @desc void
     */
    public render_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render_border`, options)
    }

    /**
     * Rotate the view
     * @desc void
     */
    public rotate(options: { use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rotate`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public ruler_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ruler_add`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public ruler_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ruler_remove`, {})
    }

    /**
     * Select and activate item(s)
     * @desc void
     */
    public select(options: { extend?: boolean, deselect?: boolean, toggle?: boolean, deselect_all?: boolean, center?: boolean, enumerate?: boolean, object?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Select items using box selection
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' | 'XOR' | 'AND' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select items using circle selection
     * @desc void
     */
    public select_circle(options: { x?: number, y?: number, radius?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_circle`, options)
    }

    /**
     * Select items using lasso selection
     * @desc void
     */
    public select_lasso(options: { path?: string, mode?: 'SET' | 'ADD' | 'SUB' | 'XOR' | 'AND' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_lasso`, options)
    }

    /**
     * Menu object selection
     * @desc void
     */
    public select_menu(options: { name?: string, extend?: boolean, deselect?: boolean, toggle?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_menu`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public smoothview(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smoothview`, {})
    }

    /**
     * Snap 3D cursor to the active item
     * @desc void
     */
    public snap_cursor_to_active(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_cursor_to_active`, {})
    }

    /**
     * Snap 3D cursor to the world origin
     * @desc void
     */
    public snap_cursor_to_center(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_cursor_to_center`, {})
    }

    /**
     * Snap 3D cursor to the nearest grid division
     * @desc void
     */
    public snap_cursor_to_grid(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_cursor_to_grid`, {})
    }

    /**
     * Snap 3D cursor to the middle of the selected item(s)
     * @desc void
     */
    public snap_cursor_to_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_cursor_to_selected`, {})
    }

    /**
     * Snap selected item(s) to the active item
     * @desc void
     */
    public snap_selected_to_active(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_selected_to_active`, {})
    }

    /**
     * Snap selected item(s) to the 3D cursor
     * @desc void
     */
    public snap_selected_to_cursor(options: { use_offset?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_selected_to_cursor`, options)
    }

    /**
     * Snap selected item(s) to their nearest grid division
     * @desc void
     */
    public snap_selected_to_grid(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.snap_selected_to_grid`, {})
    }

    /**
     * Flip MatCap
     * @desc void
     */
    public toggle_matcap_flip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.toggle_matcap_flip`, {})
    }

    /**
     * Toggle shading type in 3D viewport
     * @desc void
     */
    public toggle_shading(options: { type?: 'WIREFRAME' | 'SOLID' | 'MATERIAL' | 'RENDERED' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.toggle_shading`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public toggle_xray(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.toggle_xray`, {})
    }

    /**
     * Set the current transform gizmo
     * @desc void
     */
    public transform_gizmo_set(options: { extend?: boolean, type?: ('TRANSLATE' | 'ROTATE' | 'SCALE')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform_gizmo_set`, options)
    }

    /**
     * View all objects in scene
     * @desc void
     */
    public view_all(options: { use_all_regions?: boolean, center?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, options)
    }

    /**
     * Use a preset viewpoint
     * @desc void
     */
    public view_axis(options: { type?: 'LEFT' | 'RIGHT' | 'BOTTOM' | 'TOP' | 'FRONT' | 'BACK', align_active?: boolean, relative?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_axis`, options)
    }

    /**
     * Toggle the camera view
     * @desc void
     */
    public view_camera(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_camera`, {})
    }

    /**
     * Center the camera view
     * @desc void
     */
    public view_center_camera(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_center_camera`, {})
    }

    /**
     * Center the view so that the cursor is in the middle of the view
     * @desc void
     */
    public view_center_cursor(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_center_cursor`, {})
    }

    /**
     * Center the view lock offset
     * @desc void
     */
    public view_center_lock(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_center_lock`, {})
    }

    /**
     * Center the view to the Z-depth position under the mouse cursor
     * @desc void
     */
    public view_center_pick(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_center_pick`, {})
    }

    /**
     * Clear all view locking
     * @desc void
     */
    public view_lock_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_lock_clear`, {})
    }

    /**
     * Lock the view to the active object/bone
     * @desc void
     */
    public view_lock_to_active(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_lock_to_active`, {})
    }

    /**
     * Orbit the view
     * @desc void
     */
    public view_orbit(options: { angle?: number, type?: 'ORBITLEFT' | 'ORBITRIGHT' | 'ORBITUP' | 'ORBITDOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_orbit`, options)
    }

    /**
     * Pan the view in a given direction
     * @desc void
     */
    public view_pan(options: { type?: 'PANLEFT' | 'PANRIGHT' | 'PANUP' | 'PANDOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_pan`, options)
    }

    /**
     * Switch the current view from perspective/orthographic projection
     * @desc void
     */
    public view_persportho(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_persportho`, {})
    }

    /**
     * Roll the view
     * @desc void
     */
    public view_roll(options: { angle?: number, type?: 'ANGLE' | 'LEFT' | 'RIGHT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_roll`, options)
    }

    /**
     * Move the view to the selection center
     * @desc void
     */
    public view_selected(options: { use_all_regions?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, options)
    }

    /**
     * Interactively walk around the scene
     * @desc void
     */
    public walk(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.walk`, {})
    }

    /**
     * Zoom in/out in the view
     * @desc void
     */
    public zoom(options: { mx?: number, my?: number, delta?: number, use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom`, options)
    }

    /**
     * Zoom in the view to the nearest object contained in the border
     * @desc void
     */
    public zoom_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, zoom_out?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom_border`, options)
    }

    /**
     * Match the camera to 1:1 to the render output
     * @desc void
     */
    public zoom_camera_1_to_1(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom_camera_1_to_1`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
