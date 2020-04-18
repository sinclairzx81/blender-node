import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TextureOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.texture.html
 */
export class TextureOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new texture
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Copy the material texture settings and nodes
     * @desc void
     */
    public slot_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slot_copy`, {})
    }

    /**
     * Move texture slots up and down
     * @desc void
     */
    public slot_move(options: { type?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slot_move`, options)
    }

    /**
     * Copy the texture settings and nodes
     * @desc void
     */
    public slot_paste(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.slot_paste`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
