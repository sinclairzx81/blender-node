import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ColorManagedDisplaySettings } from './ColorManagedDisplaySettings'
import { Stereo3dFormat } from './Stereo3dFormat'
import { ColorManagedViewSettings } from './ColorManagedViewSettings'

/**
 * ImageFormatSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.ImageFormatSettings.html
 */
export class ImageFormatSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings of device saved image would be displayed on
     * @desc ColorManagedDisplaySettings, (readonly)
     */
    public get display_settings(): ColorManagedDisplaySettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.display_settings`, ColorManagedDisplaySettings)
    }

    /**
     * Settings for stereo 3d
     * @desc Stereo3dFormat, (readonly, never None)
     */
    public get stereo_3d_format(): Stereo3dFormat {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stereo_3d_format`, Stereo3dFormat)
    }

    /**
     * Color management settings applied on image before saving
     * @desc ColorManagedViewSettings, (readonly)
     */
    public get view_settings(): ColorManagedViewSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_settings`, ColorManagedViewSettings)
    }

    /**
     * Log conversion reference blackpoint
     * @desc int in [0, 1024], default 0
     */
    public get cineon_black(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.cineon_black`)
    }

    /**
     * Log conversion gamma
     * @desc float in [0, 10], default 0.0
     */
    public get cineon_gamma(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.cineon_gamma`)
    }

    /**
     * Log conversion reference whitepoint
     * @desc int in [0, 1024], default 0
     */
    public get cineon_white(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.cineon_white`)
    }

    /**
     * Bit depth per channel
     * @desc enum in ['8', '10', '12', '16', '32'], default '8'
     */
    public get color_depth(): '8' | '10' | '12' | '16' | '32' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_depth`)
    }

    /**
     * Choose BW for saving grayscale images, RGB for saving red, green and blue channels, and RGBA for saving red, green, blue and alpha channels
     * @desc enum in ['BW', 'RGB', 'RGBA'], default 'BW'
     */
    public get color_mode(): 'BW' | 'RGB' | 'RGBA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_mode`)
    }

    /**
     * Amount of time to determine best compression: 0 = no compression with fast file output, 100 = maximum lossless compression with slow file output
     * @desc int in [0, 100], default 15
     */
    public get compression(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.compression`)
    }

    /**
     * Codec settings for OpenEXR
     * @desc enum in ['NONE', 'PXR24', 'ZIP', 'PIZ', 'RLE', 'ZIPS', 'B44', 'B44A', 'DWAA'], default 'NONE'
     */
    public get exr_codec(): 'NONE' | 'PXR24' | 'ZIP' | 'PIZ' | 'RLE' | 'ZIPS' | 'B44' | 'B44A' | 'DWAA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.exr_codec`)
    }

    /**
     * File format to save the rendered images as
     * @desc enum in ['BMP', 'IRIS', 'PNG', 'JPEG', 'JPEG2000', 'TARGA', 'TARGA_RAW', 'CINEON', 'DPX', 'OPEN_EXR_MULTILAYER', 'OPEN_EXR', 'HDR', 'TIFF', 'AVI_JPEG', 'AVI_RAW', 'FFMPEG'], default 'PNG'
     */
    public get file_format(): 'BMP' | 'IRIS' | 'PNG' | 'JPEG' | 'JPEG2000' | 'TARGA' | 'TARGA_RAW' | 'CINEON' | 'DPX' | 'OPEN_EXR_MULTILAYER' | 'OPEN_EXR' | 'HDR' | 'TIFF' | 'AVI_JPEG' | 'AVI_RAW' | 'FFMPEG' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.file_format`)
    }

    /**
     * Codec settings for Jpeg2000
     * @desc enum in ['JP2', 'J2K'], default 'JP2'
     */
    public get jpeg2k_codec(): 'JP2' | 'J2K' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.jpeg2k_codec`)
    }

    /**
     * Quality for image formats that support lossy compression
     * @desc int in [0, 100], default 90
     */
    public get quality(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.quality`)
    }

    /**
     * Compression mode for TIFF
     * @desc enum in ['NONE', 'DEFLATE', 'LZW', 'PACKBITS'], default 'DEFLATE'
     */
    public get tiff_codec(): 'NONE' | 'DEFLATE' | 'LZW' | 'PACKBITS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tiff_codec`)
    }

    /**
     * Convert to logarithmic color space
     * @desc boolean, default False
     */
    public get use_cineon_log(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_cineon_log`)
    }

    /**
     * Use Openjpeg Cinema Preset (48fps)
     * @desc boolean, default False
     */
    public get use_jpeg2k_cinema_48(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_jpeg2k_cinema_48`)
    }

    /**
     * Use Openjpeg Cinema Preset
     * @desc boolean, default False
     */
    public get use_jpeg2k_cinema_preset(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_jpeg2k_cinema_preset`)
    }

    /**
     * Save luminance-chrominance-chrominance channels instead of RGB colors
     * @desc boolean, default False
     */
    public get use_jpeg2k_ycc(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_jpeg2k_ycc`)
    }

    /**
     * When rendering animations, save JPG preview images in same directory
     * @desc boolean, default False
     */
    public get use_preview(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_preview`)
    }

    /**
     * Save the z-depth per pixel (32 bit unsigned int z-buffer)
     * @desc boolean, default False
     */
    public get use_zbuffer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_zbuffer`)
    }

    /**
     * Format of multiview media
     * @desc enum in ['INDIVIDUAL', 'STEREO_3D'], default 'INDIVIDUAL'
     */
    public get views_format(): 'INDIVIDUAL' | 'STEREO_3D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.views_format`)
    }

    /**
     * Log conversion reference blackpoint
     * @desc int in [0, 1024], default 0
     */
    public set cineon_black(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.cineon_black`, value)
    }

    /**
     * Log conversion gamma
     * @desc float in [0, 10], default 0.0
     */
    public set cineon_gamma(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.cineon_gamma`, value)
    }

    /**
     * Log conversion reference whitepoint
     * @desc int in [0, 1024], default 0
     */
    public set cineon_white(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.cineon_white`, value)
    }

    /**
     * Bit depth per channel
     * @desc enum in ['8', '10', '12', '16', '32'], default '8'
     */
    public set color_depth(value: '8' | '10' | '12' | '16' | '32') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_depth`, value)
    }

    /**
     * Choose BW for saving grayscale images, RGB for saving red, green and blue channels, and RGBA for saving red, green, blue and alpha channels
     * @desc enum in ['BW', 'RGB', 'RGBA'], default 'BW'
     */
    public set color_mode(value: 'BW' | 'RGB' | 'RGBA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_mode`, value)
    }

    /**
     * Amount of time to determine best compression: 0 = no compression with fast file output, 100 = maximum lossless compression with slow file output
     * @desc int in [0, 100], default 15
     */
    public set compression(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.compression`, value)
    }

    /**
     * Codec settings for OpenEXR
     * @desc enum in ['NONE', 'PXR24', 'ZIP', 'PIZ', 'RLE', 'ZIPS', 'B44', 'B44A', 'DWAA'], default 'NONE'
     */
    public set exr_codec(value: 'NONE' | 'PXR24' | 'ZIP' | 'PIZ' | 'RLE' | 'ZIPS' | 'B44' | 'B44A' | 'DWAA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.exr_codec`, value)
    }

    /**
     * File format to save the rendered images as
     * @desc enum in ['BMP', 'IRIS', 'PNG', 'JPEG', 'JPEG2000', 'TARGA', 'TARGA_RAW', 'CINEON', 'DPX', 'OPEN_EXR_MULTILAYER', 'OPEN_EXR', 'HDR', 'TIFF', 'AVI_JPEG', 'AVI_RAW', 'FFMPEG'], default 'PNG'
     */
    public set file_format(value: 'BMP' | 'IRIS' | 'PNG' | 'JPEG' | 'JPEG2000' | 'TARGA' | 'TARGA_RAW' | 'CINEON' | 'DPX' | 'OPEN_EXR_MULTILAYER' | 'OPEN_EXR' | 'HDR' | 'TIFF' | 'AVI_JPEG' | 'AVI_RAW' | 'FFMPEG') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.file_format`, value)
    }

    /**
     * Codec settings for Jpeg2000
     * @desc enum in ['JP2', 'J2K'], default 'JP2'
     */
    public set jpeg2k_codec(value: 'JP2' | 'J2K') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.jpeg2k_codec`, value)
    }

    /**
     * Quality for image formats that support lossy compression
     * @desc int in [0, 100], default 90
     */
    public set quality(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.quality`, value)
    }

    /**
     * Compression mode for TIFF
     * @desc enum in ['NONE', 'DEFLATE', 'LZW', 'PACKBITS'], default 'DEFLATE'
     */
    public set tiff_codec(value: 'NONE' | 'DEFLATE' | 'LZW' | 'PACKBITS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tiff_codec`, value)
    }

    /**
     * Convert to logarithmic color space
     * @desc boolean, default False
     */
    public set use_cineon_log(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_cineon_log`, value)
    }

    /**
     * Use Openjpeg Cinema Preset (48fps)
     * @desc boolean, default False
     */
    public set use_jpeg2k_cinema_48(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_jpeg2k_cinema_48`, value)
    }

    /**
     * Use Openjpeg Cinema Preset
     * @desc boolean, default False
     */
    public set use_jpeg2k_cinema_preset(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_jpeg2k_cinema_preset`, value)
    }

    /**
     * Save luminance-chrominance-chrominance channels instead of RGB colors
     * @desc boolean, default False
     */
    public set use_jpeg2k_ycc(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_jpeg2k_ycc`, value)
    }

    /**
     * When rendering animations, save JPG preview images in same directory
     * @desc boolean, default False
     */
    public set use_preview(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_preview`, value)
    }

    /**
     * Save the z-depth per pixel (32 bit unsigned int z-buffer)
     * @desc boolean, default False
     */
    public set use_zbuffer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_zbuffer`, value)
    }

    /**
     * Format of multiview media
     * @desc enum in ['INDIVIDUAL', 'STEREO_3D'], default 'INDIVIDUAL'
     */
    public set views_format(value: 'INDIVIDUAL' | 'STEREO_3D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.views_format`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
