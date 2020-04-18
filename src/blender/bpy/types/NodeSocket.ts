import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Node } from './Node'

/**
 * NodeSocket
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeSocket.html
 */
export class NodeSocket {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Unique identifier for mapping sockets
     * @desc string, default '', (readonly, never None)
     */
    public get identifier(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.identifier`)
    }

    /**
     * True if the socket is connected
     * @desc boolean, default False, (readonly)
     */
    public get is_linked(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_linked`)
    }

    /**
     * True if the socket is an output, otherwise input
     * @desc boolean, default False, (readonly)
     */
    public get is_output(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_output`)
    }

    /**
     * Node owning this socket
     * @desc Node, (readonly)
     */
    public get node(): Node {
        return PythonInterop.getClass(this.interop, `${this.accessor}.node`, Node)
    }

    /**
     * List of node links from or to this socket. Warning: takes O(len(nodetree.links)) time.(readonly)
     * @desc void
     */
    public get links(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.links`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get bl_idname(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bl_idname`)
    }

    /**
     * Socket shape
     * @desc enum in ['CIRCLE', 'SQUARE', 'DIAMOND', 'CIRCLE_DOT', 'SQUARE_DOT', 'DIAMOND_DOT'], default 'CIRCLE'
     */
    public get display_shape(): 'CIRCLE' | 'SQUARE' | 'DIAMOND' | 'CIRCLE_DOT' | 'SQUARE_DOT' | 'DIAMOND_DOT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_shape`)
    }

    /**
     * Enable the socket
     * @desc boolean, default False
     */
    public get enabled(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.enabled`)
    }

    /**
     * Hide the socket
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * Hide the socket input value
     * @desc boolean, default False
     */
    public get hide_value(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_value`)
    }

    /**
     * Max number of links allowed for this socket
     * @desc int in [1, 4095], default 0
     */
    public get link_limit(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.link_limit`)
    }

    /**
     * Socket name
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Socket links are expanded in the user interface
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Data type
     * @desc enum in ['CUSTOM', 'VALUE', 'INT', 'BOOLEAN', 'VECTOR', 'STRING', 'RGBA', 'SHADER'], default 'VALUE'
     */
    public get type(): 'CUSTOM' | 'VALUE' | 'INT' | 'BOOLEAN' | 'VECTOR' | 'STRING' | 'RGBA' | 'SHADER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set bl_idname(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bl_idname`, value)
    }

    /**
     * Socket shape
     * @desc enum in ['CIRCLE', 'SQUARE', 'DIAMOND', 'CIRCLE_DOT', 'SQUARE_DOT', 'DIAMOND_DOT'], default 'CIRCLE'
     */
    public set display_shape(value: 'CIRCLE' | 'SQUARE' | 'DIAMOND' | 'CIRCLE_DOT' | 'SQUARE_DOT' | 'DIAMOND_DOT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_shape`, value)
    }

    /**
     * Enable the socket
     * @desc boolean, default False
     */
    public set enabled(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.enabled`, value)
    }

    /**
     * Hide the socket
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * Hide the socket input value
     * @desc boolean, default False
     */
    public set hide_value(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_value`, value)
    }

    /**
     * Max number of links allowed for this socket
     * @desc int in [1, 4095], default 0
     */
    public set link_limit(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.link_limit`, value)
    }

    /**
     * Socket name
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Socket links are expanded in the user interface
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Data type
     * @desc enum in ['CUSTOM', 'VALUE', 'INT', 'BOOLEAN', 'VECTOR', 'STRING', 'RGBA', 'SHADER'], default 'VALUE'
     */
    public set type(value: 'CUSTOM' | 'VALUE' | 'INT' | 'BOOLEAN' | 'VECTOR' | 'STRING' | 'RGBA' | 'SHADER') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Draw socket
     * @desc void
     */
    public draw(options: { layout?: unknown, node?: unknown, text?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.draw`, options)
    }

    /**
     * Color of the socket icon
     * @desc float array of 4 items in [0, 1]
     */
    public draw_color(options: { node?: unknown }): [number, number, number, number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.draw_color`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
