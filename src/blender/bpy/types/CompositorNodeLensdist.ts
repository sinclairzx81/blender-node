import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeLensdist
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeLensdist.html
 */
export class CompositorNodeLensdist {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * For positive distortion factor only: scale image such that black areas are not visible
     * @desc boolean, default False
     */
    public get use_fit(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fit`)
    }

    /**
     * Enable/disable jittering (faster, but also noisier)
     * @desc boolean, default False
     */
    public get use_jitter(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_jitter`)
    }

    /**
     * Enable/disable projector mode (the effect is applied in horizontal direction only)
     * @desc boolean, default False
     */
    public get use_projector(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_projector`)
    }

    /**
     * For positive distortion factor only: scale image such that black areas are not visible
     * @desc boolean, default False
     */
    public set use_fit(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fit`, value)
    }

    /**
     * Enable/disable jittering (faster, but also noisier)
     * @desc boolean, default False
     */
    public set use_jitter(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_jitter`, value)
    }

    /**
     * Enable/disable projector mode (the effect is applied in horizontal direction only)
     * @desc boolean, default False
     */
    public set use_projector(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_projector`, value)
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
