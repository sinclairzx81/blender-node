import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { TimelineMarker } from './TimelineMarker'

/**
 * TimelineMarkers
 * 
 * https://docs.blender.org/api/current/bpy.types.TimelineMarkers.html
 */
export class TimelineMarkers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a keyframe to the curve
     * @desc TimelineMarker
     */
    public new(options: { name?: string, frame?: number }): TimelineMarker {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, TimelineMarker)
    }

    /**
     * Remove a timeline marker
     * @desc void
     */
    public remove(options: { marker?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all timeline markers
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
