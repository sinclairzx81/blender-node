import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { PackedFile } from './PackedFile'

/**
 * VectorFont
 * 
 * https://docs.blender.org/api/current/bpy.types.VectorFont.html
 */
export class VectorFont {

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
     * Pack the font into the current blend file
     * @desc void
     */
    public pack(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack`, {})
    }

    /**
     * Unpack the font to the samples filename
     * @desc void
     */
    public unpack(options: { method?: 'REMOVE' | 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
