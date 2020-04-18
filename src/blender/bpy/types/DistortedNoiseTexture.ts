import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * DistortedNoiseTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.DistortedNoiseTexture.html
 */
export class DistortedNoiseTexture {

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
     * Amount of distortion
     * @desc float in [0, 10], default 1.0
     */
    public get distortion(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.distortion`)
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
     * Noise basis for the distortion
     * @desc enum in ['BLENDER_ORIGINAL', 'ORIGINAL_PERLIN', 'IMPROVED_PERLIN', 'VORONOI_F1', 'VORONOI_F2', 'VORONOI_F3', 'VORONOI_F4', 'VORONOI_F2_F1', 'VORONOI_CRACKLE', 'CELL_NOISE'], default 'BLENDER_ORIGINAL'
     */
    public get noise_distortion(): 'BLENDER_ORIGINAL' | 'ORIGINAL_PERLIN' | 'IMPROVED_PERLIN' | 'VORONOI_F1' | 'VORONOI_F2' | 'VORONOI_F3' | 'VORONOI_F4' | 'VORONOI_F2_F1' | 'VORONOI_CRACKLE' | 'CELL_NOISE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.noise_distortion`)
    }

    /**
     * Scaling for noise input
     * @desc float in [0.0001, inf], default 0.25
     */
    public get noise_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.noise_scale`)
    }

    /**
     * Amount of distortion
     * @desc float in [0, 10], default 1.0
     */
    public set distortion(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.distortion`, value)
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
     * Noise basis for the distortion
     * @desc enum in ['BLENDER_ORIGINAL', 'ORIGINAL_PERLIN', 'IMPROVED_PERLIN', 'VORONOI_F1', 'VORONOI_F2', 'VORONOI_F3', 'VORONOI_F4', 'VORONOI_F2_F1', 'VORONOI_CRACKLE', 'CELL_NOISE'], default 'BLENDER_ORIGINAL'
     */
    public set noise_distortion(value: 'BLENDER_ORIGINAL' | 'ORIGINAL_PERLIN' | 'IMPROVED_PERLIN' | 'VORONOI_F1' | 'VORONOI_F2' | 'VORONOI_F3' | 'VORONOI_F4' | 'VORONOI_F2_F1' | 'VORONOI_CRACKLE' | 'CELL_NOISE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.noise_distortion`, value)
    }

    /**
     * Scaling for noise input
     * @desc float in [0.0001, inf], default 0.25
     */
    public set noise_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.noise_scale`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
