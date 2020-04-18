import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ShaderFx } from './ShaderFx'

/**
 * ObjectShaderFx
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectShaderFx.html
 */
export class ObjectShaderFx {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new shader fx
     * @desc ShaderFx
     */
    public new(options: { name?: string, type?: 'FX_BLUR' | 'FX_COLORIZE' | 'FX_FLIP' | 'FX_GLOW' | 'FX_LIGHT' | 'FX_PIXEL' | 'FX_RIM' | 'FX_SHADOW' | 'FX_SWIRL' | 'FX_WAVE' }): ShaderFx {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, ShaderFx)
    }

    /**
     * Remove an existing effect from the object
     * @desc void
     */
    public remove(options: { shader_fx?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all effects from the object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
