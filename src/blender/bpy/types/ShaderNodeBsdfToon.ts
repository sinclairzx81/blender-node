import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfToon
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfToon.html
 */
export class ShaderNodeBsdfToon {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['DIFFUSE', 'GLOSSY'], default 'DIFFUSE'
     */
    public get component(): 'DIFFUSE' | 'GLOSSY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.component`)
    }

    /**
     * 
     * @desc enum in ['DIFFUSE', 'GLOSSY'], default 'DIFFUSE'
     */
    public set component(value: 'DIFFUSE' | 'GLOSSY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.component`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
