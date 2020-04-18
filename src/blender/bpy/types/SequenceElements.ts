import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { SequenceElement } from './SequenceElement'

/**
 * SequenceElements
 * 
 * https://docs.blender.org/api/current/bpy.types.SequenceElements.html
 */
export class SequenceElements {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Push an image from ImageSequence.directory
     * @desc SequenceElement
     */
    public append(options: { filename?: string }): SequenceElement {
        return PythonInterop.callClass(this.interop, `${this.accessor}.append`, options, SequenceElement)
    }

    /**
     * Pop an image off the collection
     * @desc void
     */
    public pop(options: { index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pop`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
