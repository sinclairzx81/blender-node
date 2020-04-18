import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshSkinVertex } from './MeshSkinVertex'

/**
 * MeshSkinVertexLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshSkinVertexLayer.html
 */
export class MeshSkinVertexLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshSkinVertex, (readonly)
     */
    public get data(): BlenderCollection<MeshSkinVertex> & Indexable<MeshSkinVertex> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshSkinVertex)
    }

    /**
     * Name of skin layer
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Name of skin layer
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
