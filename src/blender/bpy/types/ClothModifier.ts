import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { ClothCollisionSettings } from './ClothCollisionSettings'
import { PointCache } from './PointCache'
import { ClothSettings } from './ClothSettings'
import { ClothSolverResult } from './ClothSolverResult'

/**
 * ClothModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.ClothModifier.html
 */
export class ClothModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc ClothCollisionSettings, (readonly, never None)
     */
    public get collision_settings(): ClothCollisionSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collision_settings`, ClothCollisionSettings)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get hair_grid_max(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.hair_grid_max`, 'number', 3)
    }

    /**
     * 
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get hair_grid_min(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.hair_grid_min`, 'number', 3)
    }

    /**
     * 
     * @desc int array of 3 items in [-inf, inf], default (0, 0, 0), (readonly)
     */
    public get hair_grid_resolution(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.hair_grid_resolution`, 'number', 3)
    }

    /**
     * 
     * @desc PointCache, (readonly, never None)
     */
    public get point_cache(): PointCache {
        return PythonInterop.getClass(this.interop, `${this.accessor}.point_cache`, PointCache)
    }

    /**
     * 
     * @desc ClothSettings, (readonly, never None)
     */
    public get settings(): ClothSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.settings`, ClothSettings)
    }

    /**
     * 
     * @desc ClothSolverResult, (readonly)
     */
    public get solver_result(): ClothSolverResult {
        return PythonInterop.getClass(this.interop, `${this.accessor}.solver_result`, ClothSolverResult)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
