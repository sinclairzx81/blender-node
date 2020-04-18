import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { Text } from './Text'

/**
 * SpaceTextEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceTextEditor.html
 */
export class SpaceTextEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount of lines that can be visible in current editor
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get visible_lines(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.visible_lines`)
    }

    /**
     * Text to search for with the find tool
     * @desc string, default '', (never None)
     */
    public get find_text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.find_text`)
    }

    /**
     * Font size to use for displaying the text
     * @desc int in [8, 32], default 0
     */
    public get font_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.font_size`)
    }

    /**
     * Column number to show right margin at
     * @desc int in [0, 1024], default 0
     */
    public get margin_column(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.margin_column`)
    }

    /**
     * Text to replace selected text with using the replace tool
     * @desc string, default '', (never None)
     */
    public get replace_text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.replace_text`)
    }

    /**
     * Highlight the current line
     * @desc boolean, default False
     */
    public get show_line_highlight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_line_highlight`)
    }

    /**
     * Show line numbers next to the text
     * @desc boolean, default False
     */
    public get show_line_numbers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_line_numbers`)
    }

    /**
     * Show right margin
     * @desc boolean, default False
     */
    public get show_margin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_margin`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_footer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_footer`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Syntax highlight for scripting
     * @desc boolean, default False
     */
    public get show_syntax_highlight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_syntax_highlight`)
    }

    /**
     * Wrap words if there is not enough horizontal space
     * @desc boolean, default False
     */
    public get show_word_wrap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_word_wrap`)
    }

    /**
     * Number of spaces to display tabs with
     * @desc int in [2, 8], default 0
     */
    public get tab_width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.tab_width`)
    }

    /**
     * Text displayed and edited in this space
     * @desc Text
     */
    public get text(): Text {
        return PythonInterop.getClass(this.interop, `${this.accessor}.text`, Text)
    }

    /**
     * Top line visible
     * @desc int in [0, inf], default 0
     */
    public get top(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.top`)
    }

    /**
     * Search in all text data-blocks, instead of only the active one
     * @desc boolean, default False
     */
    public get use_find_all(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_find_all`)
    }

    /**
     * Search again from the start of the file when reaching the end
     * @desc boolean, default False
     */
    public get use_find_wrap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_find_wrap`)
    }

    /**
     * Run python while editing
     * @desc boolean, default False
     */
    public get use_live_edit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_live_edit`)
    }

    /**
     * Search string is sensitive to uppercase and lowercase letters
     * @desc boolean, default False
     */
    public get use_match_case(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_match_case`)
    }

    /**
     * Overwrite characters when typing rather than inserting them
     * @desc boolean, default False
     */
    public get use_overwrite(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_overwrite`)
    }

    /**
     * Text to search for with the find tool
     * @desc string, default '', (never None)
     */
    public set find_text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.find_text`, value)
    }

    /**
     * Font size to use for displaying the text
     * @desc int in [8, 32], default 0
     */
    public set font_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.font_size`, value)
    }

    /**
     * Column number to show right margin at
     * @desc int in [0, 1024], default 0
     */
    public set margin_column(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.margin_column`, value)
    }

    /**
     * Text to replace selected text with using the replace tool
     * @desc string, default '', (never None)
     */
    public set replace_text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.replace_text`, value)
    }

    /**
     * Highlight the current line
     * @desc boolean, default False
     */
    public set show_line_highlight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_line_highlight`, value)
    }

    /**
     * Show line numbers next to the text
     * @desc boolean, default False
     */
    public set show_line_numbers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_line_numbers`, value)
    }

    /**
     * Show right margin
     * @desc boolean, default False
     */
    public set show_margin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_margin`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_footer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_footer`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Syntax highlight for scripting
     * @desc boolean, default False
     */
    public set show_syntax_highlight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_syntax_highlight`, value)
    }

    /**
     * Wrap words if there is not enough horizontal space
     * @desc boolean, default False
     */
    public set show_word_wrap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_word_wrap`, value)
    }

    /**
     * Number of spaces to display tabs with
     * @desc int in [2, 8], default 0
     */
    public set tab_width(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.tab_width`, value)
    }

    /**
     * Text displayed and edited in this space
     * @desc Text
     */
    public set text(value: Text) {
        PythonInterop.setClass(this.interop, `${this.accessor}.text`, value)
    }

    /**
     * Top line visible
     * @desc int in [0, inf], default 0
     */
    public set top(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.top`, value)
    }

    /**
     * Search in all text data-blocks, instead of only the active one
     * @desc boolean, default False
     */
    public set use_find_all(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_find_all`, value)
    }

    /**
     * Search again from the start of the file when reaching the end
     * @desc boolean, default False
     */
    public set use_find_wrap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_find_wrap`, value)
    }

    /**
     * Run python while editing
     * @desc boolean, default False
     */
    public set use_live_edit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_live_edit`, value)
    }

    /**
     * Search string is sensitive to uppercase and lowercase letters
     * @desc boolean, default False
     */
    public set use_match_case(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_match_case`, value)
    }

    /**
     * Overwrite characters when typing rather than inserting them
     * @desc boolean, default False
     */
    public set use_overwrite(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_overwrite`, value)
    }

    /**
     * Returns True if the editor supports syntax highlighting for the current text datablock
     * @desc boolean
     */
    public is_syntax_highlight_supported(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_syntax_highlight_supported`, {})
    }

    /**
     * Retrieve the region position from the given line and character position
     * @desc int array of 2 items in [-1, inf]
     */
    public region_location_from_cursor(options: { line?: number, column?: number }): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.region_location_from_cursor`, options)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
