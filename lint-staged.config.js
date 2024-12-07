export default {
    "**/*.php*": [
        "vendor/bin/duster fix"
    ],
    'resources/*': 'prettier --write --ignore-unknown'
}
