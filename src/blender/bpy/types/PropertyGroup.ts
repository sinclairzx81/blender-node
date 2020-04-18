import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PropertyGroup
 * 
 * https://docs.blender.org/api/current/bpy.types.PropertyGroup.html
 */
export class PropertyGroup {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Unique name used in the code and scripting
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Unique name used in the code and scripting
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
