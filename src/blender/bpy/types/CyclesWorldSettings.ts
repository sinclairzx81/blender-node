import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesWorldSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesWorldSettings.html
 */
export class CyclesWorldSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * When using volume rendering, assume volume has the same density everywhere(not using any textures), for faster rendering
     * @desc boolean, default False
     */
    public get homogeneous_volume(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.homogeneous_volume`)
    }

    /**
     * Maximum number of bounces the background light will contribute to the render
     * @desc int in [0, 1024], default 1024
     */
    public get max_bounces(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_bounces`)
    }

    /**
     * Use multiple importance sampling for the environment, enabling for non-solid colors is recommended
     * @desc boolean, default True
     */
    public get sample_as_light(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.sample_as_light`)
    }

    /**
     * Importance map size is resolution x resolution; higher values potentially produce less noise, at the cost of memory and speed
     * @desc int in [4, 8192], default 1024
     */
    public get sample_map_resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.sample_map_resolution`)
    }

    /**
     * Number of light samples to render for each AA sample
     * @desc int in [1, 10000], default 1
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Interpolation method to use for volumes
     * @desc enum in ['LINEAR', 'CUBIC'], default 'LINEAR'
     */
    public get volume_interpolation(): 'LINEAR' | 'CUBIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.volume_interpolation`)
    }

    /**
     * Sampling method to use for volumes
     * @desc enum in ['DISTANCE', 'EQUIANGULAR', 'MULTIPLE_IMPORTANCE'], default 'EQUIANGULAR'
     */
    public get volume_sampling(): 'DISTANCE' | 'EQUIANGULAR' | 'MULTIPLE_IMPORTANCE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.volume_sampling`)
    }

    /**
     * When using volume rendering, assume volume has the same density everywhere(not using any textures), for faster rendering
     * @desc boolean, default False
     */
    public set homogeneous_volume(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.homogeneous_volume`, value)
    }

    /**
     * Maximum number of bounces the background light will contribute to the render
     * @desc int in [0, 1024], default 1024
     */
    public set max_bounces(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_bounces`, value)
    }

    /**
     * Use multiple importance sampling for the environment, enabling for non-solid colors is recommended
     * @desc boolean, default True
     */
    public set sample_as_light(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.sample_as_light`, value)
    }

    /**
     * Importance map size is resolution x resolution; higher values potentially produce less noise, at the cost of memory and speed
     * @desc int in [4, 8192], default 1024
     */
    public set sample_map_resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.sample_map_resolution`, value)
    }

    /**
     * Number of light samples to render for each AA sample
     * @desc int in [1, 10000], default 1
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    /**
     * Interpolation method to use for volumes
     * @desc enum in ['LINEAR', 'CUBIC'], default 'LINEAR'
     */
    public set volume_interpolation(value: 'LINEAR' | 'CUBIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.volume_interpolation`, value)
    }

    /**
     * Sampling method to use for volumes
     * @desc enum in ['DISTANCE', 'EQUIANGULAR', 'MULTIPLE_IMPORTANCE'], default 'EQUIANGULAR'
     */
    public set volume_sampling(value: 'DISTANCE' | 'EQUIANGULAR' | 'MULTIPLE_IMPORTANCE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.volume_sampling`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
