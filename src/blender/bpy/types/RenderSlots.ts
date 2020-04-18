import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { RenderSlot } from './RenderSlot'

/**
 * RenderSlots
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderSlots.html
 */
export class RenderSlots {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Active render slot of the image
     * @desc RenderSlot
     */
    public get active(): RenderSlot {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, RenderSlot)
    }

    /**
     * Active render slot of the image
     * @desc int in [0, 32767], default 0
     */
    public get active_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_index`)
    }

    /**
     * Active render slot of the image
     * @desc RenderSlot
     */
    public set active(value: RenderSlot) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Active render slot of the image
     * @desc int in [0, 32767], default 0
     */
    public set active_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_index`, value)
    }

    /**
     * Add a render slot to the image
     * @desc RenderSlot
     */
    public new(options: { name?: string }): RenderSlot {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, RenderSlot)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
