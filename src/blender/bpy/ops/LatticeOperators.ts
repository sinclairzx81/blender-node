import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * LatticeOperators
 * 
 * https://docs.blender.org/api/current/bpy.ops.lattice.html
 */
export class LatticeOperators {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Mirror all control points without inverting the lattice deform
     * @desc void
     */
    public flip(options: { axis?: 'U' | 'V' | 'W' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.flip`, options)
    }

    /**
     * Set UVW control points a uniform distance apart
     * @desc void
     */
    public make_regular(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.make_regular`, {})
    }

    /**
     * Change selection of all UVW control points
     * @desc void
     */
    public select_all(options: { action?: 'TOGGLE' | 'SELECT' | 'DESELECT' | 'INVERT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_all`, options)
    }

    /**
     * Deselect vertices at the boundary of each selection region
     * @desc void
     */
    public select_less(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_less`, {})
    }

    /**
     * Select mirrored lattice points
     * @desc void
     */
    public select_mirror(options: { axis?: ('X' | 'Y' | 'Z')[], extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_mirror`, options)
    }

    /**
     * Select vertex directly linked to already selected ones
     * @desc void
     */
    public select_more(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_more`, {})
    }

    /**
     * Randomly select UVW control points
     * @desc void
     */
    public select_random(options: { percent?: number, seed?: number, action?: 'SELECT' | 'DESELECT' }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_random`, options)
    }

    /**
     * Select vertices without a group
     * @desc void
     */
    public select_ungrouped(options: { extend?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_ungrouped`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
