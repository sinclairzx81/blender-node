import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SoundOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.sound.html
 */
export class SoundOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Update the audio animation cache
     * @desc void
     */
    public bake_animation(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_animation`, {})
    }

    /**
     * Mix the scene’s audio to a sound file
     * @desc void
     */
    public mixdown(options: { filepath?: string, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', accuracy?: number, container?: 'AC3' | 'FLAC' | 'MATROSKA' | 'MP2' | 'MP3' | 'OGG' | 'WAV', codec?: 'AAC' | 'AC3' | 'FLAC' | 'MP2' | 'MP3' | 'PCM' | 'VORBIS', format?: 'U8' | 'S16' | 'S24' | 'S32' | 'F32' | 'F64', bitrate?: number, split_channels?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mixdown`, options)
    }

    /**
     * Load a sound file
     * @desc void
     */
    public open(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', cache?: boolean, mono?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open`, options)
    }

    /**
     * Load a sound file as mono
     * @desc void
     */
    public open_mono(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, show_multiview?: boolean, use_multiview?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE', cache?: boolean, mono?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open_mono`, options)
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
    public unpack(options: { method?: 'REMOVE' | 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL', id?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack`, options)
    }

    /**
     * Update animation flags
     * @desc void
     */
    public update_animation_flags(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_animation_flags`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
