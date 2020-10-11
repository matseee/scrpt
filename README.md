# scrpt &middot; [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/matseee/scrpt/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/scrpt.svg)](https://www.npmjs.com/package/scrpt)
my nodejs based script collection.

### `gcommit "message"`
- creates a git commit
- creates message by a specfic pattern:

|branch-name|git commit-message|
|---|---|
|`feat/branch-name`| `feat(branch-name): message` |
|`change/branch-name`| `change(branch-name): message` |
|`bugfix/branch-name`| `fix(branch-name): message` |
|`devop/branch-name`| `devop(branch-name): message` |
