# scrpt &middot; [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/matseee/scrpt/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/scrpt.svg)](https://www.npmjs.com/package/scrpt)
my nodejs based script collection.

- [`gcommit`](#gcommit)
- [`gstatus`](#gstatus)
- [`ttr`](#ttr)

## gcommit

```shell
 ██████╗  ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗████████╗
██╔════╝ ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║╚══██╔══╝
██║  ███╗██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║   
██║   ██║██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║   
╚██████╔╝╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║   ██║   
 ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   
                                                            
  Usage: gcom [options] [command] <commit-message>
  
  Commands:
    help     Display help
    version  Display version
  
  Options:
    -a, --all      Stage all files
    -p, --push     Push to origin
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

## gstatus
```shelljs
 ██████╗ ███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
██╔════╝ ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
██║  ███╗███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
██║   ██║╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
╚██████╔╝███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
 ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝
                                                            
On branch feature/gstatus
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package-lock.json
        modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        bin/gstatus/

no changes added to commit (use "git add" and/or "git commit -a")
```
- just a wrapper for the command `git status`.

## ttr
```shelljs
████████╗████████╗██████╗ 
╚══██╔══╝╚══██╔══╝██╔══██╗
   ██║      ██║   ██████╔╝
   ██║      ██║   ██╔══██╗
   ██║      ██║   ██║  ██║
   ╚═╝      ╚═╝   ╚═╝  ╚═╝
                          
  Usage: ttr [options] [command] 
  
  Commands:
    end, e    Ends the active record
    list, l   Lists the records
    start, s  Starts a new record
    version   Display version
  
  Options:
    -h, --help     Display help
    -v, --version  Output the version number
```
```shelljs
...
  Usage: ttr list [options]  
  
  Options:
    -f, --from   From date
    -h, --help   Display help
    -u, --until  Until date
```
