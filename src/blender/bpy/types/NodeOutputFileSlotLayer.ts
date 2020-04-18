import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * NodeOutputFileSlotLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeOutputFileSlotLayer.html
 */
export class NodeOutputFileSlotLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * OpenEXR layer name used for this slot
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * OpenEXR layer name used for this slot
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
