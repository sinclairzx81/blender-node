import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { ColorMapping } from './ColorMapping'
import { TexMapping } from './TexMapping'

/**
 * ShaderNodeTexBrick
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexBrick.html
 */
export class ShaderNodeTexBrick {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color mapping settings
     * @desc ColorMapping, (readonly, never None)
     */
    public get color_mapping(): ColorMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_mapping`, ColorMapping)
    }

    /**
     * Texture coordinate mapping settings
     * @desc TexMapping, (readonly, never None)
     */
    public get texture_mapping(): TexMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_mapping`, TexMapping)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.5
     */
    public get offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.offset`)
    }

    /**
     * 
     * @desc int in [1, 99], default 2
     */
    public get offset_frequency(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.offset_frequency`)
    }

    /**
     * 
     * @desc float in [0, 99], default 1.0
     */
    public get squash(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.squash`)
    }

    /**
     * 
     * @desc int in [1, 99], default 2
     */
    public get squash_frequency(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.squash_frequency`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.5
     */
    public set offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * 
     * @desc int in [1, 99], default 2
     */
    public set offset_frequency(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.offset_frequency`, value)
    }

    /**
     * 
     * @desc float in [0, 99], default 1.0
     */
    public set squash(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.squash`, value)
    }

    /**
     * 
     * @desc int in [1, 99], default 2
     */
    public set squash_frequency(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.squash_frequency`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
