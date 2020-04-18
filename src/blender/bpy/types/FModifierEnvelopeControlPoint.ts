import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * FModifierEnvelopeControlPoint
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierEnvelopeControlPoint.html
 */
export class FModifierEnvelopeControlPoint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Frame this control-point occurs on
     * @desc float in [-inf, inf], default 0.0
     */
    public get frame(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.frame`)
    }

    /**
     * Upper bound of envelope at this control-point
     * @desc float in [-inf, inf], default 0.0
     */
    public get max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.max`)
    }

    /**
     * Lower bound of envelope at this control-point
     * @desc float in [-inf, inf], default 0.0
     */
    public get min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.min`)
    }

    /**
     * Frame this control-point occurs on
     * @desc float in [-inf, inf], default 0.0
     */
    public set frame(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.frame`, value)
    }

    /**
     * Upper bound of envelope at this control-point
     * @desc float in [-inf, inf], default 0.0
     */
    public set max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.max`, value)
    }

    /**
     * Lower bound of envelope at this control-point
     * @desc float in [-inf, inf], default 0.0
     */
    public set min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.min`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
