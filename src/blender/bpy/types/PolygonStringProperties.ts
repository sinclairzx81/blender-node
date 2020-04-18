import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshPolygonStringPropertyLayer } from './MeshPolygonStringPropertyLayer'

/**
 * PolygonStringProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.PolygonStringProperties.html
 */
export class PolygonStringProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a string property layer to Mesh
     * @desc MeshPolygonStringPropertyLayer
     */
    public new(options: { name?: string }): MeshPolygonStringPropertyLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshPolygonStringPropertyLayer)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
