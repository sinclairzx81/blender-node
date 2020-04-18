import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * AlembicObjectPath
 * 
 * https://docs.blender.org/api/current/bpy.types.AlembicObjectPath.html
 */
export class AlembicObjectPath {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Object path
     * @desc string, default '', (never None)
     */
    public get path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path`)
    }

    /**
     * Object path
     * @desc string, default '', (never None)
     */
    public set path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.path`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
