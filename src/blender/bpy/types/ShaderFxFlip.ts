import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxFlip
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxFlip.html
 */
export class ShaderFxFlip {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Flip image horizontally
     * @desc boolean, default False
     */
    public get flip_horizontal(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.flip_horizontal`)
    }

    /**
     * Flip image vertically
     * @desc boolean, default False
     */
    public get flip_vertical(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.flip_vertical`)
    }

    /**
     * Flip image horizontally
     * @desc boolean, default False
     */
    public set flip_horizontal(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.flip_horizontal`, value)
    }

    /**
     * Flip image vertically
     * @desc boolean, default False
     */
    public set flip_vertical(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.flip_vertical`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
