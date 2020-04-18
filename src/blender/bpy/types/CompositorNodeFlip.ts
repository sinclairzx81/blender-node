import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeFlip
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeFlip.html
 */
export class CompositorNodeFlip {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['X', 'Y', 'XY'], default 'X'
     */
    public get axis(): 'X' | 'Y' | 'XY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis`)
    }

    /**
     * 
     * @desc enum in ['X', 'Y', 'XY'], default 'X'
     */
    public set axis(value: 'X' | 'Y' | 'XY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis`, value)
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
