import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { NodeTree } from './NodeTree'

/**
 * CompositorNodeTree
 * 
 * https://docs.blender.org/api/current/bpy.types.CompositorNodeTree.html
 */
export class CompositorNodeTree {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Max size of a tile (smaller values gives better distribution of multiple threads, but more overhead)
     * @desc enum in ['32', '64', '128', '256', '512', '1024'], default '32'
     */
    public get chunk_size(): '32' | '64' | '128' | '256' | '512' | '1024' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.chunk_size`)
    }

    /**
     * Quality when editing
     * @desc enum in ['HIGH', 'MEDIUM', 'LOW'], default 'HIGH'
     */
    public get edit_quality(): 'HIGH' | 'MEDIUM' | 'LOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.edit_quality`)
    }

    /**
     * Quality when rendering
     * @desc enum in ['HIGH', 'MEDIUM', 'LOW'], default 'HIGH'
     */
    public get render_quality(): 'HIGH' | 'MEDIUM' | 'LOW' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.render_quality`)
    }

    /**
     * Enable buffering of group nodes
     * @desc boolean, default False
     */
    public get use_groupnode_buffer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_groupnode_buffer`)
    }

    /**
     * Enable GPU calculations
     * @desc boolean, default False
     */
    public get use_opencl(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_opencl`)
    }

    /**
     * Use two pass execution during editing: first calculate fast nodes, second pass calculate all nodes
     * @desc boolean, default False
     */
    public get use_two_pass(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_two_pass`)
    }

    /**
     * Use boundaries for viewer nodes and composite backdrop
     * @desc boolean, default False
     */
    public get use_viewer_border(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_viewer_border`)
    }

    /**
     * Max size of a tile (smaller values gives better distribution of multiple threads, but more overhead)
     * @desc enum in ['32', '64', '128', '256', '512', '1024'], default '32'
     */
    public set chunk_size(value: '32' | '64' | '128' | '256' | '512' | '1024') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.chunk_size`, value)
    }

    /**
     * Quality when editing
     * @desc enum in ['HIGH', 'MEDIUM', 'LOW'], default 'HIGH'
     */
    public set edit_quality(value: 'HIGH' | 'MEDIUM' | 'LOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.edit_quality`, value)
    }

    /**
     * Quality when rendering
     * @desc enum in ['HIGH', 'MEDIUM', 'LOW'], default 'HIGH'
     */
    public set render_quality(value: 'HIGH' | 'MEDIUM' | 'LOW') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.render_quality`, value)
    }

    /**
     * Enable buffering of group nodes
     * @desc boolean, default False
     */
    public set use_groupnode_buffer(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_groupnode_buffer`, value)
    }

    /**
     * Enable GPU calculations
     * @desc boolean, default False
     */
    public set use_opencl(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_opencl`, value)
    }

    /**
     * Use two pass execution during editing: first calculate fast nodes, second pass calculate all nodes
     * @desc boolean, default False
     */
    public set use_two_pass(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_two_pass`, value)
    }

    /**
     * Use boundaries for viewer nodes and composite backdrop
     * @desc boolean, default False
     */
    public set use_viewer_border(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_viewer_border`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
