import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeBsdfPrincipled
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeBsdfPrincipled.html
 */
export class ShaderNodeBsdfPrincipled {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['GGX', 'MULTI_GGX'], default 'GGX'
     */
    public get distribution(): 'GGX' | 'MULTI_GGX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distribution`)
    }

    /**
     * Method for rendering subsurface scattering
     * @desc enum in ['BURLEY', 'RANDOM_WALK'], default 'BURLEY'
     */
    public get subsurface_method(): 'BURLEY' | 'RANDOM_WALK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.subsurface_method`)
    }

    /**
     * 
     * @desc enum in ['GGX', 'MULTI_GGX'], default 'GGX'
     */
    public set distribution(value: 'GGX' | 'MULTI_GGX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distribution`, value)
    }

    /**
     * Method for rendering subsurface scattering
     * @desc enum in ['BURLEY', 'RANDOM_WALK'], default 'BURLEY'
     */
    public set subsurface_method(value: 'BURLEY' | 'RANDOM_WALK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.subsurface_method`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
