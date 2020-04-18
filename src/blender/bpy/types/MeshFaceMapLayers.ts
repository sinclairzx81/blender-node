import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshFaceMapLayer } from './MeshFaceMapLayer'

/**
 * MeshFaceMapLayers
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshFaceMapLayers.html
 */
export class MeshFaceMapLayers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MeshFaceMapLayer, (readonly)
     */
    public get active(): MeshFaceMapLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MeshFaceMapLayer)
    }

    /**
     * Add a float property layer to Mesh
     * @desc MeshFaceMapLayer
     */
    public new(options: { name?: string }): MeshFaceMapLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshFaceMapLayer)
    }

    /**
     * Remove a face map layer
     * @desc void
     */
    public remove(options: { layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
