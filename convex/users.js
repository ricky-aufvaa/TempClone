import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    uid: v.string()
  },
  handler: async (ctx, args) => {
    //if user is already present(verify)
    const user = await ctx.db.query("users").filter((q)=>q.eq(q.field('name'),args.name)).collect()
    console.log("user pehle se tha",user)

    //if user is new
    if(user?.length==0){
    const result= await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      picture: args.picture,
      uid: args.uid,
    });
    console.log("this is a new user",result)
  }
  },
});
