import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FModifierEnvelopeControlPoint } from './FModifierEnvelopeControlPoint'

/**
 * FModifierEnvelopeControlPoints
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierEnvelopeControlPoints.html
 */
export class FModifierEnvelopeControlPoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a control point to a FModifierEnvelope
     * @desc FModifierEnvelopeControlPoint
     */
    public add(options: { frame?: number }): FModifierEnvelopeControlPoint {
        return PythonInterop.callClass(this.interop, `${this.accessor}.add`, options, FModifierEnvelopeControlPoint)
    }

    /**
     * Remove a control-point from an FModifierEnvelope
     * @desc void
     */
    public remove(options: { point?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
