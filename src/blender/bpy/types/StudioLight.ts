import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { UserSolidLight } from './UserSolidLight'

/**
 * StudioLight
 * 
 * https://docs.blender.org/api/current/bpy.types.StudioLight.html
 */
export class StudioLight {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Studio light image file has separate “diffuse” and “specular” passes
     * @desc boolean, default False, (readonly)
     */
    public get has_specular_highlight_pass(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.has_specular_highlight_pass`)
    }

    /**
     * 
     * @desc int in [-inf, inf], default 0, (readonly)
     */
    public get index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.index`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_user_defined(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_user_defined`)
    }

    /**
     * Color of the ambient light that uniformly lit the scene
     * @desc float array of 3 items in [0, inf], default (0.0, 0.0, 0.0), (readonly)
     */
    public get light_ambient(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.light_ambient`, 'number', 3)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * 
     * @desc string, default '', (readonly, never None)
     */
    public get path(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path`)
    }

    /**
     * Path where the irradiance cache is stored
     * @desc string, default '', (readonly, never None)
     */
    public get path_irr_cache(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path_irr_cache`)
    }

    /**
     * Path where the spherical harmonics cache is stored
     * @desc string, default '', (readonly, never None)
     */
    public get path_sh_cache(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.path_sh_cache`)
    }

    /**
     * Lights user to display objects in solid draw mode
     * @desc bpy_prop_collection of UserSolidLight, (readonly)
     */
    public get solid_lights(): BlenderCollection<UserSolidLight> & Indexable<UserSolidLight> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.solid_lights`, UserSolidLight)
    }

    /**
     * 
     * @desc float multi-dimensional array of 4 * 3 items in [0, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0)), (readonly)
     */
    public get spherical_harmonics_coefficients(): [[number, number, number], [number, number, number], [number, number, number], [number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.spherical_harmonics_coefficients`, 'number', 4, 3)
    }

    /**
     * 
     * @desc enum in ['STUDIO', 'WORLD', 'MATCAP'], default 'STUDIO', (readonly)
     */
    public get type(): 'STUDIO' | 'WORLD' | 'MATCAP' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
