import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FontOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.font.html
 */
export class FontOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Set font case
     * @desc void
     */
    public case_set(options: { case?: 'LOWER' | 'UPPER' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.case_set`, options)
    }

    /**
     * Toggle font case
     * @desc void
     */
    public case_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.case_toggle`, {})
    }

    /**
     * Change font character code
     * @desc void
     */
    public change_character(options: { delta?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_character`, options)
    }

    /**
     * Change font spacing
     * @desc void
     */
    public change_spacing(options: { delta?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.change_spacing`, options)
    }

    /**
     * Delete text by cursor position
     * @desc void
     */
    public delete(options: { type?: 'NEXT_CHARACTER' | 'PREVIOUS_CHARACTER' | 'NEXT_WORD' | 'PREVIOUS_WORD' | 'SELECTION' | 'NEXT_OR_SELECTION' | 'PREVIOUS_OR_SELECTION' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Insert line break at cursor position
     * @desc void
     */
    public line_break(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.line_break`, {})
    }

    /**
     * Move cursor to position type
     * @desc void
     */
    public move(options: { type?: 'LINE_BEGIN' | 'LINE_END' | 'PREVIOUS_CHARACTER' | 'NEXT_CHARACTER' | 'PREVIOUS_WORD' | 'NEXT_WORD' | 'PREVIOUS_LINE' | 'NEXT_LINE' | 'PREVIOUS_PAGE' | 'NEXT_PAGE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    /**
     * Move the cursor while selecting
     * @desc void
     */
    public move_select(options: { type?: 'LINE_BEGIN' | 'LINE_END' | 'PREVIOUS_CHARACTER' | 'NEXT_CHARACTER' | 'PREVIOUS_WORD' | 'NEXT_WORD' | 'PREVIOUS_LINE' | 'NEXT_LINE' | 'PREVIOUS_PAGE' | 'NEXT_PAGE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_select`, options)
    }

    /**
     * Load a new font from a file
     * @desc void
     */
    public open(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open`, options)
    }

    /**
     * Select all text
     * @desc void
     */
    public select_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, {})
    }

    /**
     * Set font style
     * @desc void
     */
    public style_set(options: { style?: 'BOLD' | 'ITALIC' | 'UNDERLINE' | 'SMALL_CAPS', clear?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.style_set`, options)
    }

    /**
     * Toggle font style
     * @desc void
     */
    public style_toggle(options: { style?: 'BOLD' | 'ITALIC' | 'UNDERLINE' | 'SMALL_CAPS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.style_toggle`, options)
    }

    /**
     * Copy selected text to clipboard
     * @desc void
     */
    public text_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.text_copy`, {})
    }

    /**
     * Cut selected text to clipboard
     * @desc void
     */
    public text_cut(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.text_cut`, {})
    }

    /**
     * Insert text at cursor position
     * @desc void
     */
    public text_insert(options: { text?: string, accent?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.text_insert`, options)
    }

    /**
     * Paste text from clipboard
     * @desc void
     */
    public text_paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.text_paste`, {})
    }

    /**
     * Paste contents from file
     * @desc void
     */
    public text_paste_from_file(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.text_paste_from_file`, options)
    }

    /**
     * Add a new text box
     * @desc void
     */
    public textbox_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.textbox_add`, {})
    }

    /**
     * Remove the textbox
     * @desc void
     */
    public textbox_remove(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.textbox_remove`, options)
    }

    /**
     * Unlink active font data-block
     * @desc void
     */
    public unlink(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
