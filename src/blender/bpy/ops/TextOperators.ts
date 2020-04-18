import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TextOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.text.html
 */
export class TextOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Show a list of used text in the open document
     * @desc void
     */
    public autocomplete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.autocomplete`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public comment_toggle(options: { type?: 'TOGGLE' | 'COMMENT' | 'UNCOMMENT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.comment_toggle`, options)
    }

    /**
     * Convert whitespaces by type
     * @desc void
     */
    public convert_whitespace(options: { type?: 'SPACES' | 'TABS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.convert_whitespace`, options)
    }

    /**
     * Copy selected text to clipboard
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Set cursor position
     * @desc void
     */
    public cursor_set(options: { x?: number, y?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_set`, options)
    }

    /**
     * Cut selected text to clipboard
     * @desc void
     */
    public cut(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cut`, {})
    }

    /**
     * Delete text by cursor position
     * @desc void
     */
    public delete(options: { type?: 'NEXT_CHARACTER' | 'PREVIOUS_CHARACTER' | 'NEXT_WORD' | 'PREVIOUS_WORD' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Duplicate the current line
     * @desc void
     */
    public duplicate_line(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_line`, {})
    }

    /**
     * Find specified text
     * @desc void
     */
    public find(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.find`, {})
    }

    /**
     * Find specified text and set as selected
     * @desc void
     */
    public find_set_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.find_set_selected`, {})
    }

    /**
     * Indent selected text
     * @desc void
     */
    public indent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.indent`, {})
    }

    /**
     * Indent selected text or autocomplete
     * @desc void
     */
    public indent_or_autocomplete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.indent_or_autocomplete`, {})
    }

    /**
     * Insert text at cursor position
     * @desc void
     */
    public insert(options: { text?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.insert`, options)
    }

    /**
     * Jump cursor to line
     * @desc void
     */
    public jump(options: { line?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.jump`, options)
    }

    /**
     * Insert line break at cursor position
     * @desc void
     */
    public line_break(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.line_break`, {})
    }

    /**
     * The current line number
     * @desc void
     */
    public line_number(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.line_number`, {})
    }

    /**
     * Make active text file internal
     * @desc void
     */
    public make_internal(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_internal`, {})
    }

    /**
     * Move cursor to position type
     * @desc void
     */
    public move(options: { type?: 'LINE_BEGIN' | 'LINE_END' | 'FILE_TOP' | 'FILE_BOTTOM' | 'PREVIOUS_CHARACTER' | 'NEXT_CHARACTER' | 'PREVIOUS_WORD' | 'NEXT_WORD' | 'PREVIOUS_LINE' | 'NEXT_LINE' | 'PREVIOUS_PAGE' | 'NEXT_PAGE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    /**
     * Move the currently selected line(s) up/down
     * @desc void
     */
    public move_lines(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_lines`, options)
    }

    /**
     * Move the cursor while selecting
     * @desc void
     */
    public move_select(options: { type?: 'LINE_BEGIN' | 'LINE_END' | 'FILE_TOP' | 'FILE_BOTTOM' | 'PREVIOUS_CHARACTER' | 'NEXT_CHARACTER' | 'PREVIOUS_WORD' | 'NEXT_WORD' | 'PREVIOUS_LINE' | 'NEXT_LINE' | 'PREVIOUS_PAGE' | 'NEXT_PAGE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move_select`, options)
    }

    /**
     * Create a new text data-block
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Open a new text data-block
     * @desc void
     */
    public open(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', internal?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open`, options)
    }

    /**
     * Toggle overwrite while typing
     * @desc void
     */
    public overwrite_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.overwrite_toggle`, {})
    }

    /**
     * Paste text from clipboard
     * @desc void
     */
    public paste(options: { selection?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, options)
    }

    /**
     * Refresh all pyconstraints
     * @desc void
     */
    public refresh_pyconstraints(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh_pyconstraints`, {})
    }

    /**
     * Reload active text data-block from its file
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    /**
     * Replace text with the specified text
     * @desc void
     */
    public replace(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.replace`, {})
    }

    /**
     * Replace text with specified text and set as selected
     * @desc void
     */
    public replace_set_selected(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.replace_set_selected`, {})
    }

    /**
     * When external text is out of sync, resolve the conflict
     * @desc void
     */
    public resolve_conflict(options: { resolution?: 'IGNORE' | 'RELOAD' | 'SAVE' | 'MAKE_INTERNAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.resolve_conflict`, options)
    }

    /**
     * Run active script
     * @desc void
     */
    public run_script(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.run_script`, {})
    }

    /**
     * Save active text data-block
     * @desc void
     */
    public save(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save`, {})
    }

    /**
     * Save active text file with options
     * @desc void
     */
    public save_as(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_as`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public scroll(options: { lines?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll`, options)
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public scroll_bar(options: { lines?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll_bar`, options)
    }

    /**
     * Select all text
     * @desc void
     */
    public select_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, {})
    }

    /**
     * Select text by line
     * @desc void
     */
    public select_line(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_line`, {})
    }

    /**
     * Select word under cursor
     * @desc void
     */
    public select_word(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_word`, {})
    }

    /**
     * Set cursor selection
     * @desc void
     */
    public selection_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.selection_set`, {})
    }

    /**
     * Start searching text
     * @desc void
     */
    public start_find(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.start_find`, {})
    }

    /**
     * Create 3D text object from active text data-block
     * @desc void
     */
    public to_3d_object(options: { split_lines?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.to_3d_object`, options)
    }

    /**
     * Unindent selected text
     * @desc void
     */
    public unindent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unindent`, {})
    }

    /**
     * Unlink active text data-block
     * @desc void
     */
    public unlink(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
