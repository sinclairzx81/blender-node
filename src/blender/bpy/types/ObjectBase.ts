import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * ObjectBase
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectBase.html
 */
export class ObjectBase {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Object this base links to
     * @desc Object, (readonly)
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Temporarily hide in viewport
     * @desc boolean, default False
     */
    public get hide_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_viewport`)
    }

    /**
     * Object base selection state
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Temporarily hide in viewport
     * @desc boolean, default False
     */
    public set hide_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_viewport`, value)
    }

    /**
     * Object base selection state
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
