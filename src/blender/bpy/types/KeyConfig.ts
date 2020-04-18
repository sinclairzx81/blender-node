import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyMaps } from './KeyMaps'
import { KeyMap } from './KeyMap'
import { KeyConfigPreferences } from './KeyConfigPreferences'

/**
 * KeyConfig
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyConfig.html
 */
export class KeyConfig {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Indicates that a keyconfig was defined by the user
     * @desc boolean, default False, (readonly)
     */
    public get is_user_defined(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_user_defined`)
    }

    /**
     * Key maps configured as part of this configuration
     * @desc KeyMaps bpy_prop_collection of KeyMap, (readonly)
     */
    public get keymaps(): BlenderCollection<KeyMap> & Indexable<KeyMap> & KeyMaps {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.keymaps`, KeyMaps, KeyMap)
    }

    /**
     * 
     * @desc KeyConfigPreferences, (readonly)
     */
    public get preferences(): KeyConfigPreferences {
        return PythonInterop.getClass(this.interop, `${this.accessor}.preferences`, KeyConfigPreferences)
    }

    /**
     * Name of the key configuration
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Name of the key configuration
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
