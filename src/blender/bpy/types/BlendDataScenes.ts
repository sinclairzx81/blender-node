import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Scene } from './Scene'

/**
 * BlendDataScenes
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataScenes.html
 */
export class BlendDataScenes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new scene to the main database
     * @desc Scene
     */
    public new(options: { name?: string }): Scene {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Scene)
    }

    /**
     * Remove a scene from the current blendfile
     * @desc void
     */
    public remove(options: { scene?: unknown, do_unlink?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
