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
 * ShaderNodeTexGradient
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexGradient.html
 */
export class ShaderNodeTexGradient {

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
     * Style of the color blending
     * @desc enum in ['LINEAR', 'QUADRATIC', 'EASING', 'DIAGONAL', 'SPHERICAL', 'QUADRATIC_SPHERE', 'RADIAL'], default 'LINEAR'
     */
    public get gradient_type(): 'LINEAR' | 'QUADRATIC' | 'EASING' | 'DIAGONAL' | 'SPHERICAL' | 'QUADRATIC_SPHERE' | 'RADIAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.gradient_type`)
    }

    /**
     * Style of the color blending
     * @desc enum in ['LINEAR', 'QUADRATIC', 'EASING', 'DIAGONAL', 'SPHERICAL', 'QUADRATIC_SPHERE', 'RADIAL'], default 'LINEAR'
     */
    public set gradient_type(value: 'LINEAR' | 'QUADRATIC' | 'EASING' | 'DIAGONAL' | 'SPHERICAL' | 'QUADRATIC_SPHERE' | 'RADIAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.gradient_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
