import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * StucciTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.StucciTexture.html
 */
export class StucciTexture {

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
     * Noise basis used for turbulence
     * @desc enum in ['BLENDER_ORIGINAL', 'ORIGINAL_PERLIN', 'IMPROVED_PERLIN', 'VORONOI_F1', 'VORONOI_F2', 'VORONOI_F3', 'VORONOI_F4', 'VORONOI_F2_F1', 'VORONOI_CRACKLE', 'CELL_NOISE'], default 'BLENDER_ORIGINAL'
     */
    public get noise_basis(): 'BLENDER_ORIGINAL' | 'ORIGINAL_PERLIN' | 'IMPROVED_PERLIN' | 'VORONOI_F1' | 'VORONOI_F2' | 'VORONOI_F3' | 'VORONOI_F4' | 'VORONOI_F2_F1' | 'VORONOI_CRACKLE' | 'CELL_NOISE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.noise_basis`)
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
     * 
     * @desc enum in ['PLASTIC', 'WALL_IN', 'WALL_OUT'], default 'PLASTIC'
     */
    public get stucci_type(): 'PLASTIC' | 'WALL_IN' | 'WALL_OUT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.stucci_type`)
    }

    /**
     * Turbulence of the noise
     * @desc float in [0.0001, inf], default 5.0
     */
    public get turbulence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.turbulence`)
    }

    /**
     * Noise basis used for turbulence
     * @desc enum in ['BLENDER_ORIGINAL', 'ORIGINAL_PERLIN', 'IMPROVED_PERLIN', 'VORONOI_F1', 'VORONOI_F2', 'VORONOI_F3', 'VORONOI_F4', 'VORONOI_F2_F1', 'VORONOI_CRACKLE', 'CELL_NOISE'], default 'BLENDER_ORIGINAL'
     */
    public set noise_basis(value: 'BLENDER_ORIGINAL' | 'ORIGINAL_PERLIN' | 'IMPROVED_PERLIN' | 'VORONOI_F1' | 'VORONOI_F2' | 'VORONOI_F3' | 'VORONOI_F4' | 'VORONOI_F2_F1' | 'VORONOI_CRACKLE' | 'CELL_NOISE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.noise_basis`, value)
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
     * 
     * @desc enum in ['PLASTIC', 'WALL_IN', 'WALL_OUT'], default 'PLASTIC'
     */
    public set stucci_type(value: 'PLASTIC' | 'WALL_IN' | 'WALL_OUT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.stucci_type`, value)
    }

    /**
     * Turbulence of the noise
     * @desc float in [0.0001, inf], default 5.0
     */
    public set turbulence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.turbulence`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
