import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FileSelectParams
 * 
 * https://docs.blender.org/api/current/bpy.types.FileSelectParams.html
 */
export class FileSelectParams {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Title for the file browser
     * @desc string, default '', (readonly, never None)
     */
    public get title(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.title`)
    }

    /**
     * Whether we may browse blender files’ content or not
     * @desc boolean, default False, (readonly)
     */
    public get use_library_browsing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_library_browsing`)
    }

    /**
     * Directory displayed in the file browser
     * @desc string, default '', (never None)
     */
    public get directory(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.directory`)
    }

    /**
     * Change the size of the display (width of columns or thumbnails size)
     * @desc enum in ['TINY', 'SMALL', 'NORMAL', 'LARGE'], default 'TINY'
     */
    public get display_size(): 'TINY' | 'SMALL' | 'NORMAL' | 'LARGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_size`)
    }

    /**
     * Display mode for the file list
     * @desc enum in ['LIST_VERTICAL', 'LIST_HORIZONTAL', 'THUMBNAIL'], default 'LIST_VERTICAL'
     */
    public get display_type(): 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_type`)
    }

    /**
     * Active file in the file browser
     * @desc string, default '', (never None)
     */
    public get filename(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filename`)
    }

    /**
     * UNIX shell-like filename patterns matching, supports wildcards (‘*’) and list of patterns separated by ‘;’
     * @desc string, default '', (never None)
     */
    public get filter_glob(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_glob`)
    }

    /**
     * Which ID types to show/hide, when browsing a library
     * @desc enum set in {'ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'GREASE_PENCIL', 'GROUP', 'IMAGE', 'LIGHT', 'LINESTYLE', 'LATTICE', 'MATERIAL', 'METABALL', 'MOVIE_CLIP', 'MESH', 'MASK', 'NODE_TREE', 'OBJECT', 'PARTICLE_SETTINGS', 'PALETTE', 'PAINT_CURVE', 'LIGHT_PROBE', 'SCENE', 'SPEAKER', 'SOUND', 'TEXTURE', 'TEXT', 'FONT', 'WORLD', 'WORK_SPACE'}, default {'ACTION'}
     */
    public get filter_id(): ('ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'GREASE_PENCIL' | 'GROUP' | 'IMAGE' | 'LIGHT' | 'LINESTYLE' | 'LATTICE' | 'MATERIAL' | 'METABALL' | 'MOVIE_CLIP' | 'MESH' | 'MASK' | 'NODE_TREE' | 'OBJECT' | 'PARTICLE_SETTINGS' | 'PALETTE' | 'PAINT_CURVE' | 'LIGHT_PROBE' | 'SCENE' | 'SPEAKER' | 'SOUND' | 'TEXTURE' | 'TEXT' | 'FONT' | 'WORLD' | 'WORK_SPACE')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.filter_id`)
    }

    /**
     * Which ID categories to show/hide, when browsing a library
     * @desc enum set in {'SCENE', 'ANIMATION', 'OBJECT', 'GEOMETRY', 'SHADING', 'IMAGE', 'ENVIRONMENT', 'MISC'}, default {'SCENE'}
     */
    public get filter_id_category(): ('SCENE' | 'ANIMATION' | 'OBJECT' | 'GEOMETRY' | 'SHADING' | 'IMAGE' | 'ENVIRONMENT' | 'MISC')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.filter_id_category`)
    }

    /**
     * Filter by name, supports ‘*’ wildcard
     * @desc string, default '', (never None)
     */
    public get filter_search(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_search`)
    }

    /**
     * Numbers of dirtree levels to show simultaneously
     * @desc enum in ['NONE', 'BLEND', 'ALL_1', 'ALL_2', 'ALL_3'], default 'NONE'
     */
    public get recursion_level(): 'NONE' | 'BLEND' | 'ALL_1' | 'ALL_2' | 'ALL_3' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.recursion_level`)
    }

    /**
     * Draw a column listing the date and time of modification for each file
     * @desc boolean, default False
     */
    public get show_details_datetime(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_details_datetime`)
    }

    /**
     * Draw a column listing the size of each file
     * @desc boolean, default False
     */
    public get show_details_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_details_size`)
    }

    /**
     * Show hidden dot files
     * @desc boolean, default False
     */
    public get show_hidden(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_hidden`)
    }

    /**
     * 
     * @desc enum in ['FILE_SORT_ALPHA', 'FILE_SORT_EXTENSION', 'FILE_SORT_TIME', 'FILE_SORT_SIZE'], default 'FILE_SORT_ALPHA'
     */
    public get sort_method(): 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sort_method`)
    }

    /**
     * Enable filtering of files
     * @desc boolean, default False
     */
    public get use_filter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter`)
    }

    /**
     * Show .blend1, .blend2, etc. files
     * @desc boolean, default False
     */
    public get use_filter_backup(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_backup`)
    }

    /**
     * Show .blend files
     * @desc boolean, default False
     */
    public get use_filter_blender(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_blender`)
    }

    /**
     * Show .blend files items (objects, materials, etc.)
     * @desc boolean, default False
     */
    public get use_filter_blendid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_blendid`)
    }

    /**
     * Show folders
     * @desc boolean, default False
     */
    public get use_filter_folder(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_folder`)
    }

    /**
     * Show font files
     * @desc boolean, default False
     */
    public get use_filter_font(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_font`)
    }

    /**
     * Show image files
     * @desc boolean, default False
     */
    public get use_filter_image(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_image`)
    }

    /**
     * Show movie files
     * @desc boolean, default False
     */
    public get use_filter_movie(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_movie`)
    }

    /**
     * Show script files
     * @desc boolean, default False
     */
    public get use_filter_script(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_script`)
    }

    /**
     * Show sound files
     * @desc boolean, default False
     */
    public get use_filter_sound(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_sound`)
    }

    /**
     * Show text files
     * @desc boolean, default False
     */
    public get use_filter_text(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_text`)
    }

    /**
     * Sort items descending, from highest value to lowest
     * @desc boolean, default False
     */
    public get use_sort_invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sort_invert`)
    }

    /**
     * Directory displayed in the file browser
     * @desc string, default '', (never None)
     */
    public set directory(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.directory`, value)
    }

    /**
     * Change the size of the display (width of columns or thumbnails size)
     * @desc enum in ['TINY', 'SMALL', 'NORMAL', 'LARGE'], default 'TINY'
     */
    public set display_size(value: 'TINY' | 'SMALL' | 'NORMAL' | 'LARGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_size`, value)
    }

    /**
     * Display mode for the file list
     * @desc enum in ['LIST_VERTICAL', 'LIST_HORIZONTAL', 'THUMBNAIL'], default 'LIST_VERTICAL'
     */
    public set display_type(value: 'LIST_VERTICAL' | 'LIST_HORIZONTAL' | 'THUMBNAIL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_type`, value)
    }

    /**
     * Active file in the file browser
     * @desc string, default '', (never None)
     */
    public set filename(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filename`, value)
    }

    /**
     * UNIX shell-like filename patterns matching, supports wildcards (‘*’) and list of patterns separated by ‘;’
     * @desc string, default '', (never None)
     */
    public set filter_glob(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_glob`, value)
    }

    /**
     * Which ID types to show/hide, when browsing a library
     * @desc enum set in {'ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'GREASE_PENCIL', 'GROUP', 'IMAGE', 'LIGHT', 'LINESTYLE', 'LATTICE', 'MATERIAL', 'METABALL', 'MOVIE_CLIP', 'MESH', 'MASK', 'NODE_TREE', 'OBJECT', 'PARTICLE_SETTINGS', 'PALETTE', 'PAINT_CURVE', 'LIGHT_PROBE', 'SCENE', 'SPEAKER', 'SOUND', 'TEXTURE', 'TEXT', 'FONT', 'WORLD', 'WORK_SPACE'}, default {'ACTION'}
     */
    public set filter_id(value: ('ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'GREASE_PENCIL' | 'GROUP' | 'IMAGE' | 'LIGHT' | 'LINESTYLE' | 'LATTICE' | 'MATERIAL' | 'METABALL' | 'MOVIE_CLIP' | 'MESH' | 'MASK' | 'NODE_TREE' | 'OBJECT' | 'PARTICLE_SETTINGS' | 'PALETTE' | 'PAINT_CURVE' | 'LIGHT_PROBE' | 'SCENE' | 'SPEAKER' | 'SOUND' | 'TEXTURE' | 'TEXT' | 'FONT' | 'WORLD' | 'WORK_SPACE')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.filter_id`, value)
    }

    /**
     * Which ID categories to show/hide, when browsing a library
     * @desc enum set in {'SCENE', 'ANIMATION', 'OBJECT', 'GEOMETRY', 'SHADING', 'IMAGE', 'ENVIRONMENT', 'MISC'}, default {'SCENE'}
     */
    public set filter_id_category(value: ('SCENE' | 'ANIMATION' | 'OBJECT' | 'GEOMETRY' | 'SHADING' | 'IMAGE' | 'ENVIRONMENT' | 'MISC')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.filter_id_category`, value)
    }

    /**
     * Filter by name, supports ‘*’ wildcard
     * @desc string, default '', (never None)
     */
    public set filter_search(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_search`, value)
    }

    /**
     * Numbers of dirtree levels to show simultaneously
     * @desc enum in ['NONE', 'BLEND', 'ALL_1', 'ALL_2', 'ALL_3'], default 'NONE'
     */
    public set recursion_level(value: 'NONE' | 'BLEND' | 'ALL_1' | 'ALL_2' | 'ALL_3') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.recursion_level`, value)
    }

    /**
     * Draw a column listing the date and time of modification for each file
     * @desc boolean, default False
     */
    public set show_details_datetime(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_details_datetime`, value)
    }

    /**
     * Draw a column listing the size of each file
     * @desc boolean, default False
     */
    public set show_details_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_details_size`, value)
    }

    /**
     * Show hidden dot files
     * @desc boolean, default False
     */
    public set show_hidden(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_hidden`, value)
    }

    /**
     * 
     * @desc enum in ['FILE_SORT_ALPHA', 'FILE_SORT_EXTENSION', 'FILE_SORT_TIME', 'FILE_SORT_SIZE'], default 'FILE_SORT_ALPHA'
     */
    public set sort_method(value: 'FILE_SORT_ALPHA' | 'FILE_SORT_EXTENSION' | 'FILE_SORT_TIME' | 'FILE_SORT_SIZE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sort_method`, value)
    }

    /**
     * Enable filtering of files
     * @desc boolean, default False
     */
    public set use_filter(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter`, value)
    }

    /**
     * Show .blend1, .blend2, etc. files
     * @desc boolean, default False
     */
    public set use_filter_backup(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_backup`, value)
    }

    /**
     * Show .blend files
     * @desc boolean, default False
     */
    public set use_filter_blender(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_blender`, value)
    }

    /**
     * Show .blend files items (objects, materials, etc.)
     * @desc boolean, default False
     */
    public set use_filter_blendid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_blendid`, value)
    }

    /**
     * Show folders
     * @desc boolean, default False
     */
    public set use_filter_folder(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_folder`, value)
    }

    /**
     * Show font files
     * @desc boolean, default False
     */
    public set use_filter_font(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_font`, value)
    }

    /**
     * Show image files
     * @desc boolean, default False
     */
    public set use_filter_image(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_image`, value)
    }

    /**
     * Show movie files
     * @desc boolean, default False
     */
    public set use_filter_movie(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_movie`, value)
    }

    /**
     * Show script files
     * @desc boolean, default False
     */
    public set use_filter_script(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_script`, value)
    }

    /**
     * Show sound files
     * @desc boolean, default False
     */
    public set use_filter_sound(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_sound`, value)
    }

    /**
     * Show text files
     * @desc boolean, default False
     */
    public set use_filter_text(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_text`, value)
    }

    /**
     * Sort items descending, from highest value to lowest
     * @desc boolean, default False
     */
    public set use_sort_invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sort_invert`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
