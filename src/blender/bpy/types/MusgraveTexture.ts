import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * MusgraveTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.MusgraveTexture.html
 */
export class MusgraveTexture {

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
     * Highest fractal dimension
     * @desc float in [0.0001, 2], default 1.0
     */
    public get dimension_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dimension_max`)
    }

    /**
     * The gain multiplier
     * @desc float in [0, 6], default 1.0
     */
    public get gain(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gain`)
    }

    /**
     * Gap between successive frequencies
     * @desc float in [0, 6], default 2.0
     */
    public get lacunarity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lacunarity`)
    }

    /**
     * Fractal noise algorithm
     * @desc enum in ['MULTIFRACTAL', 'RIDGED_MULTIFRACTAL', 'HYBRID_MULTIFRACTAL', 'FBM', 'HETERO_TERRAIN'], default 'MULTIFRACTAL'
     */
    public get musgrave_type(): 'MULTIFRACTAL' | 'RIDGED_MULTIFRACTAL' | 'HYBRID_MULTIFRACTAL' | 'FBM' | 'HETERO_TERRAIN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.musgrave_type`)
    }

    /**
     * Size of derivative offset used for calculating normal
     * @desc float in [0.001, 0.1], default 0.025
     */
    public get nabla(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.nabla`)
    }

    /**
     * Noise basis used for turbulence
     * @desc enum in ['BLENDER_ORIGINAL', 'ORIGINAL_PERLIN', 'IMPROVED_PERLIN', 'VORONOI_F1', 'VORONOI_F2', 'VORONOI_F3', 'VORONOI_F4', 'VORONOI_F2_F1', 'VORONOI_CRACKLE', 'CELL_NOISE'], default 'BLENDER_ORIGINAL'
     */
    public get noise_basis(): 'BLENDER_ORIGINAL' | 'ORIGINAL_PERLIN' | 'IMPROVED_PERLIN' | 'VORONOI_F1' | 'VORONOI_F2' | 'VORONOI_F3' | 'VORONOI_F4' | 'VORONOI_F2_F1' | 'VORONOI_CRACKLE' | 'CELL_NOISE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.noise_basis`)
    }

    /**
     * Intensity of the noise
     * @desc float in [0, 10], default 1.0
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
     * Number of frequencies used
     * @desc float in [0, 8], default 2.0
     */
    public get octaves(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.octaves`)
    }

    /**
     * The fractal offset
     * @desc float in [0, 6], default 1.0
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * Highest fractal dimension
     * @desc float in [0.0001, 2], default 1.0
     */
    public set dimension_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.dimension_max`, value)
    }

    /**
     * The gain multiplier
     * @desc float in [0, 6], default 1.0
     */
    public set gain(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gain`, value)
    }

    /**
     * Gap between successive frequencies
     * @desc float in [0, 6], default 2.0
     */
    public set lacunarity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lacunarity`, value)
    }

    /**
     * Fractal noise algorithm
     * @desc enum in ['MULTIFRACTAL', 'RIDGED_MULTIFRACTAL', 'HYBRID_MULTIFRACTAL', 'FBM', 'HETERO_TERRAIN'], default 'MULTIFRACTAL'
     */
    public set musgrave_type(value: 'MULTIFRACTAL' | 'RIDGED_MULTIFRACTAL' | 'HYBRID_MULTIFRACTAL' | 'FBM' | 'HETERO_TERRAIN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.musgrave_type`, value)
    }

    /**
     * Size of derivative offset used for calculating normal
     * @desc float in [0.001, 0.1], default 0.025
     */
    public set nabla(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.nabla`, value)
    }

    /**
     * Noise basis used for turbulence
     * @desc enum in ['BLENDER_ORIGINAL', 'ORIGINAL_PERLIN', 'IMPROVED_PERLIN', 'VORONOI_F1', 'VORONOI_F2', 'VORONOI_F3', 'VORONOI_F4', 'VORONOI_F2_F1', 'VORONOI_CRACKLE', 'CELL_NOISE'], default 'BLENDER_ORIGINAL'
     */
    public set noise_basis(value: 'BLENDER_ORIGINAL' | 'ORIGINAL_PERLIN' | 'IMPROVED_PERLIN' | 'VORONOI_F1' | 'VORONOI_F2' | 'VORONOI_F3' | 'VORONOI_F4' | 'VORONOI_F2_F1' | 'VORONOI_CRACKLE' | 'CELL_NOISE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.noise_basis`, value)
    }

    /**
     * Intensity of the noise
     * @desc float in [0, 10], default 1.0
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
     * Number of frequencies used
     * @desc float in [0, 8], default 2.0
     */
    public set octaves(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.octaves`, value)
    }

    /**
     * The fractal offset
     * @desc float in [0, 6], default 1.0
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
