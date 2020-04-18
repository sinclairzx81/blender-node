import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { GreasePencil } from './GreasePencil'

/**
 * SpaceSequenceEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceSequenceEditor.html
 */
export class SpaceSequenceEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The channel number shown in the image preview. 0 is the result of all strips combined
     * @desc int in [-5, 32], default 0
     */
    public get display_channel(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.display_channel`)
    }

    /**
     * View mode to use for displaying sequencer output
     * @desc enum in ['IMAGE', 'WAVEFORM', 'VECTOR_SCOPE', 'HISTOGRAM'], default 'IMAGE'
     */
    public get display_mode(): 'IMAGE' | 'WAVEFORM' | 'VECTOR_SCOPE' | 'HISTOGRAM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_mode`)
    }

    /**
     * Grease Pencil data for this Preview region
     * @desc GreasePencil
     */
    public get grease_pencil(): GreasePencil {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grease_pencil`, GreasePencil)
    }

    /**
     * Overlay draw type
     * @desc enum in ['RECTANGLE', 'REFERENCE', 'CURRENT'], default 'RECTANGLE'
     */
    public get overlay_type(): 'RECTANGLE' | 'REFERENCE' | 'CURRENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.overlay_type`)
    }

    /**
     * Channels of the preview to draw
     * @desc enum in ['COLOR_ALPHA', 'COLOR'], default 'COLOR'
     */
    public get preview_channels(): 'COLOR_ALPHA' | 'COLOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.preview_channels`)
    }

    /**
     * Display preview using full resolution or different proxy resolutions
     * @desc enum in ['NONE', 'SCENE', 'PROXY_25', 'PROXY_50', 'PROXY_75', 'PROXY_100', 'FULL'], default 'SCENE'
     */
    public get proxy_render_size(): 'NONE' | 'SCENE' | 'PROXY_25' | 'PROXY_50' | 'PROXY_75' | 'PROXY_100' | 'FULL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.proxy_render_size`)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public get show_annotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_annotation`)
    }

    /**
     * Display result under strips
     * @desc boolean, default False
     */
    public get show_backdrop(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_backdrop`)
    }

    /**
     * Display frames rather than seconds
     * @desc boolean, default False
     */
    public get show_frames(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_frames`)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public get show_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_markers`)
    }

    /**
     * Show metadata of first visible strip
     * @desc boolean, default False
     */
    public get show_metadata(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_metadata`)
    }

    /**
     * Show overexposed areas with zebra stripes
     * @desc int in [0, 110], default 0
     */
    public get show_overexposed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.show_overexposed`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Show TV title safe and action safe areas in preview
     * @desc boolean, default False
     */
    public get show_safe_areas(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_safe_areas`)
    }

    /**
     * Show safe areas to fit content in a different aspect ratio
     * @desc boolean, default False
     */
    public get show_safe_center(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_safe_center`)
    }

    /**
     * Show timing in seconds not frames
     * @desc boolean, default False
     */
    public get show_seconds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_seconds`)
    }

    /**
     * Separate color channels in preview
     * @desc boolean, default False
     */
    public get show_separate_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_separate_color`)
    }

    /**
     * Display strip in/out offsets
     * @desc boolean, default False
     */
    public get show_strip_offset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_strip_offset`)
    }

    /**
     * Transform markers as well as strips
     * @desc boolean, default False
     */
    public get use_marker_sync(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_marker_sync`)
    }

    /**
     * Type of the Sequencer view (sequencer, preview or both)
     * @desc enum in ['SEQUENCER', 'PREVIEW', 'SEQUENCER_PREVIEW'], default 'SEQUENCER'
     */
    public get view_type(): 'SEQUENCER' | 'PREVIEW' | 'SEQUENCER_PREVIEW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.view_type`)
    }

    /**
     * How Waveforms are drawn
     * @desc enum in ['NO_WAVEFORMS', 'ALL_WAVEFORMS', 'DEFAULT_WAVEFORMS'], default 'DEFAULT_WAVEFORMS'
     */
    public get waveform_display_type(): 'NO_WAVEFORMS' | 'ALL_WAVEFORMS' | 'DEFAULT_WAVEFORMS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.waveform_display_type`)
    }

    /**
     * The channel number shown in the image preview. 0 is the result of all strips combined
     * @desc int in [-5, 32], default 0
     */
    public set display_channel(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.display_channel`, value)
    }

    /**
     * View mode to use for displaying sequencer output
     * @desc enum in ['IMAGE', 'WAVEFORM', 'VECTOR_SCOPE', 'HISTOGRAM'], default 'IMAGE'
     */
    public set display_mode(value: 'IMAGE' | 'WAVEFORM' | 'VECTOR_SCOPE' | 'HISTOGRAM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_mode`, value)
    }

    /**
     * Grease Pencil data for this Preview region
     * @desc GreasePencil
     */
    public set grease_pencil(value: GreasePencil) {
        PythonInterop.setClass(this.interop, `${this.accessor}.grease_pencil`, value)
    }

    /**
     * Overlay draw type
     * @desc enum in ['RECTANGLE', 'REFERENCE', 'CURRENT'], default 'RECTANGLE'
     */
    public set overlay_type(value: 'RECTANGLE' | 'REFERENCE' | 'CURRENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.overlay_type`, value)
    }

    /**
     * Channels of the preview to draw
     * @desc enum in ['COLOR_ALPHA', 'COLOR'], default 'COLOR'
     */
    public set preview_channels(value: 'COLOR_ALPHA' | 'COLOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.preview_channels`, value)
    }

    /**
     * Display preview using full resolution or different proxy resolutions
     * @desc enum in ['NONE', 'SCENE', 'PROXY_25', 'PROXY_50', 'PROXY_75', 'PROXY_100', 'FULL'], default 'SCENE'
     */
    public set proxy_render_size(value: 'NONE' | 'SCENE' | 'PROXY_25' | 'PROXY_50' | 'PROXY_75' | 'PROXY_100' | 'FULL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.proxy_render_size`, value)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public set show_annotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_annotation`, value)
    }

    /**
     * Display result under strips
     * @desc boolean, default False
     */
    public set show_backdrop(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_backdrop`, value)
    }

    /**
     * Display frames rather than seconds
     * @desc boolean, default False
     */
    public set show_frames(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_frames`, value)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public set show_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_markers`, value)
    }

    /**
     * Show metadata of first visible strip
     * @desc boolean, default False
     */
    public set show_metadata(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_metadata`, value)
    }

    /**
     * Show overexposed areas with zebra stripes
     * @desc int in [0, 110], default 0
     */
    public set show_overexposed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.show_overexposed`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Show TV title safe and action safe areas in preview
     * @desc boolean, default False
     */
    public set show_safe_areas(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_safe_areas`, value)
    }

    /**
     * Show safe areas to fit content in a different aspect ratio
     * @desc boolean, default False
     */
    public set show_safe_center(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_safe_center`, value)
    }

    /**
     * Show timing in seconds not frames
     * @desc boolean, default False
     */
    public set show_seconds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_seconds`, value)
    }

    /**
     * Separate color channels in preview
     * @desc boolean, default False
     */
    public set show_separate_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_separate_color`, value)
    }

    /**
     * Display strip in/out offsets
     * @desc boolean, default False
     */
    public set show_strip_offset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_strip_offset`, value)
    }

    /**
     * Transform markers as well as strips
     * @desc boolean, default False
     */
    public set use_marker_sync(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_marker_sync`, value)
    }

    /**
     * Type of the Sequencer view (sequencer, preview or both)
     * @desc enum in ['SEQUENCER', 'PREVIEW', 'SEQUENCER_PREVIEW'], default 'SEQUENCER'
     */
    public set view_type(value: 'SEQUENCER' | 'PREVIEW' | 'SEQUENCER_PREVIEW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.view_type`, value)
    }

    /**
     * How Waveforms are drawn
     * @desc enum in ['NO_WAVEFORMS', 'ALL_WAVEFORMS', 'DEFAULT_WAVEFORMS'], default 'DEFAULT_WAVEFORMS'
     */
    public set waveform_display_type(value: 'NO_WAVEFORMS' | 'ALL_WAVEFORMS' | 'DEFAULT_WAVEFORMS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.waveform_display_type`, value)
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
