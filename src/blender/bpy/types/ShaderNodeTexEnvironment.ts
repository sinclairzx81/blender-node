import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { ColorMapping } from './ColorMapping'
import { ImageUser } from './ImageUser'
import { TexMapping } from './TexMapping'
import { Image } from './Image'

/**
 * ShaderNodeTexEnvironment
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexEnvironment.html
 */
export class ShaderNodeTexEnvironment {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color mapping settings
     * @desc ColorMapping, (readonly, never None)
     */
    public get color_mapping(): ColorMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_mapping`, ColorMapping)
    }

    /**
     * Parameters defining which layer, pass and frame of the image is displayed
     * @desc ImageUser, (readonly, never None)
     */
    public get image_user(): ImageUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_user`, ImageUser)
    }

    /**
     * Texture coordinate mapping settings
     * @desc TexMapping, (readonly, never None)
     */
    public get texture_mapping(): TexMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_mapping`, TexMapping)
    }

    /**
     * 
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * Texture interpolation
     * @desc enum in ['Linear', 'Closest', 'Cubic', 'Smart'], default 'Linear'
     */
    public get interpolation(): 'Linear' | 'Closest' | 'Cubic' | 'Smart' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Projection of the input image
     * @desc enum in ['EQUIRECTANGULAR', 'MIRROR_BALL'], default 'EQUIRECTANGULAR'
     */
    public get projection(): 'EQUIRECTANGULAR' | 'MIRROR_BALL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.projection`)
    }

    /**
     * 
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    /**
     * Texture interpolation
     * @desc enum in ['Linear', 'Closest', 'Cubic', 'Smart'], default 'Linear'
     */
    public set interpolation(value: 'Linear' | 'Closest' | 'Cubic' | 'Smart') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Projection of the input image
     * @desc enum in ['EQUIRECTANGULAR', 'MIRROR_BALL'], default 'EQUIRECTANGULAR'
     */
    public set projection(value: 'EQUIRECTANGULAR' | 'MIRROR_BALL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.projection`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
