import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Modifier } from './Modifier'

/**
 * ObjectModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectModifiers.html
 */
export class ObjectModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new modifier
     * @desc Modifier
     */
    public new(options: { name?: string, type?: 'DATA_TRANSFER' | 'MESH_CACHE' | 'MESH_SEQUENCE_CACHE' | 'NORMAL_EDIT' | 'WEIGHTED_NORMAL' | 'UV_PROJECT' | 'UV_WARP' | 'VERTEX_WEIGHT_EDIT' | 'VERTEX_WEIGHT_MIX' | 'VERTEX_WEIGHT_PROXIMITY' | 'ARRAY' | 'BEVEL' | 'BOOLEAN' | 'BUILD' | 'DECIMATE' | 'EDGE_SPLIT' | 'MASK' | 'MIRROR' | 'MULTIRES' | 'REMESH' | 'SCREW' | 'SKIN' | 'SOLIDIFY' | 'SUBSURF' | 'TRIANGULATE' | 'WIREFRAME' | 'WELD' | 'ARMATURE' | 'CAST' | 'CURVE' | 'DISPLACE' | 'HOOK' | 'LAPLACIANDEFORM' | 'LATTICE' | 'MESH_DEFORM' | 'SHRINKWRAP' | 'SIMPLE_DEFORM' | 'SMOOTH' | 'CORRECTIVE_SMOOTH' | 'LAPLACIANSMOOTH' | 'SURFACE_DEFORM' | 'WARP' | 'WAVE' | 'CLOTH' | 'COLLISION' | 'DYNAMIC_PAINT' | 'EXPLODE' | 'OCEAN' | 'PARTICLE_INSTANCE' | 'PARTICLE_SYSTEM' | 'FLUID' | 'SOFT_BODY' | 'SURFACE' }): Modifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, Modifier)
    }

    /**
     * Remove an existing modifier from the object
     * @desc void
     */
    public remove(options: { modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all modifiers from the object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
