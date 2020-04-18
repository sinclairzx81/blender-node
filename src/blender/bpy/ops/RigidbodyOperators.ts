import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * RigidbodyOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.rigidbody.html
 */
export class RigidbodyOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Bake rigid body transformations of selected objects to keyframes
     * @desc void
     */
    public bake_to_keyframes(options: { frame_start?: number, frame_end?: number, step?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bake_to_keyframes`, options)
    }

    /**
     * Create rigid body constraints between selected rigid bodies
     * @desc void
     */
    public connect(options: { con_type?: 'FIXED' | 'POINT' | 'HINGE' | 'SLIDER' | 'PISTON' | 'GENERIC' | 'GENERIC_SPRING' | 'MOTOR', pivot_type?: 'CENTER' | 'ACTIVE' | 'SELECTED', connection_pattern?: 'SELECTED_TO_ACTIVE' | 'CHAIN_DISTANCE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.connect`, options)
    }

    /**
     * Add Rigid Body Constraint to active object
     * @desc void
     */
    public constraint_add(options: { type?: 'FIXED' | 'POINT' | 'HINGE' | 'SLIDER' | 'PISTON' | 'GENERIC' | 'GENERIC_SPRING' | 'MOTOR' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_add`, options)
    }

    /**
     * Remove Rigid Body Constraint from Object
     * @desc void
     */
    public constraint_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_remove`, {})
    }

    /**
     * Automatically calculate mass values for Rigid Body Objects based on volume
     * @desc void
     */
    public mass_calculate(options: { material?: 'DEFAULT', density?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mass_calculate`, options)
    }

    /**
     * Add active object as Rigid Body
     * @desc void
     */
    public object_add(options: { type?: 'ACTIVE' | 'PASSIVE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.object_add`, options)
    }

    /**
     * Remove Rigid Body settings from Object
     * @desc void
     */
    public object_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.object_remove`, {})
    }

    /**
     * Copy Rigid Body settings from active object to selected
     * @desc void
     */
    public object_settings_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.object_settings_copy`, {})
    }

    /**
     * Add selected objects as Rigid Bodies
     * @desc void
     */
    public objects_add(options: { type?: 'ACTIVE' | 'PASSIVE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objects_add`, options)
    }

    /**
     * Remove selected objects from Rigid Body simulation
     * @desc void
     */
    public objects_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.objects_remove`, {})
    }

    /**
     * Change collision shapes for selected Rigid Body Objects
     * @desc void
     */
    public shape_change(options: { type?: 'BOX' | 'SPHERE' | 'CAPSULE' | 'CYLINDER' | 'CONE' | 'CONVEX_HULL' | 'MESH' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_change`, options)
    }

    /**
     * Add Rigid Body simulation world to the current scene
     * @desc void
     */
    public world_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.world_add`, {})
    }

    /**
     * Remove Rigid Body simulation world from the current scene
     * @desc void
     */
    public world_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.world_remove`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
