import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfHairPrincipled
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfHairPrincipled.html
 */
export class ShaderNodeBsdfHairPrincipled {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Select the shader’s color parametrization
     * @desc enum in ['ABSORPTION', 'MELANIN', 'COLOR'], default 'COLOR'
     */
    public get parametrization(): 'ABSORPTION' | 'MELANIN' | 'COLOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.parametrization`)
    }

    /**
     * Select the shader’s color parametrization
     * @desc enum in ['ABSORPTION', 'MELANIN', 'COLOR'], default 'COLOR'
     */
    public set parametrization(value: 'ABSORPTION' | 'MELANIN' | 'COLOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.parametrization`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
