import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Addons } from './Addons'
import { Addon } from './Addon'
import { PathCompareCollection } from './PathCompareCollection'
import { PathCompare } from './PathCompare'
import { PreferencesEdit } from './PreferencesEdit'
import { PreferencesExperimental } from './PreferencesExperimental'
import { PreferencesFilePaths } from './PreferencesFilePaths'
import { PreferencesInput } from './PreferencesInput'
import { PreferencesKeymap } from './PreferencesKeymap'
import { StudioLights } from './StudioLights'
import { StudioLight } from './StudioLight'
import { PreferencesSystem } from './PreferencesSystem'
import { Theme } from './Theme'
import { ThemeStyle } from './ThemeStyle'
import { PreferencesView } from './PreferencesView'

/**
 * Preferences
 * 
 * https://docs.blender.org/api/current/bpy.types.Preferences.html
 */
export class Preferences {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Addons bpy_prop_collection of Addon, (readonly)
     */
    public get addons(): BlenderCollection<Addon> & Indexable<Addon> & Addons {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.addons`, Addons, Addon)
    }

    /**
     * 
     * @desc PathCompareCollection bpy_prop_collection of PathCompare, (readonly)
     */
    public get autoexec_paths(): BlenderCollection<PathCompare> & Indexable<PathCompare> & PathCompareCollection {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.autoexec_paths`, PathCompareCollection, PathCompare)
    }

    /**
     * Settings for interacting with Blender data
     * @desc PreferencesEdit, (readonly, never None)
     */
    public get edit(): PreferencesEdit {
        return PythonInterop.getClass(this.interop, `${this.accessor}.edit`, PreferencesEdit)
    }

    /**
     * Settings for features that are still early in their development stage
     * @desc PreferencesExperimental, (readonly, never None)
     */
    public get experimental(): PreferencesExperimental {
        return PythonInterop.getClass(this.interop, `${this.accessor}.experimental`, PreferencesExperimental)
    }

    /**
     * Default paths for external files
     * @desc PreferencesFilePaths, (readonly, never None)
     */
    public get filepaths(): PreferencesFilePaths {
        return PythonInterop.getClass(this.interop, `${this.accessor}.filepaths`, PreferencesFilePaths)
    }

    /**
     * Settings for input devices
     * @desc PreferencesInput, (readonly, never None)
     */
    public get inputs(): PreferencesInput {
        return PythonInterop.getClass(this.interop, `${this.accessor}.inputs`, PreferencesInput)
    }

    /**
     * Shortcut setup for keyboards and other input devices
     * @desc PreferencesKeymap, (readonly, never None)
     */
    public get keymap(): PreferencesKeymap {
        return PythonInterop.getClass(this.interop, `${this.accessor}.keymap`, PreferencesKeymap)
    }

    /**
     * 
     * @desc StudioLights bpy_prop_collection of StudioLight, (readonly)
     */
    public get studio_lights(): BlenderCollection<StudioLight> & Indexable<StudioLight> & StudioLights {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.studio_lights`, StudioLights, StudioLight)
    }

    /**
     * Graphics driver and operating system settings
     * @desc PreferencesSystem, (readonly, never None)
     */
    public get system(): PreferencesSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.system`, PreferencesSystem)
    }

    /**
     * 
     * @desc bpy_prop_collection of Theme, (readonly)
     */
    public get themes(): BlenderCollection<Theme> & Indexable<Theme> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.themes`, Theme)
    }

    /**
     * 
     * @desc bpy_prop_collection of ThemeStyle, (readonly)
     */
    public get ui_styles(): BlenderCollection<ThemeStyle> & Indexable<ThemeStyle> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.ui_styles`, ThemeStyle)
    }

    /**
     * Version of Blender the userpref.blend was saved with
     * @desc int array of 3 items in [0, inf], default (0, 0, 0), (readonly)
     */
    public get version(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.version`, 'number', 3)
    }

    /**
     * Preferences related to viewing data
     * @desc PreferencesView, (readonly, never None)
     */
    public get view(): PreferencesView {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view`, PreferencesView)
    }

    /**
     * Active section of the preferences shown in the user interface
     * @desc enum in ['INTERFACE', 'THEMES', 'VIEWPORT', 'LIGHTS', 'EDITING', 'ANIMATION', 'ADDONS', 'INPUT', 'NAVIGATION', 'KEYMAP', 'SYSTEM', 'SAVE_LOAD', 'FILE_PATHS', 'EXPERIMENTAL'], default 'INTERFACE'
     */
    public get active_section(): 'INTERFACE' | 'THEMES' | 'VIEWPORT' | 'LIGHTS' | 'EDITING' | 'ANIMATION' | 'ADDONS' | 'INPUT' | 'NAVIGATION' | 'KEYMAP' | 'SYSTEM' | 'SAVE_LOAD' | 'FILE_PATHS' | 'EXPERIMENTAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.active_section`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get app_template(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.app_template`)
    }

    /**
     * Preferences have changed
     * @desc boolean, default False
     */
    public get is_dirty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_dirty`)
    }

    /**
     * Save preferences on exit when modified (unless factory settings have been loaded)
     * @desc boolean, default True
     */
    public get use_preferences_save(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preferences_save`)
    }

    /**
     * Active section of the preferences shown in the user interface
     * @desc enum in ['INTERFACE', 'THEMES', 'VIEWPORT', 'LIGHTS', 'EDITING', 'ANIMATION', 'ADDONS', 'INPUT', 'NAVIGATION', 'KEYMAP', 'SYSTEM', 'SAVE_LOAD', 'FILE_PATHS', 'EXPERIMENTAL'], default 'INTERFACE'
     */
    public set active_section(value: 'INTERFACE' | 'THEMES' | 'VIEWPORT' | 'LIGHTS' | 'EDITING' | 'ANIMATION' | 'ADDONS' | 'INPUT' | 'NAVIGATION' | 'KEYMAP' | 'SYSTEM' | 'SAVE_LOAD' | 'FILE_PATHS' | 'EXPERIMENTAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.active_section`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set app_template(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.app_template`, value)
    }

    /**
     * Preferences have changed
     * @desc boolean, default False
     */
    public set is_dirty(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_dirty`, value)
    }

    /**
     * Save preferences on exit when modified (unless factory settings have been loaded)
     * @desc boolean, default True
     */
    public set use_preferences_save(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preferences_save`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
