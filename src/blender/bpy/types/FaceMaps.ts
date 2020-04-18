import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FaceMap } from './FaceMap'

/**
 * FaceMaps
 * 
 * https://docs.blender.org/api/current/bpy.types.FaceMaps.html
 */
export class FaceMaps {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Face maps of the object
     * @desc FaceMap, (readonly)
     */
    public get active(): FaceMap {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, FaceMap)
    }

    /**
     * Active index in face map array
     * @desc int in [0, 32767], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active index in face map array
     * @desc int in [0, 32767], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add face map to object
     * @desc FaceMap
     */
    public new(options: { name?: string }): FaceMap {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, FaceMap)
    }

    /**
     * Delete vertex group from object
     * @desc void
     */
    public remove(options: { group?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Delete all vertex groups from object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
