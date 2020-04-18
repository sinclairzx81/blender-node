import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshUVLoopLayer } from './MeshUVLoopLayer'

/**
 * UVLoopLayers
 * 
 * https://docs.blender.org/api/current/bpy.types.UVLoopLayers.html
 */
export class UVLoopLayers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active UV loop layer
     * @desc MeshUVLoopLayer
     */
    public get active(): MeshUVLoopLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MeshUVLoopLayer)
    }

    /**
     * Active UV loop layer index
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active UV loop layer
     * @desc MeshUVLoopLayer
     */
    public set active(value: MeshUVLoopLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active UV loop layer index
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a UV map layer to Mesh
     * @desc MeshUVLoopLayer
     */
    public new(options: { name?: string, do_init?: boolean }): MeshUVLoopLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshUVLoopLayer)
    }

    /**
     * Remove a vertex color layer
     * @desc void
     */
    public remove(options: { layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
