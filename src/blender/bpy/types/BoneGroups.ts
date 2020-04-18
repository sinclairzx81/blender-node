import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BoneGroup } from './BoneGroup'

/**
 * BoneGroups
 * 
 * https://docs.blender.org/api/current/bpy.types.BoneGroups.html
 */
export class BoneGroups {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active bone group for this pose
     * @desc BoneGroup
     */
    public get active(): BoneGroup {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, BoneGroup)
    }

    /**
     * Active index in bone groups array
     * @desc int in [0, inf], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active bone group for this pose
     * @desc BoneGroup
     */
    public set active(value: BoneGroup) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active index in bone groups array
     * @desc int in [0, inf], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a new bone group to the object
     * @desc BoneGroup
     */
    public new(options: { name?: string }): BoneGroup {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, BoneGroup)
    }

    /**
     * Remove a bone group from this object
     * @desc void
     */
    public remove(options: { group?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
