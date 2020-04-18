import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UILayout } from './UILayout'
import { Macro } from './Macro'
import { OperatorOptions } from './OperatorOptions'
import { OperatorProperties } from './OperatorProperties'

/**
 * Operator
 * 
 * https://docs.blender.org/api/current/bpy.types.Operator.html
 */
export class Operator {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Operator has a set of reports (warnings and errors) from last execution
     * @desc boolean, default False, (readonly)
     */
    public get has_reports(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_reports`)
    }

    /**
     * 
     * @desc UILayout, (readonly)
     */
    public get layout(): UILayout {
        return PythonInterop.getClass(this.interop, `${this.accessor}.layout`, UILayout)
    }

    /**
     * 
     * @desc bpy_prop_collection of Macro, (readonly)
     */
    public get macros(): BlenderCollection<Macro> & Indexable<Macro> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.macros`, Macro)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Runtime options
     * @desc OperatorOptions, (readonly, never None)
     */
    public get options(): OperatorOptions {
        return PythonInterop.getClass(this.interop, `${this.accessor}.options`, OperatorOptions)
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
     * The name of a property to use as this operators primary property.Currently this is only used to select the default property whenexpanding an operator into a menu.:type: string
     * @desc void
     */
    public get bl_property(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.bl_property`)
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
     * The name of a property to use as this operators primary property.Currently this is only used to select the default property whenexpanding an operator into a menu.:type: string
     * @desc void
     */
    public set bl_property(value: void) {
        PythonInterop.setVoid(this.interop, `${this.accessor}.bl_property`, value)
    }

    /**
     * report
     * @desc void
     */
    public report(options: { type?: ('DEBUG' | 'INFO' | 'OPERATOR' | 'PROPERTY' | 'WARNING' | 'ERROR' | 'ERROR_INVALID_INPUT' | 'ERROR_INVALID_CONTEXT' | 'ERROR_OUT_OF_MEMORY')[], message?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.report`, options)
    }

    /**
     * is_repeat
     * @desc boolean
     */
    public is_repeat(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_repeat`, {})
    }

    /**
     * Execute the operator
     * @desc enum set in {'RUNNING_MODAL', 'CANCELLED', 'FINISHED', 'PASS_THROUGH', 'INTERFACE'}
     */
    public execute(): ('RUNNING_MODAL' | 'CANCELLED' | 'FINISHED' | 'PASS_THROUGH' | 'INTERFACE')[] {
        return PythonInterop.callEnumSet(this.interop, `${this.accessor}.execute`, {})
    }

    /**
     * Check the operator settings, return True to signal a change to redraw
     * @desc boolean
     */
    public check(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.check`, {})
    }

    /**
     * Invoke the operator
     * @desc enum set in {'RUNNING_MODAL', 'CANCELLED', 'FINISHED', 'PASS_THROUGH', 'INTERFACE'}
     */
    public invoke(): ('RUNNING_MODAL' | 'CANCELLED' | 'FINISHED' | 'PASS_THROUGH' | 'INTERFACE')[] {
        return PythonInterop.callEnumSet(this.interop, `${this.accessor}.invoke`, {})
    }

    /**
     * Modal operator function
     * @desc enum set in {'RUNNING_MODAL', 'CANCELLED', 'FINISHED', 'PASS_THROUGH', 'INTERFACE'}
     */
    public modal(): ('RUNNING_MODAL' | 'CANCELLED' | 'FINISHED' | 'PASS_THROUGH' | 'INTERFACE')[] {
        return PythonInterop.callEnumSet(this.interop, `${this.accessor}.modal`, {})
    }

    /**
     * Draw function for the operator
     * @desc void
     */
    public draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, {})
    }

    /**
     * Called when the operator is canceled
     * @desc void
     */
    public cancel(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cancel`, {})
    }

    /**
     * Return a copy of the properties as a dictionary
     * @desc void
     */
    public as_keywords(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.as_keywords`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
