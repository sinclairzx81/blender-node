import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * ParticleOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.particle.html
 */
export class ParticleOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Apply a stroke of brush to the particles
     * @desc void
     */
    public brush_edit(options: { stroke?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.brush_edit`, options)
    }

    /**
     * Connect hair to the emitter mesh
     * @desc void
     */
    public connect_hair(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.connect_hair`, options)
    }

    /**
     * Copy particle systems from the active object to selected objects
     * @desc void
     */
    public copy_particle_systems(options: { space?: 'OBJECT' | 'WORLD', remove_target_particles?: boolean, use_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy_particle_systems`, options)
    }

    /**
     * Delete selected particles or keys
     * @desc void
     */
    public delete(options: { type?: 'PARTICLE' | 'KEY' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, options)
    }

    /**
     * Disconnect hair from the emitter mesh
     * @desc void
     */
    public disconnect_hair(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.disconnect_hair`, options)
    }

    /**
     * Duplicate particle system within the active object
     * @desc void
     */
    public duplicate_particle_system(options: { use_duplicate_settings?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_particle_system`, options)
    }

    /**
     * Duplicate the current dupliobject
     * @desc void
     */
    public dupliob_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dupliob_copy`, {})
    }

    /**
     * Move dupli object down in the list
     * @desc void
     */
    public dupliob_move_down(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dupliob_move_down`, {})
    }

    /**
     * Move dupli object up in the list
     * @desc void
     */
    public dupliob_move_up(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dupliob_move_up`, {})
    }

    /**
     * Refresh list of dupli objects and their weights
     * @desc void
     */
    public dupliob_refresh(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dupliob_refresh`, {})
    }

    /**
     * Remove the selected dupliobject
     * @desc void
     */
    public dupliob_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dupliob_remove`, {})
    }

    /**
     * Undo all edition performed on the particle system
     * @desc void
     */
    public edited_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.edited_clear`, {})
    }

    /**
     * Add or remove a Hair Dynamics Preset
     * @desc void
     */
    public hair_dynamics_preset_add(options: { name?: string, remove_name?: boolean, remove_active?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hair_dynamics_preset_add`, options)
    }

    /**
     * Hide selected particles
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Duplicate and mirror the selected particles along the local X axis
     * @desc void
     */
    public mirror(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.mirror`, {})
    }

    /**
     * Add new particle settings
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Add a new particle target
     * @desc void
     */
    public new_target(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new_target`, {})
    }

    /**
     * Toggle particle edit mode
     * @desc void
     */
    public particle_edit_toggle(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.particle_edit_toggle`, {})
    }

    /**
     * Change the number of keys of selected particles (root and tip keys included)
     * @desc void
     */
    public rekey(options: { keys_number?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rekey`, options)
    }

    /**
     * Remove selected particles close enough of others
     * @desc void
     */
    public remove_doubles(options: { threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove_doubles`, options)
    }

    /**
     * Show hidden particles
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * (De)select all particles’ keys
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Deselect boundary selected keys of each particle
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select nearest particle from mouse pointer
     * @desc void
     */
    public select_linked(options: { deselect?: boolean, location?: [number, number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, options)
    }

    /**
     * Select keys linked to boundary selected keys of each particle
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Select a randomly distributed set of hair or points
     * @desc void
     */
    public select_random(options: { percent?: number, seed?: number, action?: 'SELECT' | 'DESELECT', type?: 'HAIR' | 'POINTS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_random`, options)
    }

    /**
     * Select roots of all visible particles
     * @desc void
     */
    public select_roots(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_roots`, options)
    }

    /**
     * Select tips of all visible particles
     * @desc void
     */
    public select_tips(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_tips`, options)
    }

    /**
     * Cut hair to conform to the set shape object
     * @desc void
     */
    public shape_cut(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_cut`, {})
    }

    /**
     * Subdivide selected particles segments (adds keys)
     * @desc void
     */
    public subdivide(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.subdivide`, {})
    }

    /**
     * Move particle target down in the list
     * @desc void
     */
    public target_move_down(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.target_move_down`, {})
    }

    /**
     * Move particle target up in the list
     * @desc void
     */
    public target_move_up(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.target_move_up`, {})
    }

    /**
     * Remove the selected particle target
     * @desc void
     */
    public target_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.target_remove`, {})
    }

    /**
     * Make selected hair the same length
     * @desc void
     */
    public unify_length(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unify_length`, {})
    }

    /**
     * Set the weight of selected keys
     * @desc void
     */
    public weight_set(options: { factor?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.weight_set`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
