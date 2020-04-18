import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshVertices
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshVertices.html
 */
export class MeshVertices {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * add
     * @desc void
     */
    public add(options: { count?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
