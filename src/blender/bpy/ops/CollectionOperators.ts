import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * CollectionOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.collection.html
 */
export class CollectionOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Create an object collection from selected objects
     * @desc void
     */
    public create(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.create`, options)
    }

    /**
     * Add the object to an object collection that contains the active object
     * @desc void
     */
    public objects_add_active(options: { collection?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objects_add_active`, options)
    }

    /**
     * Remove selected objects from a collection
     * @desc void
     */
    public objects_remove(options: { collection?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objects_remove`, options)
    }

    /**
     * Remove the object from an object collection that contains the active object
     * @desc void
     */
    public objects_remove_active(options: { collection?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objects_remove_active`, options)
    }

    /**
     * Remove selected objects from all collections not used in a scene
     * @desc void
     */
    public objects_remove_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objects_remove_all`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
