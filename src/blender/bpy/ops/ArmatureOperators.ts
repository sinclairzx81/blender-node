import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ARMATURE_OT_duplicate } from './ARMATURE_OT_duplicate'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'
import { ARMATURE_OT_extrude } from './ARMATURE_OT_extrude'

/**
 * ArmatureOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.armature.html
 */
export class ArmatureOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Align selected bones to the active bone (or to their parent)
     * @desc void
     */
    public align(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.align`, {})
    }

    /**
     * Change the visible armature layers
     * @desc void
     */
    public armature_layers(options: { layers?: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.armature_layers`, options)
    }

    /**
     * Automatically renames the selected bones according to which side of the target axis they fall on
     * @desc void
     */
    public autoside_names(options: { type?: 'XAXIS' | 'YAXIS' | 'ZAXIS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.autoside_names`, options)
    }

    /**
     * Change the layers that the selected bones belong to
     * @desc void
     */
    public bone_layers(options: { layers?: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bone_layers`, options)
    }

    /**
     * Add a new bone located at the 3D-Cursor
     * @desc void
     */
    public bone_primitive_add(options: { name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.bone_primitive_add`, options)
    }

    /**
     * Automatically fix alignment of select bones’ axes
     * @desc void
     */
    public calculate_roll(options: { type?: 'POS_X' | 'POS_Z' | 'GLOBAL_POS_X' | 'GLOBAL_POS_Y' | 'GLOBAL_POS_Z' | 'NEG_X' | 'NEG_Z' | 'GLOBAL_NEG_X' | 'GLOBAL_NEG_Y' | 'GLOBAL_NEG_Z' | 'ACTIVE' | 'VIEW' | 'CURSOR', axis_flip?: boolean, axis_only?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calculate_roll`, options)
    }

    /**
     * Create a new bone going from the last selected joint to the mouse position
     * @desc void
     */
    public click_extrude(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.click_extrude`, {})
    }

    /**
     * Remove selected bones from the armature
     * @desc void
     */
    public delete(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete`, {})
    }

    /**
     * Dissolve selected bones from the armature
     * @desc void
     */
    public dissolve(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.dissolve`, {})
    }

    /**
     * Make copies of the selected bones within the same armature
     * @desc void
     */
    public duplicate(options: { do_flip_names?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate`, options)
    }

    /**
     * Make copies of the selected bones within the same armature and move them
     * @desc void
     */
    public duplicate_move(options: { ARMATURE_OT_duplicate?: ARMATURE_OT_duplicate, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Create new bones from the selected joints
     * @desc void
     */
    public extrude(options: { forked?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude`, options)
    }

    /**
     * Create new bones from the selected joints and move them
     * @desc void
     */
    public extrude_forked(options: { ARMATURE_OT_extrude?: ARMATURE_OT_extrude, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_forked`, options)
    }

    /**
     * Create new bones from the selected joints and move them
     * @desc void
     */
    public extrude_move(options: { ARMATURE_OT_extrude?: ARMATURE_OT_extrude, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.extrude_move`, options)
    }

    /**
     * Add bone between selected joint(s) and/or 3D-Cursor
     * @desc void
     */
    public fill(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.fill`, {})
    }

    /**
     * Flips (and corrects) the axis suffixes of the names of selected bones
     * @desc void
     */
    public flip_names(options: { do_strip_numbers?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flip_names`, options)
    }

    /**
     * Tag selected bones to not be visible in Edit Mode
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Make all armature layers visible
     * @desc void
     */
    public layers_show_all(options: { all?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.layers_show_all`, options)
    }

    /**
     * Merge continuous chains of selected bones
     * @desc void
     */
    public merge(options: { type?: 'WITHIN_CHAIN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.merge`, options)
    }

    /**
     * Remove the parent-child relationship between selected bones and their parents
     * @desc void
     */
    public parent_clear(options: { type?: 'CLEAR' | 'DISCONNECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_clear`, options)
    }

    /**
     * Set the active bone as the parent of the selected bones
     * @desc void
     */
    public parent_set(options: { type?: 'CONNECTED' | 'OFFSET' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.parent_set`, options)
    }

    /**
     * Reveal all bones hidden in Edit Mode
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * Clear roll for selected bones
     * @desc void
     */
    public roll_clear(options: { roll?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.roll_clear`, options)
    }

    /**
     * Toggle selection status of all bones
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select immediate parent/children of selected bones
     * @desc void
     */
    public select_hierarchy(options: { direction?: 'PARENT' | 'CHILD', extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_hierarchy`, options)
    }

    /**
     * Deselect those bones at the boundary of each selection region
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select bones related to selected ones by parent/child relationships
     * @desc void
     */
    public select_linked(options: { deselect?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_linked`, options)
    }

    /**
     * Mirror the bone selection
     * @desc void
     */
    public select_mirror(options: { only_active?: boolean, extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_mirror`, options)
    }

    /**
     * Select those bones connected to the initial selection
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Select similar bones by property types
     * @desc void
     */
    public select_similar(options: { type?: 'CHILDREN' | 'CHILDREN_IMMEDIATE' | 'SIBLINGS' | 'LENGTH' | 'DIRECTION' | 'PREFIX' | 'SUFFIX' | 'LAYER' | 'GROUP' | 'SHAPE', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_similar`, options)
    }

    /**
     * Isolate selected bones into a separate armature
     * @desc void
     */
    public separate(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.separate`, {})
    }

    /**
     * Select shortest path between two bones
     * @desc void
     */
    public shortest_path_pick(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shortest_path_pick`, {})
    }

    /**
     * Split off selected bones from connected unselected bones
     * @desc void
     */
    public split(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.split`, {})
    }

    /**
     * Break selected bones into chains of smaller bones
     * @desc void
     */
    public subdivide(options: { number_cuts?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.subdivide`, options)
    }

    /**
     * Change the direction that a chain of bones points in (head <-> tail swap)
     * @desc void
     */
    public switch_direction(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.switch_direction`, {})
    }

    /**
     * Enforce symmetry, make copies of the selection or use existing
     * @desc void
     */
    public symmetrize(options: { direction?: 'NEGATIVE_X' | 'POSITIVE_X' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.symmetrize`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
