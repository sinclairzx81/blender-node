import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MovieTrackingDopesheet
 * 
 * https://docs.blender.org/api/current/bpy.types.MovieTrackingDopesheet.html
 */
export class MovieTrackingDopesheet {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Include channels from objects/bone that aren’t visible
     * @desc boolean, default False
     */
    public get show_hidden(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_hidden`)
    }

    /**
     * Only include channels relating to selected objects and data
     * @desc boolean, default False
     */
    public get show_only_selected(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_only_selected`)
    }

    /**
     * Method to be used to sort channels in dopesheet view
     * @desc enum in ['NAME', 'LONGEST', 'TOTAL', 'AVERAGE_ERROR'], default 'NAME'
     */
    public get sort_method(): 'NAME' | 'LONGEST' | 'TOTAL' | 'AVERAGE_ERROR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.sort_method`)
    }

    /**
     * Invert sort order of dopesheet channels
     * @desc boolean, default False
     */
    public get use_invert_sort(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_invert_sort`)
    }

    /**
     * Include channels from objects/bone that aren’t visible
     * @desc boolean, default False
     */
    public set show_hidden(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_hidden`, value)
    }

    /**
     * Only include channels relating to selected objects and data
     * @desc boolean, default False
     */
    public set show_only_selected(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_only_selected`, value)
    }

    /**
     * Method to be used to sort channels in dopesheet view
     * @desc enum in ['NAME', 'LONGEST', 'TOTAL', 'AVERAGE_ERROR'], default 'NAME'
     */
    public set sort_method(value: 'NAME' | 'LONGEST' | 'TOTAL' | 'AVERAGE_ERROR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.sort_method`, value)
    }

    /**
     * Invert sort order of dopesheet channels
     * @desc boolean, default False
     */
    public set use_invert_sort(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_invert_sort`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
