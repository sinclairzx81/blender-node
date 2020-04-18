import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { FModifier } from './FModifier'
import { FModifierEnvelopeControlPoints } from './FModifierEnvelopeControlPoints'
import { FModifierEnvelopeControlPoint } from './FModifierEnvelopeControlPoint'

/**
 * FModifierEnvelope
 * 
 * https://docs.blender.org/api/current/bpy.types.FModifierEnvelope.html
 */
export class FModifierEnvelope {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Control points defining the shape of the envelope
     * @desc FModifierEnvelopeControlPoints bpy_prop_collection of FModifierEnvelopeControlPoint, (readonly)
     */
    public get control_points(): BlenderCollection<FModifierEnvelopeControlPoint> & Indexable<FModifierEnvelopeControlPoint> & FModifierEnvelopeControlPoints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.control_points`, FModifierEnvelopeControlPoints, FModifierEnvelopeControlPoint)
    }

    /**
     * Upper distance from Reference Value for 1:1 default influence
     * @desc float in [-inf, inf], default 0.0
     */
    public get default_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_max`)
    }

    /**
     * Lower distance from Reference Value for 1:1 default influence
     * @desc float in [-inf, inf], default 0.0
     */
    public get default_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.default_min`)
    }

    /**
     * Value that envelope’s influence is centered around / based on
     * @desc float in [-inf, inf], default 0.0
     */
    public get reference_value(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.reference_value`)
    }

    /**
     * Upper distance from Reference Value for 1:1 default influence
     * @desc float in [-inf, inf], default 0.0
     */
    public set default_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_max`, value)
    }

    /**
     * Lower distance from Reference Value for 1:1 default influence
     * @desc float in [-inf, inf], default 0.0
     */
    public set default_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.default_min`, value)
    }

    /**
     * Value that envelope’s influence is centered around / based on
     * @desc float in [-inf, inf], default 0.0
     */
    public set reference_value(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.reference_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
