import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Node } from './Node'
import { NodeSocket } from './NodeSocket'

/**
 * NodeLink
 * 
 * https://docs.blender.org/api/current/bpy.types.NodeLink.html
 */
export class NodeLink {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc Node, (readonly)
     */
    public get from_node(): Node {
        return PythonInterop.getClass(this.interop, `${this.accessor}.from_node`, Node)
    }

    /**
     * 
     * @desc NodeSocket, (readonly)
     */
    public get from_socket(): NodeSocket {
        return PythonInterop.getClass(this.interop, `${this.accessor}.from_socket`, NodeSocket)
    }

    /**
     * Link is hidden due to invisible sockets
     * @desc boolean, default False, (readonly)
     */
    public get is_hidden(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_hidden`)
    }

    /**
     * 
     * @desc Node, (readonly)
     */
    public get to_node(): Node {
        return PythonInterop.getClass(this.interop, `${this.accessor}.to_node`, Node)
    }

    /**
     * 
     * @desc NodeSocket, (readonly)
     */
    public get to_socket(): NodeSocket {
        return PythonInterop.getClass(this.interop, `${this.accessor}.to_socket`, NodeSocket)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * 
     * @desc boolean, default False
     */
    public set is_valid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_valid`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
