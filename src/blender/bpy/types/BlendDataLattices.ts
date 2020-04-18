import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Lattice } from './Lattice'

/**
 * BlendDataLattices
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataLattices.html
 */
export class BlendDataLattices {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new lattice to the main database
     * @desc Lattice
     */
    public new(options: { name?: string }): Lattice {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Lattice)
    }

    /**
     * Remove a lattice from the current blendfile
     * @desc void
     */
    public remove(options: { lattice?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
