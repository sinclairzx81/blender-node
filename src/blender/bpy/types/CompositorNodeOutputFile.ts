import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { CompositorNodeOutputFileFileSlots } from './CompositorNodeOutputFileFileSlots'
import { NodeOutputFileSlotFile } from './NodeOutputFileSlotFile'
import { ImageFormatSettings } from './ImageFormatSettings'
import { CompositorNodeOutputFileLayerSlots } from './CompositorNodeOutputFileLayerSlots'
import { NodeOutputFileSlotLayer } from './NodeOutputFileSlotLayer'

/**
 * CompositorNodeOutputFile
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeOutputFile.html
 */
export class CompositorNodeOutputFile {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CompositorNodeOutputFileFileSlots bpy_prop_collection of NodeOutputFileSlotFile, (readonly)
     */
    public get file_slots(): BlenderCollection<NodeOutputFileSlotFile> & Indexable<NodeOutputFileSlotFile> & CompositorNodeOutputFileFileSlots {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.file_slots`, CompositorNodeOutputFileFileSlots, NodeOutputFileSlotFile)
    }

    /**
     * 
     * @desc ImageFormatSettings, (readonly)
     */
    public get format(): ImageFormatSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.format`, ImageFormatSettings)
    }

    /**
     * 
     * @desc CompositorNodeOutputFileLayerSlots bpy_prop_collection of NodeOutputFileSlotLayer, (readonly)
     */
    public get layer_slots(): BlenderCollection<NodeOutputFileSlotLayer> & Indexable<NodeOutputFileSlotLayer> & CompositorNodeOutputFileLayerSlots {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.layer_slots`, CompositorNodeOutputFileLayerSlots, NodeOutputFileSlotLayer)
    }

    /**
     * Active input index in details view list
     * @desc int in [-inf, inf], default 0
     */
    public get active_input_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_input_index`)
    }

    /**
     * Base output path for the image
     * @desc string, default '', (never None)
     */
    public get base_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.base_path`)
    }

    /**
     * Active input index in details view list
     * @desc int in [-inf, inf], default 0
     */
    public set active_input_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_input_index`, value)
    }

    /**
     * Base output path for the image
     * @desc string, default '', (never None)
     */
    public set base_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.base_path`, value)
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
