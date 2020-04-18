import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * UVProjector
 * 
 * https://docs.blender.org/api/current/bpy.types.UVProjector.html
 */
export class UVProjector {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Object to use as projector transform
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Object to use as projector transform
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
