import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PathCompare
 * 
 * https://docs.blender.org/api/current/bpy.types.PathCompare.html
 */
export class PathCompare {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path`)
    }

    /**
     * Enable wildcard globbing
     * @desc boolean, default False
     */
    public get use_glob(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_glob`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.path`, value)
    }

    /**
     * Enable wildcard globbing
     * @desc boolean, default False
     */
    public set use_glob(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_glob`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
