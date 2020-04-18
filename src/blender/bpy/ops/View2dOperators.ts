import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * View2dOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.view2d.html
 */
export class View2dOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Use a 3D mouse device to pan/zoom the view
     * @desc void
     */
    public ndof(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ndof`, {})
    }

    /**
     * Pan the view
     * @desc void
     */
    public pan(options: { deltax?: number, deltay?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pan`, options)
    }

    /**
     * Reset the view
     * @desc void
     */
    public reset(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reset`, {})
    }

    /**
     * Scroll the view down
     * @desc void
     */
    public scroll_down(options: { deltax?: number, deltay?: number, page?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll_down`, options)
    }

    /**
     * Scroll the view left
     * @desc void
     */
    public scroll_left(options: { deltax?: number, deltay?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll_left`, options)
    }

    /**
     * Scroll the view right
     * @desc void
     */
    public scroll_right(options: { deltax?: number, deltay?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll_right`, options)
    }

    /**
     * Scroll the view up
     * @desc void
     */
    public scroll_up(options: { deltax?: number, deltay?: number, page?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroll_up`, options)
    }

    /**
     * Scroll view by mouse click and drag
     * @desc void
     */
    public scroller_activate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scroller_activate`, {})
    }

    /**
     * Undocumented contribute <https://developer.blender.org/T51061>
     * @desc void
     */
    public smoothview(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.smoothview`, options)
    }

    /**
     * Zoom in/out the view
     * @desc void
     */
    public zoom(options: { deltax?: number, deltay?: number, use_cursor_init?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom`, options)
    }

    /**
     * Zoom in the view to the nearest item contained in the border
     * @desc void
     */
    public zoom_border(options: { xmin?: number, xmax?: number, ymin?: number, ymax?: number, wait_for_input?: boolean, zoom_out?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom_border`, options)
    }

    /**
     * Zoom in the view
     * @desc void
     */
    public zoom_in(options: { zoomfacx?: number, zoomfacy?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom_in`, options)
    }

    /**
     * Zoom out the view
     * @desc void
     */
    public zoom_out(options: { zoomfacx?: number, zoomfacy?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.zoom_out`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
