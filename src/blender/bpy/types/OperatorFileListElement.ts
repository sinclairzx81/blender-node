import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { PropertyGroup } from './PropertyGroup'

/**
 * OperatorFileListElement
 * 
 * https://docs.blender.org/api/current/bpy.types.OperatorFileListElement.html
 */
export class OperatorFileListElement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Name of a file or directory within a file list
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Name of a file or directory within a file list
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
