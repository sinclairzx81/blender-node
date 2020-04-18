import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ColorRampElement
 * 
 * https://docs.blender.org/api/current/bpy.types.ColorRampElement.html
 */
export class ColorRampElement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Set alpha of selected color stop
     * @desc float in [0, inf], default 0.0
     */
    public get alpha(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.alpha`)
    }

    /**
     * Set color of selected color stop
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 4)
    }

    /**
     * Set position of selected color stop
     * @desc float in [0, 1], default 0.0
     */
    public get position(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.position`)
    }

    /**
     * Set alpha of selected color stop
     * @desc float in [0, inf], default 0.0
     */
    public set alpha(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.alpha`, value)
    }

    /**
     * Set color of selected color stop
     * @desc float array of 4 items in [0, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Set position of selected color stop
     * @desc float in [0, 1], default 0.0
     */
    public set position(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.position`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
