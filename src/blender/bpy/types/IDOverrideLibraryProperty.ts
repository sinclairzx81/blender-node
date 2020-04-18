import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { IDOverrideLibraryPropertyOperation } from './IDOverrideLibraryPropertyOperation'

/**
 * IDOverrideLibraryProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.IDOverrideLibraryProperty.html
 */
export class IDOverrideLibraryProperty {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of overriding operations for a property
     * @desc bpy_prop_collection of IDOverrideLibraryPropertyOperation, (readonly)
     */
    public get operations(): BlenderCollection<IDOverrideLibraryPropertyOperation> & Indexable<IDOverrideLibraryPropertyOperation> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.operations`, IDOverrideLibraryPropertyOperation)
    }

    /**
     * RNA path leading to that property, from owning ID
     * @desc string, default '', (readonly, never None)
     */
    public get rna_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.rna_path`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
