import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyMapItems } from './KeyMapItems'
import { KeyMapItem } from './KeyMapItem'

/**
 * KeyMap
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyMap.html
 */
export class KeyMap {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Indicates that a keymap is used for translate modal events for an operator
     * @desc boolean, default False, (readonly)
     */
    public get is_modal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_modal`)
    }

    /**
     * Items in the keymap, linking an operator to an input event
     * @desc KeyMapItems bpy_prop_collection of KeyMapItem, (readonly)
     */
    public get keymap_items(): BlenderCollection<KeyMapItem> & Indexable<KeyMapItem> & KeyMapItems {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.keymap_items`, KeyMapItems, KeyMapItem)
    }

    /**
     * Name of the key map
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Optional region type keymap is associated with
     * @desc enum in ['WINDOW', 'HEADER', 'CHANNELS', 'TEMPORARY', 'UI', 'TOOLS', 'TOOL_PROPS', 'PREVIEW', 'HUD', 'NAVIGATION_BAR', 'EXECUTE', 'FOOTER', 'TOOL_HEADER'], default 'WINDOW', (readonly)
     */
    public get region_type(): 'WINDOW' | 'HEADER' | 'CHANNELS' | 'TEMPORARY' | 'UI' | 'TOOLS' | 'TOOL_PROPS' | 'PREVIEW' | 'HUD' | 'NAVIGATION_BAR' | 'EXECUTE' | 'FOOTER' | 'TOOL_HEADER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.region_type`)
    }

    /**
     * Optional space type keymap is associated with
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'EMPTY', (readonly)
     */
    public get space_type(): 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space_type`)
    }

    /**
     * Internal owner
     * @desc string, default '', (never None)
     */
    public get bl_owner_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_owner_id`)
    }

    /**
     * Keymap is defined by the user
     * @desc boolean, default False
     */
    public get is_user_modified(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_user_modified`)
    }

    /**
     * Children expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded_children`)
    }

    /**
     * Expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded_items(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded_items`)
    }

    /**
     * Internal owner
     * @desc string, default '', (never None)
     */
    public set bl_owner_id(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_owner_id`, value)
    }

    /**
     * Keymap is defined by the user
     * @desc boolean, default False
     */
    public set is_user_modified(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_user_modified`, value)
    }

    /**
     * Children expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded_children`, value)
    }

    /**
     * Expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded_items(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded_items`, value)
    }

    /**
     * active
     * @desc KeyMap
     */
    public active(): KeyMap {
        return PythonInterop.callClass(this.interop, `${this.accessor}.active`, {}, KeyMap)
    }

    /**
     * restore_to_default
     * @desc void
     */
    public restore_to_default(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.restore_to_default`, {})
    }

    /**
     * restore_item_to_default
     * @desc void
     */
    public restore_item_to_default(options: { item?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.restore_item_to_default`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
