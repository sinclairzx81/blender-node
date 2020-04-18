import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { AddonPreferences } from './AddonPreferences'

/**
 * Addon
 * 
 * https://docs.blender.org/api/current/bpy.types.Addon.html
 */
export class Addon {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc AddonPreferences, (readonly)
     */
    public get preferences(): AddonPreferences {
        return PythonInterop.getClass(this.interop, `${this.accessor}.preferences`, AddonPreferences)
    }

    /**
     * Module name
     * @desc string, default '', (never None)
     */
    public get module(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.module`)
    }

    /**
     * Module name
     * @desc string, default '', (never None)
     */
    public set module(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.module`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
