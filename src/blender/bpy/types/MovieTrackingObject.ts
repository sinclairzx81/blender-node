import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingObjectPlaneTracks } from './MovieTrackingObjectPlaneTracks'
import { MovieTrackingPlaneTrack } from './MovieTrackingPlaneTrack'
import { MovieTrackingReconstruction } from './MovieTrackingReconstruction'
import { MovieTrackingObjectTracks } from './MovieTrackingObjectTracks'
import { MovieTrackingTrack } from './MovieTrackingTrack'

/**
 * MovieTrackingObject
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingObject.html
 */
export class MovieTrackingObject {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Object is used for camera tracking
     * @desc boolean, default False, (readonly)
     */
    public get is_camera(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_camera`)
    }

    /**
     * Collection of plane tracks in this tracking data object
     * @desc MovieTrackingObjectPlaneTracks bpy_prop_collection of MovieTrackingPlaneTrack, (readonly)
     */
    public get plane_tracks(): BlenderCollection<MovieTrackingPlaneTrack> & Indexable<MovieTrackingPlaneTrack> & MovieTrackingObjectPlaneTracks {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.plane_tracks`, MovieTrackingObjectPlaneTracks, MovieTrackingPlaneTrack)
    }

    /**
     * 
     * @desc MovieTrackingReconstruction, (readonly)
     */
    public get reconstruction(): MovieTrackingReconstruction {
        return PythonInterop.getClass(this.interop, `${this.accessor}.reconstruction`, MovieTrackingReconstruction)
    }

    /**
     * Collection of tracks in this tracking data object
     * @desc MovieTrackingObjectTracks bpy_prop_collection of MovieTrackingTrack, (readonly)
     */
    public get tracks(): BlenderCollection<MovieTrackingTrack> & Indexable<MovieTrackingTrack> & MovieTrackingObjectTracks {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.tracks`, MovieTrackingObjectTracks, MovieTrackingTrack)
    }

    /**
     * First keyframe used for reconstruction initialization
     * @desc int in [-inf, inf], default 0
     */
    public get keyframe_a(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.keyframe_a`)
    }

    /**
     * Second keyframe used for reconstruction initialization
     * @desc int in [-inf, inf], default 0
     */
    public get keyframe_b(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.keyframe_b`)
    }

    /**
     * Unique name of object
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Scale of object solution in camera space
     * @desc float in [0.0001, 10000], default 1.0
     */
    public get scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.scale`)
    }

    /**
     * First keyframe used for reconstruction initialization
     * @desc int in [-inf, inf], default 0
     */
    public set keyframe_a(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.keyframe_a`, value)
    }

    /**
     * Second keyframe used for reconstruction initialization
     * @desc int in [-inf, inf], default 0
     */
    public set keyframe_b(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.keyframe_b`, value)
    }

    /**
     * Unique name of object
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Scale of object solution in camera space
     * @desc float in [0.0001, 10000], default 1.0
     */
    public set scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.scale`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
