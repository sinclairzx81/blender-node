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
 * ShaderNodeTexMagic
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexMagic.html
 */
export class ShaderNodeTexMagic {

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
     * Level of detail in the added turbulent noise
     * @desc int in [0, 10], default 0
     */
    public get turbulence_depth(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.turbulence_depth`)
    }

    /**
     * Level of detail in the added turbulent noise
     * @desc int in [0, 10], default 0
     */
    public set turbulence_depth(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.turbulence_depth`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
