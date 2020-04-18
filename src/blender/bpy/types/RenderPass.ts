import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * RenderPass
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderPass.html
 */
export class RenderPass {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get channel_id(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.channel_id`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get channels(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.channels`)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get fullname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.fullname`)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get view_id(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.view_id`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public get rect(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rect`)
    }

    /**
     * 
     * @desc float in [-inf, inf], default 0.0
     */
    public set rect(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rect`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
