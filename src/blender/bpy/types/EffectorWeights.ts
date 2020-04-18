import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Collection } from './Collection'

/**
 * EffectorWeights
 * 
 * https://docs.blender.org/api/current/bpy.types.EffectorWeights.html
 */
export class EffectorWeights {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * All effector’s weight
     * @desc float in [-200, 200], default 0.0
     */
    public get all(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.all`)
    }

    /**
     * Use force fields when growing hair
     * @desc boolean, default False
     */
    public get apply_to_hair_growing(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.apply_to_hair_growing`)
    }

    /**
     * Boid effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get boid(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.boid`)
    }

    /**
     * Charge effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get charge(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.charge`)
    }

    /**
     * Limit effectors to this collection
     * @desc Collection
     */
    public get collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collection`, Collection)
    }

    /**
     * Curve guide effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get curve_guide(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.curve_guide`)
    }

    /**
     * Drag effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get drag(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.drag`)
    }

    /**
     * Force effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get force(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.force`)
    }

    /**
     * Global gravity weight
     * @desc float in [-200, 200], default 0.0
     */
    public get gravity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.gravity`)
    }

    /**
     * Harmonic effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get harmonic(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.harmonic`)
    }

    /**
     * Lennard-Jones effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get lennardjones(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.lennardjones`)
    }

    /**
     * Magnetic effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get magnetic(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.magnetic`)
    }

    /**
     * Smoke Flow effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get smokeflow(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.smokeflow`)
    }

    /**
     * Texture effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get texture(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture`)
    }

    /**
     * Turbulence effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get turbulence(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.turbulence`)
    }

    /**
     * Vortex effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get vortex(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.vortex`)
    }

    /**
     * Wind effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public get wind(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.wind`)
    }

    /**
     * All effector’s weight
     * @desc float in [-200, 200], default 0.0
     */
    public set all(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.all`, value)
    }

    /**
     * Use force fields when growing hair
     * @desc boolean, default False
     */
    public set apply_to_hair_growing(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.apply_to_hair_growing`, value)
    }

    /**
     * Boid effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set boid(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.boid`, value)
    }

    /**
     * Charge effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set charge(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.charge`, value)
    }

    /**
     * Limit effectors to this collection
     * @desc Collection
     */
    public set collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.collection`, value)
    }

    /**
     * Curve guide effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set curve_guide(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.curve_guide`, value)
    }

    /**
     * Drag effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set drag(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.drag`, value)
    }

    /**
     * Force effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set force(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.force`, value)
    }

    /**
     * Global gravity weight
     * @desc float in [-200, 200], default 0.0
     */
    public set gravity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.gravity`, value)
    }

    /**
     * Harmonic effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set harmonic(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.harmonic`, value)
    }

    /**
     * Lennard-Jones effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set lennardjones(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.lennardjones`, value)
    }

    /**
     * Magnetic effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set magnetic(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.magnetic`, value)
    }

    /**
     * Smoke Flow effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set smokeflow(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.smokeflow`, value)
    }

    /**
     * Texture effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set texture(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture`, value)
    }

    /**
     * Turbulence effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set turbulence(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.turbulence`, value)
    }

    /**
     * Vortex effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set vortex(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.vortex`, value)
    }

    /**
     * Wind effector weight
     * @desc float in [-200, 200], default 0.0
     */
    public set wind(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.wind`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
