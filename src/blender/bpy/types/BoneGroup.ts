import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ThemeBoneColorSet } from './ThemeBoneColorSet'

/**
 * BoneGroup
 * 
 * https://docs.blender.org/api/current/bpy.types.BoneGroup.html
 */
export class BoneGroup {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Copy of the colors associated with the group’s color set
     * @desc ThemeBoneColorSet, (readonly, never None)
     */
    public get colors(): ThemeBoneColorSet {
        return PythonInterop.getClass(this.interop, `${this.accessor}.colors`, ThemeBoneColorSet)
    }

    /**
     * Color set is user-defined instead of a fixed theme color set
     * @desc boolean, default False, (readonly)
     */
    public get is_custom_color_set(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_custom_color_set`)
    }

    /**
     * Custom color set to use
     * @desc enum in ['DEFAULT', 'THEME01', 'THEME02', 'THEME03', 'THEME04', 'THEME05', 'THEME06', 'THEME07', 'THEME08', 'THEME09', 'THEME10', 'THEME11', 'THEME12', 'THEME13', 'THEME14', 'THEME15', 'THEME16', 'THEME17', 'THEME18', 'THEME19', 'THEME20', 'CUSTOM'], default 'DEFAULT'
     */
    public get color_set(): 'DEFAULT' | 'THEME01' | 'THEME02' | 'THEME03' | 'THEME04' | 'THEME05' | 'THEME06' | 'THEME07' | 'THEME08' | 'THEME09' | 'THEME10' | 'THEME11' | 'THEME12' | 'THEME13' | 'THEME14' | 'THEME15' | 'THEME16' | 'THEME17' | 'THEME18' | 'THEME19' | 'THEME20' | 'CUSTOM' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.color_set`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Custom color set to use
     * @desc enum in ['DEFAULT', 'THEME01', 'THEME02', 'THEME03', 'THEME04', 'THEME05', 'THEME06', 'THEME07', 'THEME08', 'THEME09', 'THEME10', 'THEME11', 'THEME12', 'THEME13', 'THEME14', 'THEME15', 'THEME16', 'THEME17', 'THEME18', 'THEME19', 'THEME20', 'CUSTOM'], default 'DEFAULT'
     */
    public set color_set(value: 'DEFAULT' | 'THEME01' | 'THEME02' | 'THEME03' | 'THEME04' | 'THEME05' | 'THEME06' | 'THEME07' | 'THEME08' | 'THEME09' | 'THEME10' | 'THEME11' | 'THEME12' | 'THEME13' | 'THEME14' | 'THEME15' | 'THEME16' | 'THEME17' | 'THEME18' | 'THEME19' | 'THEME20' | 'CUSTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_set`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
