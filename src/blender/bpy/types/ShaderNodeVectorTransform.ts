import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeVectorTransform
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeVectorTransform.html
 */
export class ShaderNodeVectorTransform {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Space to convert from
     * @desc enum in ['WORLD', 'OBJECT', 'CAMERA'], default 'WORLD'
     */
    public get convert_from(): 'WORLD' | 'OBJECT' | 'CAMERA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.convert_from`)
    }

    /**
     * Space to convert to
     * @desc enum in ['WORLD', 'OBJECT', 'CAMERA'], default 'WORLD'
     */
    public get convert_to(): 'WORLD' | 'OBJECT' | 'CAMERA' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.convert_to`)
    }

    /**
     * 
     * @desc enum in ['POINT', 'VECTOR', 'NORMAL'], default 'VECTOR'
     */
    public get vector_type(): 'POINT' | 'VECTOR' | 'NORMAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vector_type`)
    }

    /**
     * Space to convert from
     * @desc enum in ['WORLD', 'OBJECT', 'CAMERA'], default 'WORLD'
     */
    public set convert_from(value: 'WORLD' | 'OBJECT' | 'CAMERA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.convert_from`, value)
    }

    /**
     * Space to convert to
     * @desc enum in ['WORLD', 'OBJECT', 'CAMERA'], default 'WORLD'
     */
    public set convert_to(value: 'WORLD' | 'OBJECT' | 'CAMERA') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.convert_to`, value)
    }

    /**
     * 
     * @desc enum in ['POINT', 'VECTOR', 'NORMAL'], default 'VECTOR'
     */
    public set vector_type(value: 'POINT' | 'VECTOR' | 'NORMAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vector_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
