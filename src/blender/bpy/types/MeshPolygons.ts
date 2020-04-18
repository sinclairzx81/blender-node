import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshPolygons
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshPolygons.html
 */
export class MeshPolygons {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The active polygon for this mesh
     * @desc int in [-inf, inf], default 0
     */
    public get active(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active`)
    }

    /**
     * The active polygon for this mesh
     * @desc int in [-inf, inf], default 0
     */
    public set active(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * add
     * @desc void
     */
    public add(options: { count?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
