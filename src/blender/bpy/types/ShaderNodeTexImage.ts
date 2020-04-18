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
 * ShaderNodeTexImage
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexImage.html
 */
export class ShaderNodeTexImage {

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
     * How the image is extrapolated past its original bounds
     * @desc enum in ['REPEAT', 'EXTEND', 'CLIP'], default 'REPEAT'
     */
    public get extension(): 'REPEAT' | 'EXTEND' | 'CLIP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.extension`)
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
     * Method to project 2D image on object with a 3D texture vector
     * @desc enum in ['FLAT', 'BOX', 'SPHERE', 'TUBE'], default 'FLAT'
     */
    public get projection(): 'FLAT' | 'BOX' | 'SPHERE' | 'TUBE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.projection`)
    }

    /**
     * For box projection, amount of blend to use between sides
     * @desc float in [0, 1], default 0.0
     */
    public get projection_blend(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.projection_blend`)
    }

    /**
     * How the image is extrapolated past its original bounds
     * @desc enum in ['REPEAT', 'EXTEND', 'CLIP'], default 'REPEAT'
     */
    public set extension(value: 'REPEAT' | 'EXTEND' | 'CLIP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.extension`, value)
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
     * Method to project 2D image on object with a 3D texture vector
     * @desc enum in ['FLAT', 'BOX', 'SPHERE', 'TUBE'], default 'FLAT'
     */
    public set projection(value: 'FLAT' | 'BOX' | 'SPHERE' | 'TUBE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.projection`, value)
    }

    /**
     * For box projection, amount of blend to use between sides
     * @desc float in [0, 1], default 0.0
     */
    public set projection_blend(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.projection_blend`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
