import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshPolygonFloatPropertyLayer } from './MeshPolygonFloatPropertyLayer'

/**
 * PolygonFloatProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.PolygonFloatProperties.html
 */
export class PolygonFloatProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a float property layer to Mesh
     * @desc MeshPolygonFloatPropertyLayer
     */
    public new(options: { name?: string }): MeshPolygonFloatPropertyLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshPolygonFloatPropertyLayer)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
