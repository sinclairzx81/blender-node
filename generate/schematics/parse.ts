/*--------------------------------------------------------------------------

blender-node

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

import { readdirSync }    from 'fs'
import { join }           from 'path'
import { resolve }        from '../generate/resolve'
import { Schema }         from './schema'
import { parse_bpy_type } from './parse_bpy_type'
import { parse_bpy_op }   from './parse_bpy_op'



function create_empty_class(qualifier: string, name: string) {
    return {
        name,
        qualifier,
        href: '',
        comment: '',
        extends: [],
        attributes: [],
        readonly_attributes: [],
        classmethods: [],
        methods: [],
    }
}

/** Parses the blender python documentation */
export function parse(docPath: string): Schema {
    const schema: Schema = {
        classes: []
    }

    // ---------------------------------------------------------------
    // Resolve bpy.ops. official python docs (2.82a)
    // ---------------------------------------------------------------
    
    for(const filename of readdirSync(docPath).filter(name => name.includes('bpy.ops.'))) {
        const fullpath = join(docPath, filename)
        console.log('parsing...', fullpath)
        const _class = parse_bpy_op(fullpath)
        if(_class.name.trim().length > 0) {
            schema.classes.push(_class)
        }
    }

    // ---------------------------------------------------------------
    // Rename Op classes
    // ---------------------------------------------------------------

    for(const op of schema.classes.filter(op => op.qualifier === 'bpy.ops.')) {
        op.name = op.name.charAt(0).toUpperCase() + op.name.substring(1) + 'Operators'
    }

    // ---------------------------------------------------------------
    // Resolve bpy.types. official python docs (2.82a)
    // ---------------------------------------------------------------

    for(const filename of readdirSync(docPath).filter(name => name.includes('bpy.types.'))) {
        const fullpath = join(docPath, filename)
        console.log('parsing...', fullpath)
        const _class = parse_bpy_type(fullpath)
        if(_class.name.trim().length > 0) {
            schema.classes.push(_class)
        }
    }

    // ---------------------------------------------------------------
    // Resolve missing cycles bpy.types. obtained from (2.72a)
    //
    // Note: these are missing from the 2.82a documentation.
    // ---------------------------------------------------------------

    const cyclesDocPath = join(docPath, '/_cycles/')
    for(const filename of readdirSync(cyclesDocPath).filter(name => name.includes('bpy.types.'))) {
        const fullpath = join(cyclesDocPath, filename)
        console.log('parsing...', fullpath)
        const _class = parse_bpy_type(fullpath)
        if(_class.name.trim().length > 0) {
            schema.classes.push(_class)
        }
    }
    // ---------------------------------------------------------------
    // Unresolvable types go here as empty classes. Can be manually
    // resolved later.
    // ---------------------------------------------------------------
    schema.classes.push(create_empty_class('bpy.types.', 'CyclesLightSettings'))
    schema.classes.push(create_empty_class('bpy.types.', 'CyclesView3DShadingSettings'))
    schema.classes.push(create_empty_class('bpy.ops.', 'ACTION_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'ARMATURE_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'ARMATURE_OT_extrude'))
    schema.classes.push(create_empty_class('bpy.ops.', 'CLIP_OT_add_marker'))
    schema.classes.push(create_empty_class('bpy.ops.', 'CURVE_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'CURVE_OT_extrude'))
    schema.classes.push(create_empty_class('bpy.ops.', 'GPENCIL_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'GPENCIL_OT_extrude'))
    schema.classes.push(create_empty_class('bpy.ops.', 'GRAPH_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MASK_OT_add_feather_vertex'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MASK_OT_add_vertex'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MASK_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MASK_OT_slide_point'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MBALL_OT_duplicate_metaelems'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_extrude_context'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_extrude_edges_indiv'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_extrude_faces_indiv'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_extrude_region'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_extrude_verts_indiv'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_loopcut'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_offset_edge_loops'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_polybuild_face_at_cursor'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_polybuild_split_at_cursor'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_polybuild_transform_at_cursor'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_rip'))
    schema.classes.push(create_empty_class('bpy.ops.', 'MESH_OT_rip_edge'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_attach'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_detach'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_insert_offset'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_link_viewer'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_links_detach'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_select'))
    schema.classes.push(create_empty_class('bpy.ops.', 'NODE_OT_translate_attach'))
    schema.classes.push(create_empty_class('bpy.ops.', 'OBJECT_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'PAINTCURVE_OT_add_point'))
    schema.classes.push(create_empty_class('bpy.ops.', 'PAINTCURVE_OT_slide'))
    schema.classes.push(create_empty_class('bpy.ops.', 'SEQUENCER_OT_duplicate'))
    schema.classes.push(create_empty_class('bpy.ops.', 'TRANSFORM_OT_edge_slide'))
    schema.classes.push(create_empty_class('bpy.ops.', 'TRANSFORM_OT_seq_slide'))
    schema.classes.push(create_empty_class('bpy.ops.', 'TRANSFORM_OT_shrink_fatten'))
    schema.classes.push(create_empty_class('bpy.ops.', 'TRANSFORM_OT_transform'))
    schema.classes.push(create_empty_class('bpy.ops.', 'TRANSFORM_OT_translate'))


    // ---------------------------------------------------------------
    // Fixes...
    // ---------------------------------------------------------------
    
    // Cannot have a class named bpy.types.Object. Rename it to BlenderObject
    // {
    //     for(const type of schema.classes) {
    //         for(const attribute of type.readonly_attributes) {
    //             const info = resolve(schema, attribute.desc).value()
    //             if(info.type === 'Object') {
    //                 attribute.desc = attribute.desc.replace('Object', 'BlenderObject')
    //             }
    //         }
    //         for(const attribute of type.attributes) {
    //             const info = resolve(schema, attribute.desc).value()
    //             if(info.type === 'Object') {
    //                 attribute.desc = attribute.desc.replace('Object', 'BlenderObject')
    //             }
    //         }
    //         for(const method of type.methods) {
    //             const info = resolve(schema, method.returns).value()
    //             if(info.type === 'Object') {
    //                 method.returns = method.returns.replace('Object', 'BlenderObject')
    //             }
    //             for(const parameter of method.parameters) {
    //                 const info = resolve(schema, parameter.desc).value()
    //                 if(info.type === 'Object') {
    //                     parameter.desc = parameter.desc.replace('Object', 'BlenderObject')
    //                 }
    //             }
    //         }
    //     }
    //     for(const type of schema.classes) {
    //         if(type.name === 'Object') {
    //             type.name = 'BlenderObject'
    //         }
    //     }
    // }
    // Overloaded property on RenderEngine, rename to render_settings.
    {
        const cls = schema.classes.find(x => x.name === 'RenderEngine')!
        const attr = cls.readonly_attributes.find(x => x.name === 'render')!
        attr.name = 'render_settings'
    }
    // Bone has duplicate 'children' getters. Remove the void one.
    {
        const cls = schema.classes.find(x => x.name === 'Bone')!
        cls.readonly_attributes = cls.readonly_attributes.filter(x => 
                x.name !== 'children' && x.desc !== 'void' )
    }

    return schema
}


