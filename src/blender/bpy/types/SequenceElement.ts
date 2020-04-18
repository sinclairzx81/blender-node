import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SequenceElement
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceElement.html
 */
export class SequenceElement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Original image height
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get orig_height(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.orig_height`)
    }

    /**
     * Original image width
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get orig_width(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.orig_width`)
    }

    /**
     * Name of the source file
     * @desc string, default '', (never None)
     */
    public get filename(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filename`)
    }

    /**
     * Name of the source file
     * @desc string, default '', (never None)
     */
    public set filename(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filename`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
