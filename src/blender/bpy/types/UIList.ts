import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * UIList
 * 
 * https://docs.blender.org/api/current/bpy.types.UIList.html
 */
export class UIList {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The value of the reserved bitflag ‘FILTER_ITEM’ (in filter_flags values)
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get bitflag_filter_item(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bitflag_filter_item`)
    }

    /**
     * 
     * @desc enum in ['DEFAULT', 'COMPACT', 'GRID'], default 'DEFAULT', (readonly)
     */
    public get layout_type(): 'DEFAULT' | 'COMPACT' | 'GRID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.layout_type`)
    }

    /**
     * If this is set, the uilist gets a custom ID, otherwise it takes the name of the class used to define the uilist (for example, if the class name is “OBJECT_UL_vgroups”, and bl_idname is not set by the script, then bl_idname = “OBJECT_UL_vgroups”)
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * Only show items matching this name (use ‘*’ as wildcard)
     * @desc string, default '', (never None)
     */
    public get filter_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_name`)
    }

    /**
     * Invert filtering (show hidden items, and vice-versa)
     * @desc boolean, default False
     */
    public get use_filter_invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_invert`)
    }

    /**
     * Show filtering options
     * @desc boolean, default False
     */
    public get use_filter_show(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_show`)
    }

    /**
     * Sort items by their name
     * @desc boolean, default False
     */
    public get use_filter_sort_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_sort_alpha`)
    }

    /**
     * Lock the order of shown items (user cannot change it)
     * @desc boolean, default False
     */
    public get use_filter_sort_lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_sort_lock`)
    }

    /**
     * Reverse the order of shown items
     * @desc boolean, default False
     */
    public get use_filter_sort_reverse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_sort_reverse`)
    }

    /**
     * If this is set, the uilist gets a custom ID, otherwise it takes the name of the class used to define the uilist (for example, if the class name is “OBJECT_UL_vgroups”, and bl_idname is not set by the script, then bl_idname = “OBJECT_UL_vgroups”)
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * Only show items matching this name (use ‘*’ as wildcard)
     * @desc string, default '', (never None)
     */
    public set filter_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_name`, value)
    }

    /**
     * Invert filtering (show hidden items, and vice-versa)
     * @desc boolean, default False
     */
    public set use_filter_invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_invert`, value)
    }

    /**
     * Show filtering options
     * @desc boolean, default False
     */
    public set use_filter_show(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_show`, value)
    }

    /**
     * Sort items by their name
     * @desc boolean, default False
     */
    public set use_filter_sort_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_sort_alpha`, value)
    }

    /**
     * Lock the order of shown items (user cannot change it)
     * @desc boolean, default False
     */
    public set use_filter_sort_lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_sort_lock`, value)
    }

    /**
     * Reverse the order of shown items
     * @desc boolean, default False
     */
    public set use_filter_sort_reverse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_sort_reverse`, value)
    }

    /**
     * Draw an item in the list (NOTE: when you define your own draw_item function, you may want to check given ‘item’ is of the right type…)
     * @desc void
     */
    public draw_item(options: { layout?: unknown, data?: unknown, item?: unknown, icon?: number, active_data?: unknown, active_property?: string, index?: number, flt_flag?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_item`, options)
    }

    /**
     * Draw filtering options
     * @desc void
     */
    public draw_filter(options: { layout?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_filter`, options)
    }

    /**
     * Filter and/or re-order items of the collection (output filter results in filter_flags, and reorder results in filter_neworder arrays)
     * @desc void
     */
    public filter_items(options: { data?: unknown, property?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.filter_items`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
