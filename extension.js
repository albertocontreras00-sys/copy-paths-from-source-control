const vscode = require('vscode');
const path = require('path');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('scmCopyPaths.copySelectedPaths', (...args) => {
      return copyPaths(args, { relative: false });
    }),
    vscode.commands.registerCommand('scmCopyPaths.copySelectedRelativePaths', (...args) => {
      return copyPaths(args, { relative: true });
    })
  );
}

function deactivate() {}

function extractUris(input) {
  const uris = [];
  const seen = new Set();

  function addUri(candidate) {
    if (!candidate) return;

    if (candidate instanceof vscode.Uri) {
      const key = candidate.toString();
      if (!seen.has(key)) {
        seen.add(key);
        uris.push(candidate);
      }
      return;
    }

    if (Array.isArray(candidate)) {
      for (const item of candidate) addUri(item);
      return;
    }

    if (typeof candidate === 'object') {
      if (candidate.resourceUri) addUri(candidate.resourceUri);
      if (candidate.sourceUri) addUri(candidate.sourceUri);
      if (candidate.uri) addUri(candidate.uri);
      if (candidate.original) addUri(candidate.original);
      if (candidate.modified) addUri(candidate.modified);
      return;
    }
  }

  addUri(input);
  return uris;
}

function toRelative(fsPath) {
  const folders = vscode.workspace.workspaceFolders || [];
  for (const folder of folders) {
    const rootPath = folder.uri.fsPath;
    const relativePath = path.relative(rootPath, fsPath);
    if (relativePath && !relativePath.startsWith('..') && !path.isAbsolute(relativePath)) {
      return relativePath;
    }
    if (relativePath === '') {
      return '.';
    }
  }
  return fsPath;
}

async function copyPaths(args, options) {
  let uris = extractUris(args);

  if (!uris.length) {
    vscode.window.showWarningMessage(
      'No SCM resources were provided to copy. Use the Source Control context menu on a file selection.'
    );
    return;
  }

  const lines = uris.map((uri) => {
    const fsPath = uri.fsPath;
    return options.relative ? toRelative(fsPath) : fsPath;
  });

  const text = lines.join('\n');
  await vscode.env.clipboard.writeText(text);

  const label = options.relative ? 'relative path' : 'path';
  const suffix = lines.length === 1 ? '' : 's';
  vscode.window.showInformationMessage(`Copied ${lines.length} ${label}${suffix} from Source Control.`);
}

module.exports = {
  activate,
  deactivate
};
