import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SceneRenderView
 * 
 * https://docs.blender.org/api/current/bpy.types.SceneRenderView.html
 */
export class SceneRenderView {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Suffix to identify the cameras to use, and added to the render images for this view
     * @desc string, default '', (never None)
     */
    public get camera_suffix(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.camera_suffix`)
    }

    /**
     * Suffix added to the render images for this view
     * @desc string, default '', (never None)
     */
    public get file_suffix(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.file_suffix`)
    }

    /**
     * Render view name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Disable or enable the render view
     * @desc boolean, default False
     */
    public get use(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use`)
    }

    /**
     * Suffix to identify the cameras to use, and added to the render images for this view
     * @desc string, default '', (never None)
     */
    public set camera_suffix(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.camera_suffix`, value)
    }

    /**
     * Suffix added to the render images for this view
     * @desc string, default '', (never None)
     */
    public set file_suffix(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.file_suffix`, value)
    }

    /**
     * Render view name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Disable or enable the render view
     * @desc boolean, default False
     */
    public set use(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
