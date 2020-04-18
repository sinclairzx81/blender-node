import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MotionPathVert } from './MotionPathVert'

/**
 * MotionPath
 * 
 * https://docs.blender.org/api/current/bpy.types.MotionPath.html
 */
export class MotionPath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * End frame of the stored range
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get frame_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_end`)
    }

    /**
     * Starting frame of the stored range
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get frame_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_start`)
    }

    /**
     * Number of frames cached
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get length(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.length`)
    }

    /**
     * Cached positions per frame
     * @desc bpy_prop_collection of MotionPathVert, (readonly)
     */
    public get points(): BlenderCollection<MotionPathVert> & Indexable<MotionPathVert> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.points`, MotionPathVert)
    }

    /**
     * For PoseBone paths, use the bone head location when calculating this path
     * @desc boolean, default False, (readonly)
     */
    public get use_bone_head(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_bone_head`)
    }

    /**
     * Custom color for motion path
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 3)
    }

    /**
     * Path is being edited
     * @desc boolean, default False
     */
    public get is_modified(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_modified`)
    }

    /**
     * Line thickness for drawing path
     * @desc int in [1, 6], default 0
     */
    public get line_thickness(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.line_thickness`)
    }

    /**
     * Draw straight lines between keyframe points
     * @desc boolean, default False
     */
    public get lines(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lines`)
    }

    /**
     * Use custom color for this motion path
     * @desc boolean, default False
     */
    public get use_custom_color(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_custom_color`)
    }

    /**
     * Custom color for motion path
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Path is being edited
     * @desc boolean, default False
     */
    public set is_modified(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_modified`, value)
    }

    /**
     * Line thickness for drawing path
     * @desc int in [1, 6], default 0
     */
    public set line_thickness(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.line_thickness`, value)
    }

    /**
     * Draw straight lines between keyframe points
     * @desc boolean, default False
     */
    public set lines(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lines`, value)
    }

    /**
     * Use custom color for this motion path
     * @desc boolean, default False
     */
    public set use_custom_color(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_custom_color`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
