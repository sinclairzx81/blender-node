import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { OperatorProperties } from './OperatorProperties'
import { GizmoGroupProperties } from './GizmoGroupProperties'

/**
 * WorkSpaceTool
 * 
 * https://docs.blender.org/api/current/bpy.types.WorkSpaceTool.html
 */
export class WorkSpaceTool {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_datablock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_datablock`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * 
     * @desc enum in ['DEFAULT'], default 'DEFAULT', (readonly)
     */
    public get mode(): 'DEFAULT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * 
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'EMPTY', (readonly)
     */
    public get space_type(): 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space_type`)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get widget(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.widget`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.idname`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get idname_fallback(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.idname_fallback`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.idname`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set idname_fallback(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.idname_fallback`, value)
    }

    /**
     * Set the tool settings
     * @desc void
     */
    public setup(options: { idname?: string, cursor?: 'DEFAULT' | 'NONE' | 'WAIT' | 'CROSSHAIR' | 'MOVE_X' | 'MOVE_Y' | 'KNIFE' | 'TEXT' | 'PAINT_BRUSH' | 'PAINT_CROSS' | 'DOT' | 'ERASER' | 'HAND' | 'SCROLL_X' | 'SCROLL_Y' | 'SCROLL_XY' | 'EYEDROPPER', keymap?: string, gizmo_group?: string, data_block?: string, operator?: string, index?: number, idname_fallback?: string, keymap_fallback?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.setup`, options)
    }

    /**
     * operator_properties
     * @desc OperatorProperties, (never None)
     */
    public operator_properties(): OperatorProperties {
        return PythonInterop.callClass(this.interop, `${this.accessor}.operator_properties`, {}, OperatorProperties)
    }

    /**
     * gizmo_group_properties
     * @desc GizmoGroupProperties, (never None)
     */
    public gizmo_group_properties(): GizmoGroupProperties {
        return PythonInterop.callClass(this.interop, `${this.accessor}.gizmo_group_properties`, {}, GizmoGroupProperties)
    }

    /**
     * refresh_from_context
     * @desc void
     */
    public refresh_from_context(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh_from_context`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
