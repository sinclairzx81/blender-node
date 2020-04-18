import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { RenderPass } from './RenderPass'

/**
 * RenderPasses
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderPasses.html
 */
export class RenderPasses {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Get the render pass for a given type and view
     * @desc RenderPass
     */
    public find_by_type(options: { pass_type?: 'COMBINED' | 'Z' | 'SHADOW' | 'AO' | 'NORMAL' | 'VECTOR' | 'OBJECT_INDEX' | 'UV' | 'MIST' | 'EMIT' | 'ENVIRONMENT' | 'MATERIAL_INDEX' | 'DIFFUSE_DIRECT' | 'DIFFUSE_INDIRECT' | 'DIFFUSE_COLOR' | 'GLOSSY_DIRECT' | 'GLOSSY_INDIRECT' | 'GLOSSY_COLOR' | 'TRANSMISSION_DIRECT' | 'TRANSMISSION_INDIRECT' | 'TRANSMISSION_COLOR' | 'SUBSURFACE_DIRECT' | 'SUBSURFACE_INDIRECT' | 'SUBSURFACE_COLOR', view?: string }): RenderPass {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_by_type`, options, RenderPass)
    }

    /**
     * Get the render pass for a given name and view
     * @desc RenderPass
     */
    public find_by_name(options: { name?: string, view?: string }): RenderPass {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_by_name`, options, RenderPass)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
