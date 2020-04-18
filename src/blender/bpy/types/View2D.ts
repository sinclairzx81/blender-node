import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * View2D
 * 
 * https://docs.blender.org/api/current/bpy.types.View2D.html
 */
export class View2D {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Transform region coordinates to 2D view
     * @desc float array of 2 items in [-inf, inf]
     */
    public region_to_view(options: { x?: number, y?: number }): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.region_to_view`, options)
    }

    /**
     * Transform 2D view coordinates to region
     * @desc int array of 2 items in [-inf, inf]
     */
    public view_to_region(options: { x?: number, y?: number, clip?: boolean }): [number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.view_to_region`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
