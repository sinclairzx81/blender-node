import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingPlaneTrack } from './MovieTrackingPlaneTrack'

/**
 * MovieTrackingPlaneTracks
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingPlaneTracks.html
 */
export class MovieTrackingPlaneTracks {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active plane track in this tracking data object
     * @desc MovieTrackingPlaneTrack
     */
    public get active(): MovieTrackingPlaneTrack {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MovieTrackingPlaneTrack)
    }

    /**
     * Active plane track in this tracking data object
     * @desc MovieTrackingPlaneTrack
     */
    public set active(value: MovieTrackingPlaneTrack) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
