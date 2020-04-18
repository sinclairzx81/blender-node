import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MBALL_OT_duplicate_metaelems } from './MBALL_OT_duplicate_metaelems'
import { TRANSFORM_OT_translate } from './TRANSFORM_OT_translate'

/**
 * MballOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.mball.html
 */
export class MballOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Delete selected metaelement(s)
     * @desc void
     */
    public delete_metaelems(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.delete_metaelems`, {})
    }

    /**
     * Duplicate selected metaelement(s)
     * @desc void
     */
    public duplicate_metaelems(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_metaelems`, {})
    }

    /**
     * Make copies of the selected metaelements and move them
     * @desc void
     */
    public duplicate_move(options: { MBALL_OT_duplicate_metaelems?: MBALL_OT_duplicate_metaelems, TRANSFORM_OT_translate?: TRANSFORM_OT_translate }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.duplicate_move`, options)
    }

    /**
     * Hide (un)selected metaelement(s)
     * @desc void
     */
    public hide_metaelems(options: { unselected?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_metaelems`, options)
    }

    /**
     * Reveal all hidden metaelements
     * @desc void
     */
    public reveal_metaelems(options: { select?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.reveal_metaelems`, options)
    }

    /**
     * Change selection of all meta elements
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Randomly select metaelements
     * @desc void
     */
    public select_random_metaelems(options: { percent?: number, seed?: number, action?: 'SELECT' | 'DESELECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_random_metaelems`, options)
    }

    /**
     * Select similar metaballs by property types
     * @desc void
     */
    public select_similar(options: { type?: 'TYPE' | 'RADIUS' | 'STIFFNESS' | 'ROTATION', threshold?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_similar`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
