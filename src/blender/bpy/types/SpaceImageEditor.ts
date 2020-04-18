import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { ImageUser } from './ImageUser'
import { Histogram } from './Histogram'
import { Scopes } from './Scopes'
import { SpaceUVEditor } from './SpaceUVEditor'
import { GreasePencil } from './GreasePencil'
import { Image } from './Image'
import { Mask } from './Mask'

/**
 * SpaceImageEditor
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceImageEditor.html
 */
export class SpaceImageEditor {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Parameters defining which layer, pass and frame of the image is displayed
     * @desc ImageUser, (readonly, never None)
     */
    public get image_user(): ImageUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_user`, ImageUser)
    }

    /**
     * Sampled colors along line
     * @desc Histogram, (readonly)
     */
    public get sample_histogram(): Histogram {
        return PythonInterop.getClass(this.interop, `${this.accessor}.sample_histogram`, Histogram)
    }

    /**
     * Scopes to visualize image statistics
     * @desc Scopes, (readonly)
     */
    public get scopes(): Scopes {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scopes`, Scopes)
    }

    /**
     * Show Mask editing related properties
     * @desc boolean, default False, (readonly)
     */
    public get show_maskedit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_maskedit`)
    }

    /**
     * Show paint related properties
     * @desc boolean, default False, (readonly)
     */
    public get show_paint(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_paint`)
    }

    /**
     * Show render related properties
     * @desc boolean, default False, (readonly)
     */
    public get show_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_render`)
    }

    /**
     * Show UV editing related properties
     * @desc boolean, default False, (readonly)
     */
    public get show_uvedit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_uvedit`)
    }

    /**
     * UV editor settings
     * @desc SpaceUVEditor, (readonly, never None)
     */
    public get uv_editor(): SpaceUVEditor {
        return PythonInterop.getClass(this.interop, `${this.accessor}.uv_editor`, SpaceUVEditor)
    }

    /**
     * Zoom factor
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get zoom(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.zoom`, 'number', 2)
    }

    /**
     * 2D cursor location for this view
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get cursor_location(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.cursor_location`, 'number', 2)
    }

    /**
     * Channels of the image to draw
     * @desc enum in ['COLOR_ALPHA', 'COLOR', 'ALPHA', 'Z_BUFFER', 'RED', 'GREEN', 'BLUE'], default 'COLOR'
     */
    public get display_channels(): 'COLOR_ALPHA' | 'COLOR' | 'ALPHA' | 'Z_BUFFER' | 'RED' | 'GREEN' | 'BLUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_channels`)
    }

    /**
     * Grease pencil data for this space
     * @desc GreasePencil
     */
    public get grease_pencil(): GreasePencil {
        return PythonInterop.getClass(this.interop, `${this.accessor}.grease_pencil`, GreasePencil)
    }

    /**
     * Image displayed and edited in this space
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * Mask displayed and edited in this space
     * @desc Mask
     */
    public get mask(): Mask {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mask`, Mask)
    }

    /**
     * Display type for mask splines
     * @desc enum in ['OUTLINE', 'DASH', 'BLACK', 'WHITE'], default 'OUTLINE'
     */
    public get mask_display_type(): 'OUTLINE' | 'DASH' | 'BLACK' | 'WHITE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_display_type`)
    }

    /**
     * Overlay mode of rasterized mask
     * @desc enum in ['ALPHACHANNEL', 'COMBINED'], default 'ALPHACHANNEL'
     */
    public get mask_overlay_mode(): 'ALPHACHANNEL' | 'COMBINED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_overlay_mode`)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['VIEW', 'UV', 'PAINT', 'MASK'], default 'VIEW'
     */
    public get mode(): 'VIEW' | 'UV' | 'PAINT' | 'MASK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Rotation/Scaling Pivot
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS', 'MEDIAN_POINT', 'ACTIVE_ELEMENT'], default 'BOUNDING_BOX_CENTER'
     */
    public get pivot_point(): 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' | 'MEDIAN_POINT' | 'ACTIVE_ELEMENT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pivot_point`)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public get show_annotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_annotation`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_mask_overlay(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_mask_overlay`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_mask_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_mask_smooth`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_hud(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_hud`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_tool_header(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_tool_header`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_toolbar(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_toolbar`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Display the image repeated outside of the main view
     * @desc boolean, default False
     */
    public get show_repeat(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_repeat`)
    }

    /**
     * Display the image in Stereo 3D
     * @desc boolean, default False
     */
    public get show_stereo_3d(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_stereo_3d`)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['VIEW', 'PAINT', 'MASK'], default 'VIEW'
     */
    public get ui_mode(): 'VIEW' | 'PAINT' | 'MASK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.ui_mode`)
    }

    /**
     * Display current image regardless of object selection
     * @desc boolean, default False
     */
    public get use_image_pin(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_image_pin`)
    }

    /**
     * Update other affected window spaces automatically to reflect changes during interactive operations such as transform
     * @desc boolean, default False
     */
    public get use_realtime_update(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_realtime_update`)
    }

    /**
     * 2D cursor location for this view
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set cursor_location(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.cursor_location`, value)
    }

    /**
     * Channels of the image to draw
     * @desc enum in ['COLOR_ALPHA', 'COLOR', 'ALPHA', 'Z_BUFFER', 'RED', 'GREEN', 'BLUE'], default 'COLOR'
     */
    public set display_channels(value: 'COLOR_ALPHA' | 'COLOR' | 'ALPHA' | 'Z_BUFFER' | 'RED' | 'GREEN' | 'BLUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_channels`, value)
    }

    /**
     * Grease pencil data for this space
     * @desc GreasePencil
     */
    public set grease_pencil(value: GreasePencil) {
        PythonInterop.setClass(this.interop, `${this.accessor}.grease_pencil`, value)
    }

    /**
     * Image displayed and edited in this space
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    /**
     * Mask displayed and edited in this space
     * @desc Mask
     */
    public set mask(value: Mask) {
        PythonInterop.setClass(this.interop, `${this.accessor}.mask`, value)
    }

    /**
     * Display type for mask splines
     * @desc enum in ['OUTLINE', 'DASH', 'BLACK', 'WHITE'], default 'OUTLINE'
     */
    public set mask_display_type(value: 'OUTLINE' | 'DASH' | 'BLACK' | 'WHITE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_display_type`, value)
    }

    /**
     * Overlay mode of rasterized mask
     * @desc enum in ['ALPHACHANNEL', 'COMBINED'], default 'ALPHACHANNEL'
     */
    public set mask_overlay_mode(value: 'ALPHACHANNEL' | 'COMBINED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_overlay_mode`, value)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['VIEW', 'UV', 'PAINT', 'MASK'], default 'VIEW'
     */
    public set mode(value: 'VIEW' | 'UV' | 'PAINT' | 'MASK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Rotation/Scaling Pivot
     * @desc enum in ['BOUNDING_BOX_CENTER', 'CURSOR', 'INDIVIDUAL_ORIGINS', 'MEDIAN_POINT', 'ACTIVE_ELEMENT'], default 'BOUNDING_BOX_CENTER'
     */
    public set pivot_point(value: 'BOUNDING_BOX_CENTER' | 'CURSOR' | 'INDIVIDUAL_ORIGINS' | 'MEDIAN_POINT' | 'ACTIVE_ELEMENT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pivot_point`, value)
    }

    /**
     * Show annotations for this view
     * @desc boolean, default False
     */
    public set show_annotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_annotation`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_mask_overlay(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_mask_overlay`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_mask_smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_mask_smooth`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_hud(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_hud`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_tool_header(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_tool_header`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_toolbar(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_toolbar`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Display the image repeated outside of the main view
     * @desc boolean, default False
     */
    public set show_repeat(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_repeat`, value)
    }

    /**
     * Display the image in Stereo 3D
     * @desc boolean, default False
     */
    public set show_stereo_3d(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_stereo_3d`, value)
    }

    /**
     * Editing context being displayed
     * @desc enum in ['VIEW', 'PAINT', 'MASK'], default 'VIEW'
     */
    public set ui_mode(value: 'VIEW' | 'PAINT' | 'MASK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.ui_mode`, value)
    }

    /**
     * Display current image regardless of object selection
     * @desc boolean, default False
     */
    public set use_image_pin(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_image_pin`, value)
    }

    /**
     * Update other affected window spaces automatically to reflect changes during interactive operations such as transform
     * @desc boolean, default False
     */
    public set use_realtime_update(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_realtime_update`, value)
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
