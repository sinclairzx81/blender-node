import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SequenceCrop
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceCrop.html
 */
export class SequenceCrop {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Number of pixels to crop from the right side
     * @desc int in [-inf, inf], default 0
     */
    public get max_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_x`)
    }

    /**
     * Number of pixels to crop from the top
     * @desc int in [-inf, inf], default 0
     */
    public get max_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_y`)
    }

    /**
     * Number of pixels to crop from the left side
     * @desc int in [-inf, inf], default 0
     */
    public get min_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_x`)
    }

    /**
     * Number of pixels to crop from the bottom
     * @desc int in [-inf, inf], default 0
     */
    public get min_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.min_y`)
    }

    /**
     * Number of pixels to crop from the right side
     * @desc int in [-inf, inf], default 0
     */
    public set max_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_x`, value)
    }

    /**
     * Number of pixels to crop from the top
     * @desc int in [-inf, inf], default 0
     */
    public set max_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_y`, value)
    }

    /**
     * Number of pixels to crop from the left side
     * @desc int in [-inf, inf], default 0
     */
    public set min_x(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_x`, value)
    }

    /**
     * Number of pixels to crop from the bottom
     * @desc int in [-inf, inf], default 0
     */
    public set min_y(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.min_y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
