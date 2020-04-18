import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfGlass
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfGlass.html
 */
export class ShaderNodeBsdfGlass {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['SHARP', 'BECKMANN', 'GGX', 'MULTI_GGX'], default 'BECKMANN'
     */
    public get distribution(): 'SHARP' | 'BECKMANN' | 'GGX' | 'MULTI_GGX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distribution`)
    }

    /**
     * 
     * @desc enum in ['SHARP', 'BECKMANN', 'GGX', 'MULTI_GGX'], default 'BECKMANN'
     */
    public set distribution(value: 'SHARP' | 'BECKMANN' | 'GGX' | 'MULTI_GGX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distribution`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
