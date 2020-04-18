import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { Node } from './Node'
import { NodeInternal } from './NodeInternal'
import { ShaderNode } from './ShaderNode'
import { Text } from './Text'

/**
 * ShaderNodeTexIES
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeTexIES.html
 */
export class ShaderNodeTexIES {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * IES light path
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * Internal IES file
     * @desc Text
     */
    public get ies(): Text {
        return PythonInterop.getClass(this.interop, `${this.accessor}.ies`, Text)
    }

    /**
     * Whether the IES file is loaded from disk or from a Text datablock
     * @desc enum in ['INTERNAL', 'EXTERNAL'], default 'INTERNAL'
     */
    public get mode(): 'INTERNAL' | 'EXTERNAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * IES light path
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * Internal IES file
     * @desc Text
     */
    public set ies(value: Text) {
        PythonInterop.setClass(this.interop, `${this.accessor}.ies`, value)
    }

    /**
     * Whether the IES file is loaded from disk or from a Text datablock
     * @desc enum in ['INTERNAL', 'EXTERNAL'], default 'INTERNAL'
     */
    public set mode(value: 'INTERNAL' | 'EXTERNAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
