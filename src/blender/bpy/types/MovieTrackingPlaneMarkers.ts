import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingPlaneMarker } from './MovieTrackingPlaneMarker'

/**
 * MovieTrackingPlaneMarkers
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingPlaneMarkers.html
 */
export class MovieTrackingPlaneMarkers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Get plane marker for specified frame
     * @desc MovieTrackingPlaneMarker
     */
    public find_frame(options: { frame?: number, exact?: boolean }): MovieTrackingPlaneMarker {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_frame`, options, MovieTrackingPlaneMarker)
    }

    /**
     * Insert a new plane marker at the specified frame
     * @desc MovieTrackingPlaneMarker
     */
    public insert_frame(options: { frame?: number }): MovieTrackingPlaneMarker {
        return PythonInterop.callClass(this.interop, `${this.accessor}.insert_frame`, options, MovieTrackingPlaneMarker)
    }

    /**
     * Delete plane marker at specified frame
     * @desc void
     */
    public delete_frame(options: { frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_frame`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
