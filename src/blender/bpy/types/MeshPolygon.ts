import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshPolygon
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshPolygon.html
 */
export class MeshPolygon {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Read only area of this polygon
     * @desc float in [0, inf], default 0.0, (readonly)
     */
    public get area(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.area`)
    }

    /**
     * Center of this polygon
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get center(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.center`, 'number', 3)
    }

    /**
     * Index of this polygon
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * Local space unit length normal vector for this polygon
     * @desc float array of 3 items in [-1, 1], default (0.0, 0.0, 0.0), (readonly)
     */
    public get normal(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.normal`, 'number', 3)
    }

    /**
     * (readonly)
     * @desc void
     */
    public get edge_keys(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.edge_keys`)
    }

    /**
     * (readonly)
     * @desc void
     */
    public get loop_indices(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.loop_indices`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Index of the first loop of this polygon
     * @desc int in [0, inf], default 0
     */
    public get loop_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.loop_start`)
    }

    /**
     * Number of loops used by this polygon
     * @desc int in [0, inf], default 0
     */
    public get loop_total(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.loop_total`)
    }

    /**
     * 
     * @desc int in [0, 32767], default 0
     */
    public get material_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.material_index`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Face mark for Freestyle line rendering
     * @desc boolean, default False
     */
    public get use_freestyle_mark(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_freestyle_mark`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_smooth(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_smooth`)
    }

    /**
     * Vertex indices
     * @desc int array of 3 items in [0, inf], default (0, 0, 0)
     */
    public get vertices(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.vertices`, 'number', 3)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Index of the first loop of this polygon
     * @desc int in [0, inf], default 0
     */
    public set loop_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.loop_start`, value)
    }

    /**
     * Number of loops used by this polygon
     * @desc int in [0, inf], default 0
     */
    public set loop_total(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.loop_total`, value)
    }

    /**
     * 
     * @desc int in [0, 32767], default 0
     */
    public set material_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.material_index`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Face mark for Freestyle line rendering
     * @desc boolean, default False
     */
    public set use_freestyle_mark(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_freestyle_mark`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_smooth(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_smooth`, value)
    }

    /**
     * Vertex indices
     * @desc int array of 3 items in [0, inf], default (0, 0, 0)
     */
    public set vertices(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.vertices`, value)
    }

    /**
     * Invert winding of this polygon (flip its normal)
     * @desc void
     */
    public flip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flip`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
