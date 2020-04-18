import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BlenderObject } from './BlenderObject'

/**
 * TimelineMarker
 * 
 * https://docs.blender.org/api/current/bpy.types.TimelineMarker.html
 */
export class TimelineMarker {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Camera that becomes active on this frame
     * @desc Object
     */
    public get camera(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.camera`, BlenderObject)
    }

    /**
     * The frame on which the timeline marker appears
     * @desc int in [-inf, inf], default 0
     */
    public get frame(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Marker selection state
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Camera that becomes active on this frame
     * @desc Object
     */
    public set camera(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.camera`, value)
    }

    /**
     * The frame on which the timeline marker appears
     * @desc int in [-inf, inf], default 0
     */
    public set frame(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Marker selection state
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
