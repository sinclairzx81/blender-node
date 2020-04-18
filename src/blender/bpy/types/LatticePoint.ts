import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { VertexGroupElement } from './VertexGroupElement'

/**
 * LatticePoint
 * 
 * https://docs.blender.org/api/current/bpy.types.LatticePoint.html
 */
export class LatticePoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Original undeformed location used to calculate the strength of the deform effect (edit/animate the Deformed Location instead)
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * Weights for the vertex groups this point is member of
     * @desc bpy_prop_collection of VertexGroupElement, (readonly)
     */
    public get groups(): BlenderCollection<VertexGroupElement> & Indexable<VertexGroupElement> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.groups`, VertexGroupElement)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co_deform(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co_deform`, 'number', 3)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Softbody goal weight
     * @desc float in [0.01, 100], default 0.0
     */
    public get weight_softbody(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.weight_softbody`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co_deform(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co_deform`, value)
    }

    /**
     * Selection status
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Softbody goal weight
     * @desc float in [0.01, 100], default 0.0
     */
    public set weight_softbody(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.weight_softbody`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
