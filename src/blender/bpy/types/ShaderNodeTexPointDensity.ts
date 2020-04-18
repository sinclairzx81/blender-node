import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { BlenderObject } from './BlenderObject'
import { ParticleSystem } from './ParticleSystem'

/**
 * ShaderNodeTexPointDensity
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexPointDensity.html
 */
export class ShaderNodeTexPointDensity {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Texture interpolation
     * @desc enum in ['Closest', 'Linear', 'Cubic'], default 'Linear'
     */
    public get interpolation(): 'Closest' | 'Linear' | 'Cubic' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.interpolation`)
    }

    /**
     * Object to take point data from
     * @desc Object
     */
    public get object(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.object`, BlenderObject)
    }

    /**
     * Data to derive color results from
     * @desc enum in ['PARTICLE_AGE', 'PARTICLE_SPEED', 'PARTICLE_VELOCITY'], default 'PARTICLE_AGE'
     */
    public get particle_color_source(): 'PARTICLE_AGE' | 'PARTICLE_SPEED' | 'PARTICLE_VELOCITY' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.particle_color_source`)
    }

    /**
     * Particle System to render as points
     * @desc ParticleSystem
     */
    public get particle_system(): ParticleSystem {
        return PythonInterop.getClass(this.interop, `${this.accessor}.particle_system`, ParticleSystem)
    }

    /**
     * Point data to use as renderable point density
     * @desc enum in ['PARTICLE_SYSTEM', 'OBJECT'], default 'PARTICLE_SYSTEM'
     */
    public get point_source(): 'PARTICLE_SYSTEM' | 'OBJECT' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.point_source`)
    }

    /**
     * Radius from the shaded sample to look for points within
     * @desc float in [0.001, inf], default 0.0
     */
    public get radius(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.radius`)
    }

    /**
     * Resolution used by the texture holding the point density
     * @desc int in [1, 32768], default 0
     */
    public get resolution(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.resolution`)
    }

    /**
     * Coordinate system to calculate voxels in
     * @desc enum in ['OBJECT', 'WORLD'], default 'OBJECT'
     */
    public get space(): 'OBJECT' | 'WORLD' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.space`)
    }

    /**
     * Vertex attribute to use for color
     * @desc string, default '', (never None)
     */
    public get vertex_attribute_name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.vertex_attribute_name`)
    }

    /**
     * Data to derive color results from
     * @desc enum in ['VERTEX_COLOR', 'VERTEX_WEIGHT', 'VERTEX_NORMAL'], default 'VERTEX_COLOR'
     */
    public get vertex_color_source(): 'VERTEX_COLOR' | 'VERTEX_WEIGHT' | 'VERTEX_NORMAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.vertex_color_source`)
    }

    /**
     * Texture interpolation
     * @desc enum in ['Closest', 'Linear', 'Cubic'], default 'Linear'
     */
    public set interpolation(value: 'Closest' | 'Linear' | 'Cubic') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.interpolation`, value)
    }

    /**
     * Object to take point data from
     * @desc Object
     */
    public set object(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.object`, value)
    }

    /**
     * Data to derive color results from
     * @desc enum in ['PARTICLE_AGE', 'PARTICLE_SPEED', 'PARTICLE_VELOCITY'], default 'PARTICLE_AGE'
     */
    public set particle_color_source(value: 'PARTICLE_AGE' | 'PARTICLE_SPEED' | 'PARTICLE_VELOCITY') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.particle_color_source`, value)
    }

    /**
     * Particle System to render as points
     * @desc ParticleSystem
     */
    public set particle_system(value: ParticleSystem) {
        PythonInterop.setClass(this.interop, `${this.accessor}.particle_system`, value)
    }

    /**
     * Point data to use as renderable point density
     * @desc enum in ['PARTICLE_SYSTEM', 'OBJECT'], default 'PARTICLE_SYSTEM'
     */
    public set point_source(value: 'PARTICLE_SYSTEM' | 'OBJECT') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.point_source`, value)
    }

    /**
     * Radius from the shaded sample to look for points within
     * @desc float in [0.001, inf], default 0.0
     */
    public set radius(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.radius`, value)
    }

    /**
     * Resolution used by the texture holding the point density
     * @desc int in [1, 32768], default 0
     */
    public set resolution(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.resolution`, value)
    }

    /**
     * Coordinate system to calculate voxels in
     * @desc enum in ['OBJECT', 'WORLD'], default 'OBJECT'
     */
    public set space(value: 'OBJECT' | 'WORLD') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.space`, value)
    }

    /**
     * Vertex attribute to use for color
     * @desc string, default '', (never None)
     */
    public set vertex_attribute_name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.vertex_attribute_name`, value)
    }

    /**
     * Data to derive color results from
     * @desc enum in ['VERTEX_COLOR', 'VERTEX_WEIGHT', 'VERTEX_NORMAL'], default 'VERTEX_COLOR'
     */
    public set vertex_color_source(value: 'VERTEX_COLOR' | 'VERTEX_WEIGHT' | 'VERTEX_NORMAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.vertex_color_source`, value)
    }

    /**
     * Cache point density data for later calculation
     * @desc void
     */
    public cache_point_density(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cache_point_density`, {})
    }

    /**
     * Calculate point density
     * @desc float array of 1 items in [-inf, inf]
     */
    public calc_point_density(): [number] {
        return PythonInterop.callArray(this.interop, `${this.accessor}.calc_point_density`, {})
    }

    /**
     * Calculate point density
     * @desc void
     */
    public calc_point_density_minmax(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.calc_point_density_minmax`, {})
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
