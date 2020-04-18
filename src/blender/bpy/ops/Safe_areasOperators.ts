import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Safe_areasOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.safe_areas.html
 */
export class Safe_areasOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add or remove a Safe Areas Preset
     * @desc void
     */
    public preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.preset_add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
