import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Property } from './Property'

/**
 * IntProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.IntProperty.html
 */
export class IntProperty {

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
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get default(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.default`)
    }

    /**
     * Default value for this array
     * @desc int array of 3 items in [-inf, inf], default (0, 0, 0), (readonly)
     */
    public get default_array(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.default_array`, 'number', 3)
    }

    /**
     * Maximum value used by buttons
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get hard_max(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.hard_max`)
    }

    /**
     * Minimum value used by buttons
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get hard_min(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.hard_min`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_array(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_array`)
    }

    /**
     * Maximum value used by buttons
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get soft_max(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.soft_max`)
    }

    /**
     * Minimum value used by buttons
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get soft_min(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.soft_min`)
    }

    /**
     * Step size used by number buttons, for floats 1/100th of the step size
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get step(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.step`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
