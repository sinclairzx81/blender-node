import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { LineStyleModifier } from './LineStyleModifier'

/**
 * LineStyleAlphaModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleAlphaModifier.html
 */
export class LineStyleAlphaModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    [util.inspect.custom]() {
        return this.accessor
    }
}
