import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { OperatorProperties } from './OperatorProperties'

/**
 * OperatorMacro
 * 
 * https://docs.blender.org/api/current/bpy.types.OperatorMacro.html
 */
export class OperatorMacro {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc OperatorProperties, (readonly, never None)
     */
    public get properties(): OperatorProperties {
        return PythonInterop.getClass(this.interop, `${this.accessor}.properties`, OperatorProperties)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
