import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshVertexStringProperty } from './MeshVertexStringProperty'

/**
 * MeshVertexStringPropertyLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshVertexStringPropertyLayer.html
 */
export class MeshVertexStringPropertyLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshVertexStringProperty, (readonly)
     */
    public get data(): BlenderCollection<MeshVertexStringProperty> & Indexable<MeshVertexStringProperty> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshVertexStringProperty)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
