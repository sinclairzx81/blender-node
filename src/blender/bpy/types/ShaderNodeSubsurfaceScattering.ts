import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeSubsurfaceScattering
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeSubsurfaceScattering.html
 */
export class ShaderNodeSubsurfaceScattering {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Function to determine how much light nearby points contribute based on their distance to the shading point
     * @desc enum in ['CUBIC', 'GAUSSIAN', 'BURLEY', 'RANDOM_WALK'], default 'CUBIC'
     */
    public get falloff(): 'CUBIC' | 'GAUSSIAN' | 'BURLEY' | 'RANDOM_WALK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Function to determine how much light nearby points contribute based on their distance to the shading point
     * @desc enum in ['CUBIC', 'GAUSSIAN', 'BURLEY', 'RANDOM_WALK'], default 'CUBIC'
     */
    public set falloff(value: 'CUBIC' | 'GAUSSIAN' | 'BURLEY' | 'RANDOM_WALK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
