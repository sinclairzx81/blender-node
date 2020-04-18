import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingTrack } from './MovieTrackingTrack'

/**
 * MovieTrackingObjectTracks
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingObjectTracks.html
 */
export class MovieTrackingObjectTracks {

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

    /**
     * create new motion track in this movie clip
     * @desc MovieTrackingTrack
     */
    public new(options: { name?: string, frame?: number }): MovieTrackingTrack {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MovieTrackingTrack)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
