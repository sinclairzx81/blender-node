import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { TextureSlot } from './TextureSlot'

/**
 * LineStyleTextureSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleTextureSlot.html
 */
export class LineStyleTextureSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount texture affects alpha
     * @desc float in [-inf, inf], default 1.0
     */
    public get alpha_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha_factor`)
    }

    /**
     * Amount texture affects diffuse color
     * @desc float in [-inf, inf], default 1.0
     */
    public get diffuse_color_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.diffuse_color_factor`)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'CUBE', 'TUBE', 'SPHERE'], default 'FLAT'
     */
    public get mapping(): 'FLAT' | 'CUBE' | 'TUBE' | 'SPHERE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'X'
     */
    public get mapping_x(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_x`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Y'
     */
    public get mapping_y(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_y`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Z'
     */
    public get mapping_z(): 'NONE' | 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping_z`)
    }

    /**
     * Texture coordinates used to map the texture onto the background
     * @desc enum in ['WINDOW', 'GLOBAL', 'ALONG_STROKE', 'ORCO'], default 'ALONG_STROKE'
     */
    public get texture_coords(): 'WINDOW' | 'GLOBAL' | 'ALONG_STROKE' | 'ORCO' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_coords`)
    }

    /**
     * The texture affects the alpha value
     * @desc boolean, default False
     */
    public get use_map_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_alpha`)
    }

    /**
     * The texture affects basic color of the stroke
     * @desc boolean, default True
     */
    public get use_map_color_diffuse(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_map_color_diffuse`)
    }

    /**
     * Amount texture affects alpha
     * @desc float in [-inf, inf], default 1.0
     */
    public set alpha_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha_factor`, value)
    }

    /**
     * Amount texture affects diffuse color
     * @desc float in [-inf, inf], default 1.0
     */
    public set diffuse_color_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.diffuse_color_factor`, value)
    }

    /**
     * 
     * @desc enum in ['FLAT', 'CUBE', 'TUBE', 'SPHERE'], default 'FLAT'
     */
    public set mapping(value: 'FLAT' | 'CUBE' | 'TUBE' | 'SPHERE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'X'
     */
    public set mapping_x(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_x`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Y'
     */
    public set mapping_y(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_y`, value)
    }

    /**
     * 
     * @desc enum in ['NONE', 'X', 'Y', 'Z'], default 'Z'
     */
    public set mapping_z(value: 'NONE' | 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping_z`, value)
    }

    /**
     * Texture coordinates used to map the texture onto the background
     * @desc enum in ['WINDOW', 'GLOBAL', 'ALONG_STROKE', 'ORCO'], default 'ALONG_STROKE'
     */
    public set texture_coords(value: 'WINDOW' | 'GLOBAL' | 'ALONG_STROKE' | 'ORCO') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_coords`, value)
    }

    /**
     * The texture affects the alpha value
     * @desc boolean, default False
     */
    public set use_map_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_alpha`, value)
    }

    /**
     * The texture affects basic color of the stroke
     * @desc boolean, default True
     */
    public set use_map_color_diffuse(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_map_color_diffuse`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
