import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeFilter
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeFilter.html
 */
export class CompositorNodeFilter {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['SOFTEN', 'SHARPEN', 'LAPLACE', 'SOBEL', 'PREWITT', 'KIRSCH', 'SHADOW'], default 'SOFTEN'
     */
    public get filter_type(): 'SOFTEN' | 'SHARPEN' | 'LAPLACE' | 'SOBEL' | 'PREWITT' | 'KIRSCH' | 'SHADOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * 
     * @desc enum in ['SOFTEN', 'SHARPEN', 'LAPLACE', 'SOBEL', 'PREWITT', 'KIRSCH', 'SHADOW'], default 'SOFTEN'
     */
    public set filter_type(value: 'SOFTEN' | 'SHARPEN' | 'LAPLACE' | 'SOBEL' | 'PREWITT' | 'KIRSCH' | 'SHADOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
