import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UILayout } from './UILayout'

/**
 * Menu
 * 
 * https://docs.blender.org/api/current/bpy.types.Menu.html
 */
export class Menu {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Defines the structure of the menu in the UI
     * @desc UILayout, (readonly)
     */
    public get layout(): UILayout {
        return PythonInterop.getClass(this.interop, `${this.accessor}.layout`, UILayout)
    }

    /**
     * 
     * @desc string, default ''
     */
    public get bl_description(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_description`)
    }

    /**
     * If this is set, the menu gets a custom ID, otherwise it takes the name of the class used to define the menu (for example, if the class name is “OBJECT_MT_hello”, and bl_idname is not set by the script, then bl_idname = “OBJECT_MT_hello”)
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * The menu label
     * @desc string, default '', (never None)
     */
    public get bl_label(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_label`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_owner_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_owner_id`)
    }

    /**
     * 
     * @desc string, default '*', (never None)
     */
    public get bl_translation_context(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_translation_context`)
    }

    /**
     * 
     * @desc string, default ''
     */
    public set bl_description(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_description`, value)
    }

    /**
     * If this is set, the menu gets a custom ID, otherwise it takes the name of the class used to define the menu (for example, if the class name is “OBJECT_MT_hello”, and bl_idname is not set by the script, then bl_idname = “OBJECT_MT_hello”)
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * The menu label
     * @desc string, default '', (never None)
     */
    public set bl_label(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_label`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_owner_id(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_owner_id`, value)
    }

    /**
     * 
     * @desc string, default '*', (never None)
     */
    public set bl_translation_context(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_translation_context`, value)
    }

    /**
     * Draw UI elements into the menu UI layout
     * @desc void
     */
    public draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, {})
    }

    /**
     * Define these on the subclass:- preset_operator (string)- preset_subdir (string)
     * @desc void
     */
    public draw_preset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_preset`, {})
    }

    /**
     * Populate a menu from a list of paths.
     * @desc void
     */
    public path_menu(options: { searchpaths?: any[], operator?: string, prop_filepath?: string, props_default?: { [key: string]: any }, filter_ext?: Function, display_name?: Function }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.path_menu`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
