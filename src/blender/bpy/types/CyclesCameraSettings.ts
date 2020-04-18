import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesCameraSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesCameraSettings.html
 */
export class CyclesCameraSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of blades in aperture for polygonal bokeh (at least 3)
     * @desc int in [0, 100], default 0
     */
    public get aperture_blades(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.aperture_blades`)
    }

    /**
     * F-stop ratio (lower numbers give more defocus, higher numbers give a sharper image)
     * @desc float in [0, inf], default 5.6
     */
    public get aperture_fstop(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aperture_fstop`)
    }

    /**
     * Distortion to simulate anamorphic lens bokeh
     * @desc float in [0.01, inf], default 1.0
     */
    public get aperture_ratio(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aperture_ratio`)
    }

    /**
     * Rotation of blades in aperture
     * @desc float in [-inf, inf], default 0.0
     */
    public get aperture_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aperture_rotation`)
    }

    /**
     * Radius of the aperture for depth of field (higher values give more defocus)
     * @desc float in [0, inf], default 0.0
     */
    public get aperture_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aperture_size`)
    }

    /**
     * Use f-stop number or aperture radius
     * @desc enum in ['RADIUS', 'FSTOP'], default 'RADIUS'
     */
    public get aperture_type(): 'RADIUS' | 'FSTOP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.aperture_type`)
    }

    /**
     * Field of view for the fisheye lens
     * @desc float in [0.1745, 31.4159], default 3.14159
     */
    public get fisheye_fov(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fisheye_fov`)
    }

    /**
     * Lens focal length (mm)
     * @desc float in [0.01, 100], default 10.5
     */
    public get fisheye_lens(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fisheye_lens`)
    }

    /**
     * Maximum latitude (vertical angle) for the equirectangular lens
     * @desc float in [-1.5708, 1.5708], default 1.5708
     */
    public get latitude_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.latitude_max`)
    }

    /**
     * Minimum latitude (vertical angle) for the equirectangular lens
     * @desc float in [-1.5708, 1.5708], default -1.5708
     */
    public get latitude_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.latitude_min`)
    }

    /**
     * Maximum longitude (horizontal angle) for the equirectangular lens
     * @desc float in [-3.14159, 3.14159], default 3.14159
     */
    public get longitude_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.longitude_max`)
    }

    /**
     * Minimum longitude (horizontal angle) for the equirectangular lens
     * @desc float in [-3.14159, 3.14159], default -3.14159
     */
    public get longitude_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.longitude_min`)
    }

    /**
     * Distortion to use for the calculation
     * @desc enum in ['EQUIRECTANGULAR', 'FISHEYE_EQUIDISTANT', 'FISHEYE_EQUISOLID', 'MIRRORBALL'], default 'FISHEYE_EQUISOLID'
     */
    public get panorama_type(): 'EQUIRECTANGULAR' | 'FISHEYE_EQUIDISTANT' | 'FISHEYE_EQUISOLID' | 'MIRRORBALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.panorama_type`)
    }

    /**
     * Number of blades in aperture for polygonal bokeh (at least 3)
     * @desc int in [0, 100], default 0
     */
    public set aperture_blades(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.aperture_blades`, value)
    }

    /**
     * F-stop ratio (lower numbers give more defocus, higher numbers give a sharper image)
     * @desc float in [0, inf], default 5.6
     */
    public set aperture_fstop(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aperture_fstop`, value)
    }

    /**
     * Distortion to simulate anamorphic lens bokeh
     * @desc float in [0.01, inf], default 1.0
     */
    public set aperture_ratio(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aperture_ratio`, value)
    }

    /**
     * Rotation of blades in aperture
     * @desc float in [-inf, inf], default 0.0
     */
    public set aperture_rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aperture_rotation`, value)
    }

    /**
     * Radius of the aperture for depth of field (higher values give more defocus)
     * @desc float in [0, inf], default 0.0
     */
    public set aperture_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aperture_size`, value)
    }

    /**
     * Use f-stop number or aperture radius
     * @desc enum in ['RADIUS', 'FSTOP'], default 'RADIUS'
     */
    public set aperture_type(value: 'RADIUS' | 'FSTOP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.aperture_type`, value)
    }

    /**
     * Field of view for the fisheye lens
     * @desc float in [0.1745, 31.4159], default 3.14159
     */
    public set fisheye_fov(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fisheye_fov`, value)
    }

    /**
     * Lens focal length (mm)
     * @desc float in [0.01, 100], default 10.5
     */
    public set fisheye_lens(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fisheye_lens`, value)
    }

    /**
     * Maximum latitude (vertical angle) for the equirectangular lens
     * @desc float in [-1.5708, 1.5708], default 1.5708
     */
    public set latitude_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.latitude_max`, value)
    }

    /**
     * Minimum latitude (vertical angle) for the equirectangular lens
     * @desc float in [-1.5708, 1.5708], default -1.5708
     */
    public set latitude_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.latitude_min`, value)
    }

    /**
     * Maximum longitude (horizontal angle) for the equirectangular lens
     * @desc float in [-3.14159, 3.14159], default 3.14159
     */
    public set longitude_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.longitude_max`, value)
    }

    /**
     * Minimum longitude (horizontal angle) for the equirectangular lens
     * @desc float in [-3.14159, 3.14159], default -3.14159
     */
    public set longitude_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.longitude_min`, value)
    }

    /**
     * Distortion to use for the calculation
     * @desc enum in ['EQUIRECTANGULAR', 'FISHEYE_EQUIDISTANT', 'FISHEYE_EQUISOLID', 'MIRRORBALL'], default 'FISHEYE_EQUISOLID'
     */
    public set panorama_type(value: 'EQUIRECTANGULAR' | 'FISHEYE_EQUIDISTANT' | 'FISHEYE_EQUISOLID' | 'MIRRORBALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.panorama_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
