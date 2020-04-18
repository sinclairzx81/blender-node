import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeSplitViewer
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeSplitViewer.html
 */
export class CompositorNodeSplitViewer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc enum in ['X', 'Y'], default 'X'
     */
    public get axis(): 'X' | 'Y' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.axis`)
    }

    /**
     * 
     * @desc int in [0, 100], default 0
     */
    public get factor(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.factor`)
    }

    /**
     * 
     * @desc enum in ['X', 'Y'], default 'X'
     */
    public set axis(value: 'X' | 'Y') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.axis`, value)
    }

    /**
     * 
     * @desc int in [0, 100], default 0
     */
    public set factor(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.factor`, value)
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
