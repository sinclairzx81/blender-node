import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Property } from './Property'

/**
 * BoolProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.BoolProperty.html
 */
export class BoolProperty {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Length of each dimension of the array
     * @desc int array of 3 items in [0, inf], default (0, 0, 0), (readonly)
     */
    public get array_dimensions(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.array_dimensions`, 'number', 3)
    }

    /**
     * Maximum length of the array, 0 means unlimited
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get array_length(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.array_length`)
    }

    /**
     * Default value for this number
     * @desc boolean, default False, (readonly)
     */
    public get default(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.default`)
    }

    /**
     * Default value for this array
     * @desc boolean array of 3 items, default (False, False, False), (readonly)
     */
    public get default_array(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.default_array`, 'boolean', 3)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_array(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_array`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
