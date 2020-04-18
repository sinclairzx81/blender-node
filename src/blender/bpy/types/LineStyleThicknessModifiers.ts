import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { LineStyleThicknessModifier } from './LineStyleThicknessModifier'

/**
 * LineStyleThicknessModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleThicknessModifiers.html
 */
export class LineStyleThicknessModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a thickness modifier to line style
     * @desc LineStyleThicknessModifier
     */
    public new(options: { name?: string, type?: 'ALONG_STROKE' | 'CALLIGRAPHY' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' }): LineStyleThicknessModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, LineStyleThicknessModifier)
    }

    /**
     * Remove a thickness modifier from line style
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
