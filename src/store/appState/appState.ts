import { postsData } from "../../type"

export interface appStateInitialDataType {
  posts: postsData[]
}

export const appStateInitialData: appStateInitialDataType = {
  posts: []
}
