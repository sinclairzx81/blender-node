import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeTexWhiteNoise
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexWhiteNoise.html
 */
export class ShaderNodeTexWhiteNoise {

    constructor(public interop: BlenderInterop, public accessor: string) { }

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
