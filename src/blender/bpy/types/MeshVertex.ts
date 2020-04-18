import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { VertexGroupElement } from './VertexGroupElement'

/**
 * MeshVertex
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshVertex.html
 */
export class MeshVertex {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Weights for the vertex groups this vertex is member of
     * @desc bpy_prop_collection of VertexGroupElement, (readonly)
     */
    public get groups(): BlenderCollection<VertexGroupElement> & Indexable<VertexGroupElement> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.groups`, VertexGroupElement)
    }

    /**
     * Index of this vertex
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * For meshes with modifiers applied, the coordinate of the vertex with no deforming modifiers applied, as used for generated texture coordinates
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get undeformed_co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.undeformed_co`, 'number', 3)
    }

    /**
     * Weight used by the Bevel modifier ‘Only Vertices’ option
     * @desc float in [-inf, inf], default 0.0
     */
    public get bevel_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bevel_weight`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Vertex Normal
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0)
     */
    public get normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal`, 'number', 3)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Weight used by the Bevel modifier ‘Only Vertices’ option
     * @desc float in [-inf, inf], default 0.0
     */
    public set bevel_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bevel_weight`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Vertex Normal
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0)
     */
    public set normal(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.normal`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
