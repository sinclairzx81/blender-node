import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * VoronoiTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.VoronoiTexture.html
 */
export class VoronoiTexture {

    constructor(public interop: BlenderInterop, public accessor: string) { }

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
     * 
     * @desc enum in ['INTENSITY', 'POSITION', 'POSITION_OUTLINE', 'POSITION_OUTLINE_INTENSITY'], default 'INTENSITY'
     */
    public get color_mode(): 'INTENSITY' | 'POSITION' | 'POSITION_OUTLINE' | 'POSITION_OUTLINE_INTENSITY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_mode`)
    }

    /**
     * Algorithm used to calculate distance of sample points to feature points
     * @desc enum in ['DISTANCE', 'DISTANCE_SQUARED', 'MANHATTAN', 'CHEBYCHEV', 'MINKOVSKY_HALF', 'MINKOVSKY_FOUR', 'MINKOVSKY'], default 'DISTANCE'
     */
    public get distance_metric(): 'DISTANCE' | 'DISTANCE_SQUARED' | 'MANHATTAN' | 'CHEBYCHEV' | 'MINKOVSKY_HALF' | 'MINKOVSKY_FOUR' | 'MINKOVSKY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distance_metric`)
    }

    /**
     * Minkowski exponent
     * @desc float in [0.01, 10], default 2.5
     */
    public get minkovsky_exponent(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.minkovsky_exponent`)
    }

    /**
     * Size of derivative offset used for calculating normal
     * @desc float in [0.001, 0.1], default 0.025
     */
    public get nabla(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.nabla`)
    }

    /**
     * Scales the intensity of the noise
     * @desc float in [0.01, 10], default 1.0
     */
    public get noise_intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.noise_intensity`)
    }

    /**
     * Scaling for noise input
     * @desc float in [0.0001, inf], default 0.25
     */
    public get noise_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.noise_scale`)
    }

    /**
     * Voronoi feature weight 1
     * @desc float in [-2, 2], default 1.0
     */
    public get weight_1(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_1`)
    }

    /**
     * Voronoi feature weight 2
     * @desc float in [-2, 2], default 0.0
     */
    public get weight_2(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_2`)
    }

    /**
     * Voronoi feature weight 3
     * @desc float in [-2, 2], default 0.0
     */
    public get weight_3(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_3`)
    }

    /**
     * Voronoi feature weight 4
     * @desc float in [-2, 2], default 0.0
     */
    public get weight_4(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_4`)
    }

    /**
     * 
     * @desc enum in ['INTENSITY', 'POSITION', 'POSITION_OUTLINE', 'POSITION_OUTLINE_INTENSITY'], default 'INTENSITY'
     */
    public set color_mode(value: 'INTENSITY' | 'POSITION' | 'POSITION_OUTLINE' | 'POSITION_OUTLINE_INTENSITY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_mode`, value)
    }

    /**
     * Algorithm used to calculate distance of sample points to feature points
     * @desc enum in ['DISTANCE', 'DISTANCE_SQUARED', 'MANHATTAN', 'CHEBYCHEV', 'MINKOVSKY_HALF', 'MINKOVSKY_FOUR', 'MINKOVSKY'], default 'DISTANCE'
     */
    public set distance_metric(value: 'DISTANCE' | 'DISTANCE_SQUARED' | 'MANHATTAN' | 'CHEBYCHEV' | 'MINKOVSKY_HALF' | 'MINKOVSKY_FOUR' | 'MINKOVSKY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distance_metric`, value)
    }

    /**
     * Minkowski exponent
     * @desc float in [0.01, 10], default 2.5
     */
    public set minkovsky_exponent(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.minkovsky_exponent`, value)
    }

    /**
     * Size of derivative offset used for calculating normal
     * @desc float in [0.001, 0.1], default 0.025
     */
    public set nabla(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.nabla`, value)
    }

    /**
     * Scales the intensity of the noise
     * @desc float in [0.01, 10], default 1.0
     */
    public set noise_intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.noise_intensity`, value)
    }

    /**
     * Scaling for noise input
     * @desc float in [0.0001, inf], default 0.25
     */
    public set noise_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.noise_scale`, value)
    }

    /**
     * Voronoi feature weight 1
     * @desc float in [-2, 2], default 1.0
     */
    public set weight_1(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_1`, value)
    }

    /**
     * Voronoi feature weight 2
     * @desc float in [-2, 2], default 0.0
     */
    public set weight_2(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_2`, value)
    }

    /**
     * Voronoi feature weight 3
     * @desc float in [-2, 2], default 0.0
     */
    public set weight_3(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_3`, value)
    }

    /**
     * Voronoi feature weight 4
     * @desc float in [-2, 2], default 0.0
     */
    public set weight_4(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_4`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
