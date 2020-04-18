import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Collection } from './Collection'

/**
 * BlendDataCollections
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataCollections.html
 */
export class BlendDataCollections {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new collection to the main database
     * @desc Collection
     */
    public new(options: { name?: string }): Collection {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Collection)
    }

    /**
     * Remove a collection from the current blendfile
     * @desc void
     */
    public remove(options: { collection?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
