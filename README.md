# Copy Paths from Source Control

Copy full or relative file paths for multiple selected files directly from VS Code's Source Control panel.

![Copy Paths from Source Control demo](images/demo_vs.gif)

## Features

- Copy full paths for one or more selected files in Source Control
- Copy relative paths for one or more selected files in Source Control
- Works from the Git/SCM Source Control context menu in VS Code

## Usage

1. Open the Source Control view in VS Code.
2. Select one or more changed Git or SCM files.
3. Right-click the selection.
4. Choose one of:
   - `Copy Selected Paths`
   - `Copy Selected Relative Paths`

Copied file paths are written to the clipboard as newline-separated text.

## What This Extension Is For

This extension is for developers who want to copy multiple file paths from the VS Code Source Control panel at once. It is useful when working with Git changes, SCM file selections, code review workflows, terminal commands, and commit-related file lists.

## Commands

- `Copy Selected Paths`
- `Copy Selected Relative Paths`

## Notes

VS Code passes selected SCM resources to commands invoked from the Source Control context menu, but not from a plain keybinding in a way that is reliable for this workflow. This extension intentionally ships without a default `Ctrl+C` or `Cmd+C` binding.

## Development

1. Open this folder in VS Code.
2. Press `F5`.
3. In the Extension Development Host, open a repository with changes in Source Control.
4. Select changed files and test the context menu commands.

## License

MIT
