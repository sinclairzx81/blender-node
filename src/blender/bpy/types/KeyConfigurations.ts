import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyConfig } from './KeyConfig'

/**
 * KeyConfigurations
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyConfigurations.html
 */
export class KeyConfigurations {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Key configuration that can be extended by add-ons, and is added to the active configuration when handling events
     * @desc KeyConfig, (readonly)
     */
    public get addon(): KeyConfig {
        return PythonInterop.getClass(this.interop, `${this.accessor}.addon`, KeyConfig)
    }

    /**
     * Default builtin key configuration
     * @desc KeyConfig, (readonly)
     */
    public get default(): KeyConfig {
        return PythonInterop.getClass(this.interop, `${this.accessor}.default`, KeyConfig)
    }

    /**
     * Final key configuration that combines keymaps from the active and add-on configurations, and can be edited by the user
     * @desc KeyConfig, (readonly)
     */
    public get user(): KeyConfig {
        return PythonInterop.getClass(this.interop, `${this.accessor}.user`, KeyConfig)
    }

    /**
     * Active key configuration (preset)
     * @desc KeyConfig
     */
    public get active(): KeyConfig {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, KeyConfig)
    }

    /**
     * Active key configuration (preset)
     * @desc KeyConfig
     */
    public set active(value: KeyConfig) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * new
     * @desc KeyConfig
     */
    public new(options: { name?: string }): KeyConfig {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, KeyConfig)
    }

    /**
     * remove
     * @desc void
     */
    public remove(options: { keyconfig?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * find_item_from_operator
     * @desc void
     */
    public find_item_from_operator(options: { idname?: string, context?: 'INVOKE_DEFAULT' | 'INVOKE_REGION_WIN' | 'INVOKE_REGION_CHANNELS' | 'INVOKE_REGION_PREVIEW' | 'INVOKE_AREA' | 'INVOKE_SCREEN' | 'EXEC_DEFAULT' | 'EXEC_REGION_WIN' | 'EXEC_REGION_CHANNELS' | 'EXEC_REGION_PREVIEW' | 'EXEC_AREA' | 'EXEC_SCREEN', include?: ('KEYBOARD_MODIFIER' | 'KEYBOARD' | 'MOUSE_WHEEL' | 'MOUSE_GESTURE' | 'MOUSE_BUTTON' | 'MOUSE' | 'NDOF' | 'TWEAK' | 'ACTIONZONE')[], exclude?: ('KEYBOARD_MODIFIER' | 'KEYBOARD' | 'MOUSE_WHEEL' | 'MOUSE_GESTURE' | 'MOUSE_BUTTON' | 'MOUSE' | 'NDOF' | 'TWEAK' | 'ACTIONZONE')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.find_item_from_operator`, options)
    }

    /**
     * update
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
