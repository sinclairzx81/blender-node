import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * CameraDOFSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CameraDOFSettings.html
 */
export class CameraDOFSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of blades in aperture for polygonal bokeh (at least 3)
     * @desc int in [0, 16], default 0
     */
    public get aperture_blades(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.aperture_blades`)
    }

    /**
     * F-Stop ratio (lower numbers give more defocus, higher numbers give a sharper image)
     * @desc float in [0, inf], default 2.8
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
     * @desc float in [-3.14159, 3.14159], default 0.0
     */
    public get aperture_rotation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aperture_rotation`)
    }

    /**
     * Distance to the focus point for depth of field
     * @desc float in [0, inf], default 10.0
     */
    public get focus_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.focus_distance`)
    }

    /**
     * Use this object to define the depth of field focal point
     * @desc Object
     */
    public get focus_object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.focus_object`, BlenderObject)
    }

    /**
     * Use Depth of Field
     * @desc boolean, default False
     */
    public get use_dof(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dof`)
    }

    /**
     * Number of blades in aperture for polygonal bokeh (at least 3)
     * @desc int in [0, 16], default 0
     */
    public set aperture_blades(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.aperture_blades`, value)
    }

    /**
     * F-Stop ratio (lower numbers give more defocus, higher numbers give a sharper image)
     * @desc float in [0, inf], default 2.8
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
     * @desc float in [-3.14159, 3.14159], default 0.0
     */
    public set aperture_rotation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aperture_rotation`, value)
    }

    /**
     * Distance to the focus point for depth of field
     * @desc float in [0, inf], default 10.0
     */
    public set focus_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.focus_distance`, value)
    }

    /**
     * Use this object to define the depth of field focal point
     * @desc Object
     */
    public set focus_object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.focus_object`, value)
    }

    /**
     * Use Depth of Field
     * @desc boolean, default False
     */
    public set use_dof(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_dof`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
