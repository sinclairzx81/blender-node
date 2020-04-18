import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Import_curveOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.import_curve.html
 */
export class Import_curveOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Load a SVG file
     * @desc void
     */
    public svg(options: { filepath?: string, filter_glob?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.svg`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
