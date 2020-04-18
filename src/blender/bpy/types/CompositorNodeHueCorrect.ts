import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { CurveMapping } from './CurveMapping'

/**
 * CompositorNodeHueCorrect
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeHueCorrect.html
 */
export class CompositorNodeHueCorrect {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurveMapping, (readonly)
     */
    public get mapping(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.mapping`, CurveMapping)
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
