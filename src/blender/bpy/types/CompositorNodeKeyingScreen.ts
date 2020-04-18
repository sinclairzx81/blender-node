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
 * CompositorNodeKeyingScreen
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeKeyingScreen.html
 */
export class CompositorNodeKeyingScreen {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get tracking_object(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.tracking_object`)
    }

    /**
     * 
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set tracking_object(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.tracking_object`, value)
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
