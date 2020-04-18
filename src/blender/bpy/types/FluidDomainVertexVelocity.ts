import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FluidDomainVertexVelocity
 * 
 * https://docs.blender.org/api/current/bpy.types.FluidDomainVertexVelocity.html
 */
export class FluidDomainVertexVelocity {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get velocity(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.velocity`, 'number', 3)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
