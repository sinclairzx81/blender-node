import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshSkinVertex
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshSkinVertex.html
 */
export class MeshSkinVertex {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Radius of the skin
     * @desc float array of 2 items in [0, inf], default (0.0, 0.0)
     */
    public get radius(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.radius`, 'number', 2)
    }

    /**
     * If vertex has multiple adjacent edges, it is hulled to them directly
     * @desc boolean, default False
     */
    public get use_loose(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_loose`)
    }

    /**
     * Vertex is a root for rotation calculations and armature generation, setting this flag does not clear other roots in the same mesh island
     * @desc boolean, default False
     */
    public get use_root(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_root`)
    }

    /**
     * Radius of the skin
     * @desc float array of 2 items in [0, inf], default (0.0, 0.0)
     */
    public set radius(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * If vertex has multiple adjacent edges, it is hulled to them directly
     * @desc boolean, default False
     */
    public set use_loose(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_loose`, value)
    }

    /**
     * Vertex is a root for rotation calculations and armature generation, setting this flag does not clear other roots in the same mesh island
     * @desc boolean, default False
     */
    public set use_root(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_root`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
