---
name: Imported dependency lockfile
description: Why dependency setup must preserve the imported package versions.
---

Preserve the imported dependency manifests and lockfile during routine environment setup unless an upgrade is explicitly required.

**Why:** Installing every declared package as a fresh package list can widen the change into unrelated version upgrades even when the existing lockfile is valid.

**How to apply:** Prefer a lockfile-preserving installation path for setup work, and review manifest and lockfile diffs before completion.