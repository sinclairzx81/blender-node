import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { CacheFile } from './CacheFile'

/**
 * MeshSequenceCacheModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshSequenceCacheModifier.html
 */
export class MeshSequenceCacheModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CacheFile
     */
    public get cache_file(): CacheFile {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cache_file`, CacheFile)
    }

    /**
     * Path to the object in the Alembic archive used to lookup geometric data
     * @desc string, default '', (never None)
     */
    public get object_path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.object_path`)
    }

    /**
     * 
     * @desc enum set in {'VERT', 'POLY', 'UV', 'COLOR'}, default {'VERT'}
     */
    public get read_data(): ('VERT' | 'POLY' | 'UV' | 'COLOR')[] {
        return PythonInterop.getEnumSet(this.interop, `${this.accessor}.read_data`)
    }

    /**
     * 
     * @desc CacheFile
     */
    public set cache_file(value: CacheFile) {
        PythonInterop.setClass(this.interop, `${this.accessor}.cache_file`, value)
    }

    /**
     * Path to the object in the Alembic archive used to lookup geometric data
     * @desc string, default '', (never None)
     */
    public set object_path(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.object_path`, value)
    }

    /**
     * 
     * @desc enum set in {'VERT', 'POLY', 'UV', 'COLOR'}, default {'VERT'}
     */
    public set read_data(value: ('VERT' | 'POLY' | 'UV' | 'COLOR')[]) {
        PythonInterop.setEnumSet(this.interop, `${this.accessor}.read_data`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
