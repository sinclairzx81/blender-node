import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Mask } from './Mask'

/**
 * BlendDataMasks
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataMasks.html
 */
export class BlendDataMasks {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    /**
     * Add a new mask with a given name to the main database
     * @desc Mask
     */
    public new(options: { name?: string }): Mask {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Mask)
    }

    /**
     * Remove a masks from the current blendfile.
     * @desc void
     */
    public remove(options: { mask?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
