import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Texture } from './Texture'

/**
 * BlendDataTextures
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataTextures.html
 */
export class BlendDataTextures {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new texture to the main database
     * @desc Texture
     */
    public new(options: { name?: string, type?: 'NONE' | 'BLEND' | 'CLOUDS' | 'DISTORTED_NOISE' | 'IMAGE' | 'MAGIC' | 'MARBLE' | 'MUSGRAVE' | 'NOISE' | 'STUCCI' | 'VORONOI' | 'WOOD' }): Texture {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Texture)
    }

    /**
     * Remove a texture from the current blendfile
     * @desc void
     */
    public remove(options: { texture?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
