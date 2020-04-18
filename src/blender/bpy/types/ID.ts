import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Library } from './Library'
import { IDOverrideLibrary } from './IDOverrideLibrary'
import { ImagePreview } from './ImagePreview'
import { AnimData } from './AnimData'

/**
 * ID
 * 
 * https://docs.blender.org/api/current/bpy.types.ID.html
 */
export class ID {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Whether this ID is runtime-only, evaluated data-block, or actual data from .blend file
     * @desc boolean, default False, (readonly)
     */
    public get is_evaluated(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_evaluated`)
    }

    /**
     * Is this ID block linked indirectly
     * @desc boolean, default False, (readonly)
     */
    public get is_library_indirect(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_library_indirect`)
    }

    /**
     * Library file the data-block is linked from
     * @desc Library, (readonly)
     */
    public get library(): Library {
        return PythonInterop.getClass(this.interop, `${this.accessor}.library`, Library)
    }

    /**
     * Unique data-block ID name, including library one is any
     * @desc string, default '', (readonly, never None)
     */
    public get name_full(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name_full`)
    }

    /**
     * Actual data-block from .blend file (Main database) that generated that evaluated one
     * @desc ID, (readonly)
     */
    public get original(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.original`, ID)
    }

    /**
     * Library override data
     * @desc IDOverrideLibrary, (readonly)
     */
    public get override_library(): IDOverrideLibrary {
        return PythonInterop.getClass(this.interop, `${this.accessor}.override_library`, IDOverrideLibrary)
    }

    /**
     * Preview image and icon of this data-block (None if not supported for this type of data)
     * @desc ImagePreview, (readonly)
     */
    public get preview(): ImagePreview {
        return PythonInterop.getClass(this.interop, `${this.accessor}.preview`, ImagePreview)
    }

    /**
     * Number of times this data-block is referenced
     * @desc int in [0, inf], default 0, (readonly)
     */
    public get users(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.users`)
    }

    /**
     * Unique data-block ID name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Tools can use this to tag data for their own purposes (initial state is undefined)
     * @desc boolean, default False
     */
    public get tag(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.tag`)
    }

    /**
     * Save this data-block even if it has no users
     * @desc boolean, default False
     */
    public get use_fake_user(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_fake_user`)
    }

    /**
     * Unique data-block ID name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Tools can use this to tag data for their own purposes (initial state is undefined)
     * @desc boolean, default False
     */
    public set tag(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.tag`, value)
    }

    /**
     * Save this data-block even if it has no users
     * @desc boolean, default False
     */
    public set use_fake_user(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_fake_user`, value)
    }

    /**
     * Get corresponding evaluated ID from the given dependency graph
     * @desc ID
     */
    public evaluated_get(options: { depsgraph?: unknown }): ID {
        return PythonInterop.callClass(this.interop, `${this.accessor}.evaluated_get`, options, ID)
    }

    /**
     * Create a copy of this data-block (not supported for all data-blocks)
     * @desc ID
     */
    public copy(): ID {
        return PythonInterop.callClass(this.interop, `${this.accessor}.copy`, {}, ID)
    }

    /**
     * Create an overridden local copy of this linked data-block (not supported for all data-blocks)
     * @desc ID
     */
    public override_create(options: { remap_local_usages?: boolean }): ID {
        return PythonInterop.callClass(this.interop, `${this.accessor}.override_create`, options, ID)
    }

    /**
     * Clear the user count of a data-block so its not saved, on reload the data will be removed
     * @desc void
     */
    public user_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.user_clear`, {})
    }

    /**
     * Replace all usage in the .blend file of this ID by new given one
     * @desc void
     */
    public user_remap(options: { new_id?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.user_remap`, options)
    }

    /**
     * Make this datablock local, return local one (may be a copy of the original, in case it is also indirectly used)
     * @desc ID
     */
    public make_local(options: { clear_proxy?: boolean }): ID {
        return PythonInterop.callClass(this.interop, `${this.accessor}.make_local`, options, ID)
    }

    /**
     * Count the number of times that ID uses/references given one
     * @desc int in [0, inf]
     */
    public user_of_id(options: { id?: unknown }): number {
        return PythonInterop.callInteger(this.interop, `${this.accessor}.user_of_id`, options)
    }

    /**
     * Create animation data to this ID, note that not all ID types support this
     * @desc AnimData
     */
    public animation_data_create(): AnimData {
        return PythonInterop.callClass(this.interop, `${this.accessor}.animation_data_create`, {}, AnimData)
    }

    /**
     * Clear animation on this this ID
     * @desc void
     */
    public animation_data_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.animation_data_clear`, {})
    }

    /**
     * Tag the ID to update its display data, e.g. when calling bpy.types.Scene.update
     * @desc void
     */
    public update_tag(options: { refresh?: ('OBJECT' | 'DATA' | 'TIME')[] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update_tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
