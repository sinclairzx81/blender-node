import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Material } from './Material'

/**
 * IDMaterials
 * 
 * https://docs.blender.org/api/current/bpy.types.IDMaterials.html
 */
export class IDMaterials {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new material to the data-block
     * @desc void
     */
    public append(options: { material?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.append`, options)
    }

    /**
     * Remove a material from the data-block
     * @desc Material
     */
    public pop(options: { index?: number }): Material {
        return PythonInterop.callClass(this.interop, `${this.accessor}.pop`, options, Material)
    }

    /**
     * Remove all materials from the data-block
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
