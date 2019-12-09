*Query to update topic field*

mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

*Associated query variables*

{
  "id": 1,
  "topic": "JavaScript"
}