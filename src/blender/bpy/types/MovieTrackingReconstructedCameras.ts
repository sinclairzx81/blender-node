import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieReconstructedCamera } from './MovieReconstructedCamera'

/**
 * MovieTrackingReconstructedCameras
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingReconstructedCameras.html
 */
export class MovieTrackingReconstructedCameras {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Find a reconstructed camera for a give frame number
     * @desc MovieReconstructedCamera
     */
    public find_frame(options: { frame?: number }): MovieReconstructedCamera {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_frame`, options, MovieReconstructedCamera)
    }

    /**
     * Return interpolated camera matrix for a given frame
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf]
     */
    public matrix_from_frame(options: { frame?: number }): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.callMultiDimensionalArray(this.interop, `${this.accessor}.matrix_from_frame`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
