import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CameraOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.camera.html
 */
export class CameraOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add or remove a Camera Preset
     * @desc void
     */
    public preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean, use_focal_length?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.preset_add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
