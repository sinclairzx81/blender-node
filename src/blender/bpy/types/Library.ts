import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { PackedFile } from './PackedFile'

/**
 * Library
 * 
 * https://docs.blender.org/api/current/bpy.types.Library.html
 */
export class Library {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc PackedFile, (readonly)
     */
    public get packed_file(): PackedFile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.packed_file`, PackedFile)
    }

    /**
     * 
     * @desc Library, (readonly)
     */
    public get parent(): Library {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, Library)
    }

    /**
     * Version of Blender the library .blend was saved with
     * @desc int array of 3 items in [0, inf], default (0, 0, 0), (readonly)
     */
    public get version(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.version`, 'number', 3)
    }

    /**
     * ID data blocks which use this library(readonly)
     * @desc void
     */
    public get users_id(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_id`)
    }

    /**
     * Path to the library .blend file
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Path to the library .blend file
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Reload this library and all its linked data-blocks
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
