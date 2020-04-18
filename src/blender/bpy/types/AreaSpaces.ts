import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Space } from './Space'

/**
 * AreaSpaces
 * 
 * https://docs.blender.org/api/current/bpy.types.AreaSpaces.html
 */
export class AreaSpaces {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Space currently being displayed in this area
     * @desc Space, (readonly)
     */
    public get active(): Space {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, Space)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
