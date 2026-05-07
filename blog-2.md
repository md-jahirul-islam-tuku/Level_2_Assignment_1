# How do `Generics` allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

One of TypeScript’s most powerful features is `Generics`.

`Generics` allow developers to write reusable components, functions, and classes without losing type safety. Instead of creating separate logic for strings, numbers, or objects, `generics` help us write flexible code that works with any data type.

In this blog, we will learn:

- What `generics` are?
- Why `generics` are useful?
- How `generics` improve reusability?
- How they maintain strict typing?
- Real-world examples of `generics`

## What Are `Generics`?

`Generics` allow us to create code that works with multiple types while preserving type information.

Think of `generics` as:

> “A placeholder for a future type.”

## Problem Without `Generics`

Without `generics`, we often duplicate code.

Example:

```ts
function stringValue(value: string): string {
  return value;
}

function numberValue(value: number): number {
  return value;
}
```

## Solving the Problem with `Generics`

```ts
function identity<T>(value: T): T {
  return value;
}
```

Here:

- T is a generic type parameter
- The function works with any type
- TypeScript automatically infers the type

Usage:

```ts
identity<string>("Hello");
identity<number>(100);
```

## `Generics` Are Powerful

`Generics` provide:

- Reusability
- Flexibility
- Strong type safety
- Better autocomplete support
- Cleaner code

### `Generic` Arrays Example

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

### `Generic` Interfaces

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

### `Generic` Classes

```ts
class Storage<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}
```

### `Generics` with Multiple Types

```ts
function pair<K, V>(key: K, value: V) {
  return { key, value };
}
```

### Real-World Example:

```ts
type Props<T> = {
  items: T[];
  renderItem: (item: T) => string;
};

function List<T>({ items, renderItem }: Props<T>) {
  return (
    <>
      {items.map(renderItem)}
    </>
  );
}
```

## Conclusion

`Generics` are one of the most important features in TypeScript because they combine:

- Flexibility
- Reusability
- Strong typing

They allow developers to write reusable logic without sacrificing type safety. From utility functions to APIs and React components, `Generics` make TypeScript applications cleaner, scalable, and easier to maintain.

Mastering `Generics` is a major step toward becoming an advanced TypeScript developer.

## 👨‍💻 Author

### Md Jahirul Islam Tuku

Student, Programming Hero, Level-2, Batch-7

**Location:** Madinah, KSA
