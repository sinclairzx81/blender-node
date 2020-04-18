import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshPaintMaskProperty } from './MeshPaintMaskProperty'

/**
 * MeshPaintMaskLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshPaintMaskLayer.html
 */
export class MeshPaintMaskLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshPaintMaskProperty, (readonly)
     */
    public get data(): BlenderCollection<MeshPaintMaskProperty> & Indexable<MeshPaintMaskProperty> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshPaintMaskProperty)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
