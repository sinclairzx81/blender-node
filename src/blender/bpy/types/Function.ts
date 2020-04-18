import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Property } from './Property'

/**
 * Function
 * 
 * https://docs.blender.org/api/current/bpy.types.Function.html
 */
export class Function {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Description of the Function’s purpose
     * @desc string, default '', (readonly, never None)
     */
    public get description(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.description`)
    }

    /**
     * Unique name used in the code and scripting
     * @desc string, default '', (readonly, never None)
     */
    public get identifier(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.identifier`)
    }

    /**
     * Function is registered as callback as part of type registration
     * @desc boolean, default False, (readonly)
     */
    public get is_registered(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_registered`)
    }

    /**
     * Function is optionally registered as callback part of type registration
     * @desc boolean, default False, (readonly)
     */
    public get is_registered_optional(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_registered_optional`)
    }

    /**
     * Parameters for the function
     * @desc bpy_prop_collection of Property, (readonly)
     */
    public get parameters(): BlenderCollection<Property> & Indexable<Property> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.parameters`, Property)
    }

    /**
     * Function does not pass its self as an argument (becomes a static method in python)
     * @desc boolean, default False, (readonly)
     */
    public get use_self(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self`)
    }

    /**
     * Function passes its self type as an argument (becomes a class method in python if use_self is false)
     * @desc boolean, default False, (readonly)
     */
    public get use_self_type(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self_type`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
