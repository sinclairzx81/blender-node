import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { WorkSpaceTool } from './WorkSpaceTool'

/**
 * wmTools
 * 
 * https://docs.blender.org/api/current/bpy.types.wmTools.html
 */
export class wmTools {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc WorkSpaceTool
     */
    public from_space_view3d_mode(options: { create?: boolean }): WorkSpaceTool {
        return PythonInterop.callClass(this.interop, `${this.accessor}.from_space_view3d_mode`, options, WorkSpaceTool)
    }

    /**
     * 
     * @desc WorkSpaceTool
     */
    public from_space_image_mode(options: { mode?: 'VIEW' | 'UV' | 'PAINT' | 'MASK', create?: boolean }): WorkSpaceTool {
        return PythonInterop.callClass(this.interop, `${this.accessor}.from_space_image_mode`, options, WorkSpaceTool)
    }

    /**
     * 
     * @desc WorkSpaceTool
     */
    public from_space_node(options: { create?: boolean }): WorkSpaceTool {
        return PythonInterop.callClass(this.interop, `${this.accessor}.from_space_node`, options, WorkSpaceTool)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
