import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ButtonsOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.buttons.html
 */
export class ButtonsOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Display properties editor context_menu
     * @desc void
     */
    public context_menu(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.context_menu`, {})
    }

    /**
     * Open a directory browser, Hold Shift to open the file, Alt to browse containing directory
     * @desc void
     */
    public directory_browse(options: { directory?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.directory_browse`, options)
    }

    /**
     * Open a file browser, Hold Shift to open the file, Alt to browse containing directory
     * @desc void
     */
    public file_browse(options: { filepath?: string, hide_props_region?: boolean, filter_blender?: boolean, filter_backup?: boolean, filter_image?: boolean, filter_movie?: boolean, filter_python?: boolean, filter_font?: boolean, filter_sound?: boolean, filter_text?: boolean, filter_archive?: boolean, filter_btx?: boolean, filter_collada?: boolean, filter_alembic?: boolean, filter_usd?: boolean, filter_folder?: boolean, filter_blenlib?: boolean, filemode?: number, relative_path?: boolean, display_type?: 'DEFAULT' | 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL', sort_method?: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.file_browse`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
