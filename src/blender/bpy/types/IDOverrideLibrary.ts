import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { IDOverrideLibraryProperty } from './IDOverrideLibraryProperty'
import { ID } from './ID'

/**
 * IDOverrideLibrary
 * 
 * https://docs.blender.org/api/current/bpy.types.IDOverrideLibrary.html
 */
export class IDOverrideLibrary {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * List of overridden properties
     * @desc bpy_prop_collection of IDOverrideLibraryProperty, (readonly)
     */
    public get properties(): BlenderCollection<IDOverrideLibraryProperty> & Indexable<IDOverrideLibraryProperty> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.properties`, IDOverrideLibraryProperty)
    }

    /**
     * Linked ID used as reference by this override
     * @desc ID, (readonly)
     */
    public get reference(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.reference`, ID)
    }

    /**
     * Automatically generate overriding operations by detecting changes in properties
     * @desc boolean, default True
     */
    public get auto_generate(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.auto_generate`)
    }

    /**
     * Automatically generate overriding operations by detecting changes in properties
     * @desc boolean, default True
     */
    public set auto_generate(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.auto_generate`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
