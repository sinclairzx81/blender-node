import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { TextureNode } from './TextureNode'
import { Texture } from './Texture'

/**
 * TextureNodeTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeTexture.html
 */
export class TextureNodeTexture {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * For node-based textures, which output node to use
     * @desc int in [-32768, 32767], default 0
     */
    public get node_output(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.node_output`)
    }

    /**
     * 
     * @desc Texture
     */
    public get texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture`, Texture)
    }

    /**
     * For node-based textures, which output node to use
     * @desc int in [-32768, 32767], default 0
     */
    public set node_output(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.node_output`, value)
    }

    /**
     * 
     * @desc Texture
     */
    public set texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.texture`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
