import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { NodeSocketInterface } from './NodeSocketInterface'
import { NodeSocketInterfaceStandard } from './NodeSocketInterfaceStandard'

/**
 * NodeSocketInterfaceString
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterfaceString.html
 */
export class NodeSocketInterfaceString {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Input value used for unconnected socket
     * @desc string, default '', (never None)
     */
    public get default_value(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.default_value`)
    }

    /**
     * Input value used for unconnected socket
     * @desc string, default '', (never None)
     */
    public set default_value(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.default_value`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
