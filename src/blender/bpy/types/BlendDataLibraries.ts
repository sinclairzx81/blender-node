import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * BlendDataLibraries
 * 
 * https://docs.blender.org/api/current/bpy.types.BlendDataLibraries.html
 */
export class BlendDataLibraries {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * tag
     * @desc void
     */
    public tag(options: { value?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.tag`, options)
    }

    /**
     * Returns a context manager which exposes 2 library objects on entering.Each object has attributes matching bpy.data which are lists of strings to be linked.
     * @desc void
     */
    public load(options: { filepath?: string, link?: boolean, relative?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.load`, options)
    }

    /**
     * Write data-blocks into a blend file.
     * @desc void
     */
    public write(options: { filepath?: string, datablocks?: any[], relative_remap?: boolean, fake_user?: boolean, compress?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.write`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
