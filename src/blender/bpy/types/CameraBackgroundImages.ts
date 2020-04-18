import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { CameraBackgroundImage } from './CameraBackgroundImage'

/**
 * CameraBackgroundImages
 * 
 * https://docs.blender.org/api/current/bpy.types.CameraBackgroundImages.html
 */
export class CameraBackgroundImages {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add new background image
     * @desc CameraBackgroundImage
     */
    public new(): CameraBackgroundImage {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, CameraBackgroundImage)
    }

    /**
     * Remove background image
     * @desc void
     */
    public remove(options: { image?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all background images
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
