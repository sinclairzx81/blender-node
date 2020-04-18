import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ImageOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.image.html
 */
export class ImageOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new render slot
     * @desc void
     */
    public add_render_slot(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add_render_slot`, {})
    }

    /**
     * Interactively change the current frame number
     * @desc void
     */
    public change_frame(options: { frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_frame`, options)
    }

    /**
     * Clear the boundaries of the render region and disable render region
     * @desc void
     */
    public clear_render_border(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_render_border`, {})
    }

    /**
     * Clear the currently selected render slot
     * @desc void
     */
    public clear_render_slot(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_render_slot`, {})
    }

    /**
     * Set black point or white point for curves
     * @desc void
     */
    public curves_point_set(options: { point?: 'BLACK_POINT' | 'WHITE_POINT', size?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.curves_point_set`, options)
    }

    /**
     * Cycle through all non-void render slots
     * @desc void
     */
    public cycle_render_slot(options: { reverse?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cycle_render_slot`, options)
    }

    /**
     * Edit image in an external application
     * @desc void
     */
    public external_edit(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.external_edit`, options)
    }

    /**
     * Invert image’s channels
     * @desc void
     */
    public invert(options: { invert_r?: boolean, invert_g?: boolean, invert_b?: boolean, invert_a?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.invert`, options)
    }

    /**
     * Set image’s user’s length to the one of this video
     * @desc void
     */
    public match_movie_length(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.match_movie_length`, {})
    }

    /**
     * Create a new image
     * @desc void
     */
    public new(options: { name?: string, width?: number, height?: number, color?: [number, number, number, number], alpha?: boolean, generated_type?: 'BLANK' | 'UV_GRID' | 'COLOR_GRID', float?: boolean, use_stereo_3d?: boolean, tiled?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, options)
    }

    /**
     * Open image
     * @desc void
     */
    public open(options: { filepath?: string, directory?: string, files?: any, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', use_sequence_detection?: boolean, use_udim_detecting?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open`, options)
    }

    /**
     * Pack an image as embedded data into the .blend file
     * @desc void
     */
    public pack(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack`, {})
    }

    /**
     * Project edited image back onto the object
     * @desc void
     */
    public project_apply(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.project_apply`, {})
    }

    /**
     * Edit a snapshot of the view-port in an external image editor
     * @desc void
     */
    public project_edit(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.project_edit`, {})
    }

    /**
     * Read all the current scene’s view layers from cache, as needed
     * @desc void
     */
    public read_viewlayers(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.read_viewlayers`, {})
    }

    /**
     * Reload current image from disk
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    /**
     * Remove the current render slot
     * @desc void
     */
    public remove_render_slot(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_render_slot`, {})
    }

    /**
     * Set the boundaries of the render region and enable render region
     * @desc void
     */
    public render_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.render_border`, options)
    }

    /**
     * Replace current image by another one from disk
     * @desc void
     */
    public replace(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.replace`, options)
    }

    /**
     * Resize the image
     * @desc void
     */
    public resize(options: { size?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.resize`, options)
    }

    /**
     * Use mouse to sample a color in current image
     * @desc void
     */
    public sample(options: { size?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sample`, options)
    }

    /**
     * Sample a line and show it in Scope panels
     * @desc void
     */
    public sample_line(options: { xstart?: number, xend?: number, ystart?: number, yend?: number, cursor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sample_line`, options)
    }

    /**
     * Save the image with current name and settings
     * @desc void
     */
    public save(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save`, {})
    }

    /**
     * Save all modified images
     * @desc void
     */
    public save_all_modified(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_all_modified`, {})
    }

    /**
     * Save the image with another name and/or settings
     * @desc void
     */
    public save_as(options: { save_as_render?: boolean, copy?: boolean, filepath?: string, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_as`, options)
    }

    /**
     * Save a sequence of images
     * @desc void
     */
    public save_sequence(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_sequence`, {})
    }

    /**
     * Adds a tile to the image
     * @desc void
     */
    public tile_add(options: { number?: number, count?: number, label?: string, fill?: boolean, color?: [number, number, number, number], generated_type?: 'BLANK' | 'UV_GRID' | 'COLOR_GRID', width?: number, height?: number, float?: boolean, alpha?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tile_add`, options)
    }

    /**
     * Fill the current tile with a generated image
     * @desc void
     */
    public tile_fill(options: { color?: [number, number, number, number], generated_type?: 'BLANK' | 'UV_GRID' | 'COLOR_GRID', width?: number, height?: number, float?: boolean, alpha?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tile_fill`, options)
    }

    /**
     * Removes a tile from the image
     * @desc void
     */
    public tile_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tile_remove`, {})
    }

    /**
     * Save an image packed in the .blend file to disk
     * @desc void
     */
    public unpack(options: { method?: 'REMOVE' | 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL', id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack`, options)
    }

    /**
     * View the entire image
     * @desc void
     */
    public view_all(options: { fit_view?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_all`, options)
    }

    /**
     * Center the view so that the cursor is in the middle of the view
     * @desc void
     */
    public view_center_cursor(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_center_cursor`, {})
    }

    /**
     * Use a 3D mouse device to pan/zoom the view
     * @desc void
     */
    public view_ndof(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_ndof`, {})
    }

    /**
     * Pan the view
     * @desc void
     */
    public view_pan(options: { offset?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_pan`, options)
    }

    /**
     * View all selected UVs
     * @desc void
     */
    public view_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_selected`, {})
    }

    /**
     * Zoom in/out the image
     * @desc void
     */
    public view_zoom(options: { factor?: number, use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom`, options)
    }

    /**
     * Zoom in the view to the nearest item contained in the border
     * @desc void
     */
    public view_zoom_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, zoom_out?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_border`, options)
    }

    /**
     * Zoom in the image (centered around 2D cursor)
     * @desc void
     */
    public view_zoom_in(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_in`, options)
    }

    /**
     * Zoom out the image (centered around 2D cursor)
     * @desc void
     */
    public view_zoom_out(options: { location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_out`, options)
    }

    /**
     * Set zoom ratio of the view
     * @desc void
     */
    public view_zoom_ratio(options: { ratio?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.view_zoom_ratio`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
