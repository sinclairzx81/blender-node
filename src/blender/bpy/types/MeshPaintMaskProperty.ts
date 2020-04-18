import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshPaintMaskProperty
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshPaintMaskProperty.html
 */
export class MeshPaintMaskProperty {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.value`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
