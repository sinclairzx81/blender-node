import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * WorldMistSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.WorldMistSettings.html
 */
export class WorldMistSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Distance over which the mist effect fades in
     * @desc float in [0, inf], default 25.0
     */
    public get depth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.depth`)
    }

    /**
     * Type of transition used to fade mist
     * @desc enum in ['QUADRATIC', 'LINEAR', 'INVERSE_QUADRATIC'], default 'QUADRATIC'
     */
    public get falloff(): 'QUADRATIC' | 'LINEAR' | 'INVERSE_QUADRATIC' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.falloff`)
    }

    /**
     * Control how much mist density decreases with height
     * @desc float in [0, 100], default 0.0
     */
    public get height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.height`)
    }

    /**
     * Overall minimum intensity of the mist effect
     * @desc float in [0, 1], default 0.0
     */
    public get intensity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.intensity`)
    }

    /**
     * Starting distance of the mist, measured from the camera
     * @desc float in [0, inf], default 5.0
     */
    public get start(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.start`)
    }

    /**
     * Occlude objects with the environment color as they are further away
     * @desc boolean, default False
     */
    public get use_mist(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mist`)
    }

    /**
     * Distance over which the mist effect fades in
     * @desc float in [0, inf], default 25.0
     */
    public set depth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.depth`, value)
    }

    /**
     * Type of transition used to fade mist
     * @desc enum in ['QUADRATIC', 'LINEAR', 'INVERSE_QUADRATIC'], default 'QUADRATIC'
     */
    public set falloff(value: 'QUADRATIC' | 'LINEAR' | 'INVERSE_QUADRATIC') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.falloff`, value)
    }

    /**
     * Control how much mist density decreases with height
     * @desc float in [0, 100], default 0.0
     */
    public set height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * Overall minimum intensity of the mist effect
     * @desc float in [0, 1], default 0.0
     */
    public set intensity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.intensity`, value)
    }

    /**
     * Starting distance of the mist, measured from the camera
     * @desc float in [0, inf], default 5.0
     */
    public set start(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.start`, value)
    }

    /**
     * Occlude objects with the environment color as they are further away
     * @desc boolean, default False
     */
    public set use_mist(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mist`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
