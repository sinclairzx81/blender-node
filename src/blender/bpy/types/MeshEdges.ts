import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshEdges
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshEdges.html
 */
export class MeshEdges {

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
