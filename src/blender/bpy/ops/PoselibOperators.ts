import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * PoselibOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.poselib.html
 */
export class PoselibOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Make action suitable for use as a Pose Library
     * @desc void
     */
    public action_sanitize(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.action_sanitize`, {})
    }

    /**
     * Apply specified Pose Library pose to the rig
     * @desc void
     */
    public apply_pose(options: { pose_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.apply_pose`, options)
    }

    /**
     * Interactively browse poses in 3D-View
     * @desc void
     */
    public browse_interactive(options: { pose_index?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.browse_interactive`, options)
    }

    /**
     * Add New Pose Library to active Object
     * @desc void
     */
    public new(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.new`, {})
    }

    /**
     * Add the current Pose to the active Pose Library
     * @desc void
     */
    public pose_add(options: { frame?: number, name?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pose_add`, options)
    }

    /**
     * Move the pose up or down in the active Pose Library
     * @desc void
     */
    public pose_move(options: { pose?: string, direction?: 'UP' | 'DOWN' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pose_move`, options)
    }

    /**
     * Remove nth pose from the active Pose Library
     * @desc void
     */
    public pose_remove(options: { pose?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pose_remove`, options)
    }

    /**
     * Rename specified pose from the active Pose Library
     * @desc void
     */
    public pose_rename(options: { name?: string, pose?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.pose_rename`, options)
    }

    /**
     * Remove Pose Library from active Object
     * @desc void
     */
    public unlink(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.unlink`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
