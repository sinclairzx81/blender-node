import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Bone } from './Bone'

/**
 * ArmatureBones
 * 
 * https://docs.blender.org/api/current/bpy.types.ArmatureBones.html
 */
export class ArmatureBones {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Armature’s active bone
     * @desc Bone
     */
    public get active(): Bone {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, Bone)
    }

    /**
     * Armature’s active bone
     * @desc Bone
     */
    public set active(value: Bone) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
