import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'
import { bpy_struct } from './bpy_struct'
import { ID } from './ID'
import { ShapeKey } from './ShapeKey'
import { AnimData } from './AnimData'
import { AnimViz } from './AnimViz'
import { CollisionSettings } from './CollisionSettings'
import { ObjectConstraints } from './ObjectConstraints'
import { Constraint } from './Constraint'
import { CyclesObjectSettings } from './CyclesObjectSettings'
import { CyclesVisibilitySettings } from './CyclesVisibilitySettings'
import { ObjectDisplay } from './ObjectDisplay'
import { FaceMaps } from './FaceMaps'
import { FaceMap } from './FaceMap'
import { FieldSettings } from './FieldSettings'
import { ObjectGpencilModifiers } from './ObjectGpencilModifiers'
import { GpencilModifier } from './GpencilModifier'
import { ImageUser } from './ImageUser'
import { MaterialSlot } from './MaterialSlot'
import { ObjectModifiers } from './ObjectModifiers'
import { Modifier } from './Modifier'
import { MotionPath } from './MotionPath'
import { ParticleSystems } from './ParticleSystems'
import { ParticleSystem } from './ParticleSystem'
import { Pose } from './Pose'
import { RigidBodyObject } from './RigidBodyObject'
import { RigidBodyConstraint } from './RigidBodyConstraint'
import { ObjectShaderFx } from './ObjectShaderFx'
import { ShaderFx } from './ShaderFx'
import { SoftBodySettings } from './SoftBodySettings'
import { VertexGroups } from './VertexGroups'
import { VertexGroup } from './VertexGroup'
import { Material } from './Material'
import { Collection } from './Collection'
import { Action } from './Action'
import { Mesh } from './Mesh'

/**
 * BlenderObject
 * 
 * https://docs.blender.org/api/current/bpy.types.Object.html
 */
