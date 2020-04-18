import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'

/**
 * CompositorNodeCryptomatte
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeCryptomatte.html
 */
export class CompositorNodeCryptomatte {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add object or material to matte, by picking a color from the Pick output
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get add(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.add`, 'number', 3)
    }

    /**
     * List of object and material crypto IDs to include in matte
     * @desc string, default '', (never None)
     */
    public get matte_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.matte_id`)
    }

    /**
     * Remove object or material from matte, by picking a color from the Pick output
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get remove(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.remove`, 'number', 3)
    }

    /**
     * Add object or material to matte, by picking a color from the Pick output
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set add(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.add`, value)
    }

    /**
     * List of object and material crypto IDs to include in matte
     * @desc string, default '', (never None)
     */
    public set matte_id(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.matte_id`, value)
    }

    /**
     * Remove object or material from matte, by picking a color from the Pick output
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set remove(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.remove`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
