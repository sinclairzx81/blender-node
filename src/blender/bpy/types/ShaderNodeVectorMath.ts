import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeVectorMath
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeVectorMath.html
 */
export class ShaderNodeVectorMath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'CROSS_PRODUCT', 'PROJECT', 'REFLECT', 'DOT_PRODUCT', 'DISTANCE', 'LENGTH', 'SCALE', 'NORMALIZE', 'SNAP', 'FLOOR', 'CEIL', 'MODULO', 'FRACTION', 'ABSOLUTE', 'MINIMUM', 'MAXIMUM'], default 'ADD'
     */
    public get operation(): 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'CROSS_PRODUCT' | 'PROJECT' | 'REFLECT' | 'DOT_PRODUCT' | 'DISTANCE' | 'LENGTH' | 'SCALE' | 'NORMALIZE' | 'SNAP' | 'FLOOR' | 'CEIL' | 'MODULO' | 'FRACTION' | 'ABSOLUTE' | 'MINIMUM' | 'MAXIMUM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.operation`)
    }

    /**
     * 
     * @desc enum in ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE', 'CROSS_PRODUCT', 'PROJECT', 'REFLECT', 'DOT_PRODUCT', 'DISTANCE', 'LENGTH', 'SCALE', 'NORMALIZE', 'SNAP', 'FLOOR', 'CEIL', 'MODULO', 'FRACTION', 'ABSOLUTE', 'MINIMUM', 'MAXIMUM'], default 'ADD'
     */
    public set operation(value: 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVIDE' | 'CROSS_PRODUCT' | 'PROJECT' | 'REFLECT' | 'DOT_PRODUCT' | 'DISTANCE' | 'LENGTH' | 'SCALE' | 'NORMALIZE' | 'SNAP' | 'FLOOR' | 'CEIL' | 'MODULO' | 'FRACTION' | 'ABSOLUTE' | 'MINIMUM' | 'MAXIMUM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.operation`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
