import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingReconstructedCameras } from './MovieTrackingReconstructedCameras'
import { MovieReconstructedCamera } from './MovieReconstructedCamera'

/**
 * MovieTrackingReconstruction
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingReconstruction.html
 */
export class MovieTrackingReconstruction {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Average error of reconstruction
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get average_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.average_error`)
    }

    /**
     * Collection of solved cameras
     * @desc MovieTrackingReconstructedCameras bpy_prop_collection of MovieReconstructedCamera, (readonly)
     */
    public get cameras(): BlenderCollection<MovieReconstructedCamera> & Indexable<MovieReconstructedCamera> & MovieTrackingReconstructedCameras {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.cameras`, MovieTrackingReconstructedCameras, MovieReconstructedCamera)
    }

    /**
     * Is tracking data contains valid reconstruction information
     * @desc boolean, default False, (readonly)
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
