import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { MovieClip } from './MovieClip'

/**
 * CompositorNodeStabilize
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeStabilize.html
 */
export class CompositorNodeStabilize {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Method to use to filter stabilization
     * @desc enum in ['NEAREST', 'BILINEAR', 'BICUBIC'], default 'NEAREST'
     */
    public get filter_type(): 'NEAREST' | 'BILINEAR' | 'BICUBIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * Invert stabilization to re-introduce motion to the frame
     * @desc boolean, default False
     */
    public get invert(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.invert`)
    }

    /**
     * 
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Method to use to filter stabilization
     * @desc enum in ['NEAREST', 'BILINEAR', 'BICUBIC'], default 'NEAREST'
     */
    public set filter_type(value: 'NEAREST' | 'BILINEAR' | 'BICUBIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
    }

    /**
     * Invert stabilization to re-introduce motion to the frame
     * @desc boolean, default False
     */
    public set invert(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.invert`, value)
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
