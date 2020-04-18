import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { TextureSlot } from './TextureSlot'

/**
 * BrushTextureSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.BrushTextureSlot.html
 */
export class BrushTextureSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_random_texture_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_random_texture_angle`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_texture_angle(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_texture_angle`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get has_texture_angle_source(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_texture_angle_source`)
    }

    /**
     * Brush texture rotation
     * @desc float in [0, 6.28319], default 0.0
     */
    public get angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.angle`)
    }

    /**
     * 
     * @desc enum in ['VIEW_PLANE', 'AREA_PLANE', 'TILED', '3D', 'RANDOM', 'STENCIL'], default 'TILED'
     */
    public get map_mode(): 'VIEW_PLANE' | 'AREA_PLANE' | 'TILED' | '3D' | 'RANDOM' | 'STENCIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.map_mode`)
    }

    /**
     * 
     * @desc enum in ['VIEW_PLANE', 'TILED', 'RANDOM', 'STENCIL'], default 'TILED'
     */
    public get mask_map_mode(): 'VIEW_PLANE' | 'TILED' | 'RANDOM' | 'STENCIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mask_map_mode`)
    }

    /**
     * Brush texture random angle
     * @desc float in [0, 6.28319], default 6.28319
     */
    public get random_angle(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.random_angle`)
    }

    /**
     * 
     * @desc enum in ['VIEW_PLANE', 'TILED', '3D', 'RANDOM', 'STENCIL'], default 'TILED'
     */
    public get tex_paint_map_mode(): 'VIEW_PLANE' | 'TILED' | '3D' | 'RANDOM' | 'STENCIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.tex_paint_map_mode`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_rake(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_rake`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_random(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_random`)
    }

    /**
     * Brush texture rotation
     * @desc float in [0, 6.28319], default 0.0
     */
    public set angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.angle`, value)
    }

    /**
     * 
     * @desc enum in ['VIEW_PLANE', 'AREA_PLANE', 'TILED', '3D', 'RANDOM', 'STENCIL'], default 'TILED'
     */
    public set map_mode(value: 'VIEW_PLANE' | 'AREA_PLANE' | 'TILED' | '3D' | 'RANDOM' | 'STENCIL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.map_mode`, value)
    }

    /**
     * 
     * @desc enum in ['VIEW_PLANE', 'TILED', 'RANDOM', 'STENCIL'], default 'TILED'
     */
    public set mask_map_mode(value: 'VIEW_PLANE' | 'TILED' | 'RANDOM' | 'STENCIL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mask_map_mode`, value)
    }

    /**
     * Brush texture random angle
     * @desc float in [0, 6.28319], default 6.28319
     */
    public set random_angle(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.random_angle`, value)
    }

    /**
     * 
     * @desc enum in ['VIEW_PLANE', 'TILED', '3D', 'RANDOM', 'STENCIL'], default 'TILED'
     */
    public set tex_paint_map_mode(value: 'VIEW_PLANE' | 'TILED' | '3D' | 'RANDOM' | 'STENCIL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.tex_paint_map_mode`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_rake(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_rake`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_random(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_random`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
