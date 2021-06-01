# Without tsconfig.json

$ npx tsc index.ts
index.ts:5:15 - error TS2349: This expression is not callable.
  Type 'typeof import("/Users/umireon/git/umireon/atlassian-connect-express-esModuleInterop/node_modules/atlassian-connect-express/types/index")' has no call signatures.

5 const addon = ace(app);
                ~~~


Found 1 error.
