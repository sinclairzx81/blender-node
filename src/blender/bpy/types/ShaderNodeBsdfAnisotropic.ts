import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfAnisotropic
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfAnisotropic.html
 */
export class ShaderNodeBsdfAnisotropic {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['BECKMANN', 'GGX', 'MULTI_GGX', 'ASHIKHMIN_SHIRLEY'], default 'BECKMANN'
     */
    public get distribution(): 'BECKMANN' | 'GGX' | 'MULTI_GGX' | 'ASHIKHMIN_SHIRLEY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distribution`)
    }

    /**
     * 
     * @desc enum in ['BECKMANN', 'GGX', 'MULTI_GGX', 'ASHIKHMIN_SHIRLEY'], default 'BECKMANN'
     */
    public set distribution(value: 'BECKMANN' | 'GGX' | 'MULTI_GGX' | 'ASHIKHMIN_SHIRLEY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distribution`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
