import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieClip } from './MovieClip'

/**
 * BlendDataMovieClips
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataMovieClips.html
 */
export class BlendDataMovieClips {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    /**
     * Remove a movie clip from the current blendfile.
     * @desc void
     */
    public remove(options: { clip?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Add a new movie clip to the main database from a file (while check_existing is disabled for consistency with other load functions, behavior with multiple movie-clips using the same file may incorrectly generate proxies)
     * @desc MovieClip
     */
    public load(options: { filepath?: string, check_existing?: boolean }): MovieClip {
        return PythonInterop.callClass(this.interop, `${this.accessor}.load`, options, MovieClip)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
