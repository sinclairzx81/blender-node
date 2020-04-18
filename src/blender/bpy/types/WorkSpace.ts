import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { wmOwnerIDs } from './wmOwnerIDs'
import { wmOwnerID } from './wmOwnerID'
import { Screen } from './Screen'
import { wmTools } from './wmTools'
import { WorkSpaceTool } from './WorkSpaceTool'

/**
 * WorkSpace
 * 
 * https://docs.blender.org/api/current/bpy.types.WorkSpace.html
 */
export class WorkSpace {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc wmOwnerIDs bpy_prop_collection of wmOwnerID, (readonly)
     */
    public get owner_ids(): BlenderCollection<wmOwnerID> & Indexable<wmOwnerID> & wmOwnerIDs {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.owner_ids`, wmOwnerIDs, wmOwnerID)
    }

    /**
     * Screen layouts of a workspace
     * @desc bpy_prop_collection of Screen, (readonly)
     */
    public get screens(): BlenderCollection<Screen> & Indexable<Screen> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.screens`, Screen)
    }

    /**
     * 
     * @desc wmTools bpy_prop_collection of WorkSpaceTool, (readonly)
     */
    public get tools(): BlenderCollection<WorkSpaceTool> & Indexable<WorkSpaceTool> & wmTools {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.tools`, wmTools, WorkSpaceTool)
    }

    /**
     * Switch to this object mode when activating the workspace
     * @desc enum in ['OBJECT', 'EDIT', 'POSE', 'SCULPT', 'VERTEX_PAINT', 'WEIGHT_PAINT', 'TEXTURE_PAINT', 'PARTICLE_EDIT', 'EDIT_GPENCIL', 'SCULPT_GPENCIL', 'PAINT_GPENCIL', 'WEIGHT_GPENCIL'], default 'OBJECT'
     */
    public get object_mode(): 'OBJECT' | 'EDIT' | 'POSE' | 'SCULPT' | 'VERTEX_PAINT' | 'WEIGHT_PAINT' | 'TEXTURE_PAINT' | 'PARTICLE_EDIT' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'PAINT_GPENCIL' | 'WEIGHT_GPENCIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.object_mode`)
    }

    /**
     * Filter the UI by tags
     * @desc boolean, default False
     */
    public get use_filter_by_owner(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_filter_by_owner`)
    }

    /**
     * Switch to this object mode when activating the workspace
     * @desc enum in ['OBJECT', 'EDIT', 'POSE', 'SCULPT', 'VERTEX_PAINT', 'WEIGHT_PAINT', 'TEXTURE_PAINT', 'PARTICLE_EDIT', 'EDIT_GPENCIL', 'SCULPT_GPENCIL', 'PAINT_GPENCIL', 'WEIGHT_GPENCIL'], default 'OBJECT'
     */
    public set object_mode(value: 'OBJECT' | 'EDIT' | 'POSE' | 'SCULPT' | 'VERTEX_PAINT' | 'WEIGHT_PAINT' | 'TEXTURE_PAINT' | 'PARTICLE_EDIT' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'PAINT_GPENCIL' | 'WEIGHT_GPENCIL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.object_mode`, value)
    }

    /**
     * Filter the UI by tags
     * @desc boolean, default False
     */
    public set use_filter_by_owner(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_filter_by_owner`, value)
    }

    /**
     * Set the status text or None to clear,When text is a function, this will be called with the (header, context) arguments.
     * @desc void
     */
    public status_text_set(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.status_text_set`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
