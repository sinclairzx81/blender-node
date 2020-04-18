import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CollectionChildren
 * 
 * https://docs.blender.org/api/current/bpy.types.CollectionChildren.html
 */
export class CollectionChildren {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add this collection as child of this collection
     * @desc void
     */
    public link(options: { child?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.link`, options)
    }

    /**
     * Remove this child collection from a collection
     * @desc void
     */
    public unlink(options: { child?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
