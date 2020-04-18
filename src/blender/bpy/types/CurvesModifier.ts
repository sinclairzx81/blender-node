import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { SequenceModifier } from './SequenceModifier'
import { CurveMapping } from './CurveMapping'

/**
 * CurvesModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.CurvesModifier.html
 */
export class CurvesModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc CurveMapping, (readonly)
     */
    public get curve_mapping(): CurveMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.curve_mapping`, CurveMapping)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
