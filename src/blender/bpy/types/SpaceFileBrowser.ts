import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { Operator } from './Operator'
import { FileBrowserFSMenuEntry } from './FileBrowserFSMenuEntry'
import { FileSelectParams } from './FileSelectParams'

/**
 * SpaceFileBrowser
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceFileBrowser.html
 */
export class SpaceFileBrowser {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Operator, (readonly)
     */
    public get active_operator(): Operator {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_operator`, Operator)
    }

    /**
     * User’s bookmarks
     * @desc bpy_prop_collection of FileBrowserFSMenuEntry, (readonly)
     */
    public get bookmarks(): BlenderCollection<FileBrowserFSMenuEntry> & Indexable<FileBrowserFSMenuEntry> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.bookmarks`, FileBrowserFSMenuEntry)
    }

    /**
     * 
     * @desc Operator, (readonly)
     */
    public get operator(): Operator {
        return PythonInterop.getClass(this.interop, `${this.accessor}.operator`, Operator)
    }

    /**
     * Parameters and Settings for the Filebrowser
     * @desc FileSelectParams, (readonly)
     */
    public get params(): FileSelectParams {
        return PythonInterop.getClass(this.interop, `${this.accessor}.params`, FileSelectParams)
    }

    /**
     * 
     * @desc bpy_prop_collection of FileBrowserFSMenuEntry, (readonly)
     */
    public get recent_folders(): BlenderCollection<FileBrowserFSMenuEntry> & Indexable<FileBrowserFSMenuEntry> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.recent_folders`, FileBrowserFSMenuEntry)
    }

    /**
     * System’s bookmarks
     * @desc bpy_prop_collection of FileBrowserFSMenuEntry, (readonly)
     */
    public get system_bookmarks(): BlenderCollection<FileBrowserFSMenuEntry> & Indexable<FileBrowserFSMenuEntry> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.system_bookmarks`, FileBrowserFSMenuEntry)
    }

    /**
     * System’s folders (usually root, available hard drives, etc)
     * @desc bpy_prop_collection of FileBrowserFSMenuEntry, (readonly)
     */
    public get system_folders(): BlenderCollection<FileBrowserFSMenuEntry> & Indexable<FileBrowserFSMenuEntry> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.system_folders`, FileBrowserFSMenuEntry)
    }

    /**
     * Index of active bookmark (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public get bookmarks_active(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bookmarks_active`)
    }

    /**
     * Index of active recent folder (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public get recent_folders_active(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.recent_folders_active`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_toolbar(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_toolbar`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Index of active system bookmark (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public get system_bookmarks_active(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.system_bookmarks_active`)
    }

    /**
     * Index of active system folder (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public get system_folders_active(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.system_folders_active`)
    }

    /**
     * Index of active bookmark (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public set bookmarks_active(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.bookmarks_active`, value)
    }

    /**
     * Index of active recent folder (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public set recent_folders_active(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.recent_folders_active`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_toolbar(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_toolbar`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Index of active system bookmark (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public set system_bookmarks_active(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.system_bookmarks_active`, value)
    }

    /**
     * Index of active system folder (-1 if none)
     * @desc int in [-32768, 32767], default -1
     */
    public set system_folders_active(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.system_folders_active`, value)
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
