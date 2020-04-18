import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BlendDataScreens
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataScreens.html
 */
export class BlendDataScreens {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
