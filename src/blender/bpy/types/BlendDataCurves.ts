import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Curve } from './Curve'

/**
 * BlendDataCurves
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataCurves.html
 */
export class BlendDataCurves {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new curve to the main database
     * @desc Curve
     */
    public new(options: { name?: string, type?: 'CURVE' | 'SURFACE' | 'FONT' }): Curve {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Curve)
    }

    /**
     * Remove a curve from the current blendfile
     * @desc void
     */
    public remove(options: { curve?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
