import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PoseOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.pose.html
 */
export class PoseOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Apply the current pose as the new rest pose
     * @desc void
     */
    public armature_apply(options: { selected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.armature_apply`, options)
    }

    /**
     * Automatically renames the selected bones according to which side of the target axis they fall on
     * @desc void
     */
    public autoside_names(options: { axis?: 'XAXIS' | 'YAXIS' | 'ZAXIS' }): void {
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
     * Create a suitable breakdown pose on the current frame
     * @desc void
     */
    public breakdown(options: { percentage?: number, prev_frame?: number, next_frame?: number, channels?: 'ALL' | 'LOC' | 'ROT' | 'SIZE' | 'BBONE' | 'CUSTOM', axis_lock?: 'FREE' | 'X' | 'Y' | 'Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.breakdown`, options)
    }

    /**
     * Add a constraint to the active bone
     * @desc void
     */
    public constraint_add(options: { type?: 'CAMERA_SOLVER' | 'FOLLOW_TRACK' | 'OBJECT_SOLVER' | 'COPY_LOCATION' | 'COPY_ROTATION' | 'COPY_SCALE' | 'COPY_TRANSFORMS' | 'LIMIT_DISTANCE' | 'LIMIT_LOCATION' | 'LIMIT_ROTATION' | 'LIMIT_SCALE' | 'MAINTAIN_VOLUME' | 'TRANSFORM' | 'TRANSFORM_CACHE' | 'CLAMP_TO' | 'DAMPED_TRACK' | 'IK' | 'LOCKED_TRACK' | 'SPLINE_IK' | 'STRETCH_TO' | 'TRACK_TO' | 'ACTION' | 'ARMATURE' | 'CHILD_OF' | 'FLOOR' | 'FOLLOW_PATH' | 'PIVOT' | 'SHRINKWRAP' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_add`, options)
    }

    /**
     * Add a constraint to the active bone, with target (where applicable) set to the selected Objects/Bones
     * @desc void
     */
    public constraint_add_with_targets(options: { type?: 'CAMERA_SOLVER' | 'FOLLOW_TRACK' | 'OBJECT_SOLVER' | 'COPY_LOCATION' | 'COPY_ROTATION' | 'COPY_SCALE' | 'COPY_TRANSFORMS' | 'LIMIT_DISTANCE' | 'LIMIT_LOCATION' | 'LIMIT_ROTATION' | 'LIMIT_SCALE' | 'MAINTAIN_VOLUME' | 'TRANSFORM' | 'TRANSFORM_CACHE' | 'CLAMP_TO' | 'DAMPED_TRACK' | 'IK' | 'LOCKED_TRACK' | 'SPLINE_IK' | 'STRETCH_TO' | 'TRACK_TO' | 'ACTION' | 'ARMATURE' | 'CHILD_OF' | 'FLOOR' | 'FOLLOW_PATH' | 'PIVOT' | 'SHRINKWRAP' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraint_add_with_targets`, options)
    }

    /**
     * Clear all the constraints for the selected bones
     * @desc void
     */
    public constraints_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraints_clear`, {})
    }

    /**
     * Copy constraints to other selected bones
     * @desc void
     */
    public constraints_copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.constraints_copy`, {})
    }

    /**
     * Copies the current pose of the selected bones to copy/paste buffer
     * @desc void
     */
    public copy(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.copy`, {})
    }

    /**
     * Flips (and corrects) the axis suffixes of the names of selected bones
     * @desc void
     */
    public flip_names(options: { do_strip_numbers?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flip_names`, options)
    }

    /**
     * Add a new bone group
     * @desc void
     */
    public group_add(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_add`, {})
    }

    /**
     * Add selected bones to the chosen bone group
     * @desc void
     */
    public group_assign(options: { type?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_assign`, options)
    }

    /**
     * Deselect bones of active Bone Group
     * @desc void
     */
    public group_deselect(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_deselect`, {})
    }

    /**
     * Change position of active Bone Group in list of Bone Groups
     * @desc void
     */
    public group_move(options: { direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_move`, options)
    }

    /**
     * Remove the active bone group
     * @desc void
     */
    public group_remove(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_remove`, {})
    }

    /**
     * Select bones in active Bone Group
     * @desc void
     */
    public group_select(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_select`, {})
    }

    /**
     * Sort Bone Groups by their names in ascending order
     * @desc void
     */
    public group_sort(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_sort`, {})
    }

    /**
     * Remove selected bones from all bone groups
     * @desc void
     */
    public group_unassign(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.group_unassign`, {})
    }

    /**
     * Tag selected bones to not be visible in Pose Mode
     * @desc void
     */
    public hide(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide`, options)
    }

    /**
     * Add IK Constraint to the active Bone
     * @desc void
     */
    public ik_add(options: { with_targets?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ik_add`, options)
    }

    /**
     * Remove all IK Constraints from selected bones
     * @desc void
     */
    public ik_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ik_clear`, {})
    }

    /**
     * Reset locations of selected bones to their default values
     * @desc void
     */
    public loc_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.loc_clear`, {})
    }

    /**
     * Paste the stored pose on to the current pose
     * @desc void
     */
    public paste(options: { flipped?: boolean, selected_mask?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paste`, options)
    }

    /**
     * Calculate paths for the selected bones
     * @desc void
     */
    public paths_calculate(options: { start_frame?: number, end_frame?: number, bake_location?: 'HEADS' | 'TAILS' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_calculate`, options)
    }

    /**
     * Clear path caches for all bones, hold Shift key for selected bones only
     * @desc void
     */
    public paths_clear(options: { only_selected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_clear`, options)
    }

    /**
     * Update frame range for motion paths from the Scene’s current frame range
     * @desc void
     */
    public paths_range_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_range_update`, {})
    }

    /**
     * Recalculate paths for bones that already have them
     * @desc void
     */
    public paths_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.paths_update`, {})
    }

    /**
     * Copy selected aspects of the current pose to subsequent poses already keyframed
     * @desc void
     */
    public propagate(options: { mode?: 'WHILE_HELD' | 'NEXT_KEY' | 'LAST_KEY' | 'BEFORE_FRAME' | 'BEFORE_END' | 'SELECTED_KEYS' | 'SELECTED_MARKERS', end_frame?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.propagate`, options)
    }

    /**
     * Exaggerate the current pose in regards to the breakdown pose
     * @desc void
     */
    public push(options: { percentage?: number, prev_frame?: number, next_frame?: number, channels?: 'ALL' | 'LOC' | 'ROT' | 'SIZE' | 'BBONE' | 'CUSTOM', axis_lock?: 'FREE' | 'X' | 'Y' | 'Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.push`, options)
    }

    /**
     * Push the current pose further away from the rest pose
     * @desc void
     */
    public push_rest(options: { percentage?: number, prev_frame?: number, next_frame?: number, channels?: 'ALL' | 'LOC' | 'ROT' | 'SIZE' | 'BBONE' | 'CUSTOM', axis_lock?: 'FREE' | 'X' | 'Y' | 'Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.push_rest`, options)
    }

    /**
     * Flip quaternion values to achieve desired rotations, while maintaining the same orientations
     * @desc void
     */
    public quaternions_flip(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.quaternions_flip`, {})
    }

    /**
     * Make the current pose more similar to its breakdown pose
     * @desc void
     */
    public relax(options: { percentage?: number, prev_frame?: number, next_frame?: number, channels?: 'ALL' | 'LOC' | 'ROT' | 'SIZE' | 'BBONE' | 'CUSTOM', axis_lock?: 'FREE' | 'X' | 'Y' | 'Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.relax`, options)
    }

    /**
     * Make the current pose more similar to the rest pose
     * @desc void
     */
    public relax_rest(options: { percentage?: number, prev_frame?: number, next_frame?: number, channels?: 'ALL' | 'LOC' | 'ROT' | 'SIZE' | 'BBONE' | 'CUSTOM', axis_lock?: 'FREE' | 'X' | 'Y' | 'Z' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.relax_rest`, options)
    }

    /**
     * Reveal all bones hidden in Pose Mode
     * @desc void
     */
    public reveal(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal`, options)
    }

    /**
     * Reset rotations of selected bones to their default values
     * @desc void
     */
    public rot_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rot_clear`, {})
    }

    /**
     * Set the rotation representation used by selected bones
     * @desc void
     */
    public rotation_mode_set(options: { type?: 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.rotation_mode_set`, options)
    }

    /**
     * Reset scaling of selected bones to their default values
     * @desc void
     */
    public scale_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.scale_clear`, {})
    }

    /**
     * Toggle selection status of all bones
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Select bones used as targets for the currently selected bones
     * @desc void
     */
    public select_constraint_target(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_constraint_target`, {})
    }

    /**
     * Select all visible bones grouped by similar properties
     * @desc void
     */
    public select_grouped(options: { extend?: boolean, type?: 'LAYER' | 'GROUP' | 'KEYINGSET' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_grouped`, options)
    }

    /**
     * Select immediate parent/children of selected bones
     * @desc void
     */
    public select_hierarchy(options: { direction?: 'PARENT' | 'CHILD', extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_hierarchy`, options)
    }

    /**
     * Select bones related to selected ones by parent/child relationships
     * @desc void
     */
    public select_linked(options: { extend?: boolean }): void {
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
     * Select bones that are parents of the currently selected bones
     * @desc void
     */
    public select_parent(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_parent`, {})
    }

    /**
     * Reset location, rotation, and scaling of selected bones to their default values
     * @desc void
     */
    public transforms_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.transforms_clear`, {})
    }

    /**
     * Reset pose on selected bones to keyframed state
     * @desc void
     */
    public user_transforms_clear(options: { only_selected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.user_transforms_clear`, options)
    }

    /**
     * Apply final constrained position of pose bones to their transform
     * @desc void
     */
    public visual_transform_apply(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.visual_transform_apply`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
