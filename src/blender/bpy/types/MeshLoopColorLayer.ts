import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshLoopColor } from './MeshLoopColor'

/**
 * MeshLoopColorLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshLoopColorLayer.html
 */
export class MeshLoopColorLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshLoopColor, (readonly)
     */
    public get data(): BlenderCollection<MeshLoopColor> & Indexable<MeshLoopColor> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshLoopColor)
    }

    /**
     * Sets the layer as active for display and editing
     * @desc boolean, default False
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * Sets the layer as active for rendering
     * @desc boolean, default False
     */
    public get active_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active_render`)
    }

    /**
     * Name of Vertex color layer
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Sets the layer as active for display and editing
     * @desc boolean, default False
     */
    public set active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Sets the layer as active for rendering
     * @desc boolean, default False
     */
    public set active_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active_render`, value)
    }

    /**
     * Name of Vertex color layer
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
