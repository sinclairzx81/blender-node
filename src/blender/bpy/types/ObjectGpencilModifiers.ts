import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { GpencilModifier } from './GpencilModifier'

/**
 * ObjectGpencilModifiers
 * 
 * https://docs.blender.org/api/current/bpy.types.ObjectGpencilModifiers.html
 */
export class ObjectGpencilModifiers {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add a new greasepencil_modifier
     * @desc GpencilModifier
     */
    public new(options: { name?: string, type?: 'GP_ARRAY' | 'GP_BUILD' | 'GP_MIRROR' | 'GP_SIMPLIFY' | 'GP_SUBDIV' | 'GP_MULTIPLY' | 'GP_ARMATURE' | 'GP_HOOK' | 'GP_LATTICE' | 'GP_NOISE' | 'GP_OFFSET' | 'GP_SMOOTH' | 'GP_THICK' | 'GP_TIME' | 'GP_COLOR' | 'GP_OPACITY' | 'GP_TINT' }): GpencilModifier {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, GpencilModifier)
    }

    /**
     * Remove an existing greasepencil_modifier from the object
     * @desc void
     */
    public remove(options: { greasepencil_modifier?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all grease pencil modifiers from the object
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
