import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshUVLoop
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshUVLoop.html
 */
export class MeshUVLoop {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc boolean, default False
     */
    public get pin_uv(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.pin_uv`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get select_edge(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select_edge`)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public get uv(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.uv`, 'number', 2)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set pin_uv(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.pin_uv`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set select_edge(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select_edge`, value)
    }

    /**
     * 
     * @desc float array of 2 items in [-inf, inf], default (0.0, 0.0)
     */
    public set uv(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.uv`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
