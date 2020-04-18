import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Light } from './Light'

/**
 * SunLight
 * 
 * https://docs.blender.org/api/current/bpy.types.SunLight.html
 */
export class SunLight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Angular diameter of the Sun as seen from the Earth
     * @desc float in [0, 3.14159], default 0.00918043
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * Bias to avoid self shadowing
     * @desc float in [0.001, 9999], default 0.03
     */
    public get contact_shadow_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contact_shadow_bias`)
    }

    /**
     * World space distance in which to search for screen space occluder
     * @desc float in [0, 9999], default 0.2
     */
    public get contact_shadow_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contact_shadow_distance`)
    }

    /**
     * Pixel thickness used to detect occlusion
     * @desc float in [0, 9999], default 0.2
     */
    public get contact_shadow_thickness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.contact_shadow_thickness`)
    }

    /**
     * Amount of light emitted
     * @desc float in [-inf, inf], default 10.0
     */
    public get energy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.energy`)
    }

    /**
     * Bias for reducing self shadowing
     * @desc float in [0.001, 9999], default 1.0
     */
    public get shadow_buffer_bias(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_buffer_bias`)
    }

    /**
     * Shadow map clip start, below which objects will not generate shadows
     * @desc float in [1e-06, inf], default 0.05
     */
    public get shadow_buffer_clip_start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_buffer_clip_start`)
    }

    /**
     * Number of shadow buffer samples
     * @desc int in [1, 16], default 3
     */
    public get shadow_buffer_samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadow_buffer_samples`)
    }

    /**
     * Resolution of the shadow buffer, higher values give crisper shadows but use more memory
     * @desc int in [128, 10240], default 512
     */
    public get shadow_buffer_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadow_buffer_size`)
    }

    /**
     * Number of texture used by the cascaded shadow map
     * @desc int in [1, 4], default 4
     */
    public get shadow_cascade_count(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.shadow_cascade_count`)
    }

    /**
     * Higher value increase resolution towards the viewpoint
     * @desc float in [0, 1], default 0.8
     */
    public get shadow_cascade_exponent(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_cascade_exponent`)
    }

    /**
     * How smooth is the transition between each cascade
     * @desc float in [0, 1], default 0.1
     */
    public get shadow_cascade_fade(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_cascade_fade`)
    }

    /**
     * End distance of the cascaded shadow map (only in perspective view)
     * @desc float in [0, inf], default 200.0
     */
    public get shadow_cascade_max_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_cascade_max_distance`)
    }

    /**
     * Color of shadows cast by the light
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get shadow_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.shadow_color`, 'number', 3)
    }

    /**
     * Light size for ray shadow sampling (Raytraced shadows)
     * @desc float in [0, inf], default 0.25
     */
    public get shadow_soft_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.shadow_soft_size`)
    }

    /**
     * Use screen space raytracing to have correct shadowing near occluder, or for small features that does not appear in shadow maps
     * @desc boolean, default False
     */
    public get use_contact_shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_contact_shadow`)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public get use_shadow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_shadow`)
    }

    /**
     * Angular diameter of the Sun as seen from the Earth
     * @desc float in [0, 3.14159], default 0.00918043
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * Bias to avoid self shadowing
     * @desc float in [0.001, 9999], default 0.03
     */
    public set contact_shadow_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contact_shadow_bias`, value)
    }

    /**
     * World space distance in which to search for screen space occluder
     * @desc float in [0, 9999], default 0.2
     */
    public set contact_shadow_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contact_shadow_distance`, value)
    }

    /**
     * Pixel thickness used to detect occlusion
     * @desc float in [0, 9999], default 0.2
     */
    public set contact_shadow_thickness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.contact_shadow_thickness`, value)
    }

    /**
     * Amount of light emitted
     * @desc float in [-inf, inf], default 10.0
     */
    public set energy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.energy`, value)
    }

    /**
     * Bias for reducing self shadowing
     * @desc float in [0.001, 9999], default 1.0
     */
    public set shadow_buffer_bias(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_buffer_bias`, value)
    }

    /**
     * Shadow map clip start, below which objects will not generate shadows
     * @desc float in [1e-06, inf], default 0.05
     */
    public set shadow_buffer_clip_start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_buffer_clip_start`, value)
    }

    /**
     * Number of shadow buffer samples
     * @desc int in [1, 16], default 3
     */
    public set shadow_buffer_samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadow_buffer_samples`, value)
    }

    /**
     * Resolution of the shadow buffer, higher values give crisper shadows but use more memory
     * @desc int in [128, 10240], default 512
     */
    public set shadow_buffer_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadow_buffer_size`, value)
    }

    /**
     * Number of texture used by the cascaded shadow map
     * @desc int in [1, 4], default 4
     */
    public set shadow_cascade_count(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.shadow_cascade_count`, value)
    }

    /**
     * Higher value increase resolution towards the viewpoint
     * @desc float in [0, 1], default 0.8
     */
    public set shadow_cascade_exponent(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_cascade_exponent`, value)
    }

    /**
     * How smooth is the transition between each cascade
     * @desc float in [0, 1], default 0.1
     */
    public set shadow_cascade_fade(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_cascade_fade`, value)
    }

    /**
     * End distance of the cascaded shadow map (only in perspective view)
     * @desc float in [0, inf], default 200.0
     */
    public set shadow_cascade_max_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_cascade_max_distance`, value)
    }

    /**
     * Color of shadows cast by the light
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set shadow_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.shadow_color`, value)
    }

    /**
     * Light size for ray shadow sampling (Raytraced shadows)
     * @desc float in [0, inf], default 0.25
     */
    public set shadow_soft_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.shadow_soft_size`, value)
    }

    /**
     * Use screen space raytracing to have correct shadowing near occluder, or for small features that does not appear in shadow maps
     * @desc boolean, default False
     */
    public set use_contact_shadow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_contact_shadow`, value)
    }

    /**
     * 
     * @desc boolean, default True
     */
    public set use_shadow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_shadow`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
