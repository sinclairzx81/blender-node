import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Paint } from './Paint'

/**
 * VertexPaint
 * 
 * https://docs.blender.org/api/current/bpy.types.VertexPaint.html
 */
export class VertexPaint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of times to copy strokes across the surface
     * @desc int array of 3 items in [1, 64], default (1, 1, 1)
     */
    public get radial_symmetry(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.radial_symmetry`, 'number', 3)
    }

    /**
     * Restrict painting to vertices in the group
     * @desc boolean, default False
     */
    public get use_group_restrict(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_group_restrict`)
    }

    /**
     * Number of times to copy strokes across the surface
     * @desc int array of 3 items in [1, 64], default (1, 1, 1)
     */
    public set radial_symmetry(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.radial_symmetry`, value)
    }

    /**
     * Restrict painting to vertices in the group
     * @desc boolean, default False
     */
    public set use_group_restrict(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_group_restrict`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
