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
 * ShaderNodeTexSky
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexSky.html
 */
export class ShaderNodeTexSky {

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
     * Ground color that is subtly reflected in the sky
     * @desc float in [0, 1], default 0.0
     */
    public get ground_albedo(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ground_albedo`)
    }

    /**
     * 
     * @desc enum in ['PREETHAM', 'HOSEK_WILKIE'], default 'PREETHAM'
     */
    public get sky_type(): 'PREETHAM' | 'HOSEK_WILKIE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sky_type`)
    }

    /**
     * Direction from where the sun is shining
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 1.0)
     */
    public get sun_direction(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.sun_direction`, 'number', 3)
    }

    /**
     * Atmospheric turbidity
     * @desc float in [1, 10], default 0.0
     */
    public get turbidity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.turbidity`)
    }

    /**
     * Ground color that is subtly reflected in the sky
     * @desc float in [0, 1], default 0.0
     */
    public set ground_albedo(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ground_albedo`, value)
    }

    /**
     * 
     * @desc enum in ['PREETHAM', 'HOSEK_WILKIE'], default 'PREETHAM'
     */
    public set sky_type(value: 'PREETHAM' | 'HOSEK_WILKIE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sky_type`, value)
    }

    /**
     * Direction from where the sun is shining
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 1.0)
     */
    public set sun_direction(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.sun_direction`, value)
    }

    /**
     * Atmospheric turbidity
     * @desc float in [1, 10], default 0.0
     */
    public set turbidity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.turbidity`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
