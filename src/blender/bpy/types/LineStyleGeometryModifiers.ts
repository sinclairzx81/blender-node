import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { LineStyleGeometryModifier } from './LineStyleGeometryModifier'

/**
 * LineStyleGeometryModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.LineStyleGeometryModifiers.html
 */
export class LineStyleGeometryModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a geometry modifier to line style
     * @desc LineStyleGeometryModifier
     */
    public new(options: { name?: string, type?: '2D_OFFSET' | '2D_TRANSFORM' | 'BACKBONE_STRETCHER' | 'BEZIER_CURVE' | 'BLUEPRINT' | 'GUIDING_LINES' | 'PERLIN_NOISE_1D' | 'PERLIN_NOISE_2D' | 'POLYGONIZATION' | 'SAMPLING' | 'SIMPLIFICATION' | 'SINUS_DISPLACEMENT' | 'SPATIAL_NOISE' | 'TIP_REMOVER' }): LineStyleGeometryModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, LineStyleGeometryModifier)
    }

    /**
     * Remove a geometry modifier from line style
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
