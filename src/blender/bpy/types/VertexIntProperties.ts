import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshVertexIntPropertyLayer } from './MeshVertexIntPropertyLayer'

/**
 * VertexIntProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexIntProperties.html
 */
export class VertexIntProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a integer property layer to Mesh
     * @desc MeshVertexIntPropertyLayer
     */
    public new(options: { name?: string }): MeshVertexIntPropertyLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshVertexIntPropertyLayer)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