export class BlenderObject {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * Current shape key
     * @desc ShapeKey, (readonly)
     */
    public get active_shape_key(): ShapeKey {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_shape_key`, ShapeKey)
    }

    /**
     * Animation data for this data-block
     * @desc AnimData, (readonly)
     */
    public get animation_data(): AnimData {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_data`, AnimData)
    }

    /**
     * Animation data for this data-block
     * @desc AnimViz, (readonly, never None)
     */
    public get animation_visualization(): AnimViz {
        return PythonInterop.getClass(this.interop, `${this.accessor}.animation_visualization`, AnimViz)
    }

    /**
     * Object’s bounding box in object-space coordinates, all values are -1.0 when not available
     * @desc float multi-dimensional array of 8 * 3 items in [-inf, inf], default ((0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0), (0.0, 0.0, 0.0)), (readonly)
     */
    public get bound_box(): [[number, number, number], [number, number, number], [number, number, number], [number, number, number], [number, number, number], [number, number, number], [number, number, number], [number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.bound_box`, 'number', 8, 3)
    }

    /**
     * Settings for using the object as a collider in physics simulation
     * @desc CollisionSettings, (readonly)
     */
    public get collision(): CollisionSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.collision`, CollisionSettings)
    }

    /**
     * Constraints affecting the transformation of the object
     * @desc ObjectConstraints bpy_prop_collection of Constraint, (readonly)
     */
    public get constraints(): BlenderCollection<Constraint> & Indexable<Constraint> & ObjectConstraints {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.constraints`, ObjectConstraints, Constraint)
    }

    /**
     * Cycles object settings
     * @desc CyclesObjectSettings, (readonly)
     */
    public get cycles(): CyclesObjectSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles`, CyclesObjectSettings)
    }

    /**
     * Cycles visibility settings
     * @desc CyclesVisibilitySettings, (readonly)
     */
    public get cycles_visibility(): CyclesVisibilitySettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.cycles_visibility`, CyclesVisibilitySettings)
    }

    /**
     * Object display settings for 3d viewport
     * @desc ObjectDisplay, (readonly, never None)
     */
    public get display(): ObjectDisplay {
        return PythonInterop.getClass(this.interop, `${this.accessor}.display`, ObjectDisplay)
    }

    /**
     * Maps of faces of the object
     * @desc FaceMaps bpy_prop_collection of FaceMap, (readonly)
     */
    public get face_maps(): BlenderCollection<FaceMap> & Indexable<FaceMap> & FaceMaps {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.face_maps`, FaceMaps, FaceMap)
    }

    /**
     * Settings for using the object as a field in physics simulation
     * @desc FieldSettings, (readonly)
     */
    public get field(): FieldSettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.field`, FieldSettings)
    }

    /**
     * Modifiers affecting the data of the grease pencil object
     * @desc ObjectGpencilModifiers bpy_prop_collection of GpencilModifier, (readonly)
     */
    public get grease_pencil_modifiers(): BlenderCollection<GpencilModifier> & Indexable<GpencilModifier> & ObjectGpencilModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.grease_pencil_modifiers`, ObjectGpencilModifiers, GpencilModifier)
    }

    /**
     * Parameters defining which layer, pass and frame of the image is displayed
     * @desc ImageUser, (readonly, never None)
     */
    public get image_user(): ImageUser {
        return PythonInterop.getClass(this.interop, `${this.accessor}.image_user`, ImageUser)
    }

    /**
     * Object comes from a instancer
     * @desc boolean, default False, (readonly)
     */
    public get is_from_instancer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_from_instancer`)
    }

    /**
     * Object comes from a background set
     * @desc boolean, default False, (readonly)
     */
    public get is_from_set(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_from_set`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get is_instancer(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.is_instancer`)
    }

    /**
     * Material slots in the object
     * @desc bpy_prop_collection of MaterialSlot, (readonly)
     */
    public get material_slots(): BlenderCollection<MaterialSlot> & Indexable<MaterialSlot> {
        return BlenderCollection.createGeneric(this.interop, `${this.accessor}.material_slots`, MaterialSlot)
    }

    /**
     * Object interaction mode
     * @desc enum in ['OBJECT', 'EDIT', 'POSE', 'SCULPT', 'VERTEX_PAINT', 'WEIGHT_PAINT', 'TEXTURE_PAINT', 'PARTICLE_EDIT', 'EDIT_GPENCIL', 'SCULPT_GPENCIL', 'PAINT_GPENCIL', 'WEIGHT_GPENCIL'], default 'OBJECT', (readonly)
     */
    public get mode(): 'OBJECT' | 'EDIT' | 'POSE' | 'SCULPT' | 'VERTEX_PAINT' | 'WEIGHT_PAINT' | 'TEXTURE_PAINT' | 'PARTICLE_EDIT' | 'EDIT_GPENCIL' | 'SCULPT_GPENCIL' | 'PAINT_GPENCIL' | 'WEIGHT_GPENCIL' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.mode`)
    }

    /**
     * Modifiers affecting the geometric data of the object
     * @desc ObjectModifiers bpy_prop_collection of Modifier, (readonly)
     */
    public get modifiers(): BlenderCollection<Modifier> & Indexable<Modifier> & ObjectModifiers {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.modifiers`, ObjectModifiers, Modifier)
    }

    /**
     * Motion Path for this element
     * @desc MotionPath, (readonly)
     */
    public get motion_path(): MotionPath {
        return PythonInterop.getClass(this.interop, `${this.accessor}.motion_path`, MotionPath)
    }

    /**
     * Particle systems emitted from the object
     * @desc ParticleSystems bpy_prop_collection of ParticleSystem, (readonly)
     */
    public get particle_systems(): BlenderCollection<ParticleSystem> & Indexable<ParticleSystem> & ParticleSystems {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.particle_systems`, ParticleSystems, ParticleSystem)
    }

    /**
     * Current pose for armatures
     * @desc Pose, (readonly)
     */
    public get pose(): Pose {
        return PythonInterop.getClass(this.interop, `${this.accessor}.pose`, Pose)
    }

    /**
     * Library object this proxy object controls
     * @desc Object, (readonly)
     */
    public get proxy(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.proxy`, BlenderObject)
    }

    /**
     * Library collection duplicator object this proxy object controls
     * @desc Object, (readonly)
     */
    public get proxy_collection(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.proxy_collection`, BlenderObject)
    }

    /**
     * Settings for rigid body simulation
     * @desc RigidBodyObject, (readonly)
     */
    public get rigid_body(): RigidBodyObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.rigid_body`, RigidBodyObject)
    }

    /**
     * Constraint constraining rigid bodies
     * @desc RigidBodyConstraint, (readonly)
     */
    public get rigid_body_constraint(): RigidBodyConstraint {
        return PythonInterop.getClass(this.interop, `${this.accessor}.rigid_body_constraint`, RigidBodyConstraint)
    }

    /**
     * Effects affecting display of object
     * @desc ObjectShaderFx bpy_prop_collection of ShaderFx, (readonly)
     */
    public get shader_effects(): BlenderCollection<ShaderFx> & Indexable<ShaderFx> & ObjectShaderFx {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.shader_effects`, ObjectShaderFx, ShaderFx)
    }

    /**
     * Settings for soft body simulation
     * @desc SoftBodySettings, (readonly)
     */
    public get soft_body(): SoftBodySettings {
        return PythonInterop.getClass(this.interop, `${this.accessor}.soft_body`, SoftBodySettings)
    }

    /**
     * Type of Object
     * @desc enum in ['MESH', 'CURVE', 'SURFACE', 'META', 'FONT', 'ARMATURE', 'LATTICE', 'EMPTY', 'GPENCIL', 'CAMERA', 'LIGHT', 'SPEAKER', 'LIGHT_PROBE'], default 'EMPTY', (readonly)
     */
    public get type(): 'MESH' | 'CURVE' | 'SURFACE' | 'META' | 'FONT' | 'ARMATURE' | 'LATTICE' | 'EMPTY' | 'GPENCIL' | 'CAMERA' | 'LIGHT' | 'SPEAKER' | 'LIGHT_PROBE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.type`)
    }

    /**
     * 
     * @desc boolean, default False, (readonly)
     */
    public get use_dynamic_topology_sculpting(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_dynamic_topology_sculpting`)
    }

    /**
     * Vertex groups of the object
     * @desc VertexGroups bpy_prop_collection of VertexGroup, (readonly)
     */
    public get vertex_groups(): BlenderCollection<VertexGroup> & Indexable<VertexGroup> & VertexGroups {
        return BlenderCollection.createSpecialized(this.interop, `${this.accessor}.vertex_groups`, VertexGroups, VertexGroup)
    }

    /**
     * All the children of this object. Warning: takes O(len(bpy.data.objects)) time.(readonly)
     * @desc void
     */
    public get children(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.children`)
    }

    /**
     * The collections this object is in. Warning: takes O(len(bpy.data.collections) + len(bpy.data.scenes)) time.(readonly)
     * @desc void
     */
    public get users_collection(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_collection`)
    }

    /**
     * The scenes this object is in. Warning: takes O(len(bpy.data.scenes) * len(bpy.data.objects)) time.(readonly)
     * @desc void
     */
    public get users_scene(): void {
        return PythonInterop.getVoid(this.interop, `${this.accessor}.users_scene`)
    }

    /**
     * Active material being displayed
     * @desc Material
     */
    public get active_material(): Material {
        return PythonInterop.getClass(this.interop, `${this.accessor}.active_material`, Material)
    }

    /**
     * Index of active material slot
     * @desc int in [0, inf], default 0
     */
    public get active_material_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_material_index`)
    }

    /**
     * Current shape key index
     * @desc int in [-32768, 32767], default 0
     */
    public get active_shape_key_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.active_shape_key_index`)
    }

    /**
     * Object color and alpha, used when faces have the ObColor mode enabled
     * @desc float array of 4 items in [0, inf], default (1.0, 1.0, 1.0, 1.0)
     */
    public get color(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.color`, 'number', 4)
    }

    /**
     * Object data
     * @desc ID
     */
    public get data(): ID {
        return PythonInterop.getClass(this.interop, `${this.accessor}.data`, ID)
    }

    /**
     * Extra translation added to the location of the object
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get delta_location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.delta_location`, 'number', 3)
    }

    /**
     * Extra rotation added to the rotation of the object (when using Euler rotations)
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get delta_rotation_euler(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.delta_rotation_euler`, 'number', 3)
    }

    /**
     * Extra rotation added to the rotation of the object (when using Quaternion rotations)
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public get delta_rotation_quaternion(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.delta_rotation_quaternion`, 'number', 4)
    }

    /**
     * Extra scaling added to the scale of the object
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get delta_scale(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.delta_scale`, 'number', 3)
    }

    /**
     * Absolute bounding box dimensions of the object (WARNING: assigning to it or its members multiple consecutive times will not work correctly, as this needs up-to-date evaluated data)
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get dimensions(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.dimensions`, 'number', 3)
    }

    /**
     * Object boundary display type
     * @desc enum in ['BOX', 'SPHERE', 'CYLINDER', 'CONE', 'CAPSULE'], default 'BOX'
     */
    public get display_bounds_type(): 'BOX' | 'SPHERE' | 'CYLINDER' | 'CONE' | 'CAPSULE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_bounds_type`)
    }

    /**
     * How to display object in viewport
     * @desc enum in ['BOUNDS', 'WIRE', 'SOLID', 'TEXTURED'], default 'TEXTURED'
     */
    public get display_type(): 'BOUNDS' | 'WIRE' | 'SOLID' | 'TEXTURED' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.display_type`)
    }

    /**
     * Size of display for empties in the viewport
     * @desc float in [0.0001, 1000], default 1.0
     */
    public get empty_display_size(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.empty_display_size`)
    }

    /**
     * Viewport display style for empties
     * @desc enum in ['PLAIN_AXES', 'ARROWS', 'SINGLE_ARROW', 'CIRCLE', 'CUBE', 'SPHERE', 'CONE', 'IMAGE'], default 'PLAIN_AXES'
     */
    public get empty_display_type(): 'PLAIN_AXES' | 'ARROWS' | 'SINGLE_ARROW' | 'CIRCLE' | 'CUBE' | 'SPHERE' | 'CONE' | 'IMAGE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.empty_display_type`)
    }

    /**
     * Determine which other objects will occlude the image
     * @desc enum in ['DEFAULT', 'FRONT', 'BACK'], default 'DEFAULT'
     */
    public get empty_image_depth(): 'DEFAULT' | 'FRONT' | 'BACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.empty_image_depth`)
    }

    /**
     * Origin offset distance
     * @desc float array of 2 items in [-inf, inf], default (-0.5, -0.5)
     */
    public get empty_image_offset(): [number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.empty_image_offset`, 'number', 2)
    }

    /**
     * Show front/back side
     * @desc enum in ['DOUBLE_SIDED', 'FRONT', 'BACK'], default 'DOUBLE_SIDED'
     */
    public get empty_image_side(): 'DOUBLE_SIDED' | 'FRONT' | 'BACK' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.empty_image_side`)
    }

    /**
     * Globally disable in renders
     * @desc boolean, default False
     */
    public get hide_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_render`)
    }

    /**
     * Disable selection in viewport
     * @desc boolean, default False
     */
    public get hide_select(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_select`)
    }

    /**
     * Globally disable in viewports
     * @desc boolean, default False
     */
    public get hide_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.hide_viewport`)
    }

    /**
     * Instance an existing collection
     * @desc Collection
     */
    public get instance_collection(): Collection {
        return PythonInterop.getClass(this.interop, `${this.accessor}.instance_collection`, Collection)
    }

    /**
     * Scale the face instance objects
     * @desc float in [0.001, 10000], default 1.0
     */
    public get instance_faces_scale(): number {
        return PythonInterop.getFloat(this.interop, `${this.accessor}.instance_faces_scale`)
    }

    /**
     * If not None, object instancing method to use
     * @desc enum in ['NONE', 'VERTS', 'FACES', 'COLLECTION'], default 'NONE'
     */
    public get instance_type(): 'NONE' | 'VERTS' | 'FACES' | 'COLLECTION' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.instance_type`)
    }

    /**
     * Location of the object
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get location(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.location`, 'number', 3)
    }

    /**
     * Lock editing of location when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get lock_location(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lock_location`, 'boolean', 3)
    }

    /**
     * Lock editing of rotation when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get lock_rotation(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lock_rotation`, 'boolean', 3)
    }

    /**
     * Lock editing of ‘angle’ component of four-component rotations when transforming
     * @desc boolean, default False
     */
    public get lock_rotation_w(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotation_w`)
    }

    /**
     * Lock editing of four component rotations by components (instead of as Eulers)
     * @desc boolean, default True
     */
    public get lock_rotations_4d(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.lock_rotations_4d`)
    }

    /**
     * Lock editing of scale when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public get lock_scale(): [boolean, boolean, boolean] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.lock_scale`, 'boolean', 3)
    }

    /**
     * Matrix access to location, rotation and scale (including deltas), before constraints and parenting are applied
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_basis(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_basis`, 'number', 4, 4)
    }

    /**
     * Parent relative transformation matrix - WARNING: Only takes into account ‘Object’ parenting, so e.g. in case of bone parenting you get a matrix relative to the Armature object, not to the actual parent bone
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public get matrix_local(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_local`, 'number', 4, 4)
    }

    /**
     * Inverse of object’s parent matrix at time of parenting
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((1.0, 0.0, 0.0, 0.0), (0.0, 1.0, 0.0, 0.0), (0.0, 0.0, 1.0, 0.0), (0.0, 0.0, 0.0, 1.0))
     */
    public get matrix_parent_inverse(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_parent_inverse`, 'number', 4, 4)
    }

    /**
     * Worldspace transformation matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((1.0, 0.0, 0.0, 0.0), (0.0, 1.0, 0.0, 0.0), (0.0, 0.0, 1.0, 0.0), (0.0, 0.0, 0.0, 1.0))
     */
    public get matrix_world(): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.getMultiDimensionalArray(this.interop, `${this.accessor}.matrix_world`, 'number', 4, 4)
    }

    /**
     * Parent Object
     * @desc Object
     */
    public get parent(): BlenderObject {
        return PythonInterop.getClass(this.interop, `${this.accessor}.parent`, BlenderObject)
    }

    /**
     * Name of parent bone in case of a bone parenting relation
     * @desc string, default '', (never None)
     */
    public get parent_bone(): string {
        return PythonInterop.getString(this.interop, `${this.accessor}.parent_bone`)
    }

    /**
     * Type of parent relation
     * @desc enum in ['OBJECT', 'ARMATURE', 'LATTICE', 'VERTEX', 'VERTEX_3', 'BONE'], default 'OBJECT'
     */
    public get parent_type(): 'OBJECT' | 'ARMATURE' | 'LATTICE' | 'VERTEX' | 'VERTEX_3' | 'BONE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.parent_type`)
    }

    /**
     * Indices of vertices in case of a vertex parenting relation
     * @desc int array of 3 items in [0, inf], default (0, 0, 0)
     */
    public get parent_vertices(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.parent_vertices`, 'number', 3)
    }

    /**
     * Index number for the “Object Index” render pass
     * @desc int in [0, 32767], default 0
     */
    public get pass_index(): number {
        return PythonInterop.getInteger(this.interop, `${this.accessor}.pass_index`)
    }

    /**
     * Action used as a pose library for armatures
     * @desc Action
     */
    public get pose_library(): Action {
        return PythonInterop.getClass(this.interop, `${this.accessor}.pose_library`, Action)
    }

    /**
     * Angle of Rotation for Axis-Angle rotation representation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 1.0, 0.0)
     */
    public get rotation_axis_angle(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_axis_angle`, 'number', 4)
    }

    /**
     * Rotation in Eulers
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public get rotation_euler(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_euler`, 'number', 3)
    }

    /**
     * 
     * @desc enum in ['QUATERNION', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'AXIS_ANGLE'], default 'XYZ'
     */
    public get rotation_mode(): 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.rotation_mode`)
    }

    /**
     * Rotation in Quaternions
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public get rotation_quaternion(): [number, number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.rotation_quaternion`, 'number', 4)
    }

    /**
     * Scaling of the object
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public get scale(): [number, number, number] {
        return PythonInterop.getArray(this.interop, `${this.accessor}.scale`, 'number', 3)
    }

    /**
     * Display all edges for mesh objects
     * @desc boolean, default False
     */
    public get show_all_edges(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_all_edges`)
    }

    /**
     * Display the object’s origin and axes
     * @desc boolean, default False
     */
    public get show_axis(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_axis`)
    }

    /**
     * Display the object’s bounds
     * @desc boolean, default False
     */
    public get show_bounds(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_bounds`)
    }

    /**
     * Only display the image when it is aligned with the view axis
     * @desc boolean, default False
     */
    public get show_empty_image_only_axis_aligned(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_empty_image_only_axis_aligned`)
    }

    /**
     * Display image in orthographic mode
     * @desc boolean, default False
     */
    public get show_empty_image_orthographic(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_empty_image_orthographic`)
    }

    /**
     * Display image in perspective mode
     * @desc boolean, default False
     */
    public get show_empty_image_perspective(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_empty_image_perspective`)
    }

    /**
     * Make the object draw in front of others
     * @desc boolean, default False
     */
    public get show_in_front(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_in_front`)
    }

    /**
     * Make instancer visible when rendering
     * @desc boolean, default True
     */
    public get show_instancer_for_render(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_instancer_for_render`)
    }

    /**
     * Make instancer visible in the viewport
     * @desc boolean, default True
     */
    public get show_instancer_for_viewport(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_instancer_for_viewport`)
    }

    /**
     * Display the object’s name
     * @desc boolean, default False
     */
    public get show_name(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_name`)
    }

    /**
     * Always show the current Shape for this Object
     * @desc boolean, default False
     */
    public get show_only_shape_key(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_only_shape_key`)
    }

    /**
     * Display the object’s texture space
     * @desc boolean, default False
     */
    public get show_texture_space(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_texture_space`)
    }

    /**
     * Display material transparency in the object
     * @desc boolean, default False
     */
    public get show_transparent(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_transparent`)
    }

    /**
     * Add the object’s wireframe over solid drawing
     * @desc boolean, default False
     */
    public get show_wire(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.show_wire`)
    }

    /**
     * Axis that points in ‘forward’ direction (applies to InstanceFrame when parent ‘Follow’ is enabled)
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public get track_axis(): 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.track_axis`)
    }

    /**
     * Axis that points in the upward direction (applies to InstanceFrame when parent ‘Follow’ is enabled)
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public get up_axis(): 'X' | 'Y' | 'Z' {
        return PythonInterop.getEnum(this.interop, `${this.accessor}.up_axis`)
    }

    /**
     * Use alpha blending instead of alpha test (can produce sorting artifacts)
     * @desc boolean, default False
     */
    public get use_empty_image_alpha(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_empty_image_alpha`)
    }

    /**
     * Scale instance based on face size
     * @desc boolean, default False
     */
    public get use_instance_faces_scale(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_instance_faces_scale`)
    }

    /**
     * Rotate instance according to vertex normal
     * @desc boolean, default False
     */
    public get use_instance_vertices_rotation(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_instance_vertices_rotation`)
    }

    /**
     * Apply shape keys in edit mode (for Meshes only)
     * @desc boolean, default False
     */
    public get use_shape_key_edit_mode(): boolean {
        return PythonInterop.getBoolean(this.interop, `${this.accessor}.use_shape_key_edit_mode`)
    }

    /**
     * Active material being displayed
     * @desc Material
     */
    public set active_material(value: Material) {
        PythonInterop.setClass(this.interop, `${this.accessor}.active_material`, value)
    }

    /**
     * Index of active material slot
     * @desc int in [0, inf], default 0
     */
    public set active_material_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_material_index`, value)
    }

    /**
     * Current shape key index
     * @desc int in [-32768, 32767], default 0
     */
    public set active_shape_key_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.active_shape_key_index`, value)
    }

    /**
     * Object color and alpha, used when faces have the ObColor mode enabled
     * @desc float array of 4 items in [0, inf], default (1.0, 1.0, 1.0, 1.0)
     */
    public set color(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.color`, value)
    }

    /**
     * Object data
     * @desc ID
     */
    public set data(value: ID) {
        PythonInterop.setClass(this.interop, `${this.accessor}.data`, value)
    }

    /**
     * Extra translation added to the location of the object
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set delta_location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.delta_location`, value)
    }

    /**
     * Extra rotation added to the rotation of the object (when using Euler rotations)
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set delta_rotation_euler(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.delta_rotation_euler`, value)
    }

    /**
     * Extra rotation added to the rotation of the object (when using Quaternion rotations)
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public set delta_rotation_quaternion(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.delta_rotation_quaternion`, value)
    }

    /**
     * Extra scaling added to the scale of the object
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set delta_scale(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.delta_scale`, value)
    }

    /**
     * Absolute bounding box dimensions of the object (WARNING: assigning to it or its members multiple consecutive times will not work correctly, as this needs up-to-date evaluated data)
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set dimensions(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.dimensions`, value)
    }

    /**
     * Object boundary display type
     * @desc enum in ['BOX', 'SPHERE', 'CYLINDER', 'CONE', 'CAPSULE'], default 'BOX'
     */
    public set display_bounds_type(value: 'BOX' | 'SPHERE' | 'CYLINDER' | 'CONE' | 'CAPSULE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_bounds_type`, value)
    }

    /**
     * How to display object in viewport
     * @desc enum in ['BOUNDS', 'WIRE', 'SOLID', 'TEXTURED'], default 'TEXTURED'
     */
    public set display_type(value: 'BOUNDS' | 'WIRE' | 'SOLID' | 'TEXTURED') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.display_type`, value)
    }

    /**
     * Size of display for empties in the viewport
     * @desc float in [0.0001, 1000], default 1.0
     */
    public set empty_display_size(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.empty_display_size`, value)
    }

    /**
     * Viewport display style for empties
     * @desc enum in ['PLAIN_AXES', 'ARROWS', 'SINGLE_ARROW', 'CIRCLE', 'CUBE', 'SPHERE', 'CONE', 'IMAGE'], default 'PLAIN_AXES'
     */
    public set empty_display_type(value: 'PLAIN_AXES' | 'ARROWS' | 'SINGLE_ARROW' | 'CIRCLE' | 'CUBE' | 'SPHERE' | 'CONE' | 'IMAGE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.empty_display_type`, value)
    }

    /**
     * Determine which other objects will occlude the image
     * @desc enum in ['DEFAULT', 'FRONT', 'BACK'], default 'DEFAULT'
     */
    public set empty_image_depth(value: 'DEFAULT' | 'FRONT' | 'BACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.empty_image_depth`, value)
    }

    /**
     * Origin offset distance
     * @desc float array of 2 items in [-inf, inf], default (-0.5, -0.5)
     */
    public set empty_image_offset(value: [number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.empty_image_offset`, value)
    }

    /**
     * Show front/back side
     * @desc enum in ['DOUBLE_SIDED', 'FRONT', 'BACK'], default 'DOUBLE_SIDED'
     */
    public set empty_image_side(value: 'DOUBLE_SIDED' | 'FRONT' | 'BACK') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.empty_image_side`, value)
    }

    /**
     * Globally disable in renders
     * @desc boolean, default False
     */
    public set hide_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_render`, value)
    }

    /**
     * Disable selection in viewport
     * @desc boolean, default False
     */
    public set hide_select(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_select`, value)
    }

    /**
     * Globally disable in viewports
     * @desc boolean, default False
     */
    public set hide_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.hide_viewport`, value)
    }

    /**
     * Instance an existing collection
     * @desc Collection
     */
    public set instance_collection(value: Collection) {
        PythonInterop.setClass(this.interop, `${this.accessor}.instance_collection`, value)
    }

    /**
     * Scale the face instance objects
     * @desc float in [0.001, 10000], default 1.0
     */
    public set instance_faces_scale(value: number) {
        PythonInterop.setFloat(this.interop, `${this.accessor}.instance_faces_scale`, value)
    }

    /**
     * If not None, object instancing method to use
     * @desc enum in ['NONE', 'VERTS', 'FACES', 'COLLECTION'], default 'NONE'
     */
    public set instance_type(value: 'NONE' | 'VERTS' | 'FACES' | 'COLLECTION') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.instance_type`, value)
    }

    /**
     * Location of the object
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set location(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.location`, value)
    }

    /**
     * Lock editing of location when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set lock_location(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lock_location`, value)
    }

    /**
     * Lock editing of rotation when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set lock_rotation(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lock_rotation`, value)
    }

    /**
     * Lock editing of ‘angle’ component of four-component rotations when transforming
     * @desc boolean, default False
     */
    public set lock_rotation_w(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotation_w`, value)
    }

    /**
     * Lock editing of four component rotations by components (instead of as Eulers)
     * @desc boolean, default True
     */
    public set lock_rotations_4d(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.lock_rotations_4d`, value)
    }

    /**
     * Lock editing of scale when transforming
     * @desc boolean array of 3 items, default (False, False, False)
     */
    public set lock_scale(value: [boolean, boolean, boolean]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.lock_scale`, value)
    }

    /**
     * Matrix access to location, rotation and scale (including deltas), before constraints and parenting are applied
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_basis(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_basis`, value)
    }

    /**
     * Parent relative transformation matrix - WARNING: Only takes into account ‘Object’ parenting, so e.g. in case of bone parenting you get a matrix relative to the Armature object, not to the actual parent bone
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0), (0.0, 0.0, 0.0, 0.0))
     */
    public set matrix_local(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_local`, value)
    }

    /**
     * Inverse of object’s parent matrix at time of parenting
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((1.0, 0.0, 0.0, 0.0), (0.0, 1.0, 0.0, 0.0), (0.0, 0.0, 1.0, 0.0), (0.0, 0.0, 0.0, 1.0))
     */
    public set matrix_parent_inverse(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_parent_inverse`, value)
    }

    /**
     * Worldspace transformation matrix
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf], default ((1.0, 0.0, 0.0, 0.0), (0.0, 1.0, 0.0, 0.0), (0.0, 0.0, 1.0, 0.0), (0.0, 0.0, 0.0, 1.0))
     */
    public set matrix_world(value: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]) {
        PythonInterop.setMultiDimensionalArray(this.interop, `${this.accessor}.matrix_world`, value)
    }

    /**
     * Parent Object
     * @desc Object
     */
    public set parent(value: BlenderObject) {
        PythonInterop.setClass(this.interop, `${this.accessor}.parent`, value)
    }

    /**
     * Name of parent bone in case of a bone parenting relation
     * @desc string, default '', (never None)
     */
    public set parent_bone(value: string) {
        PythonInterop.setString(this.interop, `${this.accessor}.parent_bone`, value)
    }

    /**
     * Type of parent relation
     * @desc enum in ['OBJECT', 'ARMATURE', 'LATTICE', 'VERTEX', 'VERTEX_3', 'BONE'], default 'OBJECT'
     */
    public set parent_type(value: 'OBJECT' | 'ARMATURE' | 'LATTICE' | 'VERTEX' | 'VERTEX_3' | 'BONE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.parent_type`, value)
    }

    /**
     * Indices of vertices in case of a vertex parenting relation
     * @desc int array of 3 items in [0, inf], default (0, 0, 0)
     */
    public set parent_vertices(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.parent_vertices`, value)
    }

    /**
     * Index number for the “Object Index” render pass
     * @desc int in [0, 32767], default 0
     */
    public set pass_index(value: number) {
        PythonInterop.setInteger(this.interop, `${this.accessor}.pass_index`, value)
    }

    /**
     * Action used as a pose library for armatures
     * @desc Action
     */
    public set pose_library(value: Action) {
        PythonInterop.setClass(this.interop, `${this.accessor}.pose_library`, value)
    }

    /**
     * Angle of Rotation for Axis-Angle rotation representation
     * @desc float array of 4 items in [-inf, inf], default (0.0, 0.0, 1.0, 0.0)
     */
    public set rotation_axis_angle(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_axis_angle`, value)
    }

    /**
     * Rotation in Eulers
     * @desc float array of 3 items in [-inf, inf], default (0.0, 0.0, 0.0)
     */
    public set rotation_euler(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_euler`, value)
    }

    /**
     * 
     * @desc enum in ['QUATERNION', 'XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX', 'AXIS_ANGLE'], default 'XYZ'
     */
    public set rotation_mode(value: 'QUATERNION' | 'XYZ' | 'XZY' | 'YXZ' | 'YZX' | 'ZXY' | 'ZYX' | 'AXIS_ANGLE') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.rotation_mode`, value)
    }

    /**
     * Rotation in Quaternions
     * @desc float array of 4 items in [-inf, inf], default (1.0, 0.0, 0.0, 0.0)
     */
    public set rotation_quaternion(value: [number, number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.rotation_quaternion`, value)
    }

    /**
     * Scaling of the object
     * @desc float array of 3 items in [-inf, inf], default (1.0, 1.0, 1.0)
     */
    public set scale(value: [number, number, number]) {
        PythonInterop.setArray(this.interop, `${this.accessor}.scale`, value)
    }

    /**
     * Display all edges for mesh objects
     * @desc boolean, default False
     */
    public set show_all_edges(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_all_edges`, value)
    }

    /**
     * Display the object’s origin and axes
     * @desc boolean, default False
     */
    public set show_axis(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_axis`, value)
    }

    /**
     * Display the object’s bounds
     * @desc boolean, default False
     */
    public set show_bounds(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_bounds`, value)
    }

    /**
     * Only display the image when it is aligned with the view axis
     * @desc boolean, default False
     */
    public set show_empty_image_only_axis_aligned(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_empty_image_only_axis_aligned`, value)
    }

    /**
     * Display image in orthographic mode
     * @desc boolean, default False
     */
    public set show_empty_image_orthographic(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_empty_image_orthographic`, value)
    }

    /**
     * Display image in perspective mode
     * @desc boolean, default False
     */
    public set show_empty_image_perspective(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_empty_image_perspective`, value)
    }

    /**
     * Make the object draw in front of others
     * @desc boolean, default False
     */
    public set show_in_front(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_in_front`, value)
    }

    /**
     * Make instancer visible when rendering
     * @desc boolean, default True
     */
    public set show_instancer_for_render(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_instancer_for_render`, value)
    }

    /**
     * Make instancer visible in the viewport
     * @desc boolean, default True
     */
    public set show_instancer_for_viewport(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_instancer_for_viewport`, value)
    }

    /**
     * Display the object’s name
     * @desc boolean, default False
     */
    public set show_name(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_name`, value)
    }

    /**
     * Always show the current Shape for this Object
     * @desc boolean, default False
     */
    public set show_only_shape_key(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_only_shape_key`, value)
    }

    /**
     * Display the object’s texture space
     * @desc boolean, default False
     */
    public set show_texture_space(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_texture_space`, value)
    }

    /**
     * Display material transparency in the object
     * @desc boolean, default False
     */
    public set show_transparent(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_transparent`, value)
    }

    /**
     * Add the object’s wireframe over solid drawing
     * @desc boolean, default False
     */
    public set show_wire(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.show_wire`, value)
    }

    /**
     * Axis that points in ‘forward’ direction (applies to InstanceFrame when parent ‘Follow’ is enabled)
     * @desc enum in ['POS_X', 'POS_Y', 'POS_Z', 'NEG_X', 'NEG_Y', 'NEG_Z'], default 'POS_X'
     */
    public set track_axis(value: 'POS_X' | 'POS_Y' | 'POS_Z' | 'NEG_X' | 'NEG_Y' | 'NEG_Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.track_axis`, value)
    }

    /**
     * Axis that points in the upward direction (applies to InstanceFrame when parent ‘Follow’ is enabled)
     * @desc enum in ['X', 'Y', 'Z'], default 'X'
     */
    public set up_axis(value: 'X' | 'Y' | 'Z') {
        PythonInterop.setEnum(this.interop, `${this.accessor}.up_axis`, value)
    }

    /**
     * Use alpha blending instead of alpha test (can produce sorting artifacts)
     * @desc boolean, default False
     */
    public set use_empty_image_alpha(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_empty_image_alpha`, value)
    }

    /**
     * Scale instance based on face size
     * @desc boolean, default False
     */
    public set use_instance_faces_scale(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_instance_faces_scale`, value)
    }

    /**
     * Rotate instance according to vertex normal
     * @desc boolean, default False
     */
    public set use_instance_vertices_rotation(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_instance_vertices_rotation`, value)
    }

    /**
     * Apply shape keys in edit mode (for Meshes only)
     * @desc boolean, default False
     */
    public set use_shape_key_edit_mode(value: boolean) {
        PythonInterop.setBoolean(this.interop, `${this.accessor}.use_shape_key_edit_mode`, value)
    }

    /**
     * Test if the object is selected. The selection state is per view layer
     * @desc boolean
     */
    public select_get(options: { view_layer?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.select_get`, options)
    }

    /**
     * Select or deselect the object. The selection state is per view layer
     * @desc void
     */
    public select_set(options: { state?: boolean, view_layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.select_set`, options)
    }

    /**
     * Test if the object is hidden for viewport editing. This hiding state is per view layer
     * @desc boolean
     */
    public hide_get(options: { view_layer?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.hide_get`, options)
    }

    /**
     * Hide the object for viewport editing. This hiding state is per view layer
     * @desc void
     */
    public hide_set(options: { state?: boolean, view_layer?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.hide_set`, options)
    }

    /**
     * Test if the object is visible in the 3D viewport, taking into account all visibility settings
     * @desc boolean
     */
    public visible_get(options: { view_layer?: unknown, viewport?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.visible_get`, options)
    }

    /**
     * Test if object is masked in the view layer
     * @desc boolean
     */
    public holdout_get(options: { view_layer?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.holdout_get`, options)
    }

    /**
     * Test if object is set to contribute only indirectly (through shadows and reflections) in the view layer
     * @desc boolean
     */
    public indirect_only_get(options: { view_layer?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.indirect_only_get`, options)
    }

    /**
     * Get the local view state for this object
     * @desc boolean
     */
    public local_view_get(options: { viewport?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.local_view_get`, options)
    }

    /**
     * Set the local view state for this object
     * @desc void
     */
    public local_view_set(options: { viewport?: unknown, state?: boolean }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.local_view_set`, options)
    }

    /**
     * Check for local view and local collections for this viewport and object
     * @desc boolean
     */
    public visible_in_viewport_get(options: { viewport?: unknown }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.visible_in_viewport_get`, options)
    }

    /**
     * Convert (transform) the given matrix from one space to another
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf]
     */
    public convert_space(options: { pose_bone?: unknown, matrix?: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]], from_space?: 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL', to_space?: 'WORLD' | 'POSE' | 'LOCAL_WITH_PARENT' | 'LOCAL' }): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.callMultiDimensionalArray(this.interop, `${this.accessor}.convert_space`, options)
    }

    /**
     * Generate the camera projection matrix of this object (mostly useful for Camera and Light types)
     * @desc float multi-dimensional array of 4 * 4 items in [-inf, inf]
     */
    public calc_matrix_camera(options: { depsgraph?: unknown, x?: number, y?: number, scale_x?: number, scale_y?: number }): [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]] {
        return PythonInterop.callMultiDimensionalArray(this.interop, `${this.accessor}.calc_matrix_camera`, options)
    }

    /**
     * Compute the coordinate (and scale for ortho cameras) given object should be to ‘see’ all given coordinates
     * @desc void
     */
    public camera_fit_coords(options: { depsgraph?: unknown, coordinates?: [number] }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.camera_fit_coords`, options)
    }

    /**
     * Create a Mesh data-block from the current state of the object. The object owns the data-block. To force free it use to_mesh_clear(). The result is temporary and can not be used by objects from the main database
     * @desc Mesh
     */
    public to_mesh(options: { preserve_all_data_layers?: boolean, depsgraph?: unknown }): Mesh {
        return PythonInterop.callClass(this.interop, `${this.accessor}.to_mesh`, options, Mesh)
    }

    /**
     * Clears mesh data-block created by to_mesh()
     * @desc void
     */
    public to_mesh_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.to_mesh_clear`, {})
    }

    /**
     * Find armature influencing this object as a parent or via a modifier
     * @desc Object
     */
    public find_armature(): BlenderObject {
        return PythonInterop.callClass(this.interop, `${this.accessor}.find_armature`, {}, BlenderObject)
    }

    /**
     * Add shape key to this object
     * @desc ShapeKey
     */
    public shape_key_add(options: { name?: string, from_mix?: boolean }): ShapeKey {
        return PythonInterop.callClass(this.interop, `${this.accessor}.shape_key_add`, options, ShapeKey)
    }

    /**
     * Remove a Shape Key from this object
     * @desc void
     */
    public shape_key_remove(options: { key?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_remove`, options)
    }

    /**
     * Remove all Shape Keys from this object
     * @desc void
     */
    public shape_key_clear(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.shape_key_clear`, {})
    }

    /**
     * Cast a ray onto evaluated geometry, in object space (using context’s or provided depsgraph to get evaluated mesh if needed)
     * @desc void
     */
    public ray_cast(options: { origin?: [number, number, number], direction?: [number, number, number], distance?: number, depsgraph?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.ray_cast`, options)
    }

    /**
     * Find the nearest point on evaluated geometry, in object space (using context’s or provided depsgraph to get evaluated mesh if needed)
     * @desc void
     */
    public closest_point_on_mesh(options: { origin?: [number, number, number], distance?: number, depsgraph?: unknown }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.closest_point_on_mesh`, options)
    }

    /**
     * Determine if this object is modified from the base mesh data
     * @desc boolean
     */
    public is_modified(options: { scene?: unknown, settings?: 'PREVIEW' | 'RENDER' }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_modified`, options)
    }

    /**
     * Determine if this object is modified by a deformation from the base mesh data
     * @desc boolean
     */
    public is_deform_modified(options: { scene?: unknown, settings?: 'PREVIEW' | 'RENDER' }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.is_deform_modified`, options)
    }

    /**
     * Returns a string for original/evaluated mesh data (debug builds only, using context’s or provided depsgraph to get evaluated mesh if needed)
     * @desc string, (never None)
     */
    public dm_info(options: { type?: 'SOURCE' | 'DEFORM' | 'FINAL', depsgraph?: unknown }): string {
        return PythonInterop.callString(this.interop, `${this.accessor}.dm_info`, options)
    }

    /**
     * Load the objects edit-mode data into the object data
     * @desc boolean
     */
    public update_from_editmode(): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.update_from_editmode`, {})
    }

    /**
     * Release memory used by caches associated with this object. Intended to be used by render engines only
     * @desc void
     */
    public cache_release(): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.cache_release`, {})
    }

    /**
     * Convert a curve object to grease pencil strokes.
     * @desc boolean
     */
    public generate_gpencil_strokes(options: { ob_gpencil?: unknown, gpencil_lines?: boolean, use_collections?: boolean }): boolean {
        return PythonInterop.callBoolean(this.interop, `${this.accessor}.generate_gpencil_strokes`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
