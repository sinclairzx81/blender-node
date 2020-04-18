import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshPolygonStringProperty } from './MeshPolygonStringProperty'

/**
 * MeshPolygonStringPropertyLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshPolygonStringPropertyLayer.html
 */
export class MeshPolygonStringPropertyLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshPolygonStringProperty, (readonly)
     */
    public get data(): BlenderCollection<MeshPolygonStringProperty> & Indexable<MeshPolygonStringProperty> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshPolygonStringProperty)
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
