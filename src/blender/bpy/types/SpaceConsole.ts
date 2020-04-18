import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Space } from './Space'
import { ConsoleLine } from './ConsoleLine'

/**
 * SpaceConsole
 * 
 * https://docs.blender.org/api/current/bpy.types.SpaceConsole.html
 */
export class SpaceConsole {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Command history
     * @desc bpy_prop_collection of ConsoleLine, (readonly)
     */
    public get history(): BlenderCollection<ConsoleLine> & Indexable<ConsoleLine> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.history`, ConsoleLine)
    }

    /**
     * Command output
     * @desc bpy_prop_collection of ConsoleLine, (readonly)
     */
    public get scrollback(): BlenderCollection<ConsoleLine> & Indexable<ConsoleLine> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.scrollback`, ConsoleLine)
    }

    /**
     * Font size to use for displaying the text
     * @desc int in [8, 32], default 0
     */
    public get font_size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.font_size`)
    }

    /**
     * Command line prompt language
     * @desc string, default '', (never None)
     */
    public get language(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.language`)
    }

    /**
     * Command line prompt
     * @desc string, default '', (never None)
     */
    public get prompt(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.prompt`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get select_end(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.select_end`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get select_start(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.select_start`)
    }

    /**
     * Font size to use for displaying the text
     * @desc int in [8, 32], default 0
     */
    public set font_size(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.font_size`, value)
    }

    /**
     * Command line prompt language
     * @desc string, default '', (never None)
     */
    public set language(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.language`, value)
    }

    /**
     * Command line prompt
     * @desc string, default '', (never None)
     */
    public set prompt(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.prompt`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set select_end(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.select_end`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set select_start(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.select_start`, value)
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
