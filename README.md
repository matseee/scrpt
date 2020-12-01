# scrpt &middot; [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/matseee/scrpt/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/scrpt.svg)](https://www.npmjs.com/package/scrpt)
my nodejs based script collection.

- [`gcommit`](#gcommit "message")

## gcommit

```shell
 ██████╗  ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗████████╗
██╔════╝ ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║╚══██╔══╝
██║  ███╗██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║   
██║   ██║██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║   
╚██████╔╝╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║   ██║   
 ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   
                                                            
  Usage: gcommit [options] [command] <commit-message>
  
  Commands:
    help     Display help
    version  Display version
  
  Options:
    -a, --all      Stage all files
    -h, --help     Output usage information
    -v, --version  Output the version number
```

- creates a git commit
- creates message by a specfic pattern:

| branch-name                                 | git commit-message                  |
| ------------------------------------------- | ----------------------------------- |
| `feature/branch-name` or `feat/branch-name` | `feat(branch-name): message`        |
| `change/branch-name`                        | `change(branch-name): message`      |
| `bugfix/branch-name` or `fix/branch-name`   | `fix(branch-name): message`         |
| `devop/branch-name`                         | `devop(branch-name): message`       |
| `release/release-no`                        | `release(release-no): message`      |
| `refactoring/branch-name`                   | `refactoring(branch-name): message` |
