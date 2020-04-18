import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { ColorRamp } from './ColorRamp'

/**
 * CompositorNodeValToRGB
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeValToRGB.html
 */
export class CompositorNodeValToRGB {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ColorRamp, (readonly)
     */
    public get color_ramp(): ColorRamp {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_ramp`, ColorRamp)
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
