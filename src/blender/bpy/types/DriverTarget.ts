import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ID } from './ID'

/**
 * DriverTarget
 * 
 * https://docs.blender.org/api/current/bpy.types.DriverTarget.html
 */
export class DriverTarget {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Name of PoseBone to use as target
     * @desc string, default '', (never None)
     */
    public get bone_target(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bone_target`)
    }

    /**
     * RNA Path (from ID-block) to property used
     * @desc string, default '', (never None)
     */
    public get data_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.data_path`)
    }

    /**
     * ID-block that the specific property used can be found from (id_type property must be set first)
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
     * Mode for calculating rotation channel values
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'QUATERNION', 'SWING_TWIST_X', 'SWING_TWIST_Y', 'SWING_TWIST_Z'], default 'AUTO'
     */
    public get rotation_mode(): 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'QUATERNION' | 'SWING_TWIST_X' | 'SWING_TWIST_Y' | 'SWING_TWIST_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rotation_mode`)
    }

    /**
     * Space in which transforms are used
     * @desc enum in ['WORLD_SPACE', 'TRANSFORM_SPACE', 'LOCAL_SPACE'], default 'WORLD_SPACE'
     */
    public get transform_space(): 'WORLD_SPACE' | 'TRANSFORM_SPACE' | 'LOCAL_SPACE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.transform_space`)
    }

    /**
     * Driver variable type
     * @desc enum in ['LOC_X', 'LOC_Y', 'LOC_Z', 'ROT_X', 'ROT_Y', 'ROT_Z', 'ROT_W', 'SCALE_X', 'SCALE_Y', 'SCALE_Z', 'SCALE_AVG'], default 'LOC_X'
     */
    public get transform_type(): 'LOC_X' | 'LOC_Y' | 'LOC_Z' | 'ROT_X' | 'ROT_Y' | 'ROT_Z' | 'ROT_W' | 'SCALE_X' | 'SCALE_Y' | 'SCALE_Z' | 'SCALE_AVG' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.transform_type`)
    }

    /**
     * Name of PoseBone to use as target
     * @desc string, default '', (never None)
     */
    public set bone_target(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bone_target`, value)
    }

    /**
     * RNA Path (from ID-block) to property used
     * @desc string, default '', (never None)
     */
    public set data_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.data_path`, value)
    }

    /**
     * ID-block that the specific property used can be found from (id_type property must be set first)
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
     * Mode for calculating rotation channel values
     * @desc enum in ['AUTO', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'QUATERNION', 'SWING_TWIST_X', 'SWING_TWIST_Y', 'SWING_TWIST_Z'], default 'AUTO'
     */
    public set rotation_mode(value: 'AUTO' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'QUATERNION' | 'SWING_TWIST_X' | 'SWING_TWIST_Y' | 'SWING_TWIST_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rotation_mode`, value)
    }

    /**
     * Space in which transforms are used
     * @desc enum in ['WORLD_SPACE', 'TRANSFORM_SPACE', 'LOCAL_SPACE'], default 'WORLD_SPACE'
     */
    public set transform_space(value: 'WORLD_SPACE' | 'TRANSFORM_SPACE' | 'LOCAL_SPACE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.transform_space`, value)
    }

    /**
     * Driver variable type
     * @desc enum in ['LOC_X', 'LOC_Y', 'LOC_Z', 'ROT_X', 'ROT_Y', 'ROT_Z', 'ROT_W', 'SCALE_X', 'SCALE_Y', 'SCALE_Z', 'SCALE_AVG'], default 'LOC_X'
     */
    public set transform_type(value: 'LOC_X' | 'LOC_Y' | 'LOC_Z' | 'ROT_X' | 'ROT_Y' | 'ROT_Z' | 'ROT_W' | 'SCALE_X' | 'SCALE_Y' | 'SCALE_Z' | 'SCALE_AVG') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.transform_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
