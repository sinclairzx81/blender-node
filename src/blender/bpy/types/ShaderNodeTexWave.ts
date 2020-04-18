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
 * ShaderNodeTexWave
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexWave.html
 */
export class ShaderNodeTexWave {

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
     * @desc enum in ['SIN', 'SAW'], default 'SIN'
     */
    public get wave_profile(): 'SIN' | 'SAW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wave_profile`)
    }

    /**
     * 
     * @desc enum in ['BANDS', 'RINGS'], default 'BANDS'
     */
    public get wave_type(): 'BANDS' | 'RINGS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wave_type`)
    }

    /**
     * 
     * @desc enum in ['SIN', 'SAW'], default 'SIN'
     */
    public set wave_profile(value: 'SIN' | 'SAW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wave_profile`, value)
    }

    /**
     * 
     * @desc enum in ['BANDS', 'RINGS'], default 'BANDS'
     */
    public set wave_type(value: 'BANDS' | 'RINGS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wave_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
