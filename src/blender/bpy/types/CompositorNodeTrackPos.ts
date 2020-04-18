import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { CompositorNode } from './CompositorNode'
import { MovieClip } from './MovieClip'

/**
 * CompositorNodeTrackPos
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeTrackPos.html
 */
export class CompositorNodeTrackPos {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc MovieClip
     */
    public get clip(): MovieClip {
        return PythonInterop.getClass(this.interop, `${this.accessor}.clip`, MovieClip)
    }

    /**
     * Frame to be used for relative position
     * @desc int in [-32768, 32767], default 0
     */
    public get frame_relative(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.frame_relative`)
    }

    /**
     * Which marker position to use for output
     * @desc enum in ['ABSOLUTE', 'RELATIVE_START', 'RELATIVE_FRAME', 'ABSOLUTE_FRAME'], default 'ABSOLUTE'
     */
    public get position(): 'ABSOLUTE' | 'RELATIVE_START' | 'RELATIVE_FRAME' | 'ABSOLUTE_FRAME' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.position`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get track_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.track_name`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get tracking_object(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.tracking_object`)
    }

    /**
     * 
     * @desc MovieClip
     */
    public set clip(value: MovieClip) {
        PythonInterop.setClass(this.interop, `${this.accessor}.clip`, value)
    }

    /**
     * Frame to be used for relative position
     * @desc int in [-32768, 32767], default 0
     */
    public set frame_relative(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.frame_relative`, value)
    }

    /**
     * Which marker position to use for output
     * @desc enum in ['ABSOLUTE', 'RELATIVE_START', 'RELATIVE_FRAME', 'ABSOLUTE_FRAME'], default 'ABSOLUTE'
     */
    public set position(value: 'ABSOLUTE' | 'RELATIVE_START' | 'RELATIVE_FRAME' | 'ABSOLUTE_FRAME') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.position`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set track_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.track_name`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set tracking_object(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.tracking_object`, value)
    }

    /**
     * 
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
