import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FileBrowserFSMenuEntry
 * 
 * https://docs.blender.org/api/current/bpy.types.FileBrowserFSMenuEntry.html
 */
export class FileBrowserFSMenuEntry {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Whether this path is currently reachable
     * @desc boolean, default False, (readonly)
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * Whether this path is saved in bookmarks, or generated from OS
     * @desc boolean, default False, (readonly)
     */
    public get use_save(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_save`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get icon(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.icon`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set icon(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.icon`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.path`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
