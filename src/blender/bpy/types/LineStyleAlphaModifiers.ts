import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { LineStyleAlphaModifier } from './LineStyleAlphaModifier'

/**
 * LineStyleAlphaModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleAlphaModifiers.html
 */
export class LineStyleAlphaModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a alpha modifier to line style
     * @desc LineStyleAlphaModifier
     */
    public new(options: { name?: string, type?: 'ALONG_STROKE' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' }): LineStyleAlphaModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, LineStyleAlphaModifier)
    }

    /**
     * Remove a alpha modifier from line style
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
