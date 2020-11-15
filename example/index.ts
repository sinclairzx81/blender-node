import { Blender } from '../src/index'



interface PyData {
    vertices: ([number, number, number])[],
    edges: ([number, number])[],
    faces: any[]
}
export function pydata(count: number): PyData {
    const vertices: ([number, number, number])[] = []
    for(let i = 0; i < count; i++) {
        const x = ((Math.random() * 100) - 50) | 0
        const y = ((Math.random() * 100) - 50) | 0
        const z = ((Math.random() * 100) - 50) | 0
        vertices.push([x, y, z])
    }
    const edges: ([number, number])[] = []
    for(let i = 0; i < count; i++) {
        const from = i
        const to = (i + 1) % count
        edges.push([from, to])
    }
    return { vertices, edges, faces: [] } as PyData
}

// todo: write scripts