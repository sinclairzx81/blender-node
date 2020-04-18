import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshFaceMap } from './MeshFaceMap'

/**
 * MeshFaceMapLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshFaceMapLayer.html
 */
export class MeshFaceMapLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshFaceMap, (readonly)
     */
    public get data(): BlenderCollection<MeshFaceMap> & Indexable<MeshFaceMap> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshFaceMap)
    }

    /**
     * Name of face-map layer
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Name of face-map layer
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
