import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MeshUVLoop } from './MeshUVLoop'

/**
 * MeshUVLoopLayer
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshUVLoopLayer.html
 */
export class MeshUVLoopLayer {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of MeshUVLoop, (readonly)
     */
    public get data(): BlenderCollection<MeshUVLoop> & Indexable<MeshUVLoop> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.data`, MeshUVLoop)
    }

    /**
     * Set the map as active for display and editing
     * @desc boolean, default False
     */
    public get active(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active`)
    }

    /**
     * Set the map as active for cloning
     * @desc boolean, default False
     */
    public get active_clone(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active_clone`)
    }

    /**
     * Set the map as active for rendering
     * @desc boolean, default False
     */
    public get active_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.active_render`)
    }

    /**
     * Name of UV map
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Set the map as active for display and editing
     * @desc boolean, default False
     */
    public set active(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active`, value)
    }

    /**
     * Set the map as active for cloning
     * @desc boolean, default False
     */
    public set active_clone(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active_clone`, value)
    }

    /**
     * Set the map as active for rendering
     * @desc boolean, default False
     */
    public set active_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.active_render`, value)
    }

    /**
     * Name of UV map
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
