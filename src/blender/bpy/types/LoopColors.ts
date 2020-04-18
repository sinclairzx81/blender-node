import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshLoopColorLayer } from './MeshLoopColorLayer'

/**
 * LoopColors
 * 
 * https://docs.blender.org/api/current/bpy.types.LoopColors.html
 */
export class LoopColors {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active vertex color layer
     * @desc MeshLoopColorLayer
     */
    public get active(): MeshLoopColorLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MeshLoopColorLayer)
    }

    /**
     * Active vertex color index
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active vertex color layer
     * @desc MeshLoopColorLayer
     */
    public set active(value: MeshLoopColorLayer) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active vertex color index
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a vertex color layer to Mesh
     * @desc MeshLoopColorLayer
     */
    public new(options: { name?: string, do_init?: boolean }): MeshLoopColorLayer {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MeshLoopColorLayer)
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
