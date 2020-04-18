import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * Timer
 * 
 * https://docs.blender.org/api/current/bpy.types.Timer.html
 */
export class Timer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Time since last step in seconds
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get time_delta(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_delta`)
    }

    /**
     * Time since last step in seconds
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get time_duration(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_duration`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get time_step(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.time_step`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
