import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { LineStyleColorModifier } from './LineStyleColorModifier'

/**
 * LineStyleColorModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleColorModifiers.html
 */
export class LineStyleColorModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a color modifier to line style
     * @desc LineStyleColorModifier
     */
    public new(options: { name?: string, type?: 'ALONG_STROKE' | 'CREASE_ANGLE' | 'CURVATURE_3D' | 'DISTANCE_FROM_CAMERA' | 'DISTANCE_FROM_OBJECT' | 'MATERIAL' | 'NOISE' | 'TANGENT' }): LineStyleColorModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, LineStyleColorModifier)
    }

    /**
     * Remove a color modifier from line style
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
