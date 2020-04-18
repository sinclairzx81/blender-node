import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { BlenderObject } from './BlenderObject'

/**
 * ShaderNodeTexCoord
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexCoord.html
 */
export class ShaderNodeTexCoord {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Use the parent of the dupli object if possible
     * @desc boolean, default False
     */
    public get from_instancer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.from_instancer`)
    }

    /**
     * Use coordinates from this object (for object texture coordinates output)
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Use the parent of the dupli object if possible
     * @desc boolean, default False
     */
    public set from_instancer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.from_instancer`, value)
    }

    /**
     * Use coordinates from this object (for object texture coordinates output)
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
