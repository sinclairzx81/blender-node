import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UILayout } from './UILayout'

/**
 * Panel
 * 
 * https://docs.blender.org/api/current/bpy.types.Panel.html
 */
export class Panel {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_popover(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_popover`)
    }

    /**
     * Defines the structure of the panel in the UI
     * @desc UILayout, (readonly)
     */
    public get layout(): UILayout {
        return PythonInterop.getClass(this.interop, `${this.accessor}.layout`, UILayout)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_category(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_category`)
    }

    /**
     * The context in which the panel belongs to. (TODO: explain the possible combinations bl_context/bl_region_type/bl_space_type)
     * @desc string, default '', (never None)
     */
    public get bl_context(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_context`)
    }

    /**
     * If this is set, the panel gets a custom ID, otherwise it takes the name of the class used to define the panel. For example, if the class name is “OBJECT_PT_hello”, and bl_idname is not set by the script, then bl_idname = “OBJECT_PT_hello”
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * The panel label, shows up in the panel header at the right of the triangle used to collapse the panel
     * @desc string, default '', (never None)
     */
    public get bl_label(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_label`)
    }

    /**
     * Options for this panel type
     * @desc enum set in {'DEFAULT_CLOSED', 'HIDE_HEADER'}, default {'DEFAULT_CLOSED'}
     */
    public get bl_options(): ('DEFAULT_CLOSED' | 'HIDE_HEADER')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.bl_options`)
    }

    /**
     * Panels with lower numbers are default ordered before panels with higher numbers
     * @desc int in [0, inf], default 0
     */
    public get bl_order(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bl_order`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_owner_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_owner_id`)
    }

    /**
     * If this is set, the panel becomes a sub-panel
     * @desc string, default '', (never None)
     */
    public get bl_parent_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_parent_id`)
    }

    /**
     * The region where the panel is going to be used in
     * @desc enum in ['WINDOW', 'HEADER', 'CHANNELS', 'TEMPORARY', 'UI', 'TOOLS', 'TOOL_PROPS', 'PREVIEW', 'HUD', 'NAVIGATION_BAR', 'EXECUTE', 'FOOTER', 'TOOL_HEADER'], default 'WINDOW'
     */
    public get bl_region_type(): 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bl_region_type`)
    }

    /**
     * The space where the panel is going to be used in
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'EMPTY'
     */
    public get bl_space_type(): 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.bl_space_type`)
    }

    /**
     * 
     * @desc string, default '*', (never None)
     */
    public get bl_translation_context(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_translation_context`)
    }

    /**
     * When set, defines popup panel width
     * @desc int in [0, inf], default 0
     */
    public get bl_ui_units_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bl_ui_units_x`)
    }

    /**
     * XXX todo
     * @desc string, default '', (never None)
     */
    public get text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.text`)
    }

    /**
     * Show the panel on all tabs
     * @desc boolean, default False
     */
    public get use_pin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pin`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_category(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_category`, value)
    }

    /**
     * The context in which the panel belongs to. (TODO: explain the possible combinations bl_context/bl_region_type/bl_space_type)
     * @desc string, default '', (never None)
     */
    public set bl_context(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_context`, value)
    }

    /**
     * If this is set, the panel gets a custom ID, otherwise it takes the name of the class used to define the panel. For example, if the class name is “OBJECT_PT_hello”, and bl_idname is not set by the script, then bl_idname = “OBJECT_PT_hello”
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * The panel label, shows up in the panel header at the right of the triangle used to collapse the panel
     * @desc string, default '', (never None)
     */
    public set bl_label(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_label`, value)
    }

    /**
     * Options for this panel type
     * @desc enum set in {'DEFAULT_CLOSED', 'HIDE_HEADER'}, default {'DEFAULT_CLOSED'}
     */
    public set bl_options(value: ('DEFAULT_CLOSED' | 'HIDE_HEADER')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.bl_options`, value)
    }

    /**
     * Panels with lower numbers are default ordered before panels with higher numbers
     * @desc int in [0, inf], default 0
     */
    public set bl_order(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bl_order`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_owner_id(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_owner_id`, value)
    }

    /**
     * If this is set, the panel becomes a sub-panel
     * @desc string, default '', (never None)
     */
    public set bl_parent_id(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_parent_id`, value)
    }

    /**
     * The region where the panel is going to be used in
     * @desc enum in ['WINDOW', 'HEADER', 'CHANNELS', 'TEMPORARY', 'UI', 'TOOLS', 'TOOL_PROPS', 'PREVIEW', 'HUD', 'NAVIGATION_BAR', 'EXECUTE', 'FOOTER', 'TOOL_HEADER'], default 'WINDOW'
     */
    public set bl_region_type(value: 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bl_region_type`, value)
    }

    /**
     * The space where the panel is going to be used in
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'EMPTY'
     */
    public set bl_space_type(value: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.bl_space_type`, value)
    }

    /**
     * 
     * @desc string, default '*', (never None)
     */
    public set bl_translation_context(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_translation_context`, value)
    }

    /**
     * When set, defines popup panel width
     * @desc int in [0, inf], default 0
     */
    public set bl_ui_units_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bl_ui_units_x`, value)
    }

    /**
     * XXX todo
     * @desc string, default '', (never None)
     */
    public set text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.text`, value)
    }

    /**
     * Show the panel on all tabs
     * @desc boolean, default False
     */
    public set use_pin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pin`, value)
    }

    /**
     * Draw UI elements into the panel UI layout
     * @desc void
     */
    public draw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, {})
    }

    /**
     * Draw UI elements into the panel’s header UI layout
     * @desc void
     */
    public draw_header(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_header`, {})
    }

    /**
     * Draw UI elements for presets in the panel’s header
     * @desc void
     */
    public draw_header_preset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_header_preset`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
