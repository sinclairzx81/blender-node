import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ThemeGradientColors
 * 
 * https://docs.blender.org/api/current/bpy.types.ThemeGradientColors.html
 */
export class ThemeGradientColors {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get gradient(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.gradient`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public get high_gradient(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.high_gradient`, 'number', 3)
    }

    /**
     * Do a gradient for the background of the viewport working area
     * @desc boolean, default False
     */
    public get show_grad(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_grad`)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set gradient(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.gradient`, value)
    }

    /**
     * 
     * @desc float array of 3 items in [0, 1], default (0.0, 0.0, 0.0)
     */
    public set high_gradient(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.high_gradient`, value)
    }

    /**
     * Do a gradient for the background of the viewport working area
     * @desc boolean, default False
     */
    public set show_grad(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_grad`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
