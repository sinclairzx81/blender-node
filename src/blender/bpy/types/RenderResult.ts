import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { RenderLayer } from './RenderLayer'
import { RenderView } from './RenderView'

/**
 * RenderResult
 * 
 * https://docs.blender.org/api/current/bpy.types.RenderResult.html
 */
export class RenderResult {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc bpy_prop_collection of RenderLayer, (readonly)
     */
    public get layers(): BlenderCollection<RenderLayer> & Indexable<RenderLayer> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.layers`, RenderLayer)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get resolution_x(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_x`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get resolution_y(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution_y`)
    }

    /**
     * 
     * @desc bpy_prop_collection of RenderView, (readonly)
     */
    public get views(): BlenderCollection<RenderView> & Indexable<RenderView> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.views`, RenderView)
    }

    /**
     * Copies the pixels of this render result from an image file
     * @desc void
     */
    public load_from_file(options: { filename?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.load_from_file`, options)
    }

    /**
     * Add engine-specific stamp data to the result
     * @desc void
     */
    public stamp_data_add_field(options: { field?: string, value?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.stamp_data_add_field`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
