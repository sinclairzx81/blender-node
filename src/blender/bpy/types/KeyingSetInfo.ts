import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * KeyingSetInfo
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyingSetInfo.html
 */
export class KeyingSetInfo {

    constructor(public interop: BlenderInterop, public accessor: string) { }

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
     * Keying Set options to use when inserting keyframes
     * @desc enum set in {'INSERTKEY_NEEDED', 'INSERTKEY_VISUAL', 'INSERTKEY_XYZ_TO_RGB'}, default {'INSERTKEY_NEEDED'}
     */
    public get bl_options(): ('INSERTKEY_NEEDED' | 'INSERTKEY_VISUAL' | 'INSERTKEY_XYZ_TO_RGB')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.bl_options`)
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
     * Keying Set options to use when inserting keyframes
     * @desc enum set in {'INSERTKEY_NEEDED', 'INSERTKEY_VISUAL', 'INSERTKEY_XYZ_TO_RGB'}, default {'INSERTKEY_NEEDED'}
     */
    public set bl_options(value: ('INSERTKEY_NEEDED' | 'INSERTKEY_VISUAL' | 'INSERTKEY_XYZ_TO_RGB')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.bl_options`, value)
    }

    /**
     * Test if Keying Set can be used or not
     * @desc boolean
     */
    public poll(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.poll`, {})
    }

    /**
     * Call generate() on the structs which have properties to be keyframed
     * @desc void
     */
    public iterator(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.iterator`, {})
    }

    /**
     * Add Paths to the Keying Set to keyframe the properties of the given data
     * @desc void
     */
    public generate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.generate`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
