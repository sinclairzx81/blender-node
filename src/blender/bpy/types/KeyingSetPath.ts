import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ID } from './ID'

/**
 * KeyingSetPath
 * 
 * https://docs.blender.org/api/current/bpy.types.KeyingSetPath.html
 */
export class KeyingSetPath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Index to the specific setting if applicable
     * @desc int in [-inf, inf], default 0
     */
    public get array_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.array_index`)
    }

    /**
     * Path to property setting
     * @desc string, default '', (never None)
     */
    public get data_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.data_path`)
    }

    /**
     * Name of Action Group to assign setting(s) for this path to
     * @desc string, default '', (never None)
     */
    public get group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.group`)
    }

    /**
     * Method used to define which Group-name to use
     * @desc enum in ['NAMED', 'NONE', 'KEYINGSET'], default 'NAMED'
     */
    public get group_method(): 'NAMED' | 'NONE' | 'KEYINGSET' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.group_method`)
    }

    /**
     * ID-Block that keyframes for Keying Set should be added to (for Absolute Keying Sets only)
     * @desc ID
     */
    public get id(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.id`, ID)
    }

    /**
     * Type of ID-block that can be used
     * @desc enum in ['ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'FONT', 'GREASEPENCIL', 'COLLECTION', 'IMAGE', 'KEY', 'LIGHT', 'LIBRARY', 'LINESTYLE', 'LATTICE', 'MASK', 'MATERIAL', 'META', 'MESH', 'MOVIECLIP', 'NODETREE', 'OBJECT', 'PAINTCURVE', 'PALETTE', 'PARTICLE', 'LIGHT_PROBE', 'SCENE', 'SOUND', 'SPEAKER', 'TEXT', 'TEXTURE', 'WINDOWMANAGER', 'WORLD', 'WORKSPACE'], default 'OBJECT'
     */
    public get id_type(): 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.id_type`)
    }

    /**
     * When an ‘array/vector’ type is chosen (Location, Rotation, Color, etc.), entire array is to be used
     * @desc boolean, default False
     */
    public get use_entire_array(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_entire_array`)
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
     * Index to the specific setting if applicable
     * @desc int in [-inf, inf], default 0
     */
    public set array_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.array_index`, value)
    }

    /**
     * Path to property setting
     * @desc string, default '', (never None)
     */
    public set data_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.data_path`, value)
    }

    /**
     * Name of Action Group to assign setting(s) for this path to
     * @desc string, default '', (never None)
     */
    public set group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.group`, value)
    }

    /**
     * Method used to define which Group-name to use
     * @desc enum in ['NAMED', 'NONE', 'KEYINGSET'], default 'NAMED'
     */
    public set group_method(value: 'NAMED' | 'NONE' | 'KEYINGSET') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.group_method`, value)
    }

    /**
     * ID-Block that keyframes for Keying Set should be added to (for Absolute Keying Sets only)
     * @desc ID
     */
    public set id(value: ID) {
        PythonInterop.setClass(this.interop, `${this.accessor}.id`, value)
    }

    /**
     * Type of ID-block that can be used
     * @desc enum in ['ACTION', 'ARMATURE', 'BRUSH', 'CAMERA', 'CACHEFILE', 'CURVE', 'FONT', 'GREASEPENCIL', 'COLLECTION', 'IMAGE', 'KEY', 'LIGHT', 'LIBRARY', 'LINESTYLE', 'LATTICE', 'MASK', 'MATERIAL', 'META', 'MESH', 'MOVIECLIP', 'NODETREE', 'OBJECT', 'PAINTCURVE', 'PALETTE', 'PARTICLE', 'LIGHT_PROBE', 'SCENE', 'SOUND', 'SPEAKER', 'TEXT', 'TEXTURE', 'WINDOWMANAGER', 'WORLD', 'WORKSPACE'], default 'OBJECT'
     */
    public set id_type(value: 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.id_type`, value)
    }

    /**
     * When an ‘array/vector’ type is chosen (Location, Rotation, Color, etc.), entire array is to be used
     * @desc boolean, default False
     */
    public set use_entire_array(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_entire_array`, value)
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

    [util.inspect.custom]() {
        return this.accessor
    }
}
