import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyMap } from './KeyMap'

/**
 * KeyMaps
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyMaps.html
 */
export class KeyMaps {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * new
     * @desc KeyMap
     */
    public new(options: { name?: string, space_type?: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES', region_type?: 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER', modal?: boolean, tool?: boolean }): KeyMap {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, KeyMap)
    }

    /**
     * remove
     * @desc void
     */
    public remove(options: { keymap?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * find
     * @desc KeyMap
     */
    public find(options: { name?: string, space_type?: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES', region_type?: 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER' }): KeyMap {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find`, options, KeyMap)
    }

    /**
     * find_modal
     * @desc KeyMap
     */
    public find_modal(options: { name?: string }): KeyMap {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_modal`, options, KeyMap)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
