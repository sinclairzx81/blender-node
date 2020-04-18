import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshPolygonIntPropertyLayer } from './MeshPolygonIntPropertyLayer'

/**
 * PolygonIntProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.PolygonIntProperties.html
 */
export class PolygonIntProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a integer property layer to Mesh
     * @desc MeshPolygonIntPropertyLayer
     */
    public new(options: { name?: string }): MeshPolygonIntPropertyLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshPolygonIntPropertyLayer)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
