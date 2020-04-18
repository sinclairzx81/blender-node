import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeOutputWorld
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeOutputWorld.html
 */
export class ShaderNodeOutputWorld {

    constructor(public interop: BlenderInterop, public accessor: string) { }

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

    [util.inspect.custom]() {
        return this.accessor
    }
}
