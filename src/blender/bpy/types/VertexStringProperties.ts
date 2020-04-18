import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshVertexStringPropertyLayer } from './MeshVertexStringPropertyLayer'

/**
 * VertexStringProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexStringProperties.html
 */
export class VertexStringProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a string property layer to Mesh
     * @desc MeshVertexStringPropertyLayer
     */
    public new(options: { name?: string }): MeshVertexStringPropertyLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshVertexStringPropertyLayer)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
