import { Schema, ParameterSchema } from '../../generate/schematics/schema'
import { TypeScriptType } from './type'

export class TypeScriptParameter {
    constructor(private global: Schema, private local: ParameterSchema) {}
    public comment(): string {
        return this.local.comment
    }
    public name(): string {
        return this.local.name
    }
    public type(): TypeScriptType {
        return new TypeScriptType(this.global, this.local.desc)
    }

    public toString(): string {
        return `${this.name()}?: ${this.type().toString()}`
    }
}
