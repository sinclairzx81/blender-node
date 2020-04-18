import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeSunBeams
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeSunBeams.html
 */
export class CompositorNodeSunBeams {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Length of rays as a factor of the image size
     * @desc float in [0, 100], default 0.0
     */
    public get ray_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.ray_length`)
    }

    /**
     * Source point of rays as a factor of the image width & height
     * @desc float array of 2 items in [-100, 100], default (0.0, 0.0)
     */
    public get source(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.source`, 'number', 2)
    }

    /**
     * Length of rays as a factor of the image size
     * @desc float in [0, 100], default 0.0
     */
    public set ray_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.ray_length`, value)
    }

    /**
     * Source point of rays as a factor of the image width & height
     * @desc float array of 2 items in [-100, 100], default (0.0, 0.0)
     */
    public set source(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.source`, value)
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
