import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Property } from './Property'
import { EnumPropertyItem } from './EnumPropertyItem'

/**
 * EnumProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.EnumProperty.html
 */
export class EnumProperty {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Default value for this enum
     * @desc enum in ['DUMMY'], default 'DUMMY', (readonly)
     */
    public get default(): 'DUMMY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.default`)
    }

    /**
     * Default value for this enum
     * @desc enum set in {'DUMMY'}, default {}, (readonly)
     */
    public get default_flag(): ('DUMMY')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.default_flag`)
    }

    /**
     * Possible values for the property
     * @desc bpy_prop_collection of EnumPropertyItem, (readonly)
     */
    public get enum_items(): BlenderCollection<EnumPropertyItem> & Indexable<EnumPropertyItem> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.enum_items`, EnumPropertyItem)
    }

    /**
     * Possible values for the property (never calls optional dynamic generation of those)
     * @desc bpy_prop_collection of EnumPropertyItem, (readonly)
     */
    public get enum_items_static(): BlenderCollection<EnumPropertyItem> & Indexable<EnumPropertyItem> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.enum_items_static`, EnumPropertyItem)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
