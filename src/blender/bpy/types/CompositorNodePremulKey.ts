import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodePremulKey
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodePremulKey.html
 */
export class CompositorNodePremulKey {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Conversion between premultiplied alpha and key alpha
     * @desc enum in ['STRAIGHT_TO_PREMUL', 'PREMUL_TO_STRAIGHT'], default 'STRAIGHT_TO_PREMUL'
     */
    public get mapping(): 'STRAIGHT_TO_PREMUL' | 'PREMUL_TO_STRAIGHT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mapping`)
    }

    /**
     * Conversion between premultiplied alpha and key alpha
     * @desc enum in ['STRAIGHT_TO_PREMUL', 'PREMUL_TO_STRAIGHT'], default 'STRAIGHT_TO_PREMUL'
     */
    public set mapping(value: 'STRAIGHT_TO_PREMUL' | 'PREMUL_TO_STRAIGHT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mapping`, value)
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
