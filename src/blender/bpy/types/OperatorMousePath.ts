import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * OperatorMousePath
 * 
 * https://docs.blender.org/api/current/bpy.types.OperatorMousePath.html
 */
export class OperatorMousePath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Mouse location
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get loc(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.loc`, 'number', 2)
    }

    /**
     * Time of mouse location
     * @desc float in [-inf, inf], default 0.0
     */
    public get time(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time`)
    }

    /**
     * Mouse location
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set loc(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.loc`, value)
    }

    /**
     * Time of mouse location
     * @desc float in [-inf, inf], default 0.0
     */
    public set time(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.time`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
