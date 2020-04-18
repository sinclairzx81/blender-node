import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * MarbleTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.MarbleTexture.html
 */
export class MarbleTexture {

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
     * @desc enum in ['SOFT', 'SHARP', 'SHARPER'], default 'SOFT'
     */
    public get marble_type(): 'SOFT' | 'SHARP' | 'SHARPER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.marble_type`)
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
     * 
     * @desc enum in ['SIN', 'SAW', 'TRI'], default 'SIN'
     */
    public get noise_basis_2(): 'SIN' | 'SAW' | 'TRI' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.noise_basis_2`)
    }

    /**
     * Depth of the cloud calculation
     * @desc int in [0, 30], default 2
     */
    public get noise_depth(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.noise_depth`)
    }

    /**
     * Scaling for noise input
     * @desc float in [0.0001, inf], default 0.25
     */
    public get noise_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.noise_scale`)
    }

    /**
     * 
     * @desc enum in ['SOFT_NOISE', 'HARD_NOISE'], default 'SOFT_NOISE'
     */
    public get noise_type(): 'SOFT_NOISE' | 'HARD_NOISE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.noise_type`)
    }

    /**
     * Turbulence of the bandnoise and ringnoise types
     * @desc float in [0.0001, inf], default 5.0
     */
    public get turbulence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.turbulence`)
    }

    /**
     * 
     * @desc enum in ['SOFT', 'SHARP', 'SHARPER'], default 'SOFT'
     */
    public set marble_type(value: 'SOFT' | 'SHARP' | 'SHARPER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.marble_type`, value)
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
     * 
     * @desc enum in ['SIN', 'SAW', 'TRI'], default 'SIN'
     */
    public set noise_basis_2(value: 'SIN' | 'SAW' | 'TRI') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.noise_basis_2`, value)
    }

    /**
     * Depth of the cloud calculation
     * @desc int in [0, 30], default 2
     */
    public set noise_depth(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.noise_depth`, value)
    }

    /**
     * Scaling for noise input
     * @desc float in [0.0001, inf], default 0.25
     */
    public set noise_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.noise_scale`, value)
    }

    /**
     * 
     * @desc enum in ['SOFT_NOISE', 'HARD_NOISE'], default 'SOFT_NOISE'
     */
    public set noise_type(value: 'SOFT_NOISE' | 'HARD_NOISE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.noise_type`, value)
    }

    /**
     * Turbulence of the bandnoise and ringnoise types
     * @desc float in [0.0001, inf], default 5.0
     */
    public set turbulence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.turbulence`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
