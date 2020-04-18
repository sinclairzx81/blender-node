import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'

/**
 * SpacePreferences
 * 
 * https://docs.blender.org/api/current/bpy.types.SpacePreferences.html
 */
export class SpacePreferences {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Search term for filtering in the UI
     * @desc string, default '', (never None)
     */
    public get filter_text(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filter_text`)
    }

    /**
     * Filter method
     * @desc enum in ['NAME', 'KEY'], default 'NAME'
     */
    public get filter_type(): 'NAME' | 'KEY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.filter_type`)
    }

    /**
     * Search term for filtering in the UI
     * @desc string, default '', (never None)
     */
    public set filter_text(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filter_text`, value)
    }

    /**
     * Filter method
     * @desc enum in ['NAME', 'KEY'], default 'NAME'
     */
    public set filter_type(value: 'NAME' | 'KEY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.filter_type`, value)
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
