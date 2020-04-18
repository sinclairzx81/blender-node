import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Camera } from './Camera'

/**
 * BlendDataCameras
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataCameras.html
 */
export class BlendDataCameras {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new camera to the main database
     * @desc Camera
     */
    public new(options: { name?: string }): Camera {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Camera)
    }

    /**
     * Remove a camera from the current blendfile
     * @desc void
     */
    public remove(options: { camera?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
