import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { wmOwnerID } from './wmOwnerID'

/**
 * wmOwnerIDs
 * 
 * https://docs.blender.org/api/current/bpy.types.wmOwnerIDs.html
 */
export class wmOwnerIDs {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Add ui tag
     * @desc wmOwnerID
     */
    public new(options: { name?: string }): wmOwnerID {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, wmOwnerID)
    }

    /**
     * Remove ui tag
     * @desc void
     */
    public remove(options: { owner_id?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all tags
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
