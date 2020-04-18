import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PreferencesOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.preferences.html
 */
export class PreferencesOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Disable an add-on
     * @desc void
     */
    public addon_disable(options: { module?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_disable`, options)
    }

    /**
     * Enable an add-on
     * @desc void
     */
    public addon_enable(options: { module?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_enable`, options)
    }

    /**
     * Display information and preferences for this add-on
     * @desc void
     */
    public addon_expand(options: { module?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_expand`, options)
    }

    /**
     * Install an add-on
     * @desc void
     */
    public addon_install(options: { overwrite?: boolean, target?: 'DEFAULT' | 'PREFS', filepath?: string, filter_folder?: boolean, filter_python?: boolean, filter_glob?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_install`, options)
    }

    /**
     * Scan add-on directories for new modules
     * @desc void
     */
    public addon_refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_refresh`, {})
    }

    /**
     * Delete the add-on from the file system
     * @desc void
     */
    public addon_remove(options: { module?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_remove`, options)
    }

    /**
     * Show add-on preferences
     * @desc void
     */
    public addon_show(options: { module?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.addon_show`, options)
    }

    /**
     * Install an application-template
     * @desc void
     */
    public app_template_install(options: { overwrite?: boolean, filepath?: string, filter_folder?: boolean, filter_glob?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.app_template_install`, options)
    }

    /**
     * Copy settings from previous version
     * @desc void
     */
    public copy_prev(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_prev`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public keyconfig_activate(options: { filepath?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyconfig_activate`, options)
    }

    /**
     * Export key configuration to a python script
     * @desc void
     */
    public keyconfig_export(options: { all?: boolean, filepath?: string, filter_folder?: boolean, filter_text?: boolean, filter_python?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyconfig_export`, options)
    }

    /**
     * Import key configuration from a python script
     * @desc void
     */
    public keyconfig_import(options: { filepath?: string, filter_folder?: boolean, filter_text?: boolean, filter_python?: boolean, keep_original?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyconfig_import`, options)
    }

    /**
     * Remove key config
     * @desc void
     */
    public keyconfig_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyconfig_remove`, {})
    }

    /**
     * Test key-config for conflicts
     * @desc void
     */
    public keyconfig_test(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyconfig_test`, {})
    }

    /**
     * Add key map item
     * @desc void
     */
    public keyitem_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyitem_add`, {})
    }

    /**
     * Remove key map item
     * @desc void
     */
    public keyitem_remove(options: { item_id?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyitem_remove`, options)
    }

    /**
     * Restore key map item
     * @desc void
     */
    public keyitem_restore(options: { item_id?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keyitem_restore`, options)
    }

    /**
     * Restore key map(s)
     * @desc void
     */
    public keymap_restore(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.keymap_restore`, options)
    }

    /**
     * Reset to the default theme colors
     * @desc void
     */
    public reset_default_theme(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reset_default_theme`, {})
    }

    /**
     * Copy Studio Light settings to the Studio light editor
     * @desc void
     */
    public studiolight_copy_settings(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.studiolight_copy_settings`, options)
    }

    /**
     * Install a user defined studio light
     * @desc void
     */
    public studiolight_install(options: { files?: any, directory?: string, filter_folder?: boolean, filter_glob?: string, type?: 'MATCAP' | 'WORLD' | 'STUDIO' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.studiolight_install`, options)
    }

    /**
     * Save custom studio light from the studio light editor settings
     * @desc void
     */
    public studiolight_new(options: { filename?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.studiolight_new`, options)
    }

    /**
     * Show light preferences
     * @desc void
     */
    public studiolight_show(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.studiolight_show`, {})
    }

    /**
     * Delete Studio Light
     * @desc void
     */
    public studiolight_uninstall(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.studiolight_uninstall`, options)
    }

    /**
     * Load and apply a Blender XML theme file
     * @desc void
     */
    public theme_install(options: { overwrite?: boolean, filepath?: string, filter_folder?: boolean, filter_glob?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.theme_install`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
