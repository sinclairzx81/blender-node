import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Light } from './Light'

/**
 * BlendDataLights
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataLights.html
 */
export class BlendDataLights {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new light to the main database
     * @desc Light
     */
    public new(options: { name?: string, type?: 'POINT' | 'SUN' | 'SPOT' | 'AREA' }): Light {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Light)
    }

    /**
     * Remove a light from the current blendfile
     * @desc void
     */
    public remove(options: { light?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

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
