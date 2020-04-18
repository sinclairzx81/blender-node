import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieTrackingPlaneMarker
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingPlaneMarker.html
 */
export class MovieTrackingPlaneMarker {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Array of coordinates which represents UI rectangle corners in frame normalized coordinates
     * @desc float multi-dimensional array of 4 * 2 items in [-inf, inf], default ((0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0))
     */
    public get corners(): [[number, number], [number, number], [number, number], [number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.corners`, 'number', 4, 2)
    }

    /**
     * Frame number marker is keyframed on
     * @desc int in [-inf, inf], default 0
     */
    public get frame(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame`)
    }

    /**
     * Is marker muted for current frame
     * @desc boolean, default False
     */
    public get mute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.mute`)
    }

    /**
     * Array of coordinates which represents UI rectangle corners in frame normalized coordinates
     * @desc float multi-dimensional array of 4 * 2 items in [-inf, inf], default ((0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0))
     */
    public set corners(value: [[number, number], [number, number], [number, number], [number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.corners`, value)
    }

    /**
     * Frame number marker is keyframed on
     * @desc int in [-inf, inf], default 0
     */
    public set frame(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame`, value)
    }

    /**
     * Is marker muted for current frame
     * @desc boolean, default False
     */
    public set mute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.mute`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
