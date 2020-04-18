import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PtcacheOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.ptcache.html
 */
export class PtcacheOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add new cache
     * @desc void
     */
    public add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, {})
    }

    /**
     * Bake physics
     * @desc void
     */
    public bake(options: { bake?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake`, options)
    }

    /**
     * Bake all physics
     * @desc void
     */
    public bake_all(options: { bake?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_all`, options)
    }

    /**
     * Bake from cache
     * @desc void
     */
    public bake_from_cache(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_from_cache`, {})
    }

    /**
     * Delete physics bake
     * @desc void
     */
    public free_bake(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_bake`, {})
    }

    /**
     * Delete all baked caches of all objects in the current scene
     * @desc void
     */
    public free_bake_all(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.free_bake_all`, {})
    }

    /**
     * Delete current cache
     * @desc void
     */
    public remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
