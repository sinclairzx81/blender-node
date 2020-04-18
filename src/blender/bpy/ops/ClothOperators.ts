import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ClothOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.cloth.html
 */
export class ClothOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add or remove a Cloth Preset
     * @desc void
     */
    public preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.preset_add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
