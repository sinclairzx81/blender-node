import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'
import { RenderSettings } from './RenderSettings'
import { RenderResult } from './RenderResult'

/**
 * RenderEngine
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderEngine.html
 */
export class RenderEngine {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Object, (readonly)
     */
    public get camera_override(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.camera_override`, BlenderObject)
    }

    /**
     * 
     * @desc RenderSettings, (readonly)
     */
    public get render_settings(): RenderSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.render_settings`, RenderSettings)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get resolution_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_x`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get resolution_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_y`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_label(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_label`)
    }

    /**
     * Uses Eevee for viewport shading in LookDev shading mode
     * @desc boolean, default False
     */
    public get bl_use_eevee_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.bl_use_eevee_viewport`)
    }

    /**
     * Apply compositing on render results
     * @desc boolean, default False
     */
    public get bl_use_postprocess(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.bl_use_postprocess`)
    }

    /**
     * Render engine supports being used for rendering previews of materials, lights and worlds
     * @desc boolean, default False
     */
    public get bl_use_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.bl_use_preview`)
    }

    /**
     * Support render to an on disk buffer during rendering
     * @desc boolean, default False
     */
    public get bl_use_save_buffers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.bl_use_save_buffers`)
    }

    /**
     * Don’t expose Cycles and Eevee shading nodes in the node editor user interface, so own nodes can be used instead
     * @desc boolean, default True
     */
    public get bl_use_shading_nodes_custom(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.bl_use_shading_nodes_custom`)
    }

    /**
     * Support spherical stereo camera models
     * @desc boolean, default False
     */
    public get bl_use_spherical_stereo(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.bl_use_spherical_stereo`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get is_animation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_animation`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get is_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_preview`)
    }

    /**
     * 
     * @desc boolean array of 20 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public get layer_override(): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.layer_override`, 'boolean', 20)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get tile_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.tile_x`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get tile_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.tile_y`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_highlight_tiles(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_highlight_tiles`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_label(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_label`, value)
    }

    /**
     * Uses Eevee for viewport shading in LookDev shading mode
     * @desc boolean, default False
     */
    public set bl_use_eevee_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.bl_use_eevee_viewport`, value)
    }

    /**
     * Apply compositing on render results
     * @desc boolean, default False
     */
    public set bl_use_postprocess(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.bl_use_postprocess`, value)
    }

    /**
     * Render engine supports being used for rendering previews of materials, lights and worlds
     * @desc boolean, default False
     */
    public set bl_use_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.bl_use_preview`, value)
    }

    /**
     * Support render to an on disk buffer during rendering
     * @desc boolean, default False
     */
    public set bl_use_save_buffers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.bl_use_save_buffers`, value)
    }

    /**
     * Don’t expose Cycles and Eevee shading nodes in the node editor user interface, so own nodes can be used instead
     * @desc boolean, default True
     */
    public set bl_use_shading_nodes_custom(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.bl_use_shading_nodes_custom`, value)
    }

    /**
     * Support spherical stereo camera models
     * @desc boolean, default False
     */
    public set bl_use_spherical_stereo(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.bl_use_spherical_stereo`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set is_animation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_animation`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set is_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_preview`, value)
    }

    /**
     * 
     * @desc boolean array of 20 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public set layer_override(value: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.layer_override`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set tile_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.tile_x`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set tile_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.tile_y`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_highlight_tiles(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_highlight_tiles`, value)
    }

    /**
     * Export scene data for render
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * Render scene into an image
     * @desc void
     */
    public render(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render`, {})
    }

    /**
     * Bake passes
     * @desc void
     */
    public bake(options: { pass_type?: 'COMBINED' | 'AO' | 'SHADOW' | 'NORMAL' | 'UV' | 'ROUGHNESS' | 'EMIT' | 'ENVIRONMENT' | 'DIFFUSE' | 'GLOSSY' | 'TRANSMISSION' | 'SUBSURFACE', pass_filter?: number, object_id?: number, num_pixels?: number, depth?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake`, options)
    }

    /**
     * Update on data changes for viewport render
     * @desc void
     */
    public view_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_update`, {})
    }

    /**
     * Draw viewport render
     * @desc void
     */
    public view_draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_draw`, {})
    }

    /**
     * Compile shader script node
     * @desc void
     */
    public update_script_node(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_script_node`, {})
    }

    /**
     * Update the render passes that will be generated
     * @desc void
     */
    public update_render_passes(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_render_passes`, {})
    }

    /**
     * Request redraw for viewport rendering
     * @desc void
     */
    public tag_redraw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag_redraw`, {})
    }

    /**
     * Request update call for viewport rendering
     * @desc void
     */
    public tag_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag_update`, {})
    }

    /**
     * Create render result to write linear floating point render layers and passes
     * @desc RenderResult
     */
    public begin_result(options: { x?: number, y?: number, w?: number, h?: number, layer?: string, view?: string }): RenderResult {
        return PythonInterop.callClass(this.interop, `${this.accessor}.begin_result`, options, RenderResult)
    }

    /**
     * Signal that pixels have been updated and can be redrawn in the user interface
     * @desc void
     */
    public update_result(options: { result?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_result`, options)
    }

    /**
     * All pixels in the render result have been set and are final
     * @desc void
     */
    public end_result(options: { result?: RenderResult, cancel?: boolean, highlight?: boolean, do_merge_results?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.end_result`, options)
    }

    /**
     * Add a pass to the render layer
     * @desc void
     */
    public add_pass(options: { name?: string, channels?: number, chan_id?: string, layer?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_pass`, options)
    }

    /**
     * Get final result for non-pixel operations
     * @desc RenderResult
     */
    public get_result(): RenderResult {
        return PythonInterop.callClass(this.interop, `${this.accessor}.get_result`, {}, RenderResult)
    }

    /**
     * Test if the render operation should been canceled, this is a fast call that should be used regularly for responsiveness
     * @desc boolean
     */
    public test_break(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.test_break`, {})
    }

    /**
     * active_view_get
     * @desc string, (never None)
     */
    public active_view_get(): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.active_view_get`, {})
    }

    /**
     * active_view_set
     * @desc void
     */
    public active_view_set(options: { view?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.active_view_set`, options)
    }

    /**
     * camera_shift_x
     * @desc float in [0, inf]
     */
    public camera_shift_x(options: { use_spherical_stereo?: boolean }): number {
        return PythonInterop.callFloat(this.interop, `${this.accessor}.camera_shift_x`, options)
    }

    /**
     * camera_model_matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf]
     */
    public camera_model_matrix(options: { use_spherical_stereo?: boolean }): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.callMultiDimensionalArray(this.interop, `${this.accessor}.camera_model_matrix`, options)
    }

    /**
     * use_spherical_stereo
     * @desc boolean
     */
    public use_spherical_stereo(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.use_spherical_stereo`, {})
    }

    /**
     * Update and signal to redraw render status text
     * @desc void
     */
    public update_stats(options: { stats?: string, info?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_stats`, options)
    }

    /**
     * Evaluate scene at a different frame (for motion blur)
     * @desc void
     */
    public frame_set(options: { frame?: number, subframe?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.frame_set`, options)
    }

    /**
     * Update progress percentage of render
     * @desc void
     */
    public update_progress(options: { progress?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_progress`, options)
    }

    /**
     * Update memory usage statistics
     * @desc void
     */
    public update_memory_stats(options: { memory_used?: number, memory_peak?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_memory_stats`, options)
    }

    /**
     * Report info, warning or error messages
     * @desc void
     */
    public report(options: { type?: ('DEBUG' | 'INFO' | 'OPERATOR' | 'PROPERTY' | 'WARNING' | 'ERROR' | 'ERROR_INVALID_INPUT' | 'ERROR_INVALID_CONTEXT' | 'ERROR_OUT_OF_MEMORY')[], message?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report`, options)
    }

    /**
     * Set error message displaying after the render is finished
     * @desc void
     */
    public error_set(options: { message?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.error_set`, options)
    }

    /**
     * Bind GLSL fragment shader that converts linear colors to display space colors using scene color management settings
     * @desc void
     */
    public bind_display_space_shader(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bind_display_space_shader`, {})
    }

    /**
     * Unbind GLSL display space shader, must always be called after binding the shader
     * @desc void
     */
    public unbind_display_space_shader(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unbind_display_space_shader`, {})
    }

    /**
     * Test if GLSL display space shader is supported for the combination of graphics card and scene settings
     * @desc boolean
     */
    public support_display_space_shader(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.support_display_space_shader`, {})
    }

    /**
     * Free Blender side memory of render engine
     * @desc int in [1, 8]
     */
    public get_preview_pixel_size(): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.get_preview_pixel_size`, {})
    }

    /**
     * free_blender_memory
     * @desc void
     */
    public free_blender_memory(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_blender_memory`, {})
    }

    /**
     * Register a render pass that will be part of the render with the current settings
     * @desc void
     */
    public register_pass(options: { name?: string, channels?: number, chanid?: string, type?: 'VALUE' | 'VECTOR' | 'COLOR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.register_pass`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
