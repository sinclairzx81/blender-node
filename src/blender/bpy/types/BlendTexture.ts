import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { Texture } from './Texture'

/**
 * BlendTexture
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendTexture.html
 */
export class BlendTexture {

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
     * Style of the color blending
     * @desc enum in ['LINEAR', 'QUADRATIC', 'EASING', 'DIAGONAL', 'SPHERICAL', 'QUADRATIC_SPHERE', 'RADIAL'], default 'LINEAR'
     */
    public get progression(): 'LINEAR' | 'QUADRATIC' | 'EASING' | 'DIAGONAL' | 'SPHERICAL' | 'QUADRATIC_SPHERE' | 'RADIAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.progression`)
    }

    /**
     * Flip the texture’s X and Y axis
     * @desc enum in ['HORIZONTAL', 'VERTICAL'], default 'HORIZONTAL'
     */
    public get use_flip_axis(): 'HORIZONTAL' | 'VERTICAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.use_flip_axis`)
    }

    /**
     * Style of the color blending
     * @desc enum in ['LINEAR', 'QUADRATIC', 'EASING', 'DIAGONAL', 'SPHERICAL', 'QUADRATIC_SPHERE', 'RADIAL'], default 'LINEAR'
     */
    public set progression(value: 'LINEAR' | 'QUADRATIC' | 'EASING' | 'DIAGONAL' | 'SPHERICAL' | 'QUADRATIC_SPHERE' | 'RADIAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.progression`, value)
    }

    /**
     * Flip the texture’s X and Y axis
     * @desc enum in ['HORIZONTAL', 'VERTICAL'], default 'HORIZONTAL'
     */
    public set use_flip_axis(value: 'HORIZONTAL' | 'VERTICAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.use_flip_axis`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
