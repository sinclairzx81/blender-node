import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshLoopTriangle
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshLoopTriangle.html
 */
export class MeshLoopTriangle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Area of this triangle
     * @desc float in [0, inf], default 0.0, (readonly)
     */
    public get area(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.area`)
    }

    /**
     * Index of this loop triangle
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * Indices of mesh loops that make up the triangle
     * @desc int array of 3 items in [0, inf], default (0, 0, 0), (readonly)
     */
    public get loops(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.loops`, 'number', 3)
    }

    /**
     * 
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get material_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_index`)
    }

    /**
     * Local space unit length normal vector for this triangle
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0), (readonly)
     */
    public get normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal`, 'number', 3)
    }

    /**
     * Index of mesh polygon that the triangle is a part of
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get polygon_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.polygon_index`)
    }

    /**
     * Local space unit length split normals vectors of the vertices of this triangle (must be computed beforehand using calc_normals_split or calc_tangents)
     * @desc float multi-dimensional array of 3 * 3 items in [-1, 1], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0)), (readonly)
     */
    public get split_normals(): [[number, number, number], [number, number, number], [number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.split_normals`, 'number', 3, 3)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get use_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth`)
    }

    /**
     * Indices of triangle vertices
     * @desc int array of 3 items in [0, inf], default (0, 0, 0), (readonly)
     */
    public get vertices(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertices`, 'number', 3)
    }

    /**
     * The midpoint of the face.(readonly)
     * @desc void
     */
    public get center(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.center`)
    }

    /**
     * (readonly)
     * @desc void
     */
    public get edge_keys(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.edge_keys`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
