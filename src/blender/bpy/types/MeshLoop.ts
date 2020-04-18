import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshLoop
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshLoop.html
 */
export class MeshLoop {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bitangent vector of this vertex for this polygon (must be computed beforehand using calc_tangents, use it only if really needed, slower access than bitangent_sign)
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0), (readonly)
     */
    public get bitangent(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.bitangent`, 'number', 3)
    }

    /**
     * Sign of the bitangent vector of this vertex for this polygon (must be computed beforehand using calc_tangents, bitangent = bitangent_sign * cross(normal, tangent))
     * @desc float in [-1, 1], default 0.0, (readonly)
     */
    public get bitangent_sign(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bitangent_sign`)
    }

    /**
     * Index of this loop
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * Local space unit length tangent vector of this vertex for this polygon (must be computed beforehand using calc_tangents)
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0), (readonly)
     */
    public get tangent(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.tangent`, 'number', 3)
    }

    /**
     * Edge index
     * @desc int in [0, inf], default 0
     */
    public get edge_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.edge_index`)
    }

    /**
     * Local space unit length split normal vector of this vertex for this polygon (must be computed beforehand using calc_normals_split or calc_tangents)
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0)
     */
    public get normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal`, 'number', 3)
    }

    /**
     * Vertex index
     * @desc int in [0, inf], default 0
     */
    public get vertex_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.vertex_index`)
    }

    /**
     * Edge index
     * @desc int in [0, inf], default 0
     */
    public set edge_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.edge_index`, value)
    }

    /**
     * Local space unit length split normal vector of this vertex for this polygon (must be computed beforehand using calc_normals_split or calc_tangents)
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0)
     */
    public set normal(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.normal`, value)
    }

    /**
     * Vertex index
     * @desc int in [0, inf], default 0
     */
    public set vertex_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.vertex_index`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
