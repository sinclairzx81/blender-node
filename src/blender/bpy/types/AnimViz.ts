import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { AnimVizMotionPaths } from './AnimVizMotionPaths'

/**
 * AnimViz
 * 
 * https://docs.blender.org/api/current/bpy.types.AnimViz.html
 */
export class AnimViz {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Motion Path settings for visualization
     * @desc AnimVizMotionPaths, (readonly, never None)
     */
    public get motion_path(): AnimVizMotionPaths {
        return PythonInterop.getClass(this.interop, `${this.accessor}.motion_path`, AnimVizMotionPaths)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
