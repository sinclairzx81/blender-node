import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'

/**
 * ShaderNodeWireframe
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeWireframe.html
 */
export class ShaderNodeWireframe {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Use screen pixel size instead of world units
     * @desc boolean, default False
     */
    public get use_pixel_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_pixel_size`)
    }

    /**
     * Use screen pixel size instead of world units
     * @desc boolean, default False
     */
    public set use_pixel_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_pixel_size`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
