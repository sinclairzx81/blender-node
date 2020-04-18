import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Function } from './Function'
import { StringProperty } from './StringProperty'
import { Property } from './Property'
import { EnumPropertyItem } from './EnumPropertyItem'

/**
 * Struct
 * 
 * https://docs.blender.org/api/current/bpy.types.Struct.html
 */
export class Struct {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Struct definition this is derived from
     * @desc Struct, (readonly)
     */
    public get base(): Struct {
        return PythonInterop.getClass(this.interop, `${this.accessor}.base`, Struct)
    }

    /**
     * Description of the Struct’s purpose
     * @desc string, default '', (readonly, never None)
     */
    public get description(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.description`)
    }

    /**
     * 
     * @desc bpy_prop_collection of Function, (readonly)
     */
    public get functions(): BlenderCollection<Function> & Indexable<Function> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.functions`, Function)
    }

    /**
     * Unique name used in the code and scripting
     * @desc string, default '', (readonly, never None)
     */
    public get identifier(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.identifier`)
    }

    /**
     * Human readable name
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Property that gives the name of the struct
     * @desc StringProperty, (readonly)
     */
    public get name_property(): StringProperty {
        return PythonInterop.getClass(this.interop, `${this.accessor}.name_property`, StringProperty)
    }

    /**
     * Struct in which this struct is always nested, and to which it logically belongs
     * @desc Struct, (readonly)
     */
    public get nested(): Struct {
        return PythonInterop.getClass(this.interop, `${this.accessor}.nested`, Struct)
    }

    /**
     * Properties in the struct
     * @desc bpy_prop_collection of Property, (readonly)
     */
    public get properties(): BlenderCollection<Property> & Indexable<Property> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.properties`, Property)
    }

    /**
     * Tags that properties can use to influence behavior
     * @desc bpy_prop_collection of EnumPropertyItem, (readonly)
     */
    public get property_tags(): BlenderCollection<EnumPropertyItem> & Indexable<EnumPropertyItem> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.property_tags`, EnumPropertyItem)
    }

    /**
     * Translation context of the struct’s name
     * @desc string, default '', (readonly, never None)
     */
    public get translation_context(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.translation_context`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
