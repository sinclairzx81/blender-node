import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { Texture } from './Texture'
import { ParticleSystem } from './ParticleSystem'

/**
 * FluidFlowSettings
 * 
 * https://docs.blender.org/api/current/bpy.types.FluidFlowSettings.html
 */
export class FluidFlowSettings {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public get density(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.density`)
    }

    /**
     * Name of vertex group which determines surface emission rate
     * @desc string, default '', (never None)
     */
    public get density_vertex_group(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.density_vertex_group`)
    }

    /**
     * Change flow behavior in the simulation
     * @desc enum in ['INFLOW', 'OUTFLOW', 'GEOMETRY'], default 'INFLOW'
     */
    public get flow_behavior(): 'INFLOW' | 'OUTFLOW' | 'GEOMETRY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.flow_behavior`)
    }

    /**
     * Change how fluid is emitted
     * @desc enum in ['NONE'], default 'NONE'
     */
    public get flow_source(): 'NONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.flow_source`)
    }

    /**
     * Change type of fluid in the simulation
     * @desc enum in ['SMOKE', 'BOTH', 'FIRE', 'LIQUID'], default 'SMOKE'
     */
    public get flow_type(): 'SMOKE' | 'BOTH' | 'FIRE' | 'LIQUID' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.flow_type`)
    }

    /**
     * 
     * @desc float in [0, 10], default 0.0
     */
    public get fuel_amount(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.fuel_amount`)
    }

    /**
     * Texture that controls emission strength
     * @desc Texture
     */
    public get noise_texture(): Texture {
        return PythonInterop.getClass(this.interop, `${this.accessor}.noise_texture`, Texture)
    }

    /**
     * Particle size in simulation cells
     * @desc float in [0.1, 20], default 0.0
     */
    public get particle_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.particle_size`)
    }

    /**
     * Particle systems emitted from the object
     * @desc ParticleSystem
     */
    public get particle_system(): ParticleSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.particle_system`, ParticleSystem)
    }

    /**
     * Color of smoke
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public get smoke_color(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.smoke_color`, 'number', 3)
    }

    /**
     * Number of additional samples to take between frames to improve quality of fast moving flows
     * @desc int in [0, 200], default 0
     */
    public get subframes(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.subframes`)
    }

    /**
     * Controls fluid emission from the mesh surface (higher value results in emission further away from the mesh surface
     * @desc float in [0, 10], default 0.0
     */
    public get surface_distance(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.surface_distance`)
    }

    /**
     * Temperature difference to ambient temperature
     * @desc float in [-10, 10], default 0.0
     */
    public get temperature(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.temperature`)
    }

    /**
     * Texture mapping type
     * @desc enum in ['AUTO', 'UV'], default 'AUTO'
     */
    public get texture_map_type(): 'AUTO' | 'UV' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.texture_map_type`)
    }

    /**
     * Z-offset of texture mapping
     * @desc float in [0, 200], default 0.0
     */
    public get texture_offset(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_offset`)
    }

    /**
     * Size of texture mapping
     * @desc float in [0.01, 10], default 0.0
     */
    public get texture_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.texture_size`)
    }

    /**
     * Only allow given density value in emitter area and will not add up
     * @desc boolean, default False
     */
    public get use_absolute(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_absolute`)
    }

    /**
     * Control when to apply inflow
     * @desc boolean, default False
     */
    public get use_inflow(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_inflow`)
    }

    /**
     * Fluid has some initial velocity when it is emitted
     * @desc boolean, default False
     */
    public get use_initial_velocity(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_initial_velocity`)
    }

    /**
     * Set particle size in simulation cells or use nearest cell
     * @desc boolean, default False
     */
    public get use_particle_size(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_particle_size`)
    }

    /**
     * Treat this object as a planar and unclosed mesh. Fluid will only be emitted from the mesh surface and based on the surface emission value
     * @desc boolean, default False
     */
    public get use_plane_init(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_plane_init`)
    }

    /**
     * Use a texture to control emission strength
     * @desc boolean, default False
     */
    public get use_texture(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_texture`)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public get uv_layer(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.uv_layer`)
    }

    /**
     * Initial velocity in X, Y and Z direction
     * @desc float array of 3 items in [-1000.1, 1000.1], default (0.0, 0.0, 0.0)
     */
    public get velocity_coord(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.velocity_coord`, 'number', 3)
    }

    /**
     * Multiplier of source velocity passed to fluid (source velocity is non-zero only if object is moving)
     * @desc float in [-100, 100], default 0.0
     */
    public get velocity_factor(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_factor`)
    }

    /**
     * Amount of normal directional velocity
     * @desc float in [-100, 100], default 0.0
     */
    public get velocity_normal(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_normal`)
    }

    /**
     * Amount of random velocity
     * @desc float in [0, 10], default 0.0
     */
    public get velocity_random(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.velocity_random`)
    }

    /**
     * Controls fluid emission from within the mesh (higher value results in greater emissions from inside the mesh)
     * @desc float in [0, 1], default 0.0
     */
    public get volume_density(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.volume_density`)
    }

    /**
     * 
     * @desc float in [0, 1], default 0.0
     */
    public set density(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.density`, value)
    }

    /**
     * Name of vertex group which determines surface emission rate
     * @desc string, default '', (never None)
     */
    public set density_vertex_group(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.density_vertex_group`, value)
    }

    /**
     * Change flow behavior in the simulation
     * @desc enum in ['INFLOW', 'OUTFLOW', 'GEOMETRY'], default 'INFLOW'
     */
    public set flow_behavior(value: 'INFLOW' | 'OUTFLOW' | 'GEOMETRY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.flow_behavior`, value)
    }

    /**
     * Change how fluid is emitted
     * @desc enum in ['NONE'], default 'NONE'
     */
    public set flow_source(value: 'NONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.flow_source`, value)
    }

    /**
     * Change type of fluid in the simulation
     * @desc enum in ['SMOKE', 'BOTH', 'FIRE', 'LIQUID'], default 'SMOKE'
     */
    public set flow_type(value: 'SMOKE' | 'BOTH' | 'FIRE' | 'LIQUID') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.flow_type`, value)
    }

    /**
     * 
     * @desc float in [0, 10], default 0.0
     */
    public set fuel_amount(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.fuel_amount`, value)
    }

    /**
     * Texture that controls emission strength
     * @desc Texture
     */
    public set noise_texture(value: Texture) {
        PythonInterop.setClass(this.interop, `${this.accessor}.noise_texture`, value)
    }

    /**
     * Particle size in simulation cells
     * @desc float in [0.1, 20], default 0.0
     */
    public set particle_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.particle_size`, value)
    }

    /**
     * Particle systems emitted from the object
     * @desc ParticleSystem
     */
    public set particle_system(value: ParticleSystem) {
        PythonInterop.setClass(this.interop, `${this.accessor}.particle_system`, value)
    }

    /**
     * Color of smoke
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0)
     */
    public set smoke_color(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.smoke_color`, value)
    }

    /**
     * Number of additional samples to take between frames to improve quality of fast moving flows
     * @desc int in [0, 200], default 0
     */
    public set subframes(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.subframes`, value)
    }

    /**
     * Controls fluid emission from the mesh surface (higher value results in emission further away from the mesh surface
     * @desc float in [0, 10], default 0.0
     */
    public set surface_distance(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.surface_distance`, value)
    }

    /**
     * Temperature difference to ambient temperature
     * @desc float in [-10, 10], default 0.0
     */
    public set temperature(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.temperature`, value)
    }

    /**
     * Texture mapping type
     * @desc enum in ['AUTO', 'UV'], default 'AUTO'
     */
    public set texture_map_type(value: 'AUTO' | 'UV') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.texture_map_type`, value)
    }

    /**
     * Z-offset of texture mapping
     * @desc float in [0, 200], default 0.0
     */
    public set texture_offset(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_offset`, value)
    }

    /**
     * Size of texture mapping
     * @desc float in [0.01, 10], default 0.0
     */
    public set texture_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.texture_size`, value)
    }

    /**
     * Only allow given density value in emitter area and will not add up
     * @desc boolean, default False
     */
    public set use_absolute(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_absolute`, value)
    }

    /**
     * Control when to apply inflow
     * @desc boolean, default False
     */
    public set use_inflow(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_inflow`, value)
    }

    /**
     * Fluid has some initial velocity when it is emitted
     * @desc boolean, default False
     */
    public set use_initial_velocity(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_initial_velocity`, value)
    }

    /**
     * Set particle size in simulation cells or use nearest cell
     * @desc boolean, default False
     */
    public set use_particle_size(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_particle_size`, value)
    }

    /**
     * Treat this object as a planar and unclosed mesh. Fluid will only be emitted from the mesh surface and based on the surface emission value
     * @desc boolean, default False
     */
    public set use_plane_init(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_plane_init`, value)
    }

    /**
     * Use a texture to control emission strength
     * @desc boolean, default False
     */
    public set use_texture(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_texture`, value)
    }

    /**
     * UV map name
     * @desc string, default '', (never None)
     */
    public set uv_layer(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.uv_layer`, value)
    }

    /**
     * Initial velocity in X, Y and Z direction
     * @desc float array of 3 items in [-1000.1, 1000.1], default (0.0, 0.0, 0.0)
     */
    public set velocity_coord(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.velocity_coord`, value)
    }

    /**
     * Multiplier of source velocity passed to fluid (source velocity is non-zero only if object is moving)
     * @desc float in [-100, 100], default 0.0
     */
    public set velocity_factor(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_factor`, value)
    }

    /**
     * Amount of normal directional velocity
     * @desc float in [-100, 100], default 0.0
     */
    public set velocity_normal(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_normal`, value)
    }

    /**
     * Amount of random velocity
     * @desc float in [0, 10], default 0.0
     */
    public set velocity_random(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.velocity_random`, value)
    }

    /**
     * Controls fluid emission from within the mesh (higher value results in greater emissions from inside the mesh)
     * @desc float in [0, 1], default 0.0
     */
    public set volume_density(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.volume_density`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
