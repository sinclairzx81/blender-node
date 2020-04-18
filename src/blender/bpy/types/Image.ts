import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { ColorManagedInputColorspaceSettings } from './ColorManagedInputColorspaceSettings'
import { PackedFile } from './PackedFile'
import { ImagePackedFile } from './ImagePackedFile'
import { RenderSlots } from './RenderSlots'
import { RenderSlot } from './RenderSlot'
import { Stereo3dFormat } from './Stereo3dFormat'
import { UDIMTiles } from './UDIMTiles'
import { UDIMTile } from './UDIMTile'

/**
 * Image
 * 
 * https://docs.blender.org/api/current/bpy.types.Image.html
 */
export class Image {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * OpenGL bindcode
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get bindcode(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.bindcode`)
    }

    /**
     * Number of channels in pixels buffer
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get channels(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.channels`)
    }

    /**
     * Input color space settings
     * @desc ColorManagedInputColorspaceSettings, (readonly)
     */
    public get colorspace_settings(): ColorManagedInputColorspaceSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.colorspace_settings`, ColorManagedInputColorspaceSettings)
    }

    /**
     * Image bit depth
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get depth(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.depth`)
    }

    /**
     * Duration (in frames) of the image (1 when not a video/sequence)
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get frame_duration(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_duration`)
    }

    /**
     * True if the image data is loaded into memory
     * @desc boolean, default False, (readonly)
     */
    public get has_data(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_data`)
    }

    /**
     * Image has changed and is not saved
     * @desc boolean, default False, (readonly)
     */
    public get is_dirty(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_dirty`)
    }

    /**
     * True if this image is stored in float buffer
     * @desc boolean, default False, (readonly)
     */
    public get is_float(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_float`)
    }

    /**
     * Image has more than one view
     * @desc boolean, default False, (readonly)
     */
    public get is_multiview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_multiview`)
    }

    /**
     * Image has left and right views
     * @desc boolean, default False, (readonly)
     */
    public get is_stereo_3d(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_stereo_3d`)
    }

    /**
     * First packed file of the image
     * @desc PackedFile, (readonly)
     */
    public get packed_file(): PackedFile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.packed_file`, PackedFile)
    }

    /**
     * Collection of packed images
     * @desc bpy_prop_collection of ImagePackedFile, (readonly)
     */
    public get packed_files(): BlenderCollection<ImagePackedFile> & Indexable<ImagePackedFile> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.packed_files`, ImagePackedFile)
    }

    /**
     * Render slots of the image
     * @desc RenderSlots bpy_prop_collection of RenderSlot, (readonly)
     */
    public get render_slots(): BlenderCollection<RenderSlot> & Indexable<RenderSlot> & RenderSlots {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.render_slots`, RenderSlots, RenderSlot)
    }

    /**
     * Width and height in pixels, zero when image data cant be loaded
     * @desc int array of 2 items in [-inf, inf], default (0, 0), (readonly)
     */
    public get size(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.size`, 'number', 2)
    }

    /**
     * Settings for stereo 3d
     * @desc Stereo3dFormat, (readonly, never None)
     */
    public get stereo_3d_format(): Stereo3dFormat {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stereo_3d_format`, Stereo3dFormat)
    }

    /**
     * Tiles of the image
     * @desc UDIMTiles bpy_prop_collection of UDIMTile, (readonly)
     */
    public get tiles(): BlenderCollection<UDIMTile> & Indexable<UDIMTile> & UDIMTiles {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.tiles`, UDIMTiles, UDIMTile)
    }

    /**
     * How to generate the image
     * @desc enum in ['IMAGE', 'MULTILAYER', 'UV_TEST', 'RENDER_RESULT', 'COMPOSITING'], default 'IMAGE', (readonly)
     */
    public get type(): 'IMAGE' | 'MULTILAYER' | 'UV_TEST' | 'RENDER_RESULT' | 'COMPOSITING' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Representation of alpha in the image file, to convert to and from when saving and loading the image
     * @desc enum in ['STRAIGHT', 'PREMUL', 'CHANNEL_PACKED', 'NONE'], default 'STRAIGHT'
     */
    public get alpha_mode(): 'STRAIGHT' | 'PREMUL' | 'CHANNEL_PACKED' | 'NONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.alpha_mode`)
    }

    /**
     * Display Aspect for this image, does not affect rendering
     * @desc float array of 2 items in [0.1, inf], default (1.0, 1.0)
     */
    public get display_aspect(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.display_aspect`, 'number', 2)
    }

    /**
     * Format used for re-saving this file
     * @desc enum in ['BMP', 'IRIS', 'PNG', 'JPEG', 'JPEG2000', 'TARGA', 'TARGA_RAW', 'CINEON', 'DPX', 'OPEN_EXR_MULTILAYER', 'OPEN_EXR', 'HDR', 'TIFF', 'AVI_JPEG', 'AVI_RAW', 'FFMPEG'], default 'TARGA'
     */
    public get file_format(): 'BMP' | 'IRIS' | 'PNG' | 'JPEG' | 'JPEG2000' | 'TARGA' | 'TARGA_RAW' | 'CINEON' | 'DPX' | 'OPEN_EXR_MULTILAYER' | 'OPEN_EXR' | 'HDR' | 'TIFF' | 'AVI_JPEG' | 'AVI_RAW' | 'FFMPEG' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.file_format`)
    }

    /**
     * Image/Movie file name
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Image/Movie file name (without data refreshing)
     * @desc string, default '', (never None)
     */
    public get filepath_raw(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath_raw`)
    }

    /**
     * Fill color for the generated image
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get generated_color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.generated_color`, 'number', 4)
    }

    /**
     * Generated image height
     * @desc int in [1, 65536], default 1024
     */
    public get generated_height(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.generated_height`)
    }

    /**
     * Generated image type
     * @desc enum in ['BLANK', 'UV_GRID', 'COLOR_GRID'], default 'UV_GRID'
     */
    public get generated_type(): 'BLANK' | 'UV_GRID' | 'COLOR_GRID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.generated_type`)
    }

    /**
     * Generated image width
     * @desc int in [1, 65536], default 1024
     */
    public get generated_width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.generated_width`)
    }

    /**
     * Image pixels in floating point values
     * @desc float in [-inf, inf], default 0.0
     */
    public get pixels(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixels`)
    }

    /**
     * X/Y pixels per meter
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get resolution(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.resolution`, 'number', 2)
    }

    /**
     * Where the image comes from
     * @desc enum in ['FILE', 'SEQUENCE', 'MOVIE', 'GENERATED', 'VIEWER', 'TILED'], default 'FILE'
     */
    public get source(): 'FILE' | 'SEQUENCE' | 'MOVIE' | 'GENERATED' | 'VIEWER' | 'TILED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.source`)
    }

    /**
     * Deinterlace movie file on load
     * @desc boolean, default False
     */
    public get use_deinterlace(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deinterlace`)
    }

    /**
     * Generate floating point buffer
     * @desc boolean, default False
     */
    public get use_generated_float(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_generated_float`)
    }

    /**
     * Use Multiple Views (when available)
     * @desc boolean, default False
     */
    public get use_multiview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_multiview`)
    }

    /**
     * Apply render part of display transformation when displaying this image on the screen
     * @desc boolean, default False
     */
    public get use_view_as_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_view_as_render`)
    }

    /**
     * Mode to load image views
     * @desc enum in ['INDIVIDUAL', 'STEREO_3D'], default 'INDIVIDUAL'
     */
    public get views_format(): 'INDIVIDUAL' | 'STEREO_3D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.views_format`)
    }

    /**
     * Representation of alpha in the image file, to convert to and from when saving and loading the image
     * @desc enum in ['STRAIGHT', 'PREMUL', 'CHANNEL_PACKED', 'NONE'], default 'STRAIGHT'
     */
    public set alpha_mode(value: 'STRAIGHT' | 'PREMUL' | 'CHANNEL_PACKED' | 'NONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.alpha_mode`, value)
    }

    /**
     * Display Aspect for this image, does not affect rendering
     * @desc float array of 2 items in [0.1, inf], default (1.0, 1.0)
     */
    public set display_aspect(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.display_aspect`, value)
    }

    /**
     * Format used for re-saving this file
     * @desc enum in ['BMP', 'IRIS', 'PNG', 'JPEG', 'JPEG2000', 'TARGA', 'TARGA_RAW', 'CINEON', 'DPX', 'OPEN_EXR_MULTILAYER', 'OPEN_EXR', 'HDR', 'TIFF', 'AVI_JPEG', 'AVI_RAW', 'FFMPEG'], default 'TARGA'
     */
    public set file_format(value: 'BMP' | 'IRIS' | 'PNG' | 'JPEG' | 'JPEG2000' | 'TARGA' | 'TARGA_RAW' | 'CINEON' | 'DPX' | 'OPEN_EXR_MULTILAYER' | 'OPEN_EXR' | 'HDR' | 'TIFF' | 'AVI_JPEG' | 'AVI_RAW' | 'FFMPEG') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.file_format`, value)
    }

    /**
     * Image/Movie file name
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Image/Movie file name (without data refreshing)
     * @desc string, default '', (never None)
     */
    public set filepath_raw(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath_raw`, value)
    }

    /**
     * Fill color for the generated image
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set generated_color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.generated_color`, value)
    }

    /**
     * Generated image height
     * @desc int in [1, 65536], default 1024
     */
    public set generated_height(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.generated_height`, value)
    }

    /**
     * Generated image type
     * @desc enum in ['BLANK', 'UV_GRID', 'COLOR_GRID'], default 'UV_GRID'
     */
    public set generated_type(value: 'BLANK' | 'UV_GRID' | 'COLOR_GRID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.generated_type`, value)
    }

    /**
     * Generated image width
     * @desc int in [1, 65536], default 1024
     */
    public set generated_width(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.generated_width`, value)
    }

    /**
     * Image pixels in floating point values
     * @desc float in [-inf, inf], default 0.0
     */
    public set pixels(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pixels`, value)
    }

    /**
     * X/Y pixels per meter
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set resolution(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.resolution`, value)
    }

    /**
     * Where the image comes from
     * @desc enum in ['FILE', 'SEQUENCE', 'MOVIE', 'GENERATED', 'VIEWER', 'TILED'], default 'FILE'
     */
    public set source(value: 'FILE' | 'SEQUENCE' | 'MOVIE' | 'GENERATED' | 'VIEWER' | 'TILED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.source`, value)
    }

    /**
     * Deinterlace movie file on load
     * @desc boolean, default False
     */
    public set use_deinterlace(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deinterlace`, value)
    }

    /**
     * Generate floating point buffer
     * @desc boolean, default False
     */
    public set use_generated_float(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_generated_float`, value)
    }

    /**
     * Use Multiple Views (when available)
     * @desc boolean, default False
     */
    public set use_multiview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_multiview`, value)
    }

    /**
     * Apply render part of display transformation when displaying this image on the screen
     * @desc boolean, default False
     */
    public set use_view_as_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_view_as_render`, value)
    }

    /**
     * Mode to load image views
     * @desc enum in ['INDIVIDUAL', 'STEREO_3D'], default 'INDIVIDUAL'
     */
    public set views_format(value: 'INDIVIDUAL' | 'STEREO_3D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.views_format`, value)
    }

    /**
     * Save image to a specific path using a scenes render settings
     * @desc void
     */
    public save_render(options: { filepath?: string, scene?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save_render`, options)
    }

    /**
     * Save image to its source path
     * @desc void
     */
    public save(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.save`, {})
    }

    /**
     * Pack an image as embedded data into the .blend file
     * @desc void
     */
    public pack(options: { data?: string, data_len?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pack`, options)
    }

    /**
     * Save an image packed in the .blend file to disk
     * @desc void
     */
    public unpack(options: { method?: 'REMOVE' | 'USE_LOCAL' | 'WRITE_LOCAL' | 'USE_ORIGINAL' | 'WRITE_ORIGINAL' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unpack`, options)
    }

    /**
     * Reload the image from its source path
     * @desc void
     */
    public reload(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reload`, {})
    }

    /**
     * Update the display image from the floating point buffer
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * Scale the image in pixels
     * @desc void
     */
    public scale(options: { width?: number, height?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scale`, options)
    }

    /**
     * Delay the image from being cleaned from the cache due inactivity
     * @desc int in [-inf, inf]
     */
    public gl_touch(options: { frame?: number }): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.gl_touch`, options)
    }

    /**
     * Load the image into an OpenGL texture. On success, image.bindcode will contain the OpenGL texture bindcode. Colors read from the texture will be in scene linear color space and have premultiplied or straight alpha matching the image alpha mode
     * @desc int in [-inf, inf]
     */
    public gl_load(options: { frame?: number }): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.gl_load`, options)
    }

    /**
     * Free the image from OpenGL graphics memory
     * @desc void
     */
    public gl_free(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.gl_free`, {})
    }

    /**
     * Return the absolute path to the filepath of an image frame specified by the image user
     * @desc string, (never None)
     */
    public filepath_from_user(options: { image_user?: unknown }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.filepath_from_user`, options)
    }

    /**
     * Free the image buffers from memory
     * @desc void
     */
    public buffers_free(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.buffers_free`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
