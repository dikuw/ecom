import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import 'dotenv/config';
import { Product } from './schemas/Product';
import { User } from './schemas/User';


const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add in initial roles
  }
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    //  TODO: add data seeding
  },
  lists: createSchema({
    //  schema items go here
    User,
    Product,
  }),
  ui: {
    //  TODO: change this for roles
    isAccessAllowed: ({ session }) => {
      return session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}));