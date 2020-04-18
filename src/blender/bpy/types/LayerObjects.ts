import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * LayerObjects
 * 
 * https://docs.blender.org/api/current/bpy.types.LayerObjects.html
 */
export class LayerObjects {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * All the selected objects of this layer
     * @desc bpy_prop_collection of Object, (readonly)
     */
    public get selected(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.selected`, BlenderObject)
    }

    /**
     * Active object for this layer
     * @desc Object
     */
    public get active(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, BlenderObject)
    }

    /**
     * Active object for this layer
     * @desc Object
     */
    public set active(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
