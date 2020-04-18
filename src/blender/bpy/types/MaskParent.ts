import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ID } from './ID'

/**
 * MaskParent
 * 
 * https://docs.blender.org/api/current/bpy.types.MaskParent.html
 */
export class MaskParent {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * ID-block to which masking element would be parented to or to it’s property
     * @desc ID
     */
    public get id(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.id`, ID)
    }

    /**
     * Type of ID-block that can be used
     * @desc enum in ['MOVIECLIP'], default 'MOVIECLIP'
     */
    public get id_type(): 'MOVIECLIP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.id_type`)
    }

    /**
     * Name of parent object in specified data-block to which parenting happens
     * @desc string, default '', (never None)
     */
    public get parent(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.parent`)
    }

    /**
     * Name of parent sub-object in specified data-block to which parenting happens
     * @desc string, default '', (never None)
     */
    public get sub_parent(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.sub_parent`)
    }

    /**
     * Parent Type
     * @desc enum in ['POINT_TRACK', 'PLANE_TRACK'], default 'POINT_TRACK'
     */
    public get type(): 'POINT_TRACK' | 'PLANE_TRACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * ID-block to which masking element would be parented to or to it’s property
     * @desc ID
     */
    public set id(value: ID) {
        PythonInterop.setClass(this.interop, `${this.accessor}.id`, value)
    }

    /**
     * Type of ID-block that can be used
     * @desc enum in ['MOVIECLIP'], default 'MOVIECLIP'
     */
    public set id_type(value: 'MOVIECLIP') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.id_type`, value)
    }

    /**
     * Name of parent object in specified data-block to which parenting happens
     * @desc string, default '', (never None)
     */
    public set parent(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.parent`, value)
    }

    /**
     * Name of parent sub-object in specified data-block to which parenting happens
     * @desc string, default '', (never None)
     */
    public set sub_parent(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.sub_parent`, value)
    }

    /**
     * Parent Type
     * @desc enum in ['POINT_TRACK', 'PLANE_TRACK'], default 'POINT_TRACK'
     */
    public set type(value: 'POINT_TRACK' | 'PLANE_TRACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
