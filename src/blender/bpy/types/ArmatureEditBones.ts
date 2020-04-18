import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { EditBone } from './EditBone'

/**
 * ArmatureEditBones
 * 
 * https://docs.blender.org/api/current/bpy.types.ArmatureEditBones.html
 */
export class ArmatureEditBones {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Armatures active edit bone
     * @desc EditBone
     */
    public get active(): EditBone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, EditBone)
    }

    /**
     * Armatures active edit bone
     * @desc EditBone
     */
    public set active(value: EditBone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Add a new bone
     * @desc EditBone
     */
    public new(options: { name?: string }): EditBone {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, EditBone)
    }

    /**
     * Remove an existing bone from the armature
     * @desc void
     */
    public remove(options: { bone?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
