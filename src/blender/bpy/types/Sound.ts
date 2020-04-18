import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { PackedFile } from './PackedFile'

/**
 * Sound
 * 
 * https://docs.blender.org/api/current/bpy.types.Sound.html
 */
export class Sound {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc PackedFile, (readonly)
     */
    public get packed_file(): PackedFile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.packed_file`, PackedFile)
    }

    /**
     * The aud.Factory object of the sound.(readonly)
     * @desc void
     */
    public get factory(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.factory`)
    }

    /**
     * Sound sample file used by this Sound data-block
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * The sound file is decoded and loaded into RAM
     * @desc boolean, default False
     */
    public get use_memory_cache(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_memory_cache`)
    }

    /**
     * If the file contains multiple audio channels they are rendered to a single one
     * @desc boolean, default False
     */
    public get use_mono(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mono`)
    }

    /**
     * Sound sample file used by this Sound data-block
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * The sound file is decoded and loaded into RAM
     * @desc boolean, default False
     */
    public set use_memory_cache(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_memory_cache`, value)
    }

    /**
     * If the file contains multiple audio channels they are rendered to a single one
     * @desc boolean, default False
     */
    public set use_mono(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mono`, value)
    }

    /**
     * Pack the sound into the current blend file
     * @desc void
     */
    public pack(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack`, {})
    }

    /**
     * Unpack the sound to the samples filename
     * @desc void
     */
    public unpack(options: { method?: 'REMOVE' | 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
