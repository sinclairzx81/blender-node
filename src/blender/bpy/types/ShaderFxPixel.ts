import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ShaderFx } from './ShaderFx'

/**
 * ShaderFxPixel
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderFxPixel.html
 */
export class ShaderFxPixel {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color used for lines
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 4)
    }

    /**
     * Pixel size
     * @desc int array of 2 items in [1, 32767], default (0, 0)
     */
    public get size(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.size`, 'number', 2)
    }

    /**
     * Display lines between pixels
     * @desc boolean, default False
     */
    public get use_lines(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_lines`)
    }

    /**
     * Color used for lines
     * @desc float array of 4 items in [0, 1], default (0.0, 0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Pixel size
     * @desc int array of 2 items in [1, 32767], default (0, 0)
     */
    public set size(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.size`, value)
    }

    /**
     * Display lines between pixels
     * @desc boolean, default False
     */
    public set use_lines(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_lines`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
