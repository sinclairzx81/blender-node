import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * DisplaySafeAreas
 * 
 * https://docs.blender.org/api/current/bpy.types.DisplaySafeAreas.html
 */
export class DisplaySafeAreas {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Safe area for general elements
     * @desc float array of 2 items in [0, 1], default (0.035, 0.035)
     */
    public get action(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.action`, 'number', 2)
    }

    /**
     * Safe area for general elements in a different aspect ratio
     * @desc float array of 2 items in [0, 1], default (0.15, 0.05)
     */
    public get action_center(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.action_center`, 'number', 2)
    }

    /**
     * Safe area for text and graphics
     * @desc float array of 2 items in [0, 1], default (0.1, 0.05)
     */
    public get title(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.title`, 'number', 2)
    }

    /**
     * Safe area for text and graphics in a different aspect ratio
     * @desc float array of 2 items in [0, 1], default (0.175, 0.05)
     */
    public get title_center(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.title_center`, 'number', 2)
    }

    /**
     * Safe area for general elements
     * @desc float array of 2 items in [0, 1], default (0.035, 0.035)
     */
    public set action(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.action`, value)
    }

    /**
     * Safe area for general elements in a different aspect ratio
     * @desc float array of 2 items in [0, 1], default (0.15, 0.05)
     */
    public set action_center(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.action_center`, value)
    }

    /**
     * Safe area for text and graphics
     * @desc float array of 2 items in [0, 1], default (0.1, 0.05)
     */
    public set title(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.title`, value)
    }

    /**
     * Safe area for text and graphics in a different aspect ratio
     * @desc float array of 2 items in [0, 1], default (0.175, 0.05)
     */
    public set title_center(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.title_center`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
