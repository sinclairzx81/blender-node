import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * EdOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.ed.html
 */
export class EdOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Flush edit data from active editing modes
     * @desc void
     */
    public flush_edits(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flush_edits`, {})
    }

    /**
     * Redo previous action
     * @desc void
     */
    public redo(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.redo`, {})
    }

    /**
     * Undo previous action
     * @desc void
     */
    public undo(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.undo`, {})
    }

    /**
     * Redo specific action in history
     * @desc void
     */
    public undo_history(options: { item?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.undo_history`, options)
    }

    /**
     * Add an undo state (internal use only)
     * @desc void
     */
    public undo_push(options: { message?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.undo_push`, options)
    }

    /**
     * Undo and redo previous action
     * @desc void
     */
    public undo_redo(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.undo_redo`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
