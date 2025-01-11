# React Router Dom Unexpected Navigation with Nested Routes
This repository demonstrates a common issue encountered when using nested routes and relative paths within the Link component of React Router Dom.  The issue leads to unexpected navigation behavior, often manifesting as an infinite redirect loop.

## Problem
The provided code uses relative paths within Link components.  When navigating to a nested route, the relative path is resolved relative to the current route, leading to incorrect navigation.

## Solution
The solution involves using absolute paths or the `useNavigate` hook to ensure correct navigation regardless of the current route.