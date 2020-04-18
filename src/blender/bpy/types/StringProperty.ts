import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Property } from './Property'

/**
 * StringProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.StringProperty.html
 */
export class StringProperty {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * string default value
     * @desc string, default '', (readonly, never None)
     */
    public get default(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.default`)
    }

    /**
     * Maximum length of the string, 0 means unlimited
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get length_max(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.length_max`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
