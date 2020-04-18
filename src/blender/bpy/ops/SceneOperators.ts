import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SceneOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.scene.html
 */
export class SceneOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Delete active scene
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Add the data paths to the Freestyle Edge Mark property of selected edges to the active keying set
     * @desc void
     */
    public freestyle_add_edge_marks_to_keying_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_add_edge_marks_to_keying_set`, {})
    }

    /**
     * Add the data paths to the Freestyle Face Mark property of selected polygons to the active keying set
     * @desc void
     */
    public freestyle_add_face_marks_to_keying_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_add_face_marks_to_keying_set`, {})
    }

    /**
     * Add an alpha transparency modifier to the line style associated with the active lineset
     * @desc void
     */
    public freestyle_alpha_modifier_add(options: { type?: 'ALONG_STROKE' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_alpha_modifier_add`, options)
    }

    /**
     * Add a line color modifier to the line style associated with the active lineset
     * @desc void
     */
    public freestyle_color_modifier_add(options: { type?: 'ALONG_STROKE' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_color_modifier_add`, options)
    }

    /**
     * Fill the Range Min/Max entries by the min/max distance between selected mesh objects and the source object
     * @desc void
     */
    public freestyle_fill_range_by_selection(options: { type?: 'COLOR' | 'ALPHA' | 'THICKNESS', name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_fill_range_by_selection`, options)
    }

    /**
     * Add a stroke geometry modifier to the line style associated with the active lineset
     * @desc void
     */
    public freestyle_geometry_modifier_add(options: { type?: '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_geometry_modifier_add`, options)
    }

    /**
     * Add a line set into the list of line sets
     * @desc void
     */
    public freestyle_lineset_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_lineset_add`, {})
    }

    /**
     * Copy the active line set to a buffer
     * @desc void
     */
    public freestyle_lineset_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_lineset_copy`, {})
    }

    /**
     * Change the position of the active line set within the list of line sets
     * @desc void
     */
    public freestyle_lineset_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_lineset_move`, options)
    }

    /**
     * Paste the buffer content to the active line set
     * @desc void
     */
    public freestyle_lineset_paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_lineset_paste`, {})
    }

    /**
     * Remove the active line set from the list of line sets
     * @desc void
     */
    public freestyle_lineset_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_lineset_remove`, {})
    }

    /**
     * Create a new line style, reusable by multiple line sets
     * @desc void
     */
    public freestyle_linestyle_new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_linestyle_new`, {})
    }

    /**
     * Duplicate the modifier within the list of modifiers
     * @desc void
     */
    public freestyle_modifier_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_modifier_copy`, {})
    }

    /**
     * Move the modifier within the list of modifiers
     * @desc void
     */
    public freestyle_modifier_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_modifier_move`, options)
    }

    /**
     * Remove the modifier from the list of modifiers
     * @desc void
     */
    public freestyle_modifier_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_modifier_remove`, {})
    }

    /**
     * Add a style module into the list of modules
     * @desc void
     */
    public freestyle_module_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_module_add`, {})
    }

    /**
     * Change the position of the style module within in the list of style modules
     * @desc void
     */
    public freestyle_module_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_module_move`, options)
    }

    /**
     * Open a style module file
     * @desc void
     */
    public freestyle_module_open(options: { filepath?: string, make_internal?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_module_open`, options)
    }

    /**
     * Remove the style module from the stack
     * @desc void
     */
    public freestyle_module_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_module_remove`, {})
    }

    /**
     * Create Freestyle stroke material for testing
     * @desc void
     */
    public freestyle_stroke_material_create(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_stroke_material_create`, {})
    }

    /**
     * Add a line thickness modifier to the line style associated with the active lineset
     * @desc void
     */
    public freestyle_thickness_modifier_add(options: { type?: 'ALONG_STROKE' | 'CALLIGRAPHY' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.freestyle_thickness_modifier_add`, options)
    }

    /**
     * Add or remove grease pencil brush preset
     * @desc void
     */
    public gpencil_brush_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_brush_preset_add`, options)
    }

    /**
     * Add or remove grease pencil material preset
     * @desc void
     */
    public gpencil_material_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gpencil_material_preset_add`, options)
    }

    /**
     * Bake the active view layer lighting
     * @desc void
     */
    public light_cache_bake(options: { delay?: number, subset?: 'ALL' | 'DIRTY' | 'CUBEMAPS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.light_cache_bake`, options)
    }

    /**
     * Delete cached indirect lighting
     * @desc void
     */
    public light_cache_free(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.light_cache_free`, {})
    }

    /**
     * Add new scene by type
     * @desc void
     */
    public new(options: { type?: 'NEW' | 'EMPTY' | 'LINK_COPY' | 'FULL_COPY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, options)
    }

    /**
     * Add a render view
     * @desc void
     */
    public render_view_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render_view_add`, {})
    }

    /**
     * Remove the selected render view
     * @desc void
     */
    public render_view_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render_view_remove`, {})
    }

    /**
     * Add a view layer
     * @desc void
     */
    public view_layer_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_layer_add`, {})
    }

    /**
     * Remove the selected view layer
     * @desc void
     */
    public view_layer_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_layer_remove`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
