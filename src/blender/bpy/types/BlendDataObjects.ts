import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * BlendDataObjects
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataObjects.html
 */
export class BlendDataObjects {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new object to the main database
     * @desc Object
     */
    public new(options: { name?: string, object_data?: unknown }): BlenderObject {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, BlenderObject)
    }

    /**
     * Remove a object from the current blendfile
     * @desc void
     */
    public remove(options: { object?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
