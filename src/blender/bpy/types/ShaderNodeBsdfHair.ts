import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfHair
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfHair.html
 */
export class ShaderNodeBsdfHair {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['Reflection', 'Transmission'], default 'Reflection'
     */
    public get component(): 'Reflection' | 'Transmission' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.component`)
    }

    /**
     * 
     * @desc enum in ['Reflection', 'Transmission'], default 'Reflection'
     */
    public set component(value: 'Reflection' | 'Transmission') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.component`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
