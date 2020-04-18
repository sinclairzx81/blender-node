import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MaterialOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.material.html
 */
export class MaterialOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Copy the material settings and nodes
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Add a new material
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Paste the material settings and nodes
     * @desc void
     */
    public paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
