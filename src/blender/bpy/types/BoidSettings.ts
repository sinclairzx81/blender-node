import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { BoidRule } from './BoidRule'
import { BoidState } from './BoidState'

/**
 * BoidSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.BoidSettings.html
 */
export class BoidSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc BoidRule, (readonly)
     */
    public get active_boid_state(): BoidRule {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_boid_state`, BoidRule)
    }

    /**
     * 
     * @desc bpy_prop_collection of BoidState, (readonly)
     */
    public get states(): BlenderCollection<BoidState> & Indexable<BoidState> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.states`, BoidState)
    }

    /**
     * Accuracy of attack
     * @desc float in [0, 1], default 0.0
     */
    public get accuracy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.accuracy`)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public get active_boid_state_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_boid_state_index`)
    }

    /**
     * Boid will fight this times stronger enemy
     * @desc float in [0, 100], default 0.0
     */
    public get aggression(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.aggression`)
    }

    /**
     * Maximum acceleration in air (relative to maximum speed)
     * @desc float in [0, 1], default 0.0
     */
    public get air_acc_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.air_acc_max`)
    }

    /**
     * Maximum angular velocity in air (relative to 180 degrees)
     * @desc float in [0, 1], default 0.0
     */
    public get air_ave_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.air_ave_max`)
    }

    /**
     * Radius of boids personal space in air (% of particle size)
     * @desc float in [0, 10], default 0.0
     */
    public get air_personal_space(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.air_personal_space`)
    }

    /**
     * Maximum speed in air
     * @desc float in [0, 100], default 0.0
     */
    public get air_speed_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.air_speed_max`)
    }

    /**
     * Minimum speed in air (relative to maximum speed)
     * @desc float in [0, 1], default 0.0
     */
    public get air_speed_min(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.air_speed_min`)
    }

    /**
     * Amount of rotation around velocity vector on turns
     * @desc float in [0, 2], default 0.0
     */
    public get bank(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.bank`)
    }

    /**
     * Initial boid health when born
     * @desc float in [0, 100], default 0.0
     */
    public get health(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.health`)
    }

    /**
     * Boid height relative to particle size
     * @desc float in [0, 2], default 0.0
     */
    public get height(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.height`)
    }

    /**
     * Maximum acceleration on land (relative to maximum speed)
     * @desc float in [0, 1], default 0.0
     */
    public get land_acc_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_acc_max`)
    }

    /**
     * Maximum angular velocity on land (relative to 180 degrees)
     * @desc float in [0, 1], default 0.0
     */
    public get land_ave_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_ave_max`)
    }

    /**
     * Maximum speed for jumping
     * @desc float in [0, 100], default 0.0
     */
    public get land_jump_speed(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_jump_speed`)
    }

    /**
     * Radius of boids personal space on land (% of particle size)
     * @desc float in [0, 10], default 0.0
     */
    public get land_personal_space(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_personal_space`)
    }

    /**
     * How smoothly the boids land
     * @desc float in [0, 10], default 0.0
     */
    public get land_smooth(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_smooth`)
    }

    /**
     * Maximum speed on land
     * @desc float in [0, 100], default 0.0
     */
    public get land_speed_max(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_speed_max`)
    }

    /**
     * How strong a force must be to start effecting a boid on land
     * @desc float in [0, 1000], default 0.0
     */
    public get land_stick_force(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.land_stick_force`)
    }

    /**
     * Amount of rotation around side vector
     * @desc float in [0, 2], default 0.0
     */
    public get pitch(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.pitch`)
    }

    /**
     * Maximum distance from which a boid can attack
     * @desc float in [0, 100], default 0.0
     */
    public get range(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.range`)
    }

    /**
     * Maximum caused damage on attack per second
     * @desc float in [0, 100], default 0.0
     */
    public get strength(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.strength`)
    }

    /**
     * Allow boids to climb goal objects
     * @desc boolean, default False
     */
    public get use_climb(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_climb`)
    }

    /**
     * Allow boids to move in air
     * @desc boolean, default False
     */
    public get use_flight(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_flight`)
    }

    /**
     * Allow boids to move on land
     * @desc boolean, default False
     */
    public get use_land(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_land`)
    }

    /**
     * Accuracy of attack
     * @desc float in [0, 1], default 0.0
     */
    public set accuracy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.accuracy`, value)
    }

    /**
     * 
     * @desc int in [0, inf], default 0
     */
    public set active_boid_state_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_boid_state_index`, value)
    }

    /**
     * Boid will fight this times stronger enemy
     * @desc float in [0, 100], default 0.0
     */
    public set aggression(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.aggression`, value)
    }

    /**
     * Maximum acceleration in air (relative to maximum speed)
     * @desc float in [0, 1], default 0.0
     */
    public set air_acc_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.air_acc_max`, value)
    }

    /**
     * Maximum angular velocity in air (relative to 180 degrees)
     * @desc float in [0, 1], default 0.0
     */
    public set air_ave_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.air_ave_max`, value)
    }

    /**
     * Radius of boids personal space in air (% of particle size)
     * @desc float in [0, 10], default 0.0
     */
    public set air_personal_space(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.air_personal_space`, value)
    }

    /**
     * Maximum speed in air
     * @desc float in [0, 100], default 0.0
     */
    public set air_speed_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.air_speed_max`, value)
    }

    /**
     * Minimum speed in air (relative to maximum speed)
     * @desc float in [0, 1], default 0.0
     */
    public set air_speed_min(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.air_speed_min`, value)
    }

    /**
     * Amount of rotation around velocity vector on turns
     * @desc float in [0, 2], default 0.0
     */
    public set bank(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.bank`, value)
    }

    /**
     * Initial boid health when born
     * @desc float in [0, 100], default 0.0
     */
    public set health(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.health`, value)
    }

    /**
     * Boid height relative to particle size
     * @desc float in [0, 2], default 0.0
     */
    public set height(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.height`, value)
    }

    /**
     * Maximum acceleration on land (relative to maximum speed)
     * @desc float in [0, 1], default 0.0
     */
    public set land_acc_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_acc_max`, value)
    }

    /**
     * Maximum angular velocity on land (relative to 180 degrees)
     * @desc float in [0, 1], default 0.0
     */
    public set land_ave_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_ave_max`, value)
    }

    /**
     * Maximum speed for jumping
     * @desc float in [0, 100], default 0.0
     */
    public set land_jump_speed(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_jump_speed`, value)
    }

    /**
     * Radius of boids personal space on land (% of particle size)
     * @desc float in [0, 10], default 0.0
     */
    public set land_personal_space(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_personal_space`, value)
    }

    /**
     * How smoothly the boids land
     * @desc float in [0, 10], default 0.0
     */
    public set land_smooth(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_smooth`, value)
    }

    /**
     * Maximum speed on land
     * @desc float in [0, 100], default 0.0
     */
    public set land_speed_max(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_speed_max`, value)
    }

    /**
     * How strong a force must be to start effecting a boid on land
     * @desc float in [0, 1000], default 0.0
     */
    public set land_stick_force(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.land_stick_force`, value)
    }

    /**
     * Amount of rotation around side vector
     * @desc float in [0, 2], default 0.0
     */
    public set pitch(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.pitch`, value)
    }

    /**
     * Maximum distance from which a boid can attack
     * @desc float in [0, 100], default 0.0
     */
    public set range(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.range`, value)
    }

    /**
     * Maximum caused damage on attack per second
     * @desc float in [0, 100], default 0.0
     */
    public set strength(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.strength`, value)
    }

    /**
     * Allow boids to climb goal objects
     * @desc boolean, default False
     */
    public set use_climb(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_climb`, value)
    }

    /**
     * Allow boids to move in air
     * @desc boolean, default False
     */
    public set use_flight(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_flight`, value)
    }

    /**
     * Allow boids to move on land
     * @desc boolean, default False
     */
    public set use_land(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_land`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
