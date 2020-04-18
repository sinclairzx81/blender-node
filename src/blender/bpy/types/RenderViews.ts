import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { SceneRenderView } from './SceneRenderView'

/**
 * RenderViews
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderViews.html
 */
export class RenderViews {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active Render View
     * @desc SceneRenderView, (never None)
     */
    public get active(): SceneRenderView {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, SceneRenderView)
    }

    /**
     * Active index in render view array
     * @desc int in [0, 32767], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active Render View
     * @desc SceneRenderView, (never None)
     */
    public set active(value: SceneRenderView) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active index in render view array
     * @desc int in [0, 32767], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a render view to scene
     * @desc SceneRenderView
     */
    public new(options: { name?: string }): SceneRenderView {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, SceneRenderView)
    }

    /**
     * Remove a render view
     * @desc void
     */
    public remove(options: { view?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
