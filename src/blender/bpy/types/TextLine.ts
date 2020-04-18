import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * TextLine
 * 
 * https://docs.blender.org/api/current/bpy.types.TextLine.html
 */
export class TextLine {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Text in the line
     * @desc string, default '', (never None)
     */
    public get body(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.body`)
    }

    /**
     * Text in the line
     * @desc string, default '', (never None)
     */
    public set body(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.body`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
