import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingPlaneMarkers } from './MovieTrackingPlaneMarkers'
import { MovieTrackingPlaneMarker } from './MovieTrackingPlaneMarker'
import { Image } from './Image'

/**
 * MovieTrackingPlaneTrack
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingPlaneTrack.html
 */
export class MovieTrackingPlaneTrack {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Collection of markers in track
     * @desc MovieTrackingPlaneMarkers bpy_prop_collection of MovieTrackingPlaneMarker, (readonly)
     */
    public get markers(): BlenderCollection<MovieTrackingPlaneMarker> & Indexable<MovieTrackingPlaneMarker> & MovieTrackingPlaneMarkers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.markers`, MovieTrackingPlaneMarkers, MovieTrackingPlaneMarker)
    }

    /**
     * Image displayed in the track during editing in clip editor
     * @desc Image
     */
    public get image(): Image {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image`, Image)
    }

    /**
     * Opacity of the image
     * @desc float in [0, 1], default 0.0
     */
    public get image_opacity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.image_opacity`)
    }

    /**
     * Unique name of track
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Plane track is selected
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Automatic keyframe insertion when moving plane corners
     * @desc boolean, default False
     */
    public get use_auto_keying(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_keying`)
    }

    /**
     * Image displayed in the track during editing in clip editor
     * @desc Image
     */
    public set image(value: Image) {
        PythonInterop.setClass(this.interop, `${this.accessor}.image`, value)
    }

    /**
     * Opacity of the image
     * @desc float in [0, 1], default 0.0
     */
    public set image_opacity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.image_opacity`, value)
    }

    /**
     * Unique name of track
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Plane track is selected
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Automatic keyframe insertion when moving plane corners
     * @desc boolean, default False
     */
    public set use_auto_keying(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_keying`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
