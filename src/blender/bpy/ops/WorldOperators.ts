import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * WorldOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.world.html
 */
export class WorldOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Create a new world Data-Block
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
