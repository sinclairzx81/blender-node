import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { DopeSheet } from './DopeSheet'

/**
 * SpaceNLA
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceNLA.html
 */
export class SpaceNLA {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Settings for filtering animation data
     * @desc DopeSheet, (readonly)
     */
    public get dopesheet(): DopeSheet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.dopesheet`, DopeSheet)
    }

    /**
     * Automatic time snapping settings for transformations
     * @desc enum in ['NONE', 'STEP', 'TIME_STEP', 'FRAME', 'SECOND', 'MARKER'], default 'NONE'
     */
    public get auto_snap(): 'NONE' | 'STEP' | 'TIME_STEP' | 'FRAME' | 'SECOND' | 'MARKER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.auto_snap`)
    }

    /**
     * Show action-local markers on the strips, useful when synchronizing timing across strips
     * @desc boolean, default False
     */
    public get show_local_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_local_markers`)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public get show_markers(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_markers`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get show_region_ui(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_region_ui`)
    }

    /**
     * Show timing in seconds not frames
     * @desc boolean, default False
     */
    public get show_seconds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_seconds`)
    }

    /**
     * Show influence F-Curves on strips
     * @desc boolean, default False
     */
    public get show_strip_curves(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_strip_curves`)
    }

    /**
     * When transforming strips, changes to the animation data are flushed to other views
     * @desc boolean, default False
     */
    public get use_realtime_update(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_realtime_update`)
    }

    /**
     * Automatic time snapping settings for transformations
     * @desc enum in ['NONE', 'STEP', 'TIME_STEP', 'FRAME', 'SECOND', 'MARKER'], default 'NONE'
     */
    public set auto_snap(value: 'NONE' | 'STEP' | 'TIME_STEP' | 'FRAME' | 'SECOND' | 'MARKER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.auto_snap`, value)
    }

    /**
     * Show action-local markers on the strips, useful when synchronizing timing across strips
     * @desc boolean, default False
     */
    public set show_local_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_local_markers`, value)
    }

    /**
     * If any exists, show markers in a separate row at the bottom of the editor
     * @desc boolean, default False
     */
    public set show_markers(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_markers`, value)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set show_region_ui(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_region_ui`, value)
    }

    /**
     * Show timing in seconds not frames
     * @desc boolean, default False
     */
    public set show_seconds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_seconds`, value)
    }

    /**
     * Show influence F-Curves on strips
     * @desc boolean, default False
     */
    public set show_strip_curves(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_strip_curves`, value)
    }

    /**
     * When transforming strips, changes to the animation data are flushed to other views
     * @desc boolean, default False
     */
    public set use_realtime_update(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_realtime_update`, value)
    }

    /**
     * Add a new draw handler to this space type.It will be called every time the specified region in the space type will be drawn.Note: All arguments are positional only for now.
     * @desc object
     */
    public draw_handler_add(options: { callback?: Function, args?: any[], region_type?: string, draw_type?: string }): { [key: string]: any } {
        return PythonInterop.callObject(this.interop, `${this.accessor}.draw_handler_add`, options)
    }

    /**
     * Remove a draw handler that was added previously.
     * @desc void
     */
    public draw_handler_remove(options: { handler?: { [key: string]: any }, region_type?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw_handler_remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
