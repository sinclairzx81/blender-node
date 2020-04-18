import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeDoubleEdgeMask
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeDoubleEdgeMask.html
 */
export class CompositorNodeDoubleEdgeMask {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['BLEED_OUT', 'KEEP_IN'], default 'BLEED_OUT'
     */
    public get edge_mode(): 'BLEED_OUT' | 'KEEP_IN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.edge_mode`)
    }

    /**
     * 
     * @desc enum in ['ALL', 'ADJACENT_ONLY'], default 'ALL'
     */
    public get inner_mode(): 'ALL' | 'ADJACENT_ONLY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.inner_mode`)
    }

    /**
     * 
     * @desc enum in ['BLEED_OUT', 'KEEP_IN'], default 'BLEED_OUT'
     */
    public set edge_mode(value: 'BLEED_OUT' | 'KEEP_IN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.edge_mode`, value)
    }

    /**
     * 
     * @desc enum in ['ALL', 'ADJACENT_ONLY'], default 'ALL'
     */
    public set inner_mode(value: 'ALL' | 'ADJACENT_ONLY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.inner_mode`, value)
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
