import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CachefileOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.cachefile.html
 */
export class CachefileOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load a cache file
     * @desc void
     */
    public open(options: { filepath?: string, hide_props_region?: boolean, check_existing?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.open`, options)
    }

    /**
     * Update objects paths list with new data from the archive
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
