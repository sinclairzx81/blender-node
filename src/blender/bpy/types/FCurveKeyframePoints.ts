import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Keyframe } from './Keyframe'

/**
 * FCurveKeyframePoints
 * 
 * https://docs.blender.org/api/current/bpy.types.FCurveKeyframePoints.html
 */
export class FCurveKeyframePoints {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a keyframe point to a F-Curve
     * @desc Keyframe
     */
    public insert(options: { frame?: number, value?: number, options?: ('REPLACE' | 'NEEDED' | 'FAST')[], keyframe_type?: 'KEYFRAME' | 'BREAKDOWN' | 'MOVING_HOLD' | 'EXTREME' | 'JITTER' }): Keyframe {
        return PythonInterop.callClass(this.interop, `${this.accessor}.insert`, options, Keyframe)
    }

    /**
     * Add a keyframe point to a F-Curve
     * @desc void
     */
    public add(options: { count?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    /**
     * Remove keyframe from an F-Curve
     * @desc void
     */
    public remove(options: { keyframe?: unknown, fast?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
