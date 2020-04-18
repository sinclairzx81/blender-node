import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Gizmos } from './Gizmos'
import { Gizmo } from './Gizmo'

/**
 * GizmoGroup
 * 
 * https://docs.blender.org/api/current/bpy.types.GizmoGroup.html
 */
export class GizmoGroup {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of gizmos in the Gizmo Map
     * @desc Gizmos bpy_prop_collection of Gizmo, (readonly)
     */
    public get gizmos(): BlenderCollection<Gizmo> & Indexable<Gizmo> & Gizmos {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.gizmos`, Gizmos, Gizmo)
    }

    /**
     * GizmoGroup has a set of reports (warnings and errors) from last execution
     * @desc boolean, default False, (readonly)
     */
    public get has_reports(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_reports`)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
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
     * @desc enum set in {'3D', 'SCALE', 'DEPTH_3D', 'SELECT', 'PERSISTENT', 'SHOW_MODAL_ALL', 'TOOL_INIT'}, default {'3D'}
     */
    public get bl_options(): ('3D' | 'SCALE' | 'DEPTH_3D' | 'SELECT' | 'PERSISTENT' | 'SHOW_MODAL_ALL' | 'TOOL_INIT')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.bl_options`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_owner_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_owner_id`)
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
     * @desc enum set in {'3D', 'SCALE', 'DEPTH_3D', 'SELECT', 'PERSISTENT', 'SHOW_MODAL_ALL', 'TOOL_INIT'}, default {'3D'}
     */
    public set bl_options(value: ('3D' | 'SCALE' | 'DEPTH_3D' | 'SELECT' | 'PERSISTENT' | 'SHOW_MODAL_ALL' | 'TOOL_INIT')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.bl_options`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_owner_id(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_owner_id`, value)
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
     * Create gizmos function for the gizmo group
     * @desc void
     */
    public setup(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.setup`, {})
    }

    /**
     * Refresh data (called on common state changes such as selection)
     * @desc void
     */
    public refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh`, {})
    }

    /**
     * Run before each redraw
     * @desc void
     */
    public draw_prepare(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_prepare`, {})
    }

    /**
     * Run before invoke
     * @desc void
     */
    public invoke_prepare(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.invoke_prepare`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
