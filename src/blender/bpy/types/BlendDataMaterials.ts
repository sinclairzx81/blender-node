import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Material } from './Material'

/**
 * BlendDataMaterials
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataMaterials.html
 */
export class BlendDataMaterials {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new material to the main database
     * @desc Material
     */
    public new(options: { name?: string }): Material {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Material)
    }

    /**
     * Add grease pencil material settings
     * @desc void
     */
    public create_gpencil_data(options: { material?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.create_gpencil_data`, options)
    }

    /**
     * Remove grease pencil material settings
     * @desc void
     */
    public remove_gpencil_data(options: { material?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_gpencil_data`, options)
    }

    /**
     * Remove a material from the current blendfile
     * @desc void
     */
    public remove(options: { material?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
