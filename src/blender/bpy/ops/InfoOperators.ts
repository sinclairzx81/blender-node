import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * InfoOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.info.html
 */
export class InfoOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Copy selected reports to Clipboard
     * @desc void
     */
    public report_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report_copy`, {})
    }

    /**
     * Delete selected reports
     * @desc void
     */
    public report_delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report_delete`, {})
    }

    /**
     * Replay selected reports
     * @desc void
     */
    public report_replay(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report_replay`, {})
    }

    /**
     * Update the display of reports in Blender UI (internal use)
     * @desc void
     */
    public reports_display_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reports_display_update`, {})
    }

    /**
     * Change selection of all visible reports
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Toggle box selection
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    /**
     * Select reports by index
     * @desc void
     */
    public select_pick(options: { report_index?: number, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_pick`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
