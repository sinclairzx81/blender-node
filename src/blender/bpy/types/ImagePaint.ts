import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Paint } from './Paint'
import { Image } from './Image'

/**
 * ImagePaint
 * 
 * https://docs.blender.org/api/current/bpy.types.ImagePaint.html
 */
export class ImagePaint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The mesh is missing materials
     * @desc boolean, default False, (readonly)
     */
    public get missing_materials(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.missing_materials`)
    }

    /**
     * Image Painting does not have a stencil
     * @desc boolean, default False, (readonly)
     */
    public get missing_stencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.missing_stencil`)
    }

    /**
     * Image Painting does not have a texture to paint on
     * @desc boolean, default False, (readonly)
     */
    public get missing_texture(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.missing_texture`)
    }

    /**
     * A UV layer is missing on the mesh
     * @desc boolean, default False, (readonly)
     */
    public get missing_uvs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.missing_uvs`)
    }

    /**
     * Image used as canvas
     * @desc Image
     */
    public get canvas(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.canvas`, Image)
    }

    /**
     * Image used as clone source
     * @desc Image
     */
    public get clone_image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clone_image`, Image)
    }

    /**
     * Amount of dithering when painting on byte images
     * @desc float in [0, 2], default 0.0
     */
    public get dither(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dither`)
    }

    /**
     * Texture filtering type
     * @desc enum in ['LINEAR', 'CLOSEST'], default 'LINEAR'
     */
    public get interpolation(): 'LINEAR' | 'CLOSEST' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Invert the stencil layer
     * @desc boolean, default False
     */
    public get invert_stencil(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_stencil`)
    }

    /**
     * Mode of operation for projection painting
     * @desc enum in ['MATERIAL', 'IMAGE'], default 'MATERIAL'
     */
    public get mode(): 'MATERIAL' | 'IMAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Paint most on faces pointing towards the view according to this angle
     * @desc int in [0, 90], default 80
     */
    public get normal_angle(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.normal_angle`)
    }

    /**
     * Size to capture the image for re-projecting
     * @desc int array of 2 items in [512, 16384], default (0, 0)
     */
    public get screen_grab_size(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.screen_grab_size`, 'number', 2)
    }

    /**
     * Extend paint beyond the faces UVs to reduce seams (in pixels, slower)
     * @desc int in [-32768, 32767], default 2
     */
    public get seam_bleed(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.seam_bleed`)
    }

    /**
     * Stencil color in the viewport
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get stencil_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.stencil_color`, 'number', 3)
    }

    /**
     * Image used as stencil
     * @desc Image
     */
    public get stencil_image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stencil_image`, Image)
    }

    /**
     * Ignore faces pointing away from the view (faster)
     * @desc boolean, default False
     */
    public get use_backface_culling(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_backface_culling`)
    }

    /**
     * Use another UV map as clone source, otherwise use the 3D cursor as the source
     * @desc boolean, default False
     */
    public get use_clone_layer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clone_layer`)
    }

    /**
     * Paint most on faces pointing towards the view
     * @desc boolean, default False
     */
    public get use_normal_falloff(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_falloff`)
    }

    /**
     * Only paint onto the faces directly under the brush (slower)
     * @desc boolean, default False
     */
    public get use_occlude(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_occlude`)
    }

    /**
     * Set the mask layer from the UV map buttons
     * @desc boolean, default False
     */
    public get use_stencil_layer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_stencil_layer`)
    }

    /**
     * Image used as canvas
     * @desc Image
     */
    public set canvas(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.canvas`, value)
    }

    /**
     * Image used as clone source
     * @desc Image
     */
    public set clone_image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clone_image`, value)
    }

    /**
     * Amount of dithering when painting on byte images
     * @desc float in [0, 2], default 0.0
     */
    public set dither(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.dither`, value)
    }

    /**
     * Texture filtering type
     * @desc enum in ['LINEAR', 'CLOSEST'], default 'LINEAR'
     */
    public set interpolation(value: 'LINEAR' | 'CLOSEST') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Invert the stencil layer
     * @desc boolean, default False
     */
    public set invert_stencil(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_stencil`, value)
    }

    /**
     * Mode of operation for projection painting
     * @desc enum in ['MATERIAL', 'IMAGE'], default 'MATERIAL'
     */
    public set mode(value: 'MATERIAL' | 'IMAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Paint most on faces pointing towards the view according to this angle
     * @desc int in [0, 90], default 80
     */
    public set normal_angle(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.normal_angle`, value)
    }

    /**
     * Size to capture the image for re-projecting
     * @desc int array of 2 items in [512, 16384], default (0, 0)
     */
    public set screen_grab_size(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.screen_grab_size`, value)
    }

    /**
     * Extend paint beyond the faces UVs to reduce seams (in pixels, slower)
     * @desc int in [-32768, 32767], default 2
     */
    public set seam_bleed(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.seam_bleed`, value)
    }

    /**
     * Stencil color in the viewport
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set stencil_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.stencil_color`, value)
    }

    /**
     * Image used as stencil
     * @desc Image
     */
    public set stencil_image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.stencil_image`, value)
    }

    /**
     * Ignore faces pointing away from the view (faster)
     * @desc boolean, default False
     */
    public set use_backface_culling(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_backface_culling`, value)
    }

    /**
     * Use another UV map as clone source, otherwise use the 3D cursor as the source
     * @desc boolean, default False
     */
    public set use_clone_layer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clone_layer`, value)
    }

    /**
     * Paint most on faces pointing towards the view
     * @desc boolean, default False
     */
    public set use_normal_falloff(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_falloff`, value)
    }

    /**
     * Only paint onto the faces directly under the brush (slower)
     * @desc boolean, default False
     */
    public set use_occlude(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_occlude`, value)
    }

    /**
     * Set the mask layer from the UV map buttons
     * @desc boolean, default False
     */
    public set use_stencil_layer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_stencil_layer`, value)
    }

    /**
     * Check if required texpaint data exist
     * @desc boolean
     */
    public detect_data(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.detect_data`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
