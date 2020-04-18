import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocketInterface } from './NodeSocketInterface'

/**
 * NodeSocketInterfaceStandard
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterfaceStandard.html
 */
export class NodeSocketInterfaceStandard {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Data type
     * @desc enum in ['CUSTOM', 'VALUE', 'INT', 'BOOLEAN', 'VECTOR', 'STRING', 'RGBA', 'SHADER'], default 'VALUE', (readonly)
     */
    public get type(): 'CUSTOM' | 'VALUE' | 'INT' | 'BOOLEAN' | 'VECTOR' | 'STRING' | 'RGBA' | 'SHADER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Draw template settings
     * @desc void
     */
    public draw(options: { layout?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, options)
    }

    /**
     * Color of the socket icon
     * @desc float array of 4 items in [0, 1]
     */
    public draw_color(): [number, number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.draw_color`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
