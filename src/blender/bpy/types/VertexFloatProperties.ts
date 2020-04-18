import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshVertexFloatPropertyLayer } from './MeshVertexFloatPropertyLayer'

/**
 * VertexFloatProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexFloatProperties.html
 */
export class VertexFloatProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a float property layer to Mesh
     * @desc MeshVertexFloatPropertyLayer
     */
    public new(options: { name?: string }): MeshVertexFloatPropertyLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshVertexFloatPropertyLayer)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
