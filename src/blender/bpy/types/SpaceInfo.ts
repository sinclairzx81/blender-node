import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'

/**
 * SpaceInfo
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceInfo.html
 */
export class SpaceInfo {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Display debug reporting info
     * @desc boolean, default False
     */
    public get show_report_debug(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_report_debug`)
    }

    /**
     * Display error text
     * @desc boolean, default False
     */
    public get show_report_error(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_report_error`)
    }

    /**
     * Display general information
     * @desc boolean, default False
     */
    public get show_report_info(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_report_info`)
    }

    /**
     * Display the operator log
     * @desc boolean, default False
     */
    public get show_report_operator(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_report_operator`)
    }

    /**
     * Display warnings
     * @desc boolean, default False
     */
    public get show_report_warning(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_report_warning`)
    }

    /**
     * Display debug reporting info
     * @desc boolean, default False
     */
    public set show_report_debug(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_report_debug`, value)
    }

    /**
     * Display error text
     * @desc boolean, default False
     */
    public set show_report_error(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_report_error`, value)
    }

    /**
     * Display general information
     * @desc boolean, default False
     */
    public set show_report_info(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_report_info`, value)
    }

    /**
     * Display the operator log
     * @desc boolean, default False
     */
    public set show_report_operator(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_report_operator`, value)
    }

    /**
     * Display warnings
     * @desc boolean, default False
     */
    public set show_report_warning(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_report_warning`, value)
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
