import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PaintOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.paint.html
 */
export class PaintOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add cube map uvs on mesh
     * @desc void
     */
    public add_simple_uvs(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_simple_uvs`, {})
    }

    /**
     * Add a texture paint slot
     * @desc void
     */
    public add_texture_paint_slot(options: { type?: 'BASE_COLOR' | 'SPECULAR' | 'ROUGHNESS' | 'METALLIC' | 'NORMAL' | 'BUMP' | 'DISPLACEMENT', name?: string, width?: number, height?: number, color?: [number, number, number, number], alpha?: boolean, generated_type?: 'BLANK' | 'UV_GRID' | 'COLOR_GRID', float?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_texture_paint_slot`, options)
    }

    /**
     * Toggle foreground and background brush colors
     * @desc void
     */
    public brush_colors_flip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.brush_colors_flip`, {})
    }

    /**
     * Select a paint mode’s brush by tool type
     * @desc void
     */
    public brush_select(options: { sculpt_tool?: 'DRAW' | 'DRAW_SHARP' | 'CLAY' | 'CLAY_STRIPS' | 'LAYER' | 'INFLATE' | 'BLOB' | 'CREASE' | 'SMOOTH' | 'FLATTEN' | 'FILL' | 'SCRAPE' | 'MULTIPLANE_SCRAPE' | 'PINCH' | 'GRAB' | 'ELASTIC_DEFORM' | 'SNAKE_HOOK' | 'THUMB' | 'POSE' | 'NUDGE' | 'ROTATE' | 'TOPOLOGY' | 'SIMPLIFY' | 'MASK', vertex_tool?: 'DRAW' | 'BLUR' | 'AVERAGE' | 'SMEAR', weight_tool?: 'DRAW' | 'BLUR' | 'AVERAGE' | 'SMEAR', image_tool?: 'DRAW' | 'SOFTEN' | 'SMEAR' | 'CLONE' | 'FILL' | 'MASK', gpencil_tool?: 'DRAW' | 'FILL' | 'ERASE', toggle?: boolean, create_missing?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.brush_select`, options)
    }

    /**
     * Change selection for all faces
     * @desc void
     */
    public face_select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_select_all`, options)
    }

    /**
     * Hide selected faces
     * @desc void
     */
    public face_select_hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_select_hide`, options)
    }

    /**
     * Select linked faces
     * @desc void
     */
    public face_select_linked(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_select_linked`, {})
    }

    /**
     * Select linked faces under the cursor
     * @desc void
     */
    public face_select_linked_pick(options: { deselect?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_select_linked_pick`, options)
    }

    /**
     * Reveal hidden faces
     * @desc void
     */
    public face_select_reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.face_select_reveal`, options)
    }

    /**
     * Move the clone source image
     * @desc void
     */
    public grab_clone(options: { delta?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.grab_clone`, options)
    }

    /**
     * Hide/show some vertices
     * @desc void
     */
    public hide_show(options: { action?: 'HIDE' | 'SHOW', area?: 'OUTSIDE' | 'INSIDE' | 'ALL' | 'MASKED', xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_show`, options)
    }

    /**
     * Make an image from biggest 3D view for re-projection
     * @desc void
     */
    public image_from_view(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.image_from_view`, options)
    }

    /**
     * Paint a stroke into the image
     * @desc void
     */
    public image_paint(options: { stroke?: string, mode?: 'NORMAL' | 'INVERT' | 'SMOOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.image_paint`, options)
    }

    /**
     * Fill the whole mask with a given value, or invert its values
     * @desc void
     */
    public mask_flood_fill(options: { mode?: 'VALUE' | 'VALUE_INVERSE' | 'INVERT', value?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mask_flood_fill`, options)
    }

    /**
     * Add mask within the lasso as you move the brush
     * @desc void
     */
    public mask_lasso_gesture(options: { path?: string, mode?: 'VALUE' | 'VALUE_INVERSE' | 'INVERT', value?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mask_lasso_gesture`, options)
    }

    /**
     * Project an edited render from the active camera back onto the object
     * @desc void
     */
    public project_image(options: { image?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.project_image`, options)
    }

    /**
     * Use the mouse to sample a color in the image
     * @desc void
     */
    public sample_color(options: { location?: [number, number], merged?: boolean, palette?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sample_color`, options)
    }

    /**
     * Toggle texture paint mode in 3D view
     * @desc void
     */
    public texture_paint_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.texture_paint_toggle`, {})
    }

    /**
     * Change selection for all vertices
     * @desc void
     */
    public vert_select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_select_all`, options)
    }

    /**
     * Select vertices without a group
     * @desc void
     */
    public vert_select_ungrouped(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vert_select_ungrouped`, options)
    }

    /**
     * Adjust vertex color brightness/contrast
     * @desc void
     */
    public vertex_color_brightness_contrast(options: { brightness?: number, contrast?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_brightness_contrast`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public vertex_color_dirt(options: { blur_strength?: number, blur_iterations?: number, clean_angle?: number, dirt_angle?: number, dirt_only?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_dirt`, options)
    }

    /**
     * Convert active weight into gray scale vertex colors
     * @desc void
     */
    public vertex_color_from_weight(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_from_weight`, {})
    }

    /**
     * Adjust vertex color HSV values
     * @desc void
     */
    public vertex_color_hsv(options: { h?: number, s?: number, v?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_hsv`, options)
    }

    /**
     * Invert RGB values
     * @desc void
     */
    public vertex_color_invert(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_invert`, {})
    }

    /**
     * Adjust levels of vertex colors
     * @desc void
     */
    public vertex_color_levels(options: { offset?: number, gain?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_levels`, options)
    }

    /**
     * Fill the active vertex color layer with the current paint color
     * @desc void
     */
    public vertex_color_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_set`, {})
    }

    /**
     * Smooth colors across vertices
     * @desc void
     */
    public vertex_color_smooth(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_color_smooth`, {})
    }

    /**
     * Paint a stroke in the active vertex color layer
     * @desc void
     */
    public vertex_paint(options: { stroke?: string, mode?: 'NORMAL' | 'INVERT' | 'SMOOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_paint`, options)
    }

    /**
     * Toggle the vertex paint mode in 3D view
     * @desc void
     */
    public vertex_paint_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.vertex_paint_toggle`, {})
    }

    /**
     * Set the weights of the groups matching the attached armature’s selected bones, using the distance between the vertices and the bones
     * @desc void
     */
    public weight_from_bones(options: { type?: 'AUTOMATIC' | 'ENVELOPES' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_from_bones`, options)
    }

    /**
     * Draw a line to apply a weight gradient to selected vertices
     * @desc void
     */
    public weight_gradient(options: { type?: 'LINEAR' | 'RADIAL', xstart?: number, xend?: number, ystart?: number, yend?: number, cursor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_gradient`, options)
    }

    /**
     * Paint a stroke in the current vertex group’s weights
     * @desc void
     */
    public weight_paint(options: { stroke?: string, mode?: 'NORMAL' | 'INVERT' | 'SMOOTH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_paint`, options)
    }

    /**
     * Toggle weight paint mode in 3D view
     * @desc void
     */
    public weight_paint_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_paint_toggle`, {})
    }

    /**
     * Use the mouse to sample a weight in the 3D view
     * @desc void
     */
    public weight_sample(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_sample`, {})
    }

    /**
     * Select one of the vertex groups available under current mouse position
     * @desc void
     */
    public weight_sample_group(options: { group?: 'DEFAULT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_sample_group`, options)
    }

    /**
     * Fill the active vertex group with the current paint weight
     * @desc void
     */
    public weight_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_set`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
