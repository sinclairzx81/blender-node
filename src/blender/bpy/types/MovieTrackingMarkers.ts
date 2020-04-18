import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingMarker } from './MovieTrackingMarker'

/**
 * MovieTrackingMarkers
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingMarkers.html
 */
export class MovieTrackingMarkers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Get marker for specified frame
     * @desc MovieTrackingMarker
     */
    public find_frame(options: { frame?: number, exact?: boolean }): MovieTrackingMarker {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_frame`, options, MovieTrackingMarker)
    }

    /**
     * Insert a new marker at the specified frame
     * @desc MovieTrackingMarker
     */
    public insert_frame(options: { frame?: number, co?: [number, number] }): MovieTrackingMarker {
        return PythonInterop.callClass(this.interop, `${this.accessor}.insert_frame`, options, MovieTrackingMarker)
    }

    /**
     * Delete marker at specified frame
     * @desc void
     */
    public delete_frame(options: { frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_frame`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
