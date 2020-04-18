import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBevel
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBevel.html
 */
export class ShaderNodeBevel {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of rays to trace per shader evaluation
     * @desc int in [2, 16], default 0
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Number of rays to trace per shader evaluation
     * @desc int in [2, 16], default 0
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
