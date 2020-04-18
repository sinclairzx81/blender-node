/*--------------------------------------------------------------------------

Blender-Node

The MIT License (MIT)

Copyright (c) 2020 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

import { ClassSchema, ParameterSchema } from './schema'
import { readFileSync } from 'fs'
import { basename }     from 'path'
import * as cheerio     from 'cheerio'

const BASEURL = `https://docs.blender.org/api/current`

function format_descriptor(descriptor: string) {
    descriptor = descriptor.trim()
    // some types are wrapped, so unwrap them.
    if (descriptor.indexOf('(') === 0) {
        descriptor = descriptor.slice(1, descriptor.length - 1)
    }
    // some have trailing fullstops, so remove it.
    if (descriptor.indexOf('.') === descriptor.length - 1) {
        descriptor = descriptor.slice(0, descriptor.length - 1)
    }
    // if we don't have a descriptor length, assume void.
    // note that this may cause issue with some attribute
    // types.
    if (descriptor.length === 0) {
        descriptor = 'void'
    }
    // enum quotes are weird, fix these.
    descriptor = descriptor
        .replace(/‘/g, "'")
        .replace(/’/g, "'")
        .replace(/‘/g, "'")
        .replace(/“/g, "'")
        .replace(/”/g, "'")
        .replace(/"/g, "'")
    return descriptor.trim()
}

/** Parses the contents of 'bpy.types.*' classes. */
export function parse_bpy_type(filename: string): ClassSchema {
    const $ = cheerio.load(readFileSync(filename, 'utf8'))
    const schema: ClassSchema = {
        href: `${BASEURL}/${basename(filename)}`,
        qualifier: '',
        name: '',
        extends: [],
        comment: '',
        readonly_attributes: [],
        attributes: [],
        classmethods: [],
        methods: []
    }
    // resolves classname and qualifier
    const class_info = $('.class')
    const class_qualifier = class_info.find('.descclassname').first().text()
    const class_name = class_info.find('.descname').first().text()
    const class_comment = class_info.find('dd > p').first().text()
    schema.qualifier = class_qualifier
    schema.name      = class_name
    schema.comment   = class_comment

    // resolves base class array
    const base_info = $('p').filter((_, element) => {
        return $(element).text().includes('base classes')
    }).first()
    const extends_info = base_info.find('.reference')
    extends_info.each((_, element) => {
        schema.extends.push($(element).text())
    })

    // find class_data elements (readonly i think)
    const class_readonly_attributes = class_info.find('dd > dl.data')
    class_readonly_attributes.each((_, element) => {
        const name = $(element).find('.descname').text()
        const comment = $(element).find('dd > p').text()
        let type = $(element).find('th').filter((_, element) => {
            return $(element).text().includes('Type')
        }).first().next().text()
        type = format_descriptor(type)
        schema.readonly_attributes.push({ name, comment, desc: type })
    })

    // find class_data elements (readonly i think)
    const class_attributes = class_info.find('dd > dl.attribute')
    class_attributes.each((index, element) => {
        const name = $(element).find('.descname').text()
        const comment = $(element).find('dd > p').text()
        let type = $(element).find('th').filter((_, element) => {
            return $(element).text().includes('Type')
        }).first().next().text()
        type = format_descriptor(type)
        schema.attributes.push({ name, comment, desc: type })
    })


    
    $('.method').each((_, element) => {
        const func = $(element)
        const method_name    = func.find('.descname').text()
        const method_comment = func.find('> dd > p').first().text()
        
        // -------------------------------------------------------------
        // BEGIN: CUSTOM METHODS
        // -------------------------------------------------------------
        if(class_name === 'Gizmo' && method_name === 'target_get_range(target):') {
            return schema.methods.push({
                name: 'target_get_range',
                comment: method_comment,
                parameters: [{ name: 'target', comment: 'Target property name.', desc: 'string' }],
                returns: 'tuple pair'
            })
        }
        if(class_name === 'Gizmo' && method_name === 'target_get_value(target):') {
            return schema.methods.push({
                name: 'target_get_value',
                comment: method_comment,
                parameters: [{ name: 'target', comment: 'Target property name.', desc: 'string' }],
                returns: 'Single value or array based on the target type'
            })
        }
        if(class_name === 'Gizmo' && method_name === 'target_set_handler(target, get, set, range=None):') {
            return schema.methods.push({
                name: 'target_set_handler',
                comment: method_comment,
                parameters: [
                    { name: 'get', comment: 'Function that returns the value for this property (single value or sequence).', desc: 'function' },
                    { name: 'set', comment: 'Function that takes a single value argument and applies it.', desc: 'function' },
                    { name: 'range', comment: ' Function that returns a (min, max) tuple for gizmos that use a range.', desc: 'function' },
                ],
                returns: 'void'
            })
        }
        if(class_name === 'Gizmo' && method_name === 'target_set_value(target):') {
            return schema.methods.push({
                name: 'target_set_value',
                comment: method_comment,
                parameters: [{ name: 'target', comment: 'Target property name.', desc: 'string' }],
                returns: 'void'
            })
        }
        
        // -------------------------------------------------------------
        // END: CUSTOM METHODS
        // -------------------------------------------------------------

        // -------------------------------------------------------------
        // BEGIN: PARAMETER PARSING
        // -------------------------------------------------------------
        const field_name = func.find('tbody').find('th').filter((index, element) => $(element).text().includes('Parameters:'))
        const field_body = field_name.next()

        const parameter_elements = field_body.children().first().is('strong') === false
            ? field_body.find('> ul > li')
            : field_body

        const parameters: ParameterSchema[] = []
        parameter_elements.each((_, element) => {
            const content = $(element).text()

            // -----------------------------------
            // Parameter Fixes
            // -----------------------------------
            if (class_name === 'RenderEngine' &&
                method_name === 'end_result' &&
                content === 'result (RenderResult) – Result') {
                return parameters.push({
                    name: 'result',
                    desc: 'RenderResult',
                    comment: 'Result'
                })
            }
            if (class_name === 'ParticleSystem' &&
                method_name === 'uv_on_emitter' &&
                content === 'particle (Particle, (optional)) – Particle') {
                return parameters.push({
                    name: 'particle',
                    desc: 'Particle, (optional)',
                    comment: 'Particle'
                })
            }
            if (class_name === 'ParticleSystem' &&
                method_name === 'mcol_on_emitter' &&
                content === 'particle (Particle, (never None)) – Particle') {
                return parameters.push({
                    name: 'particle',
                    desc: 'Particle, (optional)',
                    comment: 'Particle'
                })
            }
            if (class_name === 'ParticleSystem' &&
                method_name === 'co_hair' &&
                content === 'object (Object, (never None)) – Object') {
                return parameters.push({
                    name: 'object',
                    desc: 'Object, (never None)',
                    comment: 'Particle'
                })
            }
            if (class_name === 'ParticleHairKey' &&
                method_name === 'co_object' &&
                content === 'object (Object, (never None)) – Object') {
                return parameters.push({
                    name: 'object',
                    desc: 'Object, (never None)',
                    comment: 'Particle'
                })
            }
            if (class_name === 'Gizmo' &&
                method_name === 'draw_preset_facemap' &&
                content === 'object (Object, (never None)) – Object') {
                return parameters.push({
                    name: 'object',
                    desc: 'Object, (never None)',
                    comment: 'Particle'
                })
            }

            // ... usual

            let parameter_element = $(element)
            let parameter_name    = parameter_element.find('> strong').first().text().trim()
            let parameter_type    = parameter_element.find('> em').text().trim().replace('.', '')
            if(parameter_type.length === 0) {
                parameter_type = 'unknown'
            }
            let full_content = parameter_element.text()
            let has_comment = full_content.indexOf('–') !== -1
            let parameter_comment = ''
            if(has_comment) {
                let split = full_content.split('–')
                parameter_comment = split[split.length - 1].trim()
            }
            parameters.push({ 
                name:    parameter_name, 
                desc:    parameter_type, 
                comment: parameter_comment 
            })
        })

        // -------------------------------------------------------------
        // END: PARAMETER PARSING
        // -------------------------------------------------------------
        
        // -------------------------------------------------------------
        // BEGIN: RETURN PARSING
        // -------------------------------------------------------------
        const return_element = func.find('tbody').find('th').filter((index, element) => {
            return $(element).text().includes('Return type:')
        }).next()
        const returns = format_descriptor(return_element.text())

        // -------------------------------------------------------------
        // END: RETURN PARSING
        // -------------------------------------------------------------
        schema.methods.push({
            name: method_name,
            comment: method_comment,
            parameters,
            returns
        })
    })
    $('.classmethod').each((_, element) => {
        const func = $(element)
        const method_name    = func.find('.descname').text()
        const method_comment = func.find('> dd > p').first().text()
        
       

        // -------------------------------------------------------------
        // BEGIN: PARAMETER PARSING
        // -------------------------------------------------------------
        const field_name = func.find('tbody').find('th').filter((index, element) => $(element).text().includes('Parameters:'))
        const field_body = field_name.next()

        const parameter_elements = field_body.children().first().is('strong') === false
            ? field_body.find('> ul > li')
            : field_body

        const parameters: ParameterSchema[] = []
        parameter_elements.each((_, element) => {
            let parameter_element = $(element)
            let parameter_name    = parameter_element.find('> strong').first().text().trim()
            let parameter_type    = parameter_element.find('> em').text().trim().replace('.', '')
            if(parameter_type.length === 0) {
                parameter_type = 'unknown'
            }
            let full_content = parameter_element.text()
            let has_comment = full_content.indexOf('–') !== -1
            let parameter_comment = ''
            if(has_comment) {
                let split = full_content.split('–')
                parameter_comment = split[split.length - 1].trim()
            }
            parameters.push({ 
                name:    parameter_name, 
                desc:    parameter_type, 
                comment: parameter_comment 
            })
        })

        // -------------------------------------------------------------
        // END: PARAMETER PARSING
        // -------------------------------------------------------------
        
        // -------------------------------------------------------------
        // BEGIN: RETURN PARSING
        // -------------------------------------------------------------
        const return_element = func.find('tbody').find('th').filter((index, element) => {
            return $(element).text().includes('Return type:')
        }).next()
        const returns = format_descriptor(return_element.text())

        // -------------------------------------------------------------
        // END: RETURN PARSING
        // -------------------------------------------------------------
        schema.classmethods.push({
            name: method_name,
            comment: method_comment,
            parameters,
            returns
        })
    })
    
    return schema
}