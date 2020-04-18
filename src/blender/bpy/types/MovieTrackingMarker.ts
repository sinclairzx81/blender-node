import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieTrackingMarker
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingMarker.html
 */
export class MovieTrackingMarker {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Pattern area bounding box in normalized coordinates
     * @desc float multi-dimensional array of 2 * 2 items in [-inf, inf], default ((0.0, 0.0), (0.0, 0.0)), (readonly)
     */
    public get pattern_bound_box(): [[number, number], [number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.pattern_bound_box`, 'number', 2, 2)
    }

    /**
     * Marker position at frame in normalized coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get co(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 2)
    }

    /**
     * Frame number marker is keyframed on
     * @desc int in [-inf, inf], default 0
     */
    public get frame(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame`)
    }

    /**
     * Whether the position of the marker is keyframed or tracked
     * @desc boolean, default False
     */
    public get is_keyed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_keyed`)
    }

    /**
     * Is marker muted for current frame
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * Array of coordinates which represents pattern’s corners in normalized coordinates relative to marker position
     * @desc float multi-dimensional array of 4 * 2 items in [-inf, inf], default ((0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0))
     */
    public get pattern_corners(): [[number, number], [number, number], [number, number], [number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.pattern_corners`, 'number', 4, 2)
    }

    /**
     * Right-bottom corner of search area in normalized coordinates relative to marker position
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get search_max(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.search_max`, 'number', 2)
    }

    /**
     * Left-bottom corner of search area in normalized coordinates relative to marker position
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get search_min(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.search_min`, 'number', 2)
    }

    /**
     * Marker position at frame in normalized coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set co(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Frame number marker is keyframed on
     * @desc int in [-inf, inf], default 0
     */
    public set frame(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame`, value)
    }

    /**
     * Whether the position of the marker is keyframed or tracked
     * @desc boolean, default False
     */
    public set is_keyed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_keyed`, value)
    }

    /**
     * Is marker muted for current frame
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    /**
     * Array of coordinates which represents pattern’s corners in normalized coordinates relative to marker position
     * @desc float multi-dimensional array of 4 * 2 items in [-inf, inf], default ((0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0))
     */
    public set pattern_corners(value: [[number, number], [number, number], [number, number], [number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.pattern_corners`, value)
    }

    /**
     * Right-bottom corner of search area in normalized coordinates relative to marker position
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set search_max(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.search_max`, value)
    }

    /**
     * Left-bottom corner of search area in normalized coordinates relative to marker position
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set search_min(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.search_min`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
