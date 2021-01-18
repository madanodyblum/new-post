import { gql } from "apollo-server";

const tags = gql`
  input TagInput {
    imgPath: String,
    title: String!
  }
  input TagSearchInput {
      count: Int,
      skip: Int,
      title: String,
      entityFilterType: Int
  }
   type Tags {
    title: String!,
    imgPath: String,
    createdAt: Date,
    updatedAt: Date,
   }
   type Query {
     tagsFilter(tagSearch:TagSearchInput)
     getPopularTags(tagSearch:TagSearchInput)
     tags: [Tags!]!
   }
   type Mutation {
       addTag(tag:TagInput)
   }
`;

export default tags;
