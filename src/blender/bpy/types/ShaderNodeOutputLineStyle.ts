import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeOutputLineStyle
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeOutputLineStyle.html
 */
export class ShaderNodeOutputLineStyle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public get blend_type(): 'MIX' | 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.blend_type`)
    }

    /**
     * True if this node is used as the active output
     * @desc boolean, default False
     */
    public get is_active_output(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_active_output`)
    }

    /**
     * Which renderer and viewport shading types to use the shaders for
     * @desc enum in ['ALL', 'EEVEE', 'CYCLES'], default 'ALL'
     */
    public get target(): 'ALL' | 'EEVEE' | 'CYCLES' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.target`)
    }

    /**
     * Include alpha of second input in this operation
     * @desc boolean, default False
     */
    public get use_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_alpha`)
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
     * @desc enum in ['MIX', 'DARKEN', 'MULTIPLY', 'BURN', 'LIGHTEN', 'SCREEN', 'DODGE', 'ADD', 'OVERLAY', 'SOFT_LIGHT', 'LINEAR_LIGHT', 'DIFFERENCE', 'SUBTRACT', 'DIVIDE', 'HUE', 'SATURATION', 'COLOR', 'VALUE'], default 'MIX'
     */
    public set blend_type(value: 'MIX' | 'DARKEN' | 'MULTIPLY' | 'BURN' | 'LIGHTEN' | 'SCREEN' | 'DODGE' | 'ADD' | 'OVERLAY' | 'SOFT_LIGHT' | 'LINEAR_LIGHT' | 'DIFFERENCE' | 'SUBTRACT' | 'DIVIDE' | 'HUE' | 'SATURATION' | 'COLOR' | 'VALUE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.blend_type`, value)
    }

    /**
     * True if this node is used as the active output
     * @desc boolean, default False
     */
    public set is_active_output(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_active_output`, value)
    }

    /**
     * Which renderer and viewport shading types to use the shaders for
     * @desc enum in ['ALL', 'EEVEE', 'CYCLES'], default 'ALL'
     */
    public set target(value: 'ALL' | 'EEVEE' | 'CYCLES') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.target`, value)
    }

    /**
     * Include alpha of second input in this operation
     * @desc boolean, default False
     */
    public set use_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_alpha`, value)
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
