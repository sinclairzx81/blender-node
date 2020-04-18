import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { TextureNode } from './TextureNode'
import { ImageUser } from './ImageUser'
import { Image } from './Image'

/**
 * TextureNodeImage
 * 
 * https://docs.blender.org/api/current/bpy.types.TextureNodeImage.html
 */
export class TextureNodeImage {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Parameters defining the image duration, offset and related settings
     * @desc ImageUser, (readonly)
     */
    public get image_user(): ImageUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_user`, ImageUser)
    }

    /**
     * 
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * 
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
