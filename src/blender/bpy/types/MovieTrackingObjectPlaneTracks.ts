import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingTrack } from './MovieTrackingTrack'

/**
 * MovieTrackingObjectPlaneTracks
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingObjectPlaneTracks.html
 */
export class MovieTrackingObjectPlaneTracks {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active track in this tracking data object
     * @desc MovieTrackingTrack
     */
    public get active(): MovieTrackingTrack {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MovieTrackingTrack)
    }

    /**
     * Active track in this tracking data object
     * @desc MovieTrackingTrack
     */
    public set active(value: MovieTrackingTrack) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
