import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { ColorMapping } from './ColorMapping'
import { TexMapping } from './TexMapping'

/**
 * ShaderNodeTexNoise
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexNoise.html
 */
export class ShaderNodeTexNoise {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color mapping settings
     * @desc ColorMapping, (readonly, never None)
     */
    public get color_mapping(): ColorMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_mapping`, ColorMapping)
    }

    /**
     * Texture coordinate mapping settings
     * @desc TexMapping, (readonly, never None)
     */
    public get texture_mapping(): TexMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_mapping`, TexMapping)
    }

    /**
     * The dimensions of the space to evaluate the noise in
     * @desc enum in ['1D', '2D', '3D', '4D'], default '1D'
     */
    public get noise_dimensions(): '1D' | '2D' | '3D' | '4D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.noise_dimensions`)
    }

    /**
     * The dimensions of the space to evaluate the noise in
     * @desc enum in ['1D', '2D', '3D', '4D'], default '1D'
     */
    public set noise_dimensions(value: '1D' | '2D' | '3D' | '4D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.noise_dimensions`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
