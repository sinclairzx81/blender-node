import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GPencilTriangle
 * 
 * https://docs.blender.org/api/current/bpy.types.GPencilTriangle.html
 */
export class GPencilTriangle {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * First triangle vertex texture coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get uv1(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv1`, 'number', 2)
    }

    /**
     * Second triangle vertex texture coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get uv2(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv2`, 'number', 2)
    }

    /**
     * Third triangle vertex texture coordinates
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0), (readonly)
     */
    public get uv3(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv3`, 'number', 2)
    }

    /**
     * First triangle vertex index
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get v1(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.v1`)
    }

    /**
     * Second triangle vertex index
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get v2(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.v2`)
    }

    /**
     * Third triangle vertex index
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get v3(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.v3`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
