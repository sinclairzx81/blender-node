import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MetaBall } from './MetaBall'

/**
 * BlendDataMetaBalls
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataMetaBalls.html
 */
export class BlendDataMetaBalls {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new metaball to the main database
     * @desc MetaBall
     */
    public new(options: { name?: string }): MetaBall {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MetaBall)
    }

    /**
     * Remove a metaball from the current blendfile
     * @desc void
     */
    public remove(options: { metaball?: unknown, do_unlink?: boolean, do_id_user?: boolean, do_ui_user?: boolean }): void {
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
