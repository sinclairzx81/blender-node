import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { DriverVariable } from './DriverVariable'

/**
 * ChannelDriverVariables
 * 
 * https://docs.blender.org/api/current/bpy.types.ChannelDriverVariables.html
 */
export class ChannelDriverVariables {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new variable for the driver
     * @desc DriverVariable
     */
    public new(): DriverVariable {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, {}, DriverVariable)
    }

    /**
     * Remove an existing variable from the driver
     * @desc void
     */
    public remove(options: { variable?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
