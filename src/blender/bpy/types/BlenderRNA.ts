import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Struct } from './Struct'

/**
 * BlenderRNA
 * 
 * https://docs.blender.org/api/current/bpy.types.BlenderRNA.html
 */
export class BlenderRNA {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of Struct, (readonly)
     */
    public get structs(): BlenderCollection<Struct> & Indexable<Struct> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.structs`, Struct)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
