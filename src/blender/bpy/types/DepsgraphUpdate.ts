import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ID } from './ID'

/**
 * DepsgraphUpdate
 * 
 * https://docs.blender.org/api/current/bpy.types.DepsgraphUpdate.html
 */
export class DepsgraphUpdate {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Updated datablock
     * @desc ID, (readonly)
     */
    public get id(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.id`, ID)
    }

    /**
     * Object geometry is updated
     * @desc boolean, default False, (readonly)
     */
    public get is_updated_geometry(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_updated_geometry`)
    }

    /**
     * Object transformation is updated
     * @desc boolean, default False, (readonly)
     */
    public get is_updated_transform(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_updated_transform`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
