import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TextBox
 * 
 * https://docs.blender.org/api/current/bpy.types.TextBox.html
 */
export class TextBox {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.height`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get width(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.width`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.x`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.y`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set width(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.width`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.x`, value)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.y`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
