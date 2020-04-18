import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'

/**
 * SpaceOutliner
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceOutliner.html
 */
export class SpaceOutliner {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Type of information to display
     * @desc enum in ['SCENES', 'VIEW_LAYER', 'SEQUENCE', 'LIBRARIES', 'DATA_API', 'ORPHAN_DATA'], default 'SCENES'
     */
    public get display_mode(): 'SCENES' | 'VIEW_LAYER' | 'SEQUENCE' | 'LIBRARIES' | 'DATA_API' | 'ORPHAN_DATA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_mode`)
    }

    /**
     * Data-block type to show
     * @desc enum in ['ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'FONT', 'GREASEPENCIL', 'COLLECTION', 'IMAGE', 'KEY', 'LIGHT', 'LIBRARY', 'LINESTYLE', 'LATTICE', 'MASK', 'MATERIAL', 'META', 'MESH', 'MOVIECLIP', 'NODETREE', 'OBJECT', 'PAINTCURVE', 'PALETTE', 'PARTICLE', 'LIGHT_PROBE', 'SCENE', 'SOUND', 'SPEAKER', 'TEXT', 'TEXTURE', 'WINDOWMANAGER', 'WORLD', 'WORKSPACE'], default 'ACTION'
     */
    public get filter_id_type(): 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_id_type`)
    }

    /**
     * 
     * @desc enum in ['ALL', 'VISIBLE', 'HIDDEN', 'SELECTED', 'ACTIVE'], default 'ALL'
     */
    public get filter_state(): 'ALL' | 'VISIBLE' | 'HIDDEN' | 'SELECTED' | 'ACTIVE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_state`)
    }

    /**
     * Live search filtering string
     * @desc string, default '', (never None)
     */
    public get filter_text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_text`)
    }

    /**
     * Exclude from view layer
     * @desc boolean, default False
     */
    public get show_restrict_column_enable(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_enable`)
    }

    /**
     * Temporarily hide in viewport
     * @desc boolean, default False
     */
    public get show_restrict_column_hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_hide`)
    }

    /**
     * Holdout
     * @desc boolean, default False
     */
    public get show_restrict_column_holdout(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_holdout`)
    }

    /**
     * Indirect only
     * @desc boolean, default False
     */
    public get show_restrict_column_indirect_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_indirect_only`)
    }

    /**
     * Globally disable in renders
     * @desc boolean, default False
     */
    public get show_restrict_column_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_render`)
    }

    /**
     * Selectable
     * @desc boolean, default False
     */
    public get show_restrict_column_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_select`)
    }

    /**
     * Globally disable in viewports
     * @desc boolean, default False
     */
    public get show_restrict_column_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_restrict_column_viewport`)
    }

    /**
     * Only use case sensitive matches of search string
     * @desc boolean, default False
     */
    public get use_filter_case_sensitive(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_case_sensitive`)
    }

    /**
     * Show children
     * @desc boolean, default False
     */
    public get use_filter_children(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_children`)
    }

    /**
     * Show collections
     * @desc boolean, default False
     */
    public get use_filter_collection(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_collection`)
    }

    /**
     * Only use complete matches of search string
     * @desc boolean, default False
     */
    public get use_filter_complete(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_complete`)
    }

    /**
     * Show only data-blocks of one type
     * @desc boolean, default False
     */
    public get use_filter_id_type(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_id_type`)
    }

    /**
     * Show objects
     * @desc boolean, default False
     */
    public get use_filter_object(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object`)
    }

    /**
     * Show armature objects
     * @desc boolean, default False
     */
    public get use_filter_object_armature(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_armature`)
    }

    /**
     * Show camera objects
     * @desc boolean, default False
     */
    public get use_filter_object_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_camera`)
    }

    /**
     * Show what is inside the objects elements
     * @desc boolean, default False
     */
    public get use_filter_object_content(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_content`)
    }

    /**
     * Show empty objects
     * @desc boolean, default False
     */
    public get use_filter_object_empty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_empty`)
    }

    /**
     * Show light objects
     * @desc boolean, default False
     */
    public get use_filter_object_light(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_light`)
    }

    /**
     * Show mesh objects
     * @desc boolean, default False
     */
    public get use_filter_object_mesh(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_mesh`)
    }

    /**
     * Show curves, lattices, light probes, fonts, …
     * @desc boolean, default False
     */
    public get use_filter_object_others(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_object_others`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_sort_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sort_alpha`)
    }

    /**
     * Sync outliner selection with other editors
     * @desc boolean, default False
     */
    public get use_sync_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_sync_select`)
    }

    /**
     * Type of information to display
     * @desc enum in ['SCENES', 'VIEW_LAYER', 'SEQUENCE', 'LIBRARIES', 'DATA_API', 'ORPHAN_DATA'], default 'SCENES'
     */
    public set display_mode(value: 'SCENES' | 'VIEW_LAYER' | 'SEQUENCE' | 'LIBRARIES' | 'DATA_API' | 'ORPHAN_DATA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_mode`, value)
    }

    /**
     * Data-block type to show
     * @desc enum in ['ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'FONT', 'GREASEPENCIL', 'COLLECTION', 'IMAGE', 'KEY', 'LIGHT', 'LIBRARY', 'LINESTYLE', 'LATTICE', 'MASK', 'MATERIAL', 'META', 'MESH', 'MOVIECLIP', 'NODETREE', 'OBJECT', 'PAINTCURVE', 'PALETTE', 'PARTICLE', 'LIGHT_PROBE', 'SCENE', 'SOUND', 'SPEAKER', 'TEXT', 'TEXTURE', 'WINDOWMANAGER', 'WORLD', 'WORKSPACE'], default 'ACTION'
     */
    public set filter_id_type(value: 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_id_type`, value)
    }

    /**
     * 
     * @desc enum in ['ALL', 'VISIBLE', 'HIDDEN', 'SELECTED', 'ACTIVE'], default 'ALL'
     */
    public set filter_state(value: 'ALL' | 'VISIBLE' | 'HIDDEN' | 'SELECTED' | 'ACTIVE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_state`, value)
    }

    /**
     * Live search filtering string
     * @desc string, default '', (never None)
     */
    public set filter_text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_text`, value)
    }

    /**
     * Exclude from view layer
     * @desc boolean, default False
     */
    public set show_restrict_column_enable(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_enable`, value)
    }

    /**
     * Temporarily hide in viewport
     * @desc boolean, default False
     */
    public set show_restrict_column_hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_hide`, value)
    }

    /**
     * Holdout
     * @desc boolean, default False
     */
    public set show_restrict_column_holdout(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_holdout`, value)
    }

    /**
     * Indirect only
     * @desc boolean, default False
     */
    public set show_restrict_column_indirect_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_indirect_only`, value)
    }

    /**
     * Globally disable in renders
     * @desc boolean, default False
     */
    public set show_restrict_column_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_render`, value)
    }

    /**
     * Selectable
     * @desc boolean, default False
     */
    public set show_restrict_column_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_select`, value)
    }

    /**
     * Globally disable in viewports
     * @desc boolean, default False
     */
    public set show_restrict_column_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_restrict_column_viewport`, value)
    }

    /**
     * Only use case sensitive matches of search string
     * @desc boolean, default False
     */
    public set use_filter_case_sensitive(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_case_sensitive`, value)
    }

    /**
     * Show children
     * @desc boolean, default False
     */
    public set use_filter_children(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_children`, value)
    }

    /**
     * Show collections
     * @desc boolean, default False
     */
    public set use_filter_collection(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_collection`, value)
    }

    /**
     * Only use complete matches of search string
     * @desc boolean, default False
     */
    public set use_filter_complete(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_complete`, value)
    }

    /**
     * Show only data-blocks of one type
     * @desc boolean, default False
     */
    public set use_filter_id_type(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_id_type`, value)
    }

    /**
     * Show objects
     * @desc boolean, default False
     */
    public set use_filter_object(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object`, value)
    }

    /**
     * Show armature objects
     * @desc boolean, default False
     */
    public set use_filter_object_armature(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_armature`, value)
    }

    /**
     * Show camera objects
     * @desc boolean, default False
     */
    public set use_filter_object_camera(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_camera`, value)
    }

    /**
     * Show what is inside the objects elements
     * @desc boolean, default False
     */
    public set use_filter_object_content(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_content`, value)
    }

    /**
     * Show empty objects
     * @desc boolean, default False
     */
    public set use_filter_object_empty(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_empty`, value)
    }

    /**
     * Show light objects
     * @desc boolean, default False
     */
    public set use_filter_object_light(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_light`, value)
    }

    /**
     * Show mesh objects
     * @desc boolean, default False
     */
    public set use_filter_object_mesh(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_mesh`, value)
    }

    /**
     * Show curves, lattices, light probes, fonts, …
     * @desc boolean, default False
     */
    public set use_filter_object_others(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_object_others`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_sort_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sort_alpha`, value)
    }

    /**
     * Sync outliner selection with other editors
     * @desc boolean, default False
     */
    public set use_sync_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_sync_select`, value)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
