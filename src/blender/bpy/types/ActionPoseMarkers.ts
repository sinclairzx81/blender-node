import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { TimelineMarker } from './TimelineMarker'

/**
 * ActionPoseMarkers
 * 
 * https://docs.blender.org/api/current/bpy.types.ActionPoseMarkers.html
 */
export class ActionPoseMarkers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active pose marker for this action
     * @desc TimelineMarker
     */
    public get active(): TimelineMarker {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, TimelineMarker)
    }

    /**
     * Index of active pose marker
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active pose marker for this action
     * @desc TimelineMarker
     */
    public set active(value: TimelineMarker) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Index of active pose marker
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a pose marker to the action
     * @desc TimelineMarker
     */
    public new(options: { name?: string }): TimelineMarker {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, TimelineMarker)
    }

    /**
     * Remove a timeline marker
     * @desc void
     */
    public remove(options: { marker?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
