import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Light } from './Light'
import { CurveMapping } from './CurveMapping'

/**
 * SpotLight
 * 
 * https://docs.blender.org/api/current/bpy.types.SpotLight.html
 */
export class SpotLight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Custom light falloff curve
     * @desc CurveMapping, (readonly)
     */
    public get falloff_curve(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.falloff_curve`, CurveMapping)
    }

    /**
     * Constant distance attenuation coefficient
     * @desc float in [0, inf], default 1.0
     */
    public get constant_coefficient(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.constant_coefficient`)
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
     * Intensity Decay with distance
     * @desc enum in ['CONSTANT', 'INVERSE_LINEAR', 'INVERSE_SQUARE', 'INVERSE_COEFFICIENTS', 'CUSTOM_CURVE', 'LINEAR_QUADRATIC_WEIGHTED'], default 'INVERSE_SQUARE'
     */
    public get falloff_type(): 'CONSTANT' | 'INVERSE_LINEAR' | 'INVERSE_SQUARE' | 'INVERSE_COEFFICIENTS' | 'CUSTOM_CURVE' | 'LINEAR_QUADRATIC_WEIGHTED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff_type`)
    }

    /**
     * Linear distance attenuation
     * @desc float in [0, 1], default 0.0
     */
    public get linear_attenuation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.linear_attenuation`)
    }

    /**
     * Linear distance attenuation coefficient
     * @desc float in [0, inf], default 0.0
     */
    public get linear_coefficient(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.linear_coefficient`)
    }

    /**
     * Quadratic distance attenuation
     * @desc float in [0, 1], default 1.0
     */
    public get quadratic_attenuation(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.quadratic_attenuation`)
    }

    /**
     * Quadratic distance attenuation coefficient
     * @desc float in [0, inf], default 0.0
     */
    public get quadratic_coefficient(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.quadratic_coefficient`)
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
     * Draw transparent cone in 3D view to visualize which objects are contained in it
     * @desc boolean, default False
     */
    public get show_cone(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_cone`)
    }

    /**
     * The softness of the spotlight edge
     * @desc float in [0, 1], default 0.15
     */
    public get spot_blend(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spot_blend`)
    }

    /**
     * Angle of the spotlight beam
     * @desc float in [0.0174533, 3.14159], default 0.785398
     */
    public get spot_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spot_size`)
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
     * Cast a square spot light shape
     * @desc boolean, default False
     */
    public get use_square(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_square`)
    }

    /**
     * Constant distance attenuation coefficient
     * @desc float in [0, inf], default 1.0
     */
    public set constant_coefficient(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.constant_coefficient`, value)
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
     * Intensity Decay with distance
     * @desc enum in ['CONSTANT', 'INVERSE_LINEAR', 'INVERSE_SQUARE', 'INVERSE_COEFFICIENTS', 'CUSTOM_CURVE', 'LINEAR_QUADRATIC_WEIGHTED'], default 'INVERSE_SQUARE'
     */
    public set falloff_type(value: 'CONSTANT' | 'INVERSE_LINEAR' | 'INVERSE_SQUARE' | 'INVERSE_COEFFICIENTS' | 'CUSTOM_CURVE' | 'LINEAR_QUADRATIC_WEIGHTED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff_type`, value)
    }

    /**
     * Linear distance attenuation
     * @desc float in [0, 1], default 0.0
     */
    public set linear_attenuation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.linear_attenuation`, value)
    }

    /**
     * Linear distance attenuation coefficient
     * @desc float in [0, inf], default 0.0
     */
    public set linear_coefficient(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.linear_coefficient`, value)
    }

    /**
     * Quadratic distance attenuation
     * @desc float in [0, 1], default 1.0
     */
    public set quadratic_attenuation(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.quadratic_attenuation`, value)
    }

    /**
     * Quadratic distance attenuation coefficient
     * @desc float in [0, inf], default 0.0
     */
    public set quadratic_coefficient(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.quadratic_coefficient`, value)
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
     * Draw transparent cone in 3D view to visualize which objects are contained in it
     * @desc boolean, default False
     */
    public set show_cone(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_cone`, value)
    }

    /**
     * The softness of the spotlight edge
     * @desc float in [0, 1], default 0.15
     */
    public set spot_blend(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spot_blend`, value)
    }

    /**
     * Angle of the spotlight beam
     * @desc float in [0.0174533, 3.14159], default 0.785398
     */
    public set spot_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spot_size`, value)
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

    /**
     * Cast a square spot light shape
     * @desc boolean, default False
     */
    public set use_square(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_square`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
