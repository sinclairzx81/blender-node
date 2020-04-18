import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PackedFile
 * 
 * https://docs.blender.org/api/current/bpy.types.PackedFile.html
 */
export class PackedFile {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Raw data (bytes, exact content of the embedded file)
     * @desc string, default '', (readonly, never None)
     */
    public get data(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.data`)
    }

    /**
     * Size of packed file in bytes
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get size(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.size`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
