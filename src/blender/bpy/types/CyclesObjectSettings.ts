import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * CyclesObjectSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.CyclesObjectSettings.html
 */
export class CyclesObjectSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Multiplier for scene dicing rate (located in the Geometry Panel)
     * @desc float in [0.1, 1000], default 1.0
     */
    public get dicing_rate(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dicing_rate`)
    }

    /**
     * Only render shadows on this object, for compositing renders into real footage
     * @desc boolean, default False
     */
    public get is_shadow_catcher(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_shadow_catcher`)
    }

    /**
     * Control accuracy of deformation motion blur, more steps gives more memory usage (actual number of steps is 2^(steps - 1))
     * @desc int in [1, inf], default 1
     */
    public get motion_steps(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.motion_steps`)
    }

    /**
     * Use adaptive render time subdivision
     * @desc boolean, default False
     */
    public get use_adaptive_subdivision(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_adaptive_subdivision`)
    }

    /**
     * Allow this object and its duplicators to be culled by camera space culling
     * @desc boolean, default False
     */
    public get use_camera_cull(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_camera_cull`)
    }

    /**
     * Use deformation motion blur for this object
     * @desc boolean, default True
     */
    public get use_deform_motion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_deform_motion`)
    }

    /**
     * Allow this object and its duplicators to be culled by distance from camera
     * @desc boolean, default False
     */
    public get use_distance_cull(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_distance_cull`)
    }

    /**
     * Use motion blur for this object
     * @desc boolean, default True
     */
    public get use_motion_blur(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_motion_blur`)
    }

    /**
     * Multiplier for scene dicing rate (located in the Geometry Panel)
     * @desc float in [0.1, 1000], default 1.0
     */
    public set dicing_rate(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.dicing_rate`, value)
    }

    /**
     * Only render shadows on this object, for compositing renders into real footage
     * @desc boolean, default False
     */
    public set is_shadow_catcher(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_shadow_catcher`, value)
    }

    /**
     * Control accuracy of deformation motion blur, more steps gives more memory usage (actual number of steps is 2^(steps - 1))
     * @desc int in [1, inf], default 1
     */
    public set motion_steps(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.motion_steps`, value)
    }

    /**
     * Use adaptive render time subdivision
     * @desc boolean, default False
     */
    public set use_adaptive_subdivision(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_adaptive_subdivision`, value)
    }

    /**
     * Allow this object and its duplicators to be culled by camera space culling
     * @desc boolean, default False
     */
    public set use_camera_cull(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_camera_cull`, value)
    }

    /**
     * Use deformation motion blur for this object
     * @desc boolean, default True
     */
    public set use_deform_motion(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_deform_motion`, value)
    }

    /**
     * Allow this object and its duplicators to be culled by distance from camera
     * @desc boolean, default False
     */
    public set use_distance_cull(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_distance_cull`, value)
    }

    /**
     * Use motion blur for this object
     * @desc boolean, default True
     */
    public set use_motion_blur(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_motion_blur`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
