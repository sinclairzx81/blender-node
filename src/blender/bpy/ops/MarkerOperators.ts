import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MarkerOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.marker.html
 */
export class MarkerOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new time marker
     * @desc void
     */
    public add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, {})
    }

    /**
     * Bind the selected camera to a marker on the current frame
     * @desc void
     */
    public camera_bind(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.camera_bind`, {})
    }

    /**
     * Delete selected time marker(s)
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Duplicate selected time marker(s)
     * @desc void
     */
    public duplicate(options: { frames?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Copy selected markers to another scene
     * @desc void
     */
    public make_links_scene(options: { scene?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_links_scene`, options)
    }

    /**
     * Move selected time marker(s)
     * @desc void
     */
    public move(options: { frames?: number, tweak?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.move`, options)
    }

    /**
     * Rename first selected time marker
     * @desc void
     */
    public rename(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rename`, options)
    }

    /**
     * Select time marker(s)
     * @desc void
     */
    public select(options: { wait_to_deselect_others?: boolean, mouse_x?: number, mouse_y?: number, extend?: boolean, camera?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select`, options)
    }

    /**
     * Change selection of all time markers
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select all time markers using box selection
     * @desc void
     */
    public select_box(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, mode?: 'SET' | 'ADD' | 'SUB', tweak?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_box`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
