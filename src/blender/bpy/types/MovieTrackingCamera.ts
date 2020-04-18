import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieTrackingCamera
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingCamera.html
 */
export class MovieTrackingCamera {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distortion model used for camera lenses
     * @desc enum in ['POLYNOMIAL', 'DIVISION'], default 'POLYNOMIAL'
     */
    public get distortion_model(): 'POLYNOMIAL' | 'DIVISION' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distortion_model`)
    }

    /**
     * First coefficient of second order division distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public get division_k1(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.division_k1`)
    }

    /**
     * First coefficient of second order division distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public get division_k2(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.division_k2`)
    }

    /**
     * Camera’s focal length
     * @desc float in [0.0001, inf], default 0.0
     */
    public get focal_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.focal_length`)
    }

    /**
     * Camera’s focal length
     * @desc float in [0, inf], default 0.0
     */
    public get focal_length_pixels(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.focal_length_pixels`)
    }

    /**
     * First coefficient of third order polynomial radial distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public get k1(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.k1`)
    }

    /**
     * Second coefficient of third order polynomial radial distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public get k2(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.k2`)
    }

    /**
     * Third coefficient of third order polynomial radial distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public get k3(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.k3`)
    }

    /**
     * Pixel aspect ratio
     * @desc float in [0.1, inf], default 1.0
     */
    public get pixel_aspect(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pixel_aspect`)
    }

    /**
     * Optical center of lens
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get principal(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.principal`, 'number', 2)
    }

    /**
     * Width of CCD sensor in millimeters
     * @desc float in [0, 500], default 0.0
     */
    public get sensor_width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.sensor_width`)
    }

    /**
     * Units used for camera focal length
     * @desc enum in ['PIXELS', 'MILLIMETERS'], default 'PIXELS'
     */
    public get units(): 'PIXELS' | 'MILLIMETERS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.units`)
    }

    /**
     * Distortion model used for camera lenses
     * @desc enum in ['POLYNOMIAL', 'DIVISION'], default 'POLYNOMIAL'
     */
    public set distortion_model(value: 'POLYNOMIAL' | 'DIVISION') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distortion_model`, value)
    }

    /**
     * First coefficient of second order division distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public set division_k1(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.division_k1`, value)
    }

    /**
     * First coefficient of second order division distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public set division_k2(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.division_k2`, value)
    }

    /**
     * Camera’s focal length
     * @desc float in [0.0001, inf], default 0.0
     */
    public set focal_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.focal_length`, value)
    }

    /**
     * Camera’s focal length
     * @desc float in [0, inf], default 0.0
     */
    public set focal_length_pixels(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.focal_length_pixels`, value)
    }

    /**
     * First coefficient of third order polynomial radial distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public set k1(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.k1`, value)
    }

    /**
     * Second coefficient of third order polynomial radial distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public set k2(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.k2`, value)
    }

    /**
     * Third coefficient of third order polynomial radial distortion
     * @desc float in [-inf, inf], default 0.0
     */
    public set k3(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.k3`, value)
    }

    /**
     * Pixel aspect ratio
     * @desc float in [0.1, inf], default 1.0
     */
    public set pixel_aspect(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pixel_aspect`, value)
    }

    /**
     * Optical center of lens
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set principal(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.principal`, value)
    }

    /**
     * Width of CCD sensor in millimeters
     * @desc float in [0, 500], default 0.0
     */
    public set sensor_width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.sensor_width`, value)
    }

    /**
     * Units used for camera focal length
     * @desc enum in ['PIXELS', 'MILLIMETERS'], default 'PIXELS'
     */
    public set units(value: 'PIXELS' | 'MILLIMETERS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.units`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
