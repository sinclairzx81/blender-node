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

import { Schema, ClassSchema }                                from './schematics/schema'
import { TypeScriptClass }                                    from './generate/class'
import { parse }                                              from './schematics/parse'
import { writeFileSync, readFileSync, mkdirSync, existsSync, write } from 'fs'
import { join, sep, dirname }                                 from 'path'

function get_path(out: string, cls: TypeScriptClass) {
    const fullname = (cls.fullname()).replace(/\./g, sep)
    return join(out, fullname) + '.ts'
}

function generate_classes(out: string, schema: Schema) {
    const classes = schema.classes.map(cls => new TypeScriptClass(schema, cls))
    for(const cls of classes) {
        const path = get_path(out, cls)
        console.log('...writing', path)
        mkdirSync(dirname(path), { recursive: true })
        writeFileSync(path, cls.toString())
    }
}

function generate_ops_index(out: string, schema: Schema) {
    const ignore = [
        'ACTION_OT_duplicate', 'ARMATURE_OT_duplicate', 'ARMATURE_OT_extrude', 'CLIP_OT_add_marker', 
        'CURVE_OT_duplicate', 'CURVE_OT_extrude', 'GPENCIL_OT_duplicate', 'GPENCIL_OT_extrude', 'GRAPH_OT_duplicate',
        'MASK_OT_add_feather_vertex', 'MASK_OT_add_vertex', 'MASK_OT_duplicate', 'MASK_OT_slide_point', 
        'MBALL_OT_duplicate_metaelems', 'MESH_OT_duplicate', 'MESH_OT_extrude_context', 'MESH_OT_extrude_edges_indiv', 
        'MESH_OT_extrude_faces_indiv', 'MESH_OT_extrude_region', 'MESH_OT_extrude_verts_indiv', 'MESH_OT_loopcut',
        'MESH_OT_offset_edge_loops', 'MESH_OT_polybuild_face_at_cursor', 'MESH_OT_polybuild_split_at_cursor',
        'MESH_OT_polybuild_transform_at_cursor', 'MESH_OT_rip', 'MESH_OT_rip_edge', 'NODE_OT_attach',
        'NODE_OT_detach', 'NODE_OT_duplicate', 'NODE_OT_insert_offset', 'NODE_OT_link_viewer',
        'NODE_OT_links_detach', 'NODE_OT_select', 'NODE_OT_translate_attach', 'OBJECT_OT_duplicate',
        'PAINTCURVE_OT_add_point', 'PAINTCURVE_OT_slide', 'SEQUENCER_OT_duplicate', 'TRANSFORM_OT_edge_slide',
        'TRANSFORM_OT_seq_slide', 'TRANSFORM_OT_shrink_fatten', 'TRANSFORM_OT_transform', 'TRANSFORM_OT_translate',
    ]
    const buffer = []
    const types  = schema.classes.filter(type => type.qualifier === 'bpy.ops.' && !ignore.includes(type.name)).map(cls => new TypeScriptClass(schema, cls))
    types.forEach(type => buffer.push(`import { ${type.name()} } from './${type.name()}'`))
    buffer.push(`import { BlenderInterop } from '../../../worker/interop'`)
    buffer.push(`import { PythonInterop }  from '../../../python/interop'`)
    buffer.push(`export class Ops {`)
    buffer.push(`    constructor(private interop: BlenderInterop, private accessor: string) {`)
    buffer.push(`    }`)
    for(const type of types) {
        const property_name = type.name().replace('Operators', '').toLowerCase()
        const accessor = '${this.accessor}'
        buffer.push(`    /** ${type.href} */`)
        buffer.push(`    public get ${property_name}(): ${type.name()} {`)
        buffer.push(`        return new ${type.name()}(this.interop, \`${accessor}.${property_name}\`)`)
        buffer.push(`    }`)
    }
    buffer.push(`}`)
    const content    = buffer.join('\n')
    const index_path = join(out, './bpy/ops/index.ts')
    writeFileSync(index_path, content)
}

function generate_types_index(out: string, schema: Schema) {
    const buffer = []
    for(const type of schema.classes.filter(type => type.qualifier === 'bpy.types.').map(cls => new TypeScriptClass(schema, cls))) {
        buffer.push(`export { ${type.name()} } from './${type.name()}'`)
    }
    const content = buffer.join('\n')
    const index_path = join(out, './bpy/types/index.ts')
    console.log('...writing', index_path)
    writeFileSync(index_path, content)
}


// -----------------------------------------------
// GENERATE
// -----------------------------------------------
if(!existsSync('../../schema.json') || process.argv.includes('--full')) {
    const schema = parse('../../generate/documentation')
    const content = JSON.stringify(schema, null, 2)
    writeFileSync('../../schema.json', content)
}

const content = readFileSync('../../schema.json', 'utf8')
const schema = JSON.parse(content) as Schema

const out    = '../../src/blender'
generate_classes     (out, schema)
generate_types_index (out, schema)
generate_ops_index   (out, schema)
