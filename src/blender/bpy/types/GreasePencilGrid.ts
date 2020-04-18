import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GreasePencilGrid
 * 
 * https://docs.blender.org/api/current/bpy.types.GreasePencilGrid.html
 */
export class GreasePencilGrid {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color for grid lines
     * @desc float array of 3 items in [0, 1], default (0.5, 0.5, 0.5)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Number of subdivisions in each side of symmetry line
     * @desc int in [0, 32767], default 4
     */
    public get lines(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.lines`)
    }

    /**
     * Offset of the canvas
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.offset`, 'number', 2)
    }

    /**
     * Grid scale
     * @desc float array of 2 items in [0.01, inf], default (1.0, 1.0)
     */
    public get scale(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 2)
    }

    /**
     * Color for grid lines
     * @desc float array of 3 items in [0, 1], default (0.5, 0.5, 0.5)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Number of subdivisions in each side of symmetry line
     * @desc int in [0, 32767], default 4
     */
    public set lines(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.lines`, value)
    }

    /**
     * Offset of the canvas
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.offset`, value)
    }

    /**
     * Grid scale
     * @desc float array of 2 items in [0.01, inf], default (1.0, 1.0)
     */
    public set scale(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
