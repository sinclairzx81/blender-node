import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { TextureNode } from './TextureNode'

/**
 * TextureNodeMath
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeMath.html
 */
export class TextureNodeMath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'MULTIPLY_ADD', 'POWER', 'LOGARITHM', 'SQRT', 'INVERSE_SQRT', 'ABSOLUTE', 'EXPONENT', 'MINIMUM', 'MAXIMUM', 'LESS_THAN', 'GREATER_THAN', 'SIGN', 'COMPARE', 'SMOOTH_MIN', 'SMOOTH_MAX', 'ROUND', 'FLOOR', 'CEIL', 'TRUNC', 'FRACT', 'MODULO', 'SNAP', 'WRAP', 'PINGPONG', 'SINE', 'COSINE', 'TANGENT', 'ARCSINE', 'ARCCOSINE', 'ARCTANGENT', 'ARCTAN2', 'SINH', 'COSH', 'TANH', 'RADIANS', 'DEGREES'], default 'ADD'
     */
    public get operation(): 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'MULTIPLY_ADD' | 'POWER' | 'LOGARITHM' | 'SQRT' | 'INVERSE_SQRT' | 'ABSOLUTE' | 'EXPONENT' | 'MINIMUM' | 'MAXIMUM' | 'LESS_THAN' | 'GREATER_THAN' | 'SIGN' | 'COMPARE' | 'SMOOTH_MIN' | 'SMOOTH_MAX' | 'ROUND' | 'FLOOR' | 'CEIL' | 'TRUNC' | 'FRACT' | 'MODULO' | 'SNAP' | 'WRAP' | 'PINGPONG' | 'SINE' | 'COSINE' | 'TANGENT' | 'ARCSINE' | 'ARCCOSINE' | 'ARCTANGENT' | 'ARCTAN2' | 'SINH' | 'COSH' | 'TANH' | 'RADIANS' | 'DEGREES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.operation`)
    }

    /**
     * Clamp result of the node to 0..1 range
     * @desc boolean, default False
     */
    public get use_clamp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_clamp`)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'MULTIPLY_ADD', 'POWER', 'LOGARITHM', 'SQRT', 'INVERSE_SQRT', 'ABSOLUTE', 'EXPONENT', 'MINIMUM', 'MAXIMUM', 'LESS_THAN', 'GREATER_THAN', 'SIGN', 'COMPARE', 'SMOOTH_MIN', 'SMOOTH_MAX', 'ROUND', 'FLOOR', 'CEIL', 'TRUNC', 'FRACT', 'MODULO', 'SNAP', 'WRAP', 'PINGPONG', 'SINE', 'COSINE', 'TANGENT', 'ARCSINE', 'ARCCOSINE', 'ARCTANGENT', 'ARCTAN2', 'SINH', 'COSH', 'TANH', 'RADIANS', 'DEGREES'], default 'ADD'
     */
    public set operation(value: 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'MULTIPLY_ADD' | 'POWER' | 'LOGARITHM' | 'SQRT' | 'INVERSE_SQRT' | 'ABSOLUTE' | 'EXPONENT' | 'MINIMUM' | 'MAXIMUM' | 'LESS_THAN' | 'GREATER_THAN' | 'SIGN' | 'COMPARE' | 'SMOOTH_MIN' | 'SMOOTH_MAX' | 'ROUND' | 'FLOOR' | 'CEIL' | 'TRUNC' | 'FRACT' | 'MODULO' | 'SNAP' | 'WRAP' | 'PINGPONG' | 'SINE' | 'COSINE' | 'TANGENT' | 'ARCSINE' | 'ARCCOSINE' | 'ARCTANGENT' | 'ARCTAN2' | 'SINH' | 'COSH' | 'TANH' | 'RADIANS' | 'DEGREES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.operation`, value)
    }

    /**
     * Clamp result of the node to 0..1 range
     * @desc boolean, default False
     */
    public set use_clamp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_clamp`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
