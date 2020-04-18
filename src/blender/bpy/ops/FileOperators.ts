import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FileOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.file.html
 */
export class FileOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Automatically pack all external files into the .blend file
     * @desc void
     */
    public autopack_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.autopack_toggle`, {})
    }

    /**
     * Add a bookmark for the selected/active directory
     * @desc void
     */
    public bookmark_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bookmark_add`, {})
    }

    /**
     * Delete all invalid bookmarks
     * @desc void
     */
    public bookmark_cleanup(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bookmark_cleanup`, {})
    }

    /**
     * Delete selected bookmark
     * @desc void
     */
    public bookmark_delete(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bookmark_delete`, options)
    }

    /**
     * Move the active bookmark up/down in the list
     * @desc void
     */
    public bookmark_move(options: { direction?: 'TOP' | 'UP' | 'DOWN' | 'BOTTOM' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bookmark_move`, options)
    }

    /**
     * Cancel loading of selected file
     * @desc void
     */
    public cancel(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cancel`, {})
    }

    /**
     * Move selected files to the trash or recycle bin
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Create a new directory
     * @desc void
     */
    public directory_new(options: { directory?: string, open?: boolean, confirm?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.directory_new`, options)
    }

    /**
     * Execute selected file
     * @desc void
     */
    public execute(options: { need_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.execute`, options)
    }

    /**
     * Increment number in filename
     * @desc void
     */
    public filenum(options: { increment?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.filenum`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public filepath_drop(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.filepath_drop`, {})
    }

    /**
     * Try to find missing external files
     * @desc void
     */
    public find_missing_files(options: { find_all?: boolean, directory?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.find_missing_files`, options)
    }

    /**
     * Toggle hide hidden dot files
     * @desc void
     */
    public hidedot(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hidedot`, {})
    }

    /**
     * Highlight selected file(s)
     * @desc void
     */
    public highlight(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.highlight`, {})
    }

    /**
     * Make all paths to external files absolute
     * @desc void
     */
    public make_paths_absolute(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_paths_absolute`, {})
    }

    /**
     * Make all paths to external files relative to current .blend
     * @desc void
     */
    public make_paths_relative(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_paths_relative`, {})
    }

    /**
     * Move to next folder
     * @desc void
     */
    public next(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.next`, {})
    }

    /**
     * Pack all used external files into the .blend
     * @desc void
     */
    public pack_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack_all`, {})
    }

    /**
     * Pack all used Blender library files into the current .blend
     * @desc void
     */
    public pack_libraries(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack_libraries`, {})
    }

    /**
     * Move to parent directory
     * @desc void
     */
    public parent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent`, {})
    }

    /**
     * Move to previous folder
     * @desc void
     */
    public previous(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.previous`, {})
    }

    /**
     * Refresh the file list
     * @desc void
     */
    public refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh`, {})
    }

    /**
     * Rename file or file directory
     * @desc void
     */
    public rename(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rename`, {})
    }

    /**
     * Report all missing external files
     * @desc void
     */
    public report_missing_files(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report_missing_files`, {})
    }

    /**
     * Reset Recent files
     * @desc void
     */
    public reset_recent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reset_recent`, {})
    }

    /**
     * Handle mouse clicks to select and activate items
     * @desc void
     */
    public select(options: { extend?: boolean, fill?: boolean, open?: boolean, deselect_all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Select or deselect all files
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select a bookmarked directory
     * @desc void
     */
    public select_bookmark(options: { dir?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_bookmark`, options)
    }

    /**
     * Activate/select the file(s) contained in the border
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select/Deselect files by walking through them
     * @desc void
     */
    public select_walk(options: { direction?: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT', extend?: boolean, fill?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_walk`, options)
    }

    /**
     * Smooth scroll to make editable file visible
     * @desc void
     */
    public smoothscroll(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smoothscroll`, {})
    }

    /**
     * Change sorting to use column under cursor
     * @desc void
     */
    public sort_column_ui_context(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.sort_column_ui_context`, {})
    }

    /**
     * Unpack all files packed into this .blend to external ones
     * @desc void
     */
    public unpack_all(options: { method?: 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL' | 'KEEP' | 'REMOVE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack_all`, options)
    }

    /**
     * Unpack this file to an external file
     * @desc void
     */
    public unpack_item(options: { method?: 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL', id_name?: string, id_type?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack_item`, options)
    }

    /**
     * Unpack all used Blender library files from this .blend file
     * @desc void
     */
    public unpack_libraries(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack_libraries`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
