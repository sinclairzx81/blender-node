import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { FCurve } from './FCurve'
import { ThemeBoneColorSet } from './ThemeBoneColorSet'

/**
 * ActionGroup
 * 
 * https://docs.blender.org/api/current/bpy.types.ActionGroup.html
 */
export class ActionGroup {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * F-Curves in this group
     * @desc bpy_prop_collection of FCurve, (readonly)
     */
    public get channels(): BlenderCollection<FCurve> & Indexable<FCurve> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.channels`, FCurve)
    }

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
     * Action group is locked
     * @desc boolean, default False
     */
    public get lock(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock`)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public get name(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.name`)
    }

    /**
     * Action group is selected
     * @desc boolean, default False
     */
    public get select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.select`)
    }

    /**
     * Action group is expanded except in graph editor
     * @desc boolean, default False
     */
    public get show_expanded(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded`)
    }

    /**
     * Action group is expanded in graph editor
     * @desc boolean, default False
     */
    public get show_expanded_graph(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_expanded_graph`)
    }

    /**
     * Custom color set to use
     * @desc enum in ['DEFAULT', 'THEME01', 'THEME02', 'THEME03', 'THEME04', 'THEME05', 'THEME06', 'THEME07', 'THEME08', 'THEME09', 'THEME10', 'THEME11', 'THEME12', 'THEME13', 'THEME14', 'THEME15', 'THEME16', 'THEME17', 'THEME18', 'THEME19', 'THEME20', 'CUSTOM'], default 'DEFAULT'
     */
    public set color_set(value: 'DEFAULT' | 'THEME01' | 'THEME02' | 'THEME03' | 'THEME04' | 'THEME05' | 'THEME06' | 'THEME07' | 'THEME08' | 'THEME09' | 'THEME10' | 'THEME11' | 'THEME12' | 'THEME13' | 'THEME14' | 'THEME15' | 'THEME16' | 'THEME17' | 'THEME18' | 'THEME19' | 'THEME20' | 'CUSTOM') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.color_set`, value)
    }

    /**
     * Action group is locked
     * @desc boolean, default False
     */
    public set lock(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock`, value)
    }

    /**
     * 
     * @desc string, default '', (never None)
     */
    public set name(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.name`, value)
    }

    /**
     * Action group is selected
     * @desc boolean, default False
     */
    public set select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.select`, value)
    }

    /**
     * Action group is expanded except in graph editor
     * @desc boolean, default False
     */
    public set show_expanded(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded`, value)
    }

    /**
     * Action group is expanded in graph editor
     * @desc boolean, default False
     */
    public set show_expanded_graph(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_expanded_graph`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
