import { createAuth } from "@keystone-6/auth";
import { statelessSessions } from "@keystone-6/core/session";
import { permissionsList } from "./schema/fields";

const sessionSecret =
  process.env.SESSION_SECERT ||
  "iLqbHhm7qwiBNc8KgL4NQ8tD8fFVhNhNqZ2nRdprgnKNjgJHgvitWx6DPoZJpYHa";

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "name",
  secretField: "password",
  // Additional options
  sessionData: `id name email role { ${permissionsList.join(' ')} }`,
  initFirstItem: {
    fields: ["name", "email", "password"],
    //TODO: Add in initial roles here
    // itemData: { isAdmin: true },
    skipKeystoneWelcome: false,
  },
  passwordResetLink: {
    sendToken: async ({ itemId, identity, token, context }) => {
      /* ... */
    },
    tokensValidForMins: 60,
  },
  magicAuthLink: {
    sendToken: async ({ itemId, identity, token, context }) => {
      /* ... */
    },
    tokensValidForMins: 60,
  },
});

export { withAuth, session };
