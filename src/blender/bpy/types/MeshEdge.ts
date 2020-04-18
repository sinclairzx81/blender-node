import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshEdge
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshEdge.html
 */
export class MeshEdge {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Index of this edge
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * (readonly)
     * @desc void
     */
    public get key(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.key`)
    }

    /**
     * Weight used by the Bevel modifier
     * @desc float in [-inf, inf], default 0.0
     */
    public get bevel_weight(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bevel_weight`)
    }

    /**
     * Weight used by the Subdivision Surface modifier for creasing
     * @desc float in [0, 1], default 0.0
     */
    public get crease(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.crease`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Loose edge
     * @desc boolean, default False
     */
    public get is_loose(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_loose`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Sharp edge for the Edge Split modifier
     * @desc boolean, default False
     */
    public get use_edge_sharp(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_edge_sharp`)
    }

    /**
     * Edge mark for Freestyle line rendering
     * @desc boolean, default False
     */
    public get use_freestyle_mark(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_freestyle_mark`)
    }

    /**
     * Seam edge for UV unwrapping
     * @desc boolean, default False
     */
    public get use_seam(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_seam`)
    }

    /**
     * Vertex indices
     * @desc int array of 2 items in [0, inf], default (0, 0)
     */
    public get vertices(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertices`, 'number', 2)
    }

    /**
     * Weight used by the Bevel modifier
     * @desc float in [-inf, inf], default 0.0
     */
    public set bevel_weight(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bevel_weight`, value)
    }

    /**
     * Weight used by the Subdivision Surface modifier for creasing
     * @desc float in [0, 1], default 0.0
     */
    public set crease(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.crease`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Loose edge
     * @desc boolean, default False
     */
    public set is_loose(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_loose`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Sharp edge for the Edge Split modifier
     * @desc boolean, default False
     */
    public set use_edge_sharp(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_edge_sharp`, value)
    }

    /**
     * Edge mark for Freestyle line rendering
     * @desc boolean, default False
     */
    public set use_freestyle_mark(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_freestyle_mark`, value)
    }

    /**
     * Seam edge for UV unwrapping
     * @desc boolean, default False
     */
    public set use_seam(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_seam`, value)
    }

    /**
     * Vertex indices
     * @desc int array of 2 items in [0, inf], default (0, 0)
     */
    public set vertices(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertices`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
