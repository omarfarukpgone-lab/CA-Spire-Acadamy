# Security Specification for CAspire Academy

## Data Invariants
1. A user cannot modify another user's profile.
2. Only Admins can create or modify Subjects, MCQs, Mock Tests, Notes, and Blog Posts.
3. Students can only read Subjects, MCQs (if logged in), Notes, and Mock Tests.
4. Students can only read and create their own Submissions. They cannot delete or modify existing submissions.
5. `createdAt` fields are immutable and must match the server timestamp.
6. User `role` can only be set or changed by authenticated admins.

## The Dirty Dozen Payloads (Targeted For Denial)
1. **User Profile Hijack**: Authenticated User A attempting to update User B's institute: `update /users/userB { institute: 'New I' }` -> DENIED.
2. **Role Escalation**: User A attempting to set themselves as admin: `update /users/userA { role: 'admin' }` -> DENIED.
3. **Bogus MCQ**: Non-admin attempting to create an MCQ: `create /subjects/acc/mcqs/m1 { question: 'Fake' }` -> DENIED.
4. **Submission Forgery**: User A attempting to create a submission for User B: `create /submissions/s1 { userId: 'userB' }` -> DENIED.
5. **Score Injection**: User A attempting to update their own submission score after creation: `update /submissions/s1 { score: 100 }` -> DENIED.
6. **Large ID Poisoning**: Attempting to create a subject with a 1MB string as ID: `create /subjects/[1MB_STRING] { ... }` -> DENIED.
7. **Junk Field**: Creating a user with a `hack: true` field: `create /users/u1 { uid: 'u1', ..., hack: true }` -> DENIED.
8. **Negative Score**: Creating a submission with `score: -10`: `create /submissions/s1 { score: -10 }` -> DENIED.
9. **Past Timestamp**: Creating a blog post with `createdAt: 2020-01-01`: `create /blogPosts/p1 { createdAt: '2020-01-01' }` -> DENIED.
10. **Public MCQ Access**: Unauthenticated user attempting to list MCQs: `list /subjects/acc/mcqs` -> DENIED.
11. **Admin Mock Deletion**: Non-admin attempting to delete a mock test: `delete /mockTests/t1` -> DENIED.
12. **Submission Identity Swap**: User A creating a submission but setting `userId` as User A, then trying to change it to User B. -> DENIED.

## Test Runner
Testing will be performed via manual verification simulations and unit tests in the final implementation phase.
