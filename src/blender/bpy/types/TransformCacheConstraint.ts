import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Constraint } from './Constraint'
import { CacheFile } from './CacheFile'

/**
 * TransformCacheConstraint
 * 
 * https://docs.blender.org/api/current/bpy.types.TransformCacheConstraint.html
 */
export class TransformCacheConstraint {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CacheFile
     */
    public get cache_file(): CacheFile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cache_file`, CacheFile)
    }

    /**
     * Path to the object in the Alembic archive used to lookup the transform matrix
     * @desc string, default '', (never None)
     */
    public get object_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.object_path`)
    }

    /**
     * 
     * @desc CacheFile
     */
    public set cache_file(value: CacheFile) {
        PythonInterop.setClass(this.interop, `${this.accessor}.cache_file`, value)
    }

    /**
     * Path to the object in the Alembic archive used to lookup the transform matrix
     * @desc string, default '', (never None)
     */
    public set object_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.object_path`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
