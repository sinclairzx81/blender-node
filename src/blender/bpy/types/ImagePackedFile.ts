import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { PackedFile } from './PackedFile'

/**
 * ImagePackedFile
 * 
 * https://docs.blender.org/api/current/bpy.types.ImagePackedFile.html
 */
export class ImagePackedFile {

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
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Save the packed file to its filepath
     * @desc void
     */
    public save(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
