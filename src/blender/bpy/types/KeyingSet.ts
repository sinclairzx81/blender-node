import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { KeyingSetPaths } from './KeyingSetPaths'
import { KeyingSetPath } from './KeyingSetPath'
import { KeyingSetInfo } from './KeyingSetInfo'

/**
 * KeyingSet
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyingSet.html
 */
export class KeyingSet {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Keying Set defines specific paths/settings to be keyframed (i.e. is not reliant on context info)
     * @desc boolean, default False, (readonly)
     */
    public get is_path_absolute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_path_absolute`)
    }

    /**
     * Keying Set Paths to define settings that get keyframed together
     * @desc KeyingSetPaths bpy_prop_collection of KeyingSetPath, (readonly)
     */
    public get paths(): BlenderCollection<KeyingSetPath> & Indexable<KeyingSetPath> & KeyingSetPaths {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.paths`, KeyingSetPaths, KeyingSetPath)
    }

    /**
     * Callback function defines for built-in Keying Sets
     * @desc KeyingSetInfo, (readonly)
     */
    public get type_info(): KeyingSetInfo {
        return PythonInterop.getClass(this.interop, `${this.accessor}.type_info`, KeyingSetInfo)
    }

    /**
     * A short description of the keying set
     * @desc string, default '', (never None)
     */
    public get bl_description(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_description`)
    }

    /**
     * If this is set, the Keying Set gets a custom ID, otherwise it takes the name of the class used to define the Keying Set (for example, if the class name is “BUILTIN_KSI_location”, and bl_idname is not set by the script, then bl_idname = “BUILTIN_KSI_location”)
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_label(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_label`)
    }

    /**
     * Only insert keyframes where they’re needed in the relevant F-Curves
     * @desc boolean, default False
     */
    public get use_insertkey_needed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_needed`)
    }

    /**
     * Override default setting to only insert keyframes where they’re needed in the relevant F-Curves
     * @desc boolean, default False
     */
    public get use_insertkey_override_needed(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_override_needed`)
    }

    /**
     * Override default setting to insert keyframes based on ‘visual transforms’
     * @desc boolean, default False
     */
    public get use_insertkey_override_visual(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_override_visual`)
    }

    /**
     * Override default setting to set color for newly added transformation F-Curves (Location, Rotation, Scale) to be based on the transform axis
     * @desc boolean, default False
     */
    public get use_insertkey_override_xyz_to_rgb(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_override_xyz_to_rgb`)
    }

    /**
     * Insert keyframes based on ‘visual transforms’
     * @desc boolean, default False
     */
    public get use_insertkey_visual(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_visual`)
    }

    /**
     * Color for newly added transformation F-Curves (Location, Rotation, Scale) is based on the transform axis
     * @desc boolean, default False
     */
    public get use_insertkey_xyz_to_rgb(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_insertkey_xyz_to_rgb`)
    }

    /**
     * A short description of the keying set
     * @desc string, default '', (never None)
     */
    public set bl_description(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_description`, value)
    }

    /**
     * If this is set, the Keying Set gets a custom ID, otherwise it takes the name of the class used to define the Keying Set (for example, if the class name is “BUILTIN_KSI_location”, and bl_idname is not set by the script, then bl_idname = “BUILTIN_KSI_location”)
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_label(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_label`, value)
    }

    /**
     * Only insert keyframes where they’re needed in the relevant F-Curves
     * @desc boolean, default False
     */
    public set use_insertkey_needed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_needed`, value)
    }

    /**
     * Override default setting to only insert keyframes where they’re needed in the relevant F-Curves
     * @desc boolean, default False
     */
    public set use_insertkey_override_needed(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_override_needed`, value)
    }

    /**
     * Override default setting to insert keyframes based on ‘visual transforms’
     * @desc boolean, default False
     */
    public set use_insertkey_override_visual(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_override_visual`, value)
    }

    /**
     * Override default setting to set color for newly added transformation F-Curves (Location, Rotation, Scale) to be based on the transform axis
     * @desc boolean, default False
     */
    public set use_insertkey_override_xyz_to_rgb(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_override_xyz_to_rgb`, value)
    }

    /**
     * Insert keyframes based on ‘visual transforms’
     * @desc boolean, default False
     */
    public set use_insertkey_visual(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_visual`, value)
    }

    /**
     * Color for newly added transformation F-Curves (Location, Rotation, Scale) is based on the transform axis
     * @desc boolean, default False
     */
    public set use_insertkey_xyz_to_rgb(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_insertkey_xyz_to_rgb`, value)
    }

    /**
     * Refresh Keying Set to ensure that it is valid for the current context (call before each use of one)
     * @desc void
     */
    public refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.refresh`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
