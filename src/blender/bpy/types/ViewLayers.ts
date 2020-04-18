import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ViewLayer } from './ViewLayer'

/**
 * ViewLayers
 * 
 * https://docs.blender.org/api/current/bpy.types.ViewLayers.html
 */
export class ViewLayers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a view layer to scene
     * @desc ViewLayer
     */
    public new(options: { name?: string }): ViewLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, ViewLayer)
    }

    /**
     * Remove a view layer
     * @desc void
     */
    public remove(options: { layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
