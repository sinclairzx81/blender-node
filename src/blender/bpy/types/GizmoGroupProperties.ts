import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * GizmoGroupProperties
 * 
 * https://docs.blender.org/api/current/bpy.types.GizmoGroupProperties.html
 */
export class GizmoGroupProperties {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    [util.inspect.custom]() {
        return this.accessor
    }
}
