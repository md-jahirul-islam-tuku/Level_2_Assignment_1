# How Generics Build Reusable and Strictly Typed Code in TypeScript

## Introduction

One of TypeScript’s most powerful features is **Generics**.

Generics allow developers to write reusable components, functions, and classes without losing type safety. Instead of creating separate logic for strings, numbers, or objects, generics help us write flexible code that works with any data type.

In this blog, we will learn:

- What generics are
- Why generics are useful
- How generics improve reusability
- How they maintain strict typing
- Real-world examples of generics

---

# What Are Generics?

Generics allow you to create code that works with multiple types while preserving type information.

Think of generics as:

> “A placeholder for a future type.”

---

# Problem Without Generics

Without generics, we often duplicate code.

Example:

```ts
function stringValue(value: string): string {
  return value;
}

function numberValue(value: number): number {
  return value;
}
```
