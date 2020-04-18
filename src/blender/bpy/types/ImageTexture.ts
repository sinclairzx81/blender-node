import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'
import { ImageUser } from './ImageUser'
import { Image } from './Image'

/**
 * ImageTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.ImageTexture.html
 */
export class ImageTexture {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Parameters defining which layer, pass and frame of the image is displayed
     * @desc ImageUser, (readonly)
     */
    public get image_user(): ImageUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_user`, ImageUser)
    }

    /**
     * Materials that use this texture(readonly)
     * @desc void
     */
    public get users_material(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_material`)
    }

    /**
     * Object modifiers that use this texture(readonly)
     * @desc void
     */
    public get users_object_modifier(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_object_modifier`)
    }

    /**
     * Distance between checker tiles
     * @desc float in [0, 0.99], default 0.0
     */
    public get checker_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.checker_distance`)
    }

    /**
     * Maximum X value to crop the image
     * @desc float in [-10, 10], default 1.0
     */
    public get crop_max_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crop_max_x`)
    }

    /**
     * Maximum Y value to crop the image
     * @desc float in [-10, 10], default 1.0
     */
    public get crop_max_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crop_max_y`)
    }

    /**
     * Minimum X value to crop the image
     * @desc float in [-10, 10], default 0.0
     */
    public get crop_min_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crop_min_x`)
    }

    /**
     * Minimum Y value to crop the image
     * @desc float in [-10, 10], default 0.0
     */
    public get crop_min_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crop_min_y`)
    }

    /**
     * How the image is extrapolated past its original bounds
     * @desc enum in ['EXTEND', 'CLIP', 'CLIP_CUBE', 'REPEAT', 'CHECKER'], default 'REPEAT'
     */
    public get extension(): 'EXTEND' | 'CLIP' | 'CLIP_CUBE' | 'REPEAT' | 'CHECKER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.extension`)
    }

    /**
     * Maximum eccentricity (higher gives less blur at distant/oblique angles, but is also slower)
     * @desc int in [1, 256], default 8
     */
    public get filter_eccentricity(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.filter_eccentricity`)
    }

    /**
     * Maximum number of samples (higher gives less blur at distant/oblique angles, but is also slower)
     * @desc int in [1, 256], default 8
     */
    public get filter_lightprobes(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.filter_lightprobes`)
    }

    /**
     * Multiply the filter size used by MIP Map and Interpolation
     * @desc float in [0.1, 50], default 1.0
     */
    public get filter_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.filter_size`)
    }

    /**
     * Texture filter to use for sampling image
     * @desc enum in ['BOX', 'EWA', 'FELINE', 'AREA'], default 'EWA'
     */
    public get filter_type(): 'BOX' | 'EWA' | 'FELINE' | 'AREA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * 
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * Invert all the alpha values in the image
     * @desc boolean, default False
     */
    public get invert_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert_alpha`)
    }

    /**
     * Repetition multiplier in the X direction
     * @desc int in [1, 512], default 1
     */
    public get repeat_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.repeat_x`)
    }

    /**
     * Repetition multiplier in the Y direction
     * @desc int in [1, 512], default 1
     */
    public get repeat_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.repeat_y`)
    }

    /**
     * Use the alpha channel information in the image
     * @desc boolean, default True
     */
    public get use_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha`)
    }

    /**
     * Calculate an alpha channel based on RGB values in the image
     * @desc boolean, default False
     */
    public get use_calculate_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_calculate_alpha`)
    }

    /**
     * Even checker tiles
     * @desc boolean, default False
     */
    public get use_checker_even(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_checker_even`)
    }

    /**
     * Odd checker tiles
     * @desc boolean, default True
     */
    public get use_checker_odd(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_checker_odd`)
    }

    /**
     * Use Filter Size as a minimal filter value in pixels
     * @desc boolean, default False
     */
    public get use_filter_size_min(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_size_min`)
    }

    /**
     * Flip the texture’s X and Y axis
     * @desc boolean, default False
     */
    public get use_flip_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flip_axis`)
    }

    /**
     * Interpolate pixels using selected filter
     * @desc boolean, default True
     */
    public get use_interpolation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_interpolation`)
    }

    /**
     * Use auto-generated MIP maps for the image
     * @desc boolean, default True
     */
    public get use_mipmap(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mipmap`)
    }

    /**
     * Use Gauss filter to sample down MIP maps
     * @desc boolean, default False
     */
    public get use_mipmap_gauss(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mipmap_gauss`)
    }

    /**
     * Mirror the image repetition on the X direction
     * @desc boolean, default False
     */
    public get use_mirror_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_x`)
    }

    /**
     * Mirror the image repetition on the Y direction
     * @desc boolean, default False
     */
    public get use_mirror_y(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_y`)
    }

    /**
     * Use image RGB values for normal mapping
     * @desc boolean, default False
     */
    public get use_normal_map(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_normal_map`)
    }

    /**
     * Distance between checker tiles
     * @desc float in [0, 0.99], default 0.0
     */
    public set checker_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.checker_distance`, value)
    }

    /**
     * Maximum X value to crop the image
     * @desc float in [-10, 10], default 1.0
     */
    public set crop_max_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crop_max_x`, value)
    }

    /**
     * Maximum Y value to crop the image
     * @desc float in [-10, 10], default 1.0
     */
    public set crop_max_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crop_max_y`, value)
    }

    /**
     * Minimum X value to crop the image
     * @desc float in [-10, 10], default 0.0
     */
    public set crop_min_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crop_min_x`, value)
    }

    /**
     * Minimum Y value to crop the image
     * @desc float in [-10, 10], default 0.0
     */
    public set crop_min_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crop_min_y`, value)
    }

    /**
     * How the image is extrapolated past its original bounds
     * @desc enum in ['EXTEND', 'CLIP', 'CLIP_CUBE', 'REPEAT', 'CHECKER'], default 'REPEAT'
     */
    public set extension(value: 'EXTEND' | 'CLIP' | 'CLIP_CUBE' | 'REPEAT' | 'CHECKER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.extension`, value)
    }

    /**
     * Maximum eccentricity (higher gives less blur at distant/oblique angles, but is also slower)
     * @desc int in [1, 256], default 8
     */
    public set filter_eccentricity(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.filter_eccentricity`, value)
    }

    /**
     * Maximum number of samples (higher gives less blur at distant/oblique angles, but is also slower)
     * @desc int in [1, 256], default 8
     */
    public set filter_lightprobes(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.filter_lightprobes`, value)
    }

    /**
     * Multiply the filter size used by MIP Map and Interpolation
     * @desc float in [0.1, 50], default 1.0
     */
    public set filter_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.filter_size`, value)
    }

    /**
     * Texture filter to use for sampling image
     * @desc enum in ['BOX', 'EWA', 'FELINE', 'AREA'], default 'EWA'
     */
    public set filter_type(value: 'BOX' | 'EWA' | 'FELINE' | 'AREA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * 
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    /**
     * Invert all the alpha values in the image
     * @desc boolean, default False
     */
    public set invert_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert_alpha`, value)
    }

    /**
     * Repetition multiplier in the X direction
     * @desc int in [1, 512], default 1
     */
    public set repeat_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.repeat_x`, value)
    }

    /**
     * Repetition multiplier in the Y direction
     * @desc int in [1, 512], default 1
     */
    public set repeat_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.repeat_y`, value)
    }

    /**
     * Use the alpha channel information in the image
     * @desc boolean, default True
     */
    public set use_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha`, value)
    }

    /**
     * Calculate an alpha channel based on RGB values in the image
     * @desc boolean, default False
     */
    public set use_calculate_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_calculate_alpha`, value)
    }

    /**
     * Even checker tiles
     * @desc boolean, default False
     */
    public set use_checker_even(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_checker_even`, value)
    }

    /**
     * Odd checker tiles
     * @desc boolean, default True
     */
    public set use_checker_odd(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_checker_odd`, value)
    }

    /**
     * Use Filter Size as a minimal filter value in pixels
     * @desc boolean, default False
     */
    public set use_filter_size_min(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_size_min`, value)
    }

    /**
     * Flip the texture’s X and Y axis
     * @desc boolean, default False
     */
    public set use_flip_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flip_axis`, value)
    }

    /**
     * Interpolate pixels using selected filter
     * @desc boolean, default True
     */
    public set use_interpolation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_interpolation`, value)
    }

    /**
     * Use auto-generated MIP maps for the image
     * @desc boolean, default True
     */
    public set use_mipmap(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mipmap`, value)
    }

    /**
     * Use Gauss filter to sample down MIP maps
     * @desc boolean, default False
     */
    public set use_mipmap_gauss(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mipmap_gauss`, value)
    }

    /**
     * Mirror the image repetition on the X direction
     * @desc boolean, default False
     */
    public set use_mirror_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_x`, value)
    }

    /**
     * Mirror the image repetition on the Y direction
     * @desc boolean, default False
     */
    public set use_mirror_y(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_y`, value)
    }

    /**
     * Use image RGB values for normal mapping
     * @desc boolean, default False
     */
    public set use_normal_map(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_normal_map`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
