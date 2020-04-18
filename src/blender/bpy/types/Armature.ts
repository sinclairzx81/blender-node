import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { AnimData } from './AnimData'
import { ArmatureBones } from './ArmatureBones'
import { Bone } from './Bone'
import { ArmatureEditBones } from './ArmatureEditBones'
import { EditBone } from './EditBone'

/**
 * Armature
 * 
 * https://docs.blender.org/api/current/bpy.types.Armature.html
 */
export class Armature {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * 
     * @desc ArmatureBones bpy_prop_collection of Bone, (readonly)
     */
    public get bones(): BlenderCollection<Bone> & Indexable<Bone> & ArmatureBones {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.bones`, ArmatureBones, Bone)
    }

    /**
     * 
     * @desc ArmatureEditBones bpy_prop_collection of EditBone, (readonly)
     */
    public get edit_bones(): BlenderCollection<EditBone> & Indexable<EditBone> & ArmatureEditBones {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.edit_bones`, ArmatureEditBones, EditBone)
    }

    /**
     * True when used in editmode
     * @desc boolean, default False, (readonly)
     */
    public get is_editmode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_editmode`)
    }

    /**
     * 
     * @desc enum in ['OCTAHEDRAL', 'STICK', 'BBONE', 'ENVELOPE', 'WIRE'], default 'OCTAHEDRAL'
     */
    public get display_type(): 'OCTAHEDRAL' | 'STICK' | 'BBONE' | 'ENVELOPE' | 'WIRE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_type`)
    }

    /**
     * Armature layer visibility
     * @desc boolean array of 32 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public get layers(): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.layers`, 'boolean', 32)
    }

    /**
     * Protected layers in Proxy Instances are restored to Proxy settings on file reload and undo
     * @desc boolean array of 32 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public get layers_protected(): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.layers_protected`, 'boolean', 32)
    }

    /**
     * Show armature in binding pose or final posed state
     * @desc enum in ['POSE', 'REST'], default 'POSE'
     */
    public get pose_position(): 'POSE' | 'REST' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.pose_position`)
    }

    /**
     * Display bone axes
     * @desc boolean, default False
     */
    public get show_axes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_axes`)
    }

    /**
     * Display bones with their custom shapes
     * @desc boolean, default False
     */
    public get show_bone_custom_shapes(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_bone_custom_shapes`)
    }

    /**
     * Display bone group colors
     * @desc boolean, default False
     */
    public get show_group_colors(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_group_colors`)
    }

    /**
     * Display bone names
     * @desc boolean, default False
     */
    public get show_names(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_names`)
    }

    /**
     * Apply changes to matching bone on opposite side of X-Axis
     * @desc boolean, default False
     */
    public get use_mirror_x(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_mirror_x`)
    }

    /**
     * 
     * @desc enum in ['OCTAHEDRAL', 'STICK', 'BBONE', 'ENVELOPE', 'WIRE'], default 'OCTAHEDRAL'
     */
    public set display_type(value: 'OCTAHEDRAL' | 'STICK' | 'BBONE' | 'ENVELOPE' | 'WIRE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_type`, value)
    }

    /**
     * Armature layer visibility
     * @desc boolean array of 32 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public set layers(value: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.layers`, value)
    }

    /**
     * Protected layers in Proxy Instances are restored to Proxy settings on file reload and undo
     * @desc boolean array of 32 items, default (False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False, False)
     */
    public set layers_protected(value: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.layers_protected`, value)
    }

    /**
     * Show armature in binding pose or final posed state
     * @desc enum in ['POSE', 'REST'], default 'POSE'
     */
    public set pose_position(value: 'POSE' | 'REST') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.pose_position`, value)
    }

    /**
     * Display bone axes
     * @desc boolean, default False
     */
    public set show_axes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_axes`, value)
    }

    /**
     * Display bones with their custom shapes
     * @desc boolean, default False
     */
    public set show_bone_custom_shapes(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_bone_custom_shapes`, value)
    }

    /**
     * Display bone group colors
     * @desc boolean, default False
     */
    public set show_group_colors(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_group_colors`, value)
    }

    /**
     * Display bone names
     * @desc boolean, default False
     */
    public set show_names(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_names`, value)
    }

    /**
     * Apply changes to matching bone on opposite side of X-Axis
     * @desc boolean, default False
     */
    public set use_mirror_x(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_mirror_x`, value)
    }

    /**
     * Transform armature bones by a matrix
     * @desc void
     */
    public transform(options: { matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transform`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
