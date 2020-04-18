import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieClipUser } from './MovieClipUser'
import { ImageUser } from './ImageUser'
import { MovieClip } from './MovieClip'
import { Image } from './Image'

/**
 * CameraBackgroundImage
 * 
 * https://docs.blender.org/api/current/bpy.types.CameraBackgroundImage.html
 */
export class CameraBackgroundImage {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Parameters defining which frame of the movie clip is displayed
     * @desc MovieClipUser, (readonly, never None)
     */
    public get clip_user(): MovieClipUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip_user`, MovieClipUser)
    }

    /**
     * Parameters defining which layer, pass and frame of the image is displayed
     * @desc ImageUser, (readonly, never None)
     */
    public get image_user(): ImageUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_user`, ImageUser)
    }

    /**
     * Image opacity to blend the image against the background color
     * @desc float in [0, 1], default 0.0
     */
    public get alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha`)
    }

    /**
     * Movie clip displayed and edited in this space
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Display under or over everything
     * @desc enum in ['BACK', 'FRONT'], default 'BACK'
     */
    public get display_depth(): 'BACK' | 'FRONT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_depth`)
    }

    /**
     * How the image fits in the camera frame
     * @desc enum in ['STRETCH', 'FIT', 'CROP'], default 'STRETCH'
     */
    public get frame_method(): 'STRETCH' | 'FIT' | 'CROP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.frame_method`)
    }

    /**
     * Image displayed and edited in this space
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 2)
    }

    /**
     * Rotation for the background image (ortho view only)
     * @desc float in [-inf, inf], default 0.0
     */
    public get rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rotation`)
    }

    /**
     * Scale the background image
     * @desc float in [0, inf], default 0.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * Show this image as background
     * @desc boolean, default False
     */
    public get show_background_image(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_background_image`)
    }

    /**
     * Show the expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Show this image in front of objects in viewport
     * @desc boolean, default False
     */
    public get show_on_foreground(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_on_foreground`)
    }

    /**
     * Data source used for background
     * @desc enum in ['IMAGE', 'MOVIE_CLIP'], default 'IMAGE'
     */
    public get source(): 'IMAGE' | 'MOVIE_CLIP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.source`)
    }

    /**
     * Use movie clip from active scene camera
     * @desc boolean, default False
     */
    public get use_camera_clip(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_camera_clip`)
    }

    /**
     * Flip the background image horizontally
     * @desc boolean, default False
     */
    public get use_flip_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flip_x`)
    }

    /**
     * Flip the background image vertically
     * @desc boolean, default False
     */
    public get use_flip_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flip_y`)
    }

    /**
     * Image opacity to blend the image against the background color
     * @desc float in [0, 1], default 0.0
     */
    public set alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha`, value)
    }

    /**
     * Movie clip displayed and edited in this space
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Display under or over everything
     * @desc enum in ['BACK', 'FRONT'], default 'BACK'
     */
    public set display_depth(value: 'BACK' | 'FRONT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_depth`, value)
    }

    /**
     * How the image fits in the camera frame
     * @desc enum in ['STRETCH', 'FIT', 'CROP'], default 'STRETCH'
     */
    public set frame_method(value: 'STRETCH' | 'FIT' | 'CROP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.frame_method`, value)
    }

    /**
     * Image displayed and edited in this space
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Rotation for the background image (ortho view only)
     * @desc float in [-inf, inf], default 0.0
     */
    public set rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Scale the background image
     * @desc float in [0, inf], default 0.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Show this image as background
     * @desc boolean, default False
     */
    public set show_background_image(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_background_image`, value)
    }

    /**
     * Show the expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Show this image in front of objects in viewport
     * @desc boolean, default False
     */
    public set show_on_foreground(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_on_foreground`, value)
    }

    /**
     * Data source used for background
     * @desc enum in ['IMAGE', 'MOVIE_CLIP'], default 'IMAGE'
     */
    public set source(value: 'IMAGE' | 'MOVIE_CLIP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.source`, value)
    }

    /**
     * Use movie clip from active scene camera
     * @desc boolean, default False
     */
    public set use_camera_clip(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_camera_clip`, value)
    }

    /**
     * Flip the background image horizontally
     * @desc boolean, default False
     */
    public set use_flip_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flip_x`, value)
    }

    /**
     * Flip the background image vertically
     * @desc boolean, default False
     */
    public set use_flip_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flip_y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
