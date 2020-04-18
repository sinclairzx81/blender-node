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
 * ShaderNodeTexMusgrave
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexMusgrave.html
 */
export class ShaderNodeTexMusgrave {

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
     * @desc enum in ['1D', '2D', '3D', '4D'], default '1D'
     */
    public get musgrave_dimensions(): '1D' | '2D' | '3D' | '4D' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.musgrave_dimensions`)
    }

    /**
     * 
     * @desc enum in ['MULTIFRACTAL', 'RIDGED_MULTIFRACTAL', 'HYBRID_MULTIFRACTAL', 'FBM', 'HETERO_TERRAIN'], default 'MULTIFRACTAL'
     */
    public get musgrave_type(): 'MULTIFRACTAL' | 'RIDGED_MULTIFRACTAL' | 'HYBRID_MULTIFRACTAL' | 'FBM' | 'HETERO_TERRAIN' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.musgrave_type`)
    }

    /**
     * 
     * @desc enum in ['1D', '2D', '3D', '4D'], default '1D'
     */
    public set musgrave_dimensions(value: '1D' | '2D' | '3D' | '4D') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.musgrave_dimensions`, value)
    }

    /**
     * 
     * @desc enum in ['MULTIFRACTAL', 'RIDGED_MULTIFRACTAL', 'HYBRID_MULTIFRACTAL', 'FBM', 'HETERO_TERRAIN'], default 'MULTIFRACTAL'
     */
    public set musgrave_type(value: 'MULTIFRACTAL' | 'RIDGED_MULTIFRACTAL' | 'HYBRID_MULTIFRACTAL' | 'FBM' | 'HETERO_TERRAIN') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.musgrave_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
