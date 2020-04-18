import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { PropertyGroup } from './PropertyGroup'
import { ID } from './ID'

/**
 * PropertyGroupItem
 * 
 * https://docs.blender.org/api/current/bpy.types.PropertyGroupItem.html
 */
export class PropertyGroupItem {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of PropertyGroup, (readonly)
     */
    public get collection(): BlenderCollection<PropertyGroup> & Indexable<PropertyGroup> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.collection`, PropertyGroup)
    }

    /**
     * 
     * @desc PropertyGroup, (readonly)
     */
    public get group(): PropertyGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.group`, PropertyGroup)
    }

    /**
     * 
     * @desc ID, (readonly)
     */
    public get id(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.id`, ID)
    }

    /**
     * 
     * @desc bpy_prop_collection of PropertyGroup, (readonly)
     */
    public get idp_array(): BlenderCollection<PropertyGroup> & Indexable<PropertyGroup> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.idp_array`, PropertyGroup)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get double(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.double`)
    }

    /**
     * 
     * @desc float array of 1 items in [-inf, inf], default (0.0)
     */
    public get double_array(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.double_array`, 'number', 1)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get float(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.float`)
    }

    /**
     * 
     * @desc float array of 1 items in [-inf, inf], default (0.0)
     */
    public get float_array(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.float_array`, 'number', 1)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public get int(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.int`)
    }

    /**
     * 
     * @desc int array of 1 items in [-inf, inf], default (0,)
     */
    public get int_array(): [number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.int_array`, 'number', 1)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get string(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.string`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set double(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.double`, value)
    }

    /**
     * 
     * @desc float array of 1 items in [-inf, inf], default (0.0)
     */
    public set double_array(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.double_array`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set float(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.float`, value)
    }

    /**
     * 
     * @desc float array of 1 items in [-inf, inf], default (0.0)
     */
    public set float_array(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.float_array`, value)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0
     */
    public set int(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.int`, value)
    }

    /**
     * 
     * @desc int array of 1 items in [-inf, inf], default (0,)
     */
    public set int_array(value: [number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.int_array`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set string(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.string`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
