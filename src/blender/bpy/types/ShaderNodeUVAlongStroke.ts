import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeUVAlongStroke
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeUVAlongStroke.html
 */
export class ShaderNodeUVAlongStroke {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Lower half of the texture is for tips of the stroke
     * @desc boolean, default False
     */
    public get use_tips(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_tips`)
    }

    /**
     * Lower half of the texture is for tips of the stroke
     * @desc boolean, default False
     */
    public set use_tips(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_tips`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
