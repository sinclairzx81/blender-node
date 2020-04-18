import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ImageFormatSettings } from './ImageFormatSettings'

/**
 * NodeOutputFileSlotFile
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeOutputFileSlotFile.html
 */
export class NodeOutputFileSlotFile {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ImageFormatSettings, (readonly)
     */
    public get format(): ImageFormatSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.format`, ImageFormatSettings)
    }

    /**
     * Subpath used for this slot
     * @desc string, default '', (never None)
     */
    public get path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get use_node_format(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_node_format`)
    }

    /**
     * Subpath used for this slot
     * @desc string, default '', (never None)
     */
    public set path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.path`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set use_node_format(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_node_format`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
