import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * NodeInternalSocketTemplate
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeInternalSocketTemplate.html
 */
export class NodeInternalSocketTemplate {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Identifier of the socket
     * @desc string, default '', (readonly, never None)
     */
    public get identifier(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.identifier`)
    }

    /**
     * Name of the socket
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Data type of the socket
     * @desc enum in ['CUSTOM', 'VALUE', 'INT', 'BOOLEAN', 'VECTOR', 'STRING', 'RGBA', 'SHADER'], default 'VALUE', (readonly)
     */
    public get type(): 'CUSTOM' | 'VALUE' | 'INT' | 'BOOLEAN' | 'VECTOR' | 'STRING' | 'RGBA' | 'SHADER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
