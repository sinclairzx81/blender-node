import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Texture } from './Texture'

/**
 * TextureSlot
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureSlot.html
 */
export class TextureSlot {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Texture slot name
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Mode used to apply the texture
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'LIGHTEN', 'SCREEN', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public get blend_type(): 'MIX' | 'DARKEN' | 'MULTIPLY' | 'LIGHTEN' | 'SCREEN' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_type`)
    }

    /**
     * Default color for textures that don’t return RGB or when RGB to intensity is enabled
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Value to use for Ref, Spec, Amb, Emit, Alpha, RayMir, TransLu and Hard
     * @desc float in [-inf, inf], default 1.0
     */
    public get default_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_value`)
    }

    /**
     * Fine tune of the texture mapping X, Y and Z locations
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 3)
    }

    /**
     * Which output node to use, for node-based textures
     * @desc enum in ['DUMMY'], default 'DUMMY'
     */
    public get output_node(): 'DUMMY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.output_node`)
    }

    /**
     * Set scaling for the texture’s X, Y and Z sizes
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get scale(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 3)
    }

    /**
     * Texture data-block used by this texture slot
     * @desc Texture
     */
    public get texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture`, Texture)
    }

    /**
     * Mode used to apply the texture
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'LIGHTEN', 'SCREEN', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public set blend_type(value: 'MIX' | 'DARKEN' | 'MULTIPLY' | 'LIGHTEN' | 'SCREEN' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_type`, value)
    }

    /**
     * Default color for textures that don’t return RGB or when RGB to intensity is enabled
     * @desc float array of 3 items in [0, inf], default (1.0, 1.0, 1.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Value to use for Ref, Spec, Amb, Emit, Alpha, RayMir, TransLu and Hard
     * @desc float in [-inf, inf], default 1.0
     */
    public set default_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_value`, value)
    }

    /**
     * Fine tune of the texture mapping X, Y and Z locations
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Which output node to use, for node-based textures
     * @desc enum in ['DUMMY'], default 'DUMMY'
     */
    public set output_node(value: 'DUMMY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.output_node`, value)
    }

    /**
     * Set scaling for the texture’s X, Y and Z sizes
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set scale(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Texture data-block used by this texture slot
     * @desc Texture
     */
    public set texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
