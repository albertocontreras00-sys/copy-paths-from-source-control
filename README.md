# Copy Paths from Source Control

Copy one or more file paths directly from VS Code's Source Control panel.

![Copy Paths from Source Control demo](images/demo.gif)

## Features

- Copy full paths for one or more selected files in Source Control
- Copy workspace-relative paths for one or more selected files
- Works from the Source Control context menu on SCM resource items

## Usage

1. Open the Source Control view in VS Code.
2. Select one or more changed files.
3. Right-click the selection.
4. Choose one of:
   - `Copy Selected Paths`
   - `Copy Selected Relative Paths`

Copied paths are written to the clipboard as newline-separated text.

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
