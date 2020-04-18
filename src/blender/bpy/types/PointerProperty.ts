import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Property } from './Property'
import { Struct } from './Struct'

/**
 * PointerProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.PointerProperty.html
 */
export class PointerProperty {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Fixed pointer type, empty if variable type
     * @desc Struct, (readonly)
     */
    public get fixed_type(): Struct {
        return PythonInterop.getClass(this.interop, `${this.accessor}.fixed_type`, Struct)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
