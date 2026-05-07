# How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code **DRY** (Don't Repeat Yourself).

## Introduction

As TypeScript applications grow, developers often work with large interfaces that represent complete data models. However, not every part of an application needs all properties from a master interface.

For example:

- A registration form may only need `name` and `email`
- An admin panel may need every field
- A public profile may exclude sensitive data like passwords

Creating separate interfaces manually for every scenario leads to:

- Code duplication
- Maintenance issues
- Inconsistent types

This is where TypeScript utility types like `Pick` and `Omit` become extremely powerful.

In this blog, we will explore:

- What `Pick` and `Omit` are?
- How they create specialized slices of interfaces?
- How they reduce duplication?
- How they help maintain DRY (Don't Repeat Yourself) principles?

## The Problem Without `Pick` and `Omit`

Suppose we have a master interface:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

This duplicates code. The bigger problem appears later: If the `User` interface changes, developers must update every duplicated interface manually.

This violates the **DRY** principle.

## What is DRY?

DRY means:

> “Don't Repeat Yourself”

The goal is to avoid repeating the same logic or structure multiple times.

Benefits of DRY code:

- Easier maintenance
- Fewer bugs
- Better scalability
- Cleaner architecture

TypeScript utility types help achieve this.

## Understanding `Pick`

`Pick` creates a new type by selecting specific properties from an existing interface.

Syntax

```ts
Pick<Type, Keys>;
```

Example of `Pick`

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

type LoginUser = Pick<User, "email" | "password">;
```

Result:

```ts
type LoginUser = {
  email: string;
  password: string;
};
```

## Real-World Use Case of `Pick`

Registration Form

```ts
type RegisterUser = Pick<User, "name" | "email" | "password">;
```

User Card Component

```ts
type UserCard = Pick<User, "id" | "name" | "role">;
```

Each type becomes a small specialized slice of the original interface.

## Understanding `Omit`

`Omit` does the opposite. It creates a new type by removing specific properties.

Syntax

```ts
Omit<Type, Keys>;
```

Example of `Omit`

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

type PublicUser = Omit<User, "password">;
```

Result:

```ts
type PublicUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};
```

## Real-World Use Case of `Omit`

Removing Sensitive Information

```ts
type SafeUser = Omit<User, "password">;
```

Creating Editable Forms

```ts
type UpdateUser = Omit<User, "id">;
```

## How `Pick` and `Omit` Prevent Code Duplication

Without utility types:

```ts
interface UserSummary {
  id: number;
  name: string;
  email: string;
}
```

With utility types:

```ts
type UserSummary = Pick<User, "id" | "name" | "email">;
```

## Why This Matters in Large Projects

In large applications:

- Interfaces may contain dozens of properties
- Multiple teams may reuse the same models
- APIs and forms often need partial data structures

Using `Pick` and `Omit` ensures consistency across the entire application.

## Combining `Pick` and `Omit`

You can even combine them.

```ts
type AdminPreview = Pick<Omit<User, "password">, "id" | "name" | "role">;
```

## Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help developers create specialized slices of a master interface without rewriting code.

They:

- Reduce duplication
- Improve maintainability
- Keep applications scalable
- Enforce the DRY principle
- Ensure consistent typing across the project

In modern TypeScript development, mastering Pick and Omit leads to cleaner, safer, and more maintainable codebases.

## 👨‍💻 Author

### Md Jahirul Islam Tuku

Student, Programming Hero, Level-2, Batch-7
**Location:** Madinah, KSA
