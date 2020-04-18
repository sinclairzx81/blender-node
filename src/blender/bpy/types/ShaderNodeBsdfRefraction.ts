import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfRefraction
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfRefraction.html
 */
export class ShaderNodeBsdfRefraction {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['SHARP', 'BECKMANN', 'GGX'], default 'BECKMANN'
     */
    public get distribution(): 'SHARP' | 'BECKMANN' | 'GGX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distribution`)
    }

    /**
     * 
     * @desc enum in ['SHARP', 'BECKMANN', 'GGX'], default 'BECKMANN'
     */
    public set distribution(value: 'SHARP' | 'BECKMANN' | 'GGX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distribution`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
