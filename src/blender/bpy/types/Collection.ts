import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { BlenderObject } from './BlenderObject'
import { CollectionChildren } from './CollectionChildren'
import { CollectionObjects } from './CollectionObjects'

/**
 * Collection
 * 
 * https://docs.blender.org/api/current/bpy.types.Collection.html
 */
export class Collection {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Objects that are in this collection and its child collections
     * @desc bpy_prop_collection of Object, (readonly)
     */
    public get all_objects(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.all_objects`, BlenderObject)
    }

    /**
     * Collections that are immediate children of this collection
     * @desc CollectionChildren bpy_prop_collection of Collection, (readonly)
     */
    public get children(): BlenderCollection<Collection> & Indexable<Collection> & CollectionChildren {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.children`, CollectionChildren, Collection)
    }

    /**
     * Objects that are directly in this collection
     * @desc CollectionObjects bpy_prop_collection of Object, (readonly)
     */
    public get objects(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> & CollectionObjects {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.objects`, CollectionObjects, BlenderObject)
    }

    /**
     * The collection instance objects this collection is used in(readonly)
     * @desc void
     */
    public get users_dupli_group(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_dupli_group`)
    }

    /**
     * Globally disable in renders
     * @desc boolean, default False
     */
    public get hide_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_render`)
    }

    /**
     * Disable selection in viewport
     * @desc boolean, default False
     */
    public get hide_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_select`)
    }

    /**
     * Globally disable in viewports
     * @desc boolean, default False
     */
    public get hide_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_viewport`)
    }

    /**
     * Offset from the origin to use when instancing
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get instance_offset(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.instance_offset`, 'number', 3)
    }

    /**
     * Globally disable in renders
     * @desc boolean, default False
     */
    public set hide_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_render`, value)
    }

    /**
     * Disable selection in viewport
     * @desc boolean, default False
     */
    public set hide_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_select`, value)
    }

    /**
     * Globally disable in viewports
     * @desc boolean, default False
     */
    public set hide_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_viewport`, value)
    }

    /**
     * Offset from the origin to use when instancing
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set instance_offset(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.instance_offset`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
