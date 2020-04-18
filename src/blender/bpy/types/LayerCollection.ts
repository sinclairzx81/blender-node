import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Collection } from './Collection'

/**
 * LayerCollection
 * 
 * https://docs.blender.org/api/current/bpy.types.LayerCollection.html
 */
export class LayerCollection {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Child layer collections
     * @desc bpy_prop_collection of LayerCollection, (readonly)
     */
    public get children(): BlenderCollection<LayerCollection> & Indexable<LayerCollection> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.children`, LayerCollection)
    }

    /**
     * Collection this layer collection is wrapping
     * @desc Collection, (readonly, never None)
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * Whether this collection is visible for the viewlayer, take into account the collection parent
     * @desc boolean, default False, (readonly)
     */
    public get is_visible(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_visible`)
    }

    /**
     * Name of this view layer (same as its collection one)
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Exclude from view layer
     * @desc boolean, default False
     */
    public get exclude(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.exclude`)
    }

    /**
     * Temporarily hide in viewport
     * @desc boolean, default False
     */
    public get hide_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_viewport`)
    }

    /**
     * Mask out objects in collection from view layer
     * @desc boolean, default False
     */
    public get holdout(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.holdout`)
    }

    /**
     * Objects in collection only contribute indirectly (through shadows and reflections) in the view layer
     * @desc boolean, default False
     */
    public get indirect_only(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.indirect_only`)
    }

    /**
     * Exclude from view layer
     * @desc boolean, default False
     */
    public set exclude(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.exclude`, value)
    }

    /**
     * Temporarily hide in viewport
     * @desc boolean, default False
     */
    public set hide_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_viewport`, value)
    }

    /**
     * Mask out objects in collection from view layer
     * @desc boolean, default False
     */
    public set holdout(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.holdout`, value)
    }

    /**
     * Objects in collection only contribute indirectly (through shadows and reflections) in the view layer
     * @desc boolean, default False
     */
    public set indirect_only(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.indirect_only`, value)
    }

    /**
     * Whether this collection is visible, take into account the collection parent and the viewport
     * @desc boolean
     */
    public visible_get(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.visible_get`, {})
    }

    /**
     * 
     * @desc boolean
     */
    public has_objects(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.has_objects`, {})
    }

    /**
     * 
     * @desc boolean
     */
    public has_selected_objects(options: { view_layer?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.has_selected_objects`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
