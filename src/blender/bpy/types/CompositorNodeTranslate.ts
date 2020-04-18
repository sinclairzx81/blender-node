import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeTranslate
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeTranslate.html
 */
export class CompositorNodeTranslate {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Use relative (fraction of input image size) values to define translation
     * @desc boolean, default False
     */
    public get use_relative(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_relative`)
    }

    /**
     * Wrap image on a specific axis
     * @desc enum in ['NONE', 'XAXIS', 'YAXIS', 'BOTH'], default 'NONE'
     */
    public get wrap_axis(): 'NONE' | 'XAXIS' | 'YAXIS' | 'BOTH' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.wrap_axis`)
    }

    /**
     * Use relative (fraction of input image size) values to define translation
     * @desc boolean, default False
     */
    public set use_relative(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_relative`, value)
    }

    /**
     * Wrap image on a specific axis
     * @desc enum in ['NONE', 'XAXIS', 'YAXIS', 'BOTH'], default 'NONE'
     */
    public set wrap_axis(value: 'NONE' | 'XAXIS' | 'YAXIS' | 'BOTH') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.wrap_axis`, value)
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
