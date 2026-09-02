---
name: React image priority attributes
description: Compatibility note for image loading attributes in React 18.
---

When a browser image attribute is not represented by the installed React 18 DOM typings, use the exact lowercase HTML attribute through a JSX spread object instead of forcing a camelCase React prop.

**Why:** React 18 warns when it receives `fetchPriority`, while its TypeScript DOM typings reject the lowercase `fetchpriority` JSX attribute directly.

**How to apply:** For above-the-fold images that need an explicit browser priority, preserve the lowercase attribute name and pass it with `{...{ fetchpriority: "high" }}`.