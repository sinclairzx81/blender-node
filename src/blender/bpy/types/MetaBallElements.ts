import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { MetaElement } from './MetaElement'

/**
 * MetaBallElements
 * 
 * https://docs.blender.org/api/current/bpy.types.MetaBallElements.html
 */
export class MetaBallElements {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Last selected element
     * @desc MetaElement, (readonly)
     */
    public get active(): MetaElement {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active`, MetaElement)
    }

    /**
     * Add a new element to the metaball
     * @desc MetaElement
     */
    public new(options: { type?: 'BALL' | 'CAPSULE' | 'PLANE' | 'ELLIPSOID' | 'CUBE' }): MetaElement {
        return PythonInterop.callClass(this.interop, `${this.accessor}.new`, options, MetaElement)
    }

    /**
     * Remove an element from the metaball
     * @desc void
     */
    public remove(options: { element?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.remove`, options)
    }

    /**
     * Remove all elements from the metaball
     * @desc void
     */
    public clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.clear`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
