import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { ID } from './ID'
import { DepsgraphObjectInstance } from './DepsgraphObjectInstance'
import { BlenderObject } from './BlenderObject'
import { Scene } from './Scene'
import { DepsgraphUpdate } from './DepsgraphUpdate'
import { ViewLayer } from './ViewLayer'

/**
 * Depsgraph
 * 
 * https://docs.blender.org/api/current/bpy.types.Depsgraph.html
 */
export class Depsgraph {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * All evaluated datablocks
     * @desc bpy_prop_collection of ID, (readonly)
     */
    public get ids(): BlenderCollection<ID> & Indexable<ID> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.ids`, ID)
    }

    /**
     * Evaluation mode
     * @desc enum in ['VIEWPORT', 'RENDER'], default 'VIEWPORT', (readonly)
     */
    public get mode(): 'VIEWPORT' | 'RENDER' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * All object instances to display or render (WARNING: only use this as an iterator, never as a sequence, and do not keep any references to its items)
     * @desc bpy_prop_collection of DepsgraphObjectInstance, (readonly)
     */
    public get object_instances(): BlenderCollection<DepsgraphObjectInstance> & Indexable<DepsgraphObjectInstance> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.object_instances`, DepsgraphObjectInstance)
    }

    /**
     * Evaluated objects in the dependency graph
     * @desc bpy_prop_collection of Object, (readonly)
     */
    public get objects(): BlenderCollection<BlenderObject> & Indexable<BlenderObject> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.objects`, BlenderObject)
    }

    /**
     * Original scene dependency graph is built for
     * @desc Scene, (readonly)
     */
    public get scene(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scene`, Scene)
    }

    /**
     * Original scene dependency graph is built for
     * @desc Scene, (readonly)
     */
    public get scene_eval(): Scene {
        return PythonInterop.getClass(this.interop, `${this.accessor}.scene_eval`, Scene)
    }

    /**
     * Updates to datablocks
     * @desc bpy_prop_collection of DepsgraphUpdate, (readonly)
     */
    public get updates(): BlenderCollection<DepsgraphUpdate> & Indexable<DepsgraphUpdate> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.updates`, DepsgraphUpdate)
    }

    /**
     * Original view layer dependency graph is built for
     * @desc ViewLayer, (readonly)
     */
    public get view_layer(): ViewLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_layer`, ViewLayer)
    }

    /**
     * Original view layer dependency graph is built for
     * @desc ViewLayer, (readonly)
     */
    public get view_layer_eval(): ViewLayer {
        return PythonInterop.getClass(this.interop, `${this.accessor}.view_layer_eval`, ViewLayer)
    }

    /**
     * debug_relations_graphviz
     * @desc void
     */
    public debug_relations_graphviz(options: { filename?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.debug_relations_graphviz`, options)
    }

    /**
     * debug_stats_gnuplot
     * @desc void
     */
    public debug_stats_gnuplot(options: { filename?: string, output_filename?: string }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.debug_stats_gnuplot`, options)
    }

    /**
     * debug_tag_update
     * @desc void
     */
    public debug_tag_update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.debug_tag_update`, {})
    }

    /**
     * Report the number of elements in the Dependency Graph
     * @desc string, (never None)
     */
    public debug_stats(): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.debug_stats`, {})
    }

    /**
     * Re-evaluate any modified data-blocks, for example for animation or modifiers. This invalidates all references to evaluated data-blocks from this dependency graph.
     * @desc void
     */
    public update(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.update`, {})
    }

    /**
     * id_eval_get
     * @desc ID
     */
    public id_eval_get(options: { id?: unknown }): ID {
        return PythonInterop.callClass(this.interop, `${this.accessor}.id_eval_get`, options, ID)
    }

    /**
     * id_type_updated
     * @desc boolean
     */
    public id_type_updated(options: { id_type?: 'ACTION' | 'ARMATURE' | 'BRUSH' | 'CAMERA' | 'CACHEFILE' | 'CURVE' | 'FONT' | 'GREASEPENCIL' | 'COLLECTION' | 'IMAGE' | 'KEY' | 'LIGHT' | 'LIBRARY' | 'LINESTYLE' | 'LATTICE' | 'MASK' | 'MATERIAL' | 'META' | 'MESH' | 'MOVIECLIP' | 'NODETREE' | 'OBJECT' | 'PAINTCURVE' | 'PALETTE' | 'PARTICLE' | 'LIGHT_PROBE' | 'SCENE' | 'SOUND' | 'SPEAKER' | 'TEXT' | 'TEXTURE' | 'WINDOWMANAGER' | 'WORLD' | 'WORKSPACE' }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.id_type_updated`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
