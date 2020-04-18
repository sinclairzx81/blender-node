import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ObjectDisplay
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectDisplay.html
 */
export class ObjectDisplay {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Object cast shadows in the 3d viewport
     * @desc boolean, default True
     */
    public get show_shadows(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_shadows`)
    }

    /**
     * Object cast shadows in the 3d viewport
     * @desc boolean, default True
     */
    public set show_shadows(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_shadows`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
