import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ChannelDriverVariables } from './ChannelDriverVariables'
import { DriverVariable } from './DriverVariable'

/**
 * Driver
 * 
 * https://docs.blender.org/api/current/bpy.types.Driver.html
 */
export class Driver {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * The scripted expression can be evaluated without using the full python interpreter
     * @desc boolean, default False, (readonly)
     */
    public get is_simple_expression(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_simple_expression`)
    }

    /**
     * Properties acting as inputs for this driver
     * @desc ChannelDriverVariables bpy_prop_collection of DriverVariable, (readonly)
     */
    public get variables(): BlenderCollection<DriverVariable> & Indexable<DriverVariable> & ChannelDriverVariables {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.variables`, ChannelDriverVariables, DriverVariable)
    }

    /**
     * Expression to use for Scripted Expression
     * @desc string, default '', (never None)
     */
    public get expression(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.expression`)
    }

    /**
     * Driver could not be evaluated in past, so should be skipped
     * @desc boolean, default False
     */
    public get is_valid(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_valid`)
    }

    /**
     * Driver type
     * @desc enum in ['AVERAGE', 'SUM', 'SCRIPTED', 'MIN', 'MAX'], default 'AVERAGE'
     */
    public get type(): 'AVERAGE' | 'SUM' | 'SCRIPTED' | 'MIN' | 'MAX' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * Include a ‘self’ variable in the name-space, so drivers can easily reference the data being modified (object, bone, etc…)
     * @desc boolean, default False
     */
    public get use_self(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_self`)
    }

    /**
     * Expression to use for Scripted Expression
     * @desc string, default '', (never None)
     */
    public set expression(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.expression`, value)
    }

    /**
     * Driver could not be evaluated in past, so should be skipped
     * @desc boolean, default False
     */
    public set is_valid(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.is_valid`, value)
    }

    /**
     * Driver type
     * @desc enum in ['AVERAGE', 'SUM', 'SCRIPTED', 'MIN', 'MAX'], default 'AVERAGE'
     */
    public set type(value: 'AVERAGE' | 'SUM' | 'SCRIPTED' | 'MIN' | 'MAX') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.type`, value)
    }

    /**
     * Include a ‘self’ variable in the name-space, so drivers can easily reference the data being modified (object, bone, etc…)
     * @desc boolean, default False
     */
    public set use_self(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_self`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
