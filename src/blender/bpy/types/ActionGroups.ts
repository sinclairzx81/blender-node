import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ActionGroup } from './ActionGroup'

/**
 * ActionGroups
 * 
 * https://docs.blender.org/api/current/bpy.types.ActionGroups.html
 */
export class ActionGroups {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Create a new action group and add it to the action
     * @desc ActionGroup
     */
    public new(options: { name?: string }): ActionGroup {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, ActionGroup)
    }

    /**
     * Remove action group
     * @desc void
     */
    public remove(options: { action_group?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
