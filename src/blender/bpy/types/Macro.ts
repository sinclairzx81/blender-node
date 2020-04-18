import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { OperatorProperties } from './OperatorProperties'

/**
 * Macro
 * 
 * https://docs.blender.org/api/current/bpy.types.Macro.html
 */
export class Macro {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc OperatorProperties, (readonly, never None)
     */
    public get properties(): OperatorProperties {
        return PythonInterop.getClass(this.interop, `${this.accessor}.properties`, OperatorProperties)
    }

    /**
     * 
     * @desc string, default ''
     */
    public get bl_description(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_description`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_label(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_label`)
    }

    /**
     * Options for this operator type
     * @desc enum set in {'REGISTER', 'UNDO', 'UNDO_GROUPED', 'BLOCKING', 'MACRO', 'GRAB_CURSOR', 'GRAB_CURSOR_X', 'GRAB_CURSOR_Y', 'PRESET', 'INTERNAL'}, default {'REGISTER'}
     */
    public get bl_options(): ('REGISTER' | 'UNDO' | 'UNDO_GROUPED' | 'BLOCKING' | 'MACRO' | 'GRAB_CURSOR' | 'GRAB_CURSOR_X' | 'GRAB_CURSOR_Y' | 'PRESET' | 'INTERNAL')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.bl_options`)
    }

    /**
     * 
     * @desc string, default 'Operator'
     */
    public get bl_translation_context(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_translation_context`)
    }

    /**
     * 
     * @desc string, default ''
     */
    public get bl_undo_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_undo_group`)
    }

    /**
     * 
     * @desc string, default ''
     */
    public set bl_description(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_description`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_label(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_label`, value)
    }

    /**
     * Options for this operator type
     * @desc enum set in {'REGISTER', 'UNDO', 'UNDO_GROUPED', 'BLOCKING', 'MACRO', 'GRAB_CURSOR', 'GRAB_CURSOR_X', 'GRAB_CURSOR_Y', 'PRESET', 'INTERNAL'}, default {'REGISTER'}
     */
    public set bl_options(value: ('REGISTER' | 'UNDO' | 'UNDO_GROUPED' | 'BLOCKING' | 'MACRO' | 'GRAB_CURSOR' | 'GRAB_CURSOR_X' | 'GRAB_CURSOR_Y' | 'PRESET' | 'INTERNAL')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.bl_options`, value)
    }

    /**
     * 
     * @desc string, default 'Operator'
     */
    public set bl_translation_context(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_translation_context`, value)
    }

    /**
     * 
     * @desc string, default ''
     */
    public set bl_undo_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_undo_group`, value)
    }

    /**
     * report
     * @desc void
     */
    public report(options: { type?: ('DEBUG' | 'INFO' | 'OPERATOR' | 'PROPERTY' | 'WARNING' | 'ERROR' | 'ERROR_INVALID_INPUT' | 'ERROR_INVALID_CONTEXT' | 'ERROR_OUT_OF_MEMORY')[], message?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report`, options)
    }

    /**
     * Draw function for the operator
     * @desc void
     */
    public draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
