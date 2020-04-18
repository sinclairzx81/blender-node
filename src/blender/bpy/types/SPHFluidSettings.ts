import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * SPHFluidSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.SPHFluidSettings.html
 */
export class SPHFluidSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Artificial buoyancy force in negative gravity direction based on pressure differences inside the fluid
     * @desc float in [0, 10], default 0.0
     */
    public get buoyancy(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.buoyancy`)
    }

    /**
     * Fluid interaction radius
     * @desc float in [0, 20], default 0.0
     */
    public get fluid_radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fluid_radius`)
    }

    /**
     * Linear viscosity
     * @desc float in [0, 100], default 0.0
     */
    public get linear_viscosity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.linear_viscosity`)
    }

    /**
     * How much the spring rest length can change after the elastic limit is crossed
     * @desc float in [0, 100], default 0.0
     */
    public get plasticity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.plasticity`)
    }

    /**
     * How strongly the fluid tries to keep from clustering (factor of stiffness)
     * @desc float in [0, 100], default 0.0
     */
    public get repulsion(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.repulsion`)
    }

    /**
     * Fluid rest density
     * @desc float in [0, 10000], default 0.0
     */
    public get rest_density(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rest_density`)
    }

    /**
     * Spring rest length (factor of particle radius)
     * @desc float in [0, 2], default 0.0
     */
    public get rest_length(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.rest_length`)
    }

    /**
     * The code used to calculate internal forces on particles
     * @desc enum in ['DDR', 'CLASSICAL'], default 'DDR'
     */
    public get solver(): 'DDR' | 'CLASSICAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.solver`)
    }

    /**
     * Spring force
     * @desc float in [0, 100], default 0.0
     */
    public get spring_force(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.spring_force`)
    }

    /**
     * Create springs for this number of frames since particles birth (0 is always)
     * @desc int in [0, 100], default 0
     */
    public get spring_frames(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.spring_frames`)
    }

    /**
     * Creates viscosity for expanding fluid
     * @desc float in [0, 100], default 0.0
     */
    public get stiff_viscosity(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.stiff_viscosity`)
    }

    /**
     * How incompressible the fluid is (speed of sound)
     * @desc float in [0, 1000], default 0.0
     */
    public get stiffness(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.stiffness`)
    }

    /**
     * Density is calculated as a factor of default density (depends on particle size)
     * @desc boolean, default False
     */
    public get use_factor_density(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_factor_density`)
    }

    /**
     * Interaction radius is a factor of 4 * particle size
     * @desc boolean, default False
     */
    public get use_factor_radius(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_factor_radius`)
    }

    /**
     * Repulsion is a factor of stiffness
     * @desc boolean, default False
     */
    public get use_factor_repulsion(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_factor_repulsion`)
    }

    /**
     * Spring rest length is a factor of 2 * particle size
     * @desc boolean, default False
     */
    public get use_factor_rest_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_factor_rest_length`)
    }

    /**
     * Stiff viscosity is a factor of normal viscosity
     * @desc boolean, default False
     */
    public get use_factor_stiff_viscosity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_factor_stiff_viscosity`)
    }

    /**
     * Use the initial length as spring rest length instead of 2 * particle size
     * @desc boolean, default False
     */
    public get use_initial_rest_length(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_initial_rest_length`)
    }

    /**
     * Use viscoelastic springs instead of Hooke’s springs
     * @desc boolean, default False
     */
    public get use_viscoelastic_springs(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_viscoelastic_springs`)
    }

    /**
     * How much the spring has to be stretched/compressed in order to change it’s rest length
     * @desc float in [0, 1], default 0.0
     */
    public get yield_ratio(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.yield_ratio`)
    }

    /**
     * Artificial buoyancy force in negative gravity direction based on pressure differences inside the fluid
     * @desc float in [0, 10], default 0.0
     */
    public set buoyancy(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.buoyancy`, value)
    }

    /**
     * Fluid interaction radius
     * @desc float in [0, 20], default 0.0
     */
    public set fluid_radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fluid_radius`, value)
    }

    /**
     * Linear viscosity
     * @desc float in [0, 100], default 0.0
     */
    public set linear_viscosity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.linear_viscosity`, value)
    }

    /**
     * How much the spring rest length can change after the elastic limit is crossed
     * @desc float in [0, 100], default 0.0
     */
    public set plasticity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.plasticity`, value)
    }

    /**
     * How strongly the fluid tries to keep from clustering (factor of stiffness)
     * @desc float in [0, 100], default 0.0
     */
    public set repulsion(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.repulsion`, value)
    }

    /**
     * Fluid rest density
     * @desc float in [0, 10000], default 0.0
     */
    public set rest_density(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rest_density`, value)
    }

    /**
     * Spring rest length (factor of particle radius)
     * @desc float in [0, 2], default 0.0
     */
    public set rest_length(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.rest_length`, value)
    }

    /**
     * The code used to calculate internal forces on particles
     * @desc enum in ['DDR', 'CLASSICAL'], default 'DDR'
     */
    public set solver(value: 'DDR' | 'CLASSICAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.solver`, value)
    }

    /**
     * Spring force
     * @desc float in [0, 100], default 0.0
     */
    public set spring_force(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.spring_force`, value)
    }

    /**
     * Create springs for this number of frames since particles birth (0 is always)
     * @desc int in [0, 100], default 0
     */
    public set spring_frames(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.spring_frames`, value)
    }

    /**
     * Creates viscosity for expanding fluid
     * @desc float in [0, 100], default 0.0
     */
    public set stiff_viscosity(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.stiff_viscosity`, value)
    }

    /**
     * How incompressible the fluid is (speed of sound)
     * @desc float in [0, 1000], default 0.0
     */
    public set stiffness(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.stiffness`, value)
    }

    /**
     * Density is calculated as a factor of default density (depends on particle size)
     * @desc boolean, default False
     */
    public set use_factor_density(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_factor_density`, value)
    }

    /**
     * Interaction radius is a factor of 4 * particle size
     * @desc boolean, default False
     */
    public set use_factor_radius(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_factor_radius`, value)
    }

    /**
     * Repulsion is a factor of stiffness
     * @desc boolean, default False
     */
    public set use_factor_repulsion(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_factor_repulsion`, value)
    }

    /**
     * Spring rest length is a factor of 2 * particle size
     * @desc boolean, default False
     */
    public set use_factor_rest_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_factor_rest_length`, value)
    }

    /**
     * Stiff viscosity is a factor of normal viscosity
     * @desc boolean, default False
     */
    public set use_factor_stiff_viscosity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_factor_stiff_viscosity`, value)
    }

    /**
     * Use the initial length as spring rest length instead of 2 * particle size
     * @desc boolean, default False
     */
    public set use_initial_rest_length(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_initial_rest_length`, value)
    }

    /**
     * Use viscoelastic springs instead of Hooke’s springs
     * @desc boolean, default False
     */
    public set use_viscoelastic_springs(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_viscoelastic_springs`, value)
    }

    /**
     * How much the spring has to be stretched/compressed in order to change it’s rest length
     * @desc float in [0, 1], default 0.0
     */
    public set yield_ratio(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.yield_ratio`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
