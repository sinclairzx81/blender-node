import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FModifier } from './FModifier'

/**
 * FCurveModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.FCurveModifiers.html
 */
export class FCurveModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active F-Curve Modifier
     * @desc FModifier
     */
    public get active(): FModifier {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, FModifier)
    }

    /**
     * Active F-Curve Modifier
     * @desc FModifier
     */
    public set active(value: FModifier) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a constraint to this object
     * @desc FModifier
     */
    public new(options: { type?: 'NULL' | 'GENERATOR' | 'FNGENERATOR' | 'ENVELOPE' | 'CYCLES' | 'NOISE' | 'LIMITS' | 'STEPPED' }): FModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, FModifier)
    }

    /**
     * Remove a modifier from this F-Curve
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
