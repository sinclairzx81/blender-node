import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { TextLine } from './TextLine'

/**
 * Text
 * 
 * https://docs.blender.org/api/current/bpy.types.Text.html
 */
export class Text {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Current line, and start line of selection if one exists
     * @desc TextLine, (readonly, never None)
     */
    public get current_line(): TextLine {
        return PythonInterop.getClass(this.interop, `${this.accessor}.current_line`, TextLine)
    }

    /**
     * Text file has been edited since last save
     * @desc boolean, default False, (readonly)
     */
    public get is_dirty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_dirty`)
    }

    /**
     * Text file is in memory, without a corresponding file on disk
     * @desc boolean, default False, (readonly)
     */
    public get is_in_memory(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_in_memory`)
    }

    /**
     * Text file on disk is different than the one in memory
     * @desc boolean, default False, (readonly)
     */
    public get is_modified(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_modified`)
    }

    /**
     * Lines of text
     * @desc bpy_prop_collection of TextLine, (readonly)
     */
    public get lines(): BlenderCollection<TextLine> & Indexable<TextLine> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.lines`, TextLine)
    }

    /**
     * End line of selection
     * @desc TextLine, (readonly, never None)
     */
    public get select_end_line(): TextLine {
        return PythonInterop.getClass(this.interop, `${this.accessor}.select_end_line`, TextLine)
    }

    /**
     * Index of current character in current line, and also start index of character in selection if one exists
     * @desc int in [0, inf], default 0
     */
    public get current_character(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.current_character`)
    }

    /**
     * Index of current TextLine in TextLine collection
     * @desc int in [-inf, inf], default 0
     */
    public get current_line_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.current_line_index`)
    }

    /**
     * Filename of the text file
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Use tabs or spaces for indentation
     * @desc enum in ['TABS', 'SPACES'], default 'TABS'
     */
    public get indentation(): 'TABS' | 'SPACES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.indentation`)
    }

    /**
     * Index of character after end of selection in the selection end line
     * @desc int in [0, inf], default 0
     */
    public get select_end_character(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.select_end_character`)
    }

    /**
     * Index of last TextLine in selection
     * @desc int in [-inf, inf], default 0
     */
    public get select_end_line_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.select_end_line_index`)
    }

    /**
     * Run this text as a script on loading, Text name must end with “.py”
     * @desc boolean, default False
     */
    public get use_module(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_module`)
    }

    /**
     * Index of current character in current line, and also start index of character in selection if one exists
     * @desc int in [0, inf], default 0
     */
    public set current_character(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.current_character`, value)
    }

    /**
     * Index of current TextLine in TextLine collection
     * @desc int in [-inf, inf], default 0
     */
    public set current_line_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.current_line_index`, value)
    }

    /**
     * Filename of the text file
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Use tabs or spaces for indentation
     * @desc enum in ['TABS', 'SPACES'], default 'TABS'
     */
    public set indentation(value: 'TABS' | 'SPACES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.indentation`, value)
    }

    /**
     * Index of character after end of selection in the selection end line
     * @desc int in [0, inf], default 0
     */
    public set select_end_character(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.select_end_character`, value)
    }

    /**
     * Index of last TextLine in selection
     * @desc int in [-inf, inf], default 0
     */
    public set select_end_line_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.select_end_line_index`, value)
    }

    /**
     * Run this text as a script on loading, Text name must end with “.py”
     * @desc boolean, default False
     */
    public set use_module(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_module`, value)
    }

    /**
     * clear the text block
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    /**
     * write text at the cursor location and advance to the end of the text block
     * @desc void
     */
    public write(options: { text?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.write`, options)
    }

    /**
     * Returns True if the editor supports syntax highlighting for the current text datablock
     * @desc boolean
     */
    public is_syntax_highlight_supported(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_syntax_highlight_supported`, {})
    }

    /**
     * Set selection range by line and character index
     * @desc void
     */
    public select_set(options: { line_start?: number, char_start?: number, line_end?: number, char_end?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_set`, options)
    }

    /**
     * Set cursor by line and (optionally) character index
     * @desc void
     */
    public cursor_set(options: { line?: number, character?: number, select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cursor_set`, options)
    }

    /**
     * 
     * @desc void
     */
    public as_module(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.as_module`, {})
    }

    /**
     * Return the text as a string.
     * @desc void
     */
    public as_string(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.as_string`, {})
    }

    /**
     * Replace text with this string.
     * @desc void
     */
    public from_string(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.from_string`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
