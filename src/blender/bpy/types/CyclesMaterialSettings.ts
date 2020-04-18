import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesMaterialSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesMaterialSettings.html
 */
export class CyclesMaterialSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Method to use for the displacement
     * @desc enum in ['BUMP', 'TRUE', 'BOTH'], default 'BUMP'
     */
    public get displacement_method(): 'BUMP' | 'TRUE' | 'BOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.displacement_method`)
    }

    /**
     * When using volume rendering, assume volume has the same density everywhere (not using any textures), for faster rendering
     * @desc boolean, default False
     */
    public get homogeneous_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.homogeneous_volume`)
    }

    /**
     * Use multiple importance sampling for this material, disabling may reduce overall noise for large objects that emit little light compared to other light sources
     * @desc boolean, default True
     */
    public get sample_as_light(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.sample_as_light`)
    }

    /**
     * Use transparent shadows for this material if it contains a Transparent BSDF, disabling will render faster but not give accurate shadows
     * @desc boolean, default True
     */
    public get use_transparent_shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_transparent_shadow`)
    }

    /**
     * Interpolation method to use for smoke/fire volumes
     * @desc enum in ['LINEAR', 'CUBIC'], default 'LINEAR'
     */
    public get volume_interpolation(): 'LINEAR' | 'CUBIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.volume_interpolation`)
    }

    /**
     * Sampling method to use for volumes
     * @desc enum in ['DISTANCE', 'EQUIANGULAR', 'MULTIPLE_IMPORTANCE'], default 'MULTIPLE_IMPORTANCE'
     */
    public get volume_sampling(): 'DISTANCE' | 'EQUIANGULAR' | 'MULTIPLE_IMPORTANCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.volume_sampling`)
    }

    /**
     * Method to use for the displacement
     * @desc enum in ['BUMP', 'TRUE', 'BOTH'], default 'BUMP'
     */
    public set displacement_method(value: 'BUMP' | 'TRUE' | 'BOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.displacement_method`, value)
    }

    /**
     * When using volume rendering, assume volume has the same density everywhere (not using any textures), for faster rendering
     * @desc boolean, default False
     */
    public set homogeneous_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.homogeneous_volume`, value)
    }

    /**
     * Use multiple importance sampling for this material, disabling may reduce overall noise for large objects that emit little light compared to other light sources
     * @desc boolean, default True
     */
    public set sample_as_light(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.sample_as_light`, value)
    }

    /**
     * Use transparent shadows for this material if it contains a Transparent BSDF, disabling will render faster but not give accurate shadows
     * @desc boolean, default True
     */
    public set use_transparent_shadow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_transparent_shadow`, value)
    }

    /**
     * Interpolation method to use for smoke/fire volumes
     * @desc enum in ['LINEAR', 'CUBIC'], default 'LINEAR'
     */
    public set volume_interpolation(value: 'LINEAR' | 'CUBIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.volume_interpolation`, value)
    }

    /**
     * Sampling method to use for volumes
     * @desc enum in ['DISTANCE', 'EQUIANGULAR', 'MULTIPLE_IMPORTANCE'], default 'MULTIPLE_IMPORTANCE'
     */
    public set volume_sampling(value: 'DISTANCE' | 'EQUIANGULAR' | 'MULTIPLE_IMPORTANCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.volume_sampling`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
