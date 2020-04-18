
export async function clean() {
    await folder('target').delete().exec()
}

export async function spec() {
    await file('target/spec/worker.js').create().exec()
    await file('target/spec/index.js').create().exec()
    await shell('tsc-bundle src/worker/tsconfig.json --outFile target/spec/worker.js').exec()
    await shell('tsc-bundle spec/tsconfig.json --outFile target/spec/index.js').exec()
    await shell('cd target/spec && mocha index.js').exec()
}

// generates blender source files from documentation
export async function generate(full) {
    const option = full ? '--full' : ''
    await file('target/generate/index.js').create().exec()
    await shell('tsc-bundle generate/tsconfig.json --outFile target/generate/index.js').exec()
    await shell(`cd target/generate && node index.js ${option}`).exec()
}

// generates blender source files from documentation
export async function build() {
    await file('target/bin/index.js').create().exec()
    await shell('tsc --project src/tsconfig.json --outDir target/bin').exec()
}

// starts the example project in watch mode.
export async function example(example) {
    console.log('running', example)
    await file('target/example/example/index.js').create().exec()
    await file('target/example/example/render.js').create().exec()
    await file('target/example/example/scene.js').create().exec()
    await Promise.all([
        shell('tsc --project example/tsconfig.json --outDir target/example --watch').exec(),
        shell(`cd target/example && smoke-run {**,.}/*.js -x node example/${example}.js`).exec()
    ])
}