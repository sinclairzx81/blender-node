import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Brush } from './Brush'

/**
 * BlendDataBrushes
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataBrushes.html
 */
export class BlendDataBrushes {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new brush to the main database
     * @desc Brush
     */
    public new(options: { name?: string, mode?: 'OBJECT' | 'EDIT' | 'POSE' | 'SCULPT' | 'VERTEX_PAINT' | 'WEIGHT_PAINT' | 'TEXTURE_PAINT' | 'PARTICLE_EDIT' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'PAINT_GPENCIL' | 'WEIGHT_GPENCIL' }): Brush {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Brush)
    }

    /**
     * Remove a brush from the current blendfile
     * @desc void
     */
    public remove(options: { brush?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    /**
     * Add grease pencil brush settings
     * @desc void
     */
    public create_gpencil_data(options: { brush?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.create_gpencil_data`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
