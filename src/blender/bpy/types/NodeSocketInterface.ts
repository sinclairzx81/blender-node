import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * NodeSocketInterface
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocketInterface.html
 */
export class NodeSocketInterface {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Unique identifier for mapping sockets
     * @desc string, default '', (readonly, never None)
     */
    public get identifier(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.identifier`)
    }

    /**
     * True if the socket is an output, otherwise input
     * @desc boolean, default False, (readonly)
     */
    public get is_output(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_output`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_socket_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_socket_idname`)
    }

    /**
     * Socket name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_socket_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_socket_idname`, value)
    }

    /**
     * Socket name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Draw template settings
     * @desc void
     */
    public draw(options: { layout?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, options)
    }

    /**
     * Color of the socket icon
     * @desc float array of 4 items in [0, 1]
     */
    public draw_color(): [number, number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.draw_color`, {})
    }

    /**
     * Define RNA properties of a socket
     * @desc void
     */
    public register_properties(options: { data_rna_type?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.register_properties`, options)
    }

    /**
     * Initialize a node socket instance
     * @desc void
     */
    public init_socket(options: { node?: unknown, socket?: unknown, data_path?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.init_socket`, options)
    }

    /**
     * Setup template parameters from an existing socket
     * @desc void
     */
    public from_socket(options: { node?: unknown, socket?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.from_socket`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
