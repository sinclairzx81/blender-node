import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MovieTrackingObject } from './MovieTrackingObject'

/**
 * MovieTrackingObjects
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingObjects.html
 */
export class MovieTrackingObjects {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active object in this tracking data object
     * @desc MovieTrackingObject
     */
    public get active(): MovieTrackingObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MovieTrackingObject)
    }

    /**
     * Active object in this tracking data object
     * @desc MovieTrackingObject
     */
    public set active(value: MovieTrackingObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add tracking object to this movie clip
     * @desc MovieTrackingObject
     */
    public new(options: { name?: string }): MovieTrackingObject {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MovieTrackingObject)
    }

    /**
     * Remove tracking object from this movie clip
     * @desc void
     */
    public remove(options: { object?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
