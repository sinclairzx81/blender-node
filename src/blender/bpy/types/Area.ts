import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Region } from './Region'
import { AreaSpaces } from './AreaSpaces'
import { Space } from './Space'

/**
 * Area
 * 
 * https://docs.blender.org/api/current/bpy.types.Area.html
 */
export class Area {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Area height
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get height(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.height`)
    }

    /**
     * Regions this area is subdivided in
     * @desc bpy_prop_collection of Region, (readonly)
     */
    public get regions(): BlenderCollection<Region> & Indexable<Region> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.regions`, Region)
    }

    /**
     * Spaces contained in this area, the first being the active space (NOTE: Useful for example to restore a previously used 3D view space in a certain area to get the old view orientation)
     * @desc AreaSpaces bpy_prop_collection of Space, (readonly)
     */
    public get spaces(): BlenderCollection<Space> & Indexable<Space> & AreaSpaces {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.spaces`, AreaSpaces, Space)
    }

    /**
     * Area width
     * @desc int in [0, 32767], default 0, (readonly)
     */
    public get width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.width`)
    }

    /**
     * The window relative vertical location of the area
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.x`)
    }

    /**
     * The window relative horizontal location of the area
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.y`)
    }

    /**
     * Show menus in the header
     * @desc boolean, default False
     */
    public get show_menus(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_menus`)
    }

    /**
     * Current editor type for this area
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'VIEW_3D'
     */
    public get type(): 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Current editor type for this area
     * @desc enum in [], default ''
     */
    public get ui_type(): string {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ui_type`)
    }

    /**
     * Show menus in the header
     * @desc boolean, default False
     */
    public set show_menus(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_menus`, value)
    }

    /**
     * Current editor type for this area
     * @desc enum in ['EMPTY', 'VIEW_3D', 'IMAGE_EDITOR', 'NODE_EDITOR', 'SEQUENCE_EDITOR', 'CLIP_EDITOR', 'DOPESHEET_EDITOR', 'GRAPH_EDITOR', 'NLA_EDITOR', 'TEXT_EDITOR', 'CONSOLE', 'INFO', 'TOPBAR', 'STATUSBAR', 'OUTLINER', 'PROPERTIES', 'FILE_BROWSER', 'PREFERENCES'], default 'VIEW_3D'
     */
    public set type(value: 'EMPTY' | 'VIEW_3D' | 'IMAGE_EDITOR' | 'NODE_EDITOR' | 'SEQUENCE_EDITOR' | 'CLIP_EDITOR' | 'DOPESHEET_EDITOR' | 'GRAPH_EDITOR' | 'NLA_EDITOR' | 'TEXT_EDITOR' | 'CONSOLE' | 'INFO' | 'TOPBAR' | 'STATUSBAR' | 'OUTLINER' | 'PROPERTIES' | 'FILE_BROWSER' | 'PREFERENCES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Current editor type for this area
     * @desc enum in [], default ''
     */
    public set ui_type(value: string) {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ui_type`, value)
    }

    /**
     * tag_redraw
     * @desc void
     */
    public tag_redraw(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag_redraw`, {})
    }

    /**
     * Set the header status text
     * @desc void
     */
    public header_text_set(options: { text?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.header_text_set`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
