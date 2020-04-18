import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingCamera } from './MovieTrackingCamera'
import { MovieTrackingDopesheet } from './MovieTrackingDopesheet'
import { MovieTrackingObjects } from './MovieTrackingObjects'
import { MovieTrackingObject } from './MovieTrackingObject'
import { MovieTrackingPlaneTracks } from './MovieTrackingPlaneTracks'
import { MovieTrackingPlaneTrack } from './MovieTrackingPlaneTrack'
import { MovieTrackingReconstruction } from './MovieTrackingReconstruction'
import { MovieTrackingSettings } from './MovieTrackingSettings'
import { MovieTrackingStabilization } from './MovieTrackingStabilization'
import { MovieTrackingTracks } from './MovieTrackingTracks'
import { MovieTrackingTrack } from './MovieTrackingTrack'

/**
 * MovieTracking
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTracking.html
 */
export class MovieTracking {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MovieTrackingCamera, (readonly)
     */
    public get camera(): MovieTrackingCamera {
        return PythonInterop.getClass(this.interop, `${this.accessor}.camera`, MovieTrackingCamera)
    }

    /**
     * 
     * @desc MovieTrackingDopesheet, (readonly)
     */
    public get dopesheet(): MovieTrackingDopesheet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.dopesheet`, MovieTrackingDopesheet)
    }

    /**
     * Collection of objects in this tracking data object
     * @desc MovieTrackingObjects bpy_prop_collection of MovieTrackingObject, (readonly)
     */
    public get objects(): BlenderCollection<MovieTrackingObject> & Indexable<MovieTrackingObject> & MovieTrackingObjects {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.objects`, MovieTrackingObjects, MovieTrackingObject)
    }

    /**
     * Collection of plane tracks in this tracking data object
     * @desc MovieTrackingPlaneTracks bpy_prop_collection of MovieTrackingPlaneTrack, (readonly)
     */
    public get plane_tracks(): BlenderCollection<MovieTrackingPlaneTrack> & Indexable<MovieTrackingPlaneTrack> & MovieTrackingPlaneTracks {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.plane_tracks`, MovieTrackingPlaneTracks, MovieTrackingPlaneTrack)
    }

    /**
     * 
     * @desc MovieTrackingReconstruction, (readonly)
     */
    public get reconstruction(): MovieTrackingReconstruction {
        return PythonInterop.getClass(this.interop, `${this.accessor}.reconstruction`, MovieTrackingReconstruction)
    }

    /**
     * 
     * @desc MovieTrackingSettings, (readonly)
     */
    public get settings(): MovieTrackingSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.settings`, MovieTrackingSettings)
    }

    /**
     * 
     * @desc MovieTrackingStabilization, (readonly)
     */
    public get stabilization(): MovieTrackingStabilization {
        return PythonInterop.getClass(this.interop, `${this.accessor}.stabilization`, MovieTrackingStabilization)
    }

    /**
     * Collection of tracks in this tracking data object
     * @desc MovieTrackingTracks bpy_prop_collection of MovieTrackingTrack, (readonly)
     */
    public get tracks(): BlenderCollection<MovieTrackingTrack> & Indexable<MovieTrackingTrack> & MovieTrackingTracks {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.tracks`, MovieTrackingTracks, MovieTrackingTrack)
    }

    /**
     * Index of active object
     * @desc int in [-inf, inf], default 0
     */
    public get active_object_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_object_index`)
    }

    /**
     * Index of active object
     * @desc int in [-inf, inf], default 0
     */
    public set active_object_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_object_index`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
