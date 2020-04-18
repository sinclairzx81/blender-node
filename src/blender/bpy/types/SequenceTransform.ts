import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SequenceTransform
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceTransform.html
 */
export class SequenceTransform {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Amount to move the input on the X axis within its boundaries
     * @desc int in [-inf, inf], default 0
     */
    public get offset_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.offset_x`)
    }

    /**
     * Amount to move the input on the Y axis within its boundaries
     * @desc int in [-inf, inf], default 0
     */
    public get offset_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.offset_y`)
    }

    /**
     * Amount to move the input on the X axis within its boundaries
     * @desc int in [-inf, inf], default 0
     */
    public set offset_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.offset_x`, value)
    }

    /**
     * Amount to move the input on the Y axis within its boundaries
     * @desc int in [-inf, inf], default 0
     */
    public set offset_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.offset_y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
