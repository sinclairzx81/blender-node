import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * bpy_prop_collection
 * 
 * https://docs.blender.org/api/current/bpy.types.bpy_prop_collection.html
 */
export class bpy_prop_collection {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Returns the index of a key in a collection or -1 when not found(matches Python’s string find function of the same name).
     * @desc int
     */
    public find(options: { key?: string }): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.find`, options)
    }

    /**
     * This is a function to give fast access to attributes within a collection.
     * @desc void
     */
    public foreach_get(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.foreach_get`, {})
    }

    /**
     * This is a function to give fast access to attributes within a collection.
     * @desc void
     */
    public foreach_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.foreach_set`, {})
    }

    /**
     * Returns the value of the item assigned to key or default when not found(matches Python’s dictionary function of the same name).
     * @desc void
     */
    public get(options: { key?: string, default?: undefined }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.get`, options)
    }

    /**
     * Return the identifiers of collection members(matching Python’s dict.items() functionality).
     * @desc list of tuples
     */
    public items(): any[] {
        return PythonInterop.callList(this.interop, `${this.accessor}.items`, {})
    }

    /**
     * Return the identifiers of collection members(matching Python’s dict.keys() functionality).
     * @desc list of strings
     */
    public keys(): any[] {
        return PythonInterop.callList(this.interop, `${this.accessor}.keys`, {})
    }

    /**
     * Return the values of collection(matching Python’s dict.values() functionality).
     * @desc list
     */
    public values(): any[] {
        return PythonInterop.callList(this.interop, `${this.accessor}.values`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
