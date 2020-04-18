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
 * ShaderNodeScript
 * 
 * https://docs.blender.org/api/current/bpy.types.ShaderNodeScript.html
 */
export class ShaderNodeScript {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Compile bytecode for shader script node
     * @desc string, default '', (never None)
     */
    public get bytecode(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bytecode`)
    }

    /**
     * Hash of compile bytecode, for quick equality checking
     * @desc string, default '', (never None)
     */
    public get bytecode_hash(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.bytecode_hash`)
    }

    /**
     * Shader script path
     * @desc string, default '', (never None)
     */
    public get filepath(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.filepath`)
    }

    /**
     * 
     * @desc enum in ['INTERNAL', 'EXTERNAL'], default 'INTERNAL'
     */
    public get mode(): 'INTERNAL' | 'EXTERNAL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Internal shader script to define the shader
     * @desc Text
     */
    public get script(): Text {
        return PythonInterop.getClass(this.interop, `${this.accessor}.script`, Text)
    }

    /**
     * Automatically update the shader when the .osl file changes (external scripts only)
     * @desc boolean, default False
     */
    public get use_auto_update(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_auto_update`)
    }

    /**
     * Compile bytecode for shader script node
     * @desc string, default '', (never None)
     */
    public set bytecode(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bytecode`, value)
    }

    /**
     * Hash of compile bytecode, for quick equality checking
     * @desc string, default '', (never None)
     */
    public set bytecode_hash(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.bytecode_hash`, value)
    }

    /**
     * Shader script path
     * @desc string, default '', (never None)
     */
    public set filepath(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.filepath`, value)
    }

    /**
     * 
     * @desc enum in ['INTERNAL', 'EXTERNAL'], default 'INTERNAL'
     */
    public set mode(value: 'INTERNAL' | 'EXTERNAL') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.mode`, value)
    }

    /**
     * Internal shader script to define the shader
     * @desc Text
     */
    public set script(value: Text) {
        PythonInterop.setClass(this.interop, `${this.accessor}.script`, value)
    }

    /**
     * Automatically update the shader when the .osl file changes (external scripts only)
     * @desc boolean, default False
     */
    public set use_auto_update(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_auto_update`, value)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
