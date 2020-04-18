import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MetaElement
 * 
 * https://docs.blender.org/api/current/bpy.types.MetaElement.html
 */
export class MetaElement {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get co(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.co`, 'number', 3)
    }

    /**
     * Hide element
     * @desc boolean, default False
     */
    public get hide(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide`)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public get radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Normalized quaternion rotation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public get rotation(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation`, 'number', 4)
    }

    /**
     * Size of element, use of components depends on element type
     * @desc float in [0, 20], default 0.0
     */
    public get size_x(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_x`)
    }

    /**
     * Size of element, use of components depends on element type
     * @desc float in [0, 20], default 0.0
     */
    public get size_y(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_y`)
    }

    /**
     * Size of element, use of components depends on element type
     * @desc float in [0, 20], default 0.0
     */
    public get size_z(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.size_z`)
    }

    /**
     * Stiffness defines how much of the element to fill
     * @desc float in [0, 10], default 0.0
     */
    public get stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.stiffness`)
    }

    /**
     * Metaball types
     * @desc enum in ['BALL', 'CAPSULE', 'PLANE', 'ELLIPSOID', 'CUBE'], default 'BALL'
     */
    public get type(): 'BALL' | 'CAPSULE' | 'PLANE' | 'ELLIPSOID' | 'CUBE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Set metaball as negative one
     * @desc boolean, default False
     */
    public get use_negative(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_negative`)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set co(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.co`, value)
    }

    /**
     * Hide element
     * @desc boolean, default False
     */
    public set hide(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide`, value)
    }

    /**
     * 
     * @desc float in [0, inf], default 0.0
     */
    public set radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Normalized quaternion rotation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 0.0, 0.0)
     */
    public set rotation(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation`, value)
    }

    /**
     * Size of element, use of components depends on element type
     * @desc float in [0, 20], default 0.0
     */
    public set size_x(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_x`, value)
    }

    /**
     * Size of element, use of components depends on element type
     * @desc float in [0, 20], default 0.0
     */
    public set size_y(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_y`, value)
    }

    /**
     * Size of element, use of components depends on element type
     * @desc float in [0, 20], default 0.0
     */
    public set size_z(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.size_z`, value)
    }

    /**
     * Stiffness defines how much of the element to fill
     * @desc float in [0, 10], default 0.0
     */
    public set stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.stiffness`, value)
    }

    /**
     * Metaball types
     * @desc enum in ['BALL', 'CAPSULE', 'PLANE', 'ELLIPSOID', 'CUBE'], default 'BALL'
     */
    public set type(value: 'BALL' | 'CAPSULE' | 'PLANE' | 'ELLIPSOID' | 'CUBE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Set metaball as negative one
     * @desc boolean, default False
     */
    public set use_negative(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_negative`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
