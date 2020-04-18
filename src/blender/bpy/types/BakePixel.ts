import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BakePixel
 * 
 * https://docs.blender.org/api/current/bpy.types.BakePixel.html
 */
export class BakePixel {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get du_dx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.du_dx`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get du_dy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.du_dy`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get dv_dx(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dv_dx`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0, (readonly)
     */
    public get dv_dy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.dv_dy`)
    }

    /**
     * 
     * @desc BakePixel, (readonly)
     */
    public get next(): BakePixel {
        return PythonInterop.getClass(this.interop, `${this.accessor}.next`, BakePixel)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get object_id(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.object_id`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get primitive_id(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.primitive_id`)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get uv(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv`, 'number', 2)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
