import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CollectionObjects
 * 
 * https://docs.blender.org/api/current/bpy.types.CollectionObjects.html
 */
export class CollectionObjects {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add this object to a collection
     * @desc void
     */
    public link(options: { object?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link`, options)
    }

    /**
     * Remove this object from a collection
     * @desc void
     */
    public unlink(options: { object?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
