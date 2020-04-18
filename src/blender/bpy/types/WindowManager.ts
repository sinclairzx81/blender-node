import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { KeyConfigurations } from './KeyConfigurations'
import { KeyConfig } from './KeyConfig'
import { Operator } from './Operator'
import { Window } from './Window'
import { Timer } from './Timer'

/**
 * WindowManager
 * 
 * https://docs.blender.org/api/current/bpy.types.WindowManager.html
 */
export class WindowManager {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Registered key configurations
     * @desc KeyConfigurations bpy_prop_collection of KeyConfig, (readonly)
     */
    public get keyconfigs(): BlenderCollection<KeyConfig> & Indexable<KeyConfig> & KeyConfigurations {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.keyconfigs`, KeyConfigurations, KeyConfig)
    }

    /**
     * Operator registry
     * @desc bpy_prop_collection of Operator, (readonly)
     */
    public get operators(): BlenderCollection<Operator> & Indexable<Operator> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.operators`, Operator)
    }

    /**
     * Open windows
     * @desc bpy_prop_collection of Window, (readonly)
     */
    public get windows(): BlenderCollection<Window> & Indexable<Window> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.windows`, Window)
    }

    /**
     * Filter add-ons by category
     * @desc enum in [], default ''
     */
    public get addon_filter(): string {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.addon_filter`)
    }

    /**
     * Search within the selected filter
     * @desc string, default '', (never None)
     */
    public get addon_search(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.addon_search`)
    }

    /**
     * Display support level
     * @desc enum set in {'OFFICIAL', 'COMMUNITY', 'TESTING'}, default {'COMMUNITY', 'OFFICIAL'}
     */
    public get addon_support(): ('OFFICIAL' | 'COMMUNITY' | 'TESTING')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.addon_support`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get clipboard(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.clipboard`)
    }

    /**
     * Name for new preset
     * @desc string, default 'New Preset', (never None)
     */
    public get preset_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.preset_name`)
    }

    /**
     * Filter add-ons by category
     * @desc enum in [], default ''
     */
    public set addon_filter(value: string) {
        PythonInterop.setEnum(this.interop, `${this.accessor}.addon_filter`, value)
    }

    /**
     * Search within the selected filter
     * @desc string, default '', (never None)
     */
    public set addon_search(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.addon_search`, value)
    }

    /**
     * Display support level
     * @desc enum set in {'OFFICIAL', 'COMMUNITY', 'TESTING'}, default {'COMMUNITY', 'OFFICIAL'}
     */
    public set addon_support(value: ('OFFICIAL' | 'COMMUNITY' | 'TESTING')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.addon_support`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set clipboard(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.clipboard`, value)
    }

    /**
     * Name for new preset
     * @desc string, default 'New Preset', (never None)
     */
    public set preset_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.preset_name`, value)
    }

    /**
     * Add a timer to the given window, to generate periodic ‘TIMER’ events
     * @desc Timer
     */
    public event_timer_add(options: { time_step?: number, window?: unknown }): Timer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.event_timer_add`, options, Timer)
    }

    /**
     * event_timer_remove
     * @desc void
     */
    public event_timer_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.event_timer_remove`, {})
    }

    /**
     * Start progress report
     * @desc void
     */
    public progress_begin(options: { min?: number, max?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.progress_begin`, options)
    }

    /**
     * Update the progress feedback
     * @desc void
     */
    public progress_update(options: { value?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.progress_update`, options)
    }

    /**
     * Terminate progress report
     * @desc void
     */
    public progress_end(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.progress_end`, {})
    }

    /**
     * print_undo_steps
     * @desc void
     */
    public print_undo_steps(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.print_undo_steps`, {})
    }

    /**
     * 
     * @desc void
     */
    public popover(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.popover`, {})
    }

    /**
     * Popup menus can be useful for creating menus without having to register menu classes.
     * @desc void
     */
    public popup_menu(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.popup_menu`, {})
    }

    /**
     * 
     * @desc void
     */
    public popup_menu_pie(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.popup_menu_pie`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
