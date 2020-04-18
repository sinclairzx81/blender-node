import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeDespeckle
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeDespeckle.html
 */
export class CompositorNodeDespeckle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Threshold for detecting pixels to despeckle
     * @desc float in [0, 1], default 0.0
     */
    public get threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold`)
    }

    /**
     * Threshold for the number of neighbor pixels that must match
     * @desc float in [0, 1], default 0.0
     */
    public get threshold_neighbor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.threshold_neighbor`)
    }

    /**
     * Threshold for detecting pixels to despeckle
     * @desc float in [0, 1], default 0.0
     */
    public set threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold`, value)
    }

    /**
     * Threshold for the number of neighbor pixels that must match
     * @desc float in [0, 1], default 0.0
     */
    public set threshold_neighbor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.threshold_neighbor`, value)
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
