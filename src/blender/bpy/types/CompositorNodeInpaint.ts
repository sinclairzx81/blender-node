import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeInpaint
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeInpaint.html
 */
export class CompositorNodeInpaint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distance to inpaint (number of iterations)
     * @desc int in [0, 10000], default 0
     */
    public get distance(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.distance`)
    }

    /**
     * Distance to inpaint (number of iterations)
     * @desc int in [0, 10000], default 0
     */
    public set distance(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.distance`, value)
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
