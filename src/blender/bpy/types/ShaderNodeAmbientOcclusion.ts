import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeAmbientOcclusion
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeAmbientOcclusion.html
 */
export class ShaderNodeAmbientOcclusion {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Trace rays towards the inside of the object
     * @desc boolean, default False
     */
    public get inside(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.inside`)
    }

    /**
     * Only consider the object itself when computing AO
     * @desc boolean, default False
     */
    public get only_local(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.only_local`)
    }

    /**
     * Number of rays to trace per shader evaluation
     * @desc int in [1, 128], default 0
     */
    public get samples(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.samples`)
    }

    /**
     * Trace rays towards the inside of the object
     * @desc boolean, default False
     */
    public set inside(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.inside`, value)
    }

    /**
     * Only consider the object itself when computing AO
     * @desc boolean, default False
     */
    public set only_local(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.only_local`, value)
    }

    /**
     * Number of rays to trace per shader evaluation
     * @desc int in [1, 128], default 0
     */
    public set samples(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.samples`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
