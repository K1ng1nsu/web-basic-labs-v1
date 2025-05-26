// [Promise 체이닝: 콜백 지옥 구조 해소]
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "윤유저" }), 500);
  });
}
function getPostsByUser(user) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve([`${user.name}의 게시글1`, `${user.name}의 게시글2`]),
      500
    );
  });
}
function getCommentsByPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([`${post}에 댓글1`, `${post}에 댓글2`]), 500);
  });
}

// then 체이닝으로 순차 처리
getUser(1)
  .then((user) => getPostsByUser(user))
  .then((posts) => getCommentsByPost(posts[0]))
  .then((comments) => {
    console.log("Promise 체이닝 결과:", comments);
  })
  .catch((err) => {
    console.error("에러:", err);
  });
