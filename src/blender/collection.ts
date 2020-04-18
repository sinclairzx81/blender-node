import { BlenderInterop } from '../worker/interop'
import { PythonInterop } from '../python/interop'

export type Constructor<T> = new (interop: BlenderInterop, accessor: string) => T

export interface Indexable<T> {
    [key: string]: T
}

/**
 * BlenderCollection
 * 
 * This class provides a specific implementation for the bpy_prop_collection class. It
 * provides the same interface as bpy_prop_collection, but also allows for indexing
 * into items within the collection (as per Python).
 */
export class BlenderCollection<T> {
    constructor(private interop: BlenderInterop, private accessor: string, private constructor: Constructor<T>) { }


    /** Returns an iterator to this collections items. */
    public *[Symbol.iterator](): IterableIterator<T> {
        for(const value of this.values()) {
            yield value
        }
    }

    /** Returns the length of this collection. */
    public get length(): number {
        const result = this.interop.execute(`len(${this.accessor})`)
        return PythonInterop.decodeInteger(result)
    }

    /**
     * Returns the index of a key in a collection or -1 when not found(matches Python’s string find function of the same name).
     * @desc int
     */
    public find(key: string): number {
        const result = this.interop.execute(`${this.accessor}.find(${key})`)
        return PythonInterop.decodeInteger(result)
    }

    /**
     * This is a function to give fast access to attributes within a collection.
     * @desc void
     */
    public foreach_get(): void {
        throw new Error('not implemented')
    }

    /**
     * This is a function to give fast access to attributes within a collection.
     * @desc void
     */
    public foreach_set(): void {
        throw new Error('not implemented')
    }

    /**
     * Returns the value of the item assigned to key or default when not found(matches Python’s dictionary function of the same name).
     * @desc void
     */
    public get(key: string): T {
        const command = isNaN(key as any)
        ? `${this.accessor}.get("${key}")`
        : `${this.accessor}[${key}]`
        const ref = this.interop.execute(`${command}`)
        return new this.constructor(this.interop, ref)
    }

    /**
     * Return the identifiers of collection members(matching Python’s dict.items() functionality).
     * @desc list of tuples
     */
    public items(): ([string | number, T])[] {
        const keys = this.keys()
        return (keys.length === 0)
            ? this.values().map((value, index) => [index, value])
            : keys.map(key => [key, this.get(key)])
    }

    /**
     * Return the identifiers of collection members(matching Python’s dict.keys() functionality).
     * @desc list of strings
     */
    public keys(): string[] {
        const result = this.interop.execute(`${this.accessor}.keys()`)
        return PythonInterop.decodeArray(result)
    }

    /**
     * Return the values of collection(matching Python’s dict.values() functionality).
     * @desc list
     */
    public values(): T[] {
        const keys = this.keys()
        if(keys.length === 0) {
            // If the collection is an array collection (i.e. vertices)
            // there will be no keys. If this is the case, we need to
            // try and resolve from values returned from blender. The
            // call to decodeArray() should be replaced with a 
            // specialized decoder as the values returned here are 
            // likely bpy references.
            const result = this.interop.execute(`${this.accessor}.values()`)
            const array = PythonInterop.decodeArray(result)
            return array.map((accessor: string) => new this.constructor(this.interop, accessor))
        } else {
            return keys.map(key => this.get(key))
        }
    }

    /** Creates a generic collection that matches 'bpy_prop_collection of Item' */
    public static createGeneric<T>(interop: BlenderInterop, accessor: string, item_constructor: Constructor<T>): BlenderCollection<T> & Indexable<T> {
        const collection = new BlenderCollection<T>(interop, accessor, item_constructor) as any
        return new Proxy({} as any, {
            get: (_: any, key: string) => {
                if (collection[key] !== undefined) {
                    return collection[key]
                }
                return collection.get(key)
            }
        })
    }

    /** Creates a specialized collection that matches 'Specialized bpy_prop_collection of Item' */
    public static createSpecialized<S, T>(interop: BlenderInterop, accessor: string, specialized_constructor: Constructor<S>, item_constructor: Constructor<T>): BlenderCollection<T> & Indexable<T> & S {
        const specialized = new specialized_constructor(interop, accessor) as any
        const collection = new BlenderCollection<T>(interop, accessor, item_constructor) as any
        return new Proxy({} as any, {
            get: (_: any, key: any) => {
                if (collection[key] !== undefined) {
                    return collection[key]
                }
                if (specialized[key] !== undefined) {
                    return specialized[key]
                }
                return collection.get(key)
            }
        })
    }
}
