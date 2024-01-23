

import { cast, flow, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    user: types.frozen()
  })
  .views((self) => ({
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    login: flow(function* (body: any) {
       self.user = {
        id: "123",
        name: "admin"
       }
    }),
    logout: flow(function* () {
      self.user = undefined
   }),

  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshotOut extends SnapshotOut<typeof AuthStoreModel> {}
export interface AuthStoreSnapshotIn extends SnapshotIn<typeof AuthStoreModel> {}
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})
