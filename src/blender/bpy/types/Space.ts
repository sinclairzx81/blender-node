import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Space
 * 
 * https://docs.blender.org/api/current/bpy.types.Space.html
 */
export class Space {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Space data type
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'EMPTY', (readonly)
     */
    public get type(): 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_locked_time(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_locked_time`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_header(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_header`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_locked_time(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_locked_time`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_header(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_header`, value)
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
