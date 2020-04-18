import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FCurve } from './FCurve'

/**
 * bpy_struct
 * 
 * https://docs.blender.org/api/current/bpy.types.bpy_struct.html
 */
export class bpy_struct {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The bpy.types.ID object this datablock is from or None, (not available for all data types)
     * @desc void
     */
    public get id_data(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.id_data`)
    }

    /**
     * The bpy.types.ID object this datablock is from or None, (not available for all data types)
     * @desc void
     */
    public set id_data(value: void) {
        PythonInterop.setVoid(this.interop, `${this.accessor}.id_data`, value)
    }

    /**
     * Returns the memory address which holds a pointer to Blender’s internal data
     * @desc int
     */
    public as_pointer(): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.as_pointer`, {})
    }

    /**
     * Adds driver(s) to the given property
     * @desc bpy.types.FCurve or list if index is -1 with an array property.
     */
    public driver_add(options: { path?: string, index?: number }): any {
        return PythonInterop.callObject(this.interop, `${this.accessor}.driver_add`, options)
    }

    /**
     * Remove driver(s) from the given property
     * @desc boolean
     */
    public driver_remove(options: { path?: string, index?: number }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.driver_remove`, options)
    }

    /**
     * Returns the value of the custom property assigned to key or defaultwhen not found (matches Python’s dictionary function of the same name).
     * @desc void
     */
    public get(options: { key?: string, default?: undefined }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.get`, options)
    }

    /**
     * Check if a property is hidden.
     * @desc boolean
     */
    public is_property_hidden(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_property_hidden`, {})
    }

    /**
     * Check if a property is overridable.
     * @desc boolean
     */
    public is_property_overridable_library(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_property_overridable_library`, {})
    }

    /**
     * Check if a property is readonly.
     * @desc boolean
     */
    public is_property_readonly(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_property_readonly`, {})
    }

    /**
     * Check if a property is set, use for testing operator properties.
     * @desc boolean
     */
    public is_property_set(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_property_set`, {})
    }

    /**
     * Returns the items of this objects custom properties (matches Python’sdictionary function of the same name).
     * @desc list of key, value tuples
     */
    public items(): any[] {
        return PythonInterop.callList(this.interop, `${this.accessor}.items`, {})
    }

    /**
     * Remove a keyframe from this properties fcurve.
     * @desc boolean
     */
    public keyframe_delete(options: { data_path?: string, index?: number, frame?: number, group?: string }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.keyframe_delete`, options)
    }

    /**
     * Insert a keyframe on the property given, adding fcurves and animation data when necessary.
     * @desc boolean
     */
    public keyframe_insert(options: { data_path?: string, index?: number, frame?: number, group?: string, options?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.keyframe_insert`, options)
    }

    /**
     * Returns the keys of this objects custom properties (matches Python’sdictionary function of the same name).
     * @desc list of strings
     */
    public keys(): any[] {
        return PythonInterop.callList(this.interop, `${this.accessor}.keys`, {})
    }

    /**
     * Returns the data path from the ID to this object (string).
     * @desc str
     */
    public path_from_id(options: { property?: string }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.path_from_id`, options)
    }

    /**
     * Returns the property from the path, raise an exception when not found.
     * @desc void
     */
    public path_resolve(options: { path?: string, coerce?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.path_resolve`, options)
    }

    /**
     * Remove and return the value of the custom property assigned to key or defaultwhen not found (matches Python’s dictionary function of the same name).
     * @desc void
     */
    public pop(options: { key?: string, default?: undefined }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pop`, options)
    }

    /**
     * Define a property as overridable or not (only for custom properties!).
     * @desc boolean
     */
    public property_overridable_library_set(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.property_overridable_library_set`, {})
    }

    /**
     * Unset a property, will use default value afterward.
     * @desc void
     */
    public property_unset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.property_unset`, {})
    }

    /**
     * Return a new instance, this is needed because typessuch as textures can be changed at runtime.
     * @desc subclass of bpy.types.bpy_struct
     */
    public type_recast(): bpy_struct {
        return PythonInterop.callClass(this.interop, `${this.accessor}.type_recast`, {}, bpy_struct)
    }

    /**
     * Returns the values of this objects custom properties (matches Python’sdictionary function of the same name).
     * @desc list
     */
    public values(): any[] {
        return PythonInterop.callList(this.interop, `${this.accessor}.values`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
