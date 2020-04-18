import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Modifier } from './Modifier'
import { FluidDomainSettings } from './FluidDomainSettings'
import { FluidEffectorSettings } from './FluidEffectorSettings'
import { FluidFlowSettings } from './FluidFlowSettings'

/**
 * FluidModifier
 * 
 * https://docs.blender.org/api/current/bpy.types.FluidModifier.html
 */
export class FluidModifier {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * 
     * @desc FluidDomainSettings, (readonly)
     */
    public get domain_settings(): FluidDomainSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.domain_settings`, FluidDomainSettings)
    }

    /**
     * 
     * @desc FluidEffectorSettings, (readonly)
     */
    public get effector_settings(): FluidEffectorSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.effector_settings`, FluidEffectorSettings)
    }

    /**
     * 
     * @desc FluidFlowSettings, (readonly)
     */
    public get flow_settings(): FluidFlowSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.flow_settings`, FluidFlowSettings)
    }

    /**
     * 
     * @desc enum in ['NONE', 'DOMAIN', 'FLOW', 'EFFECTOR'], default 'NONE'
     */
    public get fluid_type(): 'NONE' | 'DOMAIN' | 'FLOW' | 'EFFECTOR' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.fluid_type`)
    }

    /**
     * 
     * @desc enum in ['NONE', 'DOMAIN', 'FLOW', 'EFFECTOR'], default 'NONE'
     */
    public set fluid_type(value: 'NONE' | 'DOMAIN' | 'FLOW' | 'EFFECTOR') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.fluid_type`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
