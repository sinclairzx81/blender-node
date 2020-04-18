import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieReconstructedCamera
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieReconstructedCamera.html
 */
export class MovieReconstructedCamera {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Average error of reconstruction
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get average_error(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.average_error`)
    }

    /**
     * Frame number marker is keyframed on
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get frame(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame`)
    }

    /**
     * Worldspace transformation matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0)), (readonly)
     */
    public get matrix(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix`, 'number', 4, 4)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
