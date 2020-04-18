import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeAlphaOver
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeAlphaOver.html
 */
export class CompositorNodeAlphaOver {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Mix Factor
     * @desc float in [0, 1], default 0.0
     */
    public get premul(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.premul`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_premultiply(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_premultiply`)
    }

    /**
     * Mix Factor
     * @desc float in [0, 1], default 0.0
     */
    public set premul(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.premul`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_premultiply(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_premultiply`, value)
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
