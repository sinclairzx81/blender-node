import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'

/**
 * WeldModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.WeldModifier.html
 */
export class WeldModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * For a better performance, limits the number of elements found per vertex. (0 makes it infinite)
     * @desc int in [0, inf], default 0
     */
    public get max_interactions(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.max_interactions`)
    }

    /**
     * Limit below which to merge vertices
     * @desc float in [0, inf], default 0.0
     */
    public get merge_threshold(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.merge_threshold`)
    }

    /**
     * Vertex group name for selecting the affected areas
     * @desc string, default '', (never None)
     */
    public get vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_group`)
    }

    /**
     * For a better performance, limits the number of elements found per vertex. (0 makes it infinite)
     * @desc int in [0, inf], default 0
     */
    public set max_interactions(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.max_interactions`, value)
    }

    /**
     * Limit below which to merge vertices
     * @desc float in [0, inf], default 0.0
     */
    public set merge_threshold(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.merge_threshold`, value)
    }

    /**
     * Vertex group name for selecting the affected areas
     * @desc string, default '', (never None)
     */
    public set vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_group`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
