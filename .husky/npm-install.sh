#!/usr/bin/env sh
# Run `npm install` when package-lock.json changes via git operation
changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"
echo "$changed_files" | grep --quiet "package-lock.json" && npm install || exit 0