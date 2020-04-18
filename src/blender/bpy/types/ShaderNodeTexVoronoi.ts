import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { ColorMapping } from './ColorMapping'
import { TexMapping } from './TexMapping'

/**
 * ShaderNodeTexVoronoi
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexVoronoi.html
 */
export class ShaderNodeTexVoronoi {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Color mapping settings
     * @desc ColorMapping, (readonly, never None)
     */
    public get color_mapping(): ColorMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.color_mapping`, ColorMapping)
    }

    /**
     * Texture coordinate mapping settings
     * @desc TexMapping, (readonly, never None)
     */
    public get texture_mapping(): TexMapping {
        return PythonInterop.getClass(this.interop, `${this.accessor}.texture_mapping`, TexMapping)
    }

    /**
     * 
     * @desc enum in ['EUCLIDEAN', 'MANHATTAN', 'CHEBYCHEV', 'MINKOWSKI'], default 'EUCLIDEAN'
     */
    public get distance(): 'EUCLIDEAN' | 'MANHATTAN' | 'CHEBYCHEV' | 'MINKOWSKI' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.distance`)
    }

    /**
     * 
     * @desc enum in ['F1', 'F2', 'SMOOTH_F1', 'DISTANCE_TO_EDGE', 'N_SPHERE_RADIUS'], default 'F1'
     */
    public get feature(): 'F1' | 'F2' | 'SMOOTH_F1' | 'DISTANCE_TO_EDGE' | 'N_SPHERE_RADIUS' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.feature`)
    }

    /**
     * 
     * @desc enum in ['1D', '2D', '3D', '4D'], default '1D'
     */
    public get voronoi_dimensions(): '1D' | '2D' | '3D' | '4D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.voronoi_dimensions`)
    }

    /**
     * 
     * @desc enum in ['EUCLIDEAN', 'MANHATTAN', 'CHEBYCHEV', 'MINKOWSKI'], default 'EUCLIDEAN'
     */
    public set distance(value: 'EUCLIDEAN' | 'MANHATTAN' | 'CHEBYCHEV' | 'MINKOWSKI') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.distance`, value)
    }

    /**
     * 
     * @desc enum in ['F1', 'F2', 'SMOOTH_F1', 'DISTANCE_TO_EDGE', 'N_SPHERE_RADIUS'], default 'F1'
     */
    public set feature(value: 'F1' | 'F2' | 'SMOOTH_F1' | 'DISTANCE_TO_EDGE' | 'N_SPHERE_RADIUS') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.feature`, value)
    }

    /**
     * 
     * @desc enum in ['1D', '2D', '3D', '4D'], default '1D'
     */
    public set voronoi_dimensions(value: '1D' | '2D' | '3D' | '4D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.voronoi_dimensions`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
