import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PreferencesFilePaths
 * 
 * https://docs.blender.org/api/current/bpy.types.PreferencesFilePaths.html
 */
export class PreferencesFilePaths {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Path to a custom animation/frame sequence player
     * @desc string, default '', (never None)
     */
    public get animation_player(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.animation_player`)
    }

    /**
     * Preset configs for external animation players
     * @desc enum in ['INTERNAL', 'DJV', 'FRAMECYCLER', 'RV', 'MPLAYER', 'CUSTOM'], default 'INTERNAL'
     */
    public get animation_player_preset(): 'INTERNAL' | 'DJV' | 'FRAMECYCLER' | 'RV' | 'MPLAYER' | 'CUSTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.animation_player_preset`)
    }

    /**
     * The time (in minutes) to wait between automatic temporary saves
     * @desc int in [1, 60], default 2
     */
    public get auto_save_time(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.auto_save_time`)
    }

    /**
     * The default directory to search for loading fonts
     * @desc string, default '', (never None)
     */
    public get font_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.font_directory`)
    }

    /**
     * Hide recent locations in the file selector
     * @desc boolean, default False
     */
    public get hide_recent_locations(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_recent_locations`)
    }

    /**
     * Hide system bookmarks in the file selector
     * @desc boolean, default False
     */
    public get hide_system_bookmarks(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_system_bookmarks`)
    }

    /**
     * The path to the ‘/branches’ directory of your local svn-translation copy, to allow translating from the UI
     * @desc string, default '', (never None)
     */
    public get i18n_branches_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.i18n_branches_directory`)
    }

    /**
     * Path to an image editor
     * @desc string, default '', (never None)
     */
    public get image_editor(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.image_editor`)
    }

    /**
     * Maximum number of recently opened files to remember
     * @desc int in [0, 30], default 10
     */
    public get recent_files(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.recent_files`)
    }

    /**
     * Where to cache raw render results
     * @desc string, default '', (never None)
     */
    public get render_cache_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.render_cache_directory`)
    }

    /**
     * The default directory for rendering output, for new scenes
     * @desc string, default '', (never None)
     */
    public get render_output_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.render_output_directory`)
    }

    /**
     * The number of old versions to maintain in the current directory, when manually saving
     * @desc int in [0, 32], default 1
     */
    public get save_version(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.save_version`)
    }

    /**
     * Alternate script path, matching the default layout with subdirs: startup, add-ons & modules (requires restart)
     * @desc string, default '', (never None)
     */
    public get script_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.script_directory`)
    }

    /**
     * Hide files and data-blocks if their name start with a dot (.*)
     * @desc boolean, default True
     */
    public get show_hidden_files_datablocks(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_hidden_files_datablocks`)
    }

    /**
     * The default directory to search for sounds
     * @desc string, default '', (never None)
     */
    public get sound_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.sound_directory`)
    }

    /**
     * The directory for storing temporary save files
     * @desc string, default '', (never None)
     */
    public get temporary_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.temporary_directory`)
    }

    /**
     * The default directory to search for textures
     * @desc string, default '', (never None)
     */
    public get texture_directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.texture_directory`)
    }

    /**
     * Automatic saving of temporary files in temp directory, uses process ID (sculpt & edit-mode data won’t be saved!)
     * @desc boolean, default True
     */
    public get use_auto_save_temporary_files(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_save_temporary_files`)
    }

    /**
     * Enable file compression when saving .blend files
     * @desc boolean, default False
     */
    public get use_file_compression(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_file_compression`)
    }

    /**
     * Display only files with extensions in the image select window
     * @desc boolean, default True
     */
    public get use_filter_files(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_files`)
    }

    /**
     * Load user interface setup when loading .blend files
     * @desc boolean, default False
     */
    public get use_load_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_load_ui`)
    }

    /**
     * Default relative path option for the file selector
     * @desc boolean, default True
     */
    public get use_relative_paths(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative_paths`)
    }

    /**
     * Enables automatic saving of preview images in the .blend file
     * @desc boolean, default True
     */
    public get use_save_preview_images(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_save_preview_images`)
    }

    /**
     * Allow any .blend file to run scripts automatically (unsafe with blend files from an untrusted source)
     * @desc boolean, default True
     */
    public get use_scripts_auto_execute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_scripts_auto_execute`)
    }

    /**
     * Automatically convert all new tabs into spaces for new and loaded text files
     * @desc boolean, default False
     */
    public get use_tabs_as_spaces(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_tabs_as_spaces`)
    }

    /**
     * Path to a custom animation/frame sequence player
     * @desc string, default '', (never None)
     */
    public set animation_player(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.animation_player`, value)
    }

    /**
     * Preset configs for external animation players
     * @desc enum in ['INTERNAL', 'DJV', 'FRAMECYCLER', 'RV', 'MPLAYER', 'CUSTOM'], default 'INTERNAL'
     */
    public set animation_player_preset(value: 'INTERNAL' | 'DJV' | 'FRAMECYCLER' | 'RV' | 'MPLAYER' | 'CUSTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.animation_player_preset`, value)
    }

    /**
     * The time (in minutes) to wait between automatic temporary saves
     * @desc int in [1, 60], default 2
     */
    public set auto_save_time(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.auto_save_time`, value)
    }

    /**
     * The default directory to search for loading fonts
     * @desc string, default '', (never None)
     */
    public set font_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.font_directory`, value)
    }

    /**
     * Hide recent locations in the file selector
     * @desc boolean, default False
     */
    public set hide_recent_locations(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_recent_locations`, value)
    }

    /**
     * Hide system bookmarks in the file selector
     * @desc boolean, default False
     */
    public set hide_system_bookmarks(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_system_bookmarks`, value)
    }

    /**
     * The path to the ‘/branches’ directory of your local svn-translation copy, to allow translating from the UI
     * @desc string, default '', (never None)
     */
    public set i18n_branches_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.i18n_branches_directory`, value)
    }

    /**
     * Path to an image editor
     * @desc string, default '', (never None)
     */
    public set image_editor(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.image_editor`, value)
    }

    /**
     * Maximum number of recently opened files to remember
     * @desc int in [0, 30], default 10
     */
    public set recent_files(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.recent_files`, value)
    }

    /**
     * Where to cache raw render results
     * @desc string, default '', (never None)
     */
    public set render_cache_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.render_cache_directory`, value)
    }

    /**
     * The default directory for rendering output, for new scenes
     * @desc string, default '', (never None)
     */
    public set render_output_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.render_output_directory`, value)
    }

    /**
     * The number of old versions to maintain in the current directory, when manually saving
     * @desc int in [0, 32], default 1
     */
    public set save_version(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.save_version`, value)
    }

    /**
     * Alternate script path, matching the default layout with subdirs: startup, add-ons & modules (requires restart)
     * @desc string, default '', (never None)
     */
    public set script_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.script_directory`, value)
    }

    /**
     * Hide files and data-blocks if their name start with a dot (.*)
     * @desc boolean, default True
     */
    public set show_hidden_files_datablocks(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_hidden_files_datablocks`, value)
    }

    /**
     * The default directory to search for sounds
     * @desc string, default '', (never None)
     */
    public set sound_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.sound_directory`, value)
    }

    /**
     * The directory for storing temporary save files
     * @desc string, default '', (never None)
     */
    public set temporary_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.temporary_directory`, value)
    }

    /**
     * The default directory to search for textures
     * @desc string, default '', (never None)
     */
    public set texture_directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.texture_directory`, value)
    }

    /**
     * Automatic saving of temporary files in temp directory, uses process ID (sculpt & edit-mode data won’t be saved!)
     * @desc boolean, default True
     */
    public set use_auto_save_temporary_files(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_save_temporary_files`, value)
    }

    /**
     * Enable file compression when saving .blend files
     * @desc boolean, default False
     */
    public set use_file_compression(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_file_compression`, value)
    }

    /**
     * Display only files with extensions in the image select window
     * @desc boolean, default True
     */
    public set use_filter_files(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_files`, value)
    }

    /**
     * Load user interface setup when loading .blend files
     * @desc boolean, default False
     */
    public set use_load_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_load_ui`, value)
    }

    /**
     * Default relative path option for the file selector
     * @desc boolean, default True
     */
    public set use_relative_paths(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative_paths`, value)
    }

    /**
     * Enables automatic saving of preview images in the .blend file
     * @desc boolean, default True
     */
    public set use_save_preview_images(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_save_preview_images`, value)
    }

    /**
     * Allow any .blend file to run scripts automatically (unsafe with blend files from an untrusted source)
     * @desc boolean, default True
     */
    public set use_scripts_auto_execute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_scripts_auto_execute`, value)
    }

    /**
     * Automatically convert all new tabs into spaces for new and loaded text files
     * @desc boolean, default False
     */
    public set use_tabs_as_spaces(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_tabs_as_spaces`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
