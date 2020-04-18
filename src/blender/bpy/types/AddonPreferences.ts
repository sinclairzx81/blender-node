import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * AddonPreferences
 * 
 * https://docs.blender.org/api/current/bpy.types.AddonPreferences.html
 */
export class AddonPreferences {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
