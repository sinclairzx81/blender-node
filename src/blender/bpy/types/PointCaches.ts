import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PointCaches
 * 
 * https://docs.blender.org/api/current/bpy.types.PointCaches.html
 */
export class PointCaches {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
