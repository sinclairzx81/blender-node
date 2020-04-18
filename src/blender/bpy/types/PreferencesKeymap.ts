import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PreferencesKeymap
 * 
 * https://docs.blender.org/api/current/bpy.types.PreferencesKeymap.html
 */
export class PreferencesKeymap {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The name of the active key configuration
     * @desc string, default '', (never None)
     */
    public get active_keyconfig(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.active_keyconfig`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_ui_keyconfig(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_ui_keyconfig`)
    }

    /**
     * The name of the active key configuration
     * @desc string, default '', (never None)
     */
    public set active_keyconfig(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.active_keyconfig`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_ui_keyconfig(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_ui_keyconfig`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
