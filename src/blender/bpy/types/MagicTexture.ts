import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * MagicTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.MagicTexture.html
 */
export class MagicTexture {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Materials that use this texture(readonly)
     * @desc void
     */
    public get users_material(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_material`)
    }

    /**
     * Object modifiers that use this texture(readonly)
     * @desc void
     */
    public get users_object_modifier(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_object_modifier`)
    }

    /**
     * Depth of the noise
     * @desc int in [0, 30], default 2
     */
    public get noise_depth(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.noise_depth`)
    }

    /**
     * Turbulence of the noise
     * @desc float in [0.0001, inf], default 5.0
     */
    public get turbulence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.turbulence`)
    }

    /**
     * Depth of the noise
     * @desc int in [0, 30], default 2
     */
    public set noise_depth(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.noise_depth`, value)
    }

    /**
     * Turbulence of the noise
     * @desc float in [0.0001, inf], default 5.0
     */
    public set turbulence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.turbulence`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
