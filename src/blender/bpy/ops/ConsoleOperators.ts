import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ConsoleOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.console.html
 */
export class ConsoleOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Evaluate the namespace up until the cursor and give a list of options or complete the name if there is only one
     * @desc void
     */
    public autocomplete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.autocomplete`, {})
    }

    /**
     * Print a message when the terminal initializes
     * @desc void
     */
    public banner(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.banner`, {})
    }

    /**
     * Clear text by type
     * @desc void
     */
    public clear(options: { scrollback?: boolean, history?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, options)
    }

    /**
     * Clear the line and store in history
     * @desc void
     */
    public clear_line(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear_line`, {})
    }

    /**
     * Copy selected text to clipboard
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Copy the console contents for use in a script
     * @desc void
     */
    public copy_as_script(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_as_script`, {})
    }

    /**
     * Delete text by cursor position
     * @desc void
     */
    public delete(options: { type?: 'NEXT_CHARACTER' | 'PREVIOUS_CHARACTER' | 'NEXT_WORD' | 'PREVIOUS_WORD' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Execute the current console line as a python expression
     * @desc void
     */
    public execute(options: { interactive?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.execute`, options)
    }

    /**
     * Append history at cursor position
     * @desc void
     */
    public history_append(options: { text?: string, current_character?: number, remove_duplicates?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.history_append`, options)
    }

    /**
     * Cycle through history
     * @desc void
     */
    public history_cycle(options: { reverse?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.history_cycle`, options)
    }

    /**
     * Add 4 spaces at line beginning
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
     * Set the current language for this console
     * @desc void
     */
    public language(options: { language?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.language`, options)
    }

    /**
     * Move cursor position
     * @desc void
     */
    public move(options: { type?: 'LINE_BEGIN' | 'LINE_END' | 'PREVIOUS_CHARACTER' | 'NEXT_CHARACTER' | 'PREVIOUS_WORD' | 'NEXT_WORD' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    /**
     * Paste text from clipboard
     * @desc void
     */
    public paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, {})
    }

    /**
     * Append scrollback text by type
     * @desc void
     */
    public scrollback_append(options: { text?: string, type?: 'OUTPUT' | 'INPUT' | 'INFO' | 'ERROR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scrollback_append`, options)
    }

    /**
     * Set the console selection
     * @desc void
     */
    public select_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_set`, {})
    }

    /**
     * Select word at cursor position
     * @desc void
     */
    public select_word(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_word`, {})
    }

    /**
     * Delete 4 spaces from line beginning
     * @desc void
     */
    public unindent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unindent`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
