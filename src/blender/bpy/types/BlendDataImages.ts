import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Image } from './Image'

/**
 * BlendDataImages
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataImages.html
 */
export class BlendDataImages {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new image to the main database
     * @desc Image
     */
    public new(options: { name?: string, width?: number, height?: number, alpha?: boolean, float_buffer?: boolean, stereo3d?: boolean, is_data?: boolean, tiled?: boolean }): Image {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Image)
    }

    /**
     * Load a new image into the main database
     * @desc Image
     */
    public load(options: { filepath?: string, check_existing?: boolean }): Image {
        return PythonInterop.callClass(this.interop, `${this.accessor}.load`, options, Image)
    }

    /**
     * Remove an image from the current blendfile
     * @desc void
     */
    public remove(options: { image?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
